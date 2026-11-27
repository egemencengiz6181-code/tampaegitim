import { Seo, SectionHead, FaqList } from '../components/ui'
import { Icon } from '../components/Icon'
import { RouteSteps } from '../components/signature'
import { CtaBand } from '../components/layouts'
import { AdHero } from '../components/AdHero'
import { scrollToVisibleForm } from '../lib/analytics'
import { site, offices } from '../data/site'
import { ukApplyPath, ukApplyLanding, ukApplyServices, ukApplySteps, ukApplyFaqs } from '../data/ukApply'

/* ---------- /ingiltere-universite-basvuru ----------
   Google Ads için eğitim odaklı sayfa. Menüde yok, indekslenir.
   Metin kuralları için src/data/ukApply.ts başındaki nota bakın (vize ile ilgili içerik yok). */
export function UkApplyPage() {
  const branches = offices.filter((o) => o.slug === 'izmir' || o.slug === 'aydin')
  const stats = [
    { value: String(site.experienceYears), suffix: ' yıl', label: 'Yurtdışı eğitim danışmanlığı deneyimi' },
    { value: site.studentCount, suffix: '', label: 'Yurtdışına yönlendirdiğimiz öğrenci' },
    { value: site.googleRating, suffix: '/5', label: `Google puanı (${site.googleReviewCount} yorum)` },
    { value: '2', suffix: ' ofis', label: 'İzmir ve Aydın’da yüz yüze görüşme' },
  ]
  const toForm = { label: ukApplyLanding.form.cta, href: '#form', onClick: scrollToVisibleForm }
  return (
    <>
      <Seo
        title="İngiltere’de Üniversite Eğitimi ve Başvuru Danışmanlığı"
        description="İngiltere’de üniversite eğitimi için profil değerlendirmesi, bölüm ve üniversite seçimi, Foundation yolu, motivasyon mektubu desteği ve yurt seçimi. İzmir ve Aydın’da ücretsiz ön görüşme."
        path={ukApplyPath}
      />
      <AdHero ad={ukApplyLanding} crumbs={[{ label: 'İngiltere’de Üniversite Eğitimi' }]} source="ingiltere-universite-basvuru" country="İngiltere" />

      <section className="section">
        <div className="container">
          <SectionHead title="Eğitim Danışmanlığı Kapsamı" intro="İngiltere’de lisans eğitimine giden yolda akademik planlamanın her adımında yanınızdayız." />
          <div className="advgrid">
            {ukApplyServices.map((s) => <article key={s.title} className="advcard"><h3>{s.title}</h3><p>{s.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <SectionHead title="Neden Tampa?" intro={`${site.legalName} olarak ${site.experienceYears} yıldır öğrencileri yurtdışındaki üniversitelere hazırlıyoruz.`} />
          <dl className="stats stats--4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}<span>{s.suffix}</span></dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHead title="Beş Adımda İngiltere’de Üniversite" intro="İlk görüşmeden yeni şehrinize yerleşmeye kadar her adımda kime ulaşacağınızı bilirsiniz." />
          <RouteSteps steps={ukApplySteps} dark />
        </div>
      </section>

      <section className="section">
        <div className="container twocol">
          <div>
            <h2 className="h2">Sık Sorulan Sorular</h2>
            <FaqList items={ukApplyFaqs} />
          </div>
          <div>
            <h2 className="h2">Bize Ulaşın</h2>
            <p>
              <strong>{site.legalName}</strong>, İzmir merkezli özel bir eğitim danışmanlığı şirketidir. Kamu kurumu değildir; üniversitelere kabul kararlarını
              üniversitelerin kendisi verir. Görüşmelerimizi ofislerimizde, telefonla veya online yapıyoruz.
            </p>
            <div className="ukapply__offices">
              {branches.map((o) => (
                <article key={o.slug} className="officecard">
                  <div>
                    <h3 className="h3">{o.title}</h3>
                    <p className="officecard__addr"><Icon name="pin" size={18} /> {o.address}</p>
                    {o.phone && <p><a href={o.phoneHref}><Icon name="phone" size={18} /> {o.phone}</a></p>}
                  </div>
                </article>
              ))}
            </div>
            <p className="muted">E-posta: <a href={`mailto:${site.email}`}>{site.email}</a> · {site.hours}</p>
          </div>
        </div>
      </section>

      <CtaBand title="İngiltere’de üniversite planınızı birlikte kuralım." text="Ücretsiz ön görüşmede hedefinizi dinleyelim, size uygun bölüm, üniversite ve giriş yolunu birlikte belirleyelim." cta={toForm} />
    </>
  )
}
