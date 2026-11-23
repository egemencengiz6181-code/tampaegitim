// POST /api/admin/logout
// api/admin/logout.js'in Cloudflare Pages Functions portu.
import { send, handle } from '../../_lib/http.js'
import { clearCookie } from '../../_lib/auth.js'

export const onRequest = handle(async ({ request }) => {
  return send(200, { ok: true }, { 'Set-Cookie': clearCookie(request) })
})
