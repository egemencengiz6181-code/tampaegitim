// GET /api/admin/status → son kaydın yayın (Vercel dağıtım) durumu
import { send, handle } from '../_lib/http.js'
import { requireAuth } from '../_lib/auth.js'
import { getStore } from '../_lib/store.js'

export default handle(async (req, res) => {
  requireAuth(req)
  send(res, 200, await getStore().deployStatus())
})
