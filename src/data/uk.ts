// İngiltere için değişebilir verilerin TEK kaynağı: vize, çalışma hakkı, yaz okulu bilgileri
// ve program tipine göre ülke sayfası blokları. Sayfalar bu dosyadan okur; bir kural değiştiğinde
// yalnızca burayı (ve ilgili `updated` tarihini) güncelleyin.
import type { ProgramKey } from './countries'
import type { City } from './cities'

/** Bu dosyadaki vize/çalışma bilgilerinin son kontrol tarihi (YYYY-AA-GG). */
export const ukUpdated = '2026-10-19'

/** Yaz okulu temel bilgileri (tüm yaz okulu sayfalarında aynı ifade). */
export const ukSummer = {
  ages: '7–17 yaş',
  ageMin: 7,
  ageMax: 17,
  // TODO: Tampa'dan teyit: program süresi aralığı (1–6 hafta)
  duration: '1–6 hafta',
  season: 'Haziran – Ağustos',
  supervision: '7/24 gözetim',
  /** Önerilen son kayıt zamanı (vize başvurusu için mayısa yetişmek üzere) */
  registrationDeadline: 'Nisan sonu',
  /** TODO: Tampa'dan teyit: 2027 ortalama haftalık/2 haftalık fiyat aralığı (ör. "2 hafta 2.400–3.600 £"). Boşken sayfada "yazılı teklif" metni görünür. */
  priceRange: '' as string,
  updated: ukUpdated,
}

/** İngiltere Üniversite Temsilciliği sayfası. Paket 3'te /ingiltere-universite-temsilciligi açılınca buradan değiştirilecek. */
export const ukRepresentationPath = '/ofislerimiz#ingiltere-universite-temsilciligi'

/** UCAS 2027 girişi takvimi (kaynak: ucas.com, kontrol: 20 Ekim 2026) */
export const ukUcas2027 = {
  updated: '2026-10-20',
  opens: 'Eylül 2026',
  earlyDeadline: '15 Ekim 2026',
  equalConsideration: '13 Ocak 2027, 18.00 (İngiltere saati)',
}

/** Student vizesi yaşam gideri şartı (aylık, en fazla 9 ay). 30 Kasım 2026 ve sonrasındaki başvurular için. TODO: gov.uk'tan dönem başında teyit */
export const ukMaintenance = {
  updated: '2026-10-20',
  london: 1570,
  outside: 1203,
  months: 9,
  from: '30 Kasım 2026',
}

/** TODO: Tampa'dan teyit: uluslararası öğrenci yıllık lisans harcı aralığı (ör. "£16.000–£30.000"). Boşken genel metin görünür. */
export const ukTuitionRange = '' as string

/** Vize türleri: her yerde aynı cümleler kullanılır. */
export const ukVisa = {
  visitor: 'Standard Visitor vizesi: 6 aya kadar dil kursları ve yaz okulları',
  shortTermStudy: 'Short-term Study vizesi: 6 aydan uzun, 11 aya kadar İngilizce kursları',
  student: 'Student vizesi: üniversite, foundation, yatılı lise ve diğer uzun dönem programlar',
  /** Ülke geneli özet (countries.ts > ingiltere.visa) */
  summary:
    '6 aya kadar dil kursları ve yaz okulları için Standard Visitor, 6 aydan uzun, 11 aya kadar İngilizce kursları için Short-term Study, üniversite ve uzun dönem programlar için Student vizesi gerekir. Finansal yeterlilik, kabul belgesi (Student vizesinde CAS) ve İngilizce yeterliliği vize dosyasının temelidir.',
  summer:
    'Türk vatandaşı öğrenciler İngiltere yaz okulları için Standard Visitor vizesine başvurur. 18 yaş altı başvurularda noter onaylı muvafakatname, ebeveyn finansal belgeleri ve okulun kabul belgesi istenir.',
  language:
    '6 aya kadar dil kursları Standard Visitor, 6 aydan uzun, 11 aya kadar İngilizce kursları Short-term Study vizesiyle yapılır. Her iki vize de çalışma hakkı tanımaz.',
  degree:
    'Lisans, foundation ve yüksek lisans için Student vizesi gerekir. Üniversitenin düzenlediği CAS numarası, finansal yeterlilik (harç + yaşam gideri), İngilizce yeterliliği ve sağlık katkı payı (IHS) dosyanın temelidir.',
  school:
    '16 yaş altı öğrenciler Child Student, 16–17 yaş öğrenciler programa göre Child Student veya Student vizesine başvurur. Okulun CAS belgesi, ebeveyn onayı ve İngiltere’de bir vasi (guardian) bilgisi istenir.',
}

