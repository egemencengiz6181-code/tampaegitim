// GA4 olayları ve çerez onayı (Consent Mode v2). gtag index.html'de yüklenir; onay yoksa
// GA4 çerez yazmaz, olaylar yalnızca çerezsiz (modellenmiş) ölçüme gider.
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

/** Telefon, WhatsApp ve e-posta tıklamalarını tek dinleyiciyle ölçer. */
export function trackContactClick(e: MouseEvent) {
  const a = (e.target as Element | null)?.closest?.('a[href]')
  if (!a) return
  const href = a.getAttribute('href') ?? ''
  const label = a.textContent?.trim().slice(0, 60)
  if (href.startsWith('tel:')) track('phone_click', { phone: href.slice(4), link_text: label })
  else if (/wa\.me|whatsapp\.com/.test(href)) track('whatsapp_click', { link_text: label })
  else if (href.startsWith('mailto:')) track('email_click', { link_text: label })
}
