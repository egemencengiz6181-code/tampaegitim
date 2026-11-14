import { useLocation } from 'react-router-dom'
import { Breadcrumbs, Stars, type Crumb } from './ui'
import { Icon } from './Icon'
import { LeadForm } from './LeadForm'
import { heroFor } from '../data/heroImages'
import { universities } from '../data/social'
import { site } from '../data/site'
import type { AdLanding } from '../data/adLanding'

/**
 * Google Ads landing hero: başlık + son tarih bandı + vaatler solda, form sağda (mobilde başlık ve açıklamanın hemen altında).
 * Hero görseli lazy DEĞİL (LCP); AVIF/WebP, ekran genişliğine göre 800/1600 px.
 */
export function AdHero({ ad, crumbs, source, country }: { ad: AdLanding; crumbs: Crumb[]; source: string; country: string }) {
  const hero = heroFor(useLocation().pathname)
  const base = hero?.src.replace(/\.jpg$/, '')
  const logos = ad.logos ? universities.filter((u) => ad.logos!.includes(u.name)) : []
  return (
    <>
      <section className="adhero">
        {base && (
          <picture className="adhero__bg" aria-hidden="true">
            <source type="image/avif" srcSet={`${base}-800.avif 800w, ${base}-1600.avif 1600w`} sizes="100vw" />
            <source type="image/webp" srcSet={`${base}-800.webp 800w, ${base}-1600.webp 1600w`} sizes="100vw" />
            <img src={hero!.src} alt="" fetchPriority="high" decoding="async" width="1600" height="900" />
          </picture>
        )}
        {hero?.credit && (
          <a className="phero__credit" href={hero.href} target="_blank" rel="noopener noreferrer">Fotoğraf: {hero.credit}</a>
        )}
        <div className="container adhero__in">
          <div className="adhero__crumbs"><Breadcrumbs items={crumbs} tone="light" /></div>
          <h1 className="adhero__title">{ad.h1}</h1>
          <p className="adhero__sub">{ad.sub}</p>
          {/* Form DOM'da açıklamanın hemen ardından: mobilde (tek sütun) ilk ekrana girer. Masaüstünde
              grid-column: 2 / grid-row: 1 / span 9 ile sağda durur; DOM sırası masaüstü düzenini değiştirmez. */}
          <div className="adhero__form">
            <LeadForm
              id="form"
              anchor
              mobileSteps
              titleAs="h2"
              kind={ad.form.kind}
              source={source}
              defaultProgram={ad.form.program}
              defaultCountry={country}
              title={ad.form.title}
              note={ad.form.note}
              submitLabel={ad.form.cta}
            />
          </div>
          <p className="adband" role="note">
            <Icon name="calendar" size={18} />
            <span>{ad.band.label}: <strong>{ad.band.value}</strong></span>
          </p>
          <ul className="adpromises">
            {ad.promises.map((x) => (
              <li key={x.text}><Icon name={x.icon} size={18} /><span>{x.text}</span></li>
            ))}
          </ul>
          {ad.footnote && <p className="adhero__foot">* {ad.footnote}</p>}
          <p className="adhero__trust"><Stars /> <span>{ad.trust}</span></p>
          <p className="adhero__region"><Icon name="pin" size={16} /> <span>{ad.region}</span></p>
          <p className="adhero__alt">
            <span>Hemen konuşmak isterseniz:</span>
            <a href={site.phoneHref}><Icon name="phone" size={16} /> Ara</a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="chat" size={16} /> WhatsApp</a>
            <a href={site.calendly} target="_blank" rel="noopener noreferrer"><Icon name="calendar" size={16} /> Online görüşme</a>
          </p>
        </div>
      </section>
      {logos.length > 0 && (
        <section className="adlogos" aria-label="Çözüm ortaklarımızdan bazıları">
          <div className="container adlogos__in">
            <p>Çözüm ortaklarımızdan bazıları</p>
            <ul className="unilogos">
              {logos.map((u) => (
                <li key={u.name}><img src={`/img/logos/${u.file}`} alt={u.name} loading="lazy" decoding="async" height="44" /></li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
