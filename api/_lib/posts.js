// Blog yazısı doğrulama ve normalleştirme. Sunucu, istemciden gelen hiçbir veriye körü körüne güvenmez.
import fs from 'node:fs'
import { HttpError } from './http.js'

// Kategori listesi site ile ortak dosyadan okunur (vercel.json → functions.includeFiles)
const config = JSON.parse(fs.readFileSync(new URL('../../content/blog-config.json', import.meta.url), 'utf8'))

export const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
const PROGRAMS = ['dil', 'yaz', 'lise', 'lisans', 'yuksek-lisans', 'work-study']
const IMG_PATH_RE = /^\/img\/[a-z0-9/_-]+\.(jpe?g|png|webp)$/i
export const UPLOAD_RE = /^img\/blog\/[a-z0-9-]+\.(jpg|jpeg|png|webp)$/

const str = (v, max, field, { min = 0, required = false } = {}) => {
  const s = typeof v === 'string' ? v.replace(/\s+/g, ' ').trim() : ''
  if (required && !s) throw new HttpError(422, `${field} zorunludur.`)
  if (s && s.length < min) throw new HttpError(422, `${field} en az ${min} karakter olmalı.`)
  if (s.length > max) throw new HttpError(422, `${field} en fazla ${max} karakter olabilir.`)
  return s
}

const list = (v, max, re, field) => {
  if (v == null) return []
  if (!Array.isArray(v)) throw new HttpError(422, `${field} geçersiz.`)
  const out = [...new Set(v.map((x) => String(x).trim()).filter(Boolean))]
  if (out.length > max) throw new HttpError(422, `${field} en fazla ${max} öğe içerebilir.`)
  if (re && out.some((x) => !re.test(x))) throw new HttpError(422, `${field} geçersiz değer içeriyor.`)
  return out
}

export function wordsOf(md) {
  const text = md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#*>|]/g, ' ')
  return (text.match(/[\p{L}\p{N}’'-]+/gu) ?? []).filter((w) => !/^-+$/.test(w)).length
}

const today = () => new Date().toISOString().slice(0, 10)

/** İstemciden gelen yazıyı doğrular; dosyaya yazılacak meta ve markdown'ı döner. */
export function normalizePost(input) {
  if (!input || typeof input !== 'object') throw new HttpError(400, 'Geçersiz yazı verisi.')
  const slug = str(input.slug, 90, 'Adres (slug)', { required: true })
  if (!SLUG_RE.test(slug)) throw new HttpError(422, 'Adres yalnızca küçük harf, rakam ve tire içerebilir (ör. ingiltere-yaz-okulu-rehberi).')
  const title = str(input.title, 140, 'Başlık', { required: true, min: 10 })
  const description = str(input.description, 320, 'Meta açıklama', { required: true, min: 50 })
  const category = str(input.category, 40, 'Kategori', { required: true })
  if (!config.categories.includes(category)) throw new HttpError(422, 'Geçersiz kategori.')
  const date = str(input.date, 10, 'Yayın tarihi', { required: true })
  if (!DATE_RE.test(date) || Number.isNaN(Date.parse(date))) throw new HttpError(422, 'Yayın tarihi YYYY-AA-GG biçiminde olmalı.')
  const image = str(input.image, 200, 'Kapak görseli', { required: true })
  if (!IMG_PATH_RE.test(image) || image.includes('..')) throw new HttpError(422, 'Kapak görseli geçersiz.')
  const body = typeof input.body === 'string' ? input.body.replace(/\r\n?/g, '\n').trim() + '\n' : ''
  if (body.trim().length < 20) throw new HttpError(422, 'Yazı metni boş olamaz.')
  if (body.length > 150_000) throw new HttpError(422, 'Yazı metni çok uzun (en fazla 150.000 karakter).')
  if (/<\s*(script|iframe|object|embed|style)\b/i.test(body)) throw new HttpError(422, 'Yazı metninde HTML/script kullanılamaz.')

  const faqs = Array.isArray(input.faqs)
    ? input.faqs
        .map((f) => ({ q: str(f?.q, 200, 'SSS sorusu'), a: str(f?.a, 1200, 'SSS cevabı') }))
        .filter((f) => f.q && f.a)
    : []
  if (faqs.length > 15) throw new HttpError(422, 'En fazla 15 SSS eklenebilir.')

  const words = wordsOf(body)
  const meta = {
    slug,
    title,
    metaTitle: str(input.metaTitle, 90, 'SEO başlığı'),
    description,
    category,
    date,
    updated: today() > date ? today() : date,
    image,
    imageAlt: str(input.imageAlt, 160, 'Görsel alt metni') || title,
    focusKeyword: str(input.focusKeyword, 80, 'Odak anahtar kelime').toLocaleLowerCase('tr'),
    keywords: list(input.keywords, 12, null, 'Anahtar kelimeler').map((k) => k.toLocaleLowerCase('tr').slice(0, 80)),
    countries: list(input.countries, 10, SLUG_RE, 'Ülkeler'),
    programs: list(input.programs, 6, null, 'Programlar').filter((p) => PROGRAMS.includes(p)),
    faqs,
    draft: Boolean(input.draft),
    readMin: Math.max(1, Math.round(words / 200)),
    words,
  }
  return { meta, body }
}

/** Yüklenen görselleri doğrular: yol, boyut ve dosya imzası (magic bytes). */
export function normalizeUploads(uploads) {
  if (uploads == null) return []
  if (!Array.isArray(uploads) || uploads.length > 12) throw new HttpError(422, 'Tek seferde en fazla 12 görsel yüklenebilir.')
  let total = 0
  return uploads.map((u) => {
    const path = String(u?.path ?? '')
    if (!UPLOAD_RE.test(path)) throw new HttpError(422, 'Görsel adı geçersiz.')
    const buf = Buffer.from(String(u?.data ?? ''), 'base64')
    total += buf.length
    if (!buf.length || buf.length > 2_500_000) throw new HttpError(422, 'Görsel boyutu en fazla 2,5 MB olabilir.')
    if (total > 3_800_000) throw new HttpError(413, 'Toplam görsel boyutu çok büyük; görselleri ayrı kayıtlarda yükleyin.')
    const jpg = buf[0] === 0xff && buf[1] === 0xd8
    const png = buf.subarray(0, 4).toString('hex') === '89504e47'
    const webp = buf.subarray(0, 4).toString() === 'RIFF' && buf.subarray(8, 12).toString() === 'WEBP'
    if (!jpg && !png && !webp) throw new HttpError(422, 'Yalnızca JPG, PNG veya WEBP görseller yüklenebilir.')
    return { path: `public/${path}`, buffer: buf }
  })
}
