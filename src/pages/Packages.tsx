import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Seo, Btn, SectionHead, CheckList, RouteCode, FaqList } from '../components/ui'
import { Icon } from '../components/Icon'
import { PageHero, CtaBand } from '../components/layouts'
import { LeadForm } from '../components/LeadForm'
import { packages, packageBySlug, packagePerks, formatPrice, type Package } from '../data/packages'
import NotFound from './NotFound'
import { cardImg } from '../lib/img'

const pkgFaqs = [
  { q: 'Paketler kimler için uygun?', a: 'Her Şey Dahil dil paketlerimiz 18 yaş ve üzeri katılımcılar içindir. Daha küçük yaş grupları için yaz okulu programlarımızı inceleyebilirsiniz.' },
  { q: 'Paket süresini sonradan uzatabilir miyim?', a: 'Okul ve konaklama uygunluğuna bağlı olarak süre uzatımı mümkündür. Uzatma talebinizi mümkün olduğunca erken iletmenizi öneriyoruz.' },
  { q: 'Fiyatlar neden döviz cinsinden?', a: 'Okul, konaklama ve hizmet bedelleri ilgili ülkenin para birimiyle belirlendiği için paket fiyatları GBP, USD veya EUR olarak sunulur.' },
  { q: 'Tek kişilik oda alabilir miyim?', a: 'Londra paketinde tek kişilik özel banyolu oda standarttır. Dubai ve Malta paketlerinde uygunluğa göre single upgrade yapılabilir.' },
]

