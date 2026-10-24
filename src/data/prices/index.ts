// Fiyat sayfalarının tam içeriği; yalnızca prerender kontrolü için (istemci load.ts kullanır).
import type { PricePage } from './types'
import { ortaAvrupaPrices } from './orta-avrupa'
import { angloAvrupaPrices } from './anglo-avrupa'
import { dachItalyaPrices } from './dach-italya'
import { yeniDunyaPrices } from './yeni-dunya'
import { asyaLatinPrices } from './asya-latin'
import { tipPrices } from './tip'
import { priceList } from './list'

export const pricePages: PricePage[] = [...ortaAvrupaPrices, ...angloAvrupaPrices, ...dachItalyaPrices, ...yeniDunyaPrices, ...asyaLatinPrices, ...tipPrices]

/** list.ts ile tam içerik aynı sayfaları mı içeriyor? Boş dizi = sorun yok. */
export function priceListMismatch(): string[] {
  const full = new Set(pricePages.map((p) => p.slug))
  const light = new Set(priceList.map((p) => p.slug))
  return [...[...full].filter((k) => !light.has(k)).map((k) => `prices/list.ts'de eksik: ${k}`), ...[...light].filter((k) => !full.has(k)).map((k) => `fiyat içerik dosyasında eksik: ${k}`)]
}
