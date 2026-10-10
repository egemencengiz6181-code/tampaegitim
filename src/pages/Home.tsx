import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo, Btn, SectionHead, FaqList, Stars, RouteCode } from '../components/ui'
import { Icon } from '../components/Icon'
import { DepartureBoard, BoardingPass, RouteSteps, LogoMarquee, ReviewRail, ReadMore, StudentWall } from '../components/signature'
import { LeadForm } from '../components/LeadForm'
import { programs, countriesFor } from '../data/programs'
import { countryBySlug } from '../data/countries'
import { packages, formatPrice } from '../data/packages'
import { site, stats, values, offices } from '../data/site'
import { services } from '../data/services'
import { posts, formatDate } from '../data/blog'
import { generalFaqs } from '../data/landings'
import { cardImg } from '../lib/img'

const featured = ['ingiltere', 'almanya', 'malta', 'amerika', 'irlanda', 'kanada', 'polonya', 'italya', 'dubai', 'ispanya']

const journey = [
  { title: 'Tanışalım', text: 'Ücretsiz ön görüşmede hedefini, bütçeni ve takvimini konuşuruz. Online ya da ofisimizde.' },
  { title: 'Yol haritası', text: 'Sana uygun ülke, okul ve programları karşılaştırmalı ve yazılı olarak paylaşırız.' },
  { title: 'Başvuru', text: 'Kayıt veya üniversite başvurularını; motivasyon mektubu ve belgelerle birlikte biz yönetiriz.' },
  { title: 'Vize', text: 'Evrak listesinden randevuya, gerekirse mülakat provasına kadar dosyanı hazırlarız.' },
  { title: 'Kalkış', text: 'Konaklama, sigorta ve uçuş planlanır; havalimanında karşılanırsın.' },
  { title: 'Yanındayız', text: 'Eğitimin boyunca ve sonrasında iletişimimiz sürer; her sorunda bir mesaj uzağındayız.' },
]


