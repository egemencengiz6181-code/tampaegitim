import type { Faq } from './programs'

export type Landing = {
  slug: string
  label: string
  headline: string
  sub: string
  image: string
  code: string
  program: string
  country: string
  offer?: { title: string; price: string; caption: string }
  bullets: string[]
  why: { title: string; text: string }[]
  steps: string[]
  faqs: Faq[]
  urgency: string
  /** İsteğe bağlı: "Programa neler dahil?" listesi */
  included?: string[]
  /** İsteğe bağlı: örnek gün / hafta akışı */
  schedule?: { time: string; text: string }[]
  /** İsteğe bağlı: indekslenen organik sayfa (reklam dışı trafik için iç link) */
  learnMore?: { label: string; to: string }
}

export const landings: Landing[] = [
  {
    slug: 'ingiltere-yaz-okulu',
    label: 'İngiltere yaz okulu 2027',
    headline: 'İngiltere yaz okulu: çocuğunuz için güvenli ve İngilizce bir yaz.',
    sub: '7–17 yaş için Londra, Oxford, Cambridge ve Brighton’da kampüs konaklamalı, 7/24 gözetimli yaz okulları. Program, vize ve uçuşu tek elden planlıyoruz.',
    image: '/img/dest/ingiltere.jpg',
    code: 'LHR',
    program: 'Yaz Okulu',
    country: 'İngiltere',
    bullets: ['Haftada 15 ders saati İngilizce, seviyeye göre sınıflar', 'Spor, sanat ve proje atölyeleri', 'Hafta sonu Londra, Oxford ve Cambridge gezileri', 'Kampüs içi konaklama, tam pansiyon ve 7/24 gözetim'],
    why: [
      { title: 'Velilerin tercihi', text: '“İlk günden Türkiye’ye dönene kadar tüm süreçleri titizlikle takip etti.” Serap B., veli' },
      { title: 'İngiltere Üniversite Temsilciliği', text: 'Okul ortaklarımızla doğrudan iletişim ve program boyunca öğrenci takibi.' },
      { title: 'Vize dosyası bizde', text: '18 yaş altı vize başvurusu, muvafakatname ve belgeler eksiksiz.' },
    ],
    included: ['İngilizce dersleri ve materyaller', 'Kampüs konaklaması (tam pansiyon)', 'Aktivite ve akşam programları', 'Programdaki geziler', 'Havalimanı karşılama (programa göre)', 'Seviye sertifikası'],
    schedule: [
      { time: '09.00', text: 'İngilizce dersleri' },
      { time: '13.30', text: 'Spor, sanat veya proje atölyesi' },
      { time: '19.30', text: 'Disko, quiz ve tema geceleri' },
      { time: 'Cumartesi', text: 'Londra veya Oxford tam gün gezi' },
    ],
    steps: ['Formu doldurun, sizi aynı gün arayalım', 'Çocuğunuzun yaşına uygun 2–3 kampüsü karşılaştıralım', 'Kayıt, muvafakatname ve vizeyi birlikte tamamlayalım'],
    faqs: [
      { q: 'Hangi yaşlar katılabilir?', a: 'Programlar 7–17 yaş arası öğrenciler içindir; yaş gruplarına göre ayrı sınıf ve aktiviteler planlanır.' },
      { q: 'Kaç hafta sürüyor?', a: '1–6 hafta arasında seçilebilir. İlk deneyim için 2–3 hafta öneriyoruz.' },
      { q: 'Vize gerekiyor mu?', a: 'Evet, Türk vatandaşları için İngiltere ziyaretçi vizesi gerekir. 18 yaş altı vize dosyasını birlikte hazırlıyoruz.' },
      { q: 'Ne zaman kayıt yaptırmalıyım?', a: 'Popüler kampüsler ocak – mart arasında dolar. En geç nisan ayında kaydı tamamlamanızı öneriyoruz.' },
    ],
    urgency: '2027 yazı için erken kayıt dönemi açık; popüler kampüsler hızla doluyor.',
    learnMore: { label: 'İngiltere yaz okulları hakkında detaylı bilgi', to: '/yurtdisi-yaz-okullari/ingiltere' },
  },
  {
    slug: 'londra-yaz-okulu',
    label: 'Londra yaz okulu',
    headline: 'Bu yaz Londra’da: İngilizce, müzeler ve yeni arkadaşlar.',
    sub: '13–17 yaş gençler için Londra kampüslerinde yaz programları. Sabah İngilizce dersleri, öğleden sonra şehir keşfi, hafta sonu Oxford ve Cambridge.',
    image: '/img/misc/london-student.jpg',
    code: 'LHR',
    program: 'Yaz Okulu',
    country: 'İngiltere',
    bullets: ['Londra’daki üniversite kampüslerinde konaklama', 'British Museum, Westminster, West End gezileri', 'Dünyanın dört bir yanından yaşıtlarla sınıflar', '7/24 grup lideri gözetimi'],
    why: [
      { title: '15 yıllık tecrübe', text: '5.000’den fazla öğrenciyi yurt dışına gönderdik.' },
      { title: 'Şeffaf teklif', text: 'Okul fiyatları ve dahil olan her şey yazılı olarak.' },
      { title: 'Uçtan uca takip', text: 'Kayıttan dönüşe kadar ailenizle sürekli iletişim.' },
    ],
    schedule: [
      { time: 'Pazartesi', text: 'Westminster ve Big Ben yürüyüş turu' },
      { time: 'Salı', text: 'British Museum proje çalışması' },
      { time: 'Perşembe', text: 'Covent Garden ve West End' },
      { time: 'Cumartesi', text: 'Oxford veya Cambridge tam gün gezi' },
    ],
    steps: ['Formu doldurun', 'Size uygun Londra kampüslerini önerelim', 'Kayıt ve vizeyi birlikte tamamlayalım'],
    faqs: [
      { q: 'Londra programları hangi yaşlar için?', a: 'Şehir kampüsleri genellikle 13–17 yaş içindir. Daha küçük yaşlar için Londra’ya gezi düzenleyen şehir dışı kampüsleri öneriyoruz.' },
      { q: 'Konaklama nasıl?', a: 'Genellikle üniversite yurtlarında tek veya çift kişilik odalarda, tam pansiyon konaklama.' },
    ],
    urgency: 'Londra kampüslerinde temmuz ayı en hızlı dolan dönem.',
    learnMore: { label: 'Londra yaz okulları rehberi', to: '/blog/londra-yaz-okullari' },
  },
  {
    slug: 'ingiltere-yurt-disi-egitim',
    label: 'İngiltere’de eğitim',
    headline: 'İngiltere’de yurt dışı eğitim: dil okulundan yüksek lisansa tek danışman.',
    sub: 'Dil okulu, yaz okulu, lise, üniversite ve 1 yıllık yüksek lisans. İngiltere Üniversite Temsilciliğimizle başvurudan varışa kadar yanınızdayız.',
    image: '/img/dest/ingiltere.jpg',
    code: 'LHR',
    program: '',
    country: 'İngiltere',
    bullets: ['Akredite dil okulları ve 7–17 yaş yaz okulları', 'UCAS ve Foundation başvuruları', '12 aylık yüksek lisans programları', 'Vize dosyası ve konaklama planlaması'],
    why: [
      { title: 'İngiltere ortakları', text: 'Queen Mary University of London, Manchester Met, University of Liverpool ve EC English.' },
      { title: 'Mentörlü başvuru', text: 'Her okula özel motivasyon mektubu ve referans desteği.' },
      { title: 'Varış sonrası destek', text: 'Okula yerleştikten sonra da iletişimimiz sürer.' },
    ],
    steps: ['Formu doldurun', 'Hedefinize uygun program ve okulları birlikte belirleyelim', 'Başvuru, vize ve konaklamayı biz yönetelim'],
    faqs: [
      { q: 'İngiltere’de lisans kaç yıl?', a: 'Genellikle 3 yıl. Türkiye’den lise mezunları için çoğunlukla bir yıllık Foundation programı gerekir.' },
      { q: 'İngiltere’de yüksek lisans kaç yıl?', a: 'Ders ağırlıklı programların çoğu 12 ay sürer.' },
      { q: 'Hangi vize gerekir?', a: 'Kısa dil kursları ve yaz okulları için ziyaretçi vizesi, uzun dönem akademik programlar için Student vizesi gerekir.' },
    ],
    urgency: 'Eylül 2027 dönemi için başvuru planlamasına şimdi başlayın.',
    learnMore: { label: 'İngiltere’de eğitim rehberi', to: '/ulkeler/ingiltere' },
  },
  {
    slug: 'ingiltere-universite',
    label: 'İngiltere’de üniversite',
    headline: 'İngiltere’de üniversite: UCAS ve Foundation başvurunuzu birlikte hazırlayalım.',
    sub: '3 yıllık lisans, dünya çapında tanınan diplomalar. Program seçimi, kişisel beyan, referanslar ve vize; mentörünüzle adım adım.',
    image: '/img/misc/bachelor.jpg',
    code: 'LHR',
    program: 'Üniversite',
    country: 'İngiltere',
    bullets: ['5 programlık UCAS başvuru stratejisi', 'Foundation programı seçenekleri', 'Kişisel beyan (personal statement) yazım desteği', 'IELTS hedef skor planlaması'],
    why: [
      { title: 'Mentörlük paketi', text: '5 üniversiteye başvuru, motivasyon mektubu, referans, CV ve mülakat hazırlığı.' },
      { title: 'Gerçekçi strateji', text: 'Güvenli, orta ve hedef okullardan dengeli liste.' },
      { title: 'Kabulden sonra', text: 'Student vizesi, konaklama ve varış desteği.' },
    ],
    steps: ['Formu doldurun', '15 dakikalık mentör görüşmesi', 'Yol haritanız ve başvuru takviminiz hazır'],
    faqs: [
      { q: 'Türkiye’deki lise diplomamla doğrudan başvurabilir miyim?', a: 'Çoğu İngiliz üniversitesi için bir yıllık Foundation programı gerekir; IB veya A-Level ile doğrudan başvuru mümkündür.' },
      { q: 'IELTS kaç olmalı?', a: 'Lisans programları genellikle 6.0–6.5 ister; bölüme göre alt bölüm şartları değişir.' },
    ],
    urgency: 'UCAS başvuruları eğitimden yaklaşık bir yıl önce başlar.',
    learnMore: { label: 'İngiltere’de üniversite okumak', to: '/lisans-programlari/ingiltere' },
  },
  {
    slug: 'ingiltere-yuksek-lisans',
    label: 'İngiltere’de yüksek lisans',
    headline: 'İngiltere’de 1 yıllık yüksek lisans: kariyerinize 12 ayda yatırım.',
    sub: 'Program seçimi, her okula özel motivasyon mektubu, referanslar ve Student vizesi. Mentörlü başvuru sürecimizle İngiltere’de master.',
    image: '/img/misc/masters.jpg',
    code: 'LHR',
    program: 'Yüksek lisans',
    country: 'İngiltere',
    bullets: ['12 aylık taught master programları', 'Her programa özel SOP ve CV', 'Referans mektubu koordinasyonu', 'Graduate Route ile mezuniyet sonrası planlama'],
    why: [
      { title: 'Kanıtlanmış sonuçlar', text: 'Öğrencilerimiz Queen Mary, Manchester Met ve Liverpool gibi üniversitelerde.' },
      { title: 'Mentör eşliğinde', text: 'İlk görüşmeden kabule kadar aynı mentörle.' },
      { title: 'Vize desteği', text: 'Finansal belgelerden başvuruya Student vizesi dosyası.' },
    ],
    steps: ['Formu doldurun', 'Profil analizi ve program listesi', 'Başvuru, kabul ve vize'],
    faqs: [
      { q: 'ALES veya GRE gerekiyor mu?', a: 'İngiliz üniversiteleri ALES istemez; GRE/GMAT çoğu programda şart değildir (MBA istisna olabilir).' },
      { q: 'Mezuniyetten sonra çalışabilir miyim?', a: 'Graduate Route ile İngiltere’de iş deneyimi kazanma imkânı vardır; güncel koşulları birlikte kontrol ediyoruz.' },
    ],
    urgency: 'Popüler programlar ve burslar için ilk turda başvurun.',
    learnMore: { label: 'İngiltere’de yüksek lisans rehberi', to: '/yurtdisi-yuksek-lisans/ingiltere' },
  },
  {
    slug: 'ingiltere-lise',
    label: 'İngiltere’de lise',
    headline: 'İngiltere’de lise: yatılı okullarda A-Level ile üniversiteye doğrudan yol.',
    sub: '13–18 yaş için İngiliz yatılı okulları. Okul seçimi, giriş sınavı ve mülakat hazırlığı, vasi ve vize süreçleri.',
    image: '/img/misc/student-bridge.jpg',
    code: 'LHR',
    program: 'Lise',
    country: 'İngiltere',
    bullets: ['Yatılı okul (boarding school) seçenekleri', 'GCSE ve A-Level programları', 'Giriş sınavı ve mülakat hazırlığı', 'Vasi (guardian) ve vize koordinasyonu'],
    why: [
      { title: 'Karaktere uygun okul', text: 'Öğrencinin akademik profili ve kişiliğine göre kısa liste.' },
      { title: 'Ailelerle iletişim', text: 'Dönem boyunca okul raporlarının takibi.' },
      { title: 'Üniversiteye köprü', text: 'A-Level ile İngiliz üniversitelerine doğrudan başvuru.' },
    ],
    steps: ['Formu doldurun', 'Profil görüşmesi ve okul listesi', 'Başvuru, mülakat ve vize'],
    faqs: [
      { q: 'Hangi yaşta başlamalı?', a: 'Dil ve kültüre uyum açısından 14–16 yaş en verimli dönemdir.' },
      { q: 'Vasi zorunlu mu?', a: '18 yaş altı uluslararası öğrenciler için vasi atanması genellikle zorunludur; süreci birlikte koordine ediyoruz.' },
    ],
    urgency: 'Eylül 2027 girişleri için başvurular sonbaharda başlıyor.',
    learnMore: { label: 'İngiltere’de lise eğitimi', to: '/yurtdisi-lise-egitimi/ingiltere' },
  },
  {
    slug: 'ingiltere-dil-okulu',
    label: 'İngiltere dil okulları',
    headline: 'İngilizceni Londra’da, 2 haftada başlayan programlarla ilerlet.',
    sub: 'Akredite İngiltere dil okullarında seviyene uygun program, konaklama ve vize dosyası tek danışmanla. Ön görüşme ücretsiz.',
    image: '/img/dest/ingiltere.jpg',
    code: 'LHR',
    program: 'Dil Okulu',
    country: 'İngiltere',
    offer: { title: 'Her şey dahil Londra paketi', price: '2.950 £', caption: '2 hafta, konaklama, uçak, vize ve sigorta dahil' },
    bullets: ['Londra, Brighton, Oxford ve Cambridge’de okullar', 'Haftada 15–30 ders saati seçeneği', 'IELTS ve Cambridge hazırlık modülleri', 'Vize dosyası ve VIP havalimanı karşılama'],
    why: [
      { title: '15 yıllık tecrübe', text: 'Her yıl yüzlerce öğrenciyi İngiltere’ye gönderen, okulları yerinde tanıyan bir ekip.' },
      { title: 'İngiltere Üniversite Temsilciliği', text: 'İngiltere’deki okul ortaklarımızla varıştan sonra da yanınızdayız.' },
      { title: 'Şeffaf fiyat', text: 'Okulların resmi fiyatları ve dönemsel kampanyalarla net teklif.' },
    ],
    steps: ['Formu doldur, 24 saat içinde arayalım', 'Seviyene ve bütçene uygun 3 okul teklifini karşılaştır', 'Kaydını yapalım, vize dosyanı birlikte hazırlayalım'],
    faqs: [
      { q: 'İngiltere dil okulu için vize gerekiyor mu?', a: 'Türk vatandaşları için 6 aya kadar dil kursları Standard Visitor vizesiyle, 11 aya kadar İngilizce kursları Short-term Study vizesiyle yapılır. Vize dosyanızı birlikte hazırlıyoruz.' },
      { q: 'En kısa kaç haftalık program var?', a: 'Programlar 1 haftadan başlar; her şey dahil Londra paketimiz 2 haftadan itibaren planlanabilir.' },
      { q: 'Hiç İngilizcem yok, katılabilir miyim?', a: 'Evet. Okullar ilk gün seviye tespit sınavı yapar ve sizi başlangıç seviyesindeki sınıfa yerleştirir.' },
    ],
    urgency: 'Yaz dönemi kontenjanları erken doluyor; şimdi ön görüşme planlayın.',
    learnMore: { label: 'İngiltere dil okulları hakkında detaylı bilgi', to: '/yurtdisi-dil-okullari/ingiltere' },
  },
  {
    slug: 'her-sey-dahil-londra',
    label: 'Her şey dahil Londra',
    headline: 'Uçak, yurt, vize, sigorta ve İngilizce: Londra’da tek fiyat.',
    sub: '18 yaş üstü için 2–10 haftalık her şey dahil Londra dil paketi. London Eye, Thames cruise ve şehir turu da pakette.',
    image: '/img/misc/london-student.jpg',
    code: 'LHR',
    program: 'Her Şey Dahil Paket',
    country: 'İngiltere',
    offer: { title: '2 hafta Londra', price: '2.950 £', caption: '4 hafta 4.150 £, 10 hafta 6.750 £' },
    bullets: ['Haftada 15 saat İngilizce eğitimi', 'Tek kişilik, özel banyolu yurt odası', 'Tek yön uçak bileti ve vize ücretleri', 'SIM kart, 40 GB internet ve Londra eğlence paketi'],
    why: [
      { title: 'Sürprizsiz bütçe', text: 'Ekstra masrafları önceden hesapladık; ne ödeyeceğinizi baştan bilirsiniz.' },
      { title: 'VIP karşılama', text: 'Havalimanında karşılanır, yurdunuza güvenle yerleşirsiniz.' },
      { title: 'Esnek süre', text: '2, 3, 4, 6, 8 veya 10 hafta arasından seçin.' },
    ],
    steps: ['Formu doldurun, paket detaylarını gönderelim', 'Tarihinizi ve süreyi seçin', 'Vize ve uçuş sürecini biz yönetelim'],
    faqs: [
      { q: 'Paket fiyatına neler dahil değil?', a: 'Kişisel harcamalar, günlük yemek ve dönüş bileti pakete dahil değildir. Tüm kalemleri ön görüşmede yazılı olarak paylaşıyoruz.' },
      { q: 'Paket tarihleri sabit mi?', a: 'Okulların başlangıç günlerine bağlı olarak esnek tarihler mevcuttur; genellikle her pazartesi başlangıç yapılabilir.' },
    ],
    urgency: 'Sınırlı kontenjan: yurt odaları tarih bazında ayrılır.',
    learnMore: { label: 'Londra paketi detayları', to: '/her-sey-dahil-paketler/londra' },
  },
  {
    slug: 'yaz-okulu',
    label: 'Yaz okulları 2027',
    headline: 'Çocuğunuz için güvenli, dolu dolu ve İngilizce bir yaz.',
    sub: '7–17 yaş için İngiltere, Malta, İrlanda ve Amerika’da 7/24 gözetimli, kampüs konaklamalı yaz okulları. Erken kayıt avantajlarını kaçırmayın.',
    image: '/img/misc/summer.jpg',
    code: 'LGW',
    program: 'Yaz Okulu',
    country: 'İngiltere',
    bullets: ['Sabah dersleri, öğleden sonra spor ve atölyeler', 'Hafta sonu Oxford, Cambridge ve Londra gezileri', 'Kampüs içi konaklama ve 7/24 gözetim', 'Program boyunca veliyle düzenli iletişim'],
    why: [
      { title: 'Velilerin tercihi', text: '“İlk günden Türkiye’ye dönene kadar tüm süreçleri titizlikle takip etti.” — Serap B., veli' },
      { title: 'Güvenlik önceliği', text: 'Yalnızca 7/24 gözetim sunan, deneyimli okullarla çalışıyoruz.' },
      { title: 'Kişiye özel program', text: 'Yaş, seviye ve ilgi alanına göre okul seçimi.' },
    ],
    steps: ['Formu doldurun, sizi arayalım', 'Çocuğunuza uygun 2–3 program önerelim', 'Kayıt, muvafakatname ve vizeyi birlikte tamamlayalım'],
    faqs: [
      { q: 'Kayıt için en uygun dönem ne zaman?', a: 'Popüler kampüsler ocak – mart arasında dolmaya başlar. Vize süreçleri için en geç nisan ayında kayıt öneriyoruz.' },
      { q: 'Çocuğum yalnız uçabilir mi?', a: 'Havayollarının refakatsiz çocuk hizmeti kullanılabilir veya uygun dönemlerde refakatli grup uçuşlarımıza katılabilir.' },
    ],
    urgency: '2027 yaz dönemi için erken kayıt dönemi açık.',
  },
  {
    slug: 'almanya-yuksek-lisans',
    label: 'Almanya’da yüksek lisans',
    headline: 'Almanya’da yüksek lisans: harçsız devlet üniversitelerinden İngilizce programlara.',
    sub: 'Program seçimi, motivasyon mektubu, uni-assist başvurusu, bloke hesap ve vize; mentörünüzle adım adım.',
    image: '/img/dest/almanya.jpg',
    code: 'BER',
    program: 'Yüksek Lisans',
    country: 'Almanya',
    bullets: ['Profilinize uygun 5 programlık başvuru stratejisi', 'Her programa özel motivasyon mektubu', 'Uni-assist ve doğrudan başvuruların yönetimi', 'Bloke hesap ve vize dosyası desteği'],
    why: [
      { title: 'Kanıtlanmış sonuçlar', text: '“Okul seçme, kayıt işlemleri, vize süreci… hepsini sorunsuz halledebildim.” — Zeynep Ö., Berlin' },
      { title: 'Mentör eşliğinde', text: 'İlk görüşmeden kabule kadar aynı mentörle çalışırsınız.' },
      { title: 'Mezuniyet sonrası', text: 'Almanya’da iş arama izni ve kariyer planını en baştan kurarız.' },
    ],
    steps: ['Formu doldurun, 15 dakikalık mentör görüşmesi planlayalım', 'Profil analizi ve program listesi', 'Başvuru, kabul ve vize'],
    faqs: [
      { q: 'Almanca bilmem gerekiyor mu?', a: 'Hayır. Almanya’da yüzlerce İngilizce yüksek lisans programı bulunur; günlük yaşam için temel Almanca avantaj sağlar.' },
      { q: 'Not ortalamam düşük, şansım var mı?', a: 'Not ortalaması önemlidir ancak tek kriter değildir. Uygulamalı bilimler üniversiteleri ve özel kurumlar dahil profilinize uygun seçenekleri birlikte değerlendiriyoruz.' },
    ],
    urgency: 'Kış dönemi başvuruları birçok programda ocak – mayıs arasında kapanıyor.',
  },
  {
    slug: 'universite-basvuru-mentorluk',
    label: 'Üniversite başvuru ve mentörlük',
    headline: 'Yurtdışındaki 5 üniversiteye, sizin adınıza ve mentör eşliğinde başvuralım.',
    sub: 'Motivasyon mektubu, referanslar, CV, portfolyo, mülakat ve vize; hepsi tek pakette. İlk 15 dakikalık mentör görüşmesi ücretsiz.',
    image: '/img/misc/application.jpg',
    code: 'UNI',
    program: 'Üniversite',
    country: 'Diğer',
    bullets: ['Güvenli, orta ve hedef okullardan 5 başvuru', 'Her üniversiteye ayrı motivasyon mektubu', 'Deneme mülakatları ve geri bildirim', 'Kabul sonrası vize danışmanlığı'],
    why: [
      { title: 'Kişiye özel strateji', text: 'Not ortalaması, dil skoru ve hedefinize göre gerçekçi bir okul listesi.' },
      { title: 'Özgün belgeler', text: 'Kopyala-yapıştır değil; her okulun beklentisine göre yazılmış mektuplar.' },
      { title: 'Uçtan uca takip', text: 'Başvurudan kabule, vizeden yerleşmeye kadar yanınızdayız.' },
    ],
    steps: ['Formu doldurun', '15 dakikalık mentör görüşmesi', 'Yol haritanız ve başvuru takviminiz hazır'],
    faqs: [
      { q: 'Hangi ülkelere başvuru yapılabiliyor?', a: 'İngiltere, Amerika, Kanada, Almanya, İtalya, Polonya, Macaristan ve daha birçok ülkede başvuru desteği veriyoruz.' },
      { q: 'Vize garantisi var mı?', a: 'Vize kararı konsolosluğa aittir; kimse garanti veremez. Biz dosyanızın eksiksiz ve doğru hazırlanmasını sağlarız.' },
    ],
    urgency: 'Eylül 2027 başvuru dönemi için planlamaya şimdi başlayın.',
  },
  {
    slug: 'work-and-study-irlanda',
    label: 'Work and Study İrlanda',
    headline: 'Dublin’de İngilizce öğren, haftada 20 saate kadar yasal olarak çalış.',
    sub: 'ILEP onaylı 25 haftalık programlarla İrlanda’da öğrenci statüsü ve çalışma hakkı. Okul, vize ve ilk konaklama tek danışmanla.',
    image: '/img/dest/irlanda.jpg',
    code: 'DUB',
    program: 'Work and Study',
    country: 'Diğer',
    bullets: ['ILEP onaylı akredite dil okulları', 'Dönem içinde haftada 20, tatilde 40 saate kadar çalışma', 'Vize dosyası ve IRP kaydı rehberliği', 'İlk haftalar için konaklama ayarlaması'],
    why: [
      { title: 'Avrupa’da İngilizce', text: 'AB ülkesinde, İngilizce konuşulan teknoloji başkentinde yaşam.' },
      { title: 'Bütçeye destek', text: 'Yarı zamanlı çalışarak günlük giderlerinin bir kısmını karşıla.' },
      { title: 'Kariyer başlangıcı', text: 'Uluslararası iş deneyimiyle CV’ni güçlendir.' },
    ],
    steps: ['Formu doldur, uygunluk ön değerlendirmesi yapalım', 'Okul ve başlangıç tarihi seç', 'Vize dosyanı birlikte hazırlayalım'],
    faqs: [
      { q: 'Yaş sınırı var mı?', a: 'Resmi bir üst yaş sınırı yoktur; ancak vize değerlendirmesinde eğitim planının tutarlılığı önemlidir.' },
      { q: 'Ne kadar bütçe gerekir?', a: 'Okul ücreti, sigorta ve vize başvurusu için istenen finansal yeterlilik tutarını ön görüşmede kalem kalem paylaşıyoruz.' },
    ],
    urgency: 'Popüler başlangıç tarihleri 2–3 ay önceden doluyor.',
  },
]

