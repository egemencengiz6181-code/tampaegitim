// /api/admin/posts
//   GET                 → tüm yazıların listesi (taslaklar dahil)
//   GET ?slug=x         → tek yazı (meta + markdown + sürüm kimliği)
//   PUT  { post, uploads, originalSlug, baseOid } → kaydet (yeni / güncelle / adres değişikliği)
//   DELETE ?slug=x      → yazıyı sil (yayındaysa /blog'a 301 yönlendirme eklenir)
// api/admin/posts.js'in Cloudflare Pages Functions portu.
import { send, readJson, query, handle, HttpError } from '../../_lib/http.js'
import { requireAuth } from '../../_lib/auth.js'
import { getStore, paths } from '../../_lib/store.js'
import { normalizePost, normalizeUploads, SLUG_RE } from '../../_lib/posts.js'

const REDIRECTS_FILE = 'public/_redirects'

/**
 * public/_redirects dosyasını günceller: `add` ile kalıcı (301) yönlendirme ekler (eski adresin SEO
 * değeri korunur), `clear` ile artık gerçek bir yazıya ait olan adresteki eski yönlendirmeyi kaldırır.
 * Dosya satır biçimi: `<kaynak>  <hedef>  301` (yorum ve diğer kurallar korunur).
 */
async function redirectsUpdate(store, { add, clear }) {
  const text = await store.readText(REDIRECTS_FILE)
  if (text == null) return null
  const lines = text.split('\n').map((raw) => {
    const t = raw.trim()
    if (!t || t.startsWith('#')) return { raw }
    const [src, dest, code] = t.split(/\s+/)
    return { raw, src, dest, code }
  })
  let out = lines.filter((r) => r.src !== clear)
  if (add) {
    const [from, to] = add
    out = out.filter((r) => r.src !== from)
    // Zincirleri tek adıma indir: A→B varken B→C eklenirse A→C olur
    for (const r of out) {
      if (r.dest === from) {
        r.dest = to
        r.raw = `${r.src}  ${to}  ${r.code ?? '301'}`
      }
    }
    out.push({ raw: `${from}  ${to}  301` })
  }
  const next = out.map((r) => r.raw).join('\n')
  if (next === text) return null
  return { path: REDIRECTS_FILE, content: next }
}

export const onRequest = handle(async ({ request, env }) => {
  await requireAuth(request, env)
  const store = getStore(env)
  const q = query(request)

  if (request.method === 'GET') {
    const slug = q.get('slug')
    if (slug) {
      if (!SLUG_RE.test(slug)) throw new HttpError(400, 'Geçersiz adres.')
      const post = await store.read(slug)
      if (!post) throw new HttpError(404, 'Yazı bulunamadı.')
      return send(200, post)
    }
    const items = await store.listMeta()
    items.sort((a, b) => (b.meta.updated ?? b.meta.date).localeCompare(a.meta.updated ?? a.meta.date))
    return send(200, { storage: store.kind, posts: items.map((i) => ({ ...i.meta, oid: i.oid })) })
  }

  if (request.method === 'PUT') {
    const input = await readJson(request)
    const { meta, body } = normalizePost(input.post)
    const uploads = normalizeUploads(input.uploads)
    const original = typeof input.originalSlug === 'string' && SLUG_RE.test(input.originalSlug) ? input.originalSlug : null
    const isNew = !original

    const existing = await store.read(meta.slug)
    if (existing && (isNew || original !== meta.slug)) throw new HttpError(409, 'Bu adresle (slug) başka bir yazı zaten var. Farklı bir adres seçin.')

    let previous = null
    if (!isNew) {
      previous = await store.read(original)
      if (!previous) throw new HttpError(404, 'Düzenlenen yazı depoda bulunamadı (silinmiş olabilir).')
      if (input.baseOid && previous.oid !== input.baseOid) {
        throw new HttpError(409, 'Bu yazı siz düzenlerken başka bir yerde değiştirildi. Sayfayı yenileyip değişikliklerinizi tekrar uygulayın.')
      }
      // İlk yayın tarihi korunur; yalnızca açıkça değiştirilirse güncellenir
      if (!meta.date) meta.date = previous.meta.date
    }

    const write = [
      { path: paths.json(meta.slug), content: JSON.stringify(meta, null, 2) + '\n' },
      { path: paths.md(meta.slug), content: body },
      ...uploads.map((u) => ({ path: u.path, content: u.bytes })),
    ]
    const remove = []
    const moved = !isNew && original !== meta.slug
    if (moved) remove.push(paths.json(original), paths.md(original))
    const redirects = await redirectsUpdate(store, {
      clear: `/blog/${meta.slug}`,
      add: moved && !previous.meta.draft ? [`/blog/${original}`, `/blog/${meta.slug}`] : null,
    })
    if (redirects) write.push(redirects)

    const verb = isNew ? 'Yeni yazı' : original !== meta.slug ? 'Yazı taşındı' : 'Yazı güncellendi'
    const result = await store.commit(`Blog: ${verb} – ${meta.title}${meta.draft ? ' (taslak)' : ''}`, { write, remove })
    const saved = await store.read(meta.slug)
    return send(200, { ok: true, commit: result.sha, post: saved })
  }

  if (request.method === 'DELETE') {
    const slug = q.get('slug')
    if (!slug || !SLUG_RE.test(slug)) throw new HttpError(400, 'Geçersiz adres.')
    const post = await store.read(slug)
    if (!post) throw new HttpError(404, 'Yazı bulunamadı.')
    const write = []
    if (!post.meta.draft) {
      const r = await redirectsUpdate(store, { add: [`/blog/${slug}`, '/blog'] })
      if (r) write.push(r)
    }
    const result = await store.commit(`Blog: Yazı silindi – ${post.meta.title}`, { write, remove: [paths.json(slug), paths.md(slug)] })
    return send(200, { ok: true, commit: result.sha })
  }

  throw new HttpError(405, 'Desteklenmeyen istek.')
})
