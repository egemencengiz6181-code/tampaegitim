import { useState } from 'react'
import { ORG_ID } from '../seo/schema'
import { Link, useParams } from 'react-router-dom'
import { Seo, Btn, SectionHead, FaqList, CheckList, RouteCode } from '../components/ui'
import { Icon } from '../components/Icon'
import { PageHero, CtaBand } from '../components/layouts'
import { LeadForm } from '../components/LeadForm'
import NotFound from './NotFound'
import { onlinePrograms, onlineBySlug } from '../data/online'
import {
  residences,
  residenceBySlug,
  residenceSummary,
  residenceFeatures,
  roomLabel,
  stayLabel,
  cityNames,
  cityOrder,
  currencyFor,
  amberCities,
  accommodationSyncedAt,
  type Residence,
} from '../data/accommodation'
import { ukPriceCities, priceCityBySlug, priceWeeks, priceListYear, fromPrice } from '../data/schoolPrices'
import { formatPrice } from '../data/packages'
import { languageCityList, languageCityPath } from '../data/languageCities/list'

const cityGuide = (slug: string) => {
  const ci = languageCityList.find((x) => x.country === 'ingiltere' && x.slug === `${slug}-dil-okullari`)
  return ci ? languageCityPath(ci) : undefined
}

/* =========================================================
   Online eğitim
   ========================================================= */
