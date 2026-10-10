import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import { RouteCode, Stars } from './ui'
import type { Country } from '../data/countries'
import { programByKey } from '../data/programs'
import { reviews, universities, studentPhotos } from '../data/social'
import { cardImg } from '../lib/img'

/* ---------- Split-flap departure board ---------- */
const boardRows = [
  { time: '08:40', city: 'LONDRA', program: 'DİL OKULU', code: 'LHR', to: '/yurtdisi-dil-okullari/ingiltere' },
  { time: '09:15', city: 'BERLİN', program: 'YÜKSEK LİSANS', code: 'BER', to: '/yurtdisi-yuksek-lisans/almanya' },
  { time: '10:05', city: 'DUBLİN', program: 'WORK & STUDY', code: 'DUB', to: '/work-and-study/irlanda' },
  { time: '11:30', city: 'VARŞOVA', program: 'ÜNİVERSİTE', code: 'WAW', to: '/lisans-programlari/polonya' },
  { time: '12:20', city: 'MALTA', program: 'YAZ OKULU', code: 'MLA', to: '/yurtdisi-yaz-okullari/malta' },
  { time: '13:45', city: 'TORONTO', program: 'DİL + KOLEJ', code: 'YYZ', to: '/work-and-study/kanada' },
  { time: '14:10', city: 'DUBAİ', program: 'HER ŞEY DAHİL', code: 'DXB', to: '/her-sey-dahil-paketler/dubai' },
  { time: '15:55', city: 'NEW YORK', program: 'LİSE', code: 'JFK', to: '/yurtdisi-lise-egitimi/amerika' },
  { time: '16:30', city: 'MİLANO', program: 'ÜNİVERSİTE', code: 'MXP', to: '/lisans-programlari/italya' },
]

