// Şehir bazlı dil okulu sayfalarının tam içeriği. İstemci tarafında yalnızca şehir sayfası (load.ts üzerinden)
// ilgili dosyayı yükler; diğer sayfalar list.ts'deki hafif listeyi kullanır. Bu dosya prerender/sitemap içindir.
import type { LanguageCity } from './types'
import { ingiltereACities } from './ingiltere-a'
import { ingiltereBCities } from './ingiltere-b'
import { amerikaCities } from './amerika'
import { kanadaAvustralyaCities } from './kanada-avustralya'
import { irlandaMaltaCities } from './irlanda-malta'
import { almancaCities } from './almanca'
import { latinDillerCities } from './latin-diller'
import { asyaDigerCities } from './asya-diger'
import { languageCityList } from './list'

export const languageCities: LanguageCity[] = [
  ...ingiltereACities,
  ...ingiltereBCities,
  ...amerikaCities,
  ...kanadaAvustralyaCities,
  ...irlandaMaltaCities,
  ...almancaCities,
  ...latinDillerCities,
  ...asyaDigerCities,
]

/** list.ts ile tam içerik aynı şehirleri mi içeriyor? Prerender'da kontrol edilir; boş dizi = sorun yok. */
export function languageCityListMismatch(): string[] {
  const key = (c: { country: string; slug: string }) => `${c.country}/${c.slug}`
  const full = new Set(languageCities.map(key))
  const light = new Set(languageCityList.map(key))
  return [...[...full].filter((k) => !light.has(k)).map((k) => `list.ts'de eksik: ${k}`), ...[...light].filter((k) => !full.has(k)).map((k) => `içerik dosyasında eksik: ${k}`)]
}
