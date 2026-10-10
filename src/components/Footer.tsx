import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import { site, offices } from '../data/site'
import { programs } from '../data/programs'
import { services } from '../data/services'
import { documents } from '../data/documents'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/img/brand/logo-wordmark-white.png" alt="Tampa Yurtdışı Eğitim" width="121" height="64" loading="lazy" />
            <p className="footer__slogan">{site.slogan}</p>
            <p>{site.footerAbout}</p>
            <div className="footer__social">
              {site.socials.map((s) => (
                <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}><Icon name={s.key} size={18} /></a>
              ))}
            </div>
          </div>
          <div className="footer__contact">
            <a href={site.phoneHref} className="footer__big">{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <p><Icon name="clock" size={16} /> {site.hours}</p>
            <a href={site.calendly} target="_blank" rel="noopener noreferrer" className="textlink textlink--light">Online görüşme planlayın <Icon name="arrow" size={15} /></a>
          </div>
        </div>

        <div className="footer__grid">
          <div>
            <p className="footer__h">Programlar</p>
            <ul>{programs.map((p) => <li key={p.key}><Link to={`/${p.slug}`}>{p.name}</Link></li>)}<li><Link to="/online-egitim">Online eğitim</Link></li><li><Link to="/ogrenci-konaklama">Öğrenci konaklaması</Link></li><li><Link to="/her-sey-dahil-paketler">Her Şey Dahil Paketler</Link></li></ul>
          </div>
          <div>
            <p className="footer__h">Popüler sayfalar</p>
            <ul>
              <li><Link to="/yurtdisi-yaz-okullari/ingiltere">İngiltere yaz okulu</Link></li>
              <li><Link to="/yurtdisi-dil-okullari/ingiltere">İngiltere dil okulları</Link></li>
              <li><Link to="/ulkeler/ingiltere">İngiltere’de eğitim</Link></li>
              <li><Link to="/yurtdisi-yuksek-lisans/ingiltere">İngiltere’de yüksek lisans</Link></li>
              <li><Link to="/lisans-programlari/ingiltere">İngiltere’de üniversite</Link></li>
              <li><Link to="/yurtdisi-dil-okullari/malta">Malta dil okulları</Link></li>
              <li><Link to="/yurtdisi-yuksek-lisans/almanya">Almanya’da yüksek lisans</Link></li>
              <li><Link to="/work-and-study/irlanda">Work and Study İrlanda</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer__h">Hizmetler</p>
            <ul>{services.map((s) => <li key={s.slug}><Link to={s.path}>{s.name}</Link></li>)}<li><Link to="/tampa-akademi">Tampa Akademi</Link></li></ul>
          </div>
          <div>
            <p className="footer__h">Faydalı menü</p>
            <ul>
              {documents.map((d) => <li key={d.slug}><Link to={`/kaynaklar/${d.slug}`}>{d.title}</Link></li>)}
              <li><Link to="/bilgi-bankasi/universite-basvuru-rehberi">Üniversite başvuru rehberi</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer__h">Kurumsal</p>
            <ul>
              <li><Link to="/hakkimizda">Hakkımızda</Link></li>
              <li><Link to="/ekibimiz">Ekibimiz</Link></li>
              <li><Link to="/musteri-yorumlari">Gidenler anlatıyor</Link></li>
              <li><Link to="/kariyer">Kariyer</Link></li>
              <li><Link to="/tampa-akademi">Tampa Akademi</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/iletisim">İletişim</Link></li>
            </ul>
          </div>
          <div className="footer__offices">
            <p className="footer__h">Ofislerimiz</p>
            <ul>
              {offices.slice(0, 3).map((o) => (
                <li key={o.slug}>
                  <strong>{o.city}</strong>
                  <span>{o.address}</span>
                  {o.phone && <a href={o.phoneHref}>{o.phone}</a>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {site.legalName}. Tüm hakları saklıdır.</p>
          <ul>
            <li><Link to="/kvkk">KVKK aydınlatma metni</Link></li>
            <li><Link to="/cerez-politikasi">Çerez politikası</Link></li>
            <li><Link to="/site-haritasi">Site haritası</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export function MobileBar() {
  return (
    <div className="mbar" role="navigation" aria-label="Hızlı iletişim">
      <a href={site.phoneHref}><Icon name="phone" size={20} /><span>Ara</span></a>
      <a href={site.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="chat" size={20} /><span>WhatsApp</span></a>
      <Link to="/basvuru" className="mbar__cta"><Icon name="bolt" size={18} /><span>Ücretsiz bilgi al</span></Link>
    </div>
  )
}

export function WhatsAppFloat() {
  return (
    <a href={site.whatsapp} className="wa-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile yazın">
      <Icon name="chat" size={26} />
      <span>Bize yazın</span>
    </a>
  )
}
