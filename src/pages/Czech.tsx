import { Link } from 'react-router-dom'
import { Seo, Btn, SectionHead, FaqList, CheckList, RouteCode } from '../components/ui'
import { Icon } from '../components/Icon'
import { RouteSteps } from '../components/signature'
import { PageHero, CtaBand } from '../components/layouts'
import { LeadForm } from '../components/LeadForm'
import {
  czechFacts, czechAdvantages, czechLanguageOptions, czechDurations, czechUnis, czechCosts,
  czechAdmission, czechNostrification, czechCalendar, czechVisaDocs, czechSteps, czechFaqs,
} from '../data/czech'

const BASE = '/cekya-universiteleri'

/* ---------- /cekya-universiteleri ---------- */
export function CzechUnisHub() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Çekya üniversiteleri',
    itemListElement: czechUnis.map((u, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'CollegeOrUniversity', name: u.name, alternateName: u.local, foundingDate: u.founded, address: { '@type': 'PostalAddress', addressLocality: u.city, addressCountry: 'CZ' } } })),
  }
  return (
    <>
      <Seo
        title="Çekya Üniversiteleri: Ücretsiz Eğitim ve Başvuru"
        description="Çekya’da üniversite: devlet üniversitelerinde Çekçe ücretsiz eğitim, İngilizce programlar, YKS’siz kabul, nostrifikasyon, ücretler, yaşam maliyeti ve vize."
        path={BASE}
        image="/img/cekya/prag.jpg"
        jsonLd={ld}
      />
      <PageHero
        image="/img/cekya/prag.jpg"
        crumbs={[{ label: 'Lisans programları', to: '/lisans-programlari' }, { label: 'Çekya', to: '/lisans-programlari/cekya' }, { label: 'Çekya üniversiteleri' }]}
        kicker={<RouteCode to="PRG" light />}
        title="Çekya Üniversiteleri"
        lead="Avrupa’nın kalbinde, köklü devlet üniversitelerinde Çekçe ücretsiz ya da uygun ücretli İngilizce eğitim. YKS şartı olmadan, AB’de geçerli bir diploma için Çekya’yı birlikte planlayalım."
        aside={
          <div className="factcard">
            <p className="factcard__h">Kısaca</p>
            <dl>
              <div><dt>YKS şartı</dt><dd>Yok</dd></div>
              <div><dt>Çekçe eğitim</dt><dd>Devlette ücretsiz</dd></div>
              <div><dt>İngilizce eğitim</dt><dd>Yıllık ~2.000 €’dan</dd></div>
              <div><dt>Yaşam gideri</dt><dd>Aylık ~550–900 €</dd></div>
              <div><dt>Diploma</dt><dd>AB’de geçerli</dd></div>
            </dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Ücretsiz değerlendirme al</Btn>
        <Btn href="#universiteler" variant="light" size="lg">Üniversiteleri incele</Btn>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead title="Neden Çekya’da Üniversite?" intro="Türk öğrenciler için Çekya’yı öne çıkaran başlıca avantajlar." />
          <div className="advgrid">
            {czechAdvantages.map((a, i) => (
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

      <section className="section section--mist">
        <div className="container twocol">
          <div>
            <h2 className="h2">Çekya Hakkında Genel Bilgiler</h2>
            <p>Resmî adı Çek Cumhuriyeti olan Çekya, Orta Avrupa’da yer alan bir AB ve Schengen ülkesidir. Tarihî dokusu, güvenli şehirleri ve uygun yaşam maliyetiyle her yıl on binlerce uluslararası öğrenciyi ağırlar.</p>
            <dl className="featlist featlist--2">
              {czechFacts.map((f) => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}
            </dl>
          </div>
          <div>
            <h2 className="h2">Eğitim Sistemi ve Süreler</h2>
            <p>Çekya, Bologna sürecine dahildir: lisans, yüksek lisans ve doktora olmak üzere üç kademeli bir sistem uygulanır. Tıp gibi bazı alanlar bütünleşik (lisans + yüksek lisans) programlar olarak verilir.</p>
            <dl className="featlist featlist--2">
              {czechDurations.map((d) => <div key={d.label}><dt>{d.label}</dt><dd>{d.value}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Eğitim Dili ve Hazırlık Seçenekleri" intro="Çekya’da hangi dilde okuyacağınız, hem ücreti hem de başvuru yolunu belirler." />
          <div className="advgrid">
            {czechLanguageOptions.map((o) => (
              <article key={o.title} className="advcard">
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist" id="universiteler">
        <div className="container">
          <SectionHead title="Çekya’daki Üniversiteler" intro="Türk öğrencilerin en çok tercih ettiği Çek üniversiteleri. Bölüm ve dil seçeneklerine göre size uygun okulları birlikte belirliyoruz." />
          <div className="advgrid">
            {czechUnis.map((u) => (
              <article key={u.name} className="advcard">
                <span className="advcard__n"><Icon name="pin" size={13} /> {u.city} · {u.founded}</span>
                <h3>{u.name}</h3>
                <p>{u.text}</p>
                <p className="muted small">{u.local} · {u.type} üniversitesi</p>
                <ul className="chips">{u.focus.map((f) => <li key={f}><span>{f}</span></li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Ücretler ve Yaşam Maliyeti" intro="Rakamlar yaklaşıktır; üniversite, bölüm ve şehre göre değişir ve her yıl güncellenir." />
          <div className="tablewrap">
            <table className="ctable">
              <thead><tr><th scope="col">Kalem</th><th scope="col">Yaklaşık tutar</th><th scope="col">Not</th></tr></thead>
              <tbody>
                {czechCosts.map((c) => (
                  <tr key={c.label}><th scope="row">{c.label}</th><td><strong>{c.value}</strong></td><td>{c.note}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container twocol">
          <div>
            <h2 className="h2">Başvuru ve Kabul Şartları</h2>
            <CheckList items={czechAdmission} />
          </div>
          <div>
            <h2 className="h2">Nostrifikasyon (Diploma Tanınması)</h2>
            <p>Çek üniversitelerine kayıt için yurt dışında alınan diplomanın Çekya’da tanınması gerekir.</p>
            <CheckList items={czechNostrification} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twocol">
          <div>
            <h2 className="h2">Başvuru Takvimi</h2>
            <dl className="featlist">
              {czechCalendar.map((c) => <div key={c.label}><dt>{c.label}</dt><dd>{c.value}</dd></div>)}
            </dl>
          </div>
          <div>
            <h2 className="h2">Öğrenci Vizesi için Gerekli Belgeler</h2>
            <p>Üç aydan uzun eğitim için Çekya Büyükelçiliği’ne uzun süreli öğrenci vizesi başvurusu yapılır.</p>
            <CheckList items={czechVisaDocs} />
            <p className="note"><Icon name="bolt" size={16} /> Belge listesi başvuru dönemine göre değişebilir; güncel listeyi dosyanızı hazırlarken sizinle paylaşıyoruz.</p>
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHead title="Başvurudan Çekya’ya Altı Adım" intro="Okul seçiminden nostrifikasyona, vizeden varışa kadar tüm süreci birlikte yürütüyoruz." />
          <RouteSteps steps={czechSteps} dark />
        </div>
      </section>

      <section className="section" id="form">
        <div className="container twocol">
          <div>
            <h2 className="h2">Sık Sorulan Sorular</h2>
            <FaqList items={czechFaqs} />
            <p className="note"><Icon name="bolt" size={16} /> Bölgedeki diğer seçenekler için <Link to="/lisans-programlari/polonya">Polonya’da üniversite</Link>, <Link to="/lisans-programlari/macaristan">Macaristan’da üniversite</Link> ve <Link to="/almanyadaki-ozel-universiteler">Almanya’daki özel üniversiteler</Link> sayfalarımıza göz atın.</p>
          </div>
          <LeadForm source="cekya-universiteleri" defaultProgram="Üniversite" defaultCountry="Çekya" title="Çekya’da üniversite için bilgi alın" note="Not ortalamanıza, dil seviyenize ve bütçenize uygun üniversiteleri ücretsiz olarak değerlendirelim." />
        </div>
      </section>
      <CtaBand title="Çekya’da üniversite yolculuğunuzu birlikte planlayalım." />
    </>
  )
}
