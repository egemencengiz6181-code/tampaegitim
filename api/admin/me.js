// GET /api/admin/me → oturum açık mı, depo türü (github/yerel)
import { send, handle } from '../_lib/http.js'
import { isAuthed } from '../_lib/auth.js'

export default handle(async (req, res) => {
  const configured = Boolean(process.env.ADMIN_PASSWORD)
  const authed = configured && isAuthed(req)
  send(res, 200, { authed, configured, storage: process.env.GITHUB_TOKEN ? 'github' : process.env.VERCEL ? 'missing' : 'local' })
})
