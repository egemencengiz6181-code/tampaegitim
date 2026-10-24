// Çekya üniversiteleri bölümü (/cekya-universiteleri).
// Üniversite bilgileri kurumların kendi tanıtımlarından derlenmiştir. Ücretler yaklaşıktır ve program
// bazında değişir; kesin ücret, kontenjan ve son başvuru tarihleri için Tampa ile iletişime geçilir.
import type { Faq } from './programs'

export type CzechUni = {
  name: string
  /** Çekçe resmi adı */
  local: string
  city: string
  founded: string
  type: 'Devlet' | 'Özel'
  focus: string[]
  text: string
}

export const czechFacts = [
  { label: 'Başkent', value: 'Prag' },
  { label: 'Resmi dil', value: 'Çekçe' },
  { label: 'Para birimi', value: 'Çek Korunası (CZK)' },
  { label: 'Komşuları', value: 'Almanya, Polonya, Slovakya, Avusturya' },
  { label: 'Uçuş süresi', value: 'İstanbul’dan ~2 sa 30 dk' },
  { label: 'Üyelikler', value: 'AB, Schengen, Erasmus+' },
]

export const czechAdvantages: { title: string; text?: string; list?: string[] }[] = [
  {
    title: 'Çekçe eğitim devlet üniversitelerinde ücretsiz',
    text: 'Çek devlet üniversitelerinde Çekçe verilen lisans ve yüksek lisans programları, uyruk ayrımı yapılmadan uluslararası öğrenciler için de ücretsizdir. Öğrenci yalnızca yaşam giderlerini ve bazı idari ücretleri karşılar.',
  },
  {
    title: 'YKS şartı yok',
    text: 'Lisans başvurularında Türkiye’deki üniversite sınavına girme veya bir bölüme yerleşme şartı aranmaz. Kabul; lise diploması, not ortalaması ve bazı bölümlerde üniversitenin kendi giriş sınavı ya da mülakatı üzerinden yapılır.',
  },
  {
    title: 'Uygun fiyatlı İngilizce programlar',
    text: 'Çekçe bilmeyen öğrenciler için İngilizce programlar yaygındır. Ücretler Batı Avrupa ve İngiltere’ye göre belirgin şekilde düşüktür.',
  },
  {
    title: 'Köklü ve tanınan üniversiteler',
    text: '1348’de kurulan Charles Üniversitesi Orta Avrupa’nın en eski üniversitesidir. Çek devlet üniversitelerinin diplomaları Avrupa genelinde tanınır; YÖK denkliği süreçleri de bu kurumlarda sorunsuz yürür.',
  },
  {
    title: 'Avrupa’nın merkezinde, ekonomik yaşam',
    list: [
      'AB ve Schengen üyesi: öğrenci oturum izniyle Schengen bölgesinde seyahat imkânı.',
      'Prag, Brno ve Olomouc gibi şehirlerde yurt ücretleri Batı Avrupa’nın çok altındadır.',
      'Erasmus+ ile eğitiminizin bir dönemini başka bir Avrupa ülkesinde geçirebilirsiniz.',
    ],
  },
  {
    title: 'Okurken çalışma imkânı',
    text: 'Akredite bir programda tam zamanlı okuyan öğrenciler Çekya’da ayrı bir çalışma izni almadan yarı zamanlı çalışabilir. Mezuniyet sonrasında da iş arama amaçlı oturum izni seçenekleri bulunur.',
  },
]

export const czechLanguageOptions = [
  {
    title: 'Çekçe programlar',
    text: 'Devlet üniversitelerinde ücretsizdir. Başvuru için genellikle B2 seviyesinde Çekçe beklenir; bu yüzden öğrencilerin çoğu önce bir yıllık Çekçe hazırlık programına katılır.',
  },
  {
    title: 'İngilizce programlar',
    text: 'Ücretlidir ve Çekçe şartı yoktur. Genellikle B2 seviyesi (IELTS 5.5–6.5 veya muadili) beklenir; bazı üniversiteler kendi İngilizce sınavını uygular.',
  },
  {
    title: 'Çekçe hazırlık',
    text: 'Bir akademik yıl süren yoğun dil programıdır. Tıp, mühendislik veya ekonomi gibi alanlara yönelik, bölüm derslerini de içeren hazırlık paketleri bulunur.',
  },
  {
    title: 'İngilizce hazırlık ve foundation',
    text: 'İngilizcesi yeterli olmayan adaylar için dil eğitimiyle birlikte bölüme yönelik temel derslerin (örneğin tıp için biyoloji ve kimya) verildiği hazırlık programlarıdır.',
  },
]

