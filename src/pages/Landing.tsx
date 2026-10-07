import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Seo, Btn, FaqList, Stars, CheckList, RouteCode } from '../components/ui'
import { Icon } from '../components/Icon'
import { LogoMarquee, ReviewRail } from '../components/signature'
import { LeadForm } from '../components/LeadForm'
import { landingBySlug } from '../data/landings'
import { site } from '../data/site'
import NotFound from './NotFound'

export default function Landing() {
  const { slug = '' } = useParams()
  const l = landingBySlug[slug]
  if (!l) return <NotFound />
  const formProgram = ({ 'Dil Okulu': 'Dil okulu', 'Her Şey Dahil Paket': 'Her şey dahil paket', 'Yaz Okulu': 'Yaz okulu', 'Yüksek Lisans': 'Yüksek lisans', 'Üniversite': 'Üniversite', 'Work and Study': 'Work and study', 'Yüksek lisans': 'Yüksek lisans', Lise: 'Lise' } as Record<string, string>)[l.program] ?? ''
  return (
    <>
      <Seo title={`${l.label} | Tampa Yurtdışı Eğitim`} description={l.sub} path={`/lp/${l.slug}`} image={l.image} noindex />

      <section className="lp-hero">
        <div className="lp-hero__bg" aria-hidden="true"><img src={l.image} alt="" fetchPriority="high" /></div>
        <div className="container lp-hero__in">
          <div className="lp-hero__head">
            <p className="lp-hero__label"><RouteCode to={l.code} light /> {l.label}</p>
            <h1>{l.headline}</h1>
            <p className="lp-hero__sub">{l.sub}</p>
          </div>
          <div className="lp-hero__more">
            <CheckList items={l.bullets} />
            <ul className="lp-proof">
              <li><Stars size={14} /> <strong>{site.googleRating}</strong> Google</li>
              <li><strong>{site.studentCount}</strong> öğrenci</li>
              <li><strong>{site.experienceYears} yıl</strong> tecrübe</li>
            </ul>
          </div>
          <div className="lp-hero__form" id="form">
            {l.offer && (
              <div className="offer">
                <span>{l.offer.title}</span>
                <strong>{l.offer.price}</strong>
                <small>{l.offer.caption}</small>
              </div>
            )}
            <LeadForm variant="compact" source={`lp:${l.slug}`} defaultProgram={formProgram} defaultCountry={l.country === 'Diğer' ? '' : l.country} title="Ücretsiz bilgi alın" note={l.urgency} />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <LogoMarquee />
      </section>

      <section className="section section--mist">
        <div className="container">
          <h2 className="h2 center">Neden Tampa?</h2>
          <dl className="featlist featlist--3">
            {l.why.map((w) => (<div key={w.title}><dt>{w.title}</dt><dd>{w.text}</dd></div>))}
          </dl>
        </div>
      </section>

      {(l.included || l.schedule) && (
        <section className="section">
          <div className="container twocol">
            {l.included && (
              <div className="panel">
                <h2 className="panel__h">Programa Neler Dahil?</h2>
                <CheckList items={l.included} />
              </div>
            )}
            {l.schedule && (
              <div>
                <h2 className="h3">Örnek Program Akışı</h2>
                <ol className="lp-schedule">
                  {l.schedule.map((s) => <li key={s.time + s.text}><span>{s.time}</span><strong>{s.text}</strong></li>)}
                </ol>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <h2 className="h2 center">Üç Adımda Başlıyoruz</h2>
          <ol className="lp-steps">
            {l.steps.map((s, i) => (<li key={s}><span aria-hidden="true">{i + 1}</span><p>{s}</p></li>))}
          </ol>
          <div className="center"><Btn href="#form" size="lg" icon="arrow">Formu doldurun</Btn></div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <h2 className="h2">Öğrencilerimiz ve Velilerimiz Anlatıyor</h2>
          <ReviewRail dark />
        </div>
      </section>

      <section className="section">
        <div className="container twocol">
          <div>
            <h2 className="h2">Sık Sorulan Sorular</h2>
            <FaqList items={l.faqs} />
          </div>
          <div className="lp-close">
            <h2 className="h2">Hemen Konuşalım.</h2>
            <p className="muted">Mesai saatlerinde aynı gün dönüş hedefliyoruz. Beklemek istemezseniz bizi arayın veya WhatsApp’tan yazın.</p>
            <div className="phero__actions">
              <Btn href={site.phoneHref} variant="teal" iconLeft="phone">{site.phone}</Btn>
              <Btn href={site.whatsapp} variant="line" iconLeft="chat">WhatsApp</Btn>
            </div>
            <p className="muted small"><Icon name="pin" size={14} /> İzmir ve Aydın ofisleri · İngiltere Üniversite Temsilciliği</p>
            {l.learnMore && <p className="small"><Link to={l.learnMore.to} className="textlink">{l.learnMore.label} <Icon name="arrow" size={14} /></Link></p>}
          </div>
        </div>
      </section>

      <StickyCta />
    </>
  )
}

/** Mobilde form ekranda değilken görünen yapışkan CTA. */
function StickyCta() {
  const [hidden, setHidden] = useState(true)
  useEffect(() => {
    const form = document.getElementById('form')
    if (!form) return
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { rootMargin: '0px 0px -10% 0px' })
    io.observe(form)
    return () => io.disconnect()
  }, [])
  return (
    <a href="#form" className={`lp-sticky btn btn--coral btn--lg ${hidden ? 'is-hidden' : ''}`} aria-hidden={hidden} tabIndex={hidden ? -1 : 0}>
      Ücretsiz bilgi al
    </a>
  )
}
