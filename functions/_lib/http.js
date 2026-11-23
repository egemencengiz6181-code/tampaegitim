// Cloudflare Pages Functions için ortak HTTP yardımcıları.
// api/_lib/http.js'in Web API (Request/Response) portu; yerel geliştirme yine api/ klasörünü kullanır.

export class HttpError extends Error {
  constructor(status, message, extra) {
    super(message)
    this.status = status
    this.extra = extra
  }
}

export function send(status, data, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
      ...headers,
    },
  })
}

/** Gövdeyi JSON olarak okur. */
export async function readJson(request, limit = 4_500_000) {
  const len = Number(request.headers.get('content-length') ?? 0)
  if (len > limit) throw new HttpError(413, 'İstek çok büyük. Görselleri küçültüp tekrar deneyin.')
  const raw = await request.text()
  if (raw.length > limit) throw new HttpError(413, 'İstek çok büyük. Görselleri küçültüp tekrar deneyin.')
  try {
    return JSON.parse(raw || '{}')
  } catch {
    throw new HttpError(400, 'Geçersiz istek gövdesi.')
  }
}

export const query = (request) => new URL(request.url).searchParams

export function clientIp(request) {
  return request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
}

/** Hata yakalayan sarmalayıcı: beklenmeyen hatalar ayrıntı sızdırmadan 500 döner. */
export const handle = (fn) => async (context) => {
  try {
    return await fn(context)
  } catch (e) {
    if (e instanceof HttpError) return send(e.status, { error: e.message, ...e.extra })
    console.error('[admin]', e)
    return send(500, { error: 'Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.' })
  }
}
