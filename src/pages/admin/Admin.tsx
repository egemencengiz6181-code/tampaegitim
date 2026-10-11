// Tampa blog yönetim paneli (/admin). Yalnızca blog yazılarını listeler, düzenler, yeni yazı ekler ve siler.
// Kayıtlar /api/admin üzerinden GitHub'a yazılır; Vercel siteyi yeniden derler ve yazı statik, SEO uyumlu sayfa olarak yayınlanır.
import { useCallback, useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Seo } from '../../components/ui'
import { api, ApiError, type AdminPost, type DeployState, type Me } from './api'
import { Editor } from './Editor'
import { formatDate, postCategories } from '../../data/blog'
import '../../styles/admin.css'

type View = { name: 'list' } | { name: 'new' } | { name: 'edit'; slug: string }

function viewFromPath(pathname: string): View {
  const m = pathname.match(/^\/admin\/duzenle\/([a-z0-9-]+)\/?$/)
  if (m) return { name: 'edit', slug: m[1] }
  if (/^\/admin\/yeni\/?$/.test(pathname)) return { name: 'new' }
  return { name: 'list' }
}

export default function AdminApp() {
  const [me, setMe] = useState<Me | null>(null)
  const [error, setError] = useState('')
  const { pathname } = useLocation()
  const view = viewFromPath(pathname)
  const [deploy, setDeploy] = useState<DeployState | null>(null)
  const [watching, setWatching] = useState(0)

  useEffect(() => {
    api.me().then(setMe).catch((e: Error) => setError(e.message))
  }, [])

  // Kayıttan sonra Vercel dağıtımını izle (GitHub Deployments API)
  useEffect(() => {
    if (!watching || me?.storage !== 'github') return
    let stop = false
    let tries = 0
    const tick = async () => {
      try {
        const s = await api.status()
        if (stop) return
        setDeploy(s)
        if (['success', 'failure', 'error'].includes(s.state) || ++tries > 60) return
      } catch {
        /* geçici hata: tekrar dene */
      }
      if (!stop) setTimeout(tick, 8000)
    }
    const t = setTimeout(tick, 4000)
    return () => {
      stop = true
      clearTimeout(t)
    }
  }, [watching, me?.storage])

  const onSaved = useCallback(() => {
    setDeploy({ sha: '', state: 'pending' })
    setWatching((n) => n + 1)
  }, [])

  return (
    <div className="adm">
      <Seo title="Blog Yönetimi" description="Tampa Yurtdışı Eğitim blog yönetim paneli." path="/admin" noindex />
      {error ? (
        <Centered><p className="adm-alert adm-alert--bad">{error}</p></Centered>
      ) : !me ? (
        <Centered><p className="adm-muted">Yönetim paneli yükleniyor…</p></Centered>
      ) : !me.configured || me.storage === 'missing' ? (
        <SetupNeeded me={me} />
      ) : !me.authed ? (
        <Login onDone={() => api.me().then(setMe)} />
      ) : (
        <>
          <TopBar me={me} deploy={deploy} onLogout={() => api.logout().finally(() => setMe({ ...me, authed: false }))} />
          <main className="adm-main">
            {view.name === 'list' && <PostList />}
            {view.name === 'new' && <Editor key="new" slug={null} storage={me.storage} onSaved={onSaved} />}
            {view.name === 'edit' && <Editor key={view.slug} slug={view.slug} storage={me.storage} onSaved={onSaved} />}
          </main>
        </>
      )}
    </div>
  )
}

function Centered({ children }: { children: ReactNode }) {
  return <div className="adm-center">{children}</div>
}

function SetupNeeded({ me }: { me: Me }) {
  return (
    <Centered>
      <div className="adm-card adm-card--narrow">
        <img src="/img/brand/logo-wordmark.png" alt="Tampa Yurtdışı Eğitim" width="98" height="52" />
        <h1>Kurulum gerekli</h1>
        <p>Blog yönetim panelinin çalışması için Vercel’de şu ortam değişkenleri tanımlanmalı:</p>
        <ul className="adm-list">
          <li className={me.configured ? 'is-ok' : ''}><code>ADMIN_PASSWORD</code> – panel şifresi</li>
          <li><code>ADMIN_SECRET</code> – oturum imzası için rastgele uzun değer</li>
          <li className={me.storage === 'github' ? 'is-ok' : ''}><code>GITHUB_TOKEN</code> – depoya yazma izni olan anahtar</li>
        </ul>
        <p className="adm-muted">Adım adım kurulum: depodaki <code>docs/ADMIN.md</code> dosyası.</p>
      </div>
    </Centered>
  )
}

function Login({ onDone }: { onDone: () => void }) {
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      await api.login(password)
      onDone()
    } catch (err) {
      setError((err as Error).message)
      setBusy(false)
    }
  }
  return (
    <Centered>
      <form className="adm-card adm-card--narrow adm-login" onSubmit={submit}>
        <img src="/img/brand/logo-wordmark.png" alt="Tampa Yurtdışı Eğitim" width="98" height="52" />
        <h1>Blog Yönetimi</h1>
        <p className="adm-muted">Devam etmek için yönetici şifresini girin.</p>
        <label className="adm-field">
          <span>Şifre</span>
          <input type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} autoFocus required />
        </label>
        {error && <p className="adm-alert adm-alert--bad" role="alert">{error}</p>}
        <button className="adm-btn adm-btn--primary adm-btn--block" disabled={busy || !password}>{busy ? 'Giriş yapılıyor…' : 'Giriş yap'}</button>
        <Link to="/" className="adm-link">← Siteye dön</Link>
      </form>
    </Centered>
  )
}

