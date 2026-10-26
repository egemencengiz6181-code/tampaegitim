import { Link } from 'react-router-dom'
import { Seo, Btn, SectionHead, FaqList, RouteCode } from '../components/ui'
import { Icon } from '../components/Icon'
import { RouteSteps } from '../components/signature'
import { PageHero, CtaBand } from '../components/layouts'
import { LeadForm } from '../components/LeadForm'
import { Rich } from '../components/Rich'
import { offices } from '../data/site'
import { universities } from '../data/social'
import { ukRepresentation, ukRepresentationPath, ukUcas2027, ukMaintenance, ukWork } from '../data/uk'
import { localBusinessLd } from '../seo/schema'

/* ---------- /ingiltere-universite-temsilciligi ---------- */
export function UkRepresentationPage() {
  const o = offices.find((x) => x.slug === 'ingiltere-universite-temsilciligi')!
  const izmir = offices.find((x) => x.slug === 'izmir')!
  const partners = ['Queen Mary University of London', 'Manchester Metropolitan University', 'University of Liverpool']
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapQuery)}`
  return (
    <>
      <Seo
        title="İngiltere Üniversite Temsilciliği İzmir"
        description="İzmir Karşıyaka’daki İngiltere Üniversite Temsilciliği: UCAS ve Foundation başvurusu, kabul takibi, CAS ve Student vizesi süreçlerini yüz yüze yönetiyoruz."
        path={ukRepresentationPath}
        image={o.image}
        jsonLd={{ '@context': 'https://schema.org', ...localBusinessLd({ ...o, locality: izmir.locality, district: izmir.district, postalCode: izmir.postalCode, geo: izmir.geo }) }}
      />
      <PageHero
        image={o.image}
        crumbs={[{ label: 'Ofislerimiz', to: '/ofislerimiz' }, { label: o.title }]}
        kicker={<RouteCode to="LON" light />}
        title="İngiltere Üniversite Temsilciliği"
        lead="İzmir merkez ofisimizin hemen yanındaki temsilciliğimizde İngiltere üniversitelerine başvuru, bilgilendirme ve kabul süreçlerini yüz yüze yürütüyoruz. Program seçiminden CAS ve Student vizesine kadar tek bir danışmanla ilerlersiniz."
        aside={
          <div className="factcard">
            <p className="factcard__h">{o.title}</p>
            <dl>
              <div><dt>Adres</dt><dd>{o.address}</dd></div>
              <div><dt>Telefon</dt><dd><a href={o.phoneHref}>{o.phone}</a></dd></div>
              <div><dt>Görüşme</dt><dd>Ofiste, telefonla veya online</dd></div>
            </dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Randevu al</Btn>
        <Btn href={mapHref} variant="light" size="lg">Yol tarifi</Btn>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead title="Temsilcilikte Neler Yapıyoruz?" intro="İngiltere’de lisans, Foundation ve yüksek lisans başvurularının her adımı." />
          <div className="advgrid">
            {ukRepresentation.services.map((s) => <article key={s.title} className="advcard"><h3>{s.title}</h3><p><Rich text={s.text} /></p></article>)}
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container twocol">
          <div>
            <h2 className="h2">2027 Girişi Başvuru Takvimi</h2>
            <dl className="featlist">
              <div><dt>{ukUcas2027.opens}</dt><dd>UCAS başvuruları açılır</dd></div>
              <div><dt>{ukUcas2027.earlyDeadline}</dt><dd>Oxford, Cambridge, tıp, diş hekimliği ve veterinerlik için son tarih</dd></div>
              <div><dt>{ukUcas2027.equalConsideration}</dt><dd>Diğer bölümler için eşit değerlendirme son tarihi</dd></div>
              <div><dt>Haziran – ağustos</dt><dd>Koşulların tamamlanması, CAS ve Student vizesi</dd></div>
            </dl>
          </div>
          <div>
            <h2 className="h2">Vize ve Çalışma Hakkı</h2>
            <p>Student vizesinde {ukMaintenance.from} ve sonrasındaki başvurularda Londra’da aylık {ukMaintenance.london.toLocaleString('tr-TR')} £, Londra dışında aylık {ukMaintenance.outside.toLocaleString('tr-TR')} £ yaşam gideri (en fazla {ukMaintenance.months} ay) gösterilir.</p>
            <p>{ukWork.student}</p>
            <p>{ukWork.graduateRoute}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Çözüm Ortaklarımızdan Bazıları" intro="Birlikte çalıştığımız İngiltere üniversitelerinden bazıları." />
          <ul className="unilogos">
            {universities.filter((u) => partners.includes(u.name)).map((u) => (
              <li key={u.name}><img src={`/img/logos/${u.file}`} alt={u.name} loading="lazy" decoding="async" height="48" /></li>
            ))}
          </ul>
          <p className="note"><Icon name="bolt" size={16} /> Bölüm ve şehir seçeneklerini <Link to="/universiteler/ingiltere">İngiltere üniversiteleri</Link>, ücretleri <Link to="/fiyatlar/ingiltere-universite-fiyatlari">İngiltere üniversite fiyatları</Link> sayfalarımızda inceleyebilirsiniz.</p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHead title="Başvurudan İngiltere’ye Altı Adım" intro="İlk görüşmeden varışa kadar her adımda kime ulaşacağınızı bilirsiniz." />
          <RouteSteps steps={ukRepresentation.steps} dark />
        </div>
      </section>

      <section className="section" id="form">
        <div className="container twocol">
          <div>
            <h2 className="h2">Sık Sorulan Sorular</h2>
            <FaqList items={ukRepresentation.faqs} />
            <p className="note"><Icon name="bolt" size={16} /> Ayrıntılı rehber: <Link to="/lisans-programlari/ingiltere">İngiltere’de üniversite okumak ve kayıt süreci</Link>.</p>
          </div>
          <LeadForm source="ingiltere-temsilcilik" defaultProgram="Üniversite" defaultCountry="İngiltere" title="Temsilcilikten randevu alın" note="İngiltere’de üniversite planınızı ücretsiz olarak birlikte değerlendirelim." />
        </div>
      </section>
      <CtaBand title="İngiltere’de üniversite yolculuğunuzu İzmir’den birlikte planlayalım." />
    </>
  )
}
