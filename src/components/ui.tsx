import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Icon } from './Icon'
import { site } from '../data/site'
import type { Faq } from '../data/programs'
import { titleNode } from '../lib/text'

/* ---------- Button ---------- */
type BtnProps = {
  to?: string
  href?: string
  children: ReactNode
  variant?: 'coral' | 'teal' | 'ghost' | 'light' | 'line'
  size?: 'md' | 'lg' | 'sm'
  icon?: string
  iconLeft?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Btn({ to, href, children, variant = 'coral', size = 'md', icon, iconLeft, className = '', onClick, type = 'button', disabled }: BtnProps) {
  const cls = `btn btn--${variant} btn--${size} ${className}`
  const inner = (
    <>
      {iconLeft && <Icon name={iconLeft} size={18} />}
      <span>{children}</span>
      {icon && <Icon name={icon} size={18} />}
    </>
  )
  if (to) return <Link to={to} className={cls} onClick={onClick}>{inner}</Link>
  if (href)
    return (
      <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} onClick={onClick}>
        {inner}
      </a>
    )
  return <button type={type} className={cls} onClick={onClick} disabled={disabled}>{inner}</button>
}

/* ---------- SEO (React 19 bu etiketleri <head>'e taşır; prerender ile statik HTML'e yazılır) ---------- */
type SeoProps = {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  published?: string
  jsonLd?: object | object[]
  noindex?: boolean
}

/** Arama sonuçlarında kesilmemesi için marka ekini uzunluğa göre ayarlar (~65 karakter). */
function brandTitle(t: string) {
  if (t.includes('Tampa')) return t
  for (const suffix of [' | Tampa Yurtdışı Eğitim', ' | Tampa Eğitim', ' | Tampa']) if (t.length + suffix.length <= 65) return t + suffix
  return t
}

export function Seo({ title, description, path = '', image = '/img/brand/logo-full.jpg', type = 'website', published, jsonLd, noindex }: SeoProps) {
  const full = brandTitle(title)
  const url = `${site.url}${path === '/' ? '/' : path}`
  const img = image.startsWith('http') ? image : `${site.url}${image}`
  const desc = description.length > 165 ? `${description.slice(0, 160).replace(/\s+\S*$/, '')}…` : description
  return (
    <>
      <title>{full}</title>
      <meta name="description" content={desc} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'} />
      {!noindex && <link rel="canonical" href={url} />}
      {!noindex && <link rel="alternate" hrefLang="tr-TR" href={url} />}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:site_name" content="Tampa Yurtdışı Eğitim" />
      <meta property="og:locale" content="tr_TR" />
      {published && <meta property="article:published_time" content={published} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </>
  )
}

/* ---------- Breadcrumbs ---------- */
export type Crumb = { label: string; to?: string }
export function Breadcrumbs({ items, tone = 'dark' }: { items: Crumb[]; tone?: 'dark' | 'light' }) {
  const all = [{ label: 'Ana sayfa', to: '/' }, ...items]
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: c.to ? `${site.url}${c.to}` : undefined })),
  }
  return (
    <nav aria-label="Konum" className={`crumbs crumbs--${tone}`}>
      <ol>
        {all.map((c, i) => (
          <li key={i}>
            {c.to && i < all.length - 1 ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
          </li>
        ))}
      </ol>
      <script type="application/ld+json">{JSON.stringify(ld)}</script>
    </nav>
  )
}

/* ---------- Section heading ---------- */
export function SectionHead({ title, intro, action, align = 'split', id }: { title: ReactNode; intro?: ReactNode; action?: { label: string; to: string }; align?: 'split' | 'stack'; id?: string }) {
  return (
    <div className={`shead shead--${align}`}>
      <h2 id={id} className="shead__title">{titleNode(title)}</h2>
      {(intro || action) && (
        <div className="shead__side">
          {intro && <p className="shead__intro">{intro}</p>}
          {action && (
            <Link to={action.to} className="textlink">
              {action.label}
              <Icon name="arrow" size={16} />
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

/* ---------- FAQ ---------- */
export function FaqList({ items, schema = true }: { items: Faq[]; schema?: boolean }) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details key={i} className="faq__item" name="faq">
          <summary>
            <span>{f.q}</span>
            <span className="faq__icon" aria-hidden="true"><Icon name="plus" size={18} /></span>
          </summary>
          <div className="faq__a"><p>{f.a}</p></div>
        </details>
      ))}
      {schema && <script type="application/ld+json">{JSON.stringify(ld)}</script>}
    </div>
  )
}

/* ---------- Stars ---------- */
export function Stars({ n = 5, size = 16 }: { n?: number; size?: number }) {
  return (
    <span className="stars" aria-label={`${n} üzerinden ${n} yıldız`}>
      {Array.from({ length: n }).map((_, i) => <Icon key={i} name="star" size={size} />)}
    </span>
  )
}

/* ---------- Check list ---------- */
export function CheckList({ items, cols = 1 }: { items: string[]; cols?: 1 | 2 }) {
  return (
    <ul className={`checks ${cols === 2 ? 'checks--2' : ''}`}>
      {items.map((t) => (
        <li key={t}><Icon name="check" size={18} /> <span>{t}</span></li>
      ))}
    </ul>
  )
}

/* ---------- Route code (IZM → LHR) ---------- */
export function RouteCode({ to, from = 'IZM', light }: { to: string; from?: string; light?: boolean }) {
  return (
    <span className={`route ${light ? 'route--light' : ''}`} aria-label={`İzmir'den ${to}`}>
      <span>{from}</span>
      <svg viewBox="0 0 64 12" width="44" height="10" aria-hidden="true"><path d="M1 10 Q32 -4 63 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 3" /></svg>
      <span>{to}</span>
    </span>
  )
}
