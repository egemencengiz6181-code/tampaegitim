// Öğrenci konaklaması: konaklama partnerimiz GoBritanya'nın yurtları.
// Fiyat, oda tipi ve görseller `npm run sync:konaklama` ile gobritanya.json'a çekilir; Türkçe metinler burada.
import data from './gobritanya.json'

export type Residence = (typeof data.residences)[number]

export const accommodationSource = data.source
export const accommodationSyncedAt = data.syncedAt

export const cityNames: Record<string, string> = { london: 'Londra', brighton: 'Brighton', leeds: 'Leeds', dublin: 'Dublin' }
export const cityOrder = ['london', 'brighton', 'leeds', 'dublin']

/** Kısa Türkçe tanıtımlar (GoBritanya açıklamalarından özetlendi). */
const summaries: Record<string, string> = {
  'your-tribe-southwark': 'Peckham’da tasarım odaklı, sürdürülebilir bir öğrenci yurdu; ortak yaşam alanları ve güçlü bir topluluk hayatı.',
  'sterling-court-wembley': 'Wembley’de faturaların dahil olduğu, hızlı internet ve 7/24 yerinde ekip desteği sunan uygun fiyatlı yurt.',
  'mcmillan-residence': 'Greenwich istasyonuna 10 dakika yürüme mesafesinde; University of Greenwich, Ravensbourne ve Goldsmiths’e yakın stüdyolar.',
  'wembley-arthur-house': 'Wembley Park’ta salonlar, kafe ve aktivite alanı, kütüphane, spor salonu ve yoga stüdyosu bulunan geniş olanaklı yurt.',
  'islington-residence': 'Caledonian Road istasyonuna 5 dakika (Zone 2); UCL, City University ve London Metropolitan’a yakın, spor salonu ve sinema odalı.',
  'white-city-residence': 'Londra’nın yenilikçi bölgesi White City’de; faturalar dahil, hızlı internet ve güvenli giriş sistemiyle modern stüdyolar.',
  'shoreditch-residence': 'Old Street istasyonuna 5 dakika (Zone 1); City University, UCL ve LSE’ye yakın, spor salonu, sinema ve çalışma alanlı.',
  'highbury-residence-ii': 'Holloway Road üzerinde, Holloway Road istasyonuna 3 dakika (Zone 2); UCL, City ve London Metropolitan’a kolay ulaşım.',
  'old-street-residence': 'Old Street istasyonuna 5 dakika (Zone 1); City University, UCL ve LSE’ye yakın, sinema odası ve sosyal alanlar.',
  'spitalfields-residence': 'Liverpool Street istasyonu yakınında, şehir manzaralı çatı kafesiyle Londra merkezinde lüks öğrenci yurdu.',
  'kings-cross-residence': 'King’s Cross St Pancras’a 5 dakika (Zone 1); UCL, SOAS, King’s College London ve City University’ye yakın.',
  'westminster-residence': 'Waterloo’ya yakın, Londra’nın simge yapılarının yanı başında; King’s College, LSE ve Westminster’a kolay ulaşım.',
  'hammersmith-residence': 'Hammersmith’te spor salonu, oyun odası, sinema ve fitness stüdyosu; yerinde ekip düzenli sosyal etkinlikler organize eder.',
  'brighton-residence': 'University of Brighton kampüsünün hemen yanında; Brighton’daki dil okullarına ve Sussex Üniversitesi’ne yakın.',
  'briggate-studios': 'Leeds şehir merkezinde, Briggate’te özel stüdyolar; faturalar dahil, kısa ve uzun dönem kalış seçenekleri.',
  'point-campus-dublin': 'Dublin’in teknoloji merkezine yakın; faturalar dahil, hızlı internet ve 7/24 resepsiyonlu modern öğrenci yurdu.',
}

export const residenceSummary = (r: Residence) => summaries[r.slug] ?? `${cityNames[r.city] ?? r.city} şehrinde faturaların dahil olduğu öğrenci yurdu.`

