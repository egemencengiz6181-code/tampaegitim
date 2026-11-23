// POST /api/admin/login  { password }  → imzalı oturum çerezi
// api/admin/login.js'in Cloudflare Pages Functions portu.
import { send, readJson, handle, HttpError } from '../../_lib/http.js'
import { checkPassword, sessionCookie, guardLogin } from '../../_lib/auth.js'

export const onRequest = handle(async ({ request, env }) => {
  if (request.method !== 'POST') throw new HttpError(405, 'Yalnızca POST.')
  const guard = guardLogin(request)
  const { password } = await readJson(request, 10_000)
  if (!(await checkPassword(password, env))) {
    guard.fail()
    await new Promise((r) => setTimeout(r, 600))
    throw new HttpError(401, 'Şifre hatalı.')
  }
  guard.ok()
  return send(200, { ok: true }, { 'Set-Cookie': await sessionCookie(env, request) })
})
