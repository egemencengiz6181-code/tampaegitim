// dist/ altındaki prerender çıktısını SEO açısından denetler.
import fs from 'node:fs'
import path from 'node:path'

const dist = path.resolve('dist')
const SITE = JSON.parse(fs.readFileSync('content/site.json', 'utf8')).url
const files = []
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
  const f = path.join(d, e.name)
  if (e.isDirectory()) { if (e.name !== 'assets' && e.name !== 'img') walk(f) } else if (e.name.endsWith('.html')) files.push(f)
})
walk(dist)

const routeOf = (f) => {
  const r = '/' + path.relative(dist, f).replace(/\.html$/, '').replace(/index$/, '')
  return r === '/' ? '/' : r.replace(/\/$/, '')
}
const pages = new Map(files.map((f) => [routeOf(f), fs.readFileSync(f, 'utf8')]))
const issues = []
const titles = new Map()
let links = 0

for (const [route, html] of pages) {
  if (route === '/404') continue
  const head = html.slice(0, html.indexOf('</head>'))
  const noindex = /name="robots" content="noindex/.test(head)
  const title = (head.match(/<title>([\s\S]*?)<\/title>/) || [])[1] ?? ''
  const desc = (head.match(/<meta name="description" content="([^"]*)"/) || [])[1] ?? ''
  const canon = (head.match(/<link rel="canonical" href="([^"]*)"/) || [])[1]
  const h1s = (html.match(/<h1[\s>]/g) || []).length
  const t = title.replace(/&amp;/g, '&')
  if (!title) issues.push(`${route}: title yok`)
  if (t.length > 70) issues.push(`${route}: title uzun (${t.length}) ${t}`)
  if (!desc) issues.push(`${route}: description yok`)
  if (desc.length < 70) issues.push(`${route}: description kısa (${desc.length})`)
  if (h1s !== 1 && route !== "/admin") issues.push(`${route}: h1 sayısı ${h1s}`)
  if (!noindex && canon !== `${SITE}${route === '/' ? '/' : route}`) issues.push(`${route}: canonical hatalı ${canon}`)
  if (!noindex) titles.set(t, [...(titles.get(t) ?? []), route])
  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = m[1].replace(/\/$/, '') || '/'
    if (/\.(png|jpg|svg|ico|css|js|xml|txt|webp)$/.test(href)) continue
    links++
    const legacy = ['/ornek-cv', '/universite-basvuru-rehberi']
    if (!pages.has(href) && !legacy.includes(href)) issues.push(`${route}: kırık iç link -> ${href}`)
  }
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\balt=/.test(m[0])) issues.push(`${route}: alt özniteliği olmayan görsel`)
}
for (const [t, rs] of titles) if (rs.length > 1) issues.push(`yinelenen title "${t}": ${rs.join(', ')}`)

const uniq = [...new Set(issues)]
console.log(`${pages.size} sayfa, ${links} iç link kontrol edildi, ${uniq.length} sorun`)
console.log(uniq.slice(0, 80).join('\n'))
