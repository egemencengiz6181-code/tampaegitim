import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo, Btn, SectionHead, CheckList, FaqList } from '../components/ui'
import { Icon } from '../components/Icon'
import { PageHero, CtaBand } from '../components/layouts'
import { LeadForm } from '../components/LeadForm'
import { services, serviceBySlug, academy, type ServiceBlock } from '../data/services'
import { cardImg } from '../lib/img'

export function ServicesIndex() {
  return (
    <>
      <Seo title="Hizmetlerimiz" description="Üniversite başvuru ve mentörlük paketi, kariyer rehberliği, vize, konaklama, eğitim ve sınav danışmanlığı." path="/hizmetler" />
      <PageHero tone="mist" crumbs={[{ label: 'Hizmetler' }]} title="Yurt dışı danışmanlık alanında geniş bir hizmet yelpazesi" lead="Program seçiminin ötesinde; başvurunun, vizenin ve kariyer kararlarının en kritik anlarında yanınızdayız." />
      <section className="section">
        <div className="container">
          <ul className="svcindex svcindex--big">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={s.path}>
                  <span className="svcindex__cat">{s.category}</span>
                  <span className="svcindex__name">{s.name}</span>
                  <span className="svcindex__sum">{s.summary}</span>
                  <Icon name="arrowUpRight" size={22} />
                </Link>
              </li>
            ))}
            <li>
              <Link to="/tampa-akademi">
                <span className="svcindex__cat">Akademi</span>
                <span className="svcindex__name">Tampa Akademi</span>
                <span className="svcindex__sum">{academy.about}</span>
                <Icon name="arrowUpRight" size={22} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