export function PackagesIndex() {
  return (
    <>
      <Seo title="Her Şey Dahil Yurtdışı Dil Eğitimi Paketleri" description="Londra, Dubai ve Malta’da 2–10 haftalık Her Şey Dahil dil eğitimi paketleri: eğitim, konaklama, vize, sigorta, VIP karşılama ve eğlence paketi tek fiyatta." path="/her-sey-dahil-paketler" />
      <PageHero
        image="/img/misc/london-package.jpg"
        crumbs={[{ label: 'Her Şey Dahil Paketler' }]}
        kicker="Her Şey Dahil Paketler ile tasarruf edin"
        title="Tam Kapsamlı, Her Şey Dahil Paketler"
        lead="Yurt dışında dil öğrenirken unutulmaz bir tatil yapmak ister misiniz? İngilizceyi Londra’nın tarihi atmosferinde, Dubai’nin büyüleyici modernliğinde veya Malta’nın eşsiz Akdeniz sahillerinde öğrenin."
      >
        <Btn href="#paketler" size="lg" icon="arrow">Fiyatlara göz atın</Btn>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead title="Paketlerimiz neler sunuyor?" intro="Eğitiminizden konaklamanıza, vizenizden sağlık sigortanıza kadar her şeyi planladık." />
          <dl className="featlist featlist--2">
            {packagePerks.map((p) => (<div key={p.title}><dt>{p.title}</dt><dd>{p.text}</dd></div>))}
          </dl>
        </div>
      </section>

      <section className="section section--mist" id="paketler">
        <div className="container">
          <SectionHead title="Paket fiyatları ve detayları" intro="Tüm paketler 18 yaş ve üzeri katılımcılar içindir." />
          <div className="pkgcards">
            {packages.map((p) => <PackageCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twocol">
          <div>
            <h2 className="h2">Sık Sorulan Sorular</h2>
            <FaqList items={pkgFaqs} />
          </div>
          <LeadForm source="paketler" defaultProgram="Her Şey Dahil paket" title="Paket teklifi isteyin" note="Sınırlı kontenjanlarımız dolmadan yerinizi ayırtın." />
        </div>
      </section>
      <CtaBand title="Dil öğrenmenin ve dünyayı keşfetmenin tam zamanı." />
    </>
  )
}

function PackageCard({ p }: { p: Package }) {
  const [w, setW] = useState(p.prices[0].weeks)
  const price = p.prices.find((x) => x.weeks === w)!.price
  return (
    <article className="pkgcard">
      <div className="pkgcard__img"><img {...cardImg(p.image)} alt="" loading="lazy" width="640" height="400" /></div>
      <div className="pkgcard__body">
        <div className="pkgcard__top"><RouteCode to={p.code} /><span className="tag">{p.age}</span></div>
        <h3>{p.title}</h3>
        <p className="muted">{p.lead}</p>
        <fieldset className="weeks">
          <legend>Süre seçin</legend>
          {p.prices.map((x) => (
            <label key={x.weeks} className={x.weeks === w ? 'is-on' : ''}>
              <input type="radio" name={`w-${p.slug}`} value={x.weeks} checked={x.weeks === w} onChange={() => setW(x.weeks)} />
              {x.weeks} hf
            </label>
          ))}
        </fieldset>
        <p className="pkgcard__price" aria-live="polite"><strong>{p.currencySymbol}{formatPrice(price)}</strong><span>{w} hafta, {p.currency}</span></p>
        <Btn to={`/her-sey-dahil-paketler/${p.slug}`} variant="teal" icon="arrow">Paket detayları</Btn>
      </div>
    </article>
  )
}

export function PackageDetail() {
  const { slug = '' } = useParams()
  const p = packageBySlug[slug]
  if (!p) return <NotFound />
  const others = packages.filter((x) => x.slug !== p.slug)
  return (
    <>
      <Seo
        title={`${p.title} | ${p.currencySymbol}${formatPrice(p.prices[0].price)}’den`}
        description={`${p.lead} ${p.prices.map((x) => `${x.weeks} hafta ${formatPrice(x.price)} ${p.currency}`).join(', ')}.`}
        path={`/her-sey-dahil-paketler/${p.slug}`}
        image={p.image}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: p.title,
          description: p.lead,
          image: `https://tampaegitim.com.tr${p.image}`,
          brand: { '@type': 'Brand', name: 'Tampa Yurtdışı Eğitim' },
          category: 'Yurt dışı dil eğitimi paketi',
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: p.currency,
            lowPrice: p.prices[0].price,
            highPrice: p.prices[p.prices.length - 1].price,
            offerCount: p.prices.length,
            availability: 'https://schema.org/InStock',
            seller: { '@id': 'https://tampaegitim.com.tr/#organization' },
          },
        }}
      />
      <PageHero
        image={p.image}
        crumbs={[{ label: 'Her Şey Dahil Paketler', to: '/her-sey-dahil-paketler' }, { label: p.city }]}
        kicker={<RouteCode to={p.code} light />}
        title={p.title}
        lead={p.lead}
        aside={
          <div className="factcard">
            <p className="factcard__h">{p.age}</p>
            <dl>
              <div><dt>Başlangıç</dt><dd>{p.currencySymbol}{formatPrice(p.prices[0].price)}</dd></div>
              <div><dt>Süre</dt><dd>{p.prices[0].weeks}–{p.prices[p.prices.length - 1].weeks} hafta</dd></div>
              <div><dt>Ders</dt><dd>Haftada 15 saat</dd></div>
              <div><dt>Konaklama</dt><dd>{p.accommodation}</dd></div>
            </dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Yerimi ayırt</Btn>
      </PageHero>

      <div className="container detail">
        <article className="detail__main">
          <section className="dsec">
            <h2>Fiyatlar</h2>
            <div className="tablewrap">
              <table className="ptable">
                <thead><tr><th scope="col">Süre</th><th scope="col">Paket fiyatı ({p.currency})</th></tr></thead>
                <tbody>
                  {p.prices.map((x) => (
                    <tr key={x.weeks}><th scope="row">{x.weeks} hafta</th><td>{p.currencySymbol}{formatPrice(x.price)}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            {p.notes.map((n) => <p key={n} className="note"><Icon name="bolt" size={16} /> {n}</p>)}
          </section>
          <section className="dsec">
            <h2>Neler Dahil?</h2>
            <CheckList items={p.includes} cols={2} />
          </section>
          <section className="dsec">
            <h2>{p.city} Eğlence Paketi</h2>
            <ul className="chips chips--lg">{p.fun.map((f) => <li key={f}><span>{f}</span></li>)}</ul>
          </section>
          <section className="dsec">
            <h2>Sık Sorulan Sorular</h2>
            <FaqList items={pkgFaqs} />
          </section>
        </article>
        <aside className="detail__side" id="form">
          <div className="sticky">
            <LeadForm variant="compact" source={`paket:${p.slug}`} defaultProgram="Her Şey Dahil paket" title={`${p.city} paketi için bilgi alın`} note="Uygun tarihleri ve kontenjan durumunu hemen paylaşalım." />
          </div>
        </aside>
      </div>

      <section className="section section--mist">
        <div className="container">
          <SectionHead title="Diğer paketler" />
          <div className="minipkgs">
            {others.map((o) => (
              <Link key={o.slug} to={`/her-sey-dahil-paketler/${o.slug}`} className="minipkg">
                <span className="code">{o.code}</span><strong>{o.city}</strong>
                <span>{o.prices[0].weeks} haftadan, {o.currencySymbol}{formatPrice(o.prices[0].price)}</span>
                <Icon name="arrow" size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
