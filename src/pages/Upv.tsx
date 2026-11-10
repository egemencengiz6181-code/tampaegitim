import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Seo, Btn, SectionHead, FaqList, CheckList, RouteCode } from '../components/ui'
import { Icon } from '../components/Icon'
import { RouteSteps } from '../components/signature'
import { PageHero, CtaBand } from '../components/layouts'
import { LeadForm } from '../components/LeadForm'
import { cardImg } from '../lib/img'
import { site } from '../data/site'
import {
  upvPaths, upvUpdated, upvHighlights, upvCampuses, upvSteps, upvHubFaqs,
  foundationFacts, foundationSteps, foundationFees, foundationMasters, foundationFaqs,
  pceFacts, pceTracks, pceAudience, pceWhy, pceFaqs,
  upvBachelors, bachelorFaqs, upvMasters, masterFaqs,
} from '../data/upv'

const UPV = 'Universitat Politècnica de València'
const hubCrumbs = [{ label: 'Lisans programları', to: '/lisans-programlari' }, { label: 'İspanya', to: '/lisans-programlari/ispanya' }]

/** UPV sayfaları arasında gezinme şeridi. */
function UpvNav() {
  const items = [
    { to: upvPaths.hub, label: 'UPV rehberi' },
    { to: upvPaths.foundation, label: 'İspanyolca hazırlık' },
    { to: upvPaths.pce, label: 'PCE giriş kursu' },
    { to: upvPaths.bachelors, label: 'Lisans programları' },
    { to: upvPaths.masters, label: 'Yüksek lisans' },
  ]
  return (
    <nav className="upvnav" aria-label="UPV sayfaları">
      <div className="container">
        <ul>
          {items.map((i) => (
            <li key={i.to}><NavLink to={i.to} end className={({ isActive }) => (isActive ? 'is-active' : undefined)}>{i.label}</NavLink></li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function orgLd(path: string, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${site.url}${path}`,
    dateModified: upvUpdated,
    about: {
      '@type': 'CollegeOrUniversity',
      name: UPV,
      alternateName: ['UPV', 'Valensiya Politeknik Üniversitesi'],
      url: 'https://www.upv.es',
      address: { '@type': 'PostalAddress', addressLocality: 'València', addressCountry: 'ES' },
    },
  }
}

function courseLd(path: string, name: string, description: string, extra: Record<string, unknown> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    url: `${site.url}${path}`,
    provider: { '@type': 'CollegeOrUniversity', name: UPV, sameAs: 'https://www.upv.es' },
    ...extra,
  }
}

function FaqForm({ faqs, source, program, title, children }: { faqs: Parameters<typeof FaqList>[0]['items']; source: string; program: string; title: string; children?: ReactNode }) {
  return (
    <section className="section" id="form">
      <div className="container twocol">
        <div>
          <h2 className="h2">Sık Sorulan Sorular</h2>
          <FaqList items={faqs} />
          {children}
        </div>
        <LeadForm source={source} defaultProgram={program} defaultCountry="İspanya" title={title} note="UPV için uygunluğunuzu ve bütçenizi ücretsiz olarak değerlendirelim." />
      </div>
    </section>
  )
}

function Sources({ links }: { links: { label: string; href: string }[] }) {
  return (
    <p className="note small">
      <Icon name="bolt" size={16} /><span>Bilgiler UPV tanıtım materyallerinden ve resmî bölüm sayfalarından derlenmiştir; ücretler önceden haber verilmeksizin değişebilir. Kaynak:{' '}
      {links.map((l, i) => (
        <span key={l.href}>{i > 0 && ', '}<a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a></span>
      ))}
      . Son güncelleme: 10 Kasım 2026.
    </span></p>
  )
}

/* ---------- /valensiya-politeknik-universitesi ---------- */
export function UpvHub() {
  const desc = 'Valensiya Politeknik Üniversitesi (UPV): İspanyolca hazırlık, PCE kursu, yıllık 1.535 €’dan lisans ve İngilizce yüksek lisans. Ücretler, şartlar, başvuru.'
  return (
    <>
      <Seo title="Valensiya Politeknik Üniversitesi (UPV): Ücretler, Başvuru" description={desc} path={upvPaths.hub} image="/img/upv/valensiya-sanat.jpg" jsonLd={orgLd(upvPaths.hub, 'Valensiya Politeknik Üniversitesi (UPV) rehberi', desc)} />
      <PageHero
        image="/img/upv/valensiya-sanat.jpg"
        crumbs={[...hubCrumbs, { label: 'Valensiya Politeknik Üniversitesi' }]}
        kicker={<RouteCode to="VLC" light />}
        title="Valensiya Politeknik Üniversitesi (UPV)"
        lead="İspanya’nın önde gelen teknik devlet üniversitesinde, yıllık yaklaşık 1.535 €’dan başlayan ücretlerle lisans; İspanyolca hazırlık yılı, PCE giriş kursu ve İngilizce yüksek lisans seçenekleri. Doğru yolu birlikte seçelim."
        aside={
          <div className="factcard">
            <p className="factcard__h">Kısaca UPV</p>
            <dl>
              <div><dt>Tür</dt><dd>Devlet üniversitesi</dd></div>
              <div><dt>Kampüsler</dt><dd>Valensiya, Gandia, Alcoy</dd></div>
              <div><dt>Lisans ücreti</dt><dd>Yıllık ~1.535–2.081 €</dd></div>
              <div><dt>Hazırlık</dt><dd>B1–B2 İspanyolca, Gandia</dd></div>
              <div><dt>YKS şartı</dt><dd>Yok</dd></div>
            </dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Ücretsiz değerlendirme al</Btn>
        <Btn href="#yollar" variant="light" size="lg">Programları incele</Btn>
      </PageHero>
      <UpvNav />

      <section className="section" id="yollar">
        <div className="container">
          <SectionHead title="UPV’ye Dört Yol" intro="Dil seviyenize ve hedefinize göre size uygun başlangıç noktası değişir." />
          <div className="upvpaths">
            <Link to={upvPaths.foundation} className="upvpath">
              <div className="upvpath__img"><img {...cardImg('/img/upv/hazirlik-ogrenci.jpg')} alt="" loading="lazy" width="480" height="320" /></div>
              <span className="upvpath__tag">İspanyolcanız B2 değilse</span>
              <h3>İspanyolca Hazırlık Programı</h3>
              <p>Gandia kampüsünde B1’den B2’ye. Program ücreti 9.500 €; 31 Aralık 2026’ya kadar tam ödemede %25 burs.</p>
              <span className="textlink">Ayrıntılar <Icon name="arrow" size={15} /></span>
            </Link>
            <Link to={upvPaths.pce} className="upvpath">
              <div className="upvpath__img"><img {...cardImg('/img/upv/pce-sinif.jpg')} alt="" loading="lazy" width="480" height="320" /></div>
              <span className="upvpath__tag">B2’niz varsa, puanınızı yükseltin</span>
              <h3>PCE Üniversite Giriş Kursu</h3>
              <p>30 haftalık yüz yüze kursla UNED PCE sınavlarına hazırlık. Teknik, sağlık, işletme ve sanat alanları.</p>
              <span className="textlink">Ayrıntılar <Icon name="arrow" size={15} /></span>
            </Link>
            <Link to={upvPaths.bachelors} className="upvpath">
              <div className="upvpath__img"><img {...cardImg('/img/upv/lisans-ogrenciler.jpg')} alt="" loading="lazy" width="480" height="320" /></div>
              <span className="upvpath__tag">Lise mezunları için</span>
              <h3>Lisans Programları</h3>
              <p>Yedi bölüm, üç kampüs. Yıllık 1.534,80 € ile 2.080,80 € arası ücret, bölüm bazında taban puanlar.</p>
              <span className="textlink">Bölümler ve ücretler <Icon name="arrow" size={15} /></span>
            </Link>
            <Link to={upvPaths.masters} className="upvpath">
              <div className="upvpath__img"><img {...cardImg('/img/upv/master-ogrenci.jpg')} alt="" loading="lazy" width="480" height="320" /></div>
              <span className="upvpath__tag">Lisans mezunları için</span>
              <h3>Yüksek Lisans</h3>
              <p>İngilizce dijital iş ve pazarlama yüksek lisansları (90 AKTS) ile hazırlık sonrası İspanyolca programlar.</p>
              <span className="textlink">Programlar <Icon name="arrow" size={15} /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <SectionHead title="Neden UPV?" intro="UPV’nin kendi tanıtımında öne çıkardığı başlıklar." />
          <div className="advgrid">
            {upvHighlights.map((a, i) => (
              <article key={a.title} className="advcard">
                <span className="advcard__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Üç Kampüs, Üç Farklı Şehir" intro="Bölüm seçiminiz okuyacağınız şehri de belirler." />
          <div className="posts">
            {upvCampuses.map((c) => (
              <article key={c.name} className="post post--static">
                <div className="post__img"><img {...cardImg(c.image)} alt={c.alt} loading="lazy" width="480" height="320" /></div>
                <p className="post__meta"><Icon name="pin" size={13} /> {c.city}</p>
                <h3>{c.name}</h3>
                <p className="muted">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container ukband">
          <div className="ukband__media">
            <img {...cardImg('/img/upv/kutuphane.jpg', '(max-width: 900px) 92vw, 560px')} alt="Kütüphanede kitaplarıyla gülümseyen üniversite öğrencisi" loading="lazy" width="720" height="520" />
          </div>
          <div className="ukband__body">
            <h2 className="h2">Türkiye’den UPV’ye Kabul Nasıl İşler?</h2>
            <p className="muted">İspanya’da üniversiteye giriş YKS ile değil, lise diplomanızın denkliği (homologación) ve UNEDasiss üzerinden hesaplanan 14 puanlık not ile yapılır. PCE sınavlarına girmeyen bir Türk lise mezununun notu genellikle 5–6 civarında kalır; daha yüksek taban puanlı bölümler için PCE ile puan yükseltmek gerekir.</p>
            <CheckList items={[
              'İspanyolcanız B2 değilse: hazırlık programı → SIELE ile B2 → lisans kaydı.',
              'B2’niz varsa: PCE kursu → Mayıs’ta UNED PCE sınavları → yüksek puanla başvuru.',
              'Lisans mezunuysanız: İngilizce yüksek lisansa doğrudan ya da İspanyolca yüksek lisansa hazırlık programıyla.',
            ]} />
            <Link to="/blog/ispanyada-foundation-egitimi-ile-universiteye-gecis" className="textlink">Homologación, UNEDasiss ve PCE adım adım <Icon name="arrow" size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHead title="Başvurudan Kampüse Altı Adım" intro="UPV sürecinizi Türkiye’den baştan sona birlikte yürütüyoruz." />
          <RouteSteps steps={upvSteps} dark />
        </div>
      </section>

      <FaqForm faqs={upvHubFaqs} source="upv" program="Üniversite" title="UPV için bilgi alın">
        <p className="note"><Icon name="bolt" size={16} /><span>İspanya’daki diğer seçenekler ve maliyetler için <Link to="/lisans-programlari/ispanya">İspanya’da üniversite</Link>, <Link to="/fiyatlar/ispanya-universite-fiyatlari">İspanya üniversite fiyatları</Link> ve <Link to="/yurtdisi-dil-okullari/ispanya/valensiya-dil-okullari">Valensiya dil okulları</Link> sayfalarımıza göz atın.</span></p>
        <Sources links={[{ label: 'upv.es', href: 'https://www.upv.es' }]} />
      </FaqForm>
      <CtaBand title="UPV yolculuğunuzu birlikte planlayalım." />
    </>
  )
}

/* ---------- İspanyolca hazırlık ---------- */
export function UpvFoundation() {
  const path = upvPaths.foundation
  const desc = 'UPV İspanyolca hazırlık programı (B1–B2), Gandia kampüsü: 9.500 € program ücreti, 31 Aralık 2026’ya kadar %25 burs, tüm ek ücretler ve sonrası.'
  return (
    <>
      <Seo title="UPV İspanyolca Hazırlık Programı 2027: Ücret, Burs" description={desc} path={path} image="/img/upv/hazirlik-ogrenci.jpg" jsonLd={courseLd(path, 'UPV İspanyolca Dil ve Kültür Hazırlık Kursu (B1–B2)', desc, {
        offers: { '@type': 'Offer', price: '9500', priceCurrency: 'EUR', category: 'Program ücreti' },
        hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'onsite', location: { '@type': 'Place', name: 'UPV Gandia Kampüsü', address: { '@type': 'PostalAddress', addressLocality: 'Gandia', addressCountry: 'ES' } } },
        inLanguage: 'es',
      })} />
      <PageHero
        image="/img/upv/hazirlik-ogrenci.jpg"
        crumbs={[...hubCrumbs, { label: 'UPV', to: upvPaths.hub }, { label: 'İspanyolca hazırlık programı' }]}
        kicker={<RouteCode to="VLC" light />}
        title="UPV İspanyolca Hazırlık Programı (Foundation)"
        lead="Lise ya da lisans mezunları için UPV Gandia kampüsünde B1–B2 İspanyolca ve İspanyol kültürü. Program sonunda B2’yi belgeleyip UPV’de lisans veya yüksek lisansa başlarsınız."
        aside={
          <div className="factcard">
            <p className="factcard__h">Program özeti</p>
            <dl>{foundationFacts.map((f) => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}</dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Başvuru için bilgi al</Btn>
        <Btn href="#ucretler" variant="light" size="lg">Tüm ücretler</Btn>
      </PageHero>
      <UpvNav />

      <section className="section">
        <div className="container">
          <SectionHead title="Program Nasıl İşler?" intro="Başvurudan üniversite kaydına üç adım." />
          <RouteSteps steps={foundationSteps} />
          <p className="note"><Icon name="bolt" size={16} /><span>Yüksek lisans adayları önce yüksek lisans programına başvurup kabul alır; kabulden sonra hazırlık programına başlar ve B2’yi tamamlayınca yüksek lisansa geçer.</span></p>
        </div>
      </section>

      <section className="section section--mist" id="ucretler">
        <div className="container">
          <SectionHead title="Ücretler ve Ödeme Koşulları (2027)" intro="Program ortağının resmî ücret tablosundaki tüm kalemler. Bazı kalemler İspanya’ya varıştan sonra ödenir." />
          <div className="tablewrap">
            <table className="ctable">
              <thead><tr><th scope="col">Kalem</th><th scope="col">Tutar</th><th scope="col">Koşul</th></tr></thead>
              <tbody>
                {foundationFees.map((f) => (
                  <tr key={f.label}><th scope="row">{f.label}</th><td><strong>{f.amount}</strong></td><td>{f.note}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note"><Icon name="bolt" size={16} /><span>Burslar yalnızca kendi bütçesiyle okuyan (self-funded) öğrenciler içindir. Erken ödeme bursunun yanında güçlü akademik geçmişe (CV) sahip öğrenciler için de talep üzerine burs değerlendirilir.</span></p>
        </div>
      </section>

      <section className="section">
        <div className="container ukband">
          <div className="ukband__media">
            <img {...cardImg('/img/upv/gandia-plaj.jpg', '(max-width: 900px) 92vw, 560px')} alt="Gandia’da Akdeniz kıyısındaki kumsal" loading="lazy" width="720" height="520" />
            <span className="ukband__tag"><RouteCode to="VLC" light /> Gandia</span>
          </div>
          <div className="ukband__body">
            <h2 className="h2">Gandia: Akdeniz Kıyısında Kampüs Hayatı</h2>
            <p className="muted">Gandia, İspanya’nın doğu kıyısında, geniş kumsalları, ılıman Akdeniz iklimi ve canlı kültür hayatıyla bilinen bir sahil şehri. Yılda yarım milyonu aşkın ziyaretçi ağırlayan şehir, ders ile sosyal hayat arasında iyi bir denge sunar.</p>
            <CheckList items={['Geniş ve temiz kumsallar', 'Yıl boyu Akdeniz iklimi', 'Valensiya’ya kolay ulaşım', 'Büyük şehirlere göre daha uygun yaşam maliyeti', 'Uluslararası üniversite ortamı']} />
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container twocol">
          <div>
            <h2 className="h2">Hazırlık Sonrası Lisans</h2>
            <p>Geçerli lise diploması olan ve program sonundaki seviye sınavında B2’yi belgeleyen öğrenciler şu lisans programlarına başvurabilir. Yıllık ücret 1.534,80–2.080,80 € arasındadır.</p>
            <ul className="chips">
              {upvBachelors.map((b) => <li key={b.slug}><Link to={`${upvPaths.bachelors}#${b.slug}`}>{b.name}</Link></li>)}
            </ul>
            <Link to={upvPaths.bachelors} className="textlink">Bölümler, taban puanlar ve ücretler <Icon name="arrow" size={15} /></Link>
          </div>
          <div>
            <h2 className="h2">Hazırlık Sonrası Yüksek Lisans</h2>
            <p>Önce yüksek lisans programına kabul alınır, ardından hazırlık programıyla B2’ye ulaşılır. Süre bölüme göre 1–2 yıl, toplam ücret <strong>2.750–5.950 €</strong>.</p>
            <CheckList items={foundationMasters} />
          </div>
        </div>
      </section>

      <FaqForm faqs={foundationFaqs} source="upv-hazirlik" program="Üniversite" title="UPV hazırlık programı için bilgi alın">
        <p className="note"><Icon name="bolt" size={16} /><span>Vize, homologación ve PCE kurallarının ayrıntıları için <Link to="/blog/ispanyada-foundation-egitimi-ile-universiteye-gecis">İspanya’da foundation ile üniversiteye geçiş</Link> rehberimizi okuyun.</span></p>
        <Sources links={[{ label: 'UPV', href: 'https://www.upv.es' }]} />
      </FaqForm>
      <CtaBand title="2027 hazırlık dönemi için %25 erken ödeme bursunu kaçırmayın." />
    </>
  )
}

/* ---------- PCE kursu ---------- */
export function UpvPce() {
  const path = upvPaths.pce
  const desc = 'UPV Gandia’da PCE üniversite giriş kursu: 30 hafta yüz yüze, UNED PCE sınavlarına teknik, sağlık, işletme ve sanat hazırlığı. Şartlar ve ücretler.'
  return (
    <>
      <Seo title="UPV PCE Üniversite Giriş Kursu: UNED Sınav Hazırlığı" description={desc} path={path} image="/img/upv/pce-sinif.jpg" jsonLd={courseLd(path, 'UPV PCE Üniversite Giriş Kursu', desc, {
        offers: { '@type': 'Offer', price: '9500', priceCurrency: 'EUR', category: 'Program ücreti (başlangıç)' },
        hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'onsite', courseWorkload: 'P30W', location: { '@type': 'Place', name: 'UPV Gandia Kampüsü', address: { '@type': 'PostalAddress', addressLocality: 'Gandia', addressCountry: 'ES' } } },
        inLanguage: 'es',
      })} />
      <PageHero
        image="/img/upv/pce-sinif.jpg"
        crumbs={[...hubCrumbs, { label: 'UPV', to: upvPaths.hub }, { label: 'PCE üniversite giriş kursu' }]}
        kicker={<RouteCode to="VLC" light />}
        title="UPV PCE Üniversite Giriş Kursu"
        lead="İspanya’da üniversiteye giriş puanınızı yükseltmenin yolu PCE sınavları. UPV Gandia kampüsünde yüz yüze, sabah dersleriyle 30 haftalık yoğun hazırlık."
        aside={
          <div className="factcard">
            <p className="factcard__h">Kurs özeti</p>
            <dl>{pceFacts.map((f) => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}</dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Uygunluğumu öğren</Btn>
        <Btn href="#alanlar" variant="light" size="lg">Dört alan</Btn>
      </PageHero>
      <UpvNav />

      <section className="section">
        <div className="container twocol">
          <div>
            <h2 className="h2">Kurs Neleri Kapsar?</h2>
            <p>Kurs, öğrencileri UNED’in alana özgü yeterlilik sınavlarına (PCE) hazırlar ve dört ana alanda ilerler. Akademik eğitim, üniversite rehberliği ve kişisel destek bir arada; amaç İspanya’da bir üniversiteye kabul almanız.</p>
            <h3>Kimler için?</h3>
            <CheckList items={pceAudience} />
          </div>
          <div>
            <h2 className="h2">Neden Bu Kurs?</h2>
            <CheckList items={pceWhy} />
            <p className="note"><Icon name="bolt" size={16} /><span>PCE’de yalnızca aynı yıl girilen sınavlar hesaba katılır ve en az birinden 5 almak gerekir. Bu yüzden hazırlığı Mayıs sınav dönemine göre planlıyoruz.</span></p>
          </div>
        </div>
      </section>

      <section className="section section--mist" id="alanlar">
        <div className="container">
          <SectionHead title="Dört Çalışma Alanı" intro="Alanınızı hedeflediğiniz lisans bölümüne göre seçersiniz." />
          <div className="tablewrap">
            <table className="ctable">
              <thead><tr><th scope="col">Alan</th><th scope="col">Ana dersler</th><th scope="col">Uygun bölümler</th></tr></thead>
              <tbody>
                {pceTracks.map((t) => <tr key={t.title}><th scope="row">{t.title}</th><td>{t.subjects}</td><td>{t.ideal}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twocol">
          <div>
            <h2 className="h2">Ücretler</h2>
            <dl className="featlist featlist--2">
              <div><dt>Başvuru ücreti</dt><dd>500 €</dd></div>
              <div><dt>Program ücreti</dt><dd>9.500 €’dan başlayan</dd></div>
            </dl>
            <p>Erken ödeme ve güçlü akademik geçmiş (CV) için burs imkânı vardır. Teklif yalnızca kendi bütçesiyle okuyan öğrenciler için geçerlidir.</p>
          </div>
          <div>
            <h2 className="h2">Kampüs Olanakları</h2>
            <p>Kurs UPV Gandia kampüsünde yüz yüze verilir; öğrenciler üniversitenin tesis ve hizmetlerinden tam olarak yararlanır.</p>
            <CheckList cols={2} items={['Derslikler', 'Kütüphane', 'Çalışma salonları', 'Spor tesisleri', 'Öğrenci intraneti']} />
          </div>
        </div>
      </section>

      <FaqForm faqs={pceFaqs} source="upv-pce" program="Üniversite" title="PCE kursu için bilgi alın">
        <p className="note"><Icon name="bolt" size={16} /><span>B2’niz yoksa <Link to={upvPaths.foundation}>UPV İspanyolca hazırlık programı</Link> ile başlayın; not hesabının ayrıntıları için <Link to="/blog/ispanyada-foundation-egitimi-ile-universiteye-gecis">İspanya’da foundation rehberi</Link>.</span></p>
        <Sources links={[{ label: 'UNEDasiss', href: 'https://unedasiss.uned.es' }, { label: 'UPV', href: 'https://www.upv.es' }]} />
      </FaqForm>
      <CtaBand title="PCE ile hedef bölümünüze bir adım daha yaklaşın." />
    </>
  )
}

/* ---------- Lisans ---------- */
export function UpvBachelors() {
  const path = upvPaths.bachelors
  const desc = 'UPV lisans programları: işletme, çevre bilimleri, interaktif teknolojiler, telekomünikasyon ve mühendislik. Yıllık 1.534,80 €’dan ücret, taban puan, kampüs.'
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'UPV lisans programları',
    itemListElement: upvBachelors.map((b, i) => ({
      '@type': 'ListItem', position: i + 1,
      item: { '@type': 'Course', name: `${b.name} (${b.en})`, description: b.summary, url: `${site.url}${path}#${b.slug}`, provider: { '@type': 'CollegeOrUniversity', name: UPV, sameAs: 'https://www.upv.es' } },
    })),
  }
  return (
    <>
      <Seo title="UPV Lisans Programları ve Ücretleri: 7 Bölüm" description={desc} path={path} image="/img/upv/lisans-ogrenciler.jpg" jsonLd={ld} />
      <PageHero
        image="/img/upv/lisans-ogrenciler.jpg"
        crumbs={[...hubCrumbs, { label: 'UPV', to: upvPaths.hub }, { label: 'Lisans programları' }]}
        kicker={<RouteCode to="VLC" light />}
        title="UPV Lisans Programları ve Ücretleri"
        lead="Valensiya, Gandia ve Alcoy kampüslerinde yedi lisans programı. Devlet üniversitesi ücretleriyle yıllık 1.534,80 €’dan başlayan Avrupa diploması."
        aside={
          <div className="factcard">
            <p className="factcard__h">Kısaca</p>
            <dl>
              <div><dt>Süre</dt><dd>4 yıl, 240 AKTS</dd></div>
              <div><dt>Yıllık ücret</dt><dd>1.534,80–2.080,80 €</dd></div>
              <div><dt>Dil şartı</dt><dd>B2 İspanyolca</dd></div>
              <div><dt>YKS şartı</dt><dd>Yok</dd></div>
            </dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Bölümüme uygun muyum?</Btn>
        <Btn href="#ucret-tablosu" variant="light" size="lg">Ücret tablosu</Btn>
      </PageHero>
      <UpvNav />

      <section className="section" id="ucret-tablosu">
        <div className="container">
          <SectionHead title="Bölümler, Kampüsler ve Ücretler" intro="Kredi (AKTS) başına ücret üzerinden hesaplanır. Taban puan: UPV’nin 2026/27 için yayımladığı 14 üzerinden giriş notu." />
          <div className="tablewrap">
            <table className="ctable">
              <thead><tr><th scope="col">Bölüm</th><th scope="col">Kampüs</th><th scope="col">AKTS</th><th scope="col">€/AKTS</th><th scope="col">Yıllık</th><th scope="col">Toplam</th><th scope="col">Taban puan</th></tr></thead>
              <tbody>
                {upvBachelors.map((b) => (
                  <tr key={b.slug}>
                    <th scope="row"><a href={`#${b.slug}`}>{b.name}</a></th>
                    <td>{b.campus}</td><td>{b.ects}</td><td>{b.perEcts}</td><td><strong>{b.perYear}</strong></td><td>{b.total}</td><td>{b.cutoff ?? '–'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note"><Icon name="bolt" size={16} /><span>Ücretler program ortağının 2026 tablosundandır ve önceden haber verilmeksizin değişebilir. PCE’ye girmeyen bir Türk lise mezununun notu genellikle 5–6 civarındadır; daha yüksek taban puanlı bölümler için <Link to={upvPaths.pce}>PCE kursu</Link> öneriyoruz.</span></p>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <SectionHead title="Bölümleri Tanıyın" intro="Program içeriği, kariyer olanakları ve öne çıkan özellikler." />
          <div className="upvdegrees">
            {upvBachelors.map((b) => (
              <article key={b.slug} id={b.slug} className="upvdegree">
                <header>
                  <span className="advcard__n"><Icon name="pin" size={13} /> {b.campus} kampüsü · {b.years} · {b.ects} AKTS{b.places ? ` · ${b.places} kontenjan` : ''}</span>
                  <h3>{b.name}</h3>
                  <p className="muted small" lang="en">{b.en}</p>
                </header>
                <p>{b.summary}</p>
                <div className="upvdegree__cols">
                  <div>
                    <h4>Kariyer olanakları</h4>
                    <CheckList items={b.careers} />
                  </div>
                  <div>
                    <h4>Öne çıkanlar</h4>
                    <CheckList items={b.extras} />
                  </div>
                </div>
                <p className="upvdegree__foot">
                  <span>Yıllık <strong>{b.perYear}</strong> · Toplam <strong>{b.total}</strong>{b.cutoff ? <> · Taban puan <strong>{b.cutoff}</strong></> : null}</span>
                  <a href={b.url} target="_blank" rel="noopener noreferrer" className="textlink">UPV bölüm sayfası <Icon name="arrowUpRight" size={15} /></a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqForm faqs={bachelorFaqs} source="upv-lisans" program="Üniversite" title="UPV lisans için bilgi alın">
        <p className="note"><Icon name="bolt" size={16} /><span>B2 İspanyolcanız yoksa <Link to={upvPaths.foundation}>İspanyolca hazırlık programı</Link>, puanınızı yükseltmek için <Link to={upvPaths.pce}>PCE giriş kursu</Link>.</span></p>
        <Sources links={upvBachelors.map((b) => ({ label: b.en, href: b.url }))} />
      </FaqForm>
      <CtaBand title="UPV’de hangi bölüm size uygun, birlikte bakalım." />
    </>
  )
}

/* ---------- Yüksek lisans ---------- */
export function UpvMasters() {
  const path = upvPaths.masters
  const desc = 'UPV’de İngilizce yüksek lisans: Dijital İş Liderliği ve Pazarlama Yönetimi (90 AKTS, Valensiya). Hazırlık sonrası İspanyolca programlar 2.750–5.950 €.'
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'UPV yüksek lisans programları',
    itemListElement: upvMasters.map((m, i) => ({
      '@type': 'ListItem', position: i + 1,
      item: { '@type': 'Course', name: `${m.name} (${m.en})`, description: m.tagline, url: `${site.url}${path}#${m.slug}`, inLanguage: 'en', provider: { '@type': 'CollegeOrUniversity', name: UPV, sameAs: 'https://www.upv.es' } },
    })),
  }
  return (
    <>
      <Seo title="UPV’de İngilizce Yüksek Lisans: Dijital İş ve Pazarlama" description={desc} path={path} image="/img/upv/master-ogrenci.jpg" jsonLd={ld} />
      <PageHero
        image="/img/upv/master-ogrenci.jpg"
        crumbs={[{ label: 'Yüksek lisans', to: '/yurtdisi-yuksek-lisans' }, { label: 'İspanya', to: '/yurtdisi-yuksek-lisans/ispanya' }, { label: 'UPV', to: upvPaths.hub }, { label: 'Yüksek lisans' }]}
        kicker={<RouteCode to="VLC" light />}
        title="UPV’de Yüksek Lisans"
        lead="Valensiya kampüsünde İngilizce, 90 AKTS’lik iki yüksek lisans: Dijital İş Liderliği, Yönetimi ve Analizi ile Pazarlama Yönetimi ve Kurumsal İletişim. Ayrıca hazırlık yılıyla İspanyolca programlar."
        aside={
          <div className="factcard">
            <p className="factcard__h">İngilizce programlar</p>
            <dl>
              <div><dt>Kredi</dt><dd>90 AKTS</dd></div>
              <div><dt>Format</dt><dd>Karma (blended)</dd></div>
              <div><dt>Kampüs</dt><dd>Valensiya</dd></div>
              <div><dt>Dönem</dt><dd>Ekim 2026 – Aralık 2027</dd></div>
              <div><dt>Şart</dt><dd>Lisans diploması</dd></div>
            </dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Başvuru için bilgi al</Btn>
        <Btn href={`#${upvMasters[0].slug}`} variant="light" size="lg">Programlar</Btn>
      </PageHero>
      <UpvNav />

      {upvMasters.map((m, idx) => (
        <section key={m.slug} id={m.slug} className={`section ${idx % 2 ? 'section--mist' : ''}`}>
          <div className="container twocol">
            <div>
              <p className="hero__kicker"><Icon name="bolt" size={16} /> {m.tagline}</p>
              <h2 className="h2">{m.name}</h2>
              <p className="muted small" lang="en">{m.en}</p>
              <dl className="featlist featlist--2">
                <div><dt>Başlangıç</dt><dd>{m.start}</dd></div>
                <div><dt>Kredi</dt><dd>{m.ects}</dd></div>
                <div><dt>Süre</dt><dd>{m.duration}</dd></div>
                <div><dt>Format</dt><dd>{m.format}, {m.campus}</dd></div>
                <div><dt>Dil</dt><dd>{m.language}</dd></div>
                <div><dt>Giriş şartı</dt><dd>{m.entry}</dd></div>
              </dl>
              <div className="upvlead">
                <p className="upvlead__role">{m.leadRole}</p>
                <p className="upvlead__name">{m.lead}</p>
                <p>{m.leadText}</p>
              </div>
            </div>
            <div>
              <h3>Neler öğreneceksiniz?</h3>
              <ol className="upvmods">
                {m.modules.map((mod, i) => (
                  <li key={mod.title}><span>{String(i + 1).padStart(2, '0')}</span><div><strong>{mod.title}</strong><p>{mod.text}</p></div></li>
                ))}
              </ol>
              <p className="note"><Icon name="bolt" size={16} /><span><strong>Yaparak öğrenme:</strong> {m.practice}</span></p>
            </div>
          </div>
        </section>
      ))}

      <section className="section section--deep">
        <div className="container ukband">
          <div className="ukband__media">
            <img {...cardImg('/img/upv/valensiya-hemisferic.jpg', '(max-width: 900px) 92vw, 560px')} alt="Valensiya Sanat ve Bilim Şehri’nde gece ışıklandırılmış Hemisfèric" loading="lazy" width="720" height="520" />
          </div>
          <div className="ukband__body">
            <h2 className="h2">İspanyolca Yüksek Lisans: Hazırlık Yılıyla</h2>
            <p>İspanyolca yüksek lisans için önce programa başvurup kabul alırsınız; ardından UPV İspanyolca hazırlık programıyla B2’ye ulaşır ve yüksek lisansa başlarsınız. Süre bölüme göre 1–2 yıl, toplam ücret <strong>2.750–5.950 €</strong>.</p>
            <CheckList items={foundationMasters} />
            <Link to={upvPaths.foundation} className="textlink textlink--light">İspanyolca hazırlık programı <Icon name="arrow" size={15} /></Link>
          </div>
        </div>
      </section>

      <FaqForm faqs={masterFaqs} source="upv-yuksek-lisans" program="Yüksek lisans" title="UPV yüksek lisans için bilgi alın">
        <p className="note"><Icon name="bolt" size={16} /><span>Diğer ülkelerle karşılaştırmak için <Link to="/yurtdisi-yuksek-lisans/ispanya">İspanya’da yüksek lisans</Link> ve <Link to="/yurtdisi-yuksek-lisans">yurt dışında yüksek lisans</Link> sayfalarımıza bakın.</span></p>
        <Sources links={[{ label: 'UPV', href: 'https://www.upv.es' }]} />
      </FaqForm>
      <CtaBand title="UPV’de yüksek lisans için başvurunuzu birlikte hazırlayalım." />
    </>
  )
}
