// Üniversite sayfası rotası, yalnızca ilgili ülke dosyasını ayrı bir chunk olarak yükler.
import type { University } from './types'
import type { UniversityFile } from './list'

export const universityLoaders: Record<UniversityFile, () => Promise<University[]>> = {
  'ingiltere-londra': () => import('./ingiltere-londra').then((m) => m.ingiltereLondraUnis),
  'ingiltere-bolge': () => import('./ingiltere-bolge').then((m) => m.ingiltereBolgeUnis),
  almanya: () => import('./almanya').then((m) => m.almanyaUnis),
  'italya-macaristan': () => import('./italya-macaristan').then((m) => m.italyaMacaristanUnis),
  'polonya-avusturya': () => import('./polonya-avusturya').then((m) => m.polonyaAvusturyaUnis),
  'kuzey-amerika': () => import('./kuzey-amerika').then((m) => m.kuzeyAmerikaUnis),
  asya: () => import('./asya').then((m) => m.asyaUnis),
}
