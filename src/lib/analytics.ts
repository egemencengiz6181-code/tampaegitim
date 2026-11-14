// GA4 olayları ve çerez onayı (Consent Mode v2). gtag index.html'de yüklenir (G-QZ36BSRZ5V, GTM yok);
// onay yoksa GA4 çerez yazmaz, olaylar yalnızca çerezsiz (modellenmiş) ölçüme gider.
type Gtag = (...args: unknown[]) => void
const gtag = (...args: unknown[]) => (globalThis as { gtag?: Gtag }).gtag?.(...args)

const KEY = 'tampa-consent'
export type Consent = 'granted' | 'denied'

export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

/**
 * Kabul: dört sinyal de granted; Ret: dördü de denied. Tercih localStorage'a yazılır ve index.html'deki
 * satır içi script sonraki her sayfa yüklemesinde `config`'ten ÖNCE `consent default` olarak uygular.
 */
export function setConsent(v: Consent) {
  try {
    localStorage.setItem(KEY, v)
  } catch {
    /* gizli sekme: tercih yalnızca bu sayfa için geçerli */
  }
  gtag('consent', 'update', { ad_storage: v, ad_user_data: v, ad_personalization: v, analytics_storage: v })
}

/** Footer'daki "Çerez tercihleri" bağlantısı bandı yeniden açar. */
export const CONSENT_OPEN_EVENT = 'tampa:consent-open'

export function track(name: string, params: Record<string, string | undefined> = {}) {
  gtag('event', name, { page_path: location.pathname, ...params })
}

/** Türkiye numaralarını E.164'e çevirir: "0530 123 45 67" → "+905301234567". Geçersizse undefined. */
export function toE164(raw: string): string | undefined {
  let d = raw.replace(/[^\d+]/g, '')
  if (d.startsWith('+')) d = d.slice(1)
  else if (d.startsWith('00')) d = d.slice(2)
  else if (d.startsWith('0')) d = `90${d.slice(1)}`
  else if (d.length === 10 && d.startsWith('5')) d = `90${d}`
  d = d.replace(/\D/g, '')
  return d.length >= 11 && d.length <= 15 ? `+${d}` : undefined
}

export type LeadEvent = {
  form_program?: string
  form_country?: string
  form_budget?: string
  student_status?: string
  child_age?: string
  form_source?: string
}

/**
 * Ana dönüşüm. Yalnızca sunucu başarılı yanıt verdikten sonra, gönderim başına bir kez çağrılır (LeadForm).
 * Çerezler kabul edildiyse (ad_user_data granted) önce gelişmiş dönüşümler için user_data gönderilir.
 */
export function trackLead(params: LeadEvent, contact: { phone: string; email?: string }) {
  if (getConsent() === 'granted') {
    const user: Record<string, string> = {}
    const phone = toE164(contact.phone)
    if (phone) user.phone_number = phone
    const email = contact.email?.replace(/\s+/g, '').toLowerCase()
    if (email) user.email = email
    if (Object.keys(user).length) gtag('set', 'user_data', user)
  }
  const clean = Object.fromEntries(Object.entries(params).filter(([, v]) => v)) as Record<string, string>
  track('generate_lead', clean)
}

/** Telefon, WhatsApp, Calendly ve e-posta tıklamalarını tek, delegasyonlu dinleyiciyle ölçer (sabit bar, header, footer, içerik). */
export function trackContactClick(e: MouseEvent) {
  const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
  if (!a) return
  const href = a.href || a.getAttribute('href') || ''
  const label = a.textContent?.trim().slice(0, 60) || undefined
  if (href.startsWith('tel:')) track('click_phone', { phone: href.slice(4), link_text: label })
  else if (/wa\.me|whatsapp/i.test(href)) track('click_whatsapp', { link_text: label })
  else if (href.includes('calendly.com')) track('click_calendly', { link_text: label })
  else if (href.startsWith('mailto:')) track('email_click', { link_text: label })
}

/** Calendly widget/popup içinde randevu tamamlandığında gelen postMessage → book_appointment. */
export function trackCalendlyMessage(e: MessageEvent) {
  if (!/(^|\.)calendly\.com$/.test(safeHost(e.origin))) return
  const data = e.data as { event?: string } | null
  if (data && typeof data === 'object' && data.event === 'calendly.event_scheduled') track('book_appointment', { method: 'calendly' })
}

function safeHost(origin: string) {
  try {
    return new URL(origin).hostname
  } catch {
    return ''
  }
}

/**
 * "#form" bağlantıları ve mobil alt bar CTA'sı: sayfadaki ilk GÖRÜNÜR form çapasına yumuşak kaydırır ve ilk alana
 * (Ad soyad) odaklanır. Görünür form yoksa hiçbir şey yapmaz; bağlantı normal davranışına (ör. /basvuru) devam eder.
 */
export function scrollToVisibleForm(e: { preventDefault: () => void }) {
  const el = Array.from(document.querySelectorAll<HTMLElement>('[data-form-anchor]')).find((x) => x.offsetParent !== null)
  if (!el) return
  e.preventDefault()
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  // Gizli alanlar (program/ülke) ve bot tuzağı atlanır; ilk gerçek alan Ad soyad'dır
  el.querySelector<HTMLElement>('input:not([type="hidden"]):not([tabindex="-1"]), select, textarea')?.focus({ preventScroll: true })
}