export const czechDurations = [
  { label: 'Lisans (Bachelor)', value: '3–4 yıl' },
  { label: 'Yüksek lisans (Master)', value: '1,5–2 yıl' },
  { label: 'Tıp (genel tıp)', value: '6 yıl' },
  { label: 'Diş hekimliği ve eczacılık', value: '5 yıl' },
  { label: 'Doktora (PhD)', value: '3–4 yıl' },
  { label: 'Hazırlık', value: '1 yıl' },
]

export const czechUnis: CzechUni[] = [
  {
    name: 'Charles Üniversitesi',
    local: 'Univerzita Karlova',
    city: 'Prag',
    founded: '1348',
    type: 'Devlet',
    focus: ['Tıp ve diş hekimliği', 'Hukuk', 'Sosyal bilimler', 'Fen bilimleri'],
    text: 'Orta Avrupa’nın en eski ve Çekya’nın en prestijli üniversitesi. Prag, Plzeň ve Hradec Králové’deki fakülteleriyle İngilizce tıp programlarının en çok tercih edilen adresi.',
  },
  {
    name: 'Çek Teknik Üniversitesi (ČVUT)',
    local: 'České vysoké učení technické v Praze',
    city: 'Prag',
    founded: '1707',
    type: 'Devlet',
    focus: ['Mühendislik', 'Bilgisayar bilimleri', 'Mimarlık', 'Elektrik-elektronik'],
    text: 'Avrupa’nın en eski teknik üniversitelerinden biri. Bilgisayar, inşaat, makine ve elektrik mühendisliğinde güçlü İngilizce programları vardır.',
  },
  {
    name: 'Prag Kimya ve Teknoloji Üniversitesi (UCT)',
    local: 'Vysoká škola chemicko-technologická v Praze',
    city: 'Prag',
    founded: '1952',
    type: 'Devlet',
    focus: ['Kimya mühendisliği', 'Gıda teknolojisi', 'Biyokimya', 'Malzeme bilimi'],
    text: 'Kimya, gıda ve biyoteknoloji alanlarında uzmanlaşmış, laboratuvar ağırlıklı eğitim veren bir teknik üniversite.',
  },
  {
    name: 'Çek Yaşam Bilimleri Üniversitesi (CZU)',
    local: 'Česká zemědělská univerzita v Praze',
    city: 'Prag',
    founded: '1906',
    type: 'Devlet',
    focus: ['Ekonomi ve yönetim', 'Tarım', 'Çevre bilimleri', 'Ormancılık'],
    text: 'Geniş yeşil kampüsüyle bilinen, tarım ve çevre bilimlerinin yanında ekonomi ve işletme programları da sunan üniversite.',
  },
  {
    name: 'Prag Ekonomi ve İşletme Üniversitesi (VŠE)',
    local: 'Vysoká škola ekonomická v Praze',
    city: 'Prag',
    founded: '1953',
    type: 'Devlet',
    focus: ['İşletme', 'Uluslararası ilişkiler', 'Finans', 'Bilişim yönetimi'],
    text: 'Çekya’nın ekonomi ve işletme alanında en büyük üniversitesi; İngilizce lisans ve yüksek lisans programlarıyla uluslararası öğrencilerin ilgisini çeker.',
  },
  {
    name: 'Masaryk Üniversitesi',
    local: 'Masarykova univerzita',
    city: 'Brno',
    founded: '1919',
    type: 'Devlet',
    focus: ['Tıp', 'Bilişim', 'Ekonomi', 'Sosyal bilimler'],
    text: 'Çekya’nın ikinci büyük üniversitesi. Brno’nun genç ve ekonomik öğrenci yaşamıyla birlikte tıp, bilişim ve sosyal bilimlerde güçlü programlar sunar.',
  },
  {
    name: 'Brno Teknik Üniversitesi (VUT)',
    local: 'Vysoké učení technické v Brně',
    city: 'Brno',
    founded: '1899',
    type: 'Devlet',
    focus: ['Mühendislik', 'Bilgi teknolojileri', 'Mimarlık', 'İşletme'],
    text: 'Bilgi teknolojileri, makine ve elektrik mühendisliği fakülteleriyle öne çıkan, sanayiyle yakın çalışan teknik üniversite.',
  },
  {
    name: 'Mendel Üniversitesi',
    local: 'Mendelova univerzita v Brně',
    city: 'Brno',
    founded: '1919',
    type: 'Devlet',
    focus: ['Tarım ve gıda', 'Ormancılık', 'Ekonomi', 'Peyzaj mimarlığı'],
    text: 'Adını genetiğin kurucusu Gregor Mendel’den alan, tarım, ormancılık ve ekonomi alanlarında uzmanlaşmış üniversite.',
  },
  {
    name: 'Palacký Üniversitesi',
    local: 'Univerzita Palackého v Olomouci',
    city: 'Olomouc',
    founded: '1573',
    type: 'Devlet',
    focus: ['Tıp ve diş hekimliği', 'Fen bilimleri', 'Beden eğitimi', 'Sanat'],
    text: 'Çekya’nın en eski ikinci üniversitesi. Sakin ve ekonomik bir öğrenci şehri olan Olomouc’ta İngilizce tıp ve diş hekimliği programları sunar.',
  },
  {
    name: 'VŠB – Ostrava Teknik Üniversitesi',
    local: 'Vysoká škola báňská – Technická univerzita Ostrava',
    city: 'Ostrava',
    founded: '1849',
    type: 'Devlet',
    focus: ['Mühendislik', 'Bilgisayar bilimleri', 'Ekonomi', 'Malzeme'],
    text: 'Maden okulu olarak kurulan, bugün mühendislik, bilgisayar ve ekonomi alanlarında geniş program yelpazesi sunan teknik üniversite.',
  },
  {
    name: 'Batı Bohemya Üniversitesi',
    local: 'Západočeská univerzita v Plzni',
    city: 'Plzeň',
    founded: '1991',
    type: 'Devlet',
    focus: ['Mühendislik', 'Hukuk', 'Ekonomi', 'Tasarım'],
    text: 'Prag’a yakın Plzeň’de; mühendislik, uygulamalı bilimler, hukuk ve tasarım fakülteleri olan çok alanlı bir üniversite.',
  },
  {
    name: 'Tomas Bata Üniversitesi',
    local: 'Univerzita Tomáše Bati ve Zlíně',
    city: 'Zlín',
    founded: '2001',
    type: 'Devlet',
    focus: ['Polimer ve malzeme', 'Tasarım ve multimedya', 'Ekonomi', 'Bilişim'],
    text: 'Polimer mühendisliği, tasarım ve işletme alanlarında uygulamalı eğitimiyle bilinen genç bir üniversite.',
  },
  {
    name: 'Liberec Teknik Üniversitesi',
    local: 'Technická univerzita v Liberci',
    city: 'Liberec',
    founded: '1953',
    type: 'Devlet',
    focus: ['Tekstil mühendisliği', 'Makine', 'Nanoteknoloji', 'Ekonomi'],
    text: 'Tekstil ve nanoteknoloji alanındaki çalışmalarıyla tanınan, Almanya ve Polonya sınırına yakın teknik üniversite.',
  },
  {
    name: 'Pardubice Üniversitesi',
    local: 'Univerzita Pardubice',
    city: 'Pardubice',
    founded: '1950',
    type: 'Devlet',
    focus: ['Kimya', 'Ulaştırma', 'Elektrik ve bilişim', 'Sağlık bilimleri'],
    text: 'Kimya teknolojisi kökenli, bugün ulaştırma, bilişim ve sağlık bilimlerinde de programları olan üniversite.',
  },
  {
    name: 'Hradec Králové Üniversitesi',
    local: 'Univerzita Hradec Králové',
    city: 'Hradec Králové',
    founded: '1959',
    type: 'Devlet',
    focus: ['Bilişim ve yönetim', 'Eğitim', 'Fen bilimleri', 'Sanat'],
    text: 'Bilişim ve yönetim fakültesiyle öne çıkan, sakin bir öğrenci şehrinde orta ölçekli bir üniversite.',
  },
  {
    name: 'Ostrava Üniversitesi',
    local: 'Ostravská univerzita',
    city: 'Ostrava',
    founded: '1991',
    type: 'Devlet',
    focus: ['Tıp ve sağlık', 'Fen bilimleri', 'Sanat', 'Sosyal bilimler'],
    text: 'Tıp, sağlık bilimleri ve sanat fakülteleri bulunan, Ostrava’nın ikinci büyük üniversitesi.',
  },
  {
    name: 'Prag Metropolitan Üniversitesi',
    local: 'Metropolitní univerzita Praha',
    city: 'Prag',
    founded: '2001',
    type: 'Özel',
    focus: ['Uluslararası ilişkiler', 'Siyaset bilimi', 'İşletme', 'Medya'],
    text: 'Uluslararası ilişkiler ve işletme alanlarında İngilizce programlar sunan, devlet tarafından akredite özel üniversite.',
  },
]

