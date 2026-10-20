// POST /api/lead → Form başvurusunu doğrular ve Google Apps Script'e iletir.
// Apps Script başvuruyu Google E-Tablo'ya yazar ve Gmail ile bildirim gönderir (docs/FORMLAR.md).
// Ortam değişkenleri: LEAD_WEBHOOK_URL (Apps Script web uygulaması adresi), LEAD_WEBHOOK_SECRET (ortak gizli anahtar).
import { send, readJson, handle, HttpError, clientIp } from './_lib/http.js'
// Sitenin asıl adresi (content/site.json); statik import, Vercel paketine otomatik dahil olur
import siteConfig from '../content/site.json' with { type: 'json' }

const SITE_URL = siteConfig.url

// Kontrol karakterleri bilerek temizlenir (e-posta/tabloya bozuk veri gitmesin)
// oxlint-disable-next-line no-control-regex
const clean = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max) : '')
// oxlint-disable-next-line no-control-regex
const cleanText = (v, max) => (typeof v === 'string' ? v.replace(/\r\n?/g, '\n').replace(/[\u0000-\u0009\u000b-\u001f\u007f]+/g, ' ').trim().slice(0, max) : '')

/** Formun bulunduğu yeri okunur hale getirir: "program:dil:ingiltere" → "Program sayfası (dil / ingiltere)" */
const SOURCE_LABELS = {
  anasayfa: 'Ana sayfa',
  basvuru: 'Başvuru sayfası',
  iletisim: 'İletişim sayfası',
  paketler: 'Her Şey Dahil paketler',
  paket: 'Her Şey Dahil paket',
  program: 'Program sayfası',
  ulke: 'Ülke sayfası',
  hizmet: 'Hizmet sayfası',
  akademi: 'Tampa Akademi',
  konaklama: 'Öğrenci konaklaması',
  'online-egitim': 'Online eğitim',
  online: 'Online eğitim',
  'fiyat-listesi': 'Dil okulu fiyat listesi',
  'almanya-ozel-universiteler': 'Almanya özel üniversiteler',
  'almanya-ozel': 'Almanya özel üniversite',
  blog: 'Blog yazısı',
  rehber: 'Bilgi bankası',
  belge: 'Örnek belge',
  lp: 'Reklam sayfası',
}
function sourceLabel(source) {
  const [head, ...rest] = source.split(':')
  const label = SOURCE_LABELS[head] ?? head
  return rest.length ? `${label} (${rest.join(' / ')})` : label
}

// IP başına 10 dakikada en fazla 6 başvuru (aynı sunucu örneği içinde)
const hits = new Map()
function rateLimit(ip) {
  const now = Date.now()
  const list = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000)
  if (list.length >= 6) throw new HttpError(429, 'Çok fazla deneme yapıldı. Lütfen birkaç dakika sonra tekrar deneyin veya bizi arayın.')
  list.push(now)
  hits.set(ip, list)
  if (hits.size > 5000) hits.clear()
}

export default handle(async (req, res) => {
  if (req.method !== 'POST') throw new HttpError(405, 'Yalnızca POST.')
  const body = await readJson(req, 20_000)

  // Bot koruması: tuzak alan doldurulmuşsa veya form 2,5 saniyeden kısa sürede gönderildiyse
  // başarılı gibi yanıt verilir ama kayıt yapılmaz.
  if (clean(body.hp, 200) || (typeof body.elapsed === 'number' && body.elapsed < 2500)) return send(res, 200, { ok: true })

  rateLimit(clientIp(req))

  const name = clean(body.name, 80)
  const phone = clean(body.phone, 30)
  const email = clean(body.email, 120)
  const digits = phone.replace(/\D/g, '')
  if (name.length < 3) throw new HttpError(422, 'Adınızı ve soyadınızı yazın.')
  if (digits.length < 10 || digits.length > 15) throw new HttpError(422, 'Telefon numarası geçersiz.')
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) throw new HttpError(422, 'E-posta adresi geçersiz.')
  if (/https?:\/\//i.test(name)) throw new HttpError(422, 'Ad soyad geçersiz.')

  const source = clean(body.source, 120) || 'bilinmiyor'
  const a = body.attribution && typeof body.attribution === 'object' ? body.attribution : {}
  const lead = {
    date: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }),
    name,
    phone,
    email,
    program: clean(body.program, 80),
    country: clean(body.country, 80),
    message: cleanText(body.message, 3000),
    form: sourceLabel(source),
    source,
    page: `${SITE_URL}${clean(body.page, 300).startsWith('/') ? clean(body.page, 300) : '/'}`,
    landing: clean(a.landing, 300),
    referrer: clean(a.referrer, 300),
    utm_source: clean(a.utm_source, 150),
    utm_medium: clean(a.utm_medium, 150),
    utm_campaign: clean(a.utm_campaign, 150),
    utm_term: clean(a.utm_term, 150),
    utm_content: clean(a.utm_content, 150),
    gclid: clean(a.gclid || a.gbraid || a.wbraid, 200),
    fbclid: clean(a.fbclid, 200),
  }

  const url = process.env.LEAD_WEBHOOK_URL
  if (!url) {
    if (process.env.VERCEL) {
      console.error('[lead] LEAD_WEBHOOK_URL tanımlı değil; başvuru kaydedilemedi:', JSON.stringify(lead))
      throw new HttpError(503, 'Form şu anda gönderilemedi.')
    }
    console.info('[lead:yerel] LEAD_WEBHOOK_URL yok, başvuru yalnızca konsola yazıldı:', lead)
    return send(res, 200, { ok: true, local: true })
  }

  let lastStatus = 0
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ secret: process.env.LEAD_WEBHOOK_SECRET ?? '', lead }),
        redirect: 'follow',
        signal: AbortSignal.timeout(15_000),
      })
      lastStatus = r.status
      const out = await r.json().catch(() => null)
      if (r.ok && out?.ok) return send(res, 200, { ok: true })
      console.error('[lead] Apps Script yanıtı:', r.status, out)
    } catch (e) {
      console.error('[lead] Apps Script hatası:', e)
    }
  }
  // Başvuru kaybolmasın: Vercel loglarında tam kayıt kalır
  console.error('[lead] İLETİLEMEYEN BAŞVURU:', lastStatus, JSON.stringify(lead))
  throw new HttpError(502, 'Form şu anda gönderilemedi.')
})
