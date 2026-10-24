import { Link, useParams } from 'react-router-dom'
import { ORG_ID, abs } from '../seo/schema'
import { Seo, Btn, SectionHead, FaqList, CheckList, RouteCode, Stars } from '../components/ui'
import { Icon } from '../components/Icon'
import { BoardingPass, RouteSteps, ReadMore } from '../components/signature'
import { PageHero, CtaBand } from '../components/layouts'
import { LeadForm } from '../components/LeadForm'
import { programs, programByKey, countriesFor, type Program } from '../data/programs'
import { countries, countryBySlug, type Country, type ProgramKey } from '../data/countries'
import { languageFromPrices, languageFromByCountry, languageFromLabel } from '../data/packages'
import { cities, type City } from '../data/cities'
import { ukProgramBlocks, ukUpdated, type InfoCard, type ProgramBlocks } from '../data/uk'
import { dedupeFaqs } from '../lib/faq'
import { reviews, universities } from '../data/social'
import { guidesForProgram, guidesForCountry } from '../data/guides'
import { deep, countryDeep, type DeepSection } from '../data/deep'
import { postsForCountry, postsForProgram, formatDate, type Post } from '../data/blog'
import { Rich } from '../components/Rich'
import { languageCitiesFor, languageCityPath } from '../data/languageCities/list'
import { universitiesFor, universityPath } from '../data/universities/list'
import { priceList, pricePath } from '../data/prices/list'
import NotFound from './NotFound'
import { cardImg } from '../lib/img'
import { titleCase } from '../lib/text'

/** Program × ülke sayfalarında öne çıkan ek bağlantılar (online programlar, fiyat listesi, konaklama). */
const crossLinks: Record<string, { text: string; to: string; label: string }[]> = {
  'lise:kanada': [{ text: 'Türkiye’den ayrılmadan Kanada lise diploması almak ister misiniz?', to: '/online-egitim/kanada-online-lise-diplomasi', label: 'Kanada Online Lise Diploması (OSSD)' }],
  'lisans:ingiltere': [{ text: 'İşinizi bırakmadan, %100 online İngiliz lisans diploması:', to: '/online-egitim/ingiltere-online-lisans-yuksek-lisans', label: 'İngiltere Online Lisans ve Top-up' }],
  'yuksek-lisans:ingiltere': [{ text: 'Çalışırken, vize gerektirmeden İngiliz yüksek lisans diploması:', to: '/online-egitim/ingiltere-online-lisans-yuksek-lisans', label: 'İngiltere Online MBA' }],
  'lisans:almanya': [{ text: 'YKS şartı olmadan, İngilizce eğitim veren akredite okullar:', to: '/almanyadaki-ozel-universiteler', label: 'Almanya’daki Özel Üniversiteler' }],
  'lisans:cekya': [{ text: 'Ücretler, nostrifikasyon, başvuru takvimi ve üniversite listesi:', to: '/cekya-universiteleri', label: 'Çekya Üniversiteleri Rehberi' }],
  'yuksek-lisans:cekya': [{ text: 'Ücretler, başvuru takvimi ve üniversite listesi:', to: '/cekya-universiteleri', label: 'Çekya Üniversiteleri Rehberi' }],
  'yuksek-lisans:almanya': [{ text: 'İngilizce yüksek lisans ve MBA programları için:', to: '/almanyadaki-ozel-universiteler', label: 'Almanya’daki Özel Üniversiteler' }],
  'dil:ingiltere': [
    { text: 'Okulları ve fiyatları şehir şehir karşılaştırın:', to: '/ingiltere-dil-okullari-fiyat-listesi', label: 'İngiltere Dil Okulları Fiyat Listesi' },
    { text: 'Konaklamanızı da birlikte planlayalım:', to: '/ogrenci-konaklama', label: 'Londra Öğrenci Yurtları' },
  ],
}

/** /yurtdisi-dil-okullari karşılaştırma tablosu (vize ve çalışma özetleri countries.ts metinleriyle uyumlu). */
const languageCompare = [
  { slug: 'ingiltere', level: 'Yüksek', visa: '6 aya kadar Standard Visitor; 6 aydan uzun, 11 aya kadar Short-term Study', work: 'Dil kursunda çalışma hakkı yok' },
  { slug: 'malta', level: 'Uygun', visa: 'Schengen ülkesi: 90 güne kadar kısa süreli, daha uzun programlarda ulusal (D) vize', work: 'Uzun dönem programlarda belirli süre sonra koşullu yarı zamanlı izin' },
  { slug: 'irlanda', level: 'Orta', visa: 'Vize gerekir; 90 günden uzun programlarda IRP kaydı ve ILEP listesindeki okullar', work: 'Uygun programlarda dönem içinde haftada 20, tatillerde 40 saate kadar' },
  { slug: 'kanada', level: 'Orta–yüksek', visa: '6 aya kadar ziyaretçi vizesi, daha uzun programlarda Study Permit', work: 'Yalnızca dil kursunda yok; uygun Study Permit programlarında ve co-op’ta var' },
  { slug: 'dubai', level: 'Uygun', visa: 'Kısa dönemde turist/öğrenci vizesi, uzun dönemde okul sponsorluğunda oturum izni', work: 'Öğrenci oturum izniyle belirli koşullarda part-time' },
]

