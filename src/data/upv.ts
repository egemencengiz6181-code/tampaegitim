// UPV (Universitat Politècnica de València) bölümü: /valensiya-politeknik-universitesi ve alt sayfaları.
// Kaynaklar (2026-11-10): Tampa'ya iletilen UPV tanıtım broşürleri (Spanish Foundation Program 2027,
// PCE University Admission Course 2026/27, iki İngilizce yüksek lisans broşürü), hazırlık programı ücret
// tablosu, lisans ücret tablosu (Excel) ve upv.es'teki resmi bölüm sayfaları (kontenjan, taban puan, kariyer).
// Ücretler program ortağının tablolarındandır ve önceden haber verilmeksizin değişebilir.
import type { Faq } from './programs'

export const upvBase = '/valensiya-politeknik-universitesi'
export const upvPaths = {
  hub: upvBase,
  foundation: `${upvBase}/ispanyolca-hazirlik-programi`,
  pce: `${upvBase}/pce-universite-giris-kursu`,
  bachelors: `${upvBase}/lisans-programlari`,
  masters: `${upvBase}/yuksek-lisans`,
}
export const upvUpdated = '2026-11-10'

/** Broşürdeki öne çıkan bilgiler (UPV'nin kendi tanıtımına göre). */
export const upvHighlights = [
  { title: 'İspanya’nın 1 numaralı teknik üniversitesi', text: 'UPV, kendi tanıtımında İspanya’nın önde gelen teknik üniversitesi ve dünyanın ilk 400 üniversitesi arasında yer aldığını belirtiyor.' },
  { title: 'Şirketlerle güçlü bağlar', text: 'Deloitte, Ford, HP, P&G, Schneider Electric ve Leroy Merlin gibi şirketlerle yaptığı anlaşma sayısında Avrupa’nın ilk 10 üniversitesi arasında gösteriliyor.' },
  { title: 'Mezun istihdamı', text: 'Mezunlarının iş bulma oranına göre dünyanın ilk 250 üniversitesi arasında yer alıyor.' },
  { title: 'Üç modern kampüs', text: 'Valensiya, Gandia ve Alcoy kampüslerinin her birinde güncel donanımlı derslikler, kütüphaneler ve spor tesisleri bulunuyor.' },
  { title: 'Erasmus ve değişim', text: 'Lisansın ikinci yılından itibaren uygun öğrenciler Erasmus ile bir dönemini başka bir Avrupa ülkesinde geçirebilir.' },
  { title: 'Devlet üniversitesi ücretleri', text: 'Lisans eğitiminde yıllık ücret yaklaşık 1.535–2.081 € arasında. Özel üniversitelere göre çok daha düşük bir bütçeyle Avrupa diploması.' },
]

export const upvCampuses = [
  {
    name: 'Valensiya Kampüsü',
    city: 'Valensiya',
    image: '/img/upv/valensiya-kampus.jpg',
    alt: 'UPV Valensiya kampüsünde İnşaat Mühendisliği Okulu binası',
    text: 'Ana kampüs. İspanya’nın üçüncü büyük şehri Valensiya’da; mühendislik, mimarlık ve işletme fakültelerinin büyük bölümü burada. İngilizce yüksek lisanslar bu kampüste.',
  },
  {
    name: 'Gandia Kampüsü',
    city: 'Gandia',
    image: '/img/upv/gandia-plaj.jpg',
    alt: 'Gandia’da Akdeniz kıyısındaki geniş kumsal',
    text: 'Akdeniz kıyısında, sahile yakın bir kampüs. İspanyolca hazırlık programı ve PCE kursu burada. Çevre bilimleri, interaktif teknolojiler ve telekomünikasyon lisansları da Gandia’da.',
  },
  {
    name: 'Alcoy Kampüsü',
    city: 'Alcoy (Alcoi)',
    image: '/img/upv/alcoy-kampus.jpg',
    alt: 'UPV Alcoy kampüsünün tarihi taş binası ve meydanı',
    text: 'Tarihi bir sanayi şehrinde, daha küçük ve sakin bir kampüs. İşletme ile kimya ve tekstil mühendisliği bu kampüste.',
  },
]

/* ---------- İspanyolca hazırlık (foundation) ---------- */

