// Fiyat sayfası rotası, yalnızca ilgili içerik dosyasını ayrı bir chunk olarak yükler.
import type { PricePage } from './types'
import type { PriceFile } from './list'

export const priceLoaders: Record<PriceFile, () => Promise<PricePage[]>> = {
  'orta-avrupa': () => import('./orta-avrupa').then((m) => m.ortaAvrupaPrices),
  'anglo-avrupa': () => import('./anglo-avrupa').then((m) => m.angloAvrupaPrices),
  'dach-italya': () => import('./dach-italya').then((m) => m.dachItalyaPrices),
  'yeni-dunya': () => import('./yeni-dunya').then((m) => m.yeniDunyaPrices),
  'asya-latin': () => import('./asya-latin').then((m) => m.asyaLatinPrices),
}
