import { programs, countriesFor } from '../data/programs'
import { countries } from '../data/countries'
import { packages } from '../data/packages'
import { services } from '../data/services'
import { guides } from '../data/guides'
import { documents } from '../data/documents'
import { posts, postCategories, categorySlug } from '../data/blog'
import { landings } from '../data/landings'
import { onlinePrograms } from '../data/online'
import { residences } from '../data/accommodation'
import { ukPriceCities } from '../data/schoolPrices'

export type SitePath = { path: string; priority: number; changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly'; lastmod?: string; index?: boolean }

/** Prerender ve sitemap için tüm sayfa listesi. */
export function sitemapPaths(): SitePath[] {
  const p = (path: string, priority: number, changefreq: SitePath['changefreq'] = 'monthly', lastmod?: string): SitePath => ({ path, priority, changefreq, lastmod, index: true })
  return [
    p('/', 1, 'weekly'),
    p('/yurtdisi-egitim', 0.9, 'weekly'),
    ...programs.map((pr) => p(`/${pr.slug}`, 0.9, 'weekly')),
    ...programs.flatMap((pr) => countriesFor(pr.key).map((c) => p(`/${pr.slug}/${c.slug}`, c.slug === 'ingiltere' ? 0.9 : 0.8, 'monthly'))),
    p('/ulkeler', 0.8),
    ...countries.map((c) => p(`/ulkeler/${c.slug}`, c.slug === 'ingiltere' ? 0.9 : 0.7)),
    p('/her-sey-dahil-paketler', 0.8, 'weekly'),
    ...packages.map((pk) => p(`/her-sey-dahil-paketler/${pk.slug}`, 0.8, 'weekly')),
    p('/online-egitim', 0.8),
    ...onlinePrograms.map((o) => p(`/online-egitim/${o.slug}`, 0.8)),
    p('/ogrenci-konaklama', 0.8, 'weekly'),
    ...residences.map((r) => p(`/ogrenci-konaklama/${r.slug}`, 0.6, 'weekly')),
    p('/ingiltere-dil-okullari-fiyat-listesi', 0.8),
    ...ukPriceCities.filter((c) => c.schools.length).map((c) => p(`/ingiltere-dil-okullari-fiyat-listesi/${c.slug}`, 0.7)),
    p('/hizmetler', 0.7),
    ...services.map((s) => p(s.path, 0.7)),
    p('/tampa-akademi', 0.6),
    p('/blog', 0.8, 'daily', posts[0]?.updated),
    ...postCategories.filter((c) => posts.some((po) => po.category === c)).map((c) => p(`/blog/kategori/${categorySlug(c)}`, 0.6, 'weekly')),
    ...posts.map((po) => p(`/blog/${po.slug}`, 0.7, 'monthly', po.updated)),
    p('/bilgi-bankasi', 0.7, 'weekly'),
    ...guides.map((g) => p(`/bilgi-bankasi/${g.slug}`, 0.6)),
    p('/sss', 0.6),
    p('/kaynaklar', 0.5),
    ...documents.map((d) => p(`/kaynaklar/${d.slug}`, 0.5)),
    ...['/hakkimizda', '/ekibimiz', '/ofislerimiz', '/musteri-yorumlari', '/kariyer', '/iletisim', '/basvuru'].map((x) => p(x, 0.6)),
    ...['/site-haritasi', '/kvkk', '/cerez-politikasi'].map((x) => p(x, 0.2, 'yearly')),
    // İndekslenmeyen ama prerender edilen sayfalar
    ...landings.map((l) => ({ path: `/lp/${l.slug}`, priority: 0, changefreq: 'monthly' as const, index: false })),
    { path: '/tesekkurler', priority: 0, changefreq: 'yearly', index: false },
    // Yönetim paneli kabuğu (istemcide açılır; noindex)
    { path: '/admin', priority: 0, changefreq: 'yearly', index: false },
    ...ukPriceCities.filter((c) => !c.schools.length).map((c) => ({ path: `/ingiltere-dil-okullari-fiyat-listesi/${c.slug}`, priority: 0, changefreq: 'monthly' as const, index: false })),
  ]
}

/** RSS beslemesi için yayındaki blog yazıları (en yeni önce). */
export function blogFeed() {
  return posts.map((po) => ({ slug: po.slug, title: po.title, description: po.excerpt, date: po.date, updated: po.updated, category: po.category, image: po.image }))
}