export const czechCosts = [
  { label: 'Çekçe programlar (devlet)', value: 'Ücretsiz', note: 'Standart öğrenim süresi aşılırsa ek ücret alınabilir.' },
  { label: 'İngilizce lisans ve yüksek lisans', value: 'Yıllık ~2.000–10.000 €', note: 'Bölüme ve üniversiteye göre değişir.' },
  { label: 'İngilizce tıp ve diş hekimliği', value: 'Yıllık ~12.500–24.500 €', note: 'Fakülteye göre değişir.' },
  { label: 'Çekçe hazırlık (1 yıl)', value: 'Programa göre', note: 'Bölüme yönelik paketlerde ücret artar.' },
  { label: 'Öğrenci yurdu', value: 'Aylık ~150–300 €', note: 'Paylaşımlı oda; şehre göre değişir.' },
  { label: 'Paylaşımlı daire', value: 'Aylık ~250–450 €', note: 'Prag diğer şehirlere göre pahalıdır.' },
  { label: 'Toplam yaşam gideri', value: 'Aylık ~550–900 €', note: 'Konaklama, yemek, ulaşım ve kişisel giderler.' },
]

export const czechAdmission = [
  'Lise diploması ve transkript (yüksek lisans için lisans diploması ve transkript)',
  'Diplomanın Çekya’da tanınması (nostrifikasyon), Çekçe yeminli tercümesiyle birlikte',
  'İngilizce programlar için B2 seviyesi (IELTS, TOEFL veya üniversitenin kendi sınavı); Çekçe programlar için Çekçe B2',
  'Bazı bölümlerde üniversitenin giriş sınavı veya mülakatı (tıpta biyoloji, kimya ve fizik ağırlıklı)',
  'Pasaport, başvuru formu ve başvuru ücreti',
  'Programa göre motivasyon mektubu, CV veya portfolyo',
]

