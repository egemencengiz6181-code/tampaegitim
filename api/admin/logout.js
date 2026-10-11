// POST /api/admin/logout
import { send, handle } from '../_lib/http.js'
import { clearCookie } from '../_lib/auth.js'

export default handle(async (_req, res) => {
  send(res, 200, { ok: true }, { 'Set-Cookie': clearCookie() })
})