export default function Home() {
  return (
    <>
      <Seo
        title="Yurt Dışı Eğitim Danışmanlığı | İngiltere Yaz Okulu, Dil Okulu | Tampa"
        description="Tampa Yurtdışı Eğitim: İngiltere yaz okulları, dil okulları, yurt dışında üniversite ve yüksek lisans. 15 yıllık tecrübe, 5.000+ öğrenci; İzmir ve Aydın ofisleri, İngiltere Üniversite Temsilciliği."
        path="/"
      />

      {/* HERO */}
      <section className="hero">
        <svg className="hero__arcs" viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-20 520 C 300 140, 760 60, 1220 260" />
          <path d="M-20 600 C 360 300, 820 220, 1220 420" />
        </svg>
        <div className="container hero__in">
          <div className="hero__copy">
            <p className="hero__kicker"><Icon name="bolt" size={16} /> {site.experienceYears} yıldır yurtdışı eğitimde</p>
            <h1 className="hero__title">Geleceğine Yurtdışında Yön Ver.</h1>
            <p className="hero__lead">
              Dil okulundan yüksek lisansa, 20’den fazla ülkede okul seçimi, başvuru, vize ve konaklama. Tek danışman, tek yol haritası, baştan sona Tampa.
            </p>
            <div className="hero__actions">
              <Btn to="/basvuru" size="lg" icon="arrow">Ücretsiz danışmanlık al</Btn>
              <Btn to="/yurtdisi-egitim" variant="line" size="lg">Programları keşfet</Btn>
            </div>
            <ul className="hero__proof">
              <li><Stars size={15} /><span><strong>{site.googleRating}</strong> Google puanı · {site.googleReviewCount} yorum</span></li>
              <li><strong>{site.studentCount}</strong><span>öğrenci bize güvendi</span></li>
              <li><strong>2 ofis</strong><span>İzmir, Aydın + İngiltere Üniversite Temsilciliği</span></li>
            </ul>
          </div>
          <DepartureBoard />
        </div>
      </section>

      {/* PROGRAM FINDER */}
      <section className="section" aria-labelledby="finder-h">
        <div className="container">
          <SectionHead id="finder-h" title="Ne okumak istiyorsun?" intro="Altı program, 20’den fazla ülke. Hedefini seç, sana uygun ülkeleri görelim." action={{ label: 'Tüm programlar', to: '/yurtdisi-egitim' }} />
          <ProgramFinder />
        </div>
      </section>

      {/* UK FOCUS */}
      <section className="section section--tight" aria-labelledby="uk-h">
        <div className="container ukband">
          <div className="ukband__media">
            <img {...cardImg('/img/dest/ingiltere.jpg', '(max-width: 900px) 92vw, 560px')} alt="Londra’da Westminster ve Big Ben" loading="lazy" width="720" height="520" />
            <span className="ukband__tag"><RouteCode to="LHR" light /> 4 sa 10 dk</span>
          </div>
          <div className="ukband__body">
            <p className="hero__kicker"><Icon name="bolt" size={16} /> En çok tercih edilen ülke</p>
            <h2 id="uk-h" className="h2">İngiltere’de Yurt Dışı Eğitim</h2>
            <p className="muted">İngiltere yaz okullarından Londra’da dil eğitimine, yatılı liselerden 1 yıllık yüksek lisansa; İngiltere Üniversite Temsilciliğimizle başvurudan varışa kadar yanınızdayız.</p>
            <ul className="uklinks">
              <li><Link to="/yurtdisi-yaz-okullari/ingiltere"><strong>İngiltere yaz okulları</strong><span>7–17 yaş, kampüs konaklamalı</span></Link></li>
              <li><Link to="/yurtdisi-dil-okullari/ingiltere"><strong>İngiltere dil okulları</strong><span>4 hafta 650 £’dan başlayan fiyatlarla</span></Link></li>
              <li><Link to="/her-sey-dahil-paketler/londra"><strong>Her Şey Dahil Londra</strong><span>2 hafta 2.950 £’dan</span></Link></li>
              <li><Link to="/lisans-programlari/ingiltere"><strong>İngiltere’de üniversite</strong><span>UCAS ve Foundation</span></Link></li>
              <li><Link to="/yurtdisi-yuksek-lisans/ingiltere"><strong>İngiltere’de yüksek lisans</strong><span>12 aylık master</span></Link></li>
              <li><Link to="/yurtdisi-lise-egitimi/ingiltere"><strong>İngiltere’de lise</strong><span>Yatılı okullar, A-Level</span></Link></li>
            </ul>
            <Link to="/ulkeler/ingiltere" className="textlink">İngiltere rehberinin tamamı <Icon name="arrow" size={15} /></Link>
          </div>
        </div>
      </section>

      {/* GİDENLER ANLATIYOR */}
      <section className="section section--deep" aria-labelledby="rev-h">
        <div className="container">
          <div className="revhead">
            <div>
              <p className="hero__kicker"><Icon name="bolt" size={16} /> Gidenler anlatıyor</p>
              <h2 id="rev-h">Öğrencilerimiz ve Velilerimizin Gözünden</h2>
            </div>
            <div className="revhead__score">
              <strong>{site.googleRating}</strong>
              <span><Stars size={18} /><small>{site.googleReviewCount} Google yorumu</small></span>
              <Link to="/musteri-yorumlari" className="textlink textlink--light">Tüm yorumlar <Icon name="arrow" size={15} /></Link>
            </div>
          </div>
          <StudentWall dark />
          <ReviewRail dark />
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="section section--mist" aria-labelledby="routes-h">
        <div className="container">
          <SectionHead id="routes-h" title="Popüler rotalar" intro="Öğrencilerimizin en çok tercih ettiği ülkeler. Her kartta ülkenin dili, uçuş süresi ve sunduğumuz programlar." action={{ label: 'Tüm ülkeler', to: '/ulkeler' }} />
        </div>
        <div className="hscroll">
          <div className="hscroll__track container">
            {featured.map((s, i) => (
              <BoardingPass key={s} country={countryBySlug[s]} to={`/ulkeler/${s}`} priority={i < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section section--deep" aria-labelledby="pkg-h">
        <div className="container">
          <div className="pkghead">
            <h2 id="pkg-h">Her Şey Dahil, Tek Fiyat.</h2>
            <p>Eğitim, konaklama, vize, sağlık sigortası, VIP karşılama ve eğlence paketi. 18 yaş üstü için 2–10 haftalık dil eğitimi paketleri.</p>
          </div>
          <div className="tickets">
            {packages.map((p) => (
              <Link key={p.slug} to={`/her-sey-dahil-paketler/${p.slug}`} className="ticket">
                <div className="ticket__img"><img {...cardImg(p.image)} alt="" loading="lazy" width="480" height="300" /></div>
                <div className="ticket__body">
                  <span className="ticket__code">{p.code}</span>
                  <h3>{p.city}</h3>
                  <p>{p.fun.slice(0, 3).join(', ')}</p>
                </div>
                <div className="ticket__price">
                  <small>{p.prices[0].weeks} hafta</small>
                  <strong>{p.currencySymbol}{formatPrice(p.prices[0].price)}</strong>
                  <span>Detaylar <Icon name="arrow" size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section" aria-labelledby="why-h">
        <div className="container why">
          <div className="why__lead">
            <h2 id="why-h">Tecrübe, Memnuniyet, Güven ve Hızlı İletişim.</h2>
            <p>
              Tampa Yurtdışı Eğitim ailesi olarak, her öğrencinin hayallerini gerçekleştirmesi için eşsiz bir rehber olmayı amaçlıyoruz. Sadece yurtdışı eğitim sürecinde değil, geleceğinizi şekillendiren bu önemli yolculukta sizinle omuz omuza yürüyoruz.
            </p>
            <Btn to="/hakkimizda" variant="line" icon="arrow">Hikâyemizi keşfedin</Btn>
          </div>
          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}<span>{s.suffix}</span></dd>
              </div>
            ))}
          </dl>
          <ul className="values">
            {values.map((v) => (
              <li key={v.title}><h3>{v.title}</h3><p>{v.text}</p></li>
            ))}
          </ul>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="section section--mist" aria-labelledby="journey-h">
        <div className="container">
          <SectionHead id="journey-h" title="İlk görüşmeden kalkışa altı adım" intro="Her öğrenci için aynı danışman, yazılı bir yol haritası ve her adımda net bir sonraki iş." />
          <RouteSteps steps={journey} />
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" aria-labelledby="svc-h">
        <div className="container">
          <SectionHead id="svc-h" title="Programın ötesinde: mentörlük ve danışmanlık" intro="Başvurunun en zor kısımlarında yanınızda olan hizmetlerimiz." action={{ label: 'Tüm hizmetler', to: '/hizmetler' }} />
          <ul className="svcindex">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={s.path}>
                  <span className="svcindex__cat">{s.category}</span>
                  <span className="svcindex__name">{s.name}</span>
                  <span className="svcindex__sum">{s.summary}</span>
                  <Icon name="arrowUpRight" size={22} />
                </Link>
              </li>
            ))}
            <li>
              <Link to="/tampa-akademi">
                <span className="svcindex__cat">Akademi</span>
                <span className="svcindex__name">Tampa Akademi</span>
                <span className="svcindex__sum">Lise ve üniversite öğrencilerine özel kariyer ve akademik danışmanlık programları.</span>
                <Icon name="arrowUpRight" size={22} />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section section--tight" aria-labelledby="partners-h">
        <div className="container">
          <h2 id="partners-h" className="partners__h">Birlikte Çalıştığımız Okul ve Üniversitelerden Bazıları</h2>
        </div>
        <LogoMarquee />
      </section>

      {/* SEO + FAQ */}
      <section className="section" aria-labelledby="faq-h">
        <div className="container twocol">
          <div>
            <h2 className="h2">Yurtdışı Eğitim Danışmanlığı Neden Önemli?</h2>
            <ReadMore lines={7}>
              <p>Yurtdışında eğitim almak, pek çok öğrencinin hayalini süsleyen bir deneyimdir. Ancak bu süreçte doğru kararlar vermek, karmaşık prosedürleri anlamak ve hedeflenen eğitime ulaşmak için profesyonel destek büyük fark yaratır. Ülke, şehir, okul ve program seçimi; hem zaman hem de maliyet açısından geri dönüşü zor kararlardır.</p>
              <p>Tampa Yurtdışı Eğitim, İzmir merkez ofisi başta olmak üzere Aydın şubesiyle 15 yılı aşkın süredir öğrencilerin yurtdışı eğitim yolculuğunda rehberlik ediyor. Dil okulları, yaz okulları, lise, lisans, yüksek lisans ve work and study programlarında; öğrenci profilinin değerlendirilmesinden okul seçimine, başvuru yönetiminden vize ve konaklamaya kadar tüm adımları birlikte planlıyoruz.</p>
              <h3>Neler yapıyoruz?</h3>
              <ul>
                <li>Öğrenci profilini değerlendirip size en uygun programı belirliyoruz.</li>
                <li>Hedeflerinize uygun ülke, şehir ve okul seçeneklerini karşılaştırmalı sunuyoruz.</li>
                <li>Tüm başvuru işlemlerini sizin adınıza gerçekleştiriyoruz.</li>
                <li>Gerekli belgeleri eksiksiz hazırlayıp ilgili kurumlara iletiyoruz.</li>
                <li>Vize başvurunuzu yakından takip ediyoruz.</li>
                <li>Güvenli ve rahat bir konaklama yeri bulmanıza yardımcı oluyoruz.</li>
                <li>Havalimanında karşılanmanızı ve güvenle yerleşmenizi sağlıyoruz.</li>
              </ul>
              <p>Bizler için eğitim, yalnızca bir hedefe ulaşmak değil, aynı zamanda bireyin kendini yeniden keşfetmesidir. Bu yolculukta rehberiniz olarak yanınızdayız; çünkü sizin başarınız, bizim de başarımızdır.</p>
            </ReadMore>
          </div>
          <div>
            <h2 id="faq-h" className="h2">Sıkça Sorulan Sorular</h2>
            <FaqList items={generalFaqs} />
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="section section--mist" aria-labelledby="blog-h">
        <div className="container">
          <SectionHead id="blog-h" title="Blogdan son yazılar" action={{ label: 'Tüm yazılar', to: '/blog' }} />
          <div className="posts">
            {posts.slice(0, 3).map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="post">
                <div className="post__img"><img {...cardImg(p.image)} alt="" loading="lazy" width="480" height="300" /></div>
                <p className="post__meta">{p.category} · {formatDate(p.date)}</p>
                <h3>{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" aria-labelledby="contact-h">
        <div className="container contactsplit">
          <div>
            <h2 id="contact-h" className="h2">Bize Her Zaman Yazabilirsiniz.</h2>
            <p className="muted">Formu doldurun, sizi en kısa sürede arayalım ve ücretsiz danışmanlık verelim. Dilerseniz ofislerimizde yüz yüze görüşelim.</p>
            <ul className="offices-mini">
              {offices.slice(0, 3).map((o) => (
                <li key={o.slug}>
                  <strong>{o.title}</strong>
                  <span>{o.address}</span>
                  {o.phone && <a href={o.phoneHref}>{o.phone}</a>}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm source="anasayfa" title="Online başvuru formu" />
        </div>
      </section>
    </>
  )
}

function ProgramFinder() {
  const [i, setI] = useState(0)
  const p = programs[i]
  const list = countriesFor(p.key)
  return (
    <div className="finder">
      <div className="finder__tabs" role="tablist" aria-label="Programlar">
        {programs.map((pr, idx) => (
          <button
            key={pr.key}
            role="tab"
            id={`tab-${pr.key}`}
            aria-selected={idx === i}
            aria-controls="finder-panel"
            tabIndex={idx === i ? 0 : -1}
            className={`finder__tab ${idx === i ? 'is-active' : ''}`}
            onClick={() => setI(idx)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); setI((idx + 1) % programs.length) }
              if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); setI((idx - 1 + programs.length) % programs.length) }
            }}
          >
            <span className="finder__trait">{pr.trait}</span>
            <span className="finder__name">{pr.name}</span>
          </button>
        ))}
      </div>
      <div className="finder__panel" role="tabpanel" id="finder-panel" aria-labelledby={`tab-${p.key}`} key={p.key}>
        <div className="finder__img"><img {...cardImg(p.image, '(max-width: 760px) 92vw, 460px')} alt="" loading="lazy" width="720" height="520" /></div>
        <div className="finder__body">
          <h3>{p.name}</h3>
          <p>{p.lead}</p>
          <dl className="facts">
            {p.facts.map((f) => (<div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>))}
          </dl>
          <p className="finder__ch">{list.length} ülkede</p>
          <ul className="chips">
            {list.map((c) => (
              <li key={c.slug}><Link to={`/${p.slug}/${c.slug}`}>{c.name}</Link></li>
            ))}
          </ul>
          <Btn to={`/${p.slug}`} variant="teal" icon="arrow">{p.name} sayfasına git</Btn>
        </div>
      </div>
    </div>
  )
}