export const foundationFacts = [
  { label: 'Program', value: 'İspanyolca Dil ve Kültür Hazırlık Kursu (B1–B2)' },
  { label: 'Kampüs', value: 'UPV Gandia (Escola Politècnica Superior de Gandia)' },
  { label: 'Hedef seviye', value: 'B2 İspanyolca (SIELE ile belgelenir)' },
  { label: 'Sonrası', value: 'UPV’de lisans veya yüksek lisans' },
  { label: 'Program ücreti', value: '9.500 €' },
  { label: 'Erken ödeme bursu', value: '31 Aralık 2026’ya kadar tam ödemede %25' },
]

export const foundationSteps = [
  { title: 'Hazırlık programına başvuru', text: 'Lise diploması veya lisans diplomanız ve hedef bölümünüzle başvuru yaparız; 500 € kayıt ücretiyle yeriniz ayrılır.' },
  { title: 'UPV kampüsünde İspanyolca', text: 'Gandia kampüsünde yoğun İspanyolca ve İspanyol kültürü dersleriyle B1’den B2’ye ilerlersiniz.' },
  { title: 'B2 ve kayıt', text: 'Program sonunda B2 seviyesini belgeleyerek UPV’deki lisans veya yüksek lisans programınıza kaydolursunuz.' },
]

export type FeeRow = { label: string; amount: string; note: string }

/** Hazırlık programı ücret tablosu (2027 dönemi). */
export const foundationFees: FeeRow[] = [
  { label: 'Kayıt ücreti', amount: '500 €', note: 'İade edilmez.' },
  { label: 'Program (eğitim) ücreti', amount: '9.500 €', note: 'Ödeme takvimi ve iade koşullarına tabidir.' },
  { label: 'Erken ödeme bursu', amount: '%25 indirim (7.125 €)', note: 'Program ücretinin tamamı 31 Aralık 2026’ya kadar ödenirse eğitim ücretine uygulanır.' },
  { label: 'Konaklama depozitosu', amount: 'Yurt 1.000 € · Paylaşımlı daire 500 €', note: 'Ödeme takvimi ve iade koşullarına tabidir.' },
  { label: 'Konaklama ücreti', amount: 'Daha sonra açıklanacak', note: 'Konaklama tipine göre belirlenir.' },
  { label: 'Noter ve vasilik (18 yaş altı)', amount: '75 € + haftalık 35 €', note: 'Noter ücreti ve Eylül’den öğrenci 18 yaşına girene kadar haftalık vasilik ücreti. İade edilmez.' },
  { label: 'Havalimanı karşılama', amount: 'Yaklaşık 200 € (isteğe bağlı)', note: 'Tek yön, kişi başı; öğrenciye eşlik edenlerden de alınır. Hafta içi 09.00–18.30 arası.' },
  { label: 'Oturum kartı (TIE)', amount: 'Yaklaşık 18–20 €', note: 'İspanya’ya varıştan sonra ödenir. İade edilmez.' },
  { label: 'Denklik ve üniversite kabul hizmeti', amount: 'Yaklaşık 600 €', note: 'Lisans/yüksek lisans kaydı için homologación ve kabul işlemleri; üniversitenin kendi başvuru ücreti dahil değildir. Varıştan sonra ödenir.' },
  { label: 'SIELE sınav ücreti', amount: '150 €', note: 'B2 belgesi için. Varıştan sonra ödenir. İade edilmez.' },
]

/** Hazırlık sonrası İspanyolca yüksek lisans seçenekleri (broşürdeki liste). */
export const foundationMasters = [
  'Kullanıcı Deneyimi (UX) Yüksek Lisansı',
  'Uygulamalı Nöropazarlama Yüksek Lisansı',
  'Pazarlama ve Kurumsal İletişim Yüksek Lisansı',
  'Pazarlama ve Dijital İletişim Yüksek Lisansı',
  'Nöroiletişim ve Nöro-satış Yüksek Lisansı',
  'Spor Yönetimi ve Aktif Turizm Yüksek Lisansı',
  'Spor İşletmeleri Yönetimi Yüksek Lisansı',
]

