export type Lead = {
  name: string
  phone: string
  email?: string
  program?: string
  country?: string
  message?: string
  /** Planlanan yıllık bütçe (Ads lead kalitesi için) */
  budget?: string
  /** Üniversite formu: öğrencinin durumu */
  studentStatus?: string
  /** Yaz okulu formu: çocuğun yaşı */
  childAge?: string
  source: string
}

/** Bütçe seçenekleri. Bildirim e-postasına ve E-Tablo'ya aynen yazılır. */
export const budgetOptions = {
  university: ['15.000 £ altı', '15.000 – 25.000 £', '25.000 – 40.000 £', '40.000 £ üzeri', 'Henüz belirlemedim'],
  summer: ['3.000 £ altı', '3.000 – 6.000 £', '6.000 £ üzeri', 'Henüz belirlemedim'],
} as const
export type BudgetKind = keyof typeof budgetOptions

/** Seçilen programa ve ülkeye göre bütçe alanı (yalnızca İngiltere ya da ülke seçilmemişken; aralıklar £ cinsinden). */
export function budgetKindFor(program: string, country: string): BudgetKind | undefined {
  if (country && country !== 'İngiltere') return undefined
  if (program === 'Üniversite' || program === 'Yüksek lisans') return 'university'
  if (program === 'Yaz okulu') return 'summer'
  return undefined
}

export const studentStatusOptions = ['Lise 11. sınıf', 'Lise 12. sınıf', 'Lise mezunu', 'Üniversite öğrencisi / mezun', 'Veliyim, bilgi almak istiyorum']
export const childAgeOptions = Array.from({ length: 11 }, (_, i) => String(i + 7))

const ATTR_KEY = 'tampa:ilk-ziyaret'
const ATTR_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid', 'gbraid', 'wbraid'] as const

/**
 * Ziyaretçinin siteye ilk geldiği kaynağı (reklam etiketleri, yönlendiren site) oturum boyunca saklar.
 * Böylece başvurunun hangi reklamdan / kampanyadan geldiği form kaydında görünür.
 */
export function captureAttribution() {
  try {
    if (sessionStorage.getItem(ATTR_KEY)) return
    const q = new URLSearchParams(window.location.search)
    const data: Record<string, string> = { landing: window.location.pathname }
    for (const k of ATTR_PARAMS) {
      const v = q.get(k)
      if (v) data[k] = v.slice(0, 150)
    }
    if (document.referrer && !document.referrer.startsWith(window.location.origin)) data.referrer = document.referrer.slice(0, 300)
    sessionStorage.setItem(ATTR_KEY, JSON.stringify(data))
  } catch {
    /* depolama kapalı: kaynak bilgisi olmadan devam */
  }
}

function attribution(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(ATTR_KEY) ?? '{}')
  } catch {
    return {}
  }
}

/**
 * Form gönderimi: /api/lead sunucu fonksiyonuna gider; o da Google Apps Script üzerinden
 * başvuruyu Google E-Tablo'ya kaydeder ve e-posta bildirimi gönderir (bkz. docs/FORMLAR.md).
 * `hp` ve `elapsed` bot koruması içindir.
 */
export async function submitLead(lead: Lead, guard: { hp: string; elapsed: number }): Promise<void> {
  const endpoint = (import.meta.env.VITE_LEAD_ENDPOINT as string | undefined) || '/api/lead'
  const payload = { ...lead, ...guard, page: window.location.pathname, attribution: attribution() }
  // Ağ veya sunucu hatasında bir kez daha dener; geçersiz veri (4xx) için tekrar denemez
  let lastError: unknown
  for (let attempt = 0; attempt < 2; attempt++) {
    let res: Response | null = null
    try {
      res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    } catch (e) {
      lastError = e
    }
    if (res?.ok) return
    if (res && res.status < 500) throw new Error(`Form gönderilemedi (${res.status})`)
    if (res) lastError = new Error(`Form gönderilemedi (${res.status})`)
    if (attempt === 0) await new Promise((r) => setTimeout(r, 1200))
  }
  throw lastError
}

export const programOptions = ['Dil okulu', 'Yaz okulu', 'Lise', 'Üniversite', 'Yüksek lisans', 'Work and study', 'Online eğitim', 'Öğrenci konaklaması', 'Her Şey Dahil paket', 'Mentörlük / kariyer rehberliği', 'Diğer']
