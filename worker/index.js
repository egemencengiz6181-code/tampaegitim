// Cloudflare Workers giriş noktası: /api/* isteklerini functions/ altındaki işleyicilere yönlendirir,
// diğer tüm istekleri statik varlıklara (dist) bırakır. Pages Functions ile aynı işleyicileri paylaşır.
import { send } from '../functions/_lib/http.js'
import * as lead from '../functions/api/lead.js'
import * as login from '../functions/api/admin/login.js'
import * as logout from '../functions/api/admin/logout.js'
import * as me from '../functions/api/admin/me.js'
import * as posts from '../functions/api/admin/posts.js'
import * as status from '../functions/api/admin/status.js'

const ROUTES = new Map([
  ['/api/lead', lead.onRequest],
  ['/api/admin/login', login.onRequest],
  ['/api/admin/logout', logout.onRequest],
  ['/api/admin/me', me.onRequest],
  ['/api/admin/posts', posts.onRequest],
  ['/api/admin/status', status.onRequest],
])

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url)
    const handler = ROUTES.get(pathname.replace(/\/+$/, ''))
    if (handler) return handler({ request, env })
    if (pathname.startsWith('/api/')) return send(404, { error: 'Bulunamadı.' })
    return env.ASSETS.fetch(request)
  },
}