export const foundationFaqs: Faq[] = [
  { q: 'UPV İspanyolca hazırlık programına kimler katılabilir?', a: 'Lise mezunu olup UPV’de lisans okumak isteyen öğrenciler ile lisans mezunu olup UPV’de yüksek lisans yapmak isteyenler katılabilir. Yüksek lisans adaylarının önce yüksek lisans programına başvurup kabul alması, ardından hazırlık programına başlaması gerekir.' },
  { q: 'Programa başlamak için İspanyolca bilmek gerekir mi?', a: 'Program B1 ve B2 seviyelerini kapsar. Başlangıç seviyeniz düşükse, hazırlıktan önce kısa bir İspanyolca kursuyla temel atmanızı öneririz. Seviyenizi ücretsiz ön görüşmede birlikte değerlendiriyoruz.' },
  { q: 'Hazırlık programı ücreti ne kadar, burs var mı?', a: 'Program ücreti 9.500 €, kayıt ücreti 500 €’dur. Program ücretinin tamamını 31 Aralık 2026’ya kadar ödeyen öğrencilere eğitim ücretinde %25 indirim uygulanır; ücret 7.125 €’ya düşer. Burslar yalnızca kendi bütçesiyle okuyan (self-funded) öğrenciler içindir.' },
  { q: 'Hazırlık bitince UPV’de hangi bölümleri okuyabilirim?', a: 'Program sonunda yapılan seviye sınavında B2’yi belgeleyen öğrenciler; İşletme, Çevre Bilimleri, İnteraktif Teknolojiler, Telekomünikasyon Ses ve Görüntü Mühendisliği, Geomatik ve Harita Mühendisliği, Orman ve Çevre Mühendisliği ile Kimya ve Tekstil Mühendisliği çift diploma programlarına başvurabilir.' },
  { q: '18 yaşından küçükler katılabilir mi?', a: 'Evet. 18 yaş altı öğrenciler için noter onaylı vasilik düzenlemesi yapılır: 75 € noter ücreti ve Eylül’den öğrenci 18 yaşına girene kadar haftalık 35 € vasilik ücreti alınır.' },
  { q: 'Konaklama nasıl ayarlanıyor?', a: 'Yurt veya paylaşımlı daire seçenekleri vardır. Yer ayırtmak için yurtta 1.000 €, paylaşımlı dairede 500 € depozito alınır. Konaklama ücretleri dönem yaklaştığında açıklanır; seçimi sizinle birlikte yapıyoruz.' },
]

/* ---------- PCE üniversite giriş kursu ---------- */

export const pceFacts = [
  { label: 'Format', value: 'Yüz yüze, sabah dersleri' },
  { label: 'Süre', value: '30 ders haftası + sınavlar' },
  { label: 'Başlangıç', value: '14 Eylül (2026/27 dönemi)' },
  { label: 'Sınav', value: 'Mayıs’ta UNED PCE sınavları' },
  { label: 'Kampüs', value: 'UPV Gandia' },
  { label: 'Ücret', value: 'Başvuru 500 € · Program 9.500 €’dan' },
]

export const pceTracks = [
  { title: 'Teknik', subjects: 'Matematik II, Fizik, İngilizce, Teknik Resim', ideal: 'Bilişim, mühendislik ve mimarlık' },
  { title: 'Sağlık', subjects: 'Matematik II, Kimya, Biyoloji, İngilizce', ideal: 'Tıp, fizyoterapi, biyoloji, biyomedikal, hemşirelik, veterinerlik, psikoloji, gastronomi' },
  { title: 'İşletme', subjects: 'Matematik I, İngilizce, İşletme, İş Modeli Tasarımı, Coğrafya', ideal: 'İşletme, pazarlama, hukuk, ekonomi, reklamcılık, uluslararası ilişkiler ve halkla ilişkiler' },
  { title: 'Sanat', subjects: 'Tasarım, Sanatsal Temeller, Sanat Tarihi, Görsel-İşitsel Kültür', ideal: 'Güzel sanatlar, görsel-işitsel iletişim, sanat tarihi, tasarım ve yaratıcı teknolojiler' },
]

export const pceAudience = [
  'Resmî B2 İspanyolca belgesi veya geçerli bir denk belgesi olan uluslararası öğrenciler.',
  'İspanyolca konuşan ama İspanya dışındaki bir eğitim sisteminden gelen öğrenciler.',
  'Kabul puanını yükseltmek ve İspanya’daki üniversite sistemine uyum sağlamak isteyen gençler.',
]

export const pceWhy = [
  'UNED PCE sınavlarına hedefli hazırlık.',
  'Seçtiğiniz alana göre şekillenen akademik dersler.',
  'Hedeflediğiniz lisans bölümüyle uyumlu sınav seçimi.',
  'Kabul puanında somut artış hedefi.',
  'İlk günden üniversite kampüsünde öğrencilik deneyimi: derslik, kütüphane, çalışma salonları, spor tesisleri ve öğrenci intraneti.',
]

