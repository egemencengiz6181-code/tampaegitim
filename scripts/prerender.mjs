// Build sonrası: her sayfayı statik HTML olarak dist/ altına yazar ve sitemap.xml üretir.
import fs from 'node:fs'
import { contentHash } from './content-hash.mjs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const SITE = JSON.parse(fs.readFileSync(path.join(root, 'content/site.json'), 'utf8')).url
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, sitemapPaths, blogFeed, redirects, languageCityListMismatch, universityListMismatch, glossaryListMismatch, routingMismatch } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href)

// React 19 hoist edilen <title>/<meta>/<link> etiketlerini içerik başında üretir; bunları <head>'e taşırız.
const HOIST = /<(title)[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*rel="(?:canonical|alternate|preload)"[^>]*\/?>/g

function assemble(html) {
  const head = []
  const body = html.replace(HOIST, (m) => {
    head.push(m)
    return ''
  })
  // Şablondaki varsayılan <title>'ı kaldır
  let out = template.replace(/<title>[\s\S]*?<\/title>/, '')
  out = out.replace('</head>', `${head.join('\n    ')}\n  </head>`)
  out = out.replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  return out
}

// vercel.json yönlendirmeleri src/data/redirects.ts ile aynı olmalı (Vercel 301'i vercel.json'dan yapar)
const vercel = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'))
const vercelMap = new Map((vercel.redirects ?? []).map((r) => [r.source, r.destination]))
const missing = Object.entries(redirects).filter(([a, b]) => vercelMap.get(a) !== b)
if (missing.length) {
  console.error('vercel.json > redirects eksik/farklı:\n' + missing.map(([a, b]) => `  ${a} -> ${b}`).join('\n'))
  process.exit(1)
}

// Şehir sayfalarının hafif listesi (list.ts) ile tam içerik dosyaları aynı şehirleri içermeli
const cityMismatch = [...languageCityListMismatch(), ...universityListMismatch(), ...glossaryListMismatch(), ...routingMismatch()]
if (cityMismatch.length) {
  console.error('Hafif liste ile içerik dosyaları uyuşmuyor:\n' + cityMismatch.map((x) => `  ${x}`).join('\n'))
  process.exit(1)
}

// lastmod: sayfanın ana içeriği (<main>) değiştiğinde güncellenir. content/lastmod.json içerik
// özetini ve tarihi saklar; yerel build bu dosyayı günceller (değişikliklerle birlikte commit edin).
const MANIFEST = path.join(root, 'content/lastmod.json')
const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {}
const today = new Date().toISOString().slice(0, 10)
const feedAll = blogFeed()
const newestPost = feedAll.reduce((m, p) => (p.updated > m ? p.updated : m), '')
function lastmodFor(pg, h) {
  const prev = manifest[pg.path]
  if (prev?.h === h) return prev.d
  if (pg.lastmod) return pg.lastmod
  // Vercel'de (manifest güncellenmemişse): değişiklik admin panelinden gelen bir yazıdan kaynaklanıyorsa o yazının tarihi
  if (process.env.VERCEL && prev && newestPost > prev.d) return newestPost
  return today
}

const pages = sitemapPaths()
const nextManifest = {}
let ok = 0
for (const pg of pages) {
  const res = await render(pg.path)
  if (res.redirect) continue
  // /blog -> dist/blog.html (Netlify, Vercel cleanUrls, GitHub Pages ve vite preview uzantısız servis eder)
  const file = pg.path === '/' ? path.join(dist, 'index.html') : path.join(dist, `${pg.path}.html`)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  const out = assemble(res.html)
  fs.writeFileSync(file, out)
  if (pg.index) {
    const h = contentHash(out)
    pg.lastmod = lastmodFor(pg, h)
    nextManifest[pg.path] = { h, d: pg.lastmod }
  }
  ok++
}
fs.writeFileSync(MANIFEST, JSON.stringify(nextManifest, null, 1) + '\n')

// 404 sayfası
const nf = await render('/bu-sayfa-yok')
fs.writeFileSync(path.join(dist, '404.html'), assemble(nf.html))

// robots.txt (Sitemap satırı asıl adresten)
fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /lp/\nDisallow: /tesekkurler\nDisallow: /admin\nDisallow: /api/\n\nSitemap: ${SITE}/sitemap.xml\n`,
)

// sitemap.xml
const urls = pages
  .filter((p) => p.index)
  .map((p) => `  <url>\n    <loc>${SITE}${p.path === '/' ? '/' : p.path}</loc>\n    <lastmod>${p.lastmod ?? today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority.toFixed(1)}</priority>\n  </url>`)
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`)

// RSS beslemesi (blog): Google Discover, haber okuyucular ve hızlı keşif için
const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const feed = blogFeed()
const rfc = (d) => new Date(d + 'T09:00:00Z').toUTCString()
const items = feed
  .map(
    (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${p.slug}</guid>
      <pubDate>${rfc(p.date)}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${esc(p.description)}</description>
      <enclosure url="${SITE}${p.image}" type="image/jpeg" length="0" />
    </item>`,
  )
  .join('\n')
fs.writeFileSync(
  path.join(dist, 'rss.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Tampa Yurtdışı Eğitim Blog</title>
    <link>${SITE}/blog</link>
    <description>Yurt dışı eğitim, dil okulları, yaz okulları, üniversite ve vize rehberleri.</description>
    <language>tr-TR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`,
)

// Barındırma yönlendirmeleri (Netlify vb. için _redirects): 301 listesi ve 404
const legacy = {
  ...redirects,
  '/lisans-programlari/': '/lisans-programlari',
  '/her-sey-dahil-paketler/': '/her-sey-dahil-paketler',
}
fs.writeFileSync(path.join(dist, '_redirects'), Object.entries(legacy).map(([a, b]) => `${a}  ${b}  301`).join('\n') + '\n/*  /404.html  404\n')

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`prerender: ${ok} sayfa, sitemap: ${urls.length} URL, RSS: ${feed.length} yazı`)