export function OnlineHub() {
  return (
    <>
      <Seo
        title="Online Eğitim: Kanada Online Lise ve İngiltere Online Lisans, MBA"
        description="Türkiye’den ayrılmadan uluslararası diploma: Kanada Ontario lise diploması (OSSD) online programı ve İngiltere online lisans, lisans tamamlama ve MBA programları."
        path="/online-egitim"
      />
      <PageHero
        tone="mist"
        crumbs={[{ label: 'Programlar', to: '/yurtdisi-egitim' }, { label: 'Online eğitim' }]}
        kicker="Türkiye’den ayrılmadan uluslararası diploma"
        title="Online Eğitim Programları"
        lead="Kanada lise diplomasını evden alın ya da işinizi bırakmadan İngiliz lisans ve MBA diplomasına uzanın. Kayıttan mezuniyete kadar süreci birlikte yürütüyoruz."
      >
        <Btn href="#form" size="lg" icon="arrow">Ücretsiz bilgi al</Btn>
      </PageHero>
      <section className="section">
        <div className="container onlinecards">
          {onlinePrograms.map((p) => (
            <Link key={p.slug} to={`/online-egitim/${p.slug}`} className="onlinecard">
              <div className="onlinecard__img"><img src={p.image.replace('.jpg', '-800.jpg')} alt="" loading="lazy" width="640" height="420" /></div>
              <div className="onlinecard__body">
                <RouteCode to={p.code} />
                <h2>{p.name}</h2>
                <p>{p.lead}</p>
                <dl className="facts facts--row">
                  {p.stats.slice(0, 3).map((s) => (<div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>))}
                </dl>
                <span className="textlink">Programı incele <Icon name="arrow" size={15} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section section--mist" id="form">
        <div className="container twocol">
          <div>
            <h2 className="h2">Hangi Program Size Uygun?</h2>
            <p className="muted">Lise öğrencisiyseniz Kanada OSSD ile dünya genelindeki üniversitelere not ortalamanızla başvurabilirsiniz. Çalışan bir profesyonelseniz İngiltere online lisans, lisans tamamlama veya MBA programlarıyla vize ve yaşam masrafı olmadan İngiliz diplomasına ulaşabilirsiniz.</p>
          </div>
          <LeadForm source="online-egitim" defaultProgram="Online eğitim" title="Online eğitim için bilgi alın" />
        </div>
      </section>
    </>
  )
}

export function OnlineProgramPage() {
  const { slug = '' } = useParams()
  const p = onlineBySlug[slug]
  if (!p) return <NotFound />
  const path = `/online-egitim/${p.slug}`
  return (
    <>
      <Seo
        title={p.seoTitle}
        description={p.description}
        path={path}
        image={p.image}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: p.name,
          description: p.description,
          provider: { '@type': 'Organization', name: p.partner.name, sameAs: p.partner.url },
          offers: { '@type': 'Offer', category: 'Online', seller: { '@id': ORG_ID } },
          hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online' },
        }}
      />
      <PageHero
        image={p.image}
        crumbs={[{ label: 'Online eğitim', to: '/online-egitim' }, { label: p.short }]}
        kicker={p.kicker}
        title={p.title}
        lead={p.lead}
        aside={
          <div className="factcard">
            <p className="factcard__h">Kısaca</p>
            <dl>
              {p.stats.map((s) => (<div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>))}
              <div><dt>İş birliği</dt><dd>{p.partner.name}</dd></div>
            </dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Ücretsiz bilgi al</Btn>
        {p.brochure && <Btn href={p.brochure.file} variant="light" size="lg" iconLeft="download">{p.brochure.label}</Btn>}
      </PageHero>

      <div className="container detail">
        <article className="detail__main">
          <section className="dsec">
            <h2>Program Hakkında</h2>
            {p.intro.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
          </section>
          <section className="dsec">
            <h2>Kimler İçin Uygun?</h2>
            <CheckList items={p.audience} />
          </section>
          <section className="dsec">
            <h2>Program Nasıl İşler?</h2>
            <dl className="featlist featlist--2">
              {p.how.map((h) => (<div key={h.title}><dt>{h.title}</dt><dd>{h.text}</dd></div>))}
            </dl>
          </section>
          {p.courses && (
            <section className="dsec">
              <h2>Programlar, Süreler ve Ücretler</h2>
              <div className="courselist">
                {p.courses.map((c) => (
                  <article key={c.name} className="course">
                    <p className="course__level">{c.level}</p>
                    <h3>{c.name}</h3>
                    <p>{c.text}</p>
                    <dl className="facts facts--row">
                      <div><dt>Süre</dt><dd>{c.duration}</dd></div>
                      <div><dt>Modül</dt><dd>{c.modules}</dd></div>
                      {c.price && <div><dt>Program ücreti</dt><dd>{c.price}</dd></div>}
                    </dl>
                    {c.careers && <p className="course__careers"><strong>Kariyer olanakları:</strong> {c.careers.join(', ')}</p>}
                  </article>
                ))}
              </div>
              <p className="note"><Icon name="bolt" size={16} /> Taksitli ödeme ve burs seçenekleri bulunur; ücretler kurumun güncel listesine göre değişebilir. Güncel ücret ve kampanyalar için bize ulaşın.</p>
            </section>
          )}
          <section className="dsec">
            <h2>Neden Bu Program?</h2>
            <dl className="featlist featlist--2">
              {p.highlights.map((h) => (<div key={h.title}><dt>{h.title}</dt><dd>{h.text}</dd></div>))}
            </dl>
          </section>
          <section className="dsec">
            <h2>Başvuru İçin Gerekenler</h2>
            <CheckList items={p.requirements} cols={2} />
          </section>
          <section className="dsec">
            <h2>Sık Sorulan Sorular</h2>
            <FaqList items={p.faqs} />
          </section>
        </article>
        <aside className="detail__side" id="form">
          <div className="sticky">
            <LeadForm variant="compact" source={`online:${p.slug}`} defaultProgram="Online eğitim" title={`${p.short} için bilgi alın`} note="Size uygun programı ve güncel ücretleri paylaşalım." />
          </div>
        </aside>
      </div>
      <CtaBand title="Diplomanıza Türkiye’den başlayın." />
    </>
  )
}

/* =========================================================
   Öğrenci konaklaması (GoBritanya + Amber)
   ========================================================= */
const money = (r: Residence, n: number | null) => (n ? `${currencyFor(r)}${formatPrice(n)}` : null)

export function AccommodationPage() {
  const cities = cityOrder.filter((c) => residences.some((r) => r.city === c))
  const [city, setCity] = useState('all')
  const list = city === 'all' ? residences : residences.filter((r) => r.city === city)
  const londonFrom = Math.min(...residences.filter((r) => r.city === 'london' && r.priceFrom).map((r) => r.priceFrom as number))
  return (
    <>
      <Seo
        title={`Londra Öğrenci Yurtları ve Konaklama | Haftalık £${londonFrom}’dan`}
        description={`Londra, Brighton, Leeds ve Dublin’de faturaların dahil olduğu öğrenci yurtları: ${residences.length} yurt, oda tipleri, haftalık fiyatlar ve rezervasyon desteği.`}
        path="/ogrenci-konaklama"
        image={residences[0]?.images[0]}
      />
      <PageHero
        tone="mist"
        crumbs={[{ label: 'Hizmetler', to: '/hizmetler' }, { label: 'Öğrenci konaklaması' }]}
        kicker={<><Icon name="pin" size={15} /> Londra · Brighton · Leeds · Dublin</>}
        title="Öğrenci Yurtları ve Konaklama"
        lead={`Faturaların, internetin ve güvenliğin dahil olduğu öğrenci yurtları. Londra’da haftalık £${londonFrom}’dan başlayan seçenekleri karşılaştırın, yerinizi Tampa üzerinden ayırtın.`}
      >
        <Btn href="#form" size="lg" icon="arrow">Konaklama teklifi al</Btn>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead
            title="Yurtlar ve Haftalık Fiyatlar"
            intro={`Konaklama partnerimiz GoBritanya’nın yurtları. Fiyatlar kişi başı haftalık “başlayan” fiyatlardır; oda tipine, kalış süresine ve döneme göre değişir. Son güncelleme: ${accommodationSyncedAt.split('-').reverse().join('.')}.`}
          />
          <div className="filterbar" role="group" aria-label="Şehir seçin">
            {['all', ...cities].map((c) => (
              <button key={c} type="button" className={`chipbtn ${city === c ? 'is-on' : ''}`} aria-pressed={city === c} onClick={() => setCity(c)}>
                {c === 'all' ? 'Tüm şehirler' : cityNames[c]}
                <span>{c === 'all' ? residences.length : residences.filter((r) => r.city === c).length}</span>
              </button>
            ))}
          </div>
          <div className="rescards">
            {list.map((r) => (
              <Link key={r.slug} to={`/ogrenci-konaklama/${r.slug}`} className="rescard">
                <div className="rescard__img">
                  {r.images[0] && <img src={r.images[0]} alt={`${r.name} öğrenci yurdu`} loading="lazy" width="480" height="320" />}
                  <span className="rescard__city">{cityNames[r.city]}</span>
                </div>
                <div className="rescard__body">
                  <h3>{r.name}</h3>
                  <p className="rescard__addr"><Icon name="pin" size={14} /> {r.address}</p>
                  <p>{residenceSummary(r)}</p>
                  <p className="rescard__price">
                    {r.priceFrom ? (<><small>haftalık</small><strong>{money(r, r.priceFrom)}</strong><small>’dan</small></>) : <strong className="rescard__ask">Fiyat için sorun</strong>}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container twocol">
          <div>
            <h2 className="h2">Neden Yurtta Kalmalı?</h2>
            <CheckList
              items={[
                'Elektrik, su, ısınma ve internet faturaları kiraya dahil',
                'Depozito ve İngiltere’de kefil (UK guarantor) gerekmez',
                '7/24 güvenlik ve resepsiyon; üniversitelere yakın konumlar',
                'Kısa (2 hafta) ve uzun dönem (akademik yıl) kalış seçenekleri',
                'Spor salonu, çalışma alanları, sinema ve sosyal etkinlikler',
                'Dil okulu, üniversite ve yaz programlarıyla birlikte planlama',
              ]}
            />
          </div>
          <div>
            <h2 className="h2">Diğer Şehirler: Amber ile</h2>
            <p className="muted">İngiltere’nin diğer şehirlerinde ve dünya genelinde öğrenci konaklaması için ikinci partnerimiz Amber’in geniş yurt ağından seçenekleri sizin için karşılaştırıyoruz.</p>
            <ul className="chips">
              {amberCities.map((a) => (
                <li key={a.city}><a href={a.url} target="_blank" rel="noopener noreferrer">{a.city} <Icon name="external" size={13} /></a></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="form">
        <div className="container twocol">
          <div>
            <h2 className="h2">Yerinizi Birlikte Ayırtalım</h2>
            <p className="muted">Okulunuzu ve tarihlerinizi paylaşın; bütçenize ve kampüsünüze en uygun yurtları karşılaştırıp rezervasyonu sizin adınıza yapalım. Dil okulu veya üniversite kaydınızla birlikte planladığımızda süreç çok daha kolaylaşır.</p>
          </div>
          <LeadForm source="konaklama" defaultProgram="Öğrenci konaklaması" title="Konaklama teklifi isteyin" />
        </div>
      </section>
    </>
  )
}

export function ResidencePage() {
  const { slug = '' } = useParams()
  const r = residenceBySlug[slug]
  if (!r) return <NotFound />
  const others = residences.filter((x) => x.city === r.city && x.slug !== r.slug).slice(0, 3)
  const features = residenceFeatures(r)
  return (
    <>
      <Seo
        title={`${r.name} ${cityNames[r.city]} Öğrenci Yurdu${r.priceFrom ? ` | Haftalık ${money(r, r.priceFrom)}’dan` : ''}`}
        description={`${residenceSummary(r)} ${r.address}. Oda tipleri, kalış süresine göre haftalık fiyatlar ve rezervasyon.`}
        path={`/ogrenci-konaklama/${r.slug}`}
        image={r.images[0]}
      />
      <PageHero
        image={r.images[0]}
        crumbs={[{ label: 'Öğrenci konaklaması', to: '/ogrenci-konaklama' }, { label: r.name }]}
        kicker={<><Icon name="pin" size={15} /> {cityNames[r.city]}</>}
        title={r.name}
        lead={residenceSummary(r)}
        aside={
          <div className="factcard">
            <p className="factcard__h">{cityNames[r.city]} öğrenci yurdu</p>
            <dl>
              <div><dt>Haftalık</dt><dd>{r.priceFrom ? `${money(r, r.priceFrom)}’dan` : 'Fiyat için sorun'}</dd></div>
              <div><dt>Adres</dt><dd>{r.address}</dd></div>
              <div><dt>Oda tipi</dt><dd>{r.rooms.length || '—'}</dd></div>
              <div><dt>Faturalar</dt><dd>Dahil</dd></div>
            </dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Yerimi ayırt</Btn>
      </PageHero>

      <div className="container detail">
        <article className="detail__main">
          {r.images.length > 1 && (
            <section className="dsec">
              <div className="resgallery">
                {r.images.map((src, i) => <img key={src} src={src} alt={`${r.name} fotoğraf ${i + 1}`} loading="lazy" width="480" height="320" />)}
              </div>
            </section>
          )}
          {r.rooms.length > 0 && (
            <section className="dsec">
              <h2>Oda Tipleri ve Haftalık Fiyatlar</h2>
              <p className="muted small">Fiyatlar kişi başı, haftalıktır ve faturalar dahildir. Kalış süresi uzadıkça haftalık fiyat düşer.</p>
              <div className="tablewrap">
                <table className="ptable">
                  <thead>
                    <tr>
                      <th scope="col">Oda tipi</th>
                      {['All Year Stay', 'Academic Stay', 'Semester Stay', 'Short Stay'].map((k) => <th key={k} scope="col">{stayLabel[k]}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {r.rooms.map((room) => (
                      <tr key={room.name}>
                        <th scope="row">{roomLabel(room.name)}</th>
                        {['All Year Stay', 'Academic Stay', 'Semester Stay', 'Short Stay'].map((k) => {
                          const st = room.stays.find((x) => x.label === k)
                          return <td key={k}>{st ? <>{money(r, st.price)}<small>en az {st.minWeeks} hafta</small></> : '—'}</td>
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
          {features.length > 0 && (
            <section className="dsec">
              <h2>Olanaklar</h2>
              <ul className="chips chips--lg">{features.map((f) => <li key={f}><span>{f}</span></li>)}</ul>
            </section>
          )}
          <section className="dsec">
            <h2>Rezervasyon Nasıl Yapılır?</h2>
            <ol className="steps-plain">
              <li>Formu doldurun; okulunuzu, giriş–çıkış tarihlerinizi ve oda tercihinizi yazın.</li>
              <li>Güncel müsaitlik ve fiyatı konaklama partnerimiz GoBritanya’dan teyit edip size iletelim.</li>
              <li>Onayınızla rezervasyonu tamamlayalım; konaklama belgeniz vize dosyanızda kullanılabilir.</li>
            </ol>
          </section>
        </article>
        <aside className="detail__side" id="form">
          <div className="sticky">
            <LeadForm variant="compact" source={`konaklama:${r.slug}`} defaultProgram="Öğrenci konaklaması" title={`${r.name} için teklif alın`} note="Müsaitlik ve güncel fiyatı hemen paylaşalım." />
          </div>
        </aside>
      </div>

      {others.length > 0 && (
        <section className="section section--mist">
          <div className="container">
            <SectionHead title={`${cityNames[r.city]}’daki diğer yurtlar`} action={{ label: 'Tüm yurtlar', to: '/ogrenci-konaklama' }} />
            <div className="minipkgs">
              {others.map((o) => (
                <Link key={o.slug} to={`/ogrenci-konaklama/${o.slug}`} className="minipkg">
                  <span className="code">{cityNames[o.city].slice(0, 3).toUpperCase()}</span>
                  <strong>{o.name}</strong>
                  <span>{o.priceFrom ? `Haftalık ${money(o, o.priceFrom)}’dan` : 'Fiyat için sorun'}</span>
                  <Icon name="arrow" size={16} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

/* =========================================================
   Şehirlere göre İngiltere dil okulları fiyat listesi
   ========================================================= */
export function SchoolPricesHub() {
  return (
    <>
      <Seo
        title={`İngiltere Dil Okulları ${priceListYear} Fiyat Listesi: Şehirlere Göre`}
        description={`İngiltere dil okulları fiyat listesi ${priceListYear}: Londra, Brighton, Oxford, Cambridge, Manchester ve Bournemouth’ta eğitim ve konaklama ücretleri, şehir şehir.`}
        path="/ingiltere-dil-okullari-fiyat-listesi"
      />
      <PageHero
        tone="mist"
        crumbs={[{ label: 'Dil okulları', to: '/yurtdisi-dil-okullari' }, { label: 'İngiltere', to: '/yurtdisi-dil-okullari/ingiltere' }, { label: 'Fiyat listesi' }]}
        kicker={<RouteCode to="LHR" />}
        title={`Şehirlere Göre İngiltere Dil Okulları ${priceListYear} Fiyat Listesi`}
        lead="İlgilendiğiniz şehri seçin; çalıştığımız dil okullarının eğitim, konaklama ve kayıt ücretlerini tek tabloda karşılaştırın. Danışmanlık hizmetimiz ücretsizdir."
      >
        <Btn href="#form" size="lg" icon="arrow">Kişiye özel teklif al</Btn>
      </PageHero>
      <section className="section">
        <div className="container citycards">
          {ukPriceCities.map((c) => {
            const from = fromPrice(c)
            return (
              <Link key={c.slug} to={`/ingiltere-dil-okullari-fiyat-listesi/${c.slug}`} className="citycard">
                <img src={c.image.includes('/konaklama/') ? c.image : c.image.replace(/\.jpg$/, '-800.jpg')} alt="" loading="lazy" width="480" height="320" />
                <span className="citycard__tx">
                  <span className="citycard__code">{c.code}</span>
                  <strong>{c.name}</strong>
                  <small>{c.schools.length ? `${c.schools.length} okul${from ? ` · 4 hafta £${formatPrice(from)}’dan` : ''}` : 'Fiyat listesi isteyin'}</small>
                </span>
              </Link>
            )
          })}
        </div>
      </section>
      <section className="section section--mist" id="form">
        <div className="container twocol">
          <div>
            <h2 className="h2">Fiyatları Neler Belirler?</h2>
            <CheckList items={['Haftalık ders saati (15, 20, 25 veya 30 ders)', 'Program süresi: uzun programlarda haftalık ücret düşer', 'Konaklama tipi: aile yanı veya öğrenci yurdu', 'Sezon: yaz aylarında bazı okullarda ek ücret uygulanır', 'Okulun güncel promosyonları ve erken kayıt indirimleri']} />
            <p className="muted small">Fiyatlar okulların güncel listelerine göre yıl içinde değişebilir. Güncel ücret için bizimle iletişime geçin.</p>
          </div>
          <LeadForm source="fiyat-listesi" defaultProgram="Dil okulu" defaultCountry="İngiltere" title="Güncel fiyat listesini isteyin" />
        </div>
      </section>
    </>
  )
}

export function SchoolPricesCity() {
  const { city = '' } = useParams()
  const c = priceCityBySlug[city]
  if (!c) return <NotFound />
  const hasData = c.schools.length > 0
  return (
    <>
      <Seo
        title={`${c.name} Dil Okulları ${priceListYear} Fiyat Listesi`}
        description={`${c.name} dil okulları ${priceListYear} fiyatları: haftalık ders saatine ve süreye göre eğitim ücretleri, aile yanı ve yurt konaklama fiyatları.`}
        path={`/ingiltere-dil-okullari-fiyat-listesi/${c.slug}`}
        noindex={!hasData}
      />
      <PageHero
        image={c.image}
        crumbs={[{ label: 'İngiltere fiyat listesi', to: '/ingiltere-dil-okullari-fiyat-listesi' }, { label: c.name }]}
        kicker={<RouteCode to={c.code} light />}
        title={`${c.name} Dil Okulları ${priceListYear} Fiyat Listesi`}
        lead={c.intro}
      >
        <Btn href="#form" size="lg" icon="arrow">Kişiye özel teklif al</Btn>
      </PageHero>
      <section className="section">
        <div className="container">
          {hasData ? (
            <>
              <div className="tablewrap">
                <table className="ptable ptable--prices">
                  <thead>
                    <tr>
                      <th scope="col" rowSpan={2}>Okul</th>
                      <th scope="col" rowSpan={2}>Haftalık ders</th>
                      <th scope="colgroup" colSpan={priceWeeks.length}>Süre / eğitim ücreti (£)</th>
                      <th scope="colgroup" colSpan={2}>Haftalık konaklama (£)</th>
                      <th scope="colgroup" colSpan={2}>Diğer ücretler (£)</th>
                    </tr>
                    <tr>
                      {priceWeeks.map((w) => <th key={w} scope="col">{w} hf</th>)}
                      <th scope="col">Aile yanı</th>
                      <th scope="col">Yurt</th>
                      <th scope="col">Kayıt</th>
                      <th scope="col">Kon. rez.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.schools.map((s) => (
                      <tr key={`${s.school}-${s.hours}`}>
                        <th scope="row">{s.school}{s.promo && <span className="tag tag--coral">Promosyon</span>}{s.note && <small>{s.note}</small>}</th>
                        <td>{s.hours}</td>
                        {priceWeeks.map((w) => <td key={w}>{s.prices[w] ? formatPrice(s.prices[w] as number) : '—'}</td>)}
                        <td>{s.homestay ?? '—'}</td>
                        <td>{s.residence ?? '—'}</td>
                        <td>{s.registration ?? '—'}</td>
                        <td>{s.accommodationFee ?? '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="notes">
                <li>Danışmanlık hizmetlerimiz ücretsizdir.</li>
                <li>Aile yanı konaklama fiyatları tek kişilik oda, kahvaltı ve akşam yemeği dahil seçenek içindir.</li>
                <li>Bazı okullarda eğitim ve konaklama ücretleri sezona göre değişir; promosyonlu fiyatlar yıl içinde güncellenebilir.</li>
              </ul>
            </>
          ) : (
            <div className="panel panel--line">
              <h2 className="panel__h">{c.name} fiyat listesi hazırlanıyor</h2>
              <p className="muted">{c.name}’daki çalıştığımız dil okullarının {priceListYear} eğitim ve konaklama fiyatlarını formu doldurmanızın ardından size hemen iletelim.</p>
            </div>
          )}
          {cityGuide(c.slug) && <p className="note"><Icon name="bolt" size={16} /> Semtler, konaklama ve yaşam maliyeti için: <Link to={cityGuide(c.slug)!}>{c.name} dil okulları rehberi</Link></p>}
          <p className="note"><Icon name="bolt" size={16} /> Öğrenci yurdu mu arıyorsunuz? <Link to="/ogrenci-konaklama">Londra, Brighton ve Leeds’teki öğrenci yurtlarının haftalık fiyatlarına</Link> göz atın.</p>
        </div>
      </section>
      <section className="section section--mist" id="form">
        <div className="container twocol">
          <div>
            <h2 className="h2">Diğer Şehirler</h2>
            <ul className="chips">
              {ukPriceCities.filter((x) => x.slug !== c.slug).map((x) => (
                <li key={x.slug}><Link to={`/ingiltere-dil-okullari-fiyat-listesi/${x.slug}`}>{x.name}</Link></li>
              ))}
            </ul>
          </div>
          <LeadForm source={`fiyat-listesi:${c.slug}`} defaultProgram="Dil okulu" defaultCountry="İngiltere" title={`${c.name} fiyat listesini isteyin`} />
        </div>
      </section>
    </>
  )
}
