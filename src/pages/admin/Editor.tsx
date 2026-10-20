// Blog yazısı editörü: Markdown yazım alanı, canlı önizleme, SEO analizi ve yayın işlemleri.
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { authors } from '../../data/authors'
import { site } from '../../data/site'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { api, ApiError, type AdminPost, type Upload } from './api'
import { analyze, scoreTone, SEO_LIMITS, type CheckStatus } from './seo'
import { prepareCover, prepareInline, type Prepared } from './image'
import { Markdown } from '../../components/Markdown'
import { plain } from '../../components/Rich'
import { slugify } from '../../lib/slug'
import { postCategories, formatDate, type PostFile, type PostCategory } from '../../data/blog'
import { countries } from '../../data/countries'
import { programs } from '../../data/programs'
import { sitemapPaths } from '../../seo/paths'

type Draft = PostFile & { body: string }
type Mode = 'write' | 'split' | 'preview'

const today = () => new Date().toISOString().slice(0, 10)
const emptyDraft = (): Draft => ({
  slug: '',
  title: '',
  metaTitle: '',
  description: '',
  category: 'Genel',
  date: today(),
  image: '',
  imageAlt: '',
  focusKeyword: '',
  keywords: [],
  countries: [],
  programs: [],
  faqs: [],
  draft: true,
  body: '## Giriş\n\nYazınıza burada başlayın. İlk paragrafta konuyu ve odak anahtar kelimeyi net biçimde belirtin.\n',
})

const backupKey = (slug: string | null) => `tampa-admin:yedek:${slug ?? 'yeni'}`

const TEMPLATE_HELP = [
  ['## Başlık', 'Ara başlık (H2) – içindekilere eklenir'],
  ['### Alt başlık', 'Alt başlık (H3)'],
  ['**kalın**', 'Kalın yazı'],
  ['*italik*', 'İtalik yazı'],
  ['[metin](/yurtdisi-dil-okullari)', 'İç bağlantı'],
  ['[metin](https://www.gov.uk)', 'Dış bağlantı (yeni sekmede açılır)'],
  ['- madde', 'Madde işaretli liste'],
  ['1. madde', 'Numaralı liste'],
  ['> alıntı', 'Vurgulu alıntı kutusu'],
  ['![alt metin](/img/blog/x.jpg "açıklama")', 'Görsel'],
  ['| A | B |\\n|---|---|\\n| 1 | 2 |', 'Tablo'],
] as const

