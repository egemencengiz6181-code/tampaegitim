// Tek kullanıcılı yönetici girişi: şifre ortam değişkeninde (ADMIN_PASSWORD), oturum imzalı HttpOnly çerezde.
// api/_lib/auth.js'in WebCrypto portu (Cloudflare Pages Functions); ortam değişkenleri env üzerinden gelir.
import { HttpError, clientIp } from './http.js'
import { b64urlEncode, b64urlDecode } from './bytes.js'

const COOKIE = 'tampa_admin'
const SESSION_HOURS = 12
const te = new TextEncoder()
const td = new TextDecoder()

function secret(env) {
  const s = env.ADMIN_SECRET || (env.ADMIN_PASSWORD ? `pw:${env.ADMIN_PASSWORD}:${env.GITHUB_TOKEN ?? ''}` : '')
  if (!s) throw new HttpError(503, 'Yönetim paneli henüz yapılandırılmadı (ADMIN_PASSWORD ortam değişkeni eksik).')
  return s
}

const hmacKey = (env) => crypto.subtle.importKey('raw', te.encode(secret(env)), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])

async function sign(data, env) {
  const sig = await crypto.subtle.sign('HMAC', await hmacKey(env), te.encode(data))
  return b64urlEncode(new Uint8Array(sig))
}

async function safeEqual(a, b) {
  const [x, y] = await Promise.all([crypto.subtle.digest('SHA-256', te.encode(String(a))), crypto.subtle.digest('SHA-256', te.encode(String(b)))])
  const u = new Uint8Array(x)
  const v = new Uint8Array(y)
  let diff = 0
  for (let i = 0; i < u.length; i++) diff |= u[i] ^ v[i]
  return diff === 0
}

export async function checkPassword(password, env) {
  const expected = env.ADMIN_PASSWORD
  if (!expected) throw new HttpError(503, 'Yönetim paneli henüz yapılandırılmadı (ADMIN_PASSWORD ortam değişkeni eksik).')
  return typeof password === 'string' && (await safeEqual(password, expected))
}

const secure = (request) => (new URL(request.url).protocol === 'https:' ? '; Secure' : '')

export async function sessionCookie(env, request) {
  const nonce = [...crypto.getRandomValues(new Uint8Array(8))].map((b) => b.toString(16).padStart(2, '0')).join('')
  const payload = b64urlEncode(te.encode(JSON.stringify({ exp: Date.now() + SESSION_HOURS * 3600_000, n: nonce })))
  const value = `${payload}.${await sign(payload, env)}`
  return `${COOKIE}=${value}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${SESSION_HOURS * 3600}${secure(request)}`
}

export const clearCookie = (request) => `${COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${secure(request)}`

function readCookie(request) {
  const raw = request.headers.get('cookie') ?? ''
  for (const part of raw.split(';')) {
    const [k, ...v] = part.trim().split('=')
    if (k === COOKIE) return v.join('=')
  }
  return null
}

export async function isAuthed(request, env) {
  const value = readCookie(request)
  if (!value) return false
  const dot = value.lastIndexOf('.')
  const payload = dot > 0 ? value.slice(0, dot) : ''
  const sig = dot > 0 ? value.slice(dot + 1) : ''
  if (!payload || !sig || !(await safeEqual(sig, await sign(payload, env)))) return false
  try {
    return JSON.parse(td.decode(b64urlDecode(payload))).exp > Date.now()
  } catch {
    return false
  }
}

/** Oturum zorunlu; değişiklik yapan isteklerde ayrıca CSRF başlığı aranır. */
export async function requireAuth(request, env) {
  if (!(await isAuthed(request, env))) throw new HttpError(401, 'Oturumunuzun süresi doldu. Lütfen tekrar giriş yapın.')
  if (request.method !== 'GET' && request.headers.get('x-admin-request') !== '1') throw new HttpError(403, 'Geçersiz istek.')
}

// Basit kaba kuvvet koruması: IP başına 15 dakikada 8 hatalı deneme (aynı yalıtım ortamı içinde).
const attempts = new Map()
export function guardLogin(request) {
  const ip = clientIp(request)
  const a = attempts.get(ip)
  if (a && a.until > Date.now() && a.count >= 8) throw new HttpError(429, 'Çok fazla hatalı deneme. 15 dakika sonra tekrar deneyin.')
  return {
    fail() {
      const cur = attempts.get(ip)
      attempts.set(ip, cur && cur.until > Date.now() ? { count: cur.count + 1, until: cur.until } : { count: 1, until: Date.now() + 15 * 60_000 })
    },
    ok() {
      attempts.delete(ip)
    },
  }
}
