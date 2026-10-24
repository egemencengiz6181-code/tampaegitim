import { Link } from 'react-router-dom'
import { ORG_ID, abs } from '../seo/schema'
import { Seo, Btn, FaqList, CheckList, RouteCode, SectionHead } from '../components/ui'
import { Icon } from '../components/Icon'
import { PageHero, CtaBand } from '../components/layouts'
import { LeadForm } from '../components/LeadForm'
import { Rich } from '../components/Rich'
import { countryBySlug } from '../data/countries'
import { priceList, pricePath } from '../data/prices/list'
import type { PricePage, PriceTable } from '../data/prices/types'
import type { University } from '../data/universities/types'
import { universityPath } from '../data/universities/list'
import { formatDate } from '../data/blog'
import NotFound from './NotFound'

function Table({ t, caption }: { t: PriceTable; caption?: string }) {
  return (
    <>
      <div className="tablewrap">
        <table className="ctable ctable--auto">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead><tr>{t.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
          <tbody>
            {t.rows.map((r) => (
              <tr key={r.join('|')}>
                {r.map((cell, j) => j === 0 ? <th key={j} scope="row"><Rich text={cell} /></th> : <td key={j} data-label={t.head[j]}><Rich text={cell} /></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {t.note && <p className="muted small"><Rich text={t.note} /></p>}
    </>
  )
}

/** Üniversite içeriklerindeki ücret satırlarından tablo. Satır adları ülkeden ülkeye farklı yazıldığı için
 *  eğitim ücreti satırlarının ilk ikisi adıyla birlikte gösterilir; yaşam gideri ayrı sütundadır. */
const TUITION = /lisans|master|öğrenim|harç|katkı payı|ingilizce|korece|tıp|diş|program|foundation|semesterbeitrag|band/i
const NOT_TUITION = /başvuru|kayıt|depozito|burs|scholarship|sigorta|yurt|kira|konaklama|yaşam|geçim|indirim|artış|ödeme|vize|uni-assist|ek gider|zorunlu|toplam|caq|aidat/i

function uniFeeRows(unis: University[]) {
  return unis.map((u) => {
    const fees = u.costs.filter((c) => TUITION.test(c.item) && !NOT_TUITION.test(c.item)).slice(0, 2)
    const living = u.costs.find((c) => /yaşam/i.test(c.item)) ?? u.costs.find((c) => /kira/i.test(c.item))
    return [
      `[${u.name}](${universityPath(u)})`,
      u.city,
      u.type,
      fees.length ? fees.map((c) => `**${c.item}:** ${c.value}`).join(' · ') : 'Programa göre; üniversite sayfasına bakın',
      living?.value ?? '—',
    ]
  })
}

/* ---------- /fiyatlar/:slug ---------- */
export function PricePageView({ page, unis }: { page: PricePage; unis: University[] }) {
  const c = countryBySlug[page.country]
  if (!c) return <NotFound />
  const path = pricePath(page)
  const others = priceList.filter((x) => x.slug !== page.slug)
  const uniTable: PriceTable | undefined = unis.length
    ? { head: ['Üniversite', 'Şehir', 'Tür', 'Eğitim ücreti', 'Aylık yaşam'], rows: uniFeeRows(unis), note: 'Tablo, üniversite sayfalarımızdaki güncel bilgilerden oluşturulur. Ayrıntı için üniversite adına tıklayın.' }
    : undefined
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.h1,
    description: page.description,
    dateModified: page.updated,
    mainEntityOfPage: abs(path),
    publisher: { '@id': ORG_ID },
  }

  return (
    <>
      <Seo title={page.seoTitle} description={page.description} path={path} image={c.image} modified={page.updated} jsonLd={ld} />
      <PageHero
        image={c.image}
        crumbs={[{ label: 'Fiyatlar', to: '/fiyatlar' }, { label: page.label }]}
        kicker={<RouteCode to={c.code} light />}
        title={page.h1}
        lead={page.lead}
        aside={
          <div className="factcard">
            <p className="factcard__h">{c.name} kısaca</p>
            <dl>{page.facts.map((f) => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}</dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Kişiye özel bütçe al</Btn>
      </PageHero>

      <section className="container snippet" aria-labelledby="ozet-h">
        <div className="snippet__in">
          <h2 id="ozet-h" className="sr-only">{page.h1}: özet</h2>
          <p>{page.summary}</p>
        </div>
      </section>

      <nav className="anchors" aria-label="Sayfa içi">
        <div className="container">
          <a href="#ucretler">Eğitim ücretleri</a>
          {uniTable && <a href="#universiteler">Üniversitelere göre</a>}
          <a href="#yasam">Yaşam giderleri</a>
          <a href="#ek">Ek masraflar</a>
          <a href="#burs">Burslar</a>
          <a href="#senaryo">Örnek bütçeler</a>
          <a href="#sss">SSS</a>
        </div>
      </nav>

      <div className="container detail">
        <article className="detail__main">
          <section className="dsec">
            {page.intro.map((p, i) => <p key={i} className={i === 0 ? 'lead-strong' : undefined}><Rich text={p} /></p>)}
          </section>

          <section id="ucretler" className="dsec">
            <h2>{c.loc} Üniversite Eğitim Ücretleri</h2>
            <Table t={page.tuition} caption="Eğitim seviyesine ve üniversite türüne göre ücretler" />
            <h3>Bölümlere Göre Ücretler</h3>
            <Table t={page.byField} caption="Bölümlere göre ücretler" />
          </section>

          {uniTable && (
            <section id="universiteler" className="dsec">
              <h2>Üniversitelere Göre Ücret Tablosu</h2>
              <Table t={uniTable} caption={`${c.name} üniversitelerinin ücretleri`} />
              <p><Link to={`/universiteler/${c.slug}`} className="textlink">Tüm {c.name} üniversiteleri <Icon name="arrow" size={15} /></Link></p>
            </section>
          )}

          <section className="dsec">
            <h2>Hazırlık ve Foundation Ücretleri</h2>
            {page.prep.text.map((p, i) => <p key={i}><Rich text={p} /></p>)}
            {page.prep.table && <Table t={page.prep.table} caption="Hazırlık programı ücretleri" />}
          </section>

          <section className="dsec">
            <h2>Ücretleri Etkileyen Faktörler</h2>
            <ul className="checks">{page.factors.map((t) => <li key={t}><Icon name="check" size={18} /> <span><Rich text={t} /></span></li>)}</ul>
          </section>

          <section id="yasam" className="dsec">
            <h2>{c.loc} Aylık Yaşam Giderleri</h2>
            <Table t={page.living} caption="Şehirlere göre aylık yaşam giderleri" />
            {page.livingNotes.map((p, i) => <p key={i}><Rich text={p} /></p>)}
          </section>

          <section id="ek" className="dsec">
            <h2>Başvuru, Vize ve Diğer Masraflar</h2>
            <Table t={page.oneTime} caption="Tek seferlik ve yıllık ek masraflar" />
          </section>

          <section id="burs" className="dsec">
            <h2>Burslar ve Ücret İndirimleri</h2>
            <dl className="featlist featlist--2">
              {page.scholarships.map((s) => <div key={s.title}><dt>{s.title}</dt><dd><Rich text={s.text} /></dd></div>)}
            </dl>
          </section>

          <section id="senaryo" className="dsec">
            <h2>Örnek Yıllık Bütçeler</h2>
            {page.scenarios.map((s) => (
              <div key={s.title} className="panel panel--line">
                <h3 className="panel__h">{s.title}</h3>
                <p className="muted small"><Rich text={s.assumptions} /></p>
                <Table t={{ head: ['Kalem', 'Yaklaşık tutar'], rows: [...s.rows, ['**Yıllık toplam**', `**${s.total}**`]] }} caption={s.title} />
              </div>
            ))}
          </section>

          <section className="dsec">
            <h2>Bütçenizi Düşürmenin Yolları</h2>
            <CheckList items={page.tips} />
          </section>

          <section id="sss" className="dsec">
            <h2>{page.label.replace(/^./, (x) => x.toLocaleUpperCase('tr'))} Hakkında Sık Sorulanlar</h2>
            <FaqList items={page.faqs} />
            <p className="muted small">Son güncelleme: <time dateTime={page.updated}>{formatDate(page.updated)}</time>. Tutarlar yaklaşıktır; üniversiteler ücretlerini her yıl, ülkeler vize ve yaşam gideri şartlarını dönemsel olarak günceller. Başvuru öncesinde güncel rakamları size yazılı olarak iletiyoruz.</p>
          </section>
        </article>

        <aside className="detail__side" id="form">
          <div className="sticky">
            <LeadForm variant="compact" source={`fiyat:${page.slug}`} defaultProgram="Üniversite" defaultCountry={c.name} title={`${c.loc} eğitim bütçenizi çıkaralım`} note="Bölümünüze ve şehrinize göre yıllık toplam maliyeti ücretsiz hesaplayalım." />
          </div>
        </aside>
      </div>

      <section className="section section--mist">
        <div className="container">
          <div className="related">
            <h2 className="h3">Diğer Ülkelerde Üniversite Fiyatları</h2>
            <ul className="chips">{others.map((x) => <li key={x.slug}><Link to={pricePath(x)}>{x.label}</Link></li>)}</ul>
          </div>
          <div className="related">
            <h2 className="h3">{c.name} Rehberleri</h2>
            <ul className="chips">
              {c.programs.includes('lisans') && <li><Link to={`/lisans-programlari/${c.slug}`}>{c.loc} lisans</Link></li>}
              {c.programs.includes('yuksek-lisans') && <li><Link to={`/yurtdisi-yuksek-lisans/${c.slug}`}>{c.loc} yüksek lisans</Link></li>}
              <li><Link to={`/ulkeler/${c.slug}`}>{c.name} ülke rehberi</Link></li>
            </ul>
          </div>
        </div>
      </section>
      <CtaBand title={`${c.loc} eğitim bütçenizi birlikte planlayalım.`} />
    </>
  )
}

/** Rota bileşeni: slug'a göre sayfayı seçer. */
export function PricePageRoute({ slug, pages, unis }: { slug: string; pages: PricePage[]; unis: University[] }) {
  const page = pages.find((x) => x.slug === slug)
  if (!page) return <NotFound />
  return <PricePageView page={page} unis={unis.filter((u) => u.country === page.country)} />
}

/* ---------- /fiyatlar ---------- */
export function PricesHub() {
  return (
    <>
      <Seo title="Yurt Dışında Üniversite Fiyatları 2026-2027: Ülke Karşılaştırması" description={`${priceList.length} ülkede üniversite ücretleri, aylık yaşam giderleri, hazırlık, vize ve ek masraflar: yurt dışında eğitim maliyetini ülke ülke karşılaştırın.`} path="/fiyatlar" />
      <PageHero
        tone="mist"
        crumbs={[{ label: 'Fiyatlar' }]}
        title="Yurt Dışında Üniversite Fiyatları"
        lead="Eğitim ücreti, aylık yaşam gideri, hazırlık programı ve vize masraflarıyla yurt dışında okumanın gerçek maliyeti. Ülkeleri yan yana karşılaştırın, ayrıntı için ülke sayfasını açın."
      >
        <Btn href="#form" size="lg" icon="arrow">Kişiye özel bütçe al</Btn>
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionHead title="Ülkelere Göre Maliyet Karşılaştırması" intro="Uluslararası (AB dışı) öğrenciler için yaklaşık yıllık eğitim ücretleri ve aylık yaşam giderleri." />
          <div className="tablewrap">
            <table className="ctable ctable--auto">
              <thead><tr><th scope="col">Ülke</th><th scope="col">Para birimi</th><th scope="col">Devlet üniversitesi</th><th scope="col">Özel üniversite</th><th scope="col">Aylık yaşam</th><th scope="col">Hazırlık</th></tr></thead>
              <tbody>
                {priceList.map((p) => (
                  <tr key={p.slug}>
                    <th scope="row"><Link to={pricePath(p)}>{countryBySlug[p.country]?.name ?? p.label}</Link></th>
                    <td data-label="Para birimi">{p.compare.currency}</td>
                    <td data-label="Devlet üniversitesi">{p.compare.publicTuition}</td>
                    <td data-label="Özel üniversite">{p.compare.privateTuition}</td>
                    <td data-label="Aylık yaşam">{p.compare.monthlyLiving}</td>
                    <td data-label="Hazırlık">{p.compare.prep ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="muted small">Tutarlar yaklaşıktır ve bölüme, şehre ve başvuru yılına göre değişir. Ayrıntılı tablolar ve örnek bütçeler ülke sayfalarındadır.</p>
        </div>
      </section>
      <section className="section section--mist">
        <div className="container">
          <ul className="citylist citylist--grid">
            {priceList.map((p) => (
              <li key={p.slug}>
                <h3><Link to={pricePath(p)}>{p.label.replace(/^./, (x) => x.toLocaleUpperCase('tr'))}</Link></h3>
                <p>{p.lead}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section" id="form">
        <div className="container twocol">
          <div>
            <h2 className="h2">Bütçenizi Birlikte Çıkaralım</h2>
            <CheckList items={['Bölümünüze göre gerçek eğitim ücreti', 'Seçtiğiniz şehirde konaklama ve yaşam gideri', 'Vize, sigorta, depozito ve başvuru masrafları', 'Burs ve indirim olanakları', 'Yıl yıl ödeme takvimi']} />
            <p className="note"><Icon name="bolt" size={16} /> Dil okulu fiyatları için: <Link to="/ingiltere-dil-okullari-fiyat-listesi">İngiltere dil okulları fiyat listesi</Link></p>
          </div>
          <LeadForm source="fiyatlar" defaultProgram="Üniversite" title="Kişiye özel bütçe isteyin" />
        </div>
      </section>
      <CtaBand />
    </>
  )
}
