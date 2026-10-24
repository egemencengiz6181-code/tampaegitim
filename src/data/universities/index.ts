// Üniversite sayfalarının tam içeriği. İstemci tarafında yalnızca üniversite sayfası (load.ts üzerinden)
// ilgili dosyayı yükler; diğer sayfalar list.ts'deki hafif listeyi kullanır. Bu dosya prerender kontrolü içindir.
import type { University } from './types'
import { ingiltereLondraUnis } from './ingiltere-londra'
import { ingiltereBolgeUnis } from './ingiltere-bolge'
import { almanyaUnis } from './almanya'
import { italyaMacaristanUnis } from './italya-macaristan'
import { polonyaAvusturyaUnis } from './polonya-avusturya'
import { kuzeyAmerikaUnis } from './kuzey-amerika'
import { asyaUnis } from './asya'
import { universityList } from './list'

export const universities: University[] = [
  ...ingiltereLondraUnis,
  ...ingiltereBolgeUnis,
  ...almanyaUnis,
  ...italyaMacaristanUnis,
  ...polonyaAvusturyaUnis,
  ...kuzeyAmerikaUnis,
  ...asyaUnis,
]

/** list.ts ile tam içerik aynı üniversiteleri mi içeriyor? Prerender'da kontrol edilir; boş dizi = sorun yok. */
export function universityListMismatch(): string[] {
  const key = (u: { country: string; slug: string }) => `${u.country}/${u.slug}`
  const full = new Set(universities.map(key))
  const light = new Set(universityList.map(key))
  return [...[...full].filter((k) => !light.has(k)).map((k) => `list.ts'de eksik: ${k}`), ...[...light].filter((k) => !full.has(k)).map((k) => `içerik dosyasında eksik: ${k}`)]
}
