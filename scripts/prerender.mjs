// Build sonrası: her sayfayı statik HTML olarak dist/ altına yazar ve sitemap.xml üretir.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const SITE = 'https://tampaegitim.com.tr'
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, sitemapPaths } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href)

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

const pages = sitemapPaths()
let ok = 0
for (const pg of pages) {
  const res = await render(pg.path)
  if (res.redirect) continue
  // /blog -> dist/blog.html (Netlify, Vercel cleanUrls, GitHub Pages ve vite preview uzantısız servis eder)
  const file = pg.path === '/' ? path.join(dist, 'index.html') : path.join(dist, `${pg.path}.html`)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, assemble(res.html))
  ok++
}

// 404 sayfası
const nf = await render('/bu-sayfa-yok')
fs.writeFileSync(path.join(dist, '404.html'), assemble(nf.html))

// sitemap.xml
const today = new Date().toISOString().slice(0, 10)
const urls = pages
  .filter((p) => p.index)
  .map((p) => `  <url>\n    <loc>${SITE}${p.path === '/' ? '/' : p.path}</loc>\n    <lastmod>${p.lastmod ?? today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority.toFixed(1)}</priority>\n  </url>`)
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`)

// Barındırma yönlendirmeleri: eski WordPress adresleri (301) ve 404
const legacy = {
  '/universite-basvuru-rehberi': '/bilgi-bankasi/universite-basvuru-rehberi',
  '/ornek-cv': '/kaynaklar/ornek-cv',
  '/ornek-niyet-mektubu-2': '/kaynaklar/ornek-niyet-mektubu',
  '/ornek-muvaffakatname': '/kaynaklar/ornek-muvaffakatname',
  '/ornek-banka-mektubu': '/kaynaklar/ornek-banka-mektubu',
  '/ornek-sponsor-mektubu': '/kaynaklar/ornek-sponsor-mektubu',
  '/ornek-taahhutname': '/kaynaklar/ornek-taahhutname',
  '/lisans-programlari/': '/lisans-programlari',
  '/her-sey-dahil-paketler/': '/her-sey-dahil-paketler',
}
fs.writeFileSync(path.join(dist, '_redirects'), Object.entries(legacy).map(([a, b]) => `${a}  ${b}  301`).join('\n') + '\n/*  /404.html  404\n')

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`prerender: ${ok} sayfa, sitemap: ${urls.length} URL`)
