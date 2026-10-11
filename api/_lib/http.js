// Vercel Node fonksiyonları ve yerel geliştirme (vite) için ortak HTTP yardımcıları.

export function send(res, status, data, headers = {}) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('X-Robots-Tag', 'noindex, nofollow')
  for (const [k, v] of Object.entries(headers)) res.setHeader(k, v)
  res.end(JSON.stringify(data))
}

export class HttpError extends Error {
  constructor(status, message, extra) {
    super(message)
    this.status = status
    this.extra = extra
  }
}

/** Gövdeyi JSON olarak okur (Vercel zaten ayrıştırdıysa onu kullanır). */
export async function readJson(req, limit = 4_500_000) {
  if (req.body !== undefined && req.body !== null && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) return req.body
  if (typeof req.body === 'string') return JSON.parse(req.body || '{}')
  const chunks = []
  let size = 0
  for await (const c of req) {
    size += c.length
    if (size > limit) throw new HttpError(413, 'İstek çok büyük. Görselleri küçültüp tekrar deneyin.')
    chunks.push(c)
  }
  const raw = Buffer.concat(chunks).toString('utf8')
  try {
    return JSON.parse(raw || '{}')
  } catch {
    throw new HttpError(400, 'Geçersiz istek gövdesi.')
  }
}

export const query = (req) => new URL(req.url, 'http://localhost').searchParams

export function clientIp(req) {
  const fwd = req.headers['x-forwarded-for']
  return (Array.isArray(fwd) ? fwd[0] : fwd)?.split(',')[0].trim() || req.socket?.remoteAddress || 'unknown'
}

/** Hata yakalayan sarmalayıcı: beklenmeyen hatalar ayrıntı sızdırmadan 500 döner. */
export const handle = (fn) => async (req, res) => {
  try {
    await fn(req, res)
  } catch (e) {
    if (e instanceof HttpError) return send(res, e.status, { error: e.message, ...e.extra })
    console.error('[admin]', e)
    send(res, 500, { error: 'Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.' })
  }
}
