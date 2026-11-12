import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CONSENT_OPEN_EVENT, getConsent, setConsent, trackCalendlyMessage, trackContactClick, type Consent } from '../lib/analytics'

/**
 * KVKK çerez onayı. Prerender çıktısında görünmez (SSR'da tercih bilinmez); tercih yoksa
 * hidrasyondan sonra açılır. Kabul ve Ret aynı ağırlıkta sunulur. İletişim tıklamalarını da dinler.
 */
export function CookieBanner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (getConsent() === null) setOpen(true)
    const reopen = () => setOpen(true)
    window.addEventListener(CONSENT_OPEN_EVENT, reopen)
    document.addEventListener('click', trackContactClick, true)
    window.addEventListener('message', trackCalendlyMessage)
    return () => {
      window.removeEventListener(CONSENT_OPEN_EVENT, reopen)
      document.removeEventListener('click', trackContactClick, true)
      window.removeEventListener('message', trackCalendlyMessage)
    }
  }, [])

  if (!open) return null
  const choose = (v: Consent) => {
    setConsent(v)
    setOpen(false)
  }
  return (
    <div className="cookiebar" role="dialog" aria-live="polite" aria-label="Çerez tercihleri">
      <p>
        Sitemizi geliştirmek ve kampanyalarımızı ölçmek için analitik ve pazarlama çerezlerini yalnızca onayınızla kullanıyoruz.
        Zorunlu çerezler her durumda çalışır. Ayrıntılar: <Link to="/cerez-politikasi">Çerez politikası</Link>
      </p>
      <div className="cookiebar__actions">
        <button type="button" className="btn btn--line btn--sm" onClick={() => choose('denied')}>Reddet</button>
        <button type="button" className="btn btn--teal btn--sm" onClick={() => choose('granted')}>Kabul et</button>
      </div>
    </div>
  )
}

/** Tercihi sonradan değiştirmek için bandı yeniden açar. */
export function ConsentLink() {
  return <button type="button" className="linkbtn" onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}>Çerez tercihleri</button>
}
