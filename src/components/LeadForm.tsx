import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { submitLead, programOptions, budgetOptions, budgetKindFor, studentStatusOptions, childAgeOptions, type BudgetKind } from '../lib/lead'
import { trackLead } from '../lib/analytics'
import { countries } from '../data/countries'
import { Icon } from './Icon'
import { site } from '../data/site'

type Props = {
  variant?: 'full' | 'compact'
  source: string
  defaultProgram?: string
  defaultCountry?: string
  title?: string
  note?: string
  tone?: 'light' | 'dark'
  /**
   * Reklam landing page formları: program/ülke sabit (gizli alan), kısa alan seti.
   * university: Ad soyad · Telefon · Öğrencinin durumu · Bütçe · E-posta (isteğe bağlı) · KVKK
   * summer: Veli ad soyad · Telefon · Çocuğun yaşı · Bütçe · KVKK
   */
  kind?: 'default' | BudgetKind
  submitLabel?: string
  /** "#form" bağlantılarının kaydıracağı görünür form (scrollToVisibleForm) */
  anchor?: boolean
  id?: string
}

type Errors = Partial<Record<'name' | 'phone' | 'email' | 'kvkk' | 'budget' | 'status' | 'age', string>>

const phoneOk = (v: string) => v.replace(/\D/g, '').length >= 10

