// /api/admin/posts
//   GET                 → tüm yazıların listesi (taslaklar dahil)
//   GET ?slug=x         → tek yazı (meta + markdown + sürüm kimliği)
//   PUT  { post, uploads, originalSlug, baseOid } → kaydet (yeni / güncelle / adres değişikliği)
//   DELETE ?slug=x      → yazıyı sil (yayındaysa /blog'a 301 yönlendirme eklenir)
import { send, readJson, query, handle, HttpError } from '../_lib/http.js'
import { requireAuth } from '../_lib/auth.js'
import { getStore, paths } from '../_lib/store.js'
import { normalizePost, normalizeUploads, SLUG_RE } from '../_lib/posts.js'

/**
 * vercel.json yönlendirmelerini günceller: `add` ile kalıcı (301) yönlendirme ekler (eski adresin SEO değeri korunur),
 * `clear` ile artık gerçek bir yazıya ait olan adresteki eski yönlendirmeyi kaldırır.
 */
async function redirectsUpdate(store, { add, clear }) {
  const text = await store.readText('vercel.json')
  if (!text) return null
  const cfg = JSON.parse(text)
  const before = JSON.stringify(cfg.redirects ?? [])
  let redirects = (cfg.redirects ?? []).filter((r) => r.source !== clear)
  if (add) {
    const [from, to] = add
    redirects = redirects.filter((r) => r.source !== from)
    // Zincirleri tek adıma indir: A→B varken B→C eklenirse A→C olur
    for (const r of redirects) if (r.destination === from) r.destination = to
    redirects.push({ source: from, destination: to, permanent: true })
  }
  if (JSON.stringify(redirects) === before) return null
  cfg.redirects = redirects
  return { path: 'vercel.json', content: JSON.stringify(cfg, null, 2) + '\n' }
}

export default handle(async (req, res) => {
  requireAuth(req)
  const store = getStore()
  const q = query(req)

  if (req.method === 'GET') {
    const slug = q.get('slug')
    if (slug) {
      if (!SLUG_RE.test(slug)) throw new HttpError(400, 'Geçersiz adres.')
      const post = await store.read(slug)
      if (!post) throw new HttpError(404, 'Yazı bulunamadı.')
      return send(res, 200, post)
    }
    const items = await store.listMeta()
    items.sort((a, b) => (b.meta.updated ?? b.meta.date).localeCompare(a.meta.updated ?? a.meta.date))
    return send(res, 200, { storage: store.kind, posts: items.map((i) => ({ ...i.meta, oid: i.oid })) })
  }

  if (req.method === 'PUT') {
    const input = await readJson(req)
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
      ...uploads.map((u) => ({ path: u.path, content: u.buffer })),
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
    return send(res, 200, { ok: true, commit: result.sha, post: saved })
  }

  if (req.method === 'DELETE') {
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
    return send(res, 200, { ok: true, commit: result.sha })
  }

  throw new HttpError(405, 'Desteklenmeyen istek.')
})