export const czechNostrification = [
  'Lise diploması için başvuru, öğrencinin okuyacağı bölgedeki il yönetimine (Krajský úřad) yapılır.',
  'Üniversite diploması (yüksek lisans başvurusu) için Çek devlet üniversiteleri veya Eğitim, Gençlik ve Spor Bakanlığı (MŠMT) yetkilidir.',
  'Diploma, transkript ve Çekçe yeminli tercümeleri (apostilli) ile kimlik belgesi istenir; bazı durumlarda fark sınavı yapılabilir.',
  'Süreç genellikle 1–3 ay sürer; bu yüzden başvuru takvimine en başta eklenmelidir.',
]

export const czechCalendar = [
  { label: 'Hazırlık programları', value: 'Yıl boyunca başvuru alınır; vize süresi nedeniyle en geç Nisan–Mayıs öneriyoruz.' },
  { label: 'Lisans ve yüksek lisans', value: 'Çoğu programda başvurular Kasım–Nisan arasında yapılır; son tarihler üniversiteye göre değişir.' },
  { label: 'Tıp ve sınavlı bölümler', value: 'Son başvuru tarihleri genellikle Şubat–Mart; giriş sınavları ilkbaharda yapılır.' },
  { label: 'Vize', value: 'Kabul sonrası hemen başvurulmalı; dosyanın Ağustos’a kadar sonuçlanmasını hedefliyoruz.' },
]

export const czechVisaDocs = [
  'Uzun süreli öğrenci vizesi başvuru formu ve biyometrik fotoğraflar',
  'Pasaport (geçerlilik süresi yeterli olmalı)',
  'Üniversite kabul belgesi',
  'Mali yeterlilik kanıtı (banka hesabı veya burs belgesi)',
  'Çekya’daki konaklama belgesi (yurt veya kira sözleşmesi)',
  'Seyahat ve sağlık sigortası',
  'Adli sicil kaydı (apostilli ve Çekçe tercümeli)',
]

