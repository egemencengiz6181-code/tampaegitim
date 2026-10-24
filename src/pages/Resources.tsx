import { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Seo, Btn, SectionHead, CheckList, FaqList } from '../components/ui'
import { Icon } from '../components/Icon'
import { PageHero, CtaBand } from '../components/layouts'
import { LeadForm } from '../components/LeadForm'
import { guides, guideBySlug, guideGroups, type Guide } from '../data/guides'
import { documents, documentBySlug } from '../data/documents'
import { posts, postBySlug, formatDate, postCategories, categorySlug, type Post } from '../data/blog'
import { parseMarkdown, plainText, wordCount } from '../lib/markdown'
import { Markdown } from '../components/Markdown'

// Yazı metinleri yalnızca bu (lazy) sayfa paketinde yüklenir.
const bodies = import.meta.glob<string>('../../content/blog/*.md', { eager: true, query: '?raw', import: 'default' })
const bodyOf = (slug: string) => bodies[`../../content/blog/${slug}.md`] ?? ''
import { plain, Rich } from '../components/Rich'
import { ORG_ID, abs, personLd, authorPath } from '../seo/schema'
import { publishedAuthor } from '../data/authors'
import { programs, countriesFor, programByKey } from '../data/programs'
import { countries, countryBySlug } from '../data/countries'
import { packages } from '../data/packages'
import { services } from '../data/services'
import { generalFaqs } from '../data/landings'
import { landings } from '../data/landings'
import NotFound from './NotFound'
import { cardImg } from '../lib/img'
import { languageCityList, languageCityPath } from '../data/languageCities/list'
import { universityList, universityPath } from '../data/universities/list'

