import { useId, useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { submitLead, programOptions } from '../lib/lead'
import { countries } from '../data/countries'
import { Icon } from './Icon'

type Props = {
  variant?: 'full' | 'compact'
  source: string
  defaultProgram?: string
  defaultCountry?: string
  title?: string
  note?: string
  tone?: 'light' | 'dark'
}

type Errors = Partial<Record<'name' | 'phone' | 'email' | 'kvkk', string>>

const phoneOk = (v: string) => v.replace(/\D/g, '').length >= 10

export function LeadForm({ variant = 'full', source, defaultProgram = '', defaultCountry = '', title, note, tone = 'light' }: Props) {
  const id = useId()
  const nav = useNavigate()
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const compact = variant === 'compact'

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const v = (k: string) => String(fd.get(k) ?? '').trim()
    const errs: Errors = {}
    if (v('name').length < 3) errs.name = 'Adınızı ve soyadınızı yazın.'
    if (!phoneOk(v('phone'))) errs.phone = 'Size ulaşabilmemiz için 10 haneli telefon numaranızı yazın.'
    if (!compact && v('email') && !/^\S+@\S+\.\S+$/.test(v('email'))) errs.email = 'E-posta adresi eksik veya hatalı görünüyor.'
    if (!fd.get('kvkk')) errs.kvkk = 'Devam etmek için aydınlatma metnini onaylayın.'
    setErrors(errs)
    if (Object.keys(errs).length) {
      const first = e.currentTarget.querySelector<HTMLElement>('[aria-invalid="true"]')
      first?.focus()
      return
    }
    setStatus('sending')
    try {
      await submitLead({ name: v('name'), phone: v('phone'), email: v('email'), program: v('program'), country: v('country'), message: v('message'), source })
      nav('/tesekkurler', { state: { name: v('name').split(' ')[0], program: v('program') } })
    } catch {
      setStatus('error')
    }
  }

  const f = (k: string) => `${id}-${k}`

  return (
    <form className={`lead lead--${variant} lead--${tone}`} onSubmit={onSubmit} noValidate>
      {title && <h3 className="lead__title">{title}</h3>}
      {note && <p className="lead__note">{note}</p>}
      <div className="lead__grid">
        <div className="field">
          <label htmlFor={f('name')}>Ad soyad</label>
          <input id={f('name')} name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? f('name-e') : undefined} />
          {errors.name && <p className="field__err" id={f('name-e')}>{errors.name}</p>}
        </div>
        <div className="field">
          <label htmlFor={f('phone')}>Telefon</label>
          <input id={f('phone')} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="05xx xxx xx xx" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? f('phone-e') : undefined} />
          {errors.phone && <p className="field__err" id={f('phone-e')}>{errors.phone}</p>}
        </div>
        <div className="field">
          <label htmlFor={f('program')}>İlgilendiğiniz program</label>
          <div className="select">
            <select id={f('program')} name="program" defaultValue={defaultProgram}>
              <option value="">Seçin</option>
              {programOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
            <Icon name="chevronDown" size={16} />
          </div>
        </div>
        {!compact && (
          <div className="field">
            <label htmlFor={f('country')}>Ülke tercihi</label>
            <div className="select">
              <select id={f('country')} name="country" defaultValue={defaultCountry}>
                <option value="">Henüz karar vermedim</option>
                {countries.map((c) => <option key={c.slug}>{c.name}</option>)}
                <option>Diğer</option>
              </select>
              <Icon name="chevronDown" size={16} />
            </div>
          </div>
        )}
        {!compact && (
          <div className="field field--wide">
            <label htmlFor={f('email')}>E-posta <span className="field__opt">(isteğe bağlı)</span></label>
            <input id={f('email')} name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? f('email-e') : undefined} />
            {errors.email && <p className="field__err" id={f('email-e')}>{errors.email}</p>}
          </div>
        )}
        {!compact && (
          <div className="field field--wide">
            <label htmlFor={f('message')}>Eklemek istedikleriniz <span className="field__opt">(isteğe bağlı)</span></label>
            <textarea id={f('message')} name="message" rows={3} />
          </div>
        )}
      </div>
      <label className="consent">
        <input type="checkbox" name="kvkk" aria-invalid={!!errors.kvkk} />
        <span>
          <Link to="/kvkk" target="_blank">KVKK aydınlatma metnini</Link> okudum, benimle iletişime geçilmesini kabul ediyorum.
        </span>
      </label>
      {errors.kvkk && <p className="field__err">{errors.kvkk}</p>}
      {status === 'error' && <p className="field__err" role="alert">Form şu anda gönderilemedi. Lütfen tekrar deneyin veya bize WhatsApp’tan yazın.</p>}
      <button type="submit" className="btn btn--coral btn--lg lead__submit" disabled={status === 'sending'}>
        <span>{status === 'sending' ? 'Gönderiliyor…' : 'Ücretsiz danışmanlık iste'}</span>
        {status !== 'sending' && <Icon name="arrow" size={18} />}
      </button>
      <p className="lead__trust"><Icon name="shield" size={16} /> Bilgileriniz yalnızca size dönüş yapmak için kullanılır.</p>
    </form>
  )
}
