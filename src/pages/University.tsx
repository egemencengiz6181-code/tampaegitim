import { Link, useParams } from 'react-router-dom'
import { ORG_ID, abs } from '../seo/schema'
import { Seo, Btn, FaqList, CheckList, RouteCode, SectionHead } from '../components/ui'
import { Icon } from '../components/Icon'
import { PageHero, CtaBand } from '../components/layouts'
import { LeadForm } from '../components/LeadForm'
import { Rich } from '../components/Rich'
import { countryBySlug, countries } from '../data/countries'
import { universityList, universityPath, universitiesFor, type UniversityMeta } from '../data/universities/list'
import type { University } from '../data/universities/types'
import { priceList, pricePath } from '../data/prices/list'
import { titleCase } from '../lib/text'
import NotFound from './NotFound'

const formProgram = 'Üniversite'

/* ---------- /universiteler/:country/:slug ---------- */
export function UniversityPage({ country, unis }: { country: string; unis: University[] }) {
  const { slug = '' } = useParams()
  const u = unis.find((x) => x.country === country && x.slug === slug)
  const c = countryBySlug[country]
  if (!u || !c) return <NotFound />
  const path = universityPath(u)
  const siblings = universitiesFor(c.slug).filter((x) => x.slug !== u.slug)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name: u.official,
    alternateName: u.name !== u.official ? u.name : undefined,
    url: u.website,
    foundingDate: u.founded,
    address: { '@type': 'PostalAddress', addressLocality: u.city, addressCountry: c.name },
    description: u.description,
    subjectOf: { '@type': 'WebPage', url: abs(path), publisher: { '@id': ORG_ID } },
  }

  return (
    <>
      <Seo title={u.seoTitle} description={u.description} path={path} image={c.image} jsonLd={ld} />
      <PageHero
        image={c.image}
        crumbs={[{ label: 'Üniversiteler', to: '/universiteler' }, { label: c.name, to: `/universiteler/${c.slug}` }, { label: u.name }]}
        kicker={<RouteCode to={c.code} light />}
        title={u.name}
        lead={u.lead}
        aside={
          <div className="factcard">
            <p className="factcard__h">{u.official}</p>
            <dl>
              <div><dt>Şehir</dt><dd>{u.city}</dd></div>
              <div><dt>Kuruluş</dt><dd>{u.founded}</dd></div>
              <div><dt>Tür</dt><dd>{u.type} üniversitesi</dd></div>
              {u.facts.map((f) => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}
            </dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Ücretsiz değerlendirme al</Btn>
      </PageHero>

      <section className="container snippet" aria-labelledby="ozet-h">
        <div className="snippet__in">
          <h2 id="ozet-h" className="sr-only">{u.name}: özet</h2>
          <p>{u.summary}</p>
        </div>
      </section>

      <nav className="anchors" aria-label="Sayfa içi">
        <div className="container">
          <a href="#genel">Genel bakış</a>
          <a href="#bolumler">Bölümler</a>
          <a href="#kabul">Kabul şartları</a>
          <a href="#ucretler">Ücretler</a>
          <a href="#takvim">Başvuru takvimi</a>
          <a href="#sss">SSS</a>
        </div>
      </nav>

      <div className="container detail">
        <article className="detail__main">
          <section id="genel" className="dsec">
            <h2>{u.name} Hakkında</h2>
            {u.intro.map((p, i) => <p key={i} className={i === 0 ? 'lead-strong' : undefined}><Rich text={p} /></p>)}
          </section>

          <section className="dsec">
            <h2>Öne Çıkan Alanlar</h2>
            <dl className="featlist featlist--2">
              {u.strengths.map((s) => <div key={s.title}><dt>{s.title}</dt><dd><Rich text={s.text} /></dd></div>)}
            </dl>
          </section>

          <section id="bolumler" className="dsec">
            <h2>Programlar ve Bölümler</h2>
            {u.programs.map((g) => (
              <div key={g.level}>
                <h3>{g.level}</h3>
                <ul className="chips">{g.items.map((x) => <li key={x}><span>{x}</span></li>)}</ul>
                {g.note && <p className="muted small"><Rich text={g.note} /></p>}
              </div>
            ))}
          </section>

          <section id="kabul" className="dsec">
            <h2>Türk Öğrenciler için Kabul Şartları</h2>
            {u.admission.map((a) => (
              <div key={a.level}>
                <h3>{a.level}</h3>
                <ul className="checks">{a.items.map((t) => <li key={t}><Icon name="check" size={18} /> <span><Rich text={t} /></span></li>)}</ul>
              </div>
            ))}
            <p className="muted small">Genel koşullardır; bölüme ve başvuru dönemine göre değişir. Profilinize göre net şartları birlikte kontrol ediyoruz.</p>
          </section>

          <section id="ucretler" className="dsec">
            <h2>Ücretler ve Yaşam Giderleri</h2>
            <div className="tablewrap">
              <table className="ctable">
                <thead><tr><th scope="col">Kalem</th><th scope="col">Yaklaşık tutar</th><th scope="col">Not</th></tr></thead>
                <tbody>
                  {u.costs.map((x) => <tr key={x.item}><th scope="row">{x.item}</th><td><strong>{x.value}</strong></td><td>{x.note ? <Rich text={x.note} /> : ''}</td></tr>)}
                </tbody>
              </table>
            </div>
            <p className="muted small">Tutarlar yaklaşıktır ve uluslararası öğrenciler içindir; üniversite her yıl günceller. Güncel ücretleri <a href={u.website} target="_blank" rel="noopener noreferrer">üniversitenin resmi sitesinden</a> veya danışmanımızdan teyit edin.</p>
            {u.scholarships && u.scholarships.length > 0 && (
              <>
                <h3>Burs ve Finansman</h3>
                <ul className="checks">{u.scholarships.map((t) => <li key={t}><Icon name="check" size={18} /> <span><Rich text={t} /></span></li>)}</ul>
              </>
            )}
          </section>

          <section className="dsec">
            <h2>Kampüs ve Öğrenci Yaşamı</h2>
            {u.campus.map((p, i) => <p key={i}><Rich text={p} /></p>)}
          </section>

          <section id="takvim" className="dsec">
            <h2>Başvuru Takvimi</h2>
            <dl className="featlist">
              {u.calendar.map((x) => <div key={x.label}><dt>{x.label}</dt><dd><Rich text={x.value} /></dd></div>)}
            </dl>
          </section>

          <section id="sss" className="dsec">
            <h2>{u.name} Hakkında Sık Sorulanlar</h2>
            <FaqList items={u.faqs} />
            <p className="muted small">Bu sayfa üniversitenin kamuya açık bilgilerinden derlenmiş bir rehberdir; üniversitenin resmi yayını değildir.</p>
          </section>
        </article>

        <aside className="detail__side" id="form">
          <div className="sticky">
            <LeadForm variant="compact" source={`universite:${c.slug}:${u.slug}`} defaultProgram={formProgram} defaultCountry={c.name} title={`${u.name} başvurusu için bilgi alın`} note="Not ortalamanıza, dil seviyenize ve bütçenize göre kabul şansınızı ücretsiz değerlendirelim." />
          </div>
        </aside>
      </div>

      <section className="section section--mist">
        <div className="container">
          {siblings.length > 0 && (
            <div className="related">
              <h2 className="h3">{c.loc} Diğer Üniversiteler</h2>
              <ul className="chips">{siblings.map((s) => <li key={s.slug}><Link to={universityPath(s)}>{s.name}</Link></li>)}</ul>
            </div>
          )}
          <div className="related">
            <h2 className="h3">{c.name} Rehberleri</h2>
            <ul className="chips">
              {c.programs.includes('lisans') && <li><Link to={`/lisans-programlari/${c.slug}`}>{c.loc} lisans</Link></li>}
              {c.programs.includes('yuksek-lisans') && <li><Link to={`/yurtdisi-yuksek-lisans/${c.slug}`}>{c.loc} yüksek lisans</Link></li>}
              {priceList.filter((x) => x.country === c.slug).map((x) => <li key={x.slug}><Link to={pricePath(x)}>{titleCase(x.label)}</Link></li>)}
              <li><Link to={`/ulkeler/${c.slug}`}>{c.name} ülke rehberi</Link></li>
            </ul>
          </div>
        </div>
      </section>
      <CtaBand title={`${u.name} başvurunuzu birlikte planlayalım.`} />
    </>
  )
}

function UniCards({ items }: { items: UniversityMeta[] }) {
  return (
    <ul className="citylist citylist--grid">
      {items.map((u) => (
        <li key={u.slug}>
          <h3><Link to={universityPath(u)}>{u.name}</Link></h3>
          <p className="muted small">{u.city} · {u.type}</p>
          <p>{u.lead}</p>
        </li>
      ))}
    </ul>
  )
}

const uniCountries = () => countries.filter((c) => universitiesFor(c.slug).length)

/* ---------- /universiteler ---------- */
export function UniversitiesHub() {
  const list = uniCountries()
  return (
    <>
      <Seo title="Yurt Dışındaki Üniversiteler: Ülke Ülke Rehber" description={`${universityList.length} yurt dışı üniversitesi için kabul şartları, ücretler, bölümler, başvuru takvimi ve kampüs yaşamı: İngiltere’den Kore’ye ülke ülke rehber.`} path="/universiteler" />
      <PageHero
        tone="mist"
        crumbs={[{ label: 'Lisans programları', to: '/lisans-programlari' }, { label: 'Üniversiteler' }]}
        title="Yurt Dışındaki Üniversiteler"
        lead="Türk öğrencilerin en çok araştırdığı üniversiteleri kabul şartları, ücretler, bölümler ve başvuru takvimiyle tek tek inceledik. Ülkenizi seçin, size uygun okulu birlikte belirleyelim."
      >
        <Btn href="#form" size="lg" icon="arrow">Ücretsiz değerlendirme al</Btn>
      </PageHero>
      {list.map((c, i) => (
        <section key={c.slug} className={`section ${i % 2 ? 'section--mist' : ''}`}>
          <div className="container">
            <SectionHead title={<Link to={`/universiteler/${c.slug}`}>{c.name} Üniversiteleri</Link>} action={{ label: `Tümü (${universitiesFor(c.slug).length})`, to: `/universiteler/${c.slug}` }} />
            <UniCards items={universitiesFor(c.slug).slice(0, 6)} />
          </div>
        </section>
      ))}
      <section className="section" id="form">
        <div className="container twocol">
          <div>
            <h2 className="h2">Hangi Üniversite Size Uygun?</h2>
            <CheckList items={['Not ortalamanız ve lise/lisans diplomanız', 'İngilizce veya yerel dil seviyeniz (IELTS, TOEFL, TestDaF...)', 'Bütçeniz: harç ve şehir bazında yaşam gideri', 'Hedef bölüm ve mezuniyet sonrası çalışma planı', 'Burs ve YÖK denkliği beklentisi']} />
          </div>
          <LeadForm source="universiteler" defaultProgram={formProgram} title="Üniversite seçimi için bilgi alın" />
        </div>
      </section>
      <CtaBand />
    </>
  )
}

/* ---------- /universiteler/:country ---------- */
export function UniversitiesCountry() {
  const { country = '' } = useParams()
  const c = countryBySlug[country]
  const items = universitiesFor(country)
  if (!c || !items.length) return <NotFound />
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${c.name} üniversiteleri`,
    itemListElement: items.map((u, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(universityPath(u)), name: u.name })),
  }
  return (
    <>
      <Seo title={`${c.name} Üniversiteleri: Kabul Şartları ve Ücretler`} description={`${c.name} üniversiteleri rehberi: ${items.slice(0, 3).map((u) => u.name).join(', ')} ve ${Math.max(items.length - 3, 0)} üniversite için kabul şartları, ücretler ve başvuru takvimi.`} path={`/universiteler/${c.slug}`} image={c.image} jsonLd={ld} />
      <PageHero
        image={c.image}
        crumbs={[{ label: 'Üniversiteler', to: '/universiteler' }, { label: c.name }]}
        kicker={<RouteCode to={c.code} light />}
        title={`${c.name} Üniversiteleri`}
        lead={`${c.loc} Türk öğrencilerin en çok tercih ettiği ${items.length} üniversite: kabul şartları, yaklaşık ücretler, bölümler ve başvuru takvimi.`}
      >
        <Btn href="#form" size="lg" icon="arrow">Ücretsiz değerlendirme al</Btn>
      </PageHero>
      <section className="section">
        <div className="container">
          <UniCards items={items} />
          <p className="note"><Icon name="bolt" size={16} /> Ülke genelinde başvuru, vize ve yaşam bilgisi için: {c.programs.includes('lisans') && <><Link to={`/lisans-programlari/${c.slug}`}>{c.loc} lisans</Link>{' · '}</>}{c.programs.includes('yuksek-lisans') && <><Link to={`/yurtdisi-yuksek-lisans/${c.slug}`}>{c.loc} yüksek lisans</Link>{' · '}</>}<Link to={`/ulkeler/${c.slug}`}>{c.name} ülke rehberi</Link>{priceList.filter((x) => x.country === c.slug).map((x) => <span key={x.slug}>{' · '}<Link to={pricePath(x)}>{titleCase(x.label)}</Link></span>)}</p>
        </div>
      </section>
      <section className="section section--mist" id="form">
        <div className="container twocol">
          <div>
            <h2 className="h2">Diğer Ülkeler</h2>
            <ul className="chips">{uniCountries().filter((x) => x.slug !== c.slug).map((x) => <li key={x.slug}><Link to={`/universiteler/${x.slug}`}>{x.name} üniversiteleri</Link></li>)}</ul>
          </div>
          <LeadForm source={`universiteler:${c.slug}`} defaultProgram={formProgram} defaultCountry={c.name} title={`${c.loc} üniversite için bilgi alın`} />
        </div>
      </section>
      <CtaBand />
    </>
  )
}