const featureTr: Record<string, string> = {
  'City Center': 'Şehir merkezi',
  'All Bills Included': 'Faturalar dahil',
  'Short & Long Term Stay': 'Kısa ve uzun dönem kalış',
  'Flexible Start Dates': 'Esnek başlangıç tarihi',
  'No Guarantor': 'Kefil gerekmez',
  'Excellent Facilities': 'Geniş olanaklar',
  '24/7 Reception': '7/24 resepsiyon',
  'Airport Transfer': 'Havalimanı transferi',
  'Instalment Plan': 'Taksitli ödeme',
  '24/7 Security': '7/24 güvenlik',
  'Student Insurance': 'Öğrenci sigortası',
  'Free Cancellation': 'Ücretsiz iptal',
  'On-site Laundry': 'Çamaşırhane',
  'On-site Gym': 'Spor salonu',
  'Study Spaces': 'Çalışma alanları',
  'Private Studios': 'Özel stüdyolar',
  'On-site Management': 'Yerinde yönetim',
  'Cinema Room': 'Sinema odası',
  Library: 'Kütüphane',
  'Craft Room': 'Hobi odası',
  'Communal Kitchen': 'Ortak mutfak',
  'Social Spaces': 'Sosyal alanlar',
  'Private Dining Room': 'Özel yemek odası',
  'Games Area': 'Oyun alanı',
  'TV Snug': 'TV odası',
  'Bike Storage': 'Bisiklet parkı',
  Lounges: 'Salonlar',
  'Free Breakfast': 'Ücretsiz kahvaltı',
  'Ensuite Rooms': 'Banyolu odalar',
  'Nearby Shops and Cafes': 'Yakında market ve kafeler',
  'Communal Lounge': 'Ortak salon',
  'Premium Studios': 'Premium stüdyolar',
  'Cultural Attractions': 'Kültürel mekânlara yakın',
}

export const residenceFeatures = (r: Residence) =>
  r.features.filter((f) => f.length < 40).map((f) => (f.startsWith('Zone') ? f.replace('Zone', 'Ulaşım bölgesi') : featureTr[f] ?? f))

export const stayLabel: Record<string, string> = {
  'All Year Stay': 'Tüm yıl',
  'Academic Stay': 'Akademik yıl',
  'Semester Stay': 'Dönemlik',
  'Short Stay': 'Kısa dönem',
}

/** Oda tipi adlarını sadeleştirir: "Silver Studio - Standard View | Mid Level" → "Silver Studio, standart manzara, orta kat" */
export const roomLabel = (name: string) =>
  name
    .replace(/ - /g, ', ')
    .replace(/ \| /g, ', ')
    .replace(/Standard View/g, 'standart manzara')
    .replace(/Street View/g, 'sokak manzarası')
    .replace(/City View/g, 'şehir manzarası')
    .replace(/Courtyard View/g, 'avlu manzarası')
    .replace(/Landmark View/g, 'simge yapı manzarası')
    .replace(/Dual-View/g, 'çift cephe')
    .replace(/Upper Level/g, 'üst kat')
    .replace(/Mid Level/g, 'orta kat')
    .replace(/Lower Level/g, 'alt kat')
    .replace(/Ground Floor/g, 'zemin kat')
    .replace(/Penthouse Level/g, 'çatı katı')
    .replace(/Extra Large/g, 'ekstra geniş')

export const residences: Residence[] = [...data.residences].sort(
  (a, b) => cityOrder.indexOf(a.city) - cityOrder.indexOf(b.city) || (a.priceFrom ?? 1e9) - (b.priceFrom ?? 1e9),
)

export const residenceBySlug = Object.fromEntries(residences.map((r) => [r.slug, r])) as Record<string, Residence>

/** Leeds ve Londra sterlin; Dublin euro. */
export const currencyFor = (r: Residence) => (r.city === 'dublin' ? '€' : '£')

/** Amber: dünya genelinde öğrenci konaklaması bulduğumuz ikinci partnerimiz. */
export const amberCities = [
  { city: 'Londra', url: 'https://amberstudent.com/places/search/london-1811028205760' },
  { city: 'Manchester', url: 'https://amberstudent.com/places/search/manchester-1811021510595' },
  { city: 'Birmingham', url: 'https://amberstudent.com/places/search/birmingham-1811028953945' },
  { city: 'Brighton', url: 'https://amberstudent.com/places/search/brighton-and-hove-1811029325591' },
  { city: 'Bournemouth', url: 'https://amberstudent.com/places/search/bournemouth-1811027075639' },
  { city: 'Liverpool', url: 'https://amberstudent.com/places/search/liverpool-1811029039831' },
  { city: 'Edinburgh', url: 'https://amberstudent.com/places/search/edinburgh-1811029850773' },
  { city: 'Dublin', url: 'https://amberstudent.com/places/search/dublin-1811234255126' },
  { city: 'Tüm şehirler', url: 'https://amberstudent.com/' },
]