export function Editor({ slug, storage, onSaved }: { slug: string | null; storage: string; onSaved: () => void }) {
  const nav = useNavigate()
  const flash = (useLocation().state as { saved?: { live: boolean; slug: string } } | null)?.saved
  const [draft, setDraft] = useState<Draft | null>(slug ? null : emptyDraft())
  const [saved, setSaved] = useState<string>(slug ? '' : JSON.stringify(emptyDraft()))
  const [oid, setOid] = useState<string | null>(null)
  const [wasDraft, setWasDraft] = useState(true)
  const [others, setOthers] = useState<AdminPost[]>([])
  const [slugTouched, setSlugTouched] = useState(Boolean(slug))
  const [uploads, setUploads] = useState<Record<string, Prepared>>({})
  const [mode, setMode] = useState<Mode>('split')
  const [busy, setBusy] = useState<'' | 'save' | 'publish' | 'delete' | 'image'>('')
  const [message, setMessage] = useState<{ tone: 'good' | 'bad' | 'info'; text: ReactNode } | null>(flash ? { tone: 'good', text: savedText(flash.live, flash.slug, storage) } : null)
  const [backup, setBackup] = useState<{ draft: Draft; at: string } | null>(null)
  const [dialog, setDialog] = useState<'' | 'link' | 'image' | 'help'>('')
  const [tab, setTab] = useState<'seo' | 'settings'>('seo')
  const ta = useRef<HTMLTextAreaElement>(null)

  // Yazıyı ve diğer yazıları (benzersizlik kontrolleri için) yükle
  useEffect(() => {
    api.list().then((r) => setOthers(r.posts)).catch(() => {})
    if (!slug) {
      setWasDraft(true)
      return
    }
    api
      .get(slug)
      .then(({ meta, body, oid }) => {
        const d: Draft = { ...emptyDraft(), ...meta, metaTitle: meta.metaTitle ?? '', imageAlt: meta.imageAlt ?? '', body }
        setDraft(d)
        setSaved(JSON.stringify(d))
        setOid(oid)
        setWasDraft(Boolean(meta.draft))
      })
      .catch((e: ApiError) => setMessage({ tone: 'bad', text: e.message }))
  }, [slug])

  // Kaydedilmemiş yerel yedek var mı?
  useEffect(() => {
    if (!draft) return
    try {
      const raw = localStorage.getItem(backupKey(slug))
      if (!raw) return
      const b = JSON.parse(raw) as { draft: Draft; at: string }
      if (JSON.stringify(b.draft) !== JSON.stringify(draft)) setBackup(b)
    } catch {
      /* yok say */
    }
    // yalnızca ilk yüklemede
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Boolean(draft)])

  const dirty = draft ? JSON.stringify(draft) !== saved || Object.keys(uploads).length > 0 : false

  // Değişiklikleri tarayıcıya yedekle (sekme kapanırsa kaybolmasın)
  useEffect(() => {
    if (!draft || !dirty) return
    const t = setTimeout(() => {
      try {
        localStorage.setItem(backupKey(slug), JSON.stringify({ draft, at: new Date().toISOString() }))
      } catch {
        /* depolama dolu / kapalı */
      }
    }, 800)
    return () => clearTimeout(t)
  }, [draft, dirty, slug])

  useEffect(() => {
    const warn = (e: BeforeUnloadEvent) => {
      if (dirty) e.preventDefault()
    }
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [dirty])

  const set = useCallback(<K extends keyof Draft>(k: K, v: Draft[K]) => setDraft((d) => (d ? { ...d, [k]: v } : d)), [])

  const onTitle = (title: string) =>
    setDraft((d) => (d ? { ...d, title, slug: slugTouched ? d.slug : slugify(title).slice(0, 70).replace(/-+$/, '') } : d))

  const analysis = useMemo(() => (draft ? analyze(draft, others) : null), [draft, others])

  const resolveSrc = useCallback((src: string) => uploads[src.replace(/^\//, '')]?.url ?? src, [uploads])

  /* ---------- Metin alanı yardımcıları ---------- */
  const edit = (fn: (value: string, start: number, end: number) => { value: string; start: number; end: number }) => {
    const el = ta.current
    if (!el || !draft) return
    const r = fn(draft.body, el.selectionStart, el.selectionEnd)
    set('body', r.value)
    requestAnimationFrame(() => {
      el.focus()
      el.setSelectionRange(r.start, r.end)
    })
  }
  const wrap = (before: string, after = before, placeholder = 'metin') =>
    edit((v, s, e) => {
      const sel = v.slice(s, e) || placeholder
      const value = v.slice(0, s) + before + sel + after + v.slice(e)
      return { value, start: s + before.length, end: s + before.length + sel.length }
    })
  const linePrefix = (prefix: string, placeholder: string) =>
    edit((v, s, e) => {
      const lineStart = v.lastIndexOf('\n', s - 1) + 1
      const sel = v.slice(lineStart, e) || placeholder
      const lines = sel.split('\n').map((l, i) => (prefix === '1. ' ? `${i + 1}. ` : prefix) + l.replace(/^(#{2,3}\s|[-*]\s|\d+\.\s|>\s?)/, ''))
      const block = lines.join('\n')
      const needsGap = lineStart > 0 && v[lineStart - 1] === '\n' && v[lineStart - 2] !== '\n' ? '\n' : ''
      const value = v.slice(0, lineStart) + needsGap + block + v.slice(e)
      return { value, start: lineStart + needsGap.length, end: lineStart + needsGap.length + block.length }
    })
  const insertBlock = (text: string) =>
    edit((v, s) => {
      const before = v.slice(0, s).replace(/\n*$/, '')
      const pre = before ? `${before}\n\n` : ''
      const value = `${pre}${text}\n\n${v.slice(s).replace(/^\n*/, '')}`
      const pos = pre.length + text.length
      return { value, start: pos, end: pos }
    })

  /* ---------- Görseller ---------- */
  const addUploads = (items: Prepared[]) => setUploads((u) => ({ ...u, ...Object.fromEntries(items.map((p) => [p.path, p])) }))

  const onCover = async (file?: File) => {
    if (!file || !draft) return
    setBusy('image')
    try {
      const [big, small] = await prepareCover(file, draft.slug || slugify(draft.title))
      addUploads([big, small])
      setDraft((d) => (d ? { ...d, image: `/${big.path}`, imageAlt: d.imageAlt || d.title } : d))
      setMessage({ tone: 'info', text: `Kapak görseli hazırlandı (${Math.round(big.bytes / 1024)} KB). Kaydettiğinizde yüklenecek.` })
    } catch (e) {
      setMessage({ tone: 'bad', text: (e as Error).message })
    } finally {
      setBusy('')
    }
  }

  const coverSrc = draft?.image ? (uploads[draft.image.replace(/^\//, '')]?.url ?? draft.image.replace(/\.jpg$/, '-800.jpg')) : ''

  /* ---------- Kaydetme ---------- */
  const save = async (publish: boolean | null) => {
    if (!draft) return
    const next: Draft = { ...draft, draft: publish === null ? draft.draft : !publish }
    if (!next.slug) next.slug = slugify(next.title)
    // Yalnızca metinde/kapakta hâlâ kullanılan görseller gönderilir
    const used = Object.values(uploads).filter((u) => next.body.includes(`/${u.path}`) || next.image === `/${u.path}` || next.image.replace(/\.jpg$/, '-800.jpg') === `/${u.path}`)
    const payload: Upload[] = used.map((u) => ({ path: u.path, data: u.data }))
    setBusy(publish ? 'publish' : 'save')
    setMessage(null)
    try {
      const r = await api.save({ post: next, uploads: payload, originalSlug: slug, baseOid: oid })
      const d: Draft = { ...emptyDraft(), ...r.post.meta, metaTitle: r.post.meta.metaTitle ?? '', imageAlt: r.post.meta.imageAlt ?? '', body: r.post.body }
      setDraft(d)
      setSaved(JSON.stringify(d))
      setOid(r.post.oid)
      setWasDraft(Boolean(d.draft))
      setUploads({})
      try {
        localStorage.removeItem(backupKey(slug))
      } catch {
        /* yok say */
      }
      onSaved()
      setMessage({ tone: 'good', text: savedText(!d.draft, d.slug, storage) })
      if (slug !== d.slug) nav(`/admin/duzenle/${d.slug}`, { replace: true, state: { saved: { live: !d.draft, slug: d.slug } } })
    } catch (e) {
      setMessage({ tone: 'bad', text: (e as Error).message })
    } finally {
      setBusy('')
    }
  }

  const remove = async () => {
    if (!slug || !draft) return
    if (!window.confirm(`“${draft.title}” yazısı kalıcı olarak silinecek.${wasDraft ? '' : ' Eski adres /blog sayfasına yönlendirilecek.'} Emin misiniz?`)) return
    setBusy('delete')
    try {
      await api.remove(slug)
      try {
        localStorage.removeItem(backupKey(slug))
      } catch {
        /* yok say */
      }
      onSaved()
      nav('/admin', { replace: true })
    } catch (e) {
      setMessage({ tone: 'bad', text: (e as Error).message })
      setBusy('')
    }
  }

  // Ctrl/Cmd + S → kaydet (durumu değiştirmeden)
  const saveRef = useRef(save)
  saveRef.current = save
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's') {
        e.preventDefault()
        void saveRef.current(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!draft || !analysis) {
    return <section className="adm-wrap">{message ? <p className={`adm-alert adm-alert--${message.tone}`}>{message.text}</p> : <p className="adm-muted">Yazı yükleniyor…</p>}</section>
  }

  const slugTaken = others.some((o) => o.slug === draft.slug && o.slug !== slug)
  const descLen = draft.description.trim().length
  const seoTitleLen = analysis.seoTitle.length

  return (
    <section className="adm-editor">
      <div className="adm-editor__bar">
        <Link to="/admin" className="adm-link">← Tüm yazılar</Link>
        <div className="adm-editor__state">
          <span className={`adm-chip adm-chip--${draft.draft ? 'warn' : 'good'}`}>{draft.draft ? 'Taslak' : 'Yayında'}</span>
          {dirty ? <span className="adm-muted">Kaydedilmemiş değişiklikler</span> : slug && <span className="adm-muted">Tüm değişiklikler kaydedildi</span>}
        </div>
        <div className="adm-editor__actions">
          {slug && <button type="button" className="adm-btn adm-btn--danger adm-btn--sm" onClick={remove} disabled={!!busy}>{busy === 'delete' ? 'Siliniyor…' : 'Sil'}</button>}
          {!draft.draft && slug && (
            <button type="button" className="adm-btn adm-btn--ghost adm-btn--sm" onClick={() => save(false)} disabled={!!busy}>Yayından kaldır</button>
          )}
          {draft.draft && (
            <button type="button" className="adm-btn adm-btn--sm" onClick={() => save(null)} disabled={!!busy}>{busy === 'save' ? 'Kaydediliyor…' : 'Taslağı kaydet'}</button>
          )}
          <button type="button" className="adm-btn adm-btn--primary adm-btn--sm" onClick={() => save(true)} disabled={!!busy || slugTaken}>
            {busy === 'publish' ? 'Yayınlanıyor…' : draft.draft ? 'Yayınla' : 'Güncelle'}
          </button>
        </div>
      </div>

      {message && <p className={`adm-alert adm-alert--${message.tone}`} role="status">{message.text}</p>}
      {backup && (
        <p className="adm-alert adm-alert--info">
          Bu yazı için {new Date(backup.at).toLocaleString('tr-TR')} tarihli kaydedilmemiş bir yedek bulundu.{' '}
          <button type="button" className="adm-link" onClick={() => { setDraft(backup.draft); setBackup(null) }}>Yedeği geri yükle</button>{' · '}
          <button type="button" className="adm-link" onClick={() => { localStorage.removeItem(backupKey(slug)); setBackup(null) }}>Yok say</button>
        </p>
      )}

      <div className="adm-editor__grid">
        <div className="adm-editor__main">
          <label className="adm-field">
            <span>Başlık (sayfadaki H1)</span>
            <input className="adm-title" value={draft.title} onChange={(e) => onTitle(e.target.value)} placeholder="Ör. İngiltere’de Dil Okulu Seçerken Dikkat Edilmesi Gereken 7 Nokta" maxLength={140} />
          </label>
          <label className="adm-field">
            <span>Adres (URL)</span>
            <div className="adm-slug">
              <span>tampaegitim.com.tr/blog/</span>
              <input
                value={draft.slug}
                onChange={(e) => {
                  setSlugTouched(true)
                  set('slug', slugify(e.target.value))
                }}
                placeholder="ingiltere-dil-okulu-secimi"
                maxLength={90}
              />
            </div>
            {slugTaken && <small className="adm-bad">Bu adres başka bir yazıda kullanılıyor.</small>}
            {slug && !wasDraft && draft.slug !== slug && <small className="adm-warn">Adres değişecek; eski adres (/blog/{slug}) yeni adrese kalıcı olarak (301) yönlendirilecek, Google sıralaması korunur.</small>}
          </label>

          <div className="adm-toolbar" role="toolbar" aria-label="Biçimlendirme">
            <button type="button" onClick={() => linePrefix('## ', 'Ara başlık')} title="Ara başlık (H2)">H2</button>
            <button type="button" onClick={() => linePrefix('### ', 'Alt başlık')} title="Alt başlık (H3)">H3</button>
            <button type="button" onClick={() => wrap('**')} title="Kalın"><b>K</b></button>
            <button type="button" onClick={() => wrap('*')} title="İtalik"><i>İ</i></button>
            <button type="button" onClick={() => linePrefix('- ', 'Madde')} title="Madde listesi">• Liste</button>
            <button type="button" onClick={() => linePrefix('1. ', 'Madde')} title="Numaralı liste">1. Liste</button>
            <button type="button" onClick={() => linePrefix('> ', 'Alıntı')} title="Alıntı">❝</button>
            <button type="button" onClick={() => setDialog('link')} title="Bağlantı">🔗 Bağlantı</button>
            <button type="button" onClick={() => setDialog('image')} title="Görsel">🖼 Görsel</button>
            <button type="button" onClick={() => insertBlock('| Başlık 1 | Başlık 2 |\n|---|---|\n| Hücre | Hücre |')} title="Tablo">▦ Tablo</button>
            <button type="button" onClick={() => setDialog('help')} title="Yazım kılavuzu">?</button>
            <div className="adm-seg adm-seg--sm" role="group" aria-label="Görünüm">
              {(['write', 'split', 'preview'] as const).map((m) => (
                <button key={m} type="button" className={mode === m ? 'is-on' : ''} aria-pressed={mode === m} onClick={() => setMode(m)}>
                  {m === 'write' ? 'Yaz' : m === 'split' ? 'Yan yana' : 'Önizleme'}
                </button>
              ))}
            </div>
          </div>

          <div className={`adm-panes adm-panes--${mode}`}>
            {mode !== 'preview' && (
              <textarea
                ref={ta}
                className="adm-md"
                value={draft.body}
                onChange={(e) => set('body', e.target.value)}
                spellCheck
                lang="tr"
                aria-label="Yazı metni (Markdown)"
                onPaste={(e) => {
                  const file = [...e.clipboardData.files].find((f) => f.type.startsWith('image/'))
                  if (file) {
                    e.preventDefault()
                    void prepareInline(file, draft.slug).then((p) => {
                      addUploads([p])
                      insertBlock(`![Görseli anlatan alt metin](/${p.path})`)
                    })
                  }
                }}
              />
            )}
            {mode !== 'write' && (
              <div className="adm-preview">
                <div className="adm-preview__hero">
                  <p>{draft.category} · {formatDate(draft.date)} · {analysis.readMin} dk okuma</p>
                  <h1>{draft.title || 'Başlık'}</h1>
                </div>
                <article className="article">
                  <p className="lead-strong">{draft.description}</p>
                  <div className="article__body"><Markdown blocks={analysis.blocks} resolveSrc={resolveSrc} /></div>
                  {(draft.faqs?.length ?? 0) > 0 && (
                    <div className="article__faq">
                      <h2>Sık Sorulan Sorular</h2>
                      {draft.faqs!.map((f, i) => <details key={i} className="adm-faqprev"><summary>{f.q}</summary><p>{f.a}</p></details>)}
                    </div>
                  )}
                </article>
              </div>
            )}
          </div>
          <p className="adm-muted adm-small">{analysis.words} kelime · {analysis.readMin} dk okuma · {analysis.h2Count} ara başlık · Kaydetmek için Ctrl/⌘ + S</p>
        </div>

        <aside className="adm-editor__side">
          <div className="adm-seg adm-seg--block" role="tablist">
            <button type="button" role="tab" aria-selected={tab === 'seo'} className={tab === 'seo' ? 'is-on' : ''} onClick={() => setTab('seo')}>SEO <b className={`adm-score adm-score--${scoreTone(analysis.score)}`}>{analysis.score}</b></button>
            <button type="button" role="tab" aria-selected={tab === 'settings'} className={tab === 'settings' ? 'is-on' : ''} onClick={() => setTab('settings')}>Yazı ayarları</button>
          </div>

          {tab === 'seo' ? (
            <>
              <Panel title="Arama motoru">
                <label className="adm-field">
                  <span>Odak anahtar kelime</span>
                  <input value={draft.focusKeyword ?? ''} onChange={(e) => set('focusKeyword', e.target.value)} placeholder="ör. ingiltere dil okulları" />
                </label>
                <label className="adm-field">
                  <span>SEO başlığı <Counter n={seoTitleLen} min={SEO_LIMITS.titleMin} max={SEO_LIMITS.titleMax + 5} /></span>
                  <input value={draft.metaTitle ?? ''} onChange={(e) => set('metaTitle', e.target.value)} placeholder={draft.title || 'Boş bırakılırsa başlık kullanılır'} maxLength={90} />
                </label>
                <label className="adm-field">
                  <span>Meta açıklama <Counter n={descLen} min={SEO_LIMITS.descMin} max={SEO_LIMITS.descMax} /></span>
                  <textarea rows={4} value={draft.description} onChange={(e) => set('description', e.target.value)} placeholder="Arama sonuçlarında görünen 120–160 karakterlik özet. Yazının girişinde de gösterilir." maxLength={320} />
                </label>
              </Panel>

              <Panel title="Google önizlemesi">
                <div className="adm-serp">
                  <div className="adm-serp__site"><span className="adm-serp__fav" />Tampa Yurtdışı Eğitim<small>{site.url} › blog › {draft.slug || '…'}</small></div>
                  <p className="adm-serp__title">{analysis.seoTitle.length > 62 ? `${analysis.seoTitle.slice(0, 60)}…` : analysis.seoTitle || 'SEO başlığı'}</p>
                  <p className="adm-serp__desc">
                    <span>{formatDate(draft.date)} — </span>
                    {(draft.description || 'Meta açıklama yazın…').slice(0, 158)}{draft.description.length > 158 ? '…' : ''}
                  </p>
                </div>
              </Panel>

              <Panel title={`SEO kontrol listesi · ${analysis.score}/100`}>
                <div className={`adm-meter adm-meter--${scoreTone(analysis.score)}`}><span style={{ width: `${analysis.score}%` }} /></div>
                {(['Anahtar kelime', 'Başlık ve açıklama', 'İçerik', 'Yapı', 'Bağlantı ve görsel'] as const).map((g) => (
                  <div key={g} className="adm-checks">
                    <p className="adm-checks__h">{g}</p>
                    <ul>
                      {analysis.checks.filter((c) => c.group === g).map((c) => (
                        <li key={c.id} className={`is-${c.status}`}>
                          <Dot s={c.status} />
                          <span>
                            {c.label}
                            {c.status !== 'good' && c.tip && <small>{c.tip}</small>}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Panel>

              <Panel title="Sosyal medya önizlemesi">
                <div className="adm-og">
                  {coverSrc ? <img src={coverSrc} alt="" /> : <div className="adm-og__ph">Kapak görseli yok</div>}
                  <div>
                    <small>TAMPAEGITIM.COM.TR</small>
                    <strong>{analysis.seoTitle}</strong>
                    <p>{plain(draft.description).slice(0, 110)}</p>
                  </div>
                </div>
              </Panel>
            </>
          ) : (
            <>
              <Panel title="Yayın">
                <label className="adm-field">
                  <span>Yayın tarihi</span>
                  <input type="date" value={draft.date} onChange={(e) => set('date', e.target.value)} max="2100-12-31" />
                </label>
                {draft.updated && draft.updated !== draft.date && <p className="adm-muted adm-small">Son güncelleme: {formatDate(draft.updated)} (Google’a “güncellendi” olarak bildirilir)</p>}
                <label className="adm-field">
                  <span>Yazar</span>
                  <select value={draft.author ?? ''} onChange={(e) => set('author', e.target.value)}>
                    <option value="">Tampa Yurtdışı Eğitim (kurum)</option>
                    {authors.map((a) => <option key={a.slug} value={a.slug}>{a.name}{a.ready ? '' : ' (profil eksik: kurum gösterilir)'}</option>)}
                  </select>
                </label>
                <label className="adm-field">
                  <span>Kategori</span>
                  <select value={draft.category} onChange={(e) => set('category', e.target.value as PostCategory)}>
                    {postCategories.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </label>
              </Panel>

              <Panel title="Kapak görseli">
                {coverSrc && <img className="adm-cover" src={coverSrc} alt="" />}
                <label className="adm-btn adm-btn--block adm-file">
                  {busy === 'image' ? 'Hazırlanıyor…' : coverSrc ? 'Görseli değiştir' : 'Görsel yükle'}
                  <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => onCover(e.target.files?.[0])} />
                </label>
                <label className="adm-field">
                  <span>veya mevcut görsel yolu</span>
                  <input value={draft.image} onChange={(e) => set('image', e.target.value.trim())} placeholder="/img/dest/ingiltere.jpg" />
                </label>
                <label className="adm-field">
                  <span>Alt metin (görseli anlatın)</span>
                  <input value={draft.imageAlt ?? ''} onChange={(e) => set('imageAlt', e.target.value)} placeholder="Ör. Londra’da Westminster Köprüsü ve Big Ben" maxLength={160} />
                </label>
                <p className="adm-muted adm-small">Önerilen: yatay, en az 1400 px genişlik. Görsel otomatik küçültülür ve 800 px liste sürümü oluşturulur.</p>
              </Panel>

              <Panel title="Etiketler ve iç bağlantılar">
                <label className="adm-field">
                  <span>Ek anahtar kelimeler (virgülle ayırın)</span>
                  <input
                    value={(draft.keywords ?? []).join(', ')}
                    onChange={(e) => set('keywords', e.target.value.split(',').map((x) => x.trim()).filter(Boolean))}
                    placeholder="ingiltere dil okulu fiyatları, londra dil okulu"
                  />
                </label>
                <p className="adm-label">İlgili programlar</p>
                <div className="adm-tags">
                  {programs.map((p) => (
                    <Toggle key={p.key} on={draft.programs?.includes(p.key) ?? false} onClick={() => set('programs', toggle(draft.programs ?? [], p.key))}>{p.short}</Toggle>
                  ))}
                </div>
                <p className="adm-label">İlgili ülkeler</p>
                <div className="adm-tags">
                  {countries.map((c) => (
                    <Toggle key={c.slug} on={draft.countries?.includes(c.slug) ?? false} onClick={() => set('countries', toggle(draft.countries ?? [], c.slug))}>{c.name}</Toggle>
                  ))}
                </div>
                <p className="adm-muted adm-small">Seçimler yazının altında ilgili program sayfalarına otomatik bağlantı ve “ilgili yazılar” önerisi oluşturur.</p>
              </Panel>

              <Panel title="Sık sorulan sorular (FAQ şeması)">
                {(draft.faqs ?? []).map((f, i) => (
                  <div key={i} className="adm-faq">
                    <input value={f.q} placeholder="Soru" onChange={(e) => set('faqs', draft.faqs!.map((x, j) => (j === i ? { ...x, q: e.target.value } : x)))} />
                    <textarea rows={3} value={f.a} placeholder="Cevap" onChange={(e) => set('faqs', draft.faqs!.map((x, j) => (j === i ? { ...x, a: e.target.value } : x)))} />
                    <button type="button" className="adm-link adm-bad" onClick={() => set('faqs', draft.faqs!.filter((_, j) => j !== i))}>Kaldır</button>
                  </div>
                ))}
                <button type="button" className="adm-btn adm-btn--sm" onClick={() => set('faqs', [...(draft.faqs ?? []), { q: '', a: '' }])} disabled={(draft.faqs?.length ?? 0) >= 15}>+ Soru ekle</button>
                <p className="adm-muted adm-small">SSS’ler yazının sonunda gösterilir ve Google’a FAQPage yapılandırılmış verisi olarak iletilir.</p>
              </Panel>
            </>
          )}
        </aside>
      </div>

      {dialog === 'link' && <LinkDialog onClose={() => setDialog('')} onInsert={(text, href) => { wrap('[', `](${href})`, text); setDialog('') }} posts={others} />}
      {dialog === 'image' && (
        <ImageDialog
          slug={draft.slug}
          onClose={() => setDialog('')}
          onInsert={(p, alt, caption) => {
            addUploads([p])
            insertBlock(`![${alt.replace(/[[\]]/g, '')}](/${p.path}${caption ? ` "${caption.replace(/"/g, '’')}"` : ''})`)
            setDialog('')
          }}
        />
      )}
      {dialog === 'help' && (
        <Modal title="Yazım kılavuzu" onClose={() => setDialog('')}>
          <table className="adm-table adm-table--help">
            <tbody>{TEMPLATE_HELP.map(([code, label]) => <tr key={code}><td><code>{code.replace(/\\n/g, '\n')}</code></td><td>{label}</td></tr>)}</tbody>
          </table>
          <p className="adm-muted adm-small">Paragraflar arasında bir boş satır bırakın. Sayfa başlığı (H1) otomatik eklenir; metinde “#” tek başına kullanmayın. Panoya kopyaladığınız bir görseli doğrudan metin alanına yapıştırabilirsiniz.</p>
        </Modal>
      )}
    </section>
  )
}

function savedText(live: boolean, slug: string, storage: string): ReactNode {
  if (storage !== 'github') return <>Kaydedildi (yerel mod: dosyalar content/blog klasörüne yazıldı).</>
  if (!live) return <>Taslak kaydedildi. Taslaklar sitede görünmez; hazır olduğunda “Yayınla”ya basın.</>
  return (
    <>
      Kaydedildi. Site yeniden derleniyor; yazı 1–2 dakika içinde <a href={`/blog/${slug}`} target="_blank" rel="noopener noreferrer">/blog/{slug}</a> adresinde yayında olacak.
    </>
  )
}

const toggle = <T,>(list: T[], v: T) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v])

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="adm-panel">
      <p className="adm-panel__h">{title}</p>
      {children}
    </div>
  )
}

function Counter({ n, min, max }: { n: number; min: number; max: number }) {
  const tone = n >= min && n <= max ? 'good' : n === 0 ? 'bad' : 'ok'
  return <b className={`adm-counter adm-counter--${tone}`}>{n} / {min}–{max}</b>
}

function Dot({ s }: { s: CheckStatus }) {
  return <i className={`adm-dot adm-dot--${s}`} aria-label={s === 'good' ? 'İyi' : s === 'ok' ? 'Geliştirilebilir' : 'Sorunlu'} />
}

function Toggle({ on, onClick, children }: { on: boolean; onClick: () => void; children: ReactNode }) {
  return <button type="button" className={`adm-tag ${on ? 'is-on' : ''}`} aria-pressed={on} onClick={onClick}>{children}</button>
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [onClose])
  return (
    <div className="adm-modal" role="dialog" aria-modal="true" aria-label={title} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="adm-modal__box">
        <div className="adm-modal__head"><strong>{title}</strong><button type="button" className="adm-link" onClick={onClose} aria-label="Kapat">✕</button></div>
        {children}
      </div>
    </div>
  )
}

function LinkDialog({ onClose, onInsert, posts }: { onClose: () => void; onInsert: (text: string, href: string) => void; posts: AdminPost[] }) {
  const [text, setText] = useState('')
  const [href, setHref] = useState('')
  const suggestions = useMemo(
    () => [...sitemapPaths().filter((p) => p.index && !p.path.startsWith('/blog/')).map((p) => p.path), ...posts.filter((p) => !p.draft).map((p) => `/blog/${p.slug}`)],
    [posts],
  )
  const valid = /^(\/(?!\/)|https?:\/\/|mailto:|tel:)/.test(href)
  return (
    <Modal title="Bağlantı ekle" onClose={onClose}>
      <label className="adm-field"><span>Bağlantı metni</span><input value={text} onChange={(e) => setText(e.target.value)} placeholder="Seçili metin kullanılır" autoFocus /></label>
      <label className="adm-field">
        <span>Adres</span>
        <input value={href} onChange={(e) => setHref(e.target.value.trim())} list="adm-paths" placeholder="/yurtdisi-dil-okullari/ingiltere veya https://…" />
        <datalist id="adm-paths">{suggestions.map((s) => <option key={s} value={s} />)}</datalist>
      </label>
      <p className="adm-muted adm-small">İç bağlantılar “/” ile başlar ve SEO için en değerli bağlantılardır. Dış bağlantılar yeni sekmede açılır.</p>
      <div className="adm-modal__foot">
        <button type="button" className="adm-btn adm-btn--ghost" onClick={onClose}>Vazgeç</button>
        <button type="button" className="adm-btn adm-btn--primary" disabled={!valid} onClick={() => onInsert(text, href)}>Ekle</button>
      </div>
    </Modal>
  )
}

function ImageDialog({ slug, onClose, onInsert }: { slug: string; onClose: () => void; onInsert: (p: Prepared, alt: string, caption: string) => void }) {
  const [file, setFile] = useState<Prepared | null>(null)
  const [alt, setAlt] = useState('')
  const [caption, setCaption] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  return (
    <Modal title="Görsel ekle" onClose={onClose}>
      <label className="adm-btn adm-btn--block adm-file">
        {busy ? 'Hazırlanıyor…' : file ? 'Başka görsel seç' : 'Bilgisayardan görsel seç'}
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={async (e) => {
            const f = e.target.files?.[0]
            if (!f) return
            setBusy(true)
            setError('')
            try {
              setFile(await prepareInline(f, slug))
            } catch (err) {
              setError((err as Error).message)
            } finally {
              setBusy(false)
            }
          }}
        />
      </label>
      {file && <img className="adm-cover" src={file.url} alt="" />}
      {file && <p className="adm-muted adm-small">{file.width}×{file.height} px · {Math.round(file.bytes / 1024)} KB (web için optimize edildi)</p>}
      {error && <p className="adm-alert adm-alert--bad">{error}</p>}
      <label className="adm-field"><span>Alt metin (zorunlu, SEO ve erişilebilirlik için)</span><input value={alt} onChange={(e) => setAlt(e.target.value)} placeholder="Ör. Brighton sahilinde ders sonrası öğrenciler" /></label>
      <label className="adm-field"><span>Açıklama (isteğe bağlı, görselin altında görünür)</span><input value={caption} onChange={(e) => setCaption(e.target.value)} /></label>
      <div className="adm-modal__foot">
        <button type="button" className="adm-btn adm-btn--ghost" onClick={onClose}>Vazgeç</button>
        <button type="button" className="adm-btn adm-btn--primary" disabled={!file || alt.trim().length < 3} onClick={() => file && onInsert(file, alt.trim(), caption.trim())}>Metne ekle</button>
      </div>
    </Modal>
  )
}