export const pceFaqs: Faq[] = [
  { q: 'PCE nedir, neden önemlidir?', a: 'PCE (Pruebas de Competencias Específicas), İspanya dışındaki bir eğitim sisteminden gelen öğrencilerin UNEDasiss üzerinden girdiği konu sınavlarıdır. PCE’ye girmeyen bir Türk lise mezununun giriş notu genellikle 14 üzerinden 5–6 civarında kalır; rekabetçi bölümler için puanı yükseltmenin yolu PCE’dir.' },
  { q: 'UPV PCE kursuna katılmak için İspanyolca seviyem ne olmalı?', a: 'Kurs, resmî B2 İspanyolca belgesi veya denk bir belgesi olan öğrenciler içindir. B2’niz yoksa önce UPV İspanyolca hazırlık programıyla başlamanızı öneririz.' },
  { q: 'Kurs hangi alanlarda hazırlık veriyor?', a: 'Dört alan var: Teknik (mühendislik, mimarlık, bilişim), Sağlık (tıp, fizyoterapi, hemşirelik vb.), İşletme (ekonomi, hukuk, pazarlama vb.) ve Sanat (tasarım, görsel-işitsel iletişim vb.). Alanınızı hedef bölümünüze göre birlikte seçiyoruz.' },
  { q: 'Kurs ücreti ne kadar?', a: 'Başvuru ücreti 500 €, program ücreti 9.500 €’dan başlar. Erken ödeme ve güçlü akademik geçmiş (CV) için burs imkânı vardır; burslar yalnızca kendi bütçesiyle okuyan öğrenciler içindir.' },
  { q: 'PCE kursunu bitirince yalnızca UPV’ye mi başvurabilirim?', a: 'Hayır. PCE puanları UNEDasiss akreditasyonunuza işlenir ve İspanya’daki devlet üniversitelerine başvuruda kullanılır. Kurs UPV kampüsünde verilir; başvuru stratejinizi hedef bölüm ve üniversitelere göre birlikte kuruyoruz.' },
]

/* ---------- Lisans ---------- */

export type UpvBachelor = {
  slug: string
  name: string
  en: string
  campus: 'Alcoy' | 'Gandia' | 'Valensiya'
  url: string
  years: string
  ects: string
  perEcts: string
  perYear: string
  total: string
  places?: string
  cutoff?: string
  summary: string
  careers: string[]
  extras: string[]
}