export function LeadForm({ variant = 'full', source, defaultProgram = '', defaultCountry = '', title, note, tone = 'light', kind = 'default', submitLabel, anchor, id: formId }: Props) {
  const id = useId()
  const nav = useNavigate()
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [program, setProgram] = useState(defaultProgram)
  const [country, setCountry] = useState(defaultCountry)
  const ads = kind !== 'default'
  const compact = variant === 'compact' && !ads
  // Bütçe alanı: landing formlarında sabit, diğer formlarda seçilen programa göre (İngiltere / ülke seçilmemiş)
  const budgetKind: BudgetKind | undefined = ads ? kind : budgetKindFor(program, compact ? defaultCountry : country)
  // Tek gönderim: başarıdan sonra yönlendirme sürerken ikinci tıklama yeni olay üretmesin
  const sent = useRef(false)
  // Bot koruması: formun ekranda kalma süresi
  const shownAt = useRef(0)
  useEffect(() => {
    shownAt.current = Date.now()
  }, [])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const v = (k: string) => String(fd.get(k) ?? '').trim()
    const errs: Errors = {}
    if (v('name').length < 3) errs.name = 'Adınızı ve soyadınızı yazın.'
    if (!phoneOk(v('phone'))) errs.phone = 'Size ulaşabilmemiz için 10 haneli telefon numaranızı yazın.'
    if (!compact && v('email') && !/^\S+@\S+\.\S+$/.test(v('email'))) errs.email = 'E-posta adresi eksik veya hatalı görünüyor.'
    if (budgetKind && !v('budget')) errs.budget = 'Planladığınız bütçe aralığını seçin.'
    if (kind === 'university' && !v('status')) errs.status = 'Öğrencinin durumunu seçin.'
    if (kind === 'summer' && !v('age')) errs.age = 'Çocuğunuzun yaşını seçin.'
    if (!fd.get('kvkk')) errs.kvkk = 'Devam etmek için aydınlatma metnini onaylayın.'
    setErrors(errs)
    if (Object.keys(errs).length) {
      const first = e.currentTarget.querySelector<HTMLElement>('[aria-invalid="true"]')
      first?.focus()
      return
    }
    if (sent.current) return
    setStatus('sending')
    try {
      await submitLead(
        {
          name: v('name'),
          phone: v('phone'),
          email: v('email'),
          program: v('program'),
          country: v('country'),
          message: v('message'),
          budget: v('budget'),
          studentStatus: v('status'),
          childAge: v('age'),
          source,
        },
        { hp: v('website'), elapsed: Date.now() - shownAt.current },
      )
      sent.current = true
      // generate_lead yalnızca burada: sunucu başarılı yanıt verdi. Doğrulama/sunucu hatasında bu satıra gelinmez;
      // teşekkür sayfasını yenilemek veya geri gelmek olayı tekrar tetiklemez.
      trackLead(
        { form_program: v('program'), form_country: v('country'), form_budget: v('budget'), student_status: v('status'), child_age: v('age'), form_source: source },
        { phone: v('phone'), email: v('email') },
      )
      nav('/tesekkurler', { state: { name: v('name').split(' ')[0], program: v('program') } })
    } catch {
      setStatus('error')
    }
  }

  const f = (k: string) => `${id}-${k}`

  return (
    <form id={formId} className={`lead lead--${ads ? 'compact lead--ads' : variant} lead--${tone}`} onSubmit={onSubmit} noValidate data-form-anchor={anchor ? '' : undefined}>
      {title && <h3 className="lead__title">{title}</h3>}
      {note && <p className="lead__note">{note}</p>}
      {/* Honeypot (bot tuzağı): ekran dışı, odaklanamaz, ekran okuyucu ve otomatik doldurma görmez.
          Doluysa sunucu başarı döner ama kaydetmez (api/lead.js). */}
      <div className="lead__hp" aria-hidden="true" inert>
        <label htmlFor={f('website')}>Web siteniz</label>
        <input id={f('website')} name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      </div>
      {ads && <input type="hidden" name="program" value={defaultProgram} />}
      {ads && <input type="hidden" name="country" value={defaultCountry} />}
      <div className="lead__grid">
        <div className="field">
          <label htmlFor={f('name')}>{kind === 'summer' ? 'Veli ad soyad' : 'Ad soyad'}</label>
          <input id={f('name')} name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? f('name-e') : undefined} />
          {errors.name && <p className="field__err" id={f('name-e')}>{errors.name}</p>}
        </div>
        <div className="field">
          <label htmlFor={f('phone')}>Telefon</label>
          <input id={f('phone')} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="05xx xxx xx xx" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? f('phone-e') : undefined} />
          {errors.phone && <p className="field__err" id={f('phone-e')}>{errors.phone}</p>}
        </div>
        {kind === 'university' && (
          <SelectField id={f('status')} name="status" label="Öğrencinin durumu" options={studentStatusOptions} error={errors.status} />
        )}
        {kind === 'summer' && (
          <SelectField id={f('age')} name="age" label="Çocuğun yaşı" options={childAgeOptions} error={errors.age} />
        )}
        {!ads && (
        <div className="field">
          <label htmlFor={f('program')}>İlgilendiğiniz program</label>
          <div className="select">
            <select id={f('program')} name="program" value={program} onChange={(e) => setProgram(e.target.value)}>
              <option value="">Seçin</option>
              {programOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
            <Icon name="chevronDown" size={16} />
          </div>
        </div>
        )}
        {!compact && !ads && (
          <div className="field">
            <label htmlFor={f('country')}>Ülke tercihi</label>
            <div className="select">
              <select id={f('country')} name="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="">Henüz karar vermedim</option>
                {countries.map((c) => <option key={c.slug}>{c.name}</option>)}
                <option>Diğer</option>
              </select>
              <Icon name="chevronDown" size={16} />
            </div>
          </div>
        )}
        {budgetKind && (
          <SelectField id={f('budget')} name="budget" label={kind === 'summer' ? 'Planlanan bütçe' : 'Planlanan yıllık bütçe'} options={budgetOptions[budgetKind]} error={errors.budget} wide={!compact && !ads} />
        )}
        {!compact && kind !== 'summer' && (
          <div className="field field--wide">
            <label htmlFor={f('email')}>E-posta <span className="field__opt">(isteğe bağlı)</span></label>
            <input id={f('email')} name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? f('email-e') : undefined} />
            {errors.email && <p className="field__err" id={f('email-e')}>{errors.email}</p>}
          </div>
        )}
        {!compact && !ads && (
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
      {status === 'error' && <p className="field__err" role="alert">Form şu anda gönderilemedi. Lütfen tekrar deneyin ya da bize <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp’tan yazın</a> veya <a href={site.phoneHref}>{site.phone}</a> numarasından arayın.</p>}
      <button type="submit" className="btn btn--coral btn--lg lead__submit" disabled={status === 'sending'}>
        <span>{status === 'sending' ? 'Gönderiliyor…' : submitLabel ?? 'Ücretsiz danışmanlık iste'}</span>
        {status !== 'sending' && <Icon name="arrow" size={18} />}
      </button>
      <p className="lead__trust"><Icon name="shield" size={16} /> Bilgileriniz yalnızca size dönüş yapmak için kullanılır.</p>
    </form>
  )
}

function SelectField({ id, name, label, options, error, wide }: { id: string; name: string; label: string; options: readonly string[]; error?: string; wide?: boolean }) {
  return (
    <div className={`field${wide ? ' field--wide' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <div className="select">
        <select id={id} name={name} defaultValue="" aria-invalid={!!error} aria-describedby={error ? `${id}-e` : undefined}>
          <option value="" disabled>Seçin</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <Icon name="chevronDown" size={16} />
      </div>
      {error && <p className="field__err" id={`${id}-e`}>{error}</p>}
    </div>
  )
}