function Flap({ text, width }: { text: string; width: number }) {
  const chars = text.padEnd(width, ' ').slice(0, width).split('')
  return (
    <span className="flap" aria-hidden="true">
      {chars.map((ch, i) => (
        <span key={`${i}-${ch}`} className="flap__c" style={{ animationDelay: `${i * 28}ms` }}>
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </span>
  )
}

export function DepartureBoard() {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = window.setInterval(() => setOffset((o) => (o + 1) % boardRows.length), 3400)
    return () => window.clearInterval(t)
  }, [])
  const rows = Array.from({ length: 5 }, (_, i) => boardRows[(i + offset) % boardRows.length])
  return (
    <div className="board" role="region" aria-label="Öne çıkan programlar">
      <div className="board__head">
        <span className="board__title"><Icon name="plane" size={18} /> Kalkışlar · İzmir</span>
        <span className="board__live"><span className="dot" /> Kayıtlar açık</span>
      </div>
      <div className="board__cols" aria-hidden="true">
        <span className="board__time">Saat</span><span>Varış</span><span>Program</span><span className="board__codecol">Kod</span>
      </div>
      <ul className="board__rows">
        {rows.map((r, i) => (
          <li key={i}>
            <Link to={r.to} className="board__row">
              <span className="sr-only">{r.city} – {r.program}</span>
              <span className="board__time"><Flap text={r.time} width={5} /></span>
              <Flap text={r.city} width={8} />
              <Flap text={r.program} width={13} />
              <span className="board__codecol"><Flap text={r.code} width={3} /></span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="board__foot">Satıra tıklayın, programın detaylarına gidin.</p>
    </div>
  )
}

/* ---------- Boarding pass country card ---------- */
export function BoardingPass({ country, to, title, subtitle, programs = true, priority }: { country: Country; to: string; title?: string; subtitle?: string; programs?: boolean; priority?: boolean }) {
  return (
    <Link to={to} className="pass">
      <div className="pass__img">
        <img {...cardImg(country.image)} alt="" loading={priority ? 'eager' : 'lazy'} decoding="async" width="640" height="420" />
        <span className="pass__flight">{country.flightHours}</span>
      </div>
      <div className="pass__body">
        <div className="pass__row">
          <RouteCode to={country.code} />
          <span className="pass__hub">{country.hub}</span>
        </div>
        <h3 className="pass__title">{title ?? country.name}</h3>
        <p className="pass__text">{subtitle ?? country.tagline}</p>
        {programs && (
          <ul className="pass__tags">
            {country.programs.slice(0, 3).map((k) => <li key={k}>{programByKey[k].short}</li>)}
            {country.programs.length > 3 && <li>+{country.programs.length - 3}</li>}
          </ul>
        )}
      </div>
      <div className="pass__stub">
        <span>Dil</span>
        <strong>{country.language.split(',')[0]}</strong>
        <span className="pass__go">İncele <Icon name="arrow" size={16} /></span>
      </div>
    </Link>
  )
}

/* ---------- Route steps (true sequence) ---------- */
export function RouteSteps({ steps, dark }: { steps: { title: string; text: string }[]; dark?: boolean }) {
  return (
    <ol className={`rsteps ${dark ? 'rsteps--dark' : ''}`}>
      {steps.map((s, i) => (
        <li key={s.title} className="rsteps__item">
          <span className="rsteps__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

/* ---------- Partner logo marquee ---------- */
export function LogoMarquee() {
  const list = [...universities, ...universities]
  return (
    <div className="marquee" aria-label="Çalıştığımız okul ve üniversitelerden bazıları">
      <ul className="marquee__track">
        {list.map((u, i) => (
          <li key={i} aria-hidden={i >= universities.length ? true : undefined}>
            <img src={`/img/logos/${u.file}`} alt={i < universities.length ? u.name : ''} loading="lazy" decoding="async" height="56" />
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ---------- Reviews ---------- */
export function ReviewRail({ dark }: { dark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (dir: number) => ref.current?.scrollBy({ left: dir * (ref.current.clientWidth * 0.8), behavior: 'smooth' })
  return (
    <div className={`reviews ${dark ? 'reviews--dark' : ''}`}>
      <div className="reviews__rail" ref={ref} tabIndex={0} aria-label="Öğrenci ve veli yorumları">
        {reviews.map((r) => (
          <figure key={r.name} className="review">
            <Stars />
            <blockquote>{r.text}</blockquote>
            <figcaption>
              <span className="review__avatar" aria-hidden="true">{r.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}</span>
              <span>
                <strong>{r.name}</strong>
                <small>{[r.program, r.country].filter(Boolean).join(', ')} · Google yorumu</small>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="reviews__nav">
        <button type="button" onClick={() => scroll(-1)} aria-label="Önceki yorumlar"><Icon name="chevronLeft" /></button>
        <button type="button" onClick={() => scroll(1)} aria-label="Sonraki yorumlar"><Icon name="chevronRight" /></button>
      </div>
    </div>
  )
}

/* ---------- Gidenler anlatıyor: gerçek öğrenci fotoğrafları ---------- */
export function StudentWall({ dark, limit }: { dark?: boolean; limit?: number }) {
  const items = limit ? studentPhotos.slice(0, limit) : studentPhotos
  return (
    <ul className={`stwall ${dark ? 'stwall--dark' : ''}`} aria-label="Öğrencilerimizden kareler">
      {items.map((p) => (
        <li key={p.image}>
          <figure className="stwall__item">
            <img src={p.image} alt={p.alt} loading="lazy" width="480" height="600" />
            <figcaption>
              <RouteCode to={p.code} light />
              <strong>{p.note}</strong>
              <span>{p.school}, {p.city}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}

/* ---------- Collapsible long-form text (SEO block) ---------- */
export function ReadMore({ children, lines = 6 }: { children: ReactNode; lines?: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`readmore ${open ? 'is-open' : ''}`} style={{ ['--lines' as string]: lines }}>
      <div className="readmore__body prose">{children}</div>
      <button type="button" className="textlink readmore__btn" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {open ? 'Daha az göster' : 'Devamını oku'} <Icon name={open ? 'minus' : 'plus'} size={16} />
      </button>
    </div>
  )
}
