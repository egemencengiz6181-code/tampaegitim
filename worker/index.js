// Cloudflare Workers giriş noktası: /api/* isteklerini functions/ altındaki işleyicilere yönlendirir,
// diğer tüm istekleri statik varlıklara (dist) bırakır. Pages Functions ile aynı işleyicileri paylaşır.
// Not: _redirects ve _headers yalnızca Pages'te işlenir; Workers dağıtımında 301 yönlendirmeleri,
// /admin proxy'si ve özel başlıklar burada uygulanır. 301 listesi src/data/redirects.ts ile tektir.
import { send } from '../functions/_lib/http.js'
import * as lead from '../functions/api/lead.js'
import * as login from '../functions/api/admin/login.js'
import * as logout from '../functions/api/admin/logout.js'
import * as me from '../functions/api/admin/me.js'
import * as posts from '../functions/api/admin/posts.js'
import * as status from '../functions/api/admin/status.js'
import { redirects } from '../src/data/redirects.ts'

const ROUTES = new Map([
  ['/api/lead', lead.onRequest],
  ['/api/admin/login', login.onRequest],
  ['/api/admin/logout', logout.onRequest],
  ['/api/admin/me', me.onRequest],
  ['/api/admin/posts', posts.onRequest],
  ['/api/admin/status', status.onRequest],
])

const ADMIN_HEADERS = {
  'X-Robots-Tag': 'noindex, nofollow',
  'Cache-Control': 'no-store',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'same-origin',
}

const withHeaders = (res, headers) => {
  const out = new Response(res.body, res)
  for (const [k, v] of Object.entries(headers)) out.headers.set(k, v)
  return out
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const { pathname } = url

    // Kalıcı (301) yönlendirmeler; yol dışı sorgu dizesi korunur
    const target = redirects[pathname]
    if (target) return Response.redirect(url.origin + target + url.search, 301)
    // Sonda eğik çizgi: /x/ → /x (eski Vercel trailingSlash:false davranışı)
    if (pathname.length > 1 && pathname.endsWith('/')) {
      return Response.redirect(url.origin + pathname.replace(/\/+$/, '') + url.search, 301)
    }

    // /api/* → functions/ işleyicileri
    const handler = ROUTES.get(pathname.replace(/\/+$/, ''))
    if (handler) return handler({ request, env })
    if (pathname.startsWith('/api/')) return send(404, { error: 'Bulunamadı.' })

    // /admin alt yolları → admin.html (istemci tarafı yönlendirme), arama motorlarına kapalı
    if (pathname === '/admin' || pathname.startsWith('/admin/')) {
      const res = await env.ASSETS.fetch(new URL('/admin.html', url))
      return withHeaders(res, ADMIN_HEADERS)
    }

    // Diğer her şey statik varlıklardan (bilinmeyen adresler 404.html ile karşılanır)
    const res = await env.ASSETS.fetch(request)
    if (pathname === '/rss.xml') return withHeaders(res, { 'Content-Type': 'application/rss+xml; charset=utf-8' })
    return res
  },
}
