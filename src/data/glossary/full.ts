// Kavram rehberlerinin tam içeriği; yalnızca prerender kontrolü için (istemci load.ts kullanır).
import { angloGuides } from './anglo'
import { almancaGuides } from './almanca'
import { digerGuides } from './diger'
import { glossaryGuides } from './index'

export const glossaryFull = [...angloGuides, ...almancaGuides, ...digerGuides]

/** index.ts'deki hafif liste ile tam içerik aynı rehberleri mi içeriyor? Boş dizi = sorun yok. */
export function glossaryListMismatch(): string[] {
  const full = new Set(glossaryFull.map((g) => g.slug))
  const light = new Set(glossaryGuides.map((g) => g.slug))
  return [...[...full].filter((k) => !light.has(k)).map((k) => `glossary/index.ts'de eksik: ${k}`), ...[...light].filter((k) => !full.has(k)).map((k) => `glossary içerik dosyasında eksik: ${k}`)]
}

