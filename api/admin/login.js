// POST /api/admin/login  { password }  → imzalı oturum çerezi
import { send, readJson, handle, HttpError } from '../_lib/http.js'
import { checkPassword, sessionCookie, guardLogin } from '../_lib/auth.js'

export default handle(async (req, res) => {
  if (req.method !== 'POST') throw new HttpError(405, 'Yalnızca POST.')
  const guard = guardLogin(req)
  const { password } = await readJson(req, 10_000)
  if (!checkPassword(password)) {
    guard.fail()
    await new Promise((r) => setTimeout(r, 600))
    throw new HttpError(401, 'Şifre hatalı.')
  }
  guard.ok()
  send(res, 200, { ok: true }, { 'Set-Cookie': sessionCookie() })
})
