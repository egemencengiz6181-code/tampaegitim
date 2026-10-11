// Blog yazıları content/blog/ klasöründen okunur: her yazı için <slug>.json (bilgiler) + <slug>.md (metin).
// Bu dosyalar /admin panelinden düzenlenir; panel değişiklikleri GitHub'a kaydeder, site yeniden derlenir.
// Buradaki meta veriler menü, liste, sitemap ve RSS için; yazı metinleri yalnızca yazı sayfasında yüklenir.
import type { ProgramKey } from './countries'
import config from '../../content/blog-config.json'
import { slugify } from '../lib/slug'

export type PostCategory = 'Yaz Okulu' | 'Dil Okulu' | 'Üniversite' | 'Yüksek Lisans' | 'Lise' | 'Work and Study' | 'Vize & Başvuru' | 'Yaşam' | 'Genel'

export type Faq = { q: string; a: string }

/** content/blog/<slug>.json dosyasının yapısı (admin paneli de bu yapıyı yazar). */
export type PostFile = {
  slug: string
  title: string
  metaTitle?: string
  description: string
  category: PostCategory
  date: string
  updated?: string
  image: string
  imageAlt?: string
  focusKeyword?: string
  keywords?: string[]
  countries?: string[]
  programs?: ProgramKey[]
  faqs?: Faq[]
  draft?: boolean
  readMin?: number
  words?: number
}

export type Post = {
  slug: string
  title: string
  /** Arama sonuçlarında görünen başlık (yoksa title kullanılır) */
  metaTitle?: string
  category: PostCategory
  date: string
  updated: string
  image: string
  imageAlt: string
  excerpt: string
  /** İlgili ülke slug'ları ve program anahtarları (iç linkleme için) */
  countries?: string[]
  programs?: ProgramKey[]
  keywords?: string[]
  faqs: Faq[]
  readMin: number
}

const files = import.meta.glob<PostFile>('../../content/blog/*.json', { eager: true, import: 'default' })

export const posts: Post[] = Object.values(files)
  .filter((f) => !f.draft)
  .map((f) => ({
    slug: f.slug,
    title: f.title,
    metaTitle: f.metaTitle || undefined,
    category: f.category,
    date: f.date,
    updated: f.updated && f.updated > f.date ? f.updated : f.date,
    image: f.image,
    imageAlt: f.imageAlt || f.title,
    excerpt: f.description,
    countries: f.countries?.length ? f.countries : undefined,
    programs: f.programs?.length ? f.programs : undefined,
    keywords: f.keywords?.length ? f.keywords : undefined,
    faqs: f.faqs ?? [],
    readMin: f.readMin ?? 5,
  }))
  .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title, 'tr'))

export const postBySlug = Object.fromEntries(posts.map((p) => [p.slug, p])) as Record<string, Post>

export const postCategories = config.categories as PostCategory[]

export const categorySlug = (c: string) => slugify(c)

export const postsForCountry = (slug: string) => posts.filter((p) => p.countries?.includes(slug))
export const postsForProgram = (k: ProgramKey) => posts.filter((p) => p.programs?.includes(k))

export const formatDate = (iso: string) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
