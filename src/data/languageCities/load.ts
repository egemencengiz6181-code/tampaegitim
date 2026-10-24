// Şehir sayfası rotası, yalnızca ilgili ülke dosyasını ayrı bir chunk olarak yükler.
import type { LanguageCity } from './types'
import type { LanguageCityFile } from './list'

export const languageCityLoaders: Record<LanguageCityFile, () => Promise<LanguageCity[]>> = {
  'ingiltere-a': () => import('./ingiltere-a').then((m) => m.ingiltereACities),
  'ingiltere-b': () => import('./ingiltere-b').then((m) => m.ingiltereBCities),
  amerika: () => import('./amerika').then((m) => m.amerikaCities),
  'kanada-avustralya': () => import('./kanada-avustralya').then((m) => m.kanadaAvustralyaCities),
  'irlanda-malta': () => import('./irlanda-malta').then((m) => m.irlandaMaltaCities),
  almanca: () => import('./almanca').then((m) => m.almancaCities),
  'latin-diller': () => import('./latin-diller').then((m) => m.latinDillerCities),
  'asya-diger': () => import('./asya-diger').then((m) => m.asyaDigerCities),
}