/* ---------- Knowledge base ---------- */
export function KnowledgeHub() {
  const [q, setQ] = useState('')
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
  }, [hash])
  const term = q.trim().toLocaleLowerCase('tr')
  const match = (g: Guide) => !term || `${g.title} ${g.summary} ${g.group}`.toLocaleLowerCase('tr').includes(term)
  const groups = guideGroups.filter((gr) => guides.some((g) => g.group === gr && match(g)))
  return (
    <>
      <Seo title="Bilgi Bankası" description="Dil okulu, yaz okulu, lise, üniversite, yüksek lisans, work and study, sınavlar, vize ve yurtdışında yaşam hakkında rehber makaleler." path="/bilgi-bankasi" />
      <PageHero tone="mist" crumbs={[{ label: 'Bilgi bankası' }]} title="Bilgi bankası" lead={`Karar vermeden önce bilmeniz gereken her şey: ${guides.length} rehber makale, programlara ve konulara göre düzenlendi.`}>
        <label className="kb-search">
          <Icon name="search" size={18} />
          <span className="sr-only">Rehberlerde ara</span>
          <input type="search" placeholder="Örn. IELTS, vize, foundation" value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
      </PageHero>
      <section className="section">
        <div className="container kb">
          <nav className="kb__toc" aria-label="Konular">
            <p className="kb__toc-h">Konular</p>
            <ul>
              {groups.map((gr) => (
                <li key={gr}><a href={`#${slugify(gr)}`}>{gr}<span>{guides.filter((g) => g.group === gr && match(g)).length}</span></a></li>
              ))}
            </ul>
          </nav>
          <div>
            {groups.length === 0 && <p className="muted">“{q}” için rehber bulunamadı. Farklı bir kelime deneyin veya danışmanlarımıza sorun.</p>}
            {groups.map((gr) => (
              <div key={gr} className="kgroup" id={slugify(gr)}>
                <h2 className="kgroup__h">{gr}</h2>
                <ul className="klist">
                  {guides.filter((x) => x.group === gr && match(x)).map((x) => (
                    <li key={x.slug}>
                      <Link to={`/bilgi-bankasi/${x.slug}`}>
                        <strong>{x.title}</strong>
                        <span>{x.summary}</span>
                        <Icon name="arrow" size={18} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {!term && (
              <div className="kgroup" id="ornek-belgeler">
                <h2 className="kgroup__h">Örnek Belgeler</h2>
                <ul className="klist">
                  {documents.map((d) => (
                    <li key={d.slug}><Link to={`/kaynaklar/${d.slug}`}><strong>{d.title}</strong><span>{d.usage}</span><Icon name="arrow" size={18} /></Link></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      <CtaBand title="Sorunuzun cevabını bulamadınız mı?" text="Danışmanlarımıza sorun; size özel durumunuzu birlikte değerlendirelim." />
    </>
  )
}

const slugify = (t: string) => t.toLocaleLowerCase('tr').replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export function GuidePage({ full }: { full?: Guide }) {
  const { slug = '' } = useParams()
  const g = full ?? guideBySlug[slug]
  if (!g) return <NotFound />
  const related = guides.filter((x) => x.group === g.group && x.slug !== g.slug)
  const program = g.program ? programByKey[g.program] : undefined
  const relCountries = (g.countries ?? []).map((c) => countryBySlug[c]).filter(Boolean)
  return (
    <>
      <Seo title={g.seoTitle ?? g.title} description={g.description ?? (g.summary.length < 110 ? `${g.summary} ${g.group} hakkında Tampa Yurtdışı Eğitim bilgi bankası rehberi.` : g.summary)} path={`/bilgi-bankasi/${g.slug}`} modified={g.updated} jsonLd={{ '@context': 'https://schema.org', '@type': 'Article', headline: g.title, description: g.description ?? g.summary, ...(g.updated ? { dateModified: g.updated } : {}), publisher: { '@type': 'Organization', name: 'Tampa Yurtdışı Eğitim' } }} />
      <PageHero tone="mist" crumbs={[{ label: 'Bilgi bankası', to: '/bilgi-bankasi' }, { label: g.group, to: `/bilgi-bankasi#${slugify(g.group)}` }, { label: g.title }]} kicker={g.group} title={g.title} lead={g.summary} />
      <div className="container detail">
        <article className="detail__main">
          {g.facts && (
            <dl className="facts facts--row">{g.facts.map((f) => (<div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>))}</dl>
          )}
          {g.sections.length > 2 && (
            <nav className="toc" aria-label="Bu sayfada">
              <p className="toc__h">Bu sayfada</p>
              <ol>{g.sections.map((s, i) => <li key={s.h}><a href={`#b${i}`}>{s.h}</a></li>)}</ol>
            </nav>
          )}
          {g.sections.map((s, i) => (
            <section key={s.h} className="dsec" id={`b${i}`}>
              <h2>{s.h}</h2>
              {s.p?.map((t) => <p key={t.slice(0, 24)}><Rich text={t} /></p>)}
              {s.list && <ul className="checks">{s.list.map((t) => <li key={t.slice(0, 32)}><Icon name="check" size={18} /> <span><Rich text={t} /></span></li>)}</ul>}
              {s.table && (
                <div className="tablewrap">
                  <table className="ctable ctable--auto">
                    <thead><tr>{s.table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
                    <tbody>{s.table.rows.map((r) => <tr key={r.join('|')}>{r.map((cell, j) => j === 0 ? <th key={j} scope="row"><Rich text={cell} /></th> : <td key={j} data-label={s.table!.head[j]}><Rich text={cell} /></td>)}</tr>)}</tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
          {g.faqs && g.faqs.length > 0 && (
            <section className="dsec">
              <h2>Sık Sorulan Sorular</h2>
              <FaqList items={g.faqs} />
            </section>
          )}
          {g.updated && <p className="muted small">Son güncelleme: <time dateTime={g.updated}>{formatDate(g.updated)}</time>. Kurallar değişebilir; başvuru öncesinde güncel durumu birlikte kontrol ediyoruz.</p>}
          {(program || relCountries.length > 0) && (
            <section className="dsec">
              <h2 className="h3">İlgili Sayfalar</h2>
              <ul className="chips">
                {program && <li><Link to={`/${program.slug}`}>{program.name}</Link></li>}
                {relCountries.map((c) => <li key={c.slug}><Link to={`/ulkeler/${c.slug}`}>{c.loc} eğitim</Link></li>)}
              </ul>
            </section>
          )}
          {related.length > 0 && (
            <section className="dsec">
              <h2 className="h3">{g.group} Hakkında Diğer Rehberler</h2>
              <ul className="klist klist--compact">
                {related.map((r) => (
                  <li key={r.slug}><Link to={`/bilgi-bankasi/${r.slug}`}><strong>{r.title}</strong><span>{r.summary}</span><Icon name="arrow" size={18} /></Link></li>
                ))}
              </ul>
            </section>
          )}
        </article>
        <aside className="detail__side">
          <div className="sticky">
            <LeadForm variant="compact" source={`rehber:${g.slug}`} title="Sorunuz mu var?" note="Danışmanımız size özel durumunuzu değerlendirsin." />
          </div>
        </aside>
      </div>
    </>
  )
}

/* ---------- Document templates ---------- */
export function DocumentsHub() {
  return (
    <>
      <Seo title="Örnek Belgeler" description="Örnek CV, niyet mektubu, muvafakatname, banka mektubu, sponsor mektubu ve taahhütname şablonları." path="/kaynaklar" />
      <PageHero tone="mist" crumbs={[{ label: 'Faydalı menü' }]} title="Örnek belgeler" lead="Başvuru ve vize süreçlerinde en sık ihtiyaç duyulan belgelerin kopyalanabilir şablonları." />
      <section className="section">
        <div className="container docgrid">
          {documents.map((d) => (
            <Link key={d.slug} to={`/kaynaklar/${d.slug}`} className="doccard">
              <Icon name="file" size={28} />
              <h2 className="h3">{d.title}</h2>
              <p>{d.usage}</p>
              <span className="textlink">Şablonu aç <Icon name="arrow" size={15} /></span>
            </Link>
          ))}
          <Link to="/bilgi-bankasi/universite-basvuru-rehberi" className="doccard doccard--alt">
            <Icon name="cap" size={28} />
            <h2 className="h3">Üniversite Başvuru Rehberi</h2>
            <p>Lisans ve yüksek lisans başvurusunun adım adım yol haritası.</p>
            <span className="textlink">Rehberi oku <Icon name="arrow" size={15} /></span>
          </Link>
        </div>
      </section>
    </>
  )
}

export function DocumentPage() {
  const { slug = '' } = useParams()
  const d = documentBySlug[slug]
  const [copied, setCopied] = useState(false)
  if (!d) return <NotFound />
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(d.body)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }
  const download = () => {
    const blob = new Blob([d.body], { type: 'text/plain;charset=utf-8' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `${d.slug}.txt`
    a.click()
    URL.revokeObjectURL(a.href)
  }
  return (
    <>
      <Seo title={d.title} description={d.usage} path={`/kaynaklar/${d.slug}`} />
      <PageHero tone="mist" crumbs={[{ label: 'Örnek belgeler', to: '/kaynaklar' }, { label: d.title }]} title={d.title} lead={d.usage} />
      <div className="container detail">
        <article className="detail__main">
          <div className="doc">
            <div className="doc__bar">
              <span>Köşeli parantez içindeki alanları kendi bilgilerinizle doldurun.</span>
              <div>
                <button type="button" className="btn btn--line btn--sm" onClick={copy}><Icon name={copied ? 'check' : 'copy'} size={16} /><span>{copied ? 'Kopyalandı' : 'Kopyala'}</span></button>
                <button type="button" className="btn btn--line btn--sm" onClick={download}><Icon name="download" size={16} /><span>İndir (.txt)</span></button>
              </div>
            </div>
            <pre className="doc__body">{d.body}</pre>
          </div>
          <section className="dsec">
            <h2>Hazırlarken Dikkat Edin</h2>
            <CheckList items={d.tips} cols={2} />
          </section>
          <section className="dsec">
            <h2 className="h3">Diğer Şablonlar</h2>
            <ul className="chips">{documents.filter((x) => x.slug !== d.slug).map((x) => <li key={x.slug}><Link to={`/kaynaklar/${x.slug}`}>{x.title}</Link></li>)}</ul>
          </section>
        </article>
        <aside className="detail__side">
          <div className="sticky">
            <LeadForm variant="compact" source={`belge:${d.slug}`} title="Belgelerinizi birlikte hazırlayalım" note="Vize ve başvuru dosyanızı uzmanlarımız kontrol etsin." />
          </div>
        </aside>
      </div>
    </>
  )
}

/* ---------- Blog ---------- */
export function Blog() {
  const { cat: catSlug } = useParams()
  const cat = catSlug ? postCategories.find((c) => categorySlug(c) === catSlug) : undefined
  if (catSlug && !cat) return <NotFound />
  const list = cat ? posts.filter((p) => p.category === cat) : posts
  const [first, ...rest] = list
  const usedCats = postCategories.filter((c) => posts.some((p) => p.category === c))
  const path = cat ? `/blog/kategori/${catSlug}` : '/blog'
  const title = cat ? `${cat} yazıları` : 'Yurt dışı eğitim blogu'
  return (
    <>
      <Seo
        title={cat ? `${cat} Blog Yazıları` : 'Blog: Yurt Dışı Eğitim, Yaz Okulu ve Dil Okulu Rehberleri'}
        description={cat ? `${cat} hakkında rehber yazılar, ülke incelemeleri ve öğrenci deneyimleri. Tampa Yurtdışı Eğitim blogu.` : 'İngiltere yaz okulları, dil okulları, yurt dışında üniversite ve yüksek lisans, vize ve yaşam hakkında güncel rehber yazılar.'}
        path={path}
      />
      <PageHero tone="mist" crumbs={cat ? [{ label: 'Blog', to: '/blog' }, { label: cat }] : [{ label: 'Blog' }]} title={title} lead="İngiltere yaz okullarından yurt dışında yüksek lisansa; karar vermeden önce okumanız gereken rehber yazılar." />
      <section className="section">
        <div className="container">
          <nav className="filters" aria-label="Kategoriler">
            <Link to="/blog" className={`filter ${!cat ? 'is-on' : ''}`} aria-current={!cat ? 'page' : undefined}>Tümü</Link>
            {usedCats.map((c) => (
              <Link key={c} to={`/blog/kategori/${categorySlug(c)}`} className={`filter ${c === cat ? 'is-on' : ''}`} aria-current={c === cat ? 'page' : undefined}>{c}</Link>
            ))}
          </nav>
          {first && <PostFeature p={first} />}
          <div className="posts">
            {rest.map((p) => <PostCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

function PostCard({ p, h = 'h2' }: { p: Post; h?: 'h2' | 'h3' }) {
  const H = h
  return (
    <Link to={`/blog/${p.slug}`} className="post">
      <div className="post__img"><img {...cardImg(p.image)} alt="" loading="lazy" width="480" height="300" /></div>
      <p className="post__meta">{p.category} · {formatDate(p.date)} · {p.readMin} dk</p>
      <H className="h3">{p.title}</H>
      {h === 'h2' && <p className="muted post__ex">{p.excerpt.slice(0, 150).replace(/\s+\S*$/, '')}…</p>}
    </Link>
  )
}

function PostFeature({ p }: { p: Post }) {
  return (
    <Link to={`/blog/${p.slug}`} className="postfeat">
      <img {...cardImg(p.image, '(max-width: 860px) 92vw, 680px')} alt="" width="900" height="560" />
      <div>
        <p className="post__meta">{p.category} · {formatDate(p.date)} · {p.readMin} dk okuma</p>
        <h2>{p.title}</h2>
        <p>{p.excerpt}</p>
        <span className="textlink">Yazıyı oku <Icon name="arrow" size={15} /></span>
      </div>
    </Link>
  )
}

export function BlogPost() {
  const { slug = '' } = useParams()
  const p = postBySlug[slug]
  if (!p) return <NotFound />
  const blocks = parseMarkdown(bodyOf(slug))
  const toc = blocks.flatMap((b) => (b.type === 'h2' ? [b] : []))
  const words = wordCount(plainText(blocks))
  const related = posts
    .filter((x) => x.slug !== p.slug)
    .map((x) => ({ x, score: (x.countries ?? []).filter((c) => p.countries?.includes(c)).length * 2 + (x.programs ?? []).filter((k) => p.programs?.includes(k)).length + (x.category === p.category ? 1 : 0) }))
    .sort((a, b) => b.score - a.score || b.x.date.localeCompare(a.x.date))
    .slice(0, 3)
    .map((r) => r.x)
  const relPrograms = (p.programs ?? []).flatMap((k) => {
    const pr = programByKey[k]
    const cs = (p.countries ?? []).filter((c) => countryBySlug[c]?.programs.includes(k))
    return cs.length ? cs.map((c) => ({ to: `/${pr.slug}/${c}`, label: pr.countryTitle(countryBySlug[c]) })) : [{ to: `/${pr.slug}`, label: pr.name }]
  }).slice(0, 4)
  const path = `/blog/${p.slug}`
  const author = publishedAuthor(p.author)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.excerpt,
    image: [{ '@type': 'ImageObject', url: abs(p.image), caption: p.imageAlt }],
    datePublished: p.date,
    dateModified: p.updated,
    wordCount: words,
    timeRequired: `PT${p.readMin}M`,
    inLanguage: 'tr-TR',
    keywords: p.keywords?.join(', '),
    articleSection: p.category,
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(path) },
    author: author ? personLd(author) : { '@type': 'Organization', '@id': ORG_ID, name: 'Tampa Yurtdışı Eğitim', url: abs('/') },
    publisher: { '@id': ORG_ID },
  }
  return (
    <>
      <Seo title={p.metaTitle ?? p.title} description={p.excerpt} path={path} image={p.image} imageAlt={p.imageAlt} type="article" published={p.date} modified={p.updated} section={p.category} tags={p.keywords} jsonLd={ld} />
      <PageHero image={p.image} crumbs={[{ label: 'Blog', to: '/blog' }, { label: p.category, to: `/blog/kategori/${categorySlug(p.category)}` }, { label: p.title }]} kicker={<>{p.category} · <time dateTime={p.date}>{formatDate(p.date)}</time>{p.updated !== p.date && <> · Güncelleme: <time dateTime={p.updated}>{formatDate(p.updated)}</time></>} · {p.readMin} dk okuma</>} title={p.title} />
      <div className="container detail">
        <article className="detail__main article">
          <p className="lead-strong">{p.excerpt}</p>
          {toc.length > 2 && (
            <nav className="toc" aria-label="İçindekiler">
              <p className="toc__h">İçindekiler</p>
              <ol>{toc.map((h) => <li key={h.id}><a href={`#${h.id}`}>{plain(h.text)}</a></li>)}</ol>
            </nav>
          )}
          <div className="article__body">
            <Markdown blocks={blocks} />
          </div>
          {p.faqs.length > 0 && (
            <section className="article__faq" aria-labelledby="sss">
              <h2 id="sss">Sık Sorulan Sorular</h2>
              <FaqList items={p.faqs} />
            </section>
          )}
          {relPrograms.length > 0 && (
            <aside className="relbox" aria-label="İlgili programlar">
              <p className="relbox__h">Bu yazıyla ilgili programlar</p>
              <ul className="chips">{relPrograms.map((r) => <li key={r.to}><Link to={r.to}>{r.label}</Link></li>)}</ul>
            </aside>
          )}
          <div className="authorbox">
            {author ? (
              <>
                <img src={author.photo ?? '/img/brand/emblem.png'} alt={author.photo ? author.name : ''} width="56" height="66" loading="lazy" />
                <div>
                  <strong><Link to={authorPath(author)}>{author.name}</Link></strong>
                  <p>{author.role}{author.years ? `, ${author.years} yıllık deneyim` : ''}. {author.bio[0]}</p>
                  <p className="muted small">Son güncelleme: <time dateTime={p.updated}>{formatDate(p.updated)}</time></p>
                </div>
              </>
            ) : (
              <>
                <img src="/img/brand/emblem.png" alt="" width="56" height="66" loading="lazy" />
                <div>
                  <strong><Link to="/ekibimiz">Tampa Yurtdışı Eğitim</Link></strong>
                  <p>15 yıldır öğrencilerin yurt dışı eğitim yolculuğunda rehberlik eden danışmanlık ekibi. İzmir ve Aydın ofisleri, İzmir’de İngiltere Üniversite Temsilciliği.</p>
                  <p className="muted small">Son güncelleme: <time dateTime={p.updated}>{formatDate(p.updated)}</time></p>
                </div>
              </>
            )}
          </div>
        </article>
        <aside className="detail__side">
          <div className="sticky">
            <LeadForm variant="compact" source={`blog:${p.slug}`} title="Bu konuda danışmanlık alın" defaultCountry={p.countries?.length === 1 ? countryBySlug[p.countries[0]]?.name : ''} />
          </div>
        </aside>
      </div>
      <section className="section section--mist">
        <div className="container">
          <SectionHead title="İlgili yazılar" action={{ label: 'Tüm yazılar', to: '/blog' }} />
          <div className="posts">{related.map((x) => <PostCard key={x.slug} p={x} h="h3" />)}</div>
        </div>
      </section>
    </>
  )
}

/* ---------- HTML sitemap ---------- */
export function Sitemap() {
  return (
    <>
      <Seo title="Site Haritası" description="Tampa Yurtdışı Eğitim web sitesindeki tüm program, ülke, paket, hizmet, blog ve bilgi bankası sayfalarının listesi." path="/site-haritasi" />
      <PageHero tone="mist" crumbs={[{ label: 'Site haritası' }]} title="Site haritası" />
      <section className="section">
        <div className="container sitemap">
          {programs.map((p) => (
            <div key={p.key}>
              <h2 className="h3"><Link to={`/${p.slug}`}>{p.name}</Link></h2>
              <ul>{countriesFor(p.key).map((c) => <li key={c.slug}><Link to={`/${p.slug}/${c.slug}`}>{p.countryTitle(c)}</Link></li>)}</ul>
            </div>
          ))}
          <div>
            <h2 className="h3"><Link to="/universiteler">Üniversiteler</Link></h2>
            <ul>{universityList.map((u) => <li key={`${u.country}/${u.slug}`}><Link to={universityPath(u)}>{u.name}</Link></li>)}</ul>
          </div>
          <div>
            <h2 className="h3">Şehirlere Göre Dil Okulları</h2>
            <ul>{languageCityList.map((ci) => <li key={`${ci.country}/${ci.slug}`}><Link to={languageCityPath(ci)}>{ci.name} dil okulları</Link></li>)}</ul>
          </div>
          <div>
            <h2 className="h3"><Link to="/ulkeler">Ülkeler</Link></h2>
            <ul>{countries.map((c) => <li key={c.slug}><Link to={`/ulkeler/${c.slug}`}>{c.name}</Link></li>)}</ul>
          </div>
          <div>
            <h2 className="h3">Paketler ve Hizmetler</h2>
            <ul>
              {packages.map((p) => <li key={p.slug}><Link to={`/her-sey-dahil-paketler/${p.slug}`}>{p.title}</Link></li>)}
              {services.map((s) => <li key={s.slug}><Link to={s.path}>{s.name}</Link></li>)}
              <li><Link to="/tampa-akademi">Tampa Akademi</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="h3">Kaynaklar</h2>
            <ul>
              {guides.map((g) => <li key={g.slug}><Link to={`/bilgi-bankasi/${g.slug}`}>{g.title}</Link></li>)}
              {documents.map((d) => <li key={d.slug}><Link to={`/kaynaklar/${d.slug}`}>{d.title}</Link></li>)}
              {posts.map((p) => <li key={p.slug}><Link to={`/blog/${p.slug}`}>{p.title}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="h3">Kampanya Sayfaları</h2>
            <ul>{landings.map((l) => <li key={l.slug}><Link to={`/lp/${l.slug}`}>{l.label}</Link></li>)}</ul>
          </div>
          <div>
            <h2 className="h3">Kurumsal</h2>
            <ul>
              {[['Hakkımızda', '/hakkimizda'], ['Ekibimiz', '/ekibimiz'], ['Ofislerimiz', '/ofislerimiz'], ['Müşteri yorumları', '/musteri-yorumlari'], ['Kariyer', '/kariyer'], ['İletişim', '/iletisim'], ['Başvuru', '/basvuru'], ['KVKK', '/kvkk'], ['Çerez politikası', '/cerez-politikasi']].map(([l, t]) => (
                <li key={t}><Link to={t}>{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section section--tight"><div className="container"><Btn to="/basvuru" icon="arrow">Ücretsiz danışmanlık al</Btn></div></section>
    </>
  )
}

/* ---------- /sss ---------- */
export function FaqPage() {
  const groups = [
    { id: 'genel', title: 'Genel', items: generalFaqs },
    ...programs.map((p) => ({ id: p.slug, title: p.name, items: p.faqs })),
    ...services.filter((sv) => sv.faqs?.length).map((sv) => ({ id: sv.slug, title: sv.name, items: sv.faqs! })),
  ]
  const total = groups.reduce((n, g) => n + g.items.length, 0)
  return (
    <>
      <Seo title="Sıkça Sorulan Sorular" description="Yurtdışı eğitim, dil okulları, üniversite, yüksek lisans, work and study, vize ve danışmanlık hizmetlerimiz hakkında sıkça sorulan sorular." path="/sss" />
      <PageHero tone="mist" crumbs={[{ label: 'Sıkça sorulan sorular' }]} title="Sıkça sorulan sorular" lead={`${total} soru ve cevap, konulara göre. Aradığınızı bulamazsanız bize yazın.`} />
      <section className="section">
        <div className="container kb">
          <nav className="kb__toc" aria-label="Konular">
            <p className="kb__toc-h">Konular</p>
            <ul>{groups.map((g) => <li key={g.id}><a href={`#${g.id}`}>{g.title}<span>{g.items.length}</span></a></li>)}</ul>
          </nav>
          <div>
            {groups.map((g, i) => (
              <div key={g.id} id={g.id} className="kgroup">
                <h2 className="kgroup__h">{g.title}</h2>
                <FaqList items={g.items} schema={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Sorunuz burada yok mu?" text="Danışmanlarımız hedefinizi ve durumunuzu dinleyip size özel yanıt versin." />
    </>
  )
}