export const upvBachelors: UpvBachelor[] = [
  {
    slug: 'isletme',
    name: 'İşletme Yönetimi',
    en: 'Business Administration and Management',
    campus: 'Alcoy',
    url: 'https://www.upv.es/titulaciones/GADE-A/index-en.html',
    years: '4 yıl', ects: '240', perEcts: '25,58 €', perYear: '1.534,80 €', total: '6.139,20 €',
    places: '75', cutoff: '6,68',
    summary: 'İşletmeleri yönetecek, yönlendirecek ve onlara danışmanlık verecek profesyoneller yetiştirir; kendi girişimini kurmak isteyenlere de yol açar. Finans, pazarlama, üretim, lojistik, insan kaynakları, uluslararası işletme ve inovasyon alanlarını kapsar.',
    careers: ['Genel müdürlük ve yönetim kademeleri', 'Muhasebe, finans, vergi ve insan kaynakları uzmanlığı', 'Pazarlama, kalite ve iş güvenliği', 'Denetçi, danışman, eğitmen', 'Kendi işini kurma'],
    extras: ['Seçmeli modüller: Danışmanlık ve Finans, İşletme Yönetimi ve Organizasyon, Proje Yönetimi, Kalite ve Çevre', 'Erasmus, Promoe (ABD, Kanada, Çin, Singapur vb.) ve Seneca değişim programları', 'Devamında UPV’de MBA, finans ve vergi yönetimi yüksek lisansları'],
  },
  {
    slug: 'kimya-tekstil',
    name: 'Kimya Mühendisliği + Tekstil Teknolojisi ve Tasarım Mühendisliği (çift diploma)',
    en: 'Double Degree in Chemical Engineering + Textile Technology and Design Engineering',
    campus: 'Alcoy',
    url: 'https://www.upv.es/titulaciones/GIQ-A/index-en.html',
    years: '4 yıl', ects: '337,5', perEcts: '34,68 €', perYear: '2.080,80 €', total: '11.704,50 €',
    places: '55', cutoff: '8,78',
    summary: 'Kimya proses endüstrisinde ekipman ve tesis tasarlayıp işletebilecek mühendisler yetiştirir; çift diploma ile tekstil teknolojisi ve tasarımı alanında ikinci bir mühendislik diploması eklenir. Kimya mühendisliği programı EUR-ACE kalite etiketine sahiptir.',
    careers: ['Kimya, petrokimya, plastik ve boya sanayisi', 'Çevre, biyoteknoloji, gıda ve ilaç sektörleri', 'Üretim, kalite ve çevre departmanları', 'Teknik danışmanlık ve bilirkişilik', 'Kamu kurumları ve eğitim'],
    extras: ['EUR-ACE kalite etiketi (kimya mühendisliği)', 'Avrupa ve dünyadaki ortak üniversitelerde bir dönem ya da bitirme projesi', 'Devamında Kimya, Endüstri ve Tekstil Mühendisliği yüksek lisansları'],
  },
  {
    slug: 'cevre-bilimleri',
    name: 'Çevre Bilimleri',
    en: 'Environmental Sciences',
    campus: 'Gandia',
    url: 'https://www.upv.es/titulaciones/GCIA/indexi.html',
    years: '4 yıl', ects: '240', perEcts: '34,68 €', perYear: '2.080,80 €', total: '8.323,20 €',
    places: '50', cutoff: '7,14',
    summary: 'Çevre yönetiminin bilimsel, teknolojik, sosyal, ekonomik ve hukuki boyutlarına hâkim uzmanlar yetiştirir. Son yılın ikinci döneminde 500 saatlik (18 AKTS) staj yapılır.',
    careers: ['Çevre teknolojileri', 'Şirket ve kamu kurumlarına çevre danışmanlığı', 'Çevre yönetim sistemleri ve denetimleri', 'Planlama ve sürdürülebilir kalkınma', 'Ar-Ge ve çevre eğitimi'],
    extras: ['500 saatlik zorunlu staj', 'Avrupa, Türkiye, ABD, Kanada, Japonya, Avustralya ve Latin Amerika’da değişim anlaşmaları', 'Gandia’da deniz ve kıyı ekosistemleri yüksek lisansı'],
  },
  {
    slug: 'orman-cevre-muhendisligi',
    name: 'Orman ve Çevre Mühendisliği',
    en: 'Forest and Environmental Engineering',
    campus: 'Valensiya',
    url: 'https://www.upv.es/titulaciones/GIFOMN/indexi.html',
    years: '4 yıl', ects: '240', perEcts: '34,68 €', perYear: '2.080,80 €', total: '8.323,20 €',
    places: '50', cutoff: '6,93',
    summary: 'Doğal ve orman alanlarının sürdürülebilir yönetimi, korunması, restorasyonu ve planlaması için mühendisler yetiştirir. İspanya’da yasal olarak düzenlenen Orman ve Çevre Mühendisliği mesleğine erişim sağlar.',
    careers: ['Sektör şirketleri ve danışmanlık firmaları', 'Kamu kurumları ve kamu şirketleri', 'Ahşap, mantar ve biyoenerji sanayisi', 'Ormancılıkta uluslararası iş birliği projeleri', 'Serbest mühendislik'],
    extras: ['Düzenlenmiş mesleğe erişim', 'EUR-ACE kalite etiketi', 'Yılda 200’den fazla öğrenci yurt dışına gidiyor; yaklaşık 300 şirketle staj imkânı'],
  },
  {
    slug: 'geomatik-harita-muhendisligi',
    name: 'Geomatik ve Harita Mühendisliği',
    en: 'Geomatic and Surveying Engineering',
    campus: 'Valensiya',
    url: 'https://www.upv.es/titulaciones/GIGT/index-en.html',
    years: '4 yıl', ects: '240', perEcts: '34,68 €', perYear: '2.080,80 €', total: '8.323,20 €',
    places: '75', cutoff: '5,80',
    summary: 'Coğrafi bilgiyi toplamak, yönetmek, modellemek ve analiz etmek için uzaktan algılama, fotogrametri, uydu konumlama, jeodezi ve CBS teknolojilerini öğretir.',
    careers: ['Uydu konumlama ve navigasyon', 'Coğrafi bilgi sistemleri (CBS)', 'İnşaat projelerinde geometrik kontrol', 'Kadastro ve bölge planlaması için haritacılık', 'Çevre, kültürel miras ve afet yönetimi uygulamaları'],
    extras: ['EUR-ACE kalite etiketi', '22 ülkede 80’den fazla üniversiteyle anlaşma', 'ESTP Paris ve Karlsruhe ile çift diploma imkânı', 'Ücretli staj olanakları'],
  },
  {
    slug: 'interaktif-teknolojiler',
    name: 'İnteraktif Teknolojiler',
    en: 'Interactive Technologies',
    campus: 'Gandia',
    url: 'https://www.upv.es/titulaciones/GTI/',
    years: '4 yıl', ects: '240', perEcts: '34,68 €', perYear: '2.080,80 €', total: '8.323,20 €',
    places: '50', cutoff: '6,53',
    summary: 'Video oyunları, artırılmış ve sanal gerçeklik, yapay zekâ, biyometri, nesnelerin interneti ve akıllı şehirler gibi etkileşimli teknolojilere dayalı ürün ve hizmetler geliştirmeyi öğretir. Ders saatinin yaklaşık %40’ı dönemlik takım projelerine ayrılır.',
    careers: ['Oyun ve eğlence sektörü', 'Turizm, kültür ve eğitim teknolojileri', 'Akıllı ev, akıllı şehir ve sağlık teknolojileri', 'Web ve mobil uygulama geliştirme', 'Teknoloji girişimi kurma'],
    extras: ['Proje odaklı eğitim: web, IoT, mobil, oyun, robotik, VR/AR', 'Yurt içi ve yurt dışında ücretli staj anlaşmaları', 'Devamında yapay zekâ ve bilgisayar mühendisliği yüksek lisansları'],
  },
  {
    slug: 'telekomunikasyon-ses-goruntu',
    name: 'Telekomünikasyon Teknolojileri, Ses ve Görüntü Mühendisliği',
    en: 'Telecommunication Technologies, Sound and Image Engineering',
    campus: 'Gandia',
    url: 'https://www.upv.es/titulaciones/GISTSI/indexi.html',
    years: '4 yıl', ects: '240', perEcts: '34,68 €', perYear: '2.080,80 €', total: '8.323,20 €',
    places: '50', cutoff: '6,58',
    summary: 'Ses, görüntü ve verinin farklı ortamlarda nasıl kodlandığını, iletildiğini ve işlendiğini öğretir. Ses ve Görüntü ya da Telekomünikasyon Sistemleri uzmanlık dallarından biri seçilir; teknik telekomünikasyon mühendisi olarak çalışma yetkisi verir.',
    careers: ['Telekom operatörleri ve mobil iletişim', 'Elektronik, programlama ve telematik', 'Radyo, televizyon ve kayıt stüdyoları', 'Dublaj, akustik ve görsel-işitsel prodüksiyon', 'Kamu kurumları, akademi ve araştırma'],
    extras: ['EUR-ACE kalite etiketi', 'Düzenlenmiş mesleğe (teknik telekomünikasyon mühendisliği) erişim', 'Çift diploma ve yurt dışı staj anlaşmaları'],
  },
]