/** Çalışma hakları. */
export const ukWork = {
  student:
    'Student vizesindeki lisans ve yüksek lisans öğrencileri dönem içinde haftada 20 saate kadar, lisans altı seviyede (ör. foundation) haftada 10 saate kadar çalışabilir; tatillerde tam zamanlı çalışma mümkündür.',
  visitor: 'Dil kursları için verilen Standard Visitor ve Short-term Study vizeleri çalışma hakkı tanımaz.',
  graduateRoute:
    'Lisans ve yüksek lisans mezunları Graduate Route ile İngiltere’de çalışma izni alabilir. 1 Ocak 2027 ve sonrasında yapılan başvurularda süre 18 aydır (doktora mezunları için 3 yıl).',
  /** Ülke geneli özet (countries.ts > ingiltere.work) */
  summary:
    'Student vizesindeki üniversite öğrencileri dönem içinde haftada 20 saate kadar çalışabilir. Dil kursları için verilen Standard Visitor ve Short-term Study vizeleri çalışma hakkı tanımaz.',
}

export const ukLiving =
  'Londra Avrupa’nın en pahalı şehirleri arasındadır; Manchester, Liverpool, Leeds veya Birmingham gibi şehirlerde konaklama ve günlük giderler belirgin şekilde daha uygundur.'

/** Ülke sayfasında program tipine göre değişen bloklar. */
export type InfoCard = { icon: string; title: string; text: string }
export type ProgramBlocks = {
  /** "Neden İngiltere?" kartları */
  highlights: { title: string; text: string }[]
  /** "Popüler Şehirler" kartları */
  cities: City[]
  /** "İngiltere kısaca > Popüler şehir" alanı */
  popularCities: string[]
  /** "Vize, Yaşam ve …" bölümünün başlığı ve kartları */
  infoTitle: string
  info: InfoCard[]
}

const universityCities: City[] = [
  { name: 'Londra', text: 'Dünyanın en kozmopolit öğrenci şehri; çok sayıda üniversite, güçlü iş bağlantıları ve staj imkânı. Yaşam maliyeti İngiltere ortalamasının üzerinde.', tags: ['Lisans', 'Yüksek lisans'] },
  { name: 'Manchester', text: 'Kuzey İngiltere’nin en büyük öğrenci şehirlerinden biri; mühendislik, işletme ve medya alanlarında güçlü üniversiteler, Londra’ya göre daha uygun konaklama.', tags: ['Lisans', 'Yüksek lisans'] },
  { name: 'Liverpool', text: 'Liman kenti; köklü üniversiteleri, canlı öğrenci hayatı ve uygun yaşam maliyetiyle öne çıkar.', tags: ['Lisans', 'Foundation'] },
  { name: 'Birmingham', text: 'İngiltere’nin ikinci büyük şehri; merkezi konumu, geniş kampüsleri ve iş dünyasına yakınlığıyla tercih edilir.', tags: ['Lisans', 'Yüksek lisans'] },
  { name: 'Leeds', text: 'Genç nüfusu ve öğrenci dostu yapısıyla bilinen, finans ve hukuk sektörlerinin güçlü olduğu bir şehir.', tags: ['Lisans', 'Yüksek lisans'] },
  { name: 'Edinburgh', text: 'İskoçya’nın tarihi başkenti; akademik gelenek, festival kültürü ve güvenli bir şehir hayatı.', tags: ['Lisans', 'Yüksek lisans'] },
]

const degreeHighlights = [
  { title: 'Russell Group ve sıralamalar', text: 'Araştırma odaklı 24 üniversiteden oluşan Russell Group ve dünya sıralamalarında üst sıralardaki kurumlar. Sıralamayı tek kriter değil, bölüm ve şehirle birlikte değerlendiriyoruz.' },
  { title: 'Graduate Route', text: ukWork.graduateRoute },
  { title: 'Foundation yolu', text: 'Türkiye’de lise mezunları birçok üniversiteye bir yıllık Foundation programıyla geçer; IB veya A-Level ile doğrudan başvuru da mümkündür.' },
  { title: 'Kısa süren programlar', text: 'Lisans genellikle 3 yıl, ders ağırlıklı yüksek lisans çoğunlukla 12 ay sürer; zaman ve yaşam maliyetinden tasarruf edersiniz.' },
]

