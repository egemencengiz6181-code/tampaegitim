// Tek kullanıcılı yönetici girişi: şifre ortam değişkeninde (ADMIN_PASSWORD), oturum imzalı HttpOnly çerezde.
import crypto from 'node:crypto'
import { HttpError, clientIp } from './http.js'

const COOKIE = 'tampa_admin'
const SESSION_HOURS = 12
const isProd = () => process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production'

function secret() {
  const s = process.env.ADMIN_SECRET || (process.env.ADMIN_PASSWORD ? `pw:${process.env.ADMIN_PASSWORD}:${process.env.GITHUB_TOKEN ?? ''}` : '')
  if (!s) throw new HttpError(503, 'Yönetim paneli henüz yapılandırılmadı (ADMIN_PASSWORD ortam değişkeni eksik).')
  return s
}

const b64url = (buf) => Buffer.from(buf).toString('base64url')
const sign = (data) => crypto.createHmac('sha256', secret()).update(data).digest('base64url')

function safeEqual(a, b) {
  const x = crypto.createHash('sha256').update(String(a)).digest()
  const y = crypto.createHash('sha256').update(String(b)).digest()
  return crypto.timingSafeEqual(x, y)
}

export function checkPassword(password) {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) throw new HttpError(503, 'Yönetim paneli henüz yapılandırılmadı (ADMIN_PASSWORD ortam değişkeni eksik).')
  return typeof password === 'string' && safeEqual(password, expected)
}

export function sessionCookie() {
  const payload = b64url(JSON.stringify({ exp: Date.now() + SESSION_HOURS * 3600_000, n: crypto.randomBytes(8).toString('hex') }))
  const value = `${payload}.${sign(payload)}`
  return `${COOKIE}=${value}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${SESSION_HOURS * 3600}${isProd() ? '; Secure' : ''}`
}

export const clearCookie = () => `${COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${isProd() ? '; Secure' : ''}`

function readCookie(req) {
  const raw = req.headers.cookie ?? ''
  for (const part of raw.split(';')) {
    const [k, ...v] = part.trim().split('=')
    if (k === COOKIE) return v.join('=')
  }
  return null
}

export function isAuthed(req) {
  const value = readCookie(req)
  if (!value) return false
  const [payload, sig] = value.split('.')
  if (!payload || !sig || !safeEqual(sig, sign(payload))) return false
  try {
    return JSON.parse(Buffer.from(payload, 'base64url').toString()).exp > Date.now()
  } catch {
    return false
  }
}

/** Oturum zorunlu; değişiklik yapan isteklerde ayrıca CSRF başlığı aranır. */
export function requireAuth(req) {
  if (!isAuthed(req)) throw new HttpError(401, 'Oturumunuzun süresi doldu. Lütfen tekrar giriş yapın.')
  if (req.method !== 'GET' && req.headers['x-admin-request'] !== '1') throw new HttpError(403, 'Geçersiz istek.')
}

// Basit kaba kuvvet koruması: IP başına 15 dakikada 8 hatalı deneme.
const attempts = new Map()
export function guardLogin(req) {
  const ip = clientIp(req)
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