export const bachelorFaqs: Faq[] = [
  { q: 'UPV’de lisans ücreti ne kadar?', a: 'Program ortağımızın 2026 tablosuna göre yıllık ücret İşletme (Alcoy) için 1.534,80 €, diğer bölümler için 2.080,80 €’dur. Dört yıllık toplam 6.139,20 € ile 11.704,50 € arasındadır. Ücretler önceden haber verilmeksizin değişebilir.' },
  { q: 'UPV’de lisans hangi dilde?', a: 'Bu lisans programlarında eğitim ağırlıklı olarak İspanyolcadır (Valensiya bölgesinde bazı dersler Valensiyaca da olabilir); kayıt için B2 seviyesinde İspanyolca gerekir. B2’niz yoksa UPV İspanyolca hazırlık programı ile başlayıp program sonundaki seviye sınavında B2’yi belgeleyerek kaydolursunuz.' },
  { q: 'Taban puan ne demek, benim puanım yeter mi?', a: 'Tabloda gösterilen değerler UPV’nin 2026/27 için yayımladığı “nota de corte”dur, yani o yıl bölüme giren son öğrencinin 14 üzerinden notu. PCE sınavına girmeyen bir Türk lise mezununun notu genellikle 5–6 civarında kalır; taban puanı daha yüksek bölümler için PCE ile puan yükseltmek gerekir.' },
  { q: 'YKS puanı gerekiyor mu?', a: 'Hayır. İspanya’da kabul; lise diplomasının denkliği (homologación), UNEDasiss akreditasyonu ve isteğe bağlı PCE sınavlarıyla hesaplanan not üzerinden yapılır.' },
  { q: 'Okurken çalışabilir miyim?', a: 'Yükseköğretim için verilen öğrenci kalış izni, İspanya’da ek izne gerek olmadan haftada 30 saate kadar çalışma hakkı tanır. Yine de bütçenizi çalışma gelirine dayandırmamanızı öneririz.' },
]