const deployLabel: Record<string, string> = {
  pending: 'Yayına hazırlanıyor…',
  queued: 'Yayın sırada…',
  in_progress: 'Site yeniden derleniyor…',
  success: 'Değişiklikler yayında',
  failure: 'Yayın başarısız',
  error: 'Yayın başarısız',
  inactive: 'Yayında',
  local: 'Yerel mod',
}

function TopBar({ me, deploy, onLogout }: { me: Me; deploy: DeployState | null; onLogout: () => void }) {
  return (
    <header className="adm-top">
      <Link to="/admin" className="adm-brand">
        <img src="/img/brand/logo-wordmark.png" alt="" width="68" height="36" />
        <span>Blog Yönetimi</span>
      </Link>
      <nav className="adm-nav">
        <Link to="/admin">Yazılar</Link>
        <Link to="/admin/yeni" className="adm-btn adm-btn--primary adm-btn--sm">+ Yeni yazı</Link>
      </nav>
      <div className="adm-top__right">
        {me.storage === 'local' && <span className="adm-chip adm-chip--warn" title="GITHUB_TOKEN tanımlı değil; kayıtlar doğrudan proje klasörüne yazılır.">Yerel mod</span>}
        {deploy && me.storage === 'github' && (
          <span className={`adm-chip adm-chip--${deploy.state === 'success' ? 'good' : deploy.state === 'failure' || deploy.state === 'error' ? 'bad' : 'busy'}`} role="status">
            {deployLabel[deploy.state] ?? deploy.state}
          </span>
        )}
        <a href="/blog" target="_blank" rel="noopener noreferrer" className="adm-link">Blogu görüntüle ↗</a>
        <button type="button" className="adm-btn adm-btn--ghost adm-btn--sm" onClick={onLogout}>Çıkış</button>
      </div>
    </header>
  )
}

/* ---------------- Yazı listesi ---------------- */
function PostList() {
  const [posts, setPosts] = useState<AdminPost[] | null>(null)
  const [error, setError] = useState('')
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('')
  const [status, setStatus] = useState<'all' | 'live' | 'draft'>('all')
  const nav = useNavigate()

  const load = useCallback(() => {
    setError('')
    api.list().then((r) => setPosts(r.posts)).catch((e: ApiError) => setError(e.message))
  }, [])
  useEffect(load, [load])

  const filtered = useMemo(() => {
    const needle = q.toLocaleLowerCase('tr').trim()
    return (posts ?? []).filter(
      (p) =>
        (!needle || `${p.title} ${p.slug} ${p.focusKeyword ?? ''}`.toLocaleLowerCase('tr').includes(needle)) &&
        (!cat || p.category === cat) &&
        (status === 'all' || (status === 'draft' ? p.draft : !p.draft)),
    )
  }, [posts, q, cat, status])

  const live = posts?.filter((p) => !p.draft).length ?? 0
  return (
    <section className="adm-wrap">
      <div className="adm-head">
        <div>
          <h1>Blog yazıları</h1>
          <p className="adm-muted">{posts ? `${posts.length} yazı · ${live} yayında · ${posts.length - live} taslak` : 'Yükleniyor…'}</p>
        </div>
        <Link to="/admin/yeni" className="adm-btn adm-btn--primary">+ Yeni yazı</Link>
      </div>
      <div className="adm-filters">
        <input type="search" placeholder="Başlık, adres veya anahtar kelime ara…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Yazı ara" />
        <select value={cat} onChange={(e) => setCat(e.target.value)} aria-label="Kategori">
          <option value="">Tüm kategoriler</option>
          {postCategories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <div className="adm-seg" role="group" aria-label="Durum">
          {(['all', 'live', 'draft'] as const).map((s) => (
            <button key={s} type="button" className={status === s ? 'is-on' : ''} aria-pressed={status === s} onClick={() => setStatus(s)}>
              {s === 'all' ? 'Tümü' : s === 'live' ? 'Yayında' : 'Taslak'}
            </button>
          ))}
        </div>
      </div>
      {error && <p className="adm-alert adm-alert--bad">{error} <button type="button" className="adm-link" onClick={load}>Tekrar dene</button></p>}
      {posts && (
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr><th>Başlık</th><th>Kategori</th><th>Durum</th><th>Güncelleme</th><th>Uzunluk</th><th aria-label="İşlemler" /></tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.slug} onClick={() => nav(`/admin/duzenle/${p.slug}`)} className="is-click">
                  <td>
                    <strong>{p.title}</strong>
                    <small>/blog/{p.slug}{p.focusKeyword ? ` · 🔑 ${p.focusKeyword}` : ''}</small>
                  </td>
                  <td>{p.category}</td>
                  <td><span className={`adm-chip adm-chip--${p.draft ? 'warn' : 'good'}`}>{p.draft ? 'Taslak' : 'Yayında'}</span></td>
                  <td>{formatDate(p.updated ?? p.date)}</td>
                  <td>{p.words ? `${p.words} kelime · ${p.readMin} dk` : '—'}</td>
                  <td className="adm-actions" onClick={(e) => e.stopPropagation()}>
                    <Link to={`/admin/duzenle/${p.slug}`} className="adm-btn adm-btn--sm">Düzenle</Link>
                    {!p.draft && <a href={`/blog/${p.slug}`} target="_blank" rel="noopener noreferrer" className="adm-btn adm-btn--ghost adm-btn--sm">Görüntüle ↗</a>}
                  </td>
                </tr>
              ))}
              {!filtered.length && (
                <tr><td colSpan={6} className="adm-empty">Aramanızla eşleşen yazı yok.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
