import type { ReactNode } from 'react'
import { Link, Outlet, ScrollRestoration } from 'react-router-dom'
import { Header } from './Header'
import { Footer, MobileBar, WhatsAppFloat } from './Footer'
import { Breadcrumbs, Btn, type Crumb } from './ui'
import { Icon } from './Icon'
import { site } from '../data/site'
import { organizationLd, websiteLd, officesLd } from '../seo/schema'
import { titleCase, titleNode } from '../lib/text'

export function SiteLayout() {
  return (
    <>
      <a href="#main" className="skip">İçeriğe geç</a>
      <script type="application/ld+json">{JSON.stringify([organizationLd, websiteLd, ...officesLd])}</script>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <MobileBar />
      <WhatsAppFloat />
      <ScrollRestoration />
    </>
  )
}

/** Reklam landing page'leri: dikkat dağıtan menü yok, tek hedef form. */
export function LandingLayout() {
  return (
    <>
      <header className="lp-header">
        <div className="container lp-header__in">
          <Link to="/" aria-label="Tampa Yurtdışı Eğitim"><img src="/img/brand/logo-wordmark.png" alt="Tampa Yurtdışı Eğitim" width="91" height="48" /></Link>
          <div className="lp-header__actions">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="lp-header__wa"><Icon name="chat" size={18} /><span>WhatsApp</span></a>
            <a href={site.phoneHref} className="btn btn--teal btn--sm"><Icon name="phone" size={16} /><span>{site.phone}</span></a>
          </div>
        </div>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="lp-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {site.legalName} · {site.experienceYears} yıllık tecrübe · İzmir, Aydın</p>
          <p><Link to="/kvkk">KVKK</Link> · <Link to="/cerez-politikasi">Çerez politikası</Link> · <Link to="/">tampaegitim.com.tr</Link></p>
        </div>
      </footer>
      <ScrollRestoration />
    </>
  )
}

/* ---------- Page hero ---------- */
type HeroProps = {
  title: ReactNode
  lead?: ReactNode
  crumbs?: Crumb[]
  image?: string
  kicker?: ReactNode
  children?: ReactNode
  aside?: ReactNode
  tone?: 'photo' | 'mist' | 'deep'
}

export function PageHero({ title, lead, crumbs, image, kicker, children, aside, tone = image ? 'photo' : 'mist' }: HeroProps) {
  return (
    <section className={`phero phero--${tone}`}>
      {image && tone === 'photo' && (
        <div className="phero__bg" aria-hidden="true">
          <img src={image} alt="" fetchPriority="high" decoding="async" />
        </div>
      )}
      <div className="container phero__in">
        <div className="phero__main">
          {crumbs && <Breadcrumbs items={crumbs} tone={tone === 'mist' ? 'dark' : 'light'} />}
          {kicker && <p className="phero__kicker">{kicker}</p>}
          <h1 className="phero__title">{titleNode(title)}</h1>
          {lead && <p className="phero__lead">{lead}</p>}
          {children && <div className="phero__actions">{children}</div>}
        </div>
        {aside && <div className="phero__aside">{aside}</div>}
      </div>
    </section>
  )
}

/* ---------- Closing call to action ---------- */
export function CtaBand({ title = 'Yurtdışı eğitim planınızı birlikte kuralım.', text = 'Ücretsiz ön görüşmede hedefinizi dinleyelim, size uygun ülke, okul ve bütçe seçeneklerini yazılı olarak paylaşalım.' }: { title?: string; text?: string }) {
  return (
    <section className="ctaband">
      <div className="container ctaband__in">
        <div className="ctaband__tx">
          <h2>{titleCase(title)}</h2>
          <p>{text}</p>
        </div>
        <div className="ctaband__actions">
          <Btn to="/basvuru" size="lg" icon="arrow">Ücretsiz danışmanlık al</Btn>
          <Btn href={site.calendly} variant="light" size="lg" iconLeft="calendar">Online görüşme planla</Btn>
        </div>
        <svg className="ctaband__arc" viewBox="0 0 600 200" aria-hidden="true" preserveAspectRatio="none">
          <path d="M0 190 C 180 20, 420 20, 600 150" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" />
        </svg>
      </div>
    </section>
  )
}
