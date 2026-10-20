import { Link, useParams } from 'react-router-dom'
import { abs } from '../seo/schema'
import { Seo, Btn, SectionHead, FaqList, CheckList, RouteCode } from '../components/ui'
import { Icon } from '../components/Icon'
import { RouteSteps } from '../components/signature'
import { PageHero, CtaBand } from '../components/layouts'
import { LeadForm } from '../components/LeadForm'
import NotFound from './NotFound'
import { germanUnis, germanUniBySlug, germanAdvantages, germanSteps, germanFaqs, type GermanUni } from '../data/germanUnis'
import { cardImg } from '../lib/img'

const BASE = '/almanyadaki-ozel-universiteler'

const feeLabel = (u: GermanUni) =>
  u.fromFee.bachelor ? `Lisans yıllık ${u.fromFee.bachelor}’dan` : u.fromFee.master ? `Yüksek lisans yıllık ${u.fromFee.master}’dan` : 'Ücret için bize ulaşın'

/* ---------- /almanyadaki-ozel-universiteler ---------- */
export function GermanUnisHub() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Almanya’daki özel üniversiteler',
    itemListElement: germanUnis.map((u, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(`${BASE}/${u.slug}`), name: u.name })),
  }
  return (
    <>
      <Seo
        title="Almanya’daki Özel Üniversiteler: YKS’siz, İngilizce Eğitim"
        description="Almanya’daki akredite özel üniversiteler: YKS şartı olmadan, İngilizce lisans ve yüksek lisans, IELTS 5.5–6.0, 18 ay çalışma izni ve YÖK denkliği. 8 üniversite, bölümler ve yıllık ücretler."
        path={BASE}
        image="/img/almanya/berlin-skyline.jpg"
        jsonLd={ld}
      />
      <PageHero
        image="/img/almanya/berlin-skyline.jpg"
        crumbs={[{ label: 'Lisans programları', to: '/lisans-programlari' }, { label: 'Almanya', to: '/lisans-programlari/almanya' }, { label: 'Özel üniversiteler' }]}
        kicker={<RouteCode to="BER" light />}
        title="Almanya’daki Özel Üniversiteler"
        lead="Almanya’daki akredite özel üniversiteler (Universities of Applied Sciences); merkezi sınav baskısı olmadan, doğrudan iş dünyasına yönelik, uygulama odaklı ve modern bir yükseköğrenim modeli sunar."
        aside={
          <div className="factcard">
            <p className="factcard__h">Kısaca</p>
            <dl>
              <div><dt>YKS şartı</dt><dd>Çoğunda yok</dd></div>
              <div><dt>Eğitim dili</dt><dd>İngilizce</dd></div>
              <div><dt>İngilizce</dt><dd>IELTS 5.5–6.0 veya iç sınav</dd></div>
              <div><dt>Lisans ücreti</dt><dd>Yıllık ~9.000 €’dan</dd></div>
              <div><dt>Mezuniyet sonrası</dt><dd>18 ay çalışma izni</dd></div>
            </dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Ücretsiz değerlendirme al</Btn>
        <Btn href="#universiteler" variant="light" size="lg">Üniversiteleri incele</Btn>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead title="Öne Çıkan Temel Avantajlar" intro="Almanya’da özel üniversite okumanın Türk öğrenciler için en önemli artıları." />
          <div className="advgrid">
            {germanAdvantages.map((a, i) => (
              <article key={a.title} className="advcard">
                <span className="advcard__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{a.title}</h3>
                {a.text && <p>{a.text}</p>}
                {a.list && <CheckList items={a.list} />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist" id="universiteler">
        <div className="container">
          <SectionHead title="Üniversiteler" intro="Tampa olarak başvuru süreçlerini yürüttüğümüz Almanya’daki özel üniversiteler. Bölüm listeleri, yıllık ücretler ve başvuru tarihleri için üniversiteye tıklayın." />
          <div className="rescards">
            {germanUnis.map((u) => (
              <Link key={u.slug} to={`${BASE}/${u.slug}`} className="rescard">
                <div className="rescard__img">
                  <img {...cardImg(u.image)} alt={`${u.name} – ${u.city}`} loading="lazy" width="480" height="320" />
                  <span className="rescard__city">{u.city}</span>
                </div>
                <div className="rescard__body">
                  <h3>{u.name}</h3>
                  <p className="rescard__addr"><Icon name="pin" size={14} /> {u.campuses.join(' · ')}</p>
                  <p>{u.lead}</p>
                  <p className="rescard__price"><strong className="rescard__fee">{feeLabel(u)}</strong></p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Üniversiteleri Karşılaştırın" intro="Yıllık ücretler yaklaşıktır ve üniversiteler tarafından her yıl güncellenir." />
          <div className="tablewrap">
            <table className="ctable">
              <thead>
                <tr><th scope="col">Üniversite</th><th scope="col">Kampüsler</th><th scope="col">Lisans (yıllık)</th><th scope="col">Yüksek lisans (yıllık)</th><th scope="col">Öne çıkan alanlar</th></tr>
              </thead>
              <tbody>
                {germanUnis.map((u) => (
                  <tr key={u.slug}>
                    <th scope="row"><Link to={`${BASE}/${u.slug}`}>{u.name}</Link></th>
                    <td>{u.campuses.join(', ')}</td>
                    <td>{u.fromFee.bachelor ? `${u.fromFee.bachelor}’dan` : 'Bize sorun'}</td>
                    <td>{u.fromFee.master ? `${u.fromFee.master}’dan` : 'Bize sorun'}</td>
                    <td>{u.focus.slice(0, 3).join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHead title="Başvurudan Almanya’ya Altı Adım" intro="Okul seçiminden bloke hesaba, vizeden varışa kadar tüm süreci birlikte yürütüyoruz." />
          <RouteSteps steps={germanSteps} dark />
        </div>
      </section>

      <section className="section" id="form">
        <div className="container twocol">
          <div>
            <h2 className="h2">Sık Sorulan Sorular</h2>
            <FaqList items={germanFaqs} />
            <p className="note"><Icon name="bolt" size={16} /> Devlet üniversiteleri ve genel bilgiler için <Link to="/lisans-programlari/almanya">Almanya’da üniversite</Link> ve <Link to="/yurtdisi-yuksek-lisans/almanya">Almanya’da yüksek lisans</Link> sayfalarımıza göz atın.</p>
          </div>
          <LeadForm source="almanya-ozel-universiteler" defaultProgram="Üniversite" defaultCountry="Almanya" title="Almanya’da özel üniversite için bilgi alın" note="Not ortalamanıza ve hedefinize uygun üniversiteleri ücretsiz olarak değerlendirelim." />
        </div>
      </section>
      <CtaBand title="Almanya’da üniversite yolculuğunuzu birlikte planlayalım." />
    </>
  )
}

/* ---------- /almanyadaki-ozel-universiteler/:slug ---------- */
export function GermanUniPage() {
  const { slug = '' } = useParams()
  const u = germanUniBySlug[slug]
  if (!u) return <NotFound />
  const path = `${BASE}/${u.slug}`
  const others = germanUnis.filter((x) => x.slug !== u.slug)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name: u.name,
    alternateName: u.short,
    description: u.lead,
    ...(u.founded ? { foundingDate: u.founded } : {}),
    address: { '@type': 'PostalAddress', addressLocality: u.campuses[0], addressCountry: 'DE' },
    url: abs(path),
  }
  return (
    <>
      <Seo
        title={[`${u.name}: Bölümler, Ücretler ve Başvuru`, `${u.name}: Bölümler ve Ücretler`, `${u.short} Almanya: Bölümler, Ücretler ve Başvuru`].find((t) => t.length <= 60) ?? u.name}
        description={`${u.lead} Bölümler, yıllık ücretler, başvuru tarihleri ve Tampa ile başvuru süreci.`}
        path={path}
        image={u.image}
        jsonLd={ld}
      />
      <PageHero
        image={u.image}
        crumbs={[{ label: 'Almanya’daki özel üniversiteler', to: BASE }, { label: u.short }]}
        kicker={<><Icon name="pin" size={15} /> {u.city}</>}
        title={u.name}
        lead={u.lead}
        aside={
          <div className="factcard">
            <p className="factcard__h">{u.short} kısaca</p>
            <dl>
              <div><dt>Kampüsler</dt><dd>{u.campuses.join(', ')}</dd></div>
              {u.founded && <div><dt>Kuruluş</dt><dd>{u.founded}</dd></div>}
              <div><dt>Eğitim dili</dt><dd>{u.languages}</dd></div>
              {u.fromFee.bachelor && <div><dt>Lisans</dt><dd>Yıllık {u.fromFee.bachelor}’dan</dd></div>}
              {u.fromFee.master && <div><dt>Yüksek lisans</dt><dd>{u.fromFee.master}’dan</dd></div>}
              <div><dt>YKS şartı</dt><dd>Yok</dd></div>
            </dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Başvuru için bilgi al</Btn>
      </PageHero>

      <div className="container detail">
        <article className="detail__main">
          <section className="dsec">
            <h2>{u.short} Hakkında</h2>
            {u.about.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
            <ul className="chips chips--lg">{u.highlights.map((h) => <li key={h}><span>{h}</span></li>)}</ul>
          </section>

          <section className="dsec">
            <h2>Bölümler ve Yıllık Ücretler</h2>
            {u.programs.map((g) => (
              <div key={g.level} className="unigroup">
                <h3>{g.level}{g.fee && <span className="tag">{g.fee}</span>}</h3>
                {g.note && <p className="muted small">{g.note}</p>}
                <ul className="unilist">{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            ))}
            <p className="note"><Icon name="bolt" size={16} /> Ücretler yaklaşıktır ve üniversite tarafından her yıl güncellenir. Güncel ücret, burs ve erken kayıt indirimleri için bizimle iletişime geçin.</p>
          </section>

          <section className="dsec">
            <h2>Başvuru Dönemleri</h2>
            <p>{u.intakes}</p>
          </section>

          <section className="dsec">
            <h2>Kabul Koşulları</h2>
            <CheckList
              items={
                u.admission ?? [
                  'Lise diploması ve transkript (lisans) veya lisans diploması ve transkript (yüksek lisans)',
                  'YKS sınavına girme veya bir bölüme yerleşme şartı aranmaz',
                  'İngilizce yeterliliği: genellikle IELTS 5.5–6.0 ya da üniversitenin kendi online sınavı / mülakatı',
                  'Motivasyon mektubu ve özgeçmiş (CV)',
                  'Dil seviyesi yetersizse hazırlık (Foundation / Pathway) programı seçeneği',
                ]
              }
            />
          </section>

          {u.scholarships && (
            <section className="dsec">
              <h2>Burslar</h2>
              <CheckList items={u.scholarships} />
            </section>
          )}

          <section className="dsec">
            <h2>Neden Almanya’da Özel Üniversite?</h2>
            <dl className="featlist featlist--2">
              {germanAdvantages.slice(0, 6).map((a) => (
                <div key={a.title}><dt>{a.title}</dt><dd>{a.text ?? a.list?.[0]}</dd></div>
              ))}
            </dl>
            <Link to={BASE} className="textlink">Tüm avantajlar ve diğer üniversiteler <Icon name="arrow" size={15} /></Link>
          </section>
        </article>
        <aside className="detail__side" id="form">
          <div className="sticky">
            <LeadForm variant="compact" source={`almanya-ozel:${u.slug}`} defaultProgram="Üniversite" defaultCountry="Almanya" title={`${u.short} başvurusu için bilgi alın`} note="Kabul şartlarını ve güncel ücretleri sizin için netleştirelim." />
          </div>
        </aside>
      </div>

      <section className="section section--mist">
        <div className="container">
          <SectionHead title="Diğer Özel Üniversiteler" action={{ label: 'Tümü', to: BASE }} />
          <div className="minipkgs">
            {others.map((o) => (
              <Link key={o.slug} to={`${BASE}/${o.slug}`} className="minipkg">
                <span className="code">DE</span>
                <strong>{o.short}</strong>
                <span>{o.city} · {feeLabel(o)}</span>
                <Icon name="arrow" size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
