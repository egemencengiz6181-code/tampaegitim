// Prerender kontrolü: routing.ts'deki rota eşlemeleri liste dosyalarıyla uyumlu mu?
import { languageCityList } from './languageCities/list'
import { universityList } from './universities/list'
import { glossaryGuides } from './glossary'
import { localPages } from './local'
import { languageCityRouting, universityRouting, glossaryRouting, localSlugs } from './routing'

/** routing.ts (ana paketteki rota eşlemeleri) liste dosyalarıyla uyumlu mu? Boş dizi = sorun yok. */
export function routingMismatch(): string[] {
  const out: string[] = []
  const check = (name: string, list: { country: string; file: string }[], map: Record<string, string[]>) => {
    for (const x of list) if (!map[x.country]?.includes(x.file)) out.push(`routing.ts > ${name}: ${x.country} → ${x.file} eksik`)
    for (const [c, files] of Object.entries(map)) for (const f of files) if (!list.some((x) => x.country === c && x.file === f)) out.push(`routing.ts > ${name}: ${c} → ${f} fazla`)
  }
  check('languageCityRouting', languageCityList, languageCityRouting)
  check('universityRouting', universityList, universityRouting)
  for (const g of glossaryGuides) if (glossaryRouting[g.slug] !== g.file) out.push(`routing.ts > glossaryRouting: ${g.slug} eksik/farklı`)
  for (const s of Object.keys(glossaryRouting)) if (!glossaryGuides.some((g) => g.slug === s)) out.push(`routing.ts > glossaryRouting: ${s} fazla`)
  const ls = localPages.map((l) => l.slug).sort().join(), rs = [...localSlugs].sort().join()
  if (ls !== rs) out.push('routing.ts > localSlugs local.ts ile uyuşmuyor')
  return out
}
