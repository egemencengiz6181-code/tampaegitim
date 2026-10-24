// Kavram rehberi sayfası, yalnızca ilgili içerik dosyasını ayrı bir chunk olarak yükler.
import type { Guide } from '../guides'
import type { GlossaryFile } from './index'

export const glossaryLoaders: Record<GlossaryFile, () => Promise<Guide[]>> = {
  anglo: () => import('./anglo').then((m) => m.angloGuides),
  almanca: () => import('./almanca').then((m) => m.almancaGuides),
  diger: () => import('./diger').then((m) => m.digerGuides),
}
