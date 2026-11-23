// GET /api/admin/me → oturum açık mı, depo türü (github/eksik)
// api/admin/me.js'in Cloudflare Pages Functions portu.
import { send, handle } from '../../_lib/http.js'
import { isAuthed } from '../../_lib/auth.js'

export const onRequest = handle(async ({ request, env }) => {
  const configured = Boolean(env.ADMIN_PASSWORD)
  const authed = configured && (await isAuthed(request, env))
  return send(200, { authed, configured, storage: env.GITHUB_TOKEN ? 'github' : 'missing' })
})