const formProgram: Record<ProgramKey, string> = {
  dil: 'Dil okulu',
  yaz: 'Yaz okulu',
  lise: 'Lise',
  lisans: 'Üniversite',
  'yuksek-lisans': 'Yüksek lisans',
  'work-study': 'Work and study',
}

/* ---------- /yurtdisi-egitim ---------- */
export function ProgramsOverview() {
  return (
    <>
      <Seo title="Yurtdışı Eğitim Programları" description="Yurtdışında üniversite, yüksek lisans, dil okulu, yaz okulu, lise ve work and study programlarımıza göz atın." path="/yurtdisi-egitim" />
      <PageHero
        tone="mist"
        crumbs={[{ label: 'Yurtdışı eğitim programları' }]}
        title="Yurtdışı eğitim programlarımız"
        lead="Yurtdışında üniversite, yüksek lisans, dil okulu, yaz okulu, lise ve work and study programlarımıza göz atın. Her program için ülke, şehir ve okul seçiminden vizeye kadar yanınızdayız."
      >
        <Btn to="/basvuru" icon="arrow">Hangi program bana uygun?</Btn>
      </PageHero>
      <section className="section">
        <div className="container progrid">
          {programs.map((p, i) => (
            <Link key={p.key} to={`/${p.slug}`} className={`procard ${i === 0 ? 'procard--wide' : ''}`}>
              <img {...cardImg(p.image, '(max-width: 600px) 92vw, 640px')} alt="" loading={i < 2 ? 'eager' : 'lazy'} width="800" height="560" />
              <div className="procard__tx">
                <span className="procard__trait">{p.trait}</span>
                <h2>{p.name}</h2>
                <p>{p.lead}</p>
                <span className="procard__meta">{countriesFor(p.key).length} ülke <Icon name="arrow" size={16} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section section--tight">
        <div className="container">
          <SectionHead title="Online eğitim: Türkiye’den uluslararası diploma" intro="Kanada lise diplomasını evden alın ya da işinizi bırakmadan İngiliz lisans ve MBA diplomasına uzanın." action={{ label: 'Online eğitim', to: '/online-egitim' }} />
          <div className="minipkgs">
            <Link to="/online-egitim/kanada-online-lise-diplomasi" className="minipkg"><span className="code">YYZ</span><strong>Kanada online lise (OSSD)</strong><span>14–20 yaş, 8–12 ders ile mezuniyet</span><Icon name="arrow" size={16} /></Link>
            <Link to="/online-egitim/ingiltere-online-lisans-yuksek-lisans" className="minipkg"><span className="code">LHR</span><strong>İngiltere online lisans ve MBA</strong><span>%100 online, vize gerekmez</span><Icon name="arrow" size={16} /></Link>
            <Link to="/ogrenci-konaklama" className="minipkg"><span className="code">LDN</span><strong>Öğrenci konaklaması</strong><span>Londra, Brighton, Leeds, Dublin yurtları</span><Icon name="arrow" size={16} /></Link>
          </div>
        </div>
      </section>
      <section className="section section--mist">
        <div className="container">
          <SectionHead title="Programları karşılaştırın" intro="Süre, yaş grubu ve başlangıç dönemlerine hızlı bir bakış." />
          <div className="tablewrap">
            <table className="ctable">
              <thead>
                <tr><th scope="col">Program</th><th scope="col" colSpan={4}>Temel bilgiler</th></tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p.key}>
                    <th scope="row"><Link to={`/${p.slug}`}>{p.name}</Link></th>
                    {p.facts.map((f) => <td key={f.label}><small>{f.label}</small>{f.value}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

/* ---------- Program hub ---------- */
export function ProgramHub({ programKey }: { programKey: ProgramKey }) {
  const p = programByKey[programKey]
  const list = countriesFor(p.key)
  const showPackages = p.key === 'dil'
  return (
    <>
      <Seo title={p.name} description={`${p.lead} ${list.length} ülkede ${p.short.toLowerCase()} seçenekleri, başvuru süreci, gerekli belgeler ve sık sorulan sorular.`} path={`/${p.slug}`} />
      <PageHero
        image={p.image}
        crumbs={[{ label: 'Programlar', to: '/yurtdisi-egitim' }, { label: p.name }]}
        kicker={p.trait}
        title={p.name}
        lead={p.lead}
        aside={<FactCard facts={p.facts} title={`${list.length} ülkede ${p.short.toLowerCase()}`} />}
      >
        <Btn to="/basvuru" size="lg" icon="arrow">Ücretsiz danışmanlık al</Btn>
        {showPackages && <Btn to="/her-sey-dahil-paketler" variant="light" size="lg">Her Şey Dahil Paketler</Btn>}
      </PageHero>

      <section className="section">
        <div className="container twocol twocol--wide">
          <div className="prose prose--lead">
            <p className="lead-strong">{p.promise}</p>
            {p.intro.map((t) => <p key={t.slice(0, 20)}>{t}</p>)}
          </div>
          <aside className="panel">
            <h2 className="panel__h">Kimler İçin Uygun?</h2>
            <CheckList items={p.audience} />
          </aside>
        </div>
      </section>

      <section className="section section--mist" aria-labelledby="c-h">
        <div className="container">
          <SectionHead id="c-h" title={`Ülkeye göre ${p.short.toLowerCase()} seçenekleri`} intro="Ülke kartına tıklayarak şehirleri, vize koşullarını, yaşam maliyetini ve sık sorulan soruları inceleyin." />
          <div className="passgrid">
            {list.map((c, i) => (
              <BoardingPass key={c.slug} country={c} to={`/${p.slug}/${c.slug}`} title={p.countryTitle(c)} programs={false} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="f-h">
        <div className="container">
          <SectionHead id="f-h" title="Program seçenekleri" intro="Hedefinize göre farklı yoğunluk ve içerikte programlar." />
          <dl className="featlist">
            {p.features.map((f) => (
              <div key={f.title}><dt>{f.title}</dt><dd>{f.text}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <GuideStrip items={guidesForProgram(p.key)} title={`${p.short} bilgi bankası`} intro="Karar vermeden önce okumanızı önerdiğimiz rehberler." />

      {postsForProgram(p.key).length > 0 && (
        <section className="section section--mist">
          <div className="container">
            <SectionHead title={`${p.name} blog yazıları`} action={{ label: 'Tüm yazılar', to: '/blog' }} />
            <PostList items={postsForProgram(p.key).slice(0, 6)} grid />
          </div>
        </section>
      )}

      <section className="section section--deep" aria-labelledby="s-h">
        <div className="container">
          <SectionHead id="s-h" title="Süreç nasıl ilerler?" intro="Her adımda ne olacağını ve sizden ne beklendiğini en baştan bilirsiniz." />
          <RouteSteps steps={p.steps} dark />
        </div>
      </section>

      <section className="section">
        <div className="container twocol">
          <div className="panel panel--line">
            <h2 className="panel__h">Gerekli Belgeler</h2>
            <CheckList items={p.requirements} />
            <Link to="/kaynaklar" className="textlink">Örnek belgeleri inceleyin <Icon name="arrow" size={15} /></Link>
          </div>
          <div className="panel panel--line">
            <h2 className="panel__h">Fiyatı Neler Belirler?</h2>
            <CheckList items={p.costFactors} />
            <p className="muted small">Güncel okul fiyatları ve kampanyalar için ücretsiz ön görüşmede yazılı teklif hazırlıyoruz.</p>
          </div>
        </div>
      </section>

      {showPackages && (
        <section className="section section--mist">
          <div className="container">
            <SectionHead
              title="Dil Eğitimi Başlangıç Fiyatları"
              intro="Dil eğitimlerinde 1 haftadan 52 haftaya kadar dilediğiniz süreyi seçebilir, programı yalnızca eğitim ve konaklama olarak da planlayabilirsiniz. Uçak bileti, vize ve aktivitelerin tek fiyatta olduğu seçenekler için Her Şey Dahil Paketlerimize göz atın."
              action={{ label: 'Her Şey Dahil Paketler', to: '/her-sey-dahil-paketler' }}
            />
            <div className="minipkgs">
              {languageFromPrices.map((l) => (
                <Link key={l.country} to={`/${p.slug}/${l.country}`} className="minipkg">
                  <span className="code">{l.code}</span>
                  <strong>{l.city}</strong>
                  <span>{languageFromLabel(l)}</span>
                  <Icon name="arrow" size={16} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {showPackages && (
        <section className="section" aria-labelledby="cmp-h">
          <div className="container">
            <SectionHead id="cmp-h" title="Ülkelere göre dil okulu karşılaştırması" intro="Bütçe, vize ve çalışma hakkı açısından en çok tercih edilen beş ülke. Vize ve çalışma koşulları değişebilir; başvuru öncesinde güncel kuralları birlikte kontrol ediyoruz." />
            <div className="tablewrap">
              <table className="ctable ctable--auto">
                <thead><tr><th scope="col">Ülke</th><th scope="col">Fiyat seviyesi</th><th scope="col">Vize</th><th scope="col">Çalışma hakkı</th></tr></thead>
                <tbody>
                  {languageCompare.map((r) => {
                    const from = languageFromByCountry[r.slug]
                    return (
                      <tr key={r.slug}>
                        <th scope="row"><Link to={`/${p.slug}/${r.slug}`}>{countryBySlug[r.slug].name}</Link></th>
                        <td data-label="Fiyat seviyesi">{r.level}{from?.price ? ` · ${from.weeks} hafta ${from.price.toLocaleString('tr-TR')} ${from.currencySymbol}’dan` : ''}</td>
                        <td data-label="Vize">{r.visa}</td>
                        <td data-label="Çalışma hakkı">{r.work}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {showPackages && (
        <section className="section section--mist" aria-labelledby="sehir-h">
          <div className="container">
            <SectionHead id="sehir-h" title="Şehir Şehir Dil Okulları" intro="Okulların yoğunlaştığı semtler, konaklama seçenekleri, yaşam maliyeti ve hafta sonu gezileriyle hazırladığımız şehir rehberleri." />
            {list.filter((c) => languageCitiesFor(c.slug).length).map((c) => (
              <div key={c.slug} className="related">
                <h3 className="h3"><Link to={`/${p.slug}/${c.slug}`}>{c.name} dil okulları</Link></h3>
                <ul className="chips">
                  {languageCitiesFor(c.slug).map((ci) => <li key={ci.slug}><Link to={languageCityPath(ci)}>{ci.name} dil okulları</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <div className="container twocol">
          <div>
            <h2 className="h2">Sıkça Sorulan Sorular</h2>
            <FaqList items={p.faqs} />
          </div>
          <div>
            <h2 className="h2">{p.seo.title}</h2>
            <ReadMore>{p.seo.body.map((t) => <p key={t.slice(0, 20)}>{t}</p>)}</ReadMore>
          </div>
        </div>
      </section>

      <CtaBand title={`${p.name} için yol haritanızı çıkaralım.`} />
    </>
  )
}

function FactCard({ facts, title }: { facts: { label: string; value: string }[]; title: string }) {
  return (
    <div className="factcard">
      <p className="factcard__h">{title}</p>
      <dl>
        {facts.map((f) => (<div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>))}
      </dl>
    </div>
  )
}

/* ---------- Program × country ---------- */
export function ProgramCountry({ programKey }: { programKey: ProgramKey }) {
  const { country: slug = '' } = useParams()
  const p = programByKey[programKey]
  const c = countryBySlug[slug]
  if (!c || !c.programs.includes(programKey)) return <NotFound />
  const title = p.countryTitle(c)
  const note = c.notes?.[programKey]
  const d = deep[`${p.key}:${c.slug}`]
  const faqs = dedupeFaqs([...(d?.faqs ?? []), ...countryFaqs(p, c)])
  const blocks = programBlocks(programKey, c)
  const relPosts = postsForCountry(c.slug).filter((x) => x.programs?.includes(p.key)).concat(postsForProgram(p.key).filter((x) => !x.countries?.includes(c.slug))).slice(0, 3)
  const siblings = countriesFor(p.key).filter((x) => x.slug !== c.slug)
  const otherPrograms = c.programs.filter((k) => k !== programKey).map((k) => programByKey[k])
  const path = `/${p.slug}/${c.slug}`
  const relGuides = [...guidesForCountry(c.slug), ...guidesForProgram(p.key)].filter((g, i, a) => a.findIndex((x) => x.slug === g.slug) === i).slice(0, 6)

  return (
    <>
      <Seo title={d?.seoTitle ?? title} description={d?.description ?? `${p.countryLead(c)} ${c.name} için vize, şehirler, yaşam maliyeti ve başvuru süreci.`} path={path} image={c.image} jsonLd={serviceLd(d?.h1 ?? title, d?.description ?? p.countryLead(c), path)} />
      <PageHero
        image={c.image}
        crumbs={[{ label: p.name, to: `/${p.slug}` }, { label: c.name }]}
        kicker={<RouteCode to={c.code} light />}
        title={d?.h1 ?? title}
        lead={d?.lead ?? p.countryLead(c)}
        aside={
          <div className="factcard">
            <p className="factcard__h">{c.name} kısaca</p>
            <dl>
              <div><dt>Dil</dt><dd>{c.language}</dd></div>
              <div><dt>Para birimi</dt><dd>{c.currency}</dd></div>
              <div><dt>Uçuş</dt><dd>{c.flightHours}</dd></div>
              <div><dt>Popüler şehir</dt><dd>{blocks.popularCities.join(', ')}</dd></div>
              {programKey === 'dil' && languageFromByCountry[c.slug]?.price && (
                <div><dt>Başlangıç</dt><dd>{languageFromLabel(languageFromByCountry[c.slug])}</dd></div>
              )}
            </dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Ücretsiz bilgi al</Btn>
      </PageHero>

      {d?.summary && (
        <section className="container snippet" aria-labelledby="ozet-h">
          <div className="snippet__in">
            <h2 id="ozet-h" className="sr-only">{d.h1 ?? title}: özet</h2>
            <p>{d.summary.text}</p>
            <dl className="facts facts--row">
              {d.summary.facts.map((f) => (<div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>))}
            </dl>
          </div>
        </section>
      )}

      <nav className="anchors" aria-label="Sayfa içi">
        <div className="container">
          <a href="#genel">Genel bakış</a>
          <a href="#neden">Neden {c.name}?</a>
          <a href="#program">Program</a>
          <a href="#sehirler">Şehirler</a>
          <a href="#vize">{blocks.infoTitle}</a>
          <a href="#sss">SSS</a>
        </div>
      </nav>

      <div className="container detail">
        <article className="detail__main">
          <section id="genel" className="dsec">
            <h2>{c.loc} {p.short.toLowerCase()}</h2>
            <p className="lead-strong">{c.intro}</p>
            {note ? <p>{note}</p> : <p>{p.intro[0]}</p>}
            <p>{p.promise}</p>
            {(p.key === 'lisans' || p.key === 'yuksek-lisans') && priceList.filter((x) => x.country === c.slug).map((x) => (
              <p key={x.slug} className="note"><Icon name="bolt" size={16} /> Eğitim ücretleri, yaşam giderleri ve örnek bütçeler: <Link to={pricePath(x)}>{titleCase(x.label)}</Link></p>
            ))}
            {crossLinks[`${p.key}:${c.slug}`]?.map((x) => (
              <p key={x.to} className="note"><Icon name="bolt" size={16} /> {x.text} <Link to={x.to}>{x.label}</Link></p>
            ))}
          </section>

          {d?.sections.map((sec, i) => <DeepBlock key={sec.h} sec={sec} id={i === 0 ? 'detay' : undefined} />)}

          <section id="neden" className="dsec">
            <h2>Neden {c.name}?</h2>
            <dl className="featlist featlist--2">
              {blocks.highlights.map((h) => (<div key={h.title}><dt>{h.title}</dt><dd>{h.text}</dd></div>))}
            </dl>
          </section>

          <section id="program" className="dsec">
            <h2>Program Seçenekleri</h2>
            <dl className="facts facts--row">
              {p.facts.map((f) => (<div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>))}
            </dl>
            <ul className="optlist">
              {p.features.map((f) => (<li key={f.title}><strong>{f.title}</strong><span>{f.text}</span></li>))}
            </ul>
          </section>

          <section id="sehirler" className="dsec">
            <h2>Popüler Şehirler</h2>
            {programKey === 'dil' && languageCitiesFor(c.slug).length > 0 ? (
              <ul className="citylist citylist--grid">
                {languageCitiesFor(c.slug).map((ci) => (
                  <li key={ci.slug}>
                    <h3><Link to={languageCityPath(ci)}>{ci.name} dil okulları</Link></h3>
                    <p>{ci.lead}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <CityList country={c} list={blocks.cities} />
            )}
          </section>

          {(programKey === 'lisans' || programKey === 'yuksek-lisans') && universitiesFor(c.slug).length > 0 && (
            <section id="universiteler" className="dsec">
              <h2>{c.name} Üniversiteleri</h2>
              <p>Kabul şartları, yaklaşık ücretler, bölümler ve başvuru takvimiyle tek tek incelediğimiz üniversiteler:</p>
              <ul className="chips">
                {universitiesFor(c.slug).map((u) => <li key={u.slug}><Link to={universityPath(u)}>{u.name}</Link></li>)}
              </ul>
              <p><Link to={`/universiteler/${c.slug}`} className="textlink">Tüm {c.name} üniversiteleri <Icon name="arrow" size={15} /></Link></p>
            </section>
          )}

          <section id="vize" className="dsec">
            <h2>{blocks.infoTitle}</h2>
            <div className="infogrid">
              {blocks.info.map((x) => <div key={x.title}><h3><Icon name={x.icon} size={18} /> {x.title}</h3><p>{x.text}</p></div>)}
            </div>
            <p className="muted small">Vize ve çalışma koşulları ülkelerin göç mevzuatına göre değişebilir. Başvuru öncesinde güncel koşulları birlikte kontrol ediyoruz.{c.slug === 'ingiltere' && <> Son güncelleme: <time dateTime={ukUpdated}>{formatDate(ukUpdated)}</time>.</>}</p>
          </section>

          <section className="dsec">
            <h2>Süreç</h2>
            <RouteSteps steps={p.steps} />
          </section>

          <section className="dsec">
            <h2>Gerekli Belgeler</h2>
            <CheckList items={p.requirements} cols={2} />
          </section>

          {d?.reviewProgram && reviews.some((r) => r.program === d.reviewProgram) && (
            <section className="dsec">
              <h2>Veli ve Öğrenci Yorumları</h2>
              <div className="revlist">
                {reviews.filter((r) => r.program === d.reviewProgram).map((r) => (
                  <figure key={r.name} className="quote">
                    <Stars />
                    <blockquote>{r.text}</blockquote>
                    <figcaption>{r.name}{r.country ? ` · ${r.program}, ${r.country}` : ''} · Google yorumu</figcaption>
                  </figure>
                ))}
              </div>
              <p><Link to="/musteri-yorumlari" className="textlink">Tüm yorumlar <Icon name="arrow" size={15} /></Link></p>
            </section>
          )}

          {relGuides.length > 0 && (
            <section className="dsec">
              <h2>Okumanızı Önerdiğimiz Rehberler</h2>
              <ul className="klist klist--compact">
                {relGuides.map((g) => (
                  <li key={g.slug}><Link to={`/bilgi-bankasi/${g.slug}`}><strong>{g.title}</strong><span>{g.summary}</span><Icon name="arrow" size={18} /></Link></li>
                ))}
              </ul>
            </section>
          )}

          {relPosts.length > 0 && (
            <section className="dsec">
              <h2>Blogdan: {title}</h2>
              <PostList items={relPosts} />
            </section>
          )}

          <section id="sss" className="dsec">
            <h2>{d?.h1 ?? title} Hakkında Sık Sorulanlar</h2>
            <FaqList items={faqs} />
          </section>
        </article>

        <aside className="detail__side" id="form">
          <div className="sticky">
            <LeadForm variant="compact" source={`program:${p.key}:${c.slug}`} defaultProgram={formProgram[p.key]} defaultCountry={c.name} title={`${title} için ücretsiz bilgi alın`} note="Formu doldurun, danışmanımız aynı gün içinde size dönsün." />
          </div>
        </aside>
      </div>

      <section className="section section--mist">
        <div className="container">
          {otherPrograms.length > 0 && (
            <div className="related">
              <h2 className="h3">{c.loc} Diğer Programlar</h2>
              <ul className="chips">
                {otherPrograms.map((op) => <li key={op.key}><Link to={`/${op.slug}/${c.slug}`}>{op.countryTitle(c)}</Link></li>)}
                <li><Link to={`/ulkeler/${c.slug}`}>{c.name} ülke rehberi</Link></li>
              </ul>
            </div>
          )}
          <div className="related">
            <h2 className="h3">Diğer Ülkelerde {titleCase(p.short)}</h2>
            <ul className="chips">
              {siblings.map((s) => <li key={s.slug}><Link to={`/${p.slug}/${s.slug}`}>{p.countryTitle(s)}</Link></li>)}
            </ul>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

/** Ülke şablonundan gelen SSS: yalnızca o programa uygun sorular (yaz okulunda çalışma sorusu yok). */
function countryFaqs(p: Program, c: Country) {
  const b = programBlocks(p.key, c)
  const visa = b.info.find((x) => x.title === 'Vize')?.text ?? c.visa
  const cityNames = b.cities.length ? b.cities.map((x) => x.name) : c.cities
  return [
    { q: `${c.loc} ${p.short.toLowerCase()} için vize gerekiyor mu?`, a: visa },
    ...(p.key === 'yaz' ? [] : [{ q: `${c.loc} öğrenciyken çalışabilir miyim?`, a: b.info.find((x) => x.title === 'Çalışma hakkı')?.text ?? c.work }]),
    { q: `${c.name} için hangi şehirleri önerirsiniz?`, a: `${cityNames.join(', ')} öğrencilerimizin tercih ettiği şehirler arasında.${p.key === 'yaz' ? '' : ` ${c.living}`}` },
    ...p.faqs,
  ]
}

const summerInfo = (c: Country): InfoCard[] => [
  { icon: 'file', title: 'Vize', text: c.visa },
  { icon: 'shield', title: 'Güvenlik ve gözetim', text: 'Önerdiğimiz programlarda 7/24 gözetim, belirli öğrenci başına grup lideri, kampüs giriş kontrolü ve acil durum hattı bulunur.' },
  { icon: 'plane', title: 'Refakatsiz çocuk uçuşu', text: 'Havayollarının refakatsiz çocuk (UM) hizmeti kullanılabilir veya uygun dönemlerde refakatli grup uçuşlarına katılınabilir. Okul öğrenciyi havalimanında karşılar.' },
  { icon: 'user', title: 'Muvafakatname', text: '18 yaş altı öğrenciler için noter onaylı muvafakatname hem vize başvurusunda hem yurt dışına çıkışta istenir.' },
]

const cityTag: Partial<Record<ProgramKey, RegExp>> = { dil: /dil/i, yaz: /yaz/i, lisans: /üniversite/i, 'yuksek-lisans': /yüksek lisans/i, 'work-study': /work/i, lise: /lise/i }

/** "Neden …?", "Popüler Şehirler", "Vize, Yaşam ve Çalışma" ve "kısaca" blokları program tipine göre. */
function programBlocks(key: ProgramKey, c: Country): ProgramBlocks {
  const uk = c.slug === 'ingiltere' ? ukProgramBlocks[key] : undefined
  if (uk) return uk
  const all = cities[c.slug] ?? []
  const re = cityTag[key]
  const matching: City[] = re ? all.filter((ci) => ci.tags.some((t) => re.test(t))) : []
  const list = matching.length ? matching : all
  return {
    highlights: c.highlights,
    cities: list,
    popularCities: list.length ? list.slice(0, 3).map((x) => x.name) : c.cities.slice(0, 3),
    infoTitle: key === 'yaz' ? 'Vize, Güvenlik ve Seyahat' : 'Vize, Yaşam ve Çalışma',
    info:
      key === 'yaz'
        ? summerInfo(c)
        : [
            { icon: 'file', title: 'Vize', text: c.visa },
            { icon: 'globe', title: 'Yaşam maliyeti', text: c.living },
            { icon: 'user', title: 'Çalışma hakkı', text: c.work },
          ],
  }
}

/* ---------- /ulkeler ---------- */
export function CountriesIndex() {
  const regions = Array.from(new Set(countries.map((c) => c.region)))
  return (
    <>
      <Seo title="Ülkeler" description="Yurtdışı eğitim için 20’den fazla ülke: İngiltere, Amerika, Kanada, Almanya, Malta, İrlanda, Polonya ve daha fazlası." path="/ulkeler" />
      <PageHero tone="mist" crumbs={[{ label: 'Ülkeler' }]} title="Nerede okumak istersin?" lead="20’den fazla ülkede dil okulu, yaz okulu, lise, üniversite, yüksek lisans ve work and study programları. Her ülke kartında dil, uçuş süresi ve sunduğumuz programlar." />
      {regions.map((r) => (
        <section key={r} className="section section--tight">
          <div className="container">
            <h2 className="regionh">{r}</h2>
            <div className="passgrid">
              {countries.filter((c) => c.region === r).map((c) => <BoardingPass key={c.slug} country={c} to={`/ulkeler/${c.slug}`} />)}
            </div>
          </div>
        </section>
      ))}
      <CtaBand title="Hangi ülkenin size uygun olduğunu birlikte belirleyelim." />
    </>
  )
}

/* ---------- /ulkeler/:slug ---------- */
export function CountryPage() {
  const { slug = '' } = useParams()
  const c = countryBySlug[slug]
  if (!c) return <NotFound />
  const progs = c.programs.map((k) => programByKey[k])
  const cGuides = guidesForCountry(c.slug)
  const cd = countryDeep[c.slug]
  const cPosts = postsForCountry(c.slug).slice(0, 6)
  return (
    <>
      <Seo title={cd?.seoTitle ?? `${c.loc} Eğitim`} description={cd?.description ?? c.metaDescription ?? c.intro} path={`/ulkeler/${c.slug}`} image={c.image} />
      <PageHero
        image={c.image}
        crumbs={[{ label: 'Ülkeler', to: '/ulkeler' }, { label: c.name }]}
        kicker={<RouteCode to={c.code} light />}
        title={cd?.h1 ?? `${c.loc} eğitim`}
        lead={c.tagline}
      >
        <Btn to="/basvuru" size="lg" icon="arrow">Ücretsiz danışmanlık al</Btn>
      </PageHero>

      <section className="section">
        <div className="container twocol twocol--wide">
          <div className="prose prose--lead"><p className="lead-strong">{c.intro}</p></div>
          <div className="factcard factcard--light">
            <p className="factcard__h">{c.name} kısaca</p>
            <dl>
              <div><dt>Dil</dt><dd>{c.language}</dd></div>
              <div><dt>Para birimi</dt><dd>{c.currency}</dd></div>
              <div><dt>Uçuş süresi</dt><dd>{c.flightHours}</dd></div>
              <div><dt>Şehirler</dt><dd>{c.cities.slice(0, 4).join(', ')}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <SectionHead title={`${c.loc} sunduğumuz programlar`} />
          <div className="cprogs">
            {progs.map((p) => (
              <Link key={p.key} to={`/${p.slug}/${c.slug}`} className="cprog">
                <span className="cprog__trait">{p.trait}</span>
                <h3>{p.countryTitle(c)}</h3>
                <p>{c.notes?.[p.key] ?? p.countryLead(c)}</p>
                <span className="textlink">İncele <Icon name="arrow" size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {cd && (
        <section className="section">
          <div className="container narrowcol">
            {cd.sections.map((sec) => <DeepBlock key={sec.h} sec={sec} />)}
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <SectionHead title={`Neden ${c.name}?`} />
          <dl className="featlist featlist--2">
            {c.highlights.map((h) => (<div key={h.title}><dt>{h.title}</dt><dd>{h.text}</dd></div>))}
          </dl>
        </div>
      </section>

      {cPosts.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHead title={`${c.name} hakkında blog yazıları`} action={{ label: 'Tüm yazılar', to: '/blog' }} />
            <PostList items={cPosts} grid />
          </div>
        </section>
      )}

      {cities[c.slug] && (
        <section className="section section--mist">
          <div className="container">
            <SectionHead title={`${c.name} şehir rehberi`} intro="Öğrencilerimizin en çok tercih ettiği şehirler ve öne çıkan yönleri." />
            <CityList country={c} grid />
          </div>
        </section>
      )}

      <section className="section section--deep">
        <div className="container">
          <SectionHead title="Vize, yaşam ve çalışma" />
          <div className="infogrid infogrid--dark">
            <div><h3>Vize</h3><p>{c.visa}</p></div>
            <div><h3>Yaşam maliyeti</h3><p>{c.living}</p></div>
            <div><h3>Çalışma hakkı</h3><p>{c.work}</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twocol">
          <div>
            <h2 className="h2">{c.name} Hakkında Sık Sorulanlar</h2>
            <FaqList items={countryOnlyFaqs(c)} />
          </div>
          <div>
            <h2 className="h2">{c.name} Rehberleri</h2>
            {cGuides.length > 0 ? (
              <ul className="klist klist--compact">
                {cGuides.map((g) => (
                  <li key={g.slug}><Link to={`/bilgi-bankasi/${g.slug}`}><strong>{g.title}</strong><span>{g.summary}</span><Icon name="arrow" size={18} /></Link></li>
                ))}
              </ul>
            ) : (
              <p className="muted">Bu ülke için hazırladığımız rehberler yakında burada. Genel rehberler için <Link to="/bilgi-bankasi">bilgi bankamıza</Link> göz atın.</p>
            )}
            <h3 className="h3 related-h">Aynı bölgedeki diğer ülkeler</h3>
            <ul className="chips">
              {countries.filter((x) => x.region === c.region && x.slug !== c.slug).map((x) => <li key={x.slug}><Link to={`/ulkeler/${x.slug}`}>{x.name}</Link></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container contactsplit">
          <div>
            <h2 className="h2">{c.name} İçin Ücretsiz Ön Görüşme</h2>
            <p className="muted">Hedefinizi ve bütçenizi paylaşın; {c.name} için en uygun okul ve programları yazılı olarak gönderelim.</p>
            <ul className="chips">{c.cities.map((x) => <li key={x}><span>{x}</span></li>)}</ul>
          </div>
          <LeadForm source={`ulke:${c.slug}`} defaultCountry={c.name} />
        </div>
      </section>
    </>
  )
}

function countryOnlyFaqs(c: Country) {
  return [
    { q: `${c.loc} eğitim için vize gerekiyor mu?`, a: c.visa },
    { q: `${c.loc} öğrenciler çalışabilir mi?`, a: c.work },
    { q: `${c.loc} yaşam maliyeti nasıl?`, a: c.living },
    { q: `${c.loc} hangi dilde eğitim alabilirim?`, a: `${c.name}’nin resmi dili/dilleri: ${c.language}. Programa göre ${c.language.split(',')[0]} veya İngilizce eğitim seçenekleri bulunur; dil seviyenize uygun programı birlikte belirliyoruz.` },
    { q: `${c.name} için hangi programları sunuyorsunuz?`, a: `${c.loc} ${c.programs.map((k) => programByKey[k].short.toLowerCase()).join(', ')} programlarında danışmanlık veriyoruz.` },
    { q: `Türkiye’den ${c.hub} ne kadar uzakta?`, a: `İstanbul’dan ${c.hub} uçuşu yaklaşık ${c.flightHours} sürer; aktarmalı uçuşlarda süre değişebilir.` },
  ]
}

function CityList({ country, grid, list = cities[country.slug] }: { country: Country; grid?: boolean; list?: City[] }) {
  if (!list?.length) {
    return (
      <>
        <ul className="chips chips--lg">{country.cities.map((city) => <li key={city}><span>{city}</span></li>)}</ul>
        <p className="muted">{country.living}</p>
      </>
    )
  }
  return (
    <ul className={`citylist ${grid ? 'citylist--grid' : ''}`}>
      {list.map((ci) => (
        <li key={ci.name}>
          <h3>{ci.name}</h3>
          <p>{ci.text}</p>
          <ul className="citylist__tags">{ci.tags.map((t) => <li key={t}>{t}</li>)}</ul>
        </li>
      ))}
    </ul>
  )
}

function GuideStrip({ items, title, intro }: { items: { slug: string; title: string; summary: string }[]; title: string; intro: string }) {
  if (!items.length) return null
  return (
    <section className="section">
      <div className="container">
        <SectionHead title={title} intro={intro} action={{ label: 'Tüm rehberler', to: '/bilgi-bankasi' }} />
        <ul className="guidegrid">
          {items.map((g) => (
            <li key={g.slug}>
              <Link to={`/bilgi-bankasi/${g.slug}`}>
                <Icon name="file" size={22} />
                <strong>{g.title}</strong>
                <span>{g.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function DeepBlock({ sec, id }: { sec: DeepSection; id?: string }) {
  return (
    <section className="dsec" id={id}>
      <h2>{sec.h}</h2>
      {sec.p?.map((t) => <p key={t.slice(0, 32)}><Rich text={t} /></p>)}
      {sec.list && (
        <ul className="article__list">{sec.list.map((t) => <li key={t.slice(0, 32)}><Rich text={t} /></li>)}</ul>
      )}
      {sec.table && (
        <div className="tablewrap">
          <table className="ctable ctable--auto">
            <thead><tr>{sec.table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
            <tbody>{sec.table.rows.map((r) => <tr key={r[0]}>{r.map((cell, i) => (i === 0 ? <th key={i} scope="row"><Rich text={cell} /></th> : <td key={i} data-label={sec.table!.head[i]}><Rich text={cell} /></td>))}</tr>)}</tbody>
          </table>
        </div>
      )}
      {sec.box && (
        <div className="callout callout--ok">
          <Icon name="cap" size={20} />
          <div>
            <p>{sec.box.text}</p>
            <p><Link to={sec.box.link.to} className="textlink">{sec.box.link.label} <Icon name="arrow" size={15} /></Link></p>
          </div>
        </div>
      )}
      {sec.logos && (
        <ul className="unilogos">
          {universities.filter((u) => sec.logos!.includes(u.name)).map((u) => (
            <li key={u.name}><img src={`/img/logos/${u.file}`} alt={u.name} loading="lazy" decoding="async" height="48" /></li>
          ))}
        </ul>
      )}
    </section>
  )
}

function PostList({ items, grid }: { items: Post[]; grid?: boolean }) {
  return (
    <ul className={`postlist ${grid ? 'postlist--grid' : ''}`}>
      {items.map((x) => (
        <li key={x.slug}>
          <Link to={`/blog/${x.slug}`}>
            <img src={x.image.replace('.jpg', '-800.jpg')} alt="" loading="lazy" width="160" height="100" />
            <span>
              <small>{x.category} · {formatDate(x.date)}</small>
              <strong>{x.title}</strong>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function serviceLd(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: 'Yurt dışı eğitim danışmanlığı',
    url: abs(path),
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    provider: { '@id': ORG_ID },
  }
}
