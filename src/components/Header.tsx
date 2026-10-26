import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Icon } from './Icon'
import { site } from '../data/site'
import { programMenu, programExtras, countryMenu, serviceMenu, packageMenu, resourceMenu, corporateMenu } from '../data/nav'
import { posts } from '../data/blog'
import { ukRepresentationPath } from '../data/uk'

type MenuKey = 'programs' | 'countries' | 'packages' | 'services' | 'resources' | 'corporate'

const topItems: { key: MenuKey; label: string; to: string }[] = [
  { key: 'programs', label: 'Programlar', to: '/yurtdisi-egitim' },
  { key: 'countries', label: 'Ülkeler', to: '/ulkeler' },
  { key: 'packages', label: 'Her Şey Dahil', to: '/her-sey-dahil-paketler' },
  { key: 'services', label: 'Hizmetler', to: '/hizmetler' },
  { key: 'resources', label: 'Kaynaklar', to: '/bilgi-bankasi' },
  { key: 'corporate', label: 'Kurumsal', to: '/hakkimizda' },
]

export function Header() {
  const [open, setOpen] = useState<MenuKey | null>(null)
  const [drawer, setDrawer] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeProgram, setActiveProgram] = useState(0)
  const loc = useLocation()
  const timer = useRef<number | undefined>(undefined)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setOpen(null)
    setDrawer(false)
  }, [loc.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(null)
        setDrawer(false)
      }
    }
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null)
    }
    window.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : ''
  }, [drawer])

  const enter = (k: MenuKey) => {
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setOpen(k), 90)
  }
  const leave = () => {
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setOpen(null), 160)
  }

  const prog = programMenu[activeProgram]

  return (
    <>
      <div className="topbar">
        <div className="container topbar__in">
          <p className="topbar__offices"><Icon name="pin" size={15} /> İzmir ve Aydın ofisleri · <Link to={ukRepresentationPath}>İngiltere Üniversite Temsilciliği</Link></p>
          <div className="topbar__links">
            <a href={site.calendly} target="_blank" rel="noopener noreferrer"><Icon name="calendar" size={15} /> Online görüşme planlayın</a>
            <a href={`mailto:${site.email}`}><Icon name="mail" size={15} /> {site.email}</a>
            <span className="topbar__social">
              {site.socials.slice(0, 4).map((s) => (
                <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}><Icon name={s.key} size={15} /></a>
              ))}
            </span>
          </div>
        </div>
      </div>

      <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'has-open' : ''}`}>
        <div className="container header__in">
          <Link to="/" className="logo" aria-label="Tampa Yurtdışı Eğitim ana sayfa">
            <img src="/img/brand/logo-wordmark.png" alt="Tampa Yurtdışı Eğitim" width="98" height="52" />
          </Link>

          <nav className="mainnav" ref={navRef} aria-label="Ana menü" onMouseLeave={leave}>
            <ul className="mainnav__list">
              {topItems.map((it) => (
                <li key={it.key} onMouseEnter={() => enter(it.key)}>
                  <button
                    type="button"
                    className={`mainnav__btn ${open === it.key ? 'is-open' : ''}`}
                    aria-expanded={open === it.key}
                    aria-controls={`mega-${it.key}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setOpen((o) => (o === it.key ? null : it.key))
                    }}
                  >
                    {it.label}
                    <Icon name="chevronDown" size={14} />
                  </button>
                </li>
              ))}
            </ul>

            {/* Programlar */}
            <div id="mega-programs" className={`mega ${open === 'programs' ? 'is-open' : ''}`} onMouseEnter={() => enter('programs')}>
              <div className="container mega__in mega__in--programs">
                <ul className="mega__tabs" role="list">
                  {programMenu.map((p, i) => (
                    <li key={p.key}>
                      <Link to={p.to} className={`mega__tab ${i === activeProgram ? 'is-active' : ''}`} onMouseEnter={() => setActiveProgram(i)} onFocus={() => setActiveProgram(i)}>
                        <span>{p.label}</span>
                        <small>{p.countries.length} ülke</small>
                      </Link>
                    </li>
                  ))}
                  {programExtras.map((x) => (
                    <li key={x.to}>
                      <Link to={x.to} className="mega__tab mega__tab--extra">
                        <span>{x.label}</span>
                        <small>{x.note}</small>
                      </Link>
                    </li>
                  ))}
                  <li><Link to="/yurtdisi-egitim" className="mega__all">Tüm programlara genel bakış <Icon name="arrow" size={15} /></Link></li>
                </ul>
                <div className="mega__panel">
                  <p className="mega__lead">{prog.lead}</p>
                  <ul className="mega__countries">
                    {prog.countries.map((c) => (
                      <li key={c.to}><Link to={c.to}><span className="code">{c.code}</span>{c.label}</Link></li>
                    ))}
                  </ul>
                  {prog.links.length > 0 && (
                    <div className="mega__kb">
                      <p className="mega__h">Fiyatlar ve öne çıkanlar</p>
                      <ul>
                        {prog.links.map((x) => <li key={x.to}><Link to={x.to}>{x.label}</Link></li>)}
                      </ul>
                    </div>
                  )}
                  {prog.guides.length > 0 && (
                    <div className="mega__kb">
                      <p className="mega__h">Bilgi bankası</p>
                      <ul>
                        {prog.guides.map((g) => <li key={g.to}><Link to={g.to}>{g.label}</Link></li>)}
                      </ul>
                    </div>
                  )}
                </div>
                <Link to="/her-sey-dahil-paketler" className="mega__promo">
                  <img src="/img/misc/london-package-800.jpg" alt="" loading="lazy" width="320" height="220" />
                  <span className="mega__promo-tx">
                    <strong>Her Şey Dahil Paketler</strong>
                    <span>Tek fiyat yurtdışı deneyimi: Londra, Dubai, Malta</span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Ülkeler */}
            <div id="mega-countries" className={`mega ${open === 'countries' ? 'is-open' : ''}`} onMouseEnter={() => enter('countries')}>
              <div className="container mega__in mega__in--cols">
                {countryMenu.filter((r) => r.items.length).map((r) => (
                  <div key={r.region} className={`mega__col ${r.items.length > 8 ? 'mega__col--split' : ''}`}>
                    <p className="mega__h">{r.region}</p>
                    <ul>
                      {r.items.map((c) => (
                        <li key={c.to}><Link to={c.to}><span className="code">{c.code}</span>{c.label}</Link></li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="mega__col mega__col--cta">
                  <p className="mega__h">Hangi ülke size uygun?</p>
                  <p>Bütçenize, hedefinize ve dil seviyenize göre ülkeleri birlikte karşılaştıralım.</p>
                  <Link to="/ulkeler" className="textlink">Tüm ülkeler <Icon name="arrow" size={15} /></Link>
                </div>
              </div>
            </div>

            {/* Paketler */}
            <div id="mega-packages" className={`mega mega--narrow ${open === 'packages' ? 'is-open' : ''}`} onMouseEnter={() => enter('packages')}>
              <div className="container mega__in mega__in--list">
                <ul className="mega__rich">
                  {packageMenu.map((p) => (
                    <li key={p.to}><Link to={p.to}><span>{p.label}</span>{p.note && <small>{p.note}</small>}</Link></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hizmetler */}
            <div id="mega-services" className={`mega mega--narrow ${open === 'services' ? 'is-open' : ''}`} onMouseEnter={() => enter('services')}>
              <div className="container mega__in mega__in--list">
                <ul className="mega__rich mega__rich--2">
                  {serviceMenu.map((s) => (
                    <li key={s.to}><Link to={s.to}><span>{s.label}</span>{s.note && <small>{s.note}</small>}</Link></li>
                  ))}
                  <li><Link to="/hizmetler"><span>Tüm hizmetler</span><small>Genel bakış</small></Link></li>
                </ul>
              </div>
            </div>

            {/* Kaynaklar */}
            <div id="mega-resources" className={`mega ${open === 'resources' ? 'is-open' : ''}`} onMouseEnter={() => enter('resources')}>
              <div className="container mega__in mega__in--cols">
                <div className="mega__col">
                  <p className="mega__h">Bilgi bankası</p>
                  <ul>{resourceMenu.groups.map((g) => <li key={g.to}><Link to={g.to}>{g.label} <span className="mega__count">{g.count}</span></Link></li>)}</ul>
                  <Link to="/bilgi-bankasi" className="textlink">Tüm rehberler <Icon name="arrow" size={15} /></Link>
                </div>
                <div className="mega__col">
                  <p className="mega__h">Sınavlar</p>
                  <ul>{resourceMenu.exams.map((g) => <li key={g.to}><Link to={g.to}>{g.label}</Link></li>)}</ul>
                  <Link to="/sss" className="textlink">Sıkça sorulan sorular <Icon name="arrow" size={15} /></Link>
                </div>
                <div className="mega__col">
                  <p className="mega__h">Örnek belgeler</p>
                  <ul>{resourceMenu.documents.map((d) => <li key={d.to}><Link to={d.to}>{d.label}</Link></li>)}</ul>
                  <Link to="/kaynaklar" className="textlink">Tüm şablonlar <Icon name="arrow" size={15} /></Link>
                </div>
                <div className="mega__col mega__col--wide">
                  <p className="mega__h">Blogdan</p>
                  <ul className="mega__posts">
                    {posts.slice(0, 3).map((p) => (
                      <li key={p.slug}>
                        <Link to={`/blog/${p.slug}`}>
                          <img src={p.image.replace('.jpg', '-800.jpg')} alt="" loading="lazy" width="96" height="64" />
                          <span>{p.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Kurumsal */}
            <div id="mega-corporate" className={`mega mega--narrow ${open === 'corporate' ? 'is-open' : ''}`} onMouseEnter={() => enter('corporate')}>
              <div className="container mega__in mega__in--list">
                <ul className="mega__rich mega__rich--2">
                  {corporateMenu.map((c) => <li key={c.to}><Link to={c.to}><span>{c.label}</span></Link></li>)}
                </ul>
              </div>
            </div>
          </nav>

          <div className="header__actions">
            <a href={site.phoneHref} className="header__phone">
              <Icon name="phone" size={18} />
              <span><small>Bizi arayın</small>{site.phone}</span>
            </a>
            <Link to="/basvuru" className="btn btn--coral btn--md header__cta">Ücretsiz danışmanlık</Link>
            <button type="button" className="burger" aria-label="Menüyü aç" aria-expanded={drawer} onClick={() => setDrawer(true)}>
              <Icon name="menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer open={drawer} onClose={() => setDrawer(false)} />
    </>
  )
}

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`drawer ${open ? 'is-open' : ''}`} aria-hidden={!open} inert={!open}>
      <div className="drawer__backdrop" onClick={onClose} />
      <div className="drawer__panel" role="dialog" aria-modal="true" aria-label="Menü">
        <div className="drawer__head">
          <img src="/img/brand/logo-wordmark.png" alt="Tampa Yurtdışı Eğitim" width="91" height="48" />
          <button type="button" onClick={onClose} aria-label="Menüyü kapat" className="drawer__close"><Icon name="close" size={24} /></button>
        </div>
        <nav className="drawer__nav" aria-label="Mobil menü">
          <details>
            <summary>Programlar <Icon name="chevronDown" size={18} /></summary>
            <ul>
              {programMenu.map((p) => (
                <li key={p.key}>
                  <NavLink to={p.to}>{p.label}</NavLink>
                  {p.links.length > 0 && (
                    <ul className="drawer__sub">{p.links.map((x) => <li key={x.to}><NavLink to={x.to}>{x.label}</NavLink></li>)}</ul>
                  )}
                </li>
              ))}
              {programExtras.map((x) => <li key={x.to}><NavLink to={x.to}>{x.label}</NavLink></li>)}
            </ul>
          </details>
          <details>
            <summary>Ülkeler <Icon name="chevronDown" size={18} /></summary>
            <ul className="drawer__chips">
              {countryMenu.flatMap((r) => r.items).map((c) => <li key={c.to}><NavLink to={c.to}>{c.label}</NavLink></li>)}
            </ul>
          </details>
          <details>
            <summary>Her Şey Dahil Paketler <Icon name="chevronDown" size={18} /></summary>
            <ul>{packageMenu.map((p) => <li key={p.to}><NavLink to={p.to}>{p.label}</NavLink></li>)}</ul>
          </details>
          <details>
            <summary>Hizmetler <Icon name="chevronDown" size={18} /></summary>
            <ul>{serviceMenu.map((s) => <li key={s.to}><NavLink to={s.to}>{s.label}</NavLink></li>)}</ul>
          </details>
          <details>
            <summary>Kaynaklar <Icon name="chevronDown" size={18} /></summary>
            <ul>
              <li><NavLink to="/bilgi-bankasi">Bilgi bankası</NavLink></li>
              <li><NavLink to="/sss">Sıkça sorulan sorular</NavLink></li>
              <li><NavLink to="/kaynaklar">Örnek belgeler</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
          </details>
          <details>
            <summary>Kurumsal <Icon name="chevronDown" size={18} /></summary>
            <ul>{corporateMenu.map((c) => <li key={c.to}><NavLink to={c.to}>{c.label}</NavLink></li>)}</ul>
          </details>
        </nav>
        <div className="drawer__foot">
          <Link to="/basvuru" className="btn btn--coral btn--lg">Ücretsiz danışmanlık al</Link>
          <div className="drawer__quick">
            <a href={site.phoneHref} className="btn btn--line btn--md"><Icon name="phone" size={18} /><span>Ara</span></a>
            <a href={site.whatsapp} className="btn btn--line btn--md" target="_blank" rel="noopener noreferrer"><Icon name="chat" size={18} /><span>WhatsApp</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}