export function ServicePage({ slug }: { slug: string }) {
  const s = serviceBySlug[slug]
  return (
    <>
      <Seo title={s.name} description={`${s.lead} ${s.summary}`.slice(0, 300)} path={s.path} />
      <PageHero
        image={s.image}
        crumbs={[{ label: 'Hizmetler', to: '/hizmetler' }, { label: s.name }]}
        kicker={s.category}
        title={s.name}
        lead={s.lead}
        aside={
          <div className="factcard">
            <p className="factcard__h">Kapsam</p>
            <CheckList items={s.highlights} />
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Bilgi alın</Btn>
      </PageHero>

      <div className="container detail">
        <article className="detail__main">
          <section className="dsec"><p className="lead-strong">{s.summary}</p></section>
          {s.blocks.map((b, i) => <Block key={i} b={b} />)}
          {s.faqs && (
            <section className="dsec">
              <h2>Sık Sorulan Sorular</h2>
              <FaqList items={s.faqs} />
            </section>
          )}
        </article>
        <aside className="detail__side" id="form">
          <div className="sticky">
            <LeadForm variant="compact" source={`hizmet:${s.slug}`} defaultProgram={s.category === 'Mentörlük' ? 'Mentörlük / kariyer rehberliği' : ''} title="Detaylı bilgi için bize ulaşın" note="Formu doldurun, sizi hemen arayalım." />
          </div>
        </aside>
      </div>

      <section className="section section--mist">
        <div className="container">
          <h2 className="h3">Diğer Hizmetler</h2>
          <ul className="chips">
            {services.filter((x) => x.slug !== s.slug).map((x) => <li key={x.slug}><Link to={x.path}>{x.name}</Link></li>)}
            <li><Link to="/tampa-akademi">Tampa Akademi</Link></li>
          </ul>
        </div>
      </section>
    </>
  )
}

function Block({ b }: { b: ServiceBlock }) {
  switch (b.type) {
    case 'text':
      return <section className="dsec"><h2>{b.title}</h2>{b.body.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}</section>
    case 'list':
      return <section className="dsec"><h2>{b.title}</h2>{b.intro && <p>{b.intro}</p>}<CheckList items={b.items} cols={2} /></section>
    case 'cards':
      return (
        <section className="dsec">
          <h2>{b.title}</h2>
          {b.intro && <p>{b.intro}</p>}
          <dl className="featlist featlist--2">{b.items.map((c) => (<div key={c.title}><dt>{c.title}</dt><dd>{c.text}</dd></div>))}</dl>
        </section>
      )
    case 'steps':
      return (
        <section className="dsec">
          <h2>{b.title}</h2>
          {b.intro && <p>{b.intro}</p>}
          <ol className="bigsteps">
            {b.items.map((it, i) => (
              <li key={it.title}>
                <span className="bigsteps__n" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                  {it.points && <CheckList items={it.points} />}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )
    case 'quiz':
      return <Quiz b={b} />
    case 'note':
      return <section className="dsec"><div className="callout"><Icon name="shield" size={22} /><div><h3>{b.title}</h3><p>{b.body}</p></div></div></section>
  }
}

function Quiz({ b }: { b: Extract<ServiceBlock, { type: 'quiz' }> }) {
  const [ans, setAns] = useState<Record<number, number>>({})
  const done = Object.keys(ans).length === b.questions.length
  return (
    <section className="dsec">
      <h2>{b.title}</h2>
      <p>{b.intro}</p>
      <div className="quiz">
        {b.questions.map((q, qi) => (
          <fieldset key={q.q} className="quiz__q">
            <legend>{qi + 1}. {q.q}</legend>
            {q.options.map((o, oi) => (
              <label key={o} className={ans[qi] === oi ? 'is-on' : ''}>
                <input type="radio" name={`q${qi}`} checked={ans[qi] === oi} onChange={() => setAns((a) => ({ ...a, [qi]: oi }))} />
                <span className="quiz__l">{String.fromCharCode(97 + oi)})</span> {o}
              </label>
            ))}
          </fieldset>
        ))}
        {done && (
          <div className="callout callout--ok" role="status">
            <Icon name="check" size={22} />
            <div><h3>Harika, ilk adımı attın.</h3><p>Cevaplarını ilk oturumda mentörünle birlikte yorumlayacağız. Formu doldur, seni arayalım.</p></div>
          </div>
        )}
      </div>
    </section>
  )
}

export function Academy() {
  return (
    <>
      <Seo title="Tampa Akademi" description={academy.lead} path="/tampa-akademi" />
      <PageHero image="/img/misc/akademi.jpg" crumbs={[{ label: 'Tampa Akademi' }]} kicker="Kariyerine yön ver" title="Geleceğini şekillendir." lead={academy.lead}>
        <Btn href="#form" size="lg" icon="arrow">Kariyerine hemen başla</Btn>
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionHead title="Tampa Akademi fırsatlarını keşfet" intro={academy.about} />
          <div className="tracks">
            {academy.tracks.map((t) => (
              <Link key={t.href} to={t.href} className="track">
                <img {...cardImg(t.image, '(max-width: 800px) 92vw, 640px')} alt="" loading="lazy" width="640" height="420" />
                <div>
                  <span className="track__kicker">{t.kicker}</span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                  <span className="textlink">İncele <Icon name="arrow" size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--deep">
        <div className="container">
          <SectionHead title="Neden Tampa Akademi?" />
          <dl className="featlist featlist--dark">
            {academy.pillars.map((p) => (<div key={p.title}><dt>{p.title}</dt><dd>{p.text}</dd></div>))}
          </dl>
        </div>
      </section>
      <section className="section" id="form">
        <div className="container contactsplit">
          <div>
            <h2 className="h2">Danışmanlık Al</h2>
            <p className="muted">Lise veya üniversite öğrencisiysen, hedeflerine en doğru adımlarla ulaşman için birebir yol haritanı birlikte hazırlayalım.</p>
          </div>
          <LeadForm source="akademi" defaultProgram="Mentörlük / kariyer rehberliği" />
        </div>
      </section>
    </>
  )
}
