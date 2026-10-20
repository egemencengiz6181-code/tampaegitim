import { Link, useLocation, useParams } from 'react-router-dom'
import { Seo, Btn, SectionHead, Stars, FaqList, CheckList } from '../components/ui'
import { Icon } from '../components/Icon'
import { ReviewRail, StudentWall } from '../components/signature'
import { PageHero, CtaBand } from '../components/layouts'
import { LeadForm } from '../components/LeadForm'
import { site, offices, values, stats } from '../data/site'
import { reviews, studentPhotos } from '../data/social'
import { generalFaqs } from '../data/landings'
import { authorBySlug } from '../data/authors'
import { posts, formatDate } from '../data/blog'
import { personLd, authorPath } from '../seo/schema'
import NotFound from './NotFound'

export function About() {
  return (
    <>
      <Seo title="Hakkımızda" description="Tampa Yurtdışı Eğitim; İzmir merkez ofisi, Aydın şubesi ve İngiltere Üniversite Temsilciliğiyle 15 yıllık tecrübeyle yurtdışı eğitim danışmanlığı sunar." path="/hakkimizda" />
      <PageHero
        image="/img/misc/office-1.jpg"
        crumbs={[{ label: 'Kurumsal' }, { label: 'Hakkımızda' }]}
        kicker="Tampa Yurtdışı Eğitim"
        title="Tecrübe, memnuniyet, güven, hızlı iletişim."
        lead="Yurtdışında eğitim hayallerinizi gerçekleştirmek ve kariyerinize hızlı bir başlangıç yapmak için buradayız."
      />
      <section className="section">
        <div className="container twocol twocol--wide">
          <div className="prose prose--lead">
            <p className="lead-strong">Ekibimiz, tüm sorularınız ve danışmanlık ihtiyaçlarınız için hızla yanınızda olacak; size en iyi çözümleri sunmaktan büyük memnuniyet duyacaktır.</p>
            <p>İzmir merkez ofisimiz başta olmak üzere Aydın şubemiz ve İngiltere Üniversite Temsilciliğimizle, siz değerli danışanlarımıza mükemmel hizmet sunmayı taahhüt ediyoruz.</p>
            <p>Tampa Yurtdışı Eğitim ailesi olarak, her öğrencinin hayallerini gerçekleştirmesi için eşsiz bir rehber olmayı amaçlıyoruz. Sadece yurtdışı eğitim sürecinde değil, aynı zamanda geleceğinizi şekillendiren bu önemli yolculukta sizinle omuz omuza yürümek için buradayız. Hayalini kurduğunuz eğitime, kültürel zenginliklere ve kişisel gelişime adım atmanızı sağlamak adına tüm kapıları ardına kadar açıyoruz.</p>
            <h2>Vizyonumuz</h2>
            <p>Her bireyin potansiyelini keşfetmesine yardımcı olmayı ve dünya standartlarında eğitim fırsatları sunarak onları küresel bir vizyona ulaştırmayı hedefliyoruz. Amacımız, dünyanın dört bir yanında Tampa Yurtdışı Eğitim’in izlerini bırakmak. Öğrencilerimizi geleceğe hazırlarken yalnızca bir eğitim danışmanı değil, uluslararası başarı hikâyelerine yön veren bir ilham kaynağı olmayı hayal ediyoruz.</p>
            <h2>Yaklaşımımız</h2>
            <p>Bizler için eğitim, yalnızca bir hedefe ulaşmak değil, aynı zamanda bireyin kendini yeniden keşfetmesidir. Sadece akademik başarıya değil, öğrencilerimizin dünyaya farklı bir perspektiften bakabilmesine, yeni kültürlerle kaynaşıp kendilerini geliştirebilmesine de önem veriyoruz. İnsan odaklı bir yaklaşım benimsiyor, sevgi ve saygıyı işimizin merkezine koyuyoruz. Çünkü sizin başarınız, bizim de başarımızdır.</p>
          </div>
          <dl className="stats stats--stack">
            {stats.map((s) => (<div key={s.label}><dt>{s.label}</dt><dd>{s.value}<span>{s.suffix}</span></dd></div>))}
          </dl>
        </div>
      </section>
      <section className="section section--deep">
        <div className="container">
          <SectionHead title="İki Ofis, Tek Ekip" intro="İzmir ve Aydın ofislerimiz ile İzmir’deki İngiltere Üniversite Temsilciliğimizde öğrencilerimizin yanındayız." action={{ label: 'Ofislerimiz', to: '/ofislerimiz' }} />
          <div className="officestrip">
            {offices.map((o) => (
              <figure key={o.slug}>
                <img src={o.image} alt={`${o.city} ofisi`} loading="lazy" width="480" height="340" />
                <figcaption><strong>{o.city}</strong><span>{o.note}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead title="Değerlerimiz" intro={site.tagline} />
          <dl className="featlist featlist--2">{values.map((v) => (<div key={v.title}><dt>{v.title}</dt><dd>{v.text}</dd></div>))}</dl>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

export function Team() {
  const areas = [
    { title: 'Eğitim danışmanlığı', text: 'Program, ülke ve okul seçiminde öğrenci ve ailelerle birebir çalışan danışmanlarımız.' },
    { title: 'Mentörlük', text: 'Motivasyon mektubu, referans, CV, portfolyo ve mülakat hazırlığında akademik mentörlerimiz.' },
    { title: 'Vize danışmanlığı', text: 'Evrak hazırlığından randevu takibine kadar vize dosyalarını yöneten ekibimiz.' },
    { title: 'Hukuki danışmanlık', text: 'Sözleşme, oturum izni ve resmi belgelerle ilgili süreçlerde destek.' },
    { title: 'Kariyer rehberliği', text: 'Test ve analiz araçlarıyla meslek ve bölüm seçimine rehberlik eden uzmanlarımız.' },
    { title: 'Yurtdışı koordinasyon', text: 'Okul ortaklarımızla iletişimi yürüten, varış sonrasında da öğrencilerimizi takip eden ekip arkadaşlarımız.' },
  ]
  return (
    <>
      <Seo title="Ekibimiz" description="Tampa Yurtdışı Eğitim ekibi alanında uzman ve deneyimli danışmanlardan oluşur." path="/ekibimiz" />
      <PageHero image="/img/misc/office-2.jpg" crumbs={[{ label: 'Kurumsal' }, { label: 'Ekibimiz' }]} title="Ekibimize merhaba deyin." lead="Ekibimiz, alanında uzman ve deneyimli danışmanlardan oluşmaktadır." />
      <section className="section">
        <div className="container">
          <ul className="pillars3">
            <li><Icon name="cap" size={26} /><strong>En prestijli okullar</strong><span>Akredite ve tanınırlığı olan kurumlarla çalışıyoruz.</span></li>
            <li><Icon name="bolt" size={26} /><strong>Hızlı vize süreçleri</strong><span>Dosyanızı eksiksiz ve zamanında hazırlıyoruz.</span></li>
            <li><Icon name="shield" size={26} /><strong>Güvenilir müşteri desteği</strong><span>Kalkıştan dönüşe kadar ulaşabileceğiniz bir ekip.</span></li>
          </ul>
        </div>
      </section>
      <section className="section section--mist">
        <div className="container">
          <SectionHead title="Uzmanlık alanlarımız" intro="Her öğrencinin dosyası, ihtiyacına göre bu alanlardaki uzmanlarımız tarafından birlikte yürütülür." />
          <dl className="featlist">{areas.map((a) => (<div key={a.title}><dt>{a.title}</dt><dd>{a.text}</dd></div>))}</dl>
        </div>
      </section>
      <section className="section">
        <div className="container twocol">
          <div className="prose">
            <h2>Öğrencilerimiz Ekibimizi Anlatıyor</h2>
            <p>Danışanlarımızın yorumlarında en sık geçen ifadeler: ilgili, güler yüzlü, deneyimli ve süreç bittikten sonra da iletişimi koparmayan bir ekip.</p>
            <Btn to="/kariyer" variant="line" icon="arrow">Ekibimize katılın</Btn>
          </div>
          <figure className="quote">
            <Stars />
            <blockquote>{reviews[4].text}</blockquote>
            <figcaption>{reviews[4].name}, Google yorumu</figcaption>
          </figure>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

/* ---------- /ekibimiz/:slug (blog yazarı profili) ---------- */
export function AuthorPage() {
  const { slug = '' } = useParams()
  const a = authorBySlug[slug]
  if (!a) return <NotFound />
  const written = posts.filter((p) => p.author === a.slug)
  const path = authorPath(a)
  return (
    <>
      <Seo
        title={`${a.name}, ${a.role}`}
        description={`${a.name}, Tampa Yurtdışı Eğitim ${a.role.toLocaleLowerCase('tr')}. Uzmanlık alanları: ${a.expertise.join(', ')}. Yazıları ve danışmanlık için iletişim bilgileri.`}
        path={path}
        image={a.photo}
        noindex={!a.ready}
        jsonLd={{ '@context': 'https://schema.org', '@type': 'ProfilePage', mainEntity: personLd(a) }}
      />
      <PageHero tone="mist" crumbs={[{ label: 'Ekibimiz', to: '/ekibimiz' }, { label: a.name }]} kicker={a.role} title={a.name} lead={a.years ? `${a.years} yıllık yurt dışı eğitim danışmanlığı deneyimi` : undefined}>
        <Btn to="/basvuru" icon="arrow">Ücretsiz danışmanlık al</Btn>
      </PageHero>
      <section className="section">
        <div className="container twocol twocol--wide">
          <div className="prose">
            {a.photo && <img src={a.photo} alt={`${a.name}, ${a.role}`} width="320" height="400" loading="lazy" />}
            {a.bio.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
          </div>
          <aside className="panel">
            <h2 className="panel__h">Uzmanlık Alanları</h2>
            <CheckList items={a.expertise} />
          </aside>
        </div>
      </section>
      {written.length > 0 && (
        <section className="section section--mist">
          <div className="container">
            <SectionHead title={`${a.name} yazıları`} action={{ label: 'Tüm yazılar', to: '/blog' }} />
            <ul className="klist klist--compact">
              {written.map((p) => (
                <li key={p.slug}><Link to={`/blog/${p.slug}`}><strong>{p.title}</strong><span>Son güncelleme: {formatDate(p.updated)}</span><Icon name="arrow" size={18} /></Link></li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  )
}

export function Reviews() {
  return (
    <>
      <Seo title="Müşteri Yorumları" description="Kusursuz hizmet kalitesi: Tampa Yurtdışı Eğitim’i bir de öğrencilerimizin ve velilerimizin gözünden görün. Google’da 89 yorumla 5.0 puan." path="/musteri-yorumlari" />
      <PageHero
        tone="deep"
        crumbs={[{ label: 'Kurumsal' }, { label: 'Gidenler anlatıyor' }]}
        kicker={<><Stars size={16} /> Google’da {site.googleRating} puan</>}
        title="Gidenler Anlatıyor"
        lead="Bizi bir de öğrencilerimizin ve velilerimizin gözünden görün."
      >
        <Btn href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14bbd98637fc0fcd:0x60b19c327d500f27" variant="light" iconLeft="external">Tüm incelemeleri Google’da görün</Btn>
      </PageHero>
      <section className="section">
        <div className="container">
          <h2 className="h2">Öğrencilerimizden Kareler</h2>
          <StudentWall />
          <h2 className="h2">Google Yorumları</h2>
          <div className="revgrid">
            {reviews.map((r) => (
              <figure key={r.name} className="review review--card">
                <Stars />
                <blockquote>{r.text}</blockquote>
                <figcaption>
                  <span className="review__avatar" aria-hidden="true">{r.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}</span>
                  <span><strong>{r.name}</strong><small>{[r.program, r.country].filter(Boolean).join(', ')} · google.com</small></span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--mist">
        <div className="container twocol">
          <div>
            <p className="bignum">{site.studentCount}</p>
            <h2 className="h2">Öğrenci Bize Güvendi.</h2>
            <p className="muted">Tek bir paket ile sizleri yurt dışı eğitime gönderdiğimiz uygun fiyatlı tekliflere göz atın.</p>
            <Btn to="/her-sey-dahil-paketler" icon="arrow">Her Şey Dahil Paketlere göz atın</Btn>
          </div>
          <div className="gallery" aria-label="Öğrencilerimizden kareler">
            {studentPhotos.slice(0, 4).map((p) => (
              <img key={p.image} src={p.image} alt={p.alt} loading="lazy" width="320" height="320" />
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Sıradaki başarı hikâyesi sizin olsun." />
    </>
  )
}

export function Careers() {
  return (
    <>
      <Seo title="Kariyer" description="Tampa Yurtdışı Eğitim ve Danışmanlık bünyesindeki açık pozisyonlar. Kaliteli bir iş yeri herkesin hakkı." path="/kariyer" />
      <PageHero image="/img/misc/office-1.jpg" crumbs={[{ label: 'Kurumsal' }, { label: 'Kariyer' }]} kicker="Bizimle çalışmak ister misiniz?" title="Kaliteli bir iş yeri herkesin hakkı." lead="Tampa Yurtdışı Eğitim ve Danışmanlık bünyesinde yer alan boş pozisyonlara bu sayfayı kontrol ederek ulaşabilirsiniz." />
      <section className="section">
        <div className="container twocol twocol--wide">
          <div className="prose prose--lead">
            <h2>Aramıza Katılmaya Hazır Mısınız?</h2>
            <p>Tampa Eğitim ailesi olarak, yetenekli, enerjik ve yaratıcı bireylerle bir arada çalışmayı önemsiyoruz. Siz de büyüyen ekibimizin bir parçası olabilir, yeteneklerinizi geliştirebilir ve birlikte büyük başarılara imza atabiliriz. Hedefimiz sadece çalışmak değil, birlikte üretmek ve değer katmaktır.</p>
          </div>
          <div className="gallery gallery--2">
            <img src="/img/misc/office-1.jpg" alt="Ofisimizden" loading="lazy" width="320" height="320" />
            <img src="/img/misc/office-2.jpg" alt="Ofisimizden" loading="lazy" width="320" height="320" />
          </div>
        </div>
      </section>
      <section className="section section--mist">
        <div className="container">
          <SectionHead title="Açık pozisyonlar" />
          <article className="job">
            <div>
              <span className="tag">Eğitim danışmanlığı</span>
              <h3>Yurt Dışı Eğitim Danışmanı</h3>
              <p>İş dünyasında fark yaratmak isteyen yetenekli ve vizyoner bireyleri ekibimize davet ediyoruz.</p>
              <p className="job__meta"><Icon name="pin" size={16} /> Park Yaşam Ofisleri, İzmir · Tam zamanlı</p>
            </div>
            <Btn href={`mailto:${site.email}?subject=Yurt%20D%C4%B1%C5%9F%C4%B1%20E%C4%9Fitim%20Dan%C4%B1%C5%9Fman%C4%B1%20Ba%C5%9Fvurusu`} variant="teal" iconLeft="mail">CV gönderin</Btn>
          </article>
          <SectionHead title="Çalıştığımız alanlar" intro="Yurt dışı danışmanlık alanında geniş bir hizmet yelpazesi sunuyoruz." />
          <dl className="featlist featlist--2">
            <div><dt>Eğitim danışmanlığı</dt><dd>Öğrenci ve velilerle birebir çalışarak ülke, okul ve program seçiminde rehberlik.</dd></div>
            <div><dt>Hukuki danışmanlık</dt><dd>Sözleşmeler, oturum izinleri ve resmi belgelerle ilgili süreçlerde destek.</dd></div>
            <div><dt>Vize danışmanlığı</dt><dd>Vize dosyalarının hazırlanması, randevu takibi ve mülakat hazırlığı.</dd></div>
            <div><dt>Ofis asistanlığı</dt><dd>Öğrenci kayıt süreçlerinin, belgelerin ve ofis operasyonlarının koordinasyonu.</dd></div>
          </dl>
        </div>
      </section>
      <section className="section">
        <div className="container twocol">
          <div>
            <h2 className="h2">Başvuru Süreci</h2>
            <ol className="bigsteps">
              <li><span className="bigsteps__n" aria-hidden="true">1</span><div><h3>CV gönderin</h3><p>Özgeçmişinizi ve ilgilendiğiniz pozisyonu {site.email} adresine iletin.</p></div></li>
              <li><span className="bigsteps__n" aria-hidden="true">2</span><div><h3>Ön görüşme</h3><p>Uygun adaylarla telefon veya online kısa bir tanışma görüşmesi yapıyoruz.</p></div></li>
              <li><span className="bigsteps__n" aria-hidden="true">3</span><div><h3>Ofiste tanışma</h3><p>İzmir ofisimizde ekiple tanışıp rolü birlikte detaylandırıyoruz.</p></div></li>
            </ol>
          </div>
          <div className="panel">
            <h2 className="panel__h">Aradığımız Özellikler</h2>
            <CheckList items={['İnsan odaklı, iletişimi güçlü olmak', 'İyi derecede İngilizce (ek bir dil artı)', 'Yurtdışı eğitim veya yaşam deneyimi (tercihen)', 'Detaylara dikkat ve takip disiplini', 'Öğrenmeye ve gelişmeye açık olmak']} />
          </div>
        </div>
      </section>
    </>
  )
}

export function Offices() {
  return (
    <>
      <Seo title="Ofislerimiz" description="İzmir Karşıyaka merkez ofis, Aydın Efeler ofisi ve İzmir’deki İngiltere Üniversite Temsilciliği." path="/ofislerimiz" />
      <PageHero tone="mist" crumbs={[{ label: 'Kurumsal' }, { label: 'Ofislerimiz' }]} title="İzmir ve Aydın’da Bizi Ziyaret Edin." lead="Ofislerimizde sizi ağırlamaktan memnuniyet duyarız. Randevu almak için arayabilir veya online görüşme planlayabilirsiniz." />
      <section className="section">
        <div className="container officecards">
          {offices.map((o) => (
            <article key={o.slug} className="officecard">
              <img src={o.image} alt="" loading="lazy" width="560" height="360" />
              <div>
                <h2 className="h3">{o.title}</h2>
                <p>{o.note}</p>
                <p className="officecard__addr"><Icon name="pin" size={18} /> {o.address}</p>
                {o.phone && <p><a href={o.phoneHref}><Icon name="phone" size={18} /> {o.phone}</a></p>}
                <a className="textlink" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapQuery)}`} target="_blank" rel="noopener noreferrer">Yol tarifi alın <Icon name="external" size={15} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}

export function Contact() {
  return (
    <>
      <Seo title="İletişim" description="Tampa Yurtdışı Eğitim ve Danışmanlık iletişim bilgileri: İzmir ve Aydın ofisleri, telefon, e-posta ve online başvuru formu." path="/iletisim" />
      <PageHero tone="mist" crumbs={[{ label: 'İletişim' }]} kicker="Tampa Yurtdışı Eğitim ve Danışmanlık" title="Bizimle iletişime geçin." lead="İzmir ve Aydın ofislerimizde sizleri ağırlamaktan memnuniyet duyarız." />
      <section className="section">
        <div className="container contactsplit">
          <div>
            <ul className="contactlist">
              <li><Icon name="phone" size={22} /><div><small>Telefon</small><a href={site.phoneHref}>{site.phone}</a></div></li>
              <li><Icon name="chat" size={22} /><div><small>WhatsApp</small><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">Bize WhatsApp’tan yazın</a></div></li>
              <li><Icon name="mail" size={22} /><div><small>E-posta</small><a href={`mailto:${site.email}`}>{site.email}</a></div></li>
              <li><Icon name="calendar" size={22} /><div><small>Online görüşme</small><a href={site.calendly} target="_blank" rel="noopener noreferrer">30 dakikalık görüşme planlayın</a></div></li>
              <li><Icon name="clock" size={22} /><div><small>Çalışma saatleri</small><span>{site.hours}</span></div></li>
            </ul>
            <h2 className="h3">Ofislerimiz</h2>
            <ul className="offices-mini">
              {offices.slice(0, 3).map((o) => (
                <li key={o.slug}><strong>{o.title}</strong><span>{o.address}</span>{o.phone && <a href={o.phoneHref}>{o.phone}</a>}</li>
              ))}
            </ul>
          </div>
          <LeadForm source="iletisim" title="Bize mesaj gönderin" note="Formu doldurun, detaylı bilgi için sizleri hemen arayalım." />
        </div>
      </section>
      <section className="mapwrap" aria-label="İzmir ofisi harita">
        <iframe title="Tampa İzmir ofisi haritası" src="https://www.google.com/maps?q=Park+Ya%C5%9Fam+Ofisleri+Kar%C5%9F%C4%B1yaka+%C4%B0zmir&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </>
  )
}

export function Apply() {
  return (
    <>
      <Seo title="Ücretsiz Danışmanlık Başvurusu" description="Yurtdışı eğitim için ücretsiz ön görüşme talep edin. Formu doldurun, danışmanımız sizi arasın." path="/basvuru" jsonLd={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Ana sayfa', item: `${site.url}/` }, { '@type': 'ListItem', position: 2, name: 'Ücretsiz danışmanlık başvurusu', item: `${site.url}/basvuru` }] }} />
      <section className="apply">
        <div className="container apply__in">
          <div className="apply__copy">
            <p className="hero__kicker"><Icon name="bolt" size={16} /> Online başvuru formu</p>
            <h1 className="apply__title">Ücretsiz Ön Görüşmenizi Planlayalım.</h1>
            <p className="phero__lead">Bize mesaj gönderin, sizi en kısa süre içerisinde arayalım ve ücretsiz danışmanlık verelim.</p>
            <ol className="apply__steps">
              <li><strong>Formu doldurun</strong><span>1 dakikadan kısa sürer.</span></li>
              <li><strong>Sizi arayalım</strong><span>Mesai saatlerinde aynı gün dönüş hedefliyoruz.</span></li>
              <li><strong>Yol haritanızı alın</strong><span>Size uygun ülke, okul ve bütçe seçenekleri yazılı olarak.</span></li>
            </ol>
            <div className="apply__alt">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--line btn--md"><Icon name="chat" size={18} /><span>WhatsApp’tan yazın</span></a>
              <a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn btn--line btn--md"><Icon name="calendar" size={18} /><span>Online görüşme seçin</span></a>
            </div>
          </div>
          <LeadForm source="basvuru" title="Başvuru formu" />
        </div>
      </section>
      <section className="section section--mist">
        <div className="container twocol">
          <div><h2 className="h2">Sık Sorulan Sorular</h2><FaqList items={generalFaqs.slice(0, 4)} /></div>
          <div><h2 className="h2">Danışanlarımız Ne Diyor?</h2><ReviewRail /></div>
        </div>
      </section>
    </>
  )
}

export function Thanks() {
  const { state } = useLocation() as { state?: { name?: string } }
  return (
    <>
      <Seo title="Teşekkürler" description="Başvurunuz alındı." path="/tesekkurler" noindex />
      <section className="thanks">
        <div className="container thanks__in">
          <span className="thanks__icon"><Icon name="check" size={36} /></span>
          <h1>{state?.name ? `Teşekkürler ${state.name}, Başvurunuz Bize Ulaştı.` : 'Teşekkürler, Başvurunuz Bize Ulaştı.'}</h1>
          <p>Danışmanımız mesai saatleri içinde en kısa sürede sizi arayacak. Beklemek istemezseniz hemen WhatsApp’tan yazabilir veya online görüşme saatinizi seçebilirsiniz.</p>
          <div className="phero__actions">
            <Btn href={site.whatsapp} iconLeft="chat">WhatsApp’tan yazın</Btn>
            <Btn href={site.calendly} variant="line" iconLeft="calendar">Online görüşme planlayın</Btn>
          </div>
          <p className="muted">Bu arada <Link to="/blog">blogumuza</Link> veya <Link to="/bilgi-bankasi">bilgi bankamıza</Link> göz atabilirsiniz.</p>
        </div>
      </section>
    </>
  )
}

export function Legal({ kind }: { kind: 'kvkk' | 'cerez' }) {
  const isK = kind === 'kvkk'
  const title = isK ? 'KVKK Aydınlatma Metni' : 'Çerez Politikası'
  return (
    <>
      <Seo title={title} description={`${site.legalName} ${title.toLowerCase()}: kişisel verilerin işlenmesi, çerezler ve haklarınız hakkında bilgilendirme.`} path={isK ? '/kvkk' : '/cerez-politikasi'} />
      <PageHero tone="mist" crumbs={[{ label: title }]} title={title} />
      <section className="section">
        <div className="container prose prose--narrow">
          {isK ? (
            <>
              <p>Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla {site.legalName} tarafından kişisel verilerinizin işlenmesine ilişkin olarak sizi bilgilendirmek amacıyla hazırlanmıştır.</p>
              <h2>İşlenen Kişisel Veriler</h2>
              <p>Formlar aracılığıyla paylaştığınız ad, soyad, telefon, e-posta, ilgilendiğiniz program ve ülke bilgileri ile mesaj içeriğiniz.</p>
              <h2>İşleme Amaçları</h2>
              <ul><li>Talebinize dönüş yapılması ve danışmanlık hizmetinin sunulması</li><li>Okul, konaklama ve vize süreçlerinin yürütülmesi</li><li>Yasal yükümlülüklerin yerine getirilmesi</li></ul>
              <h2>Aktarım</h2>
              <p>Kişisel verileriniz, yalnızca hizmetin gerektirdiği ölçüde ve açık rızanız doğrultusunda başvuru yapılan eğitim kurumları, konaklama sağlayıcıları ve ilgili resmi kurumlarla paylaşılabilir.</p>
              <h2>Haklarınız</h2>
              <p>KVKK’nın 11. maddesi kapsamındaki haklarınızı kullanmak için {site.email} adresine başvurabilirsiniz.</p>
              <p className="muted small">Bu metin bilgilendirme amaçlı bir taslaktır; yayına alınmadan önce hukuk danışmanınız tarafından gözden geçirilmelidir.</p>
            </>
          ) : (
            <>
              <p>Web sitemizde, deneyiminizi iyileştirmek ve site trafiğini analiz etmek amacıyla çerezler kullanılabilir.</p>
              <h2>Kullanılan Çerez Türleri</h2>
              <ul><li>Zorunlu çerezler: sitenin çalışması için gereklidir.</li><li>Analitik çerezler: ziyaret istatistiklerini anonim olarak ölçer.</li><li>Pazarlama çerezleri: reklam kampanyalarının performansını ölçer.</li></ul>
              <h2>Çerezleri Yönetme</h2>
              <p>Tarayıcınızın ayarlarından çerezleri silebilir veya engelleyebilirsiniz.</p>
              <p className="muted small">Bu metin bilgilendirme amaçlı bir taslaktır; yayına alınmadan önce hukuk danışmanınız tarafından gözden geçirilmelidir.</p>
            </>
          )}
        </div>
      </section>
    </>
  )
}