export const landingBySlug = Object.fromEntries(landings.map((l) => [l.slug, l])) as Record<string, Landing>

export const generalFaqs: Faq[] = [
  { q: 'Tampa Yurtdışı Eğitim hangi hizmetleri sunuyor?', a: 'Yurtdışında dil okulu, yaz okulu, lise, üniversite, yüksek lisans ve work and study programlarında danışmanlık; üniversite başvuru ve mentörlük paketi, kariyer rehberliği, vize ve konaklama danışmanlığı sunuyoruz.' },
  { q: 'Ofisleriniz nerede?', a: 'İzmir Karşıyaka’daki merkez ofisimiz, Aydın Efeler ofisimiz ve İzmir ofisimizin hemen yanındaki İngiltere Üniversite Temsilciliğimizle hizmet veriyoruz. Online görüşme de planlayabilirsiniz.' },
  { q: 'Yurtdışı eğitim için ne zaman başvurmalıyım?', a: 'Dil okulları için 1–3 ay, yaz okulları için 4–6 ay, üniversite ve yüksek lisans için ise eğitimin başlamasından 9–12 ay önce planlamaya başlamanızı öneriyoruz.' },
  { q: 'Hangi ülke bana uygun?', a: 'Hedefiniz, bütçeniz, dil seviyeniz ve mezuniyet sonrası planınız ülke seçimini belirler. Ücretsiz ön görüşmede size uygun ülkeleri karşılaştırmalı olarak sunuyoruz.' },
  { q: 'Vize garantisi veriyor musunuz?', a: 'Vize onayı tamamen ilgili konsolosluğun takdirindedir; bu nedenle kesin vize garantisi verilmez. Biz dosyanızın eksiksiz ve en doğru şekilde hazırlanmasını sağlıyoruz.' },
  { q: 'Yurtdışındayken de destek alabilir miyim?', a: 'Evet. Havalimanı karşılamasından eğitim süresince düzenli takibe kadar yanınızdayız; Amerika ve İngiltere’de yerinde iş birliklerimiz var.' },
]
