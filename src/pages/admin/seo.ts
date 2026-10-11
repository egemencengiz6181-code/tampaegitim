// Yazı için SEO analizi: Google'ın içerik yönergeleri ve yaygın SEO kontrol listeleri esas alınmıştır.
import { parseMarkdown, plainText, stripInline, wordCount, links, type Block } from '../../lib/markdown'
import { slugify } from '../../lib/slug'
import { brandTitle } from '../../components/ui'
import type { PostFile } from '../../data/blog'

export type CheckStatus = 'good' | 'ok' | 'bad'
export type Check = { id: string; group: 'Anahtar kelime' | 'Başlık ve açıklama' | 'İçerik' | 'Bağlantı ve görsel' | 'Yapı'; status: CheckStatus; label: string; tip?: string }

export const SEO_LIMITS = { titleMin: 35, titleMax: 60, descMin: 120, descMax: 160 }

const norm = (s: string) => s.toLocaleLowerCase('tr').replace(/[’']/g, '').replace(/\s+/g, ' ').trim()

/** Odak kelimenin metinde geçip geçmediği (Türkçe ekleri tolere eder: "yaz okulu" → "yaz okulları"). */
function contains(haystack: string, keyword: string) {
  const h = norm(haystack)
  const words = norm(keyword).split(' ').filter(Boolean)
  if (!words.length) return false
  if (h.includes(words.join(' '))) return true
  // Her kelimenin kökü (ilk 4+ harf) sırayla geçiyorsa kabul et
  const stems = words.map((w) => w.slice(0, Math.max(4, Math.ceil(w.length * 0.7))))
  const re = new RegExp(stems.map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\p{L}*').join('\\s+'), 'u')
  return re.test(h)
}

function occurrences(text: string, keyword: string) {
  const words = norm(keyword).split(' ').filter(Boolean)
  if (!words.length) return 0
  const stems = words.map((w) => w.slice(0, Math.max(4, Math.ceil(w.length * 0.7))).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\p{L}*')
  return (norm(text).match(new RegExp(stems.join('\\s+'), 'gu')) ?? []).length
}

export function seoTitleOf(p: Pick<PostFile, 'title' | 'metaTitle'>) {
  const t = (p.metaTitle || p.title || '').trim()
  return t ? brandTitle(t) : ''
}

export function analyze(p: PostFile & { body: string }, others: { slug: string; title: string; focusKeyword?: string }[] = []) {
  const blocks = parseMarkdown(p.body)
  const text = plainText(blocks)
  const words = wordCount(text)
  const kw = (p.focusKeyword ?? '').trim()
  const seoTitle = seoTitleOf(p)
  const desc = (p.description ?? '').trim()
  type Head = Extract<Block, { type: 'h2' | 'h3' }>
  type Para = Extract<Block, { type: 'p' }>
  const subheads = blocks.filter((b): b is Head => b.type === 'h2' || b.type === 'h3')
  const h2 = subheads.filter((b) => b.type === 'h2')
  const paragraphs = blocks.filter((b): b is Para => b.type === 'p')
  const firstPara = paragraphs[0] ? stripInline(paragraphs[0].text) : ''
  const imgs = blocks.filter((b): b is Extract<Block, { type: 'img' }> => b.type === 'img')
  const l = links(p.body)
  const checks: Check[] = []
  const add = (c: Check) => checks.push(c)

  // ---- Anahtar kelime
  add({ id: 'kw', group: 'Anahtar kelime', status: kw ? 'good' : 'bad', label: kw ? `Odak anahtar kelime: “${kw}”` : 'Odak anahtar kelime belirlenmedi', tip: 'İnsanların Google’da yazacağı ana ifadeyi seçin (ör. “ingiltere yaz okulu”).' })
  if (kw) {
    add({ id: 'kw-title', group: 'Anahtar kelime', status: contains(seoTitle, kw) ? (norm(seoTitle).startsWith(norm(kw).split(' ')[0]) ? 'good' : 'ok') : 'bad', label: 'Odak kelime SEO başlığında', tip: 'Odak kelimeyi başlığın mümkün olduğunca başına koyun.' })
    add({ id: 'kw-desc', group: 'Anahtar kelime', status: contains(desc, kw) ? 'good' : 'bad', label: 'Odak kelime meta açıklamada', tip: 'Google arama sonucunda eşleşen kelimeleri kalın gösterir; tıklanma oranını artırır.' })
    add({ id: 'kw-slug', group: 'Anahtar kelime', status: slugify(p.slug).includes(slugify(kw)) ? 'good' : contains(p.slug.replace(/-/g, ' '), kw) ? 'ok' : 'bad', label: 'Odak kelime adreste (URL)', tip: `Ör. /blog/${slugify(kw)}` })
    add({ id: 'kw-intro', group: 'Anahtar kelime', status: contains(firstPara, kw) ? 'good' : 'bad', label: 'Odak kelime ilk paragrafta', tip: 'Konunun ne olduğunu ilk cümlelerde net söyleyin.' })
    add({ id: 'kw-sub', group: 'Anahtar kelime', status: subheads.some((h) => contains(stripInline(h.text), kw)) ? 'good' : 'ok', label: 'Odak kelime en az bir ara başlıkta (H2/H3)' })
    const density = words ? (occurrences(text, kw) * 100) / words : 0
    add({
      id: 'kw-density',
      group: 'Anahtar kelime',
      status: density >= 0.5 && density <= 3 ? 'good' : density > 3 ? 'bad' : density > 0 ? 'ok' : 'bad',
      label: `Anahtar kelime yoğunluğu %${density.toFixed(1)}`,
      tip: density > 3 ? 'Aşırı tekrar spam sayılabilir; eş anlamlılarla çeşitlendirin.' : 'İdeal aralık %0,5 – %3 (yaklaşık her 100 kelimede 1–3 kez).',
    })
    const rival = others.find((o) => o.slug !== p.slug && o.focusKeyword && norm(o.focusKeyword) === norm(kw))
    add({ id: 'kw-unique', group: 'Anahtar kelime', status: rival ? 'bad' : 'good', label: rival ? `Bu odak kelime “${rival.title}” yazısında da kullanılıyor` : 'Odak kelime başka yazıda kullanılmıyor', tip: 'Aynı kelimeyi hedefleyen iki yazı birbirinin sıralamasını düşürür (keyword cannibalization).' })
  }
  if (others.some((o) => o.slug !== p.slug && norm(o.title) === norm(p.title))) {
    add({ id: 'title-dup', group: 'Başlık ve açıklama', status: 'bad', label: 'Aynı başlıkla başka bir yazı var', tip: 'Her yazının başlığı benzersiz olmalı.' })
  }

  // ---- Başlık ve açıklama
  const tl = seoTitle.length
  add({ id: 'title-len', group: 'Başlık ve açıklama', status: tl >= SEO_LIMITS.titleMin && tl <= 65 ? 'good' : tl >= 25 && tl <= 70 ? 'ok' : 'bad', label: `SEO başlığı ${tl} karakter`, tip: 'Google ~60 karakterden sonrasını keser. 35–60 arası ideal.' })
  const dl = desc.length
  add({ id: 'desc-len', group: 'Başlık ve açıklama', status: dl >= SEO_LIMITS.descMin && dl <= SEO_LIMITS.descMax ? 'good' : dl >= 70 && dl <= 175 ? 'ok' : 'bad', label: `Meta açıklama ${dl} karakter`, tip: '120–160 karakter ideal; okuyucuyu tıklamaya davet eden bir özet yazın.' })
  add({ id: 'slug-len', group: 'Başlık ve açıklama', status: p.slug.length <= 60 && p.slug.split('-').length <= 7 ? 'good' : p.slug.length <= 80 ? 'ok' : 'bad', label: `Adres ${p.slug.length} karakter`, tip: 'Kısa, okunabilir adresler daha iyi performans gösterir. Gereksiz bağlaçları çıkarın.' })

  // ---- İçerik
  add({ id: 'words', group: 'İçerik', status: words >= 900 ? 'good' : words >= 500 ? 'ok' : 'bad', label: `${words} kelime`, tip: 'Kapsamlı rehberler için 900+ kelime önerilir; en az 500 kelime.' })
  const longParas = paragraphs.filter((b) => wordCount(stripInline(b.text)) > 130).length
  add({ id: 'paras', group: 'İçerik', status: longParas === 0 ? 'good' : longParas <= 2 ? 'ok' : 'bad', label: longParas ? `${longParas} paragraf çok uzun` : 'Paragraf uzunlukları okunabilir', tip: 'Paragrafları 130 kelimenin altında tutun; mobilde okumayı kolaylaştırır.' })
  const sentences = text.split(/[.!?…]+\s/).filter((s) => s.trim().length > 3)
  const avg = sentences.length ? words / sentences.length : 0
  add({ id: 'sentences', group: 'İçerik', status: avg <= 20 ? 'good' : avg <= 26 ? 'ok' : 'bad', label: `Ortalama cümle ${avg.toFixed(0)} kelime`, tip: 'Kısa cümleler (≤20 kelime) okunabilirliği artırır.' })
  add({ id: 'faq', group: 'İçerik', status: (p.faqs?.length ?? 0) >= 2 ? 'good' : 'ok', label: (p.faqs?.length ?? 0) ? `${p.faqs!.length} SSS eklendi` : 'SSS eklenmedi', tip: 'SSS bölümü Google’da “Diğer kullanıcılar şunları da sordu” alanında görünme şansını artırır.' })

  // ---- Yapı
  add({ id: 'h2', group: 'Yapı', status: h2.length >= 3 ? 'good' : h2.length >= 1 ? 'ok' : 'bad', label: `${h2.length} ara başlık (H2)`, tip: 'Metni “## Başlık” ile bölümlere ayırın; içindekiler tablosu otomatik oluşur.' })
  const firstHead = blocks.find((b) => b.type === 'h2' || b.type === 'h3')
  add({ id: 'hierarchy', group: 'Yapı', status: !firstHead || firstHead.type === 'h2' ? 'good' : 'bad', label: 'Başlık hiyerarşisi (H2 → H3)', tip: 'İlk ara başlık H3 değil H2 olmalı. Sayfa başlığı zaten H1’dir; metinde “#” kullanmayın.' })
  add({ id: 'cat', group: 'Yapı', status: (p.programs?.length || p.countries?.length) ? 'good' : 'ok', label: 'İlgili program / ülke seçildi', tip: 'Seçilen program ve ülkeler yazının altında ilgili sayfalara otomatik bağlantı oluşturur.' })

  // ---- Bağlantı ve görsel
  add({ id: 'internal', group: 'Bağlantı ve görsel', status: l.internal.length >= 3 ? 'good' : l.internal.length >= 1 ? 'ok' : 'bad', label: `${l.internal.length} iç bağlantı`, tip: 'Sitedeki ilgili sayfalara en az 3 bağlantı verin (ör. [İngiltere yaz okulları](/yurtdisi-yaz-okullari/ingiltere)).' })
  add({ id: 'external', group: 'Bağlantı ve görsel', status: l.external.length >= 1 ? 'good' : 'ok', label: `${l.external.length} dış bağlantı`, tip: 'Resmî kaynaklara (ör. gov.uk vize sayfası) bağlantı güvenilirliği artırır.' })
  add({ id: 'cover', group: 'Bağlantı ve görsel', status: p.image ? ((p.imageAlt ?? '').trim().length >= 10 ? 'good' : 'ok') : 'bad', label: p.image ? 'Kapak görseli ve alt metni' : 'Kapak görseli yok', tip: 'Kapak görseli için görseli anlatan bir alt metin yazın.' })
  const noAlt = imgs.filter((b) => !b.alt.trim()).length
  add({ id: 'alts', group: 'Bağlantı ve görsel', status: noAlt ? 'bad' : imgs.length ? 'good' : 'ok', label: imgs.length ? (noAlt ? `${noAlt} görselde alt metin eksik` : `${imgs.length} görselin hepsinde alt metin var`) : 'Metin içinde görsel yok', tip: 'Uzun yazılarda en az bir açıklayıcı görsel kullanın.' })

  const score = Math.round((checks.reduce((s, c) => s + (c.status === 'good' ? 1 : c.status === 'ok' ? 0.5 : 0), 0) / checks.length) * 100)
  return { checks, score, words, readMin: Math.max(1, Math.round(words / 200)), seoTitle, blocks, h2Count: h2.length }
}

export const scoreTone = (s: number) => (s >= 80 ? 'good' : s >= 55 ? 'ok' : 'bad')
