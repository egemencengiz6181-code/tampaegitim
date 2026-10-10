// "Şehirlere göre İngiltere dil okulları fiyat listesi".
// Okul ve fiyat bilgileri Tampa tarafından iletilir (şablon: docs/okul-fiyat-listesi-sablon.csv).
// Bir şehrin `schools` listesi boşken şehir sayfası "fiyat listesi isteyin" formuyla yayınlanır ve indekslenmez.

/** Fiyat tablosundaki süre sütunları (hafta). */
export const priceWeeks = [4, 8, 12, 24, 36] as const

export type SchoolPrice = {
  school: string
  /** Haftalık ders saati, ör. "20", "20+7", "15 (sabah)" */
  hours: string
  /** Süre → toplam eğitim ücreti (GBP) */
  prices: Partial<Record<(typeof priceWeeks)[number], number>>
  /** Haftalık konaklama (GBP) */
  homestay?: number
  residence?: number
  /** Tek seferlik ücretler (GBP) */
  registration?: number
  accommodationFee?: number
  promo?: boolean
  note?: string
}

export type PriceCity = {
  slug: string
  name: string
  code: string
  image: string
  intro: string
  schools: SchoolPrice[]
}

export const priceListYear = 2027

export const ukPriceCities: PriceCity[] = [
  {
    slug: 'londra',
    name: 'Londra',
    code: 'LHR',
    image: '/img/dest/ingiltere.jpg',
    intro: 'Dünyanın en kozmopolit şehrinde, Covent Garden’dan Oxford Street’e merkezi konumlu dil okulları. Genel İngilizce, IELTS ve iş İngilizcesi programları yıl boyu başlar.',
    schools: [],
  },
  {
    slug: 'brighton',
    name: 'Brighton',
    code: 'BSH',
    image: '/img/konaklama/brighton-residence-1.jpg',
    intro: 'Londra’ya trenle bir saat uzaklıkta, genç ve canlı bir sahil şehri. Dil okullarının en sevilen adreslerinden; aile yanı konaklama yaygındır.',
    schools: [],
  },
  {
    slug: 'oxford',
    name: 'Oxford',
    code: 'OXF',
    image: '/img/cities/oxford.jpg',
    intro: 'Asırlık üniversite şehri. Akademik İngilizce, sınav hazırlık ve 30 yaş üstü programlar için güçlü seçenekler.',
    schools: [],
  },
  {
    slug: 'cambridge',
    name: 'Cambridge',
    code: 'CBG',
    image: '/img/cities/cambridge.jpg',
    intro: 'Sakin, güvenli ve akademik atmosferiyle Cambridge; Cambridge sınavlarına hazırlık programlarının merkezi.',
    schools: [],
  },
  {
    slug: 'manchester',
    name: 'Manchester',
    code: 'MAN',
    image: '/img/konaklama/white-city-residence-2.jpg',
    intro: 'Kuzey İngiltere’nin öğrenci başkenti; Londra’ya göre daha uygun konaklama ve canlı bir şehir hayatı.',
    schools: [],
  },
  {
    slug: 'bournemouth',
    name: 'Bournemouth',
    code: 'BOH',
    image: '/img/cities/bournemouth.jpg',
    intro: 'Güney sahilinde sakin bir şehir; uygun fiyatlı dil programları ve aile yanı konaklamayla bilinir.',
    schools: [],
  },
]

export const priceCityBySlug = Object.fromEntries(ukPriceCities.map((c) => [c.slug, c])) as Record<string, PriceCity>

export const fromPrice = (c: PriceCity) => {
  const all = c.schools.map((s) => s.prices[4]).filter((x): x is number => typeof x === 'number')
  return all.length ? Math.min(...all) : null
}
