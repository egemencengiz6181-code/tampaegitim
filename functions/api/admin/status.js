// GET /api/admin/status → son kaydın yayın (Cloudflare Pages dağıtımı) durumu
// api/admin/status.js'in Cloudflare Pages Functions portu.
import { send, handle } from '../../_lib/http.js'
import { requireAuth } from '../../_lib/auth.js'
import { getStore } from '../../_lib/store.js'

export const onRequest = handle(async ({ request, env }) => {
  await requireAuth(request, env)
  return send(200, await getStore(env).deployStatus())
})
