import { Link, useParams } from 'react-router-dom'
import { ORG_ID, abs } from '../seo/schema'
import { Seo, Btn, FaqList, CheckList, RouteCode } from '../components/ui'
import { Icon } from '../components/Icon'
import { PageHero, CtaBand } from '../components/layouts'
import { LeadForm } from '../components/LeadForm'
import { Rich } from '../components/Rich'
import { countryBySlug } from '../data/countries'
import { languageFromByCountry, languageFromLabel } from '../data/packages'
import { ukPriceCities } from '../data/schoolPrices'
import { ukVisa, ukWork } from '../data/uk'
import { languageCitiesFor, languageCityPath } from '../data/languageCities/list'
import type { LanguageCity } from '../data/languageCities/types'
import { dedupeFaqs } from '../lib/faq'
import NotFound from './NotFound'

const priceCitySlug = (slug: string) => slug.replace(/-dil-okullari$/, '')

/* ---------- /yurtdisi-dil-okullari/:country/:city ---------- */
export function LanguageCityPage({ country, cities }: { country: string; cities: LanguageCity[] }) {
  const { city = '' } = useParams()
  const ci = cities.find((x) => x.country === country && x.slug === city)
  const c = countryBySlug[country]
  if (!ci || !c) return <NotFound />
  const path = languageCityPath(ci)
  const title = `${ci.name} Dil Okulları`
  const image = ci.image ?? c.image
  const from = languageFromByCountry[c.slug]
  const priceCity = c.slug === 'ingiltere' ? ukPriceCities.find((x) => x.slug === priceCitySlug(ci.slug) && x.schools.length) : undefined
  const siblings = languageCitiesFor(c.slug).filter((x) => x.slug !== ci.slug)
  const visa = c.slug === 'ingiltere' ? ukVisa.language : c.visa
  const work = c.slug === 'ingiltere' ? ukWork.visitor : c.work
  const faqs = dedupeFaqs([...ci.faqs, { q: `${ci.loc} dil eğitimi için vize gerekiyor mu?`, a: visa }], 9)
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${title}: ${ci.loc} dil eğitimi danışmanlığı`,
      description: ci.description,
      serviceType: 'Yurt dışı dil eğitimi danışmanlığı',
      url: abs(path),
      areaServed: { '@type': 'Country', name: 'Türkiye' },
      provider: { '@id': ORG_ID },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Place',
      name: ci.name,
      containedInPlace: { '@type': 'Country', name: c.name },
    },
  ]

  return (
    <>
      <Seo title={ci.seoTitle} description={ci.description} path={path} image={image} jsonLd={ld} />
      <PageHero
        image={image}
        crumbs={[{ label: 'Dil okulları', to: '/yurtdisi-dil-okullari' }, { label: c.name, to: `/yurtdisi-dil-okullari/${c.slug}` }, { label: ci.name }]}
        kicker={<RouteCode to={ci.code} light />}
        title={title}
        lead={ci.lead}
        aside={
          <div className="factcard">
            <p className="factcard__h">{ci.name} kısaca</p>
            <dl>
              {ci.facts.map((f) => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}
              {from?.price ? <div><dt>Başlangıç</dt><dd>{languageFromLabel(from)}</dd></div> : null}
            </dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Ücretsiz bilgi al</Btn>
        {priceCity && <Btn to={`/ingiltere-dil-okullari-fiyat-listesi/${priceCity.slug}`} variant="light" size="lg">{ci.name} fiyat listesi</Btn>}
      </PageHero>

      <section className="container snippet" aria-labelledby="ozet-h">
        <div className="snippet__in">
          <h2 id="ozet-h" className="sr-only">{title}: özet</h2>
          <p>{ci.summary}</p>
        </div>
      </section>

      <nav className="anchors" aria-label="Sayfa içi">
        <div className="container">
          <a href="#genel">Genel bakış</a>
          <a href="#kurslar">Kurslar</a>
          <a href="#konaklama">Konaklama</a>
          <a href="#maliyet">Yaşam maliyeti</a>
          <a href="#yasam">Günlük yaşam</a>
          <a href="#vize">Vize</a>
          <a href="#sss">SSS</a>
        </div>
      </nav>

      <div className="container detail">
        <article className="detail__main">
          <section id="genel" className="dsec">
            <h2>{ci.loc} Dil Eğitimi</h2>
            {ci.intro.map((p, i) => <p key={i} className={i === 0 ? 'lead-strong' : undefined}><Rich text={p} /></p>)}
          </section>

          <section className="dsec">
            <h2>Neden {ci.name}?</h2>
            <dl className="featlist featlist--2">
              {ci.why.map((w) => <div key={w.title}><dt>{w.title}</dt><dd><Rich text={w.text} /></dd></div>)}
            </dl>
          </section>

          <section id="kurslar" className="dsec">
            <h2>{ci.loc} Dil Kursu Seçenekleri</h2>
            <ul className="optlist">
              {ci.courses.map((k) => <li key={k.title}><strong>{k.title}</strong><span><Rich text={k.text} /></span></li>)}
            </ul>
            {priceCity && (
              <p className="note"><Icon name="bolt" size={16} /> Okulları ve ücretleri karşılaştırın: <Link to={`/ingiltere-dil-okullari-fiyat-listesi/${priceCity.slug}`}>{ci.name} dil okulları fiyat listesi</Link></p>
            )}
          </section>

          <section className="dsec">
            <h2>Okulların Bulunduğu Bölgeler</h2>
            <ul className="citylist">
              {ci.areas.map((a) => <li key={a.name}><h3>{a.name}</h3><p><Rich text={a.text} /></p></li>)}
            </ul>
          </section>

          <section id="konaklama" className="dsec">
            <h2>{ci.loc} Öğrenci Konaklaması</h2>
            {ci.accommodation.map((p, i) => <p key={i}><Rich text={p} /></p>)}
          </section>

          <section id="maliyet" className="dsec">
            <h2>{ci.loc} Yaşam Maliyeti</h2>
            <div className="tablewrap">
              <table className="ctable">
                <thead><tr><th scope="col">Kalem</th><th scope="col">Yaklaşık tutar</th><th scope="col">Not</th></tr></thead>
                <tbody>
                  {ci.costs.map((x) => <tr key={x.item}><th scope="row">{x.item}</th><td><strong>{x.value}</strong></td><td>{x.note ?? ''}</td></tr>)}
                </tbody>
              </table>
            </div>
            <p className="muted small">Tutarlar yaklaşıktır; sezon, semt ve kur değişimine göre farklılık gösterir. Dil kursu ücretleri bu tabloya dahil değildir; güncel okul fiyatlarını size yazılı olarak iletiyoruz.</p>
          </section>

          <section id="yasam" className="dsec">
            <h2>Ulaşım, İklim ve Günlük Yaşam</h2>
            {ci.daily.map((p, i) => <p key={i}><Rich text={p} /></p>)}
          </section>

          <section className="dsec">
            <h2>Hafta Sonu Gezileri</h2>
            <ul className="citylist">
              {ci.trips.map((t) => <li key={t.name}><h3>{t.name}</h3><p><Rich text={t.text} /></p></li>)}
            </ul>
          </section>

          <section className="dsec">
            <h2>{ci.name} Kimler için Uygun?</h2>
            <CheckList items={ci.fit} cols={2} />
            {ci.compare && <p className="note"><Icon name="bolt" size={16} /> <Rich text={ci.compare} /></p>}
          </section>

          <section id="vize" className="dsec">
            <h2>Vize ve Çalışma Hakkı</h2>
            <div className="infogrid">
              <div><h3><Icon name="file" size={18} /> Vize</h3><p>{visa}</p></div>
              <div><h3><Icon name="user" size={18} /> Çalışma hakkı</h3><p>{work}</p></div>
            </div>
            <p className="muted small">Vize ve çalışma koşulları ülkelerin göç mevzuatına göre değişebilir. Başvuru öncesinde güncel koşulları birlikte kontrol ediyoruz. Ayrıntılar: <Link to="/hizmetler/vize-danismanligi">vize danışmanlığı</Link>.</p>
          </section>

          <section id="sss" className="dsec">
            <h2>{title} Hakkında Sık Sorulanlar</h2>
            <FaqList items={faqs} />
          </section>
        </article>

        <aside className="detail__side" id="form">
          <div className="sticky">
            <LeadForm variant="compact" source={`dil-sehir:${c.slug}:${ci.slug}`} defaultProgram="Dil okulu" defaultCountry={c.name} title={`${ci.name} dil okulları için ücretsiz bilgi alın`} note="Formu doldurun, danışmanımız aynı gün içinde size dönsün." />
          </div>
        </aside>
      </div>

      <section className="section section--mist">
        <div className="container">
          {siblings.length > 0 && (
            <div className="related">
              <h2 className="h3">{c.loc} Diğer Dil Okulu Şehirleri</h2>
              <ul className="chips">
                {siblings.map((s) => <li key={s.slug}><Link to={languageCityPath(s)}>{s.name} dil okulları</Link></li>)}
              </ul>
            </div>
          )}
          <div className="related">
            <h2 className="h3">{c.name} Rehberleri</h2>
            <ul className="chips">
              <li><Link to={`/yurtdisi-dil-okullari/${c.slug}`}>{c.name} dil okulları</Link></li>
              <li><Link to={`/ulkeler/${c.slug}`}>{c.name} ülke rehberi</Link></li>
              {c.programs.filter((k) => k !== 'dil').length > 0 && <li><Link to={`/ulkeler/${c.slug}`}>{c.loc} diğer programlar</Link></li>}
            </ul>
          </div>
        </div>
      </section>
      <CtaBand title={`${ci.loc} dil eğitimi planınızı birlikte kuralım.`} />
    </>
  )
}
