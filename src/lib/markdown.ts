// Blog yazıları için küçük, güvenli bir Markdown alt kümesi.
// Desteklenenler: ## / ### başlık, paragraf, - / 1. liste, > alıntı, ![alt](src "açıklama") görsel,
// | tablo |, --- ayırıcı. Satır içi: **kalın**, *italik*, [bağlantı](/yol). HTML desteklenmez (XSS'e kapalı).
import { slugify } from './slug'

export type Block =
  | { type: 'h2' | 'h3'; text: string; id: string }
  | { type: 'p'; text: string }
  | { type: 'ul' | 'ol'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'img'; src: string; alt: string; caption?: string }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'hr' }

const IMG = /^!\[([^\]]*)\]\(\s*([^)\s]+)(?:\s+"([^"]*)")?\s*\)$/
const isTableRow = (l: string) => /^\|.*\|$/.test(l.trim())
const splitRow = (l: string) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim())

export function parseMarkdown(md: string): Block[] {
  const lines = md.replace(/\r\n?/g, '\n').split('\n')
  const blocks: Block[] = []
  const ids = new Map<string, number>()
  const uniqueId = (text: string) => {
    const base = slugify(text.replace(/\*\*|\*|\[|\]\([^)]*\)/g, '')) || 'bolum'
    const n = ids.get(base) ?? 0
    ids.set(base, n + 1)
    return n ? `${base}-${n + 1}` : base
  }

  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    const t = line.trim()
    if (!t) {
      i++
      continue
    }
    let m: RegExpMatchArray | null
    if ((m = t.match(/^(#{2,3})\s+(.+)$/))) {
      const text = m[2].trim()
      blocks.push({ type: m[1].length === 2 ? 'h2' : 'h3', text, id: uniqueId(text) })
      i++
    } else if (/^(-{3,}|\*{3,})$/.test(t)) {
      blocks.push({ type: 'hr' })
      i++
    } else if ((m = t.match(IMG))) {
      blocks.push({ type: 'img', alt: m[1], src: m[2], caption: m[3] })
      i++
    } else if (/^[-*]\s+/.test(t)) {
      const items: string[] = []
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) items.push(lines[i++].trim().replace(/^[-*]\s+/, ''))
      blocks.push({ type: 'ul', items })
    } else if (/^\d+[.)]\s+/.test(t)) {
      const items: string[] = []
      while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) items.push(lines[i++].trim().replace(/^\d+[.)]\s+/, ''))
      blocks.push({ type: 'ol', items })
    } else if (t.startsWith('>')) {
      const parts: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('>')) parts.push(lines[i++].trim().replace(/^>\s?/, ''))
      blocks.push({ type: 'quote', text: parts.join(' ') })
    } else if (isTableRow(t) && i + 1 < lines.length && /^\|?\s*:?-{2,}/.test(lines[i + 1].trim())) {
      const head = splitRow(t)
      i += 2
      const rows: string[][] = []
      while (i < lines.length && isTableRow(lines[i])) rows.push(splitRow(lines[i++]))
      blocks.push({ type: 'table', head, rows })
    } else {
      const parts: string[] = []
      while (i < lines.length && lines[i].trim() && !/^(#{2,3}\s|[-*]\s|\d+[.)]\s|>|!\[|\||-{3,}$)/.test(lines[i].trim())) parts.push(lines[i++].trim())
      if (!parts.length) parts.push(lines[i++].trim())
      blocks.push({ type: 'p', text: parts.join(' ') })
    }
  }
  return blocks
}

/** Satır içi işaretleri temizler: meta açıklama, kelime sayımı, SEO analizi için. */
export const stripInline = (s: string) =>
  s.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\*([^*]+)\*/g, '$1')

export function plainText(blocks: Block[]): string {
  return blocks
    .map((b) => {
      switch (b.type) {
        case 'h2':
        case 'h3':
        case 'p':
        case 'quote':
          return stripInline(b.text)
        case 'ul':
        case 'ol':
          return b.items.map(stripInline).join(' ')
        case 'table':
          return [...b.head, ...b.rows.flat()].map(stripInline).join(' ')
        case 'img':
          return b.caption ?? ''
        default:
          return ''
      }
    })
    .join(' ')
}

export const wordCount = (text: string) => (text.match(/[\p{L}\p{N}’'-]+/gu) ?? []).length

/** Dakikada ~200 kelime (Türkçe ortalama okuma hızı). */
export const readingMinutes = (words: number) => Math.max(1, Math.round(words / 200))

/** Metindeki bağlantılar: iç (/...) ve dış (http...). */
export function links(md: string) {
  const all = [...md.matchAll(/(?<!!)\[[^\]]+\]\(([^)\s]+)\)/g)].map((m) => m[1])
  return { internal: all.filter((h) => h.startsWith('/')), external: all.filter((h) => /^https?:\/\//.test(h)) }
}

/** Yalnızca güvenli bağlantı şemalarına izin verilir. */
export const safeHref = (href: string) => (/^(\/(?!\/)|#|https?:\/\/|mailto:|tel:)/i.test(href) ? href : null)