/* ---------- Yüksek lisans ---------- */

export type UpvMaster = {
  slug: string
  name: string
  en: string
  tagline: string
  lead: string
  leadRole: string
  leadText: string
  start: string
  duration: string
  ects: string
  format: string
  campus: string
  language: string
  entry: string
  modules: { title: string; text: string }[]
  practice: string
}

export const upvMasters: UpvMaster[] = [
  {
    slug: 'dijital-is-liderlik-yonetim-analiz',
    name: 'Dijital İş Liderliği, Yönetimi ve Analizi',
    en: 'Digital Business Leadership, Management and Analysis',
    tagline: 'Strateji · Veri · İşletme. Vizyonla yönet, veriyle karar ver.',
    lead: 'Daniel Palacios Marqués',
    leadRole: 'Program sorumlusu',
    leadText: 'UPV’de program sorumlusu. Program; dijital işletme kurmayı, yönetmeyi ve dönüştürmeyi öğretmeyi hedefliyor.',
    start: '2 Ekim 2026',
    duration: '2 Ekim 2026 – 31 Aralık 2027 (ödevleri tamamlama süresi dahil)',
    ects: '90 AKTS',
    format: 'Karma eğitim (blended)',
    campus: 'Valensiya Kampüsü',
    language: 'İngilizce',
    entry: 'Lisans diploması',
    modules: [
      { title: 'Dijital işletmeni tasarla', text: 'Rekabet ortamı, strateji, girişimcilik, inovasyon ve iş planı.' },
      { title: 'Veriyi karara dönüştür', text: 'Büyük veri, iş zekâsı ve fırsatları analiz etmek için dijital varlıklar.' },
      { title: 'Çevrim içi varlığını kur', text: 'Web tasarımı, dijital prodüksiyon, e-ticaret, sosyal medya ve hikâye anlatımı.' },
      { title: 'Ölç ve optimize et', text: 'SEO/SEM, web analitiği ve trafik oluşturma.' },
      { title: 'Dönüşümü yönet', text: 'Dijital hukuk, e-lojistik, mobil teknolojiler, kripto paralar, sanal ve artırılmış gerçeklik.' },
    ],
    practice: 'Uygulamalı proje ve yüksek lisans bitirme projesi. İsteğe bağlı ders dışı staj.',
  },
  {
    slug: 'pazarlama-yonetimi-kurumsal-iletisim',
    name: 'Pazarlama Yönetimi ve Kurumsal İletişim',
    en: 'Marketing Management and Corporate Communication',
    tagline: 'Pazarlama · İletişim · Yönetim. Stratejik düşün, değişime öncülük et.',
    lead: 'David Juárez Varón',
    leadRole: 'Akademik direktör',
    leadText: 'Nöropazarlama araştırmacısı ve TEDx konuşmacısı; duygular ve kararlar üzerine konuşması bir milyonu aşkın kez izlendi. Programda EEG ile uygulamalı öğrenme yer alıyor.',
    start: 'Ekim 2026',
    duration: 'Ekim 2026 – Aralık 2027',
    ects: '90 AKTS',
    format: 'Karma eğitim (blended)',
    campus: 'Valensiya Kampüsü',
    language: 'İngilizce',
    entry: 'Lisans diploması',
    modules: [
      { title: 'Büyümeni planla', text: 'Stratejik pazarlama, pazar araştırması, segmentasyon ve konumlandırma.' },
      { title: 'Stratejiyi uygula', text: 'Pazarlama karması, fiyatlama, dağıtım, uluslararası büyüme, planlama ve kontrol.' },
      { title: 'Tutarlı bir marka kur', text: 'Kurumsal iletişim, kurumsal strateji ve reklam iletişimi.' },
      { title: 'Hedef kitlenle bağ kur', text: 'İkna edici iletişim, etkinlikler, halkla ilişkiler ve dijital pazarlama araçları.' },
      { title: 'İnsanları ve projeleri yönet', text: 'İletişim yönetimi, liderlik, müzakere, zaman yönetimi ve takım çalışması.' },
    ],
    practice: 'Uygulamalı projeler ve yüksek lisans tezi. Pazarlama araştırması ya da müfredata dahil staj seçeneği.',
  },
]