export const ukProgramBlocks: Partial<Record<ProgramKey, ProgramBlocks>> = {
  yaz: {
    highlights: [
      { title: 'Kampüs konaklaması', text: 'Üniversite ve yatılı okul kampüslerinde, yaş gruplarına ayrılmış yatakhanelerde tam pansiyon konaklama.' },
      { title: 'Uluslararası sınıflar', text: 'Dünyanın farklı ülkelerinden yaşıtlarıyla aynı sınıfta; ders dışında da İngilizce konuşma zorunluluğu.' },
      { title: 'Dil + aktivite + gezi', text: 'Sabah İngilizce dersleri, öğleden sonra spor ve atölyeler, hafta sonu Londra, Oxford, Cambridge veya Bath gezileri.' },
      { title: 'İlk yurt dışı deneyimi için uygun', text: `${ukSummer.ages} arası öğrenciler için ${ukSummer.supervision}, giriş kontrollü kampüsler ve deneyimli grup liderleri.` },
    ],
    cities: [
      { name: 'Londra', text: 'Şehir merkezine yakın kampüsler; müze, tiyatro ve tarihi yapılarla dolu bir program. 13–17 yaş için daha uygundur.', tags: ['13–17 yaş', 'Şehir kampüsü'] },
      { name: 'Oxford ve Cambridge', text: 'Tarihi kolej binalarında konaklama ve akademik ağırlıklı programlar; liderlik ve üniversite hazırlık seçenekleri.', tags: ['12–17 yaş', 'Kolej konaklaması'] },
      { name: 'Brighton ve Bournemouth', text: 'Sahil kenarında daha sakin ve sosyal programlar; geniş aktivite alanları.', tags: ['10–17 yaş', 'Sahil'] },
      { name: 'Kırsal kampüsler', text: 'Geniş spor alanlarına sahip yatılı okul kampüsleri; küçük yaş grupları için korunaklı, kapalı ortam.', tags: ['7–12 yaş', 'Kapalı kampüs'] },
    ],
    popularCities: ['Londra', 'Oxford', 'Cambridge'],
    infoTitle: 'Vize, Güvenlik ve Seyahat',
    info: [
      { icon: 'file', title: 'Vize', text: ukVisa.summer },
      { icon: 'shield', title: 'Güvenlik ve gözetim', text: 'Belirli sayıda öğrenciye bir grup lideri, kampüs giriş kontrolü, gece yoklamaları ve 7/24 ulaşılabilen acil durum hattı.' },
      { icon: 'plane', title: 'Refakatsiz çocuk uçuşu', text: 'Havayollarının refakatsiz çocuk (UM) hizmeti kullanılabilir veya uygun dönemlerde refakatli grup uçuşlarına katılınabilir. Okul öğrenciyi havalimanında karşılar.' },
      { icon: 'user', title: 'Muvafakatname', text: '18 yaş altı öğrenciler için noter onaylı muvafakatname hem vize başvurusunda hem yurt dışına çıkışta istenir. Örnek metni kaynaklarımızda bulabilirsiniz.' },
    ],
  },
  dil: {
    highlights: [
      { title: 'Akredite dil okulları', text: 'British Council akreditasyonlu okullarda genel, yoğun, akademik ve sınav odaklı İngilizce kursları.' },
      { title: 'Esnek süre', text: '1 haftadan 1 yıla kadar dilediğiniz süreyi seçebilir, haftada 15–30 ders saati arasında yoğunluk belirleyebilirsiniz.' },
      { title: 'Sınav hazırlık', text: 'IELTS ve Cambridge sınavlarına hazırlık modülleriyle üniversite veya kariyer hedefinize uygun program.' },
      { title: 'Kültürel çeşitlilik', text: 'Londra başta olmak üzere dünyanın dört bir yanından öğrencinin bir araya geldiği çok kültürlü sınıflar.' },
    ],
    cities: [
      { name: 'Londra', text: 'Kariyer, kültür ve şehir hayatı; okul seçeneği en geniş şehir. Yaşam maliyeti yüksek.', tags: ['Genel İngilizce', 'İş İngilizcesi'] },
      { name: 'Brighton', text: 'Londra’ya trenle yaklaşık bir saat; genç ve canlı bir sahil şehri.', tags: ['Genel İngilizce', 'Sosyal hayat'] },
      { name: 'Oxford ve Cambridge', text: 'Akademik atmosfer; akademik İngilizce ve sınav hazırlık için tercih edilir.', tags: ['Akademik İngilizce', 'IELTS'] },
      { name: 'Manchester ve Liverpool', text: 'Daha uygun konaklama ve günlük giderler, canlı öğrenci şehirleri.', tags: ['Uygun maliyet'] },
      { name: 'Bournemouth', text: 'Güney sahilinde sakin bir şehir; aile yanı konaklama ve uygun fiyatlı programlar.', tags: ['Aile yanı', 'Sakin'] },
    ],
    popularCities: ['Londra', 'Brighton', 'Oxford'],
    infoTitle: 'Vize, Yaşam ve Çalışma',
    info: [
      { icon: 'file', title: 'Vize', text: ukVisa.language },
      { icon: 'globe', title: 'Yaşam maliyeti', text: ukLiving },
      { icon: 'user', title: 'Çalışma hakkı', text: ukWork.visitor },
    ],
  },
  lise: {
    highlights: [
      { title: 'Yatılı okul geleneği', text: 'Disiplinli akademik program, geniş spor, sanat ve kulüp imkânlarıyla İngiliz yatılı okulları.' },
      { title: 'GCSE ve A-Level', text: 'A-Level sonuçlarıyla İngiltere’deki ve dünyadaki üniversitelere doğrudan başvuru.' },
      { title: 'Vasi ve pastoral bakım', text: 'Her öğrencinin bir sorumlu öğretmeni (house parent) ve İngiltere’de bir vasisi (guardian) bulunur.' },
      { title: 'Üniversiteye hazırlık', text: 'Üniversite başvuru danışmanlığı, kişisel beyan ve mülakat hazırlığı okul programının parçasıdır.' },
    ],
    cities: [
      { name: 'Güney İngiltere', text: 'Londra’ya yakın, köklü yatılı okulların yoğun olduğu bölge.', tags: ['Yatılı okul'] },
      { name: 'Oxford ve Cambridge çevresi', text: 'Akademik ağırlıklı kolejler ve A-Level programları.', tags: ['A-Level'] },
      { name: 'Kuzey İngiltere', text: 'Daha uygun ücretli yatılı okul seçenekleri.', tags: ['Uygun maliyet'] },
    ],
    popularCities: ['Londra', 'Oxford', 'Cambridge'],
    infoTitle: 'Vize, Vasilik ve Yaşam',
    info: [
      { icon: 'file', title: 'Vize', text: ukVisa.school },
      { icon: 'shield', title: 'Vasi (guardian)', text: '18 yaş altı uluslararası öğrenciler için İngiltere’de yaşayan, okulun onayladığı bir vasi gereklidir; tatil ve izin günlerinde öğrenciden sorumludur.' },
      { icon: 'globe', title: 'Okul ücreti ve yaşam', text: 'Yatılı okul ücretine konaklama ve yemek dahildir; üniforma, geziler ve sınav ücretleri ayrıca hesaplanır.' },
    ],
  },
  lisans: {
    highlights: degreeHighlights,
    cities: universityCities,
    popularCities: ['Londra', 'Manchester', 'Edinburgh'],
    infoTitle: 'Vize, Yaşam ve Çalışma',
    info: [
      { icon: 'file', title: 'Vize', text: ukVisa.degree },
      { icon: 'globe', title: 'Yaşam maliyeti', text: ukLiving },
      { icon: 'user', title: 'Çalışma hakkı', text: `${ukWork.student} ${ukWork.graduateRoute}` },
    ],
  },
  'yuksek-lisans': {
    highlights: [degreeHighlights[3], degreeHighlights[0], degreeHighlights[1], { title: 'Kariyer odaklı programlar', text: 'İşletme, veri bilimi, mühendislik ve hukuk gibi alanlarda sektörle bağlantılı, uygulamalı yüksek lisans programları.' }],
    cities: universityCities,
    popularCities: ['Londra', 'Manchester', 'Leeds'],
    infoTitle: 'Vize, Yaşam ve Çalışma',
    info: [
      { icon: 'file', title: 'Vize', text: ukVisa.degree },
      { icon: 'globe', title: 'Yaşam maliyeti', text: ukLiving },
      { icon: 'user', title: 'Çalışma hakkı', text: `${ukWork.student} ${ukWork.graduateRoute}` },
    ],
  },
}