export const czechSteps = [
  { title: 'Ön görüşme', text: 'Not ortalamanızı, dil seviyenizi, bütçenizi ve hedef bölümünüzü konuşur; Çekçe ücretsiz mi, İngilizce mi okumanın size uygun olduğunu birlikte belirleriz.' },
  { title: 'Üniversite ve program seçimi', text: 'Bölümünüze uygun üniversiteleri, giriş sınavı ve son başvuru tarihleriyle birlikte listeleriz.' },
  { title: 'Nostrifikasyon ve evrak', text: 'Diploma tanınma başvurusu, yeminli tercümeler ve başvuru dosyanızı hazırlarız.' },
  { title: 'Başvuru ve sınav', text: 'Online başvuruları yapar, giriş sınavı veya mülakata hazırlanmanız için yol gösteririz.' },
  { title: 'Vize başvurusu', text: 'Kabul belgesiyle uzun süreli öğrenci vizesi dosyanızı hazırlar, randevu sürecini takip ederiz.' },
  { title: 'Çekya’ya varış', text: 'Yurt veya daire, yabancılar polisine kayıt ve sigorta adımlarında rehberlik ederiz.' },
]

export const czechFaqs: Faq[] = [
  { q: 'Çekya’da üniversite eğitimi gerçekten ücretsiz mi?', a: 'Evet, Çek devlet üniversitelerinde Çekçe verilen programlar uyruk ayrımı olmadan ücretsizdir. Bunun için Çekçe programa başvuracak seviyede (genellikle B2) Çekçe bilmeniz gerekir; öğrencilerin çoğu önce bir yıllık Çekçe hazırlık programına katılır. İngilizce programlar ise ücretlidir.' },
  { q: 'Çekya’da üniversite okumak için YKS gerekli mi?', a: 'Hayır. Türkiye’deki üniversite sınavına girme veya bir bölüme yerleşme şartı yoktur. Lise diplomanız, not ortalamanız ve bazı bölümlerde üniversitenin kendi giriş sınavı veya mülakatı üzerinden değerlendirilirsiniz.' },
  { q: 'İngilizce programların yıllık ücreti ne kadar?', a: 'Lisans ve yüksek lisans programlarında yıllık ücretler genellikle 2.000–10.000 € arasındadır. İngilizce tıp ve diş hekimliği programları daha yüksektir (yaklaşık yıllık 12.500–24.500 €; Prag’daki fakültelerde üst sınıra yakın). Ücretler üniversite ve bölüme göre değişir.' },
  { q: 'Çekya’da sınavsız tıp okunabilir mi?', a: 'YKS gerekmez, ancak tıp fakülteleri kendi giriş sınavlarını yapar. Sınav genellikle biyoloji, kimya ve fizik ağırlıklıdır. Sınava hazır olmayan öğrenciler için tıbba yönelik İngilizce veya Çekçe hazırlık programları vardır. Türkiye’de hekimlik yapabilmek için mezuniyet sonrası YÖK denkliği ve ilgili seviye tespit sınavı süreçleri tamamlanmalıdır.' },
  { q: 'Nostrifikasyon nedir, ne kadar sürer?', a: 'Nostrifikasyon, lise veya üniversite diplomanızın Çekya’da resmî olarak tanınmasıdır. Lise diploması için il yönetimine (Krajský úřad) başvurulur; süreç genellikle 1–3 ay sürer. Bu nedenle başvuru takviminizin en başında planlanmalıdır.' },
  { q: 'Hangi şehirleri önerirsiniz?', a: 'Öğrencilerin en çok tercih ettiği şehir Prag’dır; üniversite sayısı ve iş imkânları en yüksek, yaşam maliyeti de en pahalı şehirdir. Brno canlı öğrenci yaşamı ve daha uygun giderleriyle ikinci sıradadır. Olomouc, Ostrava, Plzeň ve Hradec Králové daha sakin ve ekonomik seçeneklerdir.' },
  { q: 'Okurken çalışabilir miyim?', a: 'Akredite bir programda tam zamanlı okuyan öğrenciler Çekya’da ayrı bir çalışma izni almadan yarı zamanlı çalışabilir. Yine de Çekya’ya giderken bütçenizi çalışma gelirine göre değil, kendi kaynaklarınıza göre planlamanızı öneririz.' },
  { q: 'Başvuruları ne zaman yapmalıyım?', a: 'Doğrudan bölüm başvuruları çoğu üniversitede Kasım–Nisan arasında, tıp gibi sınavlı bölümlerde ise genellikle Şubat–Mart’a kadar yapılır. Nostrifikasyon ve vize sürelerini de hesaba katarak, Eylül başlangıcı için en geç bir önceki yılın sonbaharında hazırlığa başlamanızı öneririz.' },
]