export const masterFaqs: Faq[] = [
  { q: 'UPV’de İngilizce yüksek lisans var mı?', a: 'Evet. Dijital İş Liderliği, Yönetimi ve Analizi ile Pazarlama Yönetimi ve Kurumsal İletişim yüksek lisansları İngilizce verilir; her ikisi de 90 AKTS, karma eğitim modelinde ve Valensiya kampüsündedir.' },
  { q: 'Başvuru şartları neler?', a: 'Her iki programda da lisans diploması gerekir. Diploma ve transkriptiniz, İngilizce yeterlilik belgeniz, özgeçmiş ve motivasyon mektubunuzla başvuru dosyasını birlikte hazırlıyoruz; kesin belge listesini başvuru döneminde programdan teyit ediyoruz.' },
  { q: 'Ekim 2026 dönemi başladı mı, bir sonraki dönem ne zaman?', a: 'Broşürlerdeki dönem Ekim 2026’da başlıyor. Bir sonraki giriş dönemi ve son başvuru tarihleri açıklandığında öncelikli olarak bilgilendirmemiz için formu doldurabilirsiniz.' },
  { q: 'İspanyolca yüksek lisans yapmak istersem ne yapmalıyım?', a: 'Önce hedef yüksek lisans programına başvurup kabul alırsınız, ardından UPV İspanyolca hazırlık programıyla B2’ye ulaşıp yüksek lisansa başlarsınız. Bu yolla sunulan programların toplam ücreti 2.750–5.950 € arasındadır.' },
]

export const upvHubFaqs: Faq[] = [
  { q: 'Valensiya Politeknik Üniversitesi (UPV) devlet üniversitesi mi?', a: 'Evet. UPV, Valensiya, Gandia ve Alcoy’da üç kampüsü olan bir İspanyol devlet üniversitesidir. Bu yüzden lisans ücretleri özel üniversitelere göre çok daha düşüktür: yıllık yaklaşık 1.535–2.081 €.' },
  { q: 'Türkiye’den UPV’ye nasıl girilir?', a: 'İspanyolca B2’niz varsa lise diplomanızın denkliği (homologación) ve UNEDasiss akreditasyonuyla doğrudan başvurabilir, puanınızı yükseltmek için PCE kursuna katılabilirsiniz. B2’niz yoksa UPV İspanyolca hazırlık programıyla başlarsınız. İngilizce yüksek lisanslar için lisans diploması ve İngilizce yeterlilik yeterlidir.' },
  { q: 'YKS şartı var mı?', a: 'Hayır. İspanya’da kabul YKS ile değil; lise diploması denkliği, UNEDasiss notu ve isteğe bağlı PCE sınavlarıyla yapılır.' },
  { q: 'UPV’de toplam bütçe ne kadar tutar?', a: 'Lisans eğitim ücreti dört yılda 6.139–11.705 € arasındadır. Hazırlık yılı için 500 € kayıt ve 9.500 € program ücreti (erken ödemede %25 indirim) eklenir. Yaşam giderleri Valensiya’da paylaşımlı dairede aylık yaklaşık 735–1.180 €’dur; Gandia ve Alcoy genellikle daha uygundur.' },
  { q: 'Tampa’nın UPV sürecindeki rolü nedir?', a: 'Program seçimi, başvuru, belgelerin apostil ve tercümesi, homologación, öğrenci vizesi ve konaklama süreçlerinde sizi Türkiye’den yönlendiriyor ve dosyanızı baştan sona takip ediyoruz.' },
]

export const upvSteps = [
  { title: 'Ön görüşme', text: 'Hedef bölümünüzü, İspanyolca/İngilizce seviyenizi ve bütçenizi değerlendirip doğru yolu (hazırlık, PCE, lisans veya yüksek lisans) seçeriz.' },
  { title: 'Başvuru ve kayıt', text: 'UPV programına başvuruyu yapar, kayıt ücreti ve depozito adımlarını takvime bağlarız.' },
  { title: 'Belgeler', text: 'Diploma ve transkriptlerin apostil ve yeminli tercümesini, homologación ve UNEDasiss başvurularını hazırlarız.' },
  { title: 'Vize', text: 'İspanya ulusal öğrenci vizesi dosyanızı (mali yeterlilik, sigorta, kabul belgeleri) eksiksiz hazırlarız.' },
  { title: 'Varış', text: 'Konaklama, isteğe bağlı havalimanı karşılaması ve varış sonrası oturum kartı (TIE) işlemlerini planlarız.' },
  { title: 'Kampüste', text: 'Hazırlık, SIELE/PCE sınavları ve lisans ya da yüksek lisans kaydına kadar süreç boyunca yanınızdayız.' },
]
