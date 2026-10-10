// Fiyat ve kapsam bilgileri tampaegitim.com.tr/her-sey-dahil-paketler sayfasından alınmıştır.
export type Package = {
  slug: string
  city: string
  country: string
  code: string
  age: string
  currency: string
  currencySymbol: string
  image: string
  title: string
  lead: string
  prices: { weeks: number; price: number }[]
  includes: string[]
  fun: string[]
  notes: string[]
  accommodation: string
}

export const packages: Package[] = [
  {
    slug: 'londra',
    city: 'Londra',
    country: 'İngiltere',
    code: 'LHR',
    age: '18+ yaş',
    currency: 'GBP',
    currencySymbol: '£',
    image: '/img/misc/london-package.jpg',
    title: 'Londra Her Şey Dahil Dil Eğitimi Paketi',
    lead: 'İngilizceyi Londra’nın tarihi atmosferinde öğrenin; uçak biletinden eğlence paketine kadar her şey tek fiyatta.',
    prices: [
      { weeks: 2, price: 2950 },
      { weeks: 3, price: 3350 },
      { weeks: 4, price: 4150 },
      { weeks: 6, price: 4750 },
      { weeks: 8, price: 5875 },
      { weeks: 10, price: 6750 },
    ],
    includes: [
      'Haftada 15 saat İngilizce eğitimi',
      'Organize edilen yurtlarda tek kişilik, özel banyolu odada konaklama',
      'Tek yön uçak bileti',
      'Sağlık sigortası',
      'Vize ücretleri',
      'VIP havalimanı karşılama hizmeti',
      'SIM kart (dakika ve 40 GB internet)',
      'Londra – Brighton çift yön otobüs bileti',
    ],
    fun: ['London Eye', 'Hop On Hop Off şehir gezisi', 'Thames Nehri cruise gezisi'],
    notes: [],
    accommodation: 'Tek kişilik, özel banyo ve WC’li yurt odası',
  },
  {
    slug: 'dubai',
    city: 'Dubai',
    country: 'Birleşik Arap Emirlikleri',
    code: 'DXB',
    age: '18+ yaş',
    currency: 'USD',
    currencySymbol: '$',
    image: '/img/dest/dubai.jpg',
    title: 'Dubai Her Şey Dahil Dil Eğitimi Paketi',
    lead: 'Dubai’nin büyüleyici modernliğinde İngilizce; Burj Khalifa’dan çöl safarisine beş ayrı deneyim pakete dahil.',
    prices: [
      { weeks: 2, price: 3050 },
      { weeks: 4, price: 4150 },
      { weeks: 6, price: 4550 },
      { weeks: 8, price: 5475 },
      { weeks: 10, price: 6250 },
    ],
    includes: [
      'Haftada 15 saat İngilizce eğitimi',
      'Organize edilen yurtlarda çift kişilik odada konaklama (uygunluğa göre single upgrade)',
      'Sağlık sigortası',
      'Vize ücretleri',
      'VIP havalimanı karşılama hizmeti',
      'SIM kart (dakika ve 20 GB internet)',
    ],
    fun: ['Ferrari Müzesi', 'Burj Khalifa', 'Dubai Müzesi', 'Çölde safari', 'Ski Dubai'],
    notes: ['Uçak bileti hariç fiyattır.', 'Yeşil pasaport sahipleri 90 güne kadar vizesiz seyahat edebilir.'],
    accommodation: 'Çift kişilik yurt odası, uygunluğa göre tek kişilik oda',
  },
  {
    slug: 'malta',
    city: 'Malta',
    country: 'Malta',
    code: 'MLA',
    age: '18+ yaş',
    currency: 'EUR',
    currencySymbol: '€',
    image: '/img/dest/malta.jpg',
    title: 'Malta Her Şey Dahil Dil Eğitimi Paketi',
    lead: 'Malta’nın eşsiz Akdeniz sahillerinde İngilizce; konaklama, sigorta ve okul aktiviteleri tek pakette.',
    prices: [
      { weeks: 2, price: 2350 },
      { weeks: 4, price: 2950 },
      { weeks: 6, price: 3750 },
      { weeks: 8, price: 5375 },
      { weeks: 10, price: 6450 },
    ],
    includes: [
      'Haftada 15 saat İngilizce eğitimi',
      'Organize edilen yurtlarda çift kişilik odada konaklama (uygunluğa göre single upgrade)',
      'Sağlık sigortası',
      'Vize ücretleri',
      'VIP havalimanı karşılama hizmeti',
      'SIM kart',
    ],
    fun: ['Okulla birlikte organize edilen en az 4 aktivite veya gezi'],
    notes: ['Uçak bileti hariç fiyattır.', 'Yeşil pasaport sahipleri 90 güne kadar vizesiz seyahat edebilir.'],
    accommodation: 'Çift kişilik yurt odası, uygunluğa göre tek kişilik oda',
  },
]

export const packageBySlug = Object.fromEntries(packages.map((p) => [p.slug, p])) as Record<string, Package>

export const packagePerks = [
  { title: 'Her Şey Dahil konfor', text: 'Eğitimden konaklamaya, vize işlemlerinden sağlık sigortasına kadar her ayrıntıyı sizin için düşündük. Hiçbir ayrıntıyı kaçırmadan kusursuz bir deneyim sunuyoruz.' },
  { title: 'Unutulmaz anılar', text: 'Londra’nın ikonik cazibe merkezlerinden Dubai’nin modern harikalarına, Malta’nın huzur dolu sahillerine kadar her destinasyonda benzersiz eğlence aktiviteleri.' },
  { title: 'Esnek süre seçenekleri', text: '2, 4, 6, 8 veya 10 haftalık programlarla zaman planlamanızı kolayca yapabilir ve bütçenize en uygun seçeneği seçebilirsiniz.' },
  { title: 'Kolay ve güvenilir', text: 'Havalimanından itibaren VIP karşılamadan rehber desteğine kadar her detay sizin için düşünüldü.' },
]

export const formatPrice = (n: number) => n.toLocaleString('tr-TR')

/**
 * Yurt dışı dil eğitimi başlangıç fiyatları. Dil eğitimleri 1–52 hafta arası ve yalnızca
 * eğitim + konaklama olarak da alınabildiği için burada sabit paket fiyatı değil "başlayan fiyat" gösterilir.
 */
export type LanguageFrom = { country: string; city: string; code: string; weeks: number; price: number | null; currencySymbol: string }

export const languageFromPrices: LanguageFrom[] = [
  { country: 'ingiltere', city: 'İngiltere', code: 'LHR', weeks: 4, price: 1000, currencySymbol: '£' },
  { country: 'malta', city: 'Malta', code: 'MLA', weeks: 4, price: 750, currencySymbol: '€' },
  { country: 'dubai', city: 'Dubai', code: 'DXB', weeks: 4, price: 980, currencySymbol: '$' },
  { country: 'amerika', city: 'Amerika', code: 'JFK', weeks: 4, price: 1000, currencySymbol: '$' },
]

export const languageFromByCountry = Object.fromEntries(languageFromPrices.map((l) => [l.country, l])) as Record<string, LanguageFrom>

/** "4 Haftalık Dil Eğitimi 650 £’dan Başlayan Fiyatlarla" */
export const languageFromLabel = (l: LanguageFrom) =>
  l.price ? `${l.weeks} Haftalık Dil Eğitimi ${formatPrice(l.price)} ${l.currencySymbol}’dan Başlayan Fiyatlarla` : 'Güncel başlangıç fiyatı için bize ulaşın'
