import type { Faq } from '../data/programs'

// Aynı konuyu soran SSS'leri yakalamak için konu anahtarları. Bir soru birden fazla konuya
// girebilir; iki soru aynı konu kümesine sahipse ikincisi atılır.
const TOPICS: [string, RegExp][] = [
  ['vize', /vize/],
  ['calisma', /çalış/],
  ['yas', /\byaş|kaç yaşın/],
  ['yalniz-ucus', /yalnız|refakat/],
  ['sehir', /şehir/],
  ['sure', /kaç hafta|ne kadar sür|en kısa süre|kaç ay/],
  ['baslangic', /ne zaman başla|her hafta mı başl|başlangıç tarih/],
  ['kayit', /ne zaman kayıt|kayıt yaptır/],
  ['guvenlik', /güvenlik|güvenli/],
  ['fiyat', /fiyat|ücret|maliyet/],
]

const STOP = new Set(['ve', 'ile', 'mi', 'mı', 'mu', 'mü', 'için', 'bir', 'ne', 'nasıl', 'hangi', 'kaç', 'var', 'gerekiyor', 'olarak', 'bu', 'da', 'de'])

const norm = (q: string) => q.toLocaleLowerCase('tr').replace(/[’'?.,:;!()]/g, ' ')

function topics(q: string) {
  const n = norm(q)
  return TOPICS.filter(([, re]) => re.test(n)).map(([k]) => k).sort().join('|')
}

function words(q: string) {
  return new Set(norm(q).split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w)).map((w) => w.slice(0, 5)))
}

function similar(a: string, b: string) {
  const ta = topics(a)
  const tb = topics(b)
  // İki soru da bilinen bir konuya giriyorsa yalnızca konular karşılaştırılır
  if (ta && tb) return ta === tb
  const wa = words(a)
  const wb = words(b)
  if (!wa.size || !wb.size) return false
  let common = 0
  for (const w of wa) if (wb.has(w)) common++
  return common / Math.min(wa.size, wb.size) >= 0.75
}

/** Soru metni benzerliğine göre tekrar eden SSS'leri atar (ilk gelen kalır). */
export function dedupeFaqs(items: Faq[], max = 8): Faq[] {
  const out: Faq[] = []
  for (const f of items) if (!out.some((o) => similar(o.q, f.q))) out.push(f)
  return out.slice(0, max)
}
