import { ukSummer } from './uk'
import { countries, type Country, type ProgramKey } from './countries'

export type Faq = { q: string; a: string }

export type Program = {
  key: ProgramKey
  slug: string
  name: string
  short: string
  trait: string
  image: string
  /** Ana sayfa program kartı için dikey görsel (opsiyonel) */
  portrait?: string
  lead: string
  promise: string
  intro: string[]
  audience: string[]
  facts: { label: string; value: string }[]
  features: { title: string; text: string }[]
  requirements: string[]
  steps: { title: string; text: string }[]
  costFactors: string[]
  faqs: Faq[]
  seo: { title: string; body: string[] }
  countryTitle: (c: Country) => string
  countryLead: (c: Country) => string
}

export const programs: Program[] = [
  {
    key: 'dil',
    slug: 'yurtdisi-dil-okullari',
    name: 'Yurtdışı Dil Okulları',
    short: 'Dil okulu',
    trait: 'Yenilikçi',
    image: '/img/misc/language.jpg',
    portrait: '/img/misc/london-portrait.jpg',
    lead: 'Yurtdışında dil eğitimi almak, yalnızca bir dili öğrenmenin ötesine geçerek, farklı kültürleri deneyimlemek ve global bir vizyon kazanmak için eşsiz bir fırsattır.',
    promise: 'Tampa Eğitim olarak, bu deneyimi sizin için unutulmaz ve verimli bir hale getirmek için buradayız.',
    intro: [
      'Bir dili en hızlı ve en kalıcı şekilde öğrenmenin yolu, o dilin konuşulduğu ülkede yaşamaktır. Sınıfta öğrendiğinizi markette, metroda, ev arkadaşınızla sohbetinizde hemen kullanırsınız; birkaç hafta içinde düşünme biçiminizin değiştiğini fark edersiniz.',
      '19 ülkede, İngilizceden Japoncaya kadar farklı dillerde akredite okullarla çalışıyoruz. Seviyenize, bütçenize ve hedefinize göre okul, şehir, konaklama ve program yoğunluğunu birlikte belirliyor; kayıttan vizeye, havalimanı karşılamasından dönüşünüze kadar süreci sizin adınıza yönetiyoruz.',
    ],
    audience: [
      'Kariyerinde İngilizcesini bir üst seviyeye taşımak isteyen profesyoneller',
      'Üniversite veya yüksek lisans öncesi dil yeterliliği kazanmak isteyenler',
      'IELTS, TOEFL, Cambridge veya Goethe sınavlarına hazırlananlar',
      'Tatilini dil öğrenerek değerlendirmek isteyen her yaştan katılımcı',
      'Uzun dönem programlarla çalışarak yurtdışı deneyimi kazanmak isteyenler',
    ],
    facts: [
      { label: 'Süre', value: '1 haftadan 1 yıla' },
      { label: 'Yoğunluk', value: 'Haftada 15–30 ders' },
      { label: 'Başlangıç', value: 'Her pazartesi' },
      { label: 'Yaş', value: '16 yaş ve üzeri' },
    ],
    features: [
      { title: 'Genel İngilizce', text: 'Konuşma, dinleme, okuma ve yazma becerilerini dengeli geliştiren temel program.' },
      { title: 'Yoğun ve akademik', text: 'Üniversiteye hazırlık için yazma, sunum ve akademik okuma odaklı dersler.' },
      { title: 'Sınav hazırlık', text: 'IELTS, TOEFL, Cambridge, Goethe ve TestDaF sınavlarına özel modüller.' },
      { title: 'İş İngilizcesi', text: 'Toplantı, müzakere ve sunum dilini geliştiren profesyonel programlar.' },
      { title: '30 yaş üstü', text: 'Yetişkin katılımcıların bir arada olduğu, daha sakin tempolu sınıflar.' },
      { title: 'Birebir dersler', text: 'Hedefe özel, esnek saatli özel ders paketleri.' },
    ],
    requirements: [
      'Geçerli pasaport',
      'Kayıt formu ve okul kabul belgesi',
      'Finansal yeterlilik (banka hesap dökümü veya sponsor belgesi)',
      'Konaklama ve sağlık sigortası',
      'Uzun dönem programlarda öğrenci vizesi',
    ],
    steps: [
      { title: 'Ücretsiz ön görüşme', text: 'Hedefinizi, seviyenizi ve bütçenizi konuşur, size uygun ülke ve şehirleri listeleriz.' },
      { title: 'Okul ve program seçimi', text: 'Akredite okullar arasından karşılaştırmalı teklif hazırlar, birlikte karar veririz.' },
      { title: 'Kayıt ve konaklama', text: 'Okul kaydınızı yapar, yurt, aile yanı veya öğrenci evi seçeneğinizi ayarlarız.' },
      { title: 'Vize dosyası', text: 'Evrak listenizi hazırlar, formları doldurur ve randevu sürecini takip ederiz.' },
      { title: 'Uçuş öncesi oryantasyon', text: 'Şehir, okul ilk günü, ulaşım ve bütçe hakkında bilgilendirme yaparız.' },
      { title: 'Varış ve takip', text: 'Havalimanı karşılaması ve eğitim boyunca düzenli iletişimle yanınızdayız.' },
    ],
    costFactors: ['Ülke ve şehir', 'Haftalık ders saati', 'Program süresi', 'Konaklama türü', 'Sezon (yaz aylarında ücretler artar)', 'Okul promosyonları'],
    faqs: [
      { q: 'Yurtdışında dil okulu ne kadar sürer?', a: 'Programlar 1 haftadan 52 haftaya kadar planlanabilir. Bir seviye atlamak için ortalama 8–12 haftalık yoğun bir eğitim önerilir. Başlangıç seviyenizi ve hedefinizi ön görüşmede değerlendirip süreyi birlikte belirliyoruz.' },
      { q: 'Dil okulu için yaş sınırı var mı?', a: 'Yetişkin programları genellikle 16 veya 18 yaş üstü katılımcılar içindir; üst yaş sınırı yoktur. 30 yaş üstü özel programlar da sunulmaktadır. Daha küçük yaş grupları için yaz okullarımızı inceleyebilirsiniz.' },
      { q: 'Dil okulunda çalışabilir miyim?', a: 'Çalışma hakkı ülkeye ve programın uzunluğuna bağlıdır. İrlanda, Malta, Kanada (co-op), Avustralya ve Yeni Zelanda’da belirli koşullarla çalışma mümkündür. Detaylar için work and study sayfamıza göz atabilirsiniz.' },
      { q: 'Hangi ülkede İngilizce öğrenmek daha uygun?', a: 'Bütçe öncelikliyse Malta ve Dubai, akademik hedef varsa İngiltere ve Amerika, çalışma imkânı isteniyorsa İrlanda ve Kanada öne çıkar. Size en uygun ülkeyi ön görüşmede birlikte belirliyoruz.' },
      { q: 'Danışmanlık ücreti ödüyor muyum?', a: 'Ücretlendirme programa ve hizmet kapsamına göre şeffaf şekilde ön görüşmede paylaşılır. Okul fiyatları, okulun resmi fiyatları ve dönemsel kampanyalar üzerinden sunulur.' },
    ],
    seo: {
      title: 'Yurtdışında dil eğitimi hakkında bilmeniz gerekenler',
      body: [
        'Yurtdışı dil okulu seçerken yalnızca ülkeye değil; okulun akreditasyonuna, sınıflardaki milliyet dağılımına, şehrin yaşam maliyetine ve konaklama seçeneklerine de bakmak gerekir. Aynı ülkede bile iki okul arasında ders yoğunluğu, sınıf mevcudu ve sosyal program açısından ciddi farklar olabilir.',
        'Program yoğunluğu öğrenme hızınızı doğrudan etkiler. Haftada 20 ders saati çoğu öğrenci için dengeli bir başlangıçtır; hızlı ilerlemek isteyenler 25–30 saatlik yoğun programları tercih eder. Sınav hedefi olanlar için genel İngilizce ile sınav modülünü birleştiren programlar en verimli seçenektir.',
        'Konaklama, deneyimin önemli bir parçasıdır. Aile yanında konaklama dili günlük hayatta pratik etmenizi sağlarken, öğrenci yurtları ve rezidanslar daha bağımsız bir yaşam sunar. Tampa olarak her öğrenci için konaklama seçeneklerini okulla birlikte planlıyoruz.',
        'Dil eğitimi sonrasında üniversite, yüksek lisans veya iş hedefiniz varsa, bu planı en başta kurmak zaman ve maliyet açısından büyük avantaj sağlar. Danışmanlarımız dil eğitiminizi bir sonraki adımınıza köprü olacak şekilde planlar.',
      ],
    },
    countryTitle: (c) => `${c.name} Dil Okulları`,
    countryLead: (c) =>
      `${c.loc} ${c.language.split(',')[0]} öğrenmek; ${c.hub} başta olmak üzere ${c.cities.slice(1, 4).join(', ')} gibi şehirlerde, akredite okullarda ve size uygun yoğunlukta mümkün.`,
  },
  {
    key: 'yaz',
    slug: 'yurtdisi-yaz-okullari',
    name: 'Yurtdışı Yaz Okulları',
    short: 'Yaz okulu',
    trait: 'Dinamik',
    image: '/img/misc/summer.jpg',
    lead: 'Yurtdışında yaz kampı deneyimi, yalnızca eğlenceli bir tatil değil, aynı zamanda farklı bir kültürü tanıma, yeni arkadaşlıklar kurma ve kendinizi geliştirmenin en etkili yollarından biridir.',
    promise: 'Her öğrenci için yaşına, İngilizce seviyesine ve karakterine uygun kampüsü birlikte seçiyor; kayıttan dönüşe kadar veliyle düzenli iletişimde kalıyoruz.',
    intro: [
      'Yaz okulları, 7–17 yaş arası öğrencilerin güvenli ve denetimli bir ortamda dil öğrenirken dünyanın dört bir yanından gelen yaşıtlarıyla tanıştığı programlardır. Sabah dersleri, öğleden sonra atölyeler ve spor, hafta sonları şehir gezileriyle her gün dolu dolu geçer.',
      'Velilerimizin en çok önem verdiği konu güvenlik. Bu yüzden yalnızca 7/24 gözetim sunan, kampüs içi konaklamalı ve deneyimli grup liderleriyle çalışan okulları öneriyor; öğrencimiz Türkiye’ye dönene kadar aileyle düzenli iletişimde kalıyoruz.',
    ],
    audience: [
      '7–17 yaş arası, ilk yurtdışı deneyimini yaşayacak öğrenciler',
      'Yaz tatilini verimli değerlendirmek isteyen aileler',
      'Ortaokul ve lisede İngilizcesini güçlendirmek isteyen gençler',
      'Spor, sanat, kodlama veya liderlik gibi özel ilgi alanları olan öğrenciler',
      'Gelecekte yurtdışında lise veya üniversite okumayı düşünenler',
    ],
    facts: [
      { label: 'Süre', value: ukSummer.duration },
      { label: 'Yaş', value: ukSummer.ages },
      { label: 'Dönem', value: 'Haziran – Ağustos' },
      { label: 'Gözetim', value: '7/24 grup liderleri' },
    ],
    features: [
      { title: 'Dil + aktivite', text: 'Sabah İngilizce dersleri, öğleden sonra spor, sanat ve atölyeler.' },
      { title: 'Kampüs konaklaması', text: 'Üniversite veya yatılı okul kampüslerinde güvenli konaklama.' },
      { title: 'Hafta sonu gezileri', text: 'Tarihi şehirler, müzeler ve tema parklarına tam gün geziler.' },
      { title: 'Özel ilgi programları', text: 'Futbol, tenis, binicilik, kodlama, liderlik ve sanat kampları.' },
      { title: 'Refakatli gruplar', text: 'Uygun dönemlerde Türkiye’den refakatçi eşliğinde grup uçuşları.' },
      { title: 'Sertifika', text: 'Program sonunda seviye ve katılım sertifikası.' },
    ],
    requirements: ['Geçerli pasaport', 'Veli muvafakatnamesi (noter onaylı)', 'Kayıt formu ve sağlık beyanı', 'Vize gereken ülkelerde vize dosyası', 'Seyahat sağlık sigortası'],
    steps: [
      { title: 'Ön görüşme', text: 'Öğrencinin yaşı, seviyesi ve ilgi alanlarına göre program seçeneklerini sunarız.' },
      { title: 'Erken kayıt', text: 'Yaz okulları kontenjanları erken dolar; ideal kayıt dönemi ocak – mart arasıdır.' },
      { title: 'Belgeler ve vize', text: 'Muvafakatname, banka mektubu ve vize evraklarını birlikte hazırlarız.' },
      { title: 'Veli bilgilendirmesi', text: 'Program, kurallar, iletişim ve harçlık hakkında detaylı bilgilendirme yaparız.' },
      { title: 'Uçuş ve karşılama', text: 'Uçuşlar planlanır, öğrenci havalimanında okul tarafından karşılanır.' },
      { title: 'Program boyunca takip', text: 'Okul ve aileyle sürekli iletişimde kalır, dönüşe kadar süreci izleriz.' },
    ],
    costFactors: ['Ülke ve kampüs', 'Program süresi', 'Özel ilgi programı (spor, sanat vb.)', 'Konaklama tipi', 'Uçuş ve transfer', 'Refakatçi hizmeti'],
    faqs: [
      { q: 'Yaz okulları kaç yaşından itibaren uygundur?', a: 'Programlar genellikle 7–17 yaş arası öğrencileri kapsar. Yaş gruplarına göre ayrı sınıflar ve aktiviteler planlanır.' },
      { q: 'Çocuğum yalnız seyahat edebilir mi?', a: 'Havayollarının refakatsiz çocuk hizmetinden faydalanılabilir veya uygun dönemlerde refakatli grup uçuşlarımıza katılabilir. Okullar havalimanında öğrenciyi karşılar.' },
      { q: 'Yaz okulu için ne zaman kayıt yaptırmalıyım?', a: 'Popüler kampüsler ocak – mart aylarında dolmaya başlar. Vize süreçleri de düşünüldüğünde en geç nisan ayında kaydın tamamlanmasını öneriyoruz.' },
      { q: 'Programda güvenlik nasıl sağlanıyor?', a: 'Önerdiğimiz okullar 7/24 gözetim, belirli öğrenci başına grup lideri, kampüs giriş kontrolü ve acil durum hattı sunar. Program kurallarını veliyle önceden paylaşırız.' },
    ],
    seo: {
      title: 'Doğru yaz okulunu seçmek',
      body: [
        'Yaz okulu seçiminde ilk kriter öğrencinin yaşı ve bağımsızlık düzeyidir. İlk kez yurtdışına çıkacak küçük yaştaki öğrenciler için kampüs içi konaklamalı, kapalı programlar daha uygundur; daha büyük öğrenciler şehir merkezindeki programlarda daha fazla serbestlik bulur.',
        'Programın milliyet dağılımı, dersler dışında İngilizce konuşma fırsatını belirler. Danışmanlarımız okulların geçmiş yıllardaki milliyet oranlarını paylaşarak bilinçli bir seçim yapmanıza yardımcı olur.',
        'Ders saatleri, aktivite programı, gezi sayısı ve konaklama tipi fiyatları doğrudan etkiler. Her Şey Dahil paketlerimizde bu kalemler tek fiyat altında birleştirilir.',
      ],
    },
    countryTitle: (c) => `${c.name} Yaz Okulları`,
    countryLead: (c) =>
      `${c.loc} yaz okulu; ${c.cities.slice(0, 3).join(', ')} gibi şehirlerde dil dersleri, aktiviteler ve gezilerle dolu, 7/24 gözetimli bir yaz demek.`,
  },
  {
    key: 'lise',
    slug: 'yurtdisi-lise-egitimi',
    name: 'Yurtdışı Lise Eğitimi',
    short: 'Lise',
    trait: 'Güvenilir',
    image: '/img/misc/student-bridge.jpg',
    lead: 'Kendine güvenen, bağımsız ve çok yönlü bireyler yetiştirmek için tasarlanan yurtdışı lise programları, geleceğinizi şekillendirecek en önemli adımlardan biridir.',
    promise: 'Şimdi, hayalinizdeki yurtdışı lise deneyimine ilk adımı atmaya hazır mısınız?',
    intro: [
      'Yurtdışında lise eğitimi, öğrencinin yabancı dili anadil seviyesine yaklaştırdığı, uluslararası bir diploma veya transkript edindiği ve üniversite başvurularında güçlü bir profil oluşturduğu dönemdir.',
      'Bir dönemlik değişim programlarından mezuniyete kadar süren tam lise eğitimine, yatılı okullardan aile yanı konaklamalı devlet okullarına kadar farklı modelleri öğrencinin karakterine ve ailenin beklentisine göre değerlendiriyoruz.',
    ],
    audience: ['13–18 yaş arası öğrenciler', 'Yurtdışında üniversite hedefleyen aileler', 'Bir dönem veya bir yıllık kültürel değişim isteyenler', 'IB, A-Level veya Amerikan diploması almak isteyenler'],
    facts: [
      { label: 'Süre', value: '1 dönem – 4 yıl' },
      { label: 'Yaş', value: '13–18 yaş' },
      { label: 'Konaklama', value: 'Yatılı okul / aile yanı' },
      { label: 'Başlangıç', value: 'Eylül ve ocak' },
    ],
    features: [
      { title: 'Yatılı okullar', text: 'Akademik disiplin ve kampüs yaşamını birleştiren boarding school seçenekleri.' },
      { title: 'Aile yanı programlar', text: 'Host family ile kültürü içeriden yaşama fırsatı.' },
      { title: 'Uluslararası diplomalar', text: 'A-Level, IB ve Amerikan lise diploması seçenekleri.' },
      { title: 'Akademik danışmanlık', text: 'Ders seçimi ve üniversite başvurusuna yönelik planlama.' },
      { title: 'Vasi ve takip', text: 'Ülkedeki yerel koordinatör ve vasi hizmetiyle sürekli takip.' },
      { title: 'Denklik desteği', text: 'Türkiye’ye dönüşte denklik süreçleri için yönlendirme.' },
    ],
    requirements: ['Son iki yılın karnesi ve transkripti', 'İngilizce yeterlilik veya okul giriş sınavı', 'Öğretmen referansları', 'Veli muvafakatnamesi', 'Öğrenci vizesi'],
    steps: [
      { title: 'Profil görüşmesi', text: 'Öğrencinin akademik durumu, karakteri ve hedeflerini değerlendiririz.' },
      { title: 'Okul listesi', text: 'Model, bütçe ve konuma göre kısa liste hazırlarız.' },
      { title: 'Başvuru ve mülakat', text: 'Başvuru dosyasını hazırlar, okul mülakatlarına öğrenciyi hazırlarız.' },
      { title: 'Kabul ve vize', text: 'Kabulün ardından vize dosyasını ve vasi belgelerini tamamlarız.' },
      { title: 'Oryantasyon', text: 'Öğrenci ve veliye kültürel uyum ve okul kuralları üzerine bilgilendirme.' },
      { title: 'Dönem boyunca takip', text: 'Okul raporlarını takip eder, aileyle düzenli iletişim kurarız.' },
    ],
    costFactors: ['Okul tipi (yatılı / devlet / özel)', 'Ülke ve bölge', 'Konaklama modeli', 'Program süresi', 'Vasi ve koordinasyon hizmetleri'],
    faqs: [
      { q: 'Yurtdışında lise eğitimi için en uygun yaş nedir?', a: 'Dil ve kültüre uyum açısından 14–16 yaş en verimli dönemdir. Mezuniyet hedefleniyorsa 9. veya 10. sınıfta başlamak üniversite başvurusu için güçlü bir profil sağlar.' },
      { q: 'Yurtdışında aldığım lise eğitimi Türkiye’de geçerli mi?', a: 'Yurtdışında tamamlanan sınıflar için Milli Eğitim Bakanlığı’na denklik başvurusu yapılır. Süreç hakkında başvuru öncesinde bilgilendirme yapıyoruz.' },
      { q: 'Bir dönemlik program mümkün mü?', a: 'Evet. Birçok ülkede bir dönem veya bir akademik yıl süren değişim programları vardır; öğrenci Türkiye’deki okuluna dönebilir.' },
    ],
    seo: {
      title: 'Yurtdışında lise eğitiminin üniversiteye etkisi',
      body: [
        'Yurtdışında lise eğitimi alan öğrenciler, üniversite başvurularında dil yeterliliği, akademik transkript ve ders dışı faaliyetler açısından güçlü bir dosya oluşturur. Özellikle A-Level ve IB diplomaları, İngiltere ve Avrupa üniversitelerine doğrudan başvuru imkânı tanır.',
        'Okul seçimi yapılırken akademik başarı kadar öğrencinin karakteri de göz önünde bulundurulmalıdır. Bağımsız ve sosyal öğrenciler büyük kampüslerde rahat ederken, daha içe dönük öğrenciler küçük ve aile ortamı sunan okullarda daha hızlı uyum sağlar.',
      ],
    },
    countryTitle: (c) => `${c.name} Lise Eğitimi`,
    countryLead: (c) => `${c.loc} lise eğitimi; ${c.language.split(',')[0]} dilinde akademik bir altyapı ve üniversiteye doğrudan açılan bir kapı demek.`,
  },
  {
    key: 'lisans',
    slug: 'lisans-programlari',
    name: 'Yurtdışında Üniversite',
    short: 'Üniversite',
    trait: 'Modern',
    image: '/img/misc/bachelor.jpg',
    lead: 'Hayalinizdeki kariyere bir adım daha yaklaşın!',
    promise: 'Tampa Eğitim olarak, prestijli üniversitelerin birbirinden çeşitli lisans programlarını sizlerle buluşturuyor, geleceğinize sağlam bir temel atmanız için rehberlik ediyoruz.',
    intro: [
      'Yurtdışında üniversite okumak; uluslararası tanınırlığı olan bir diploma, ikinci bir dili akademik düzeyde kullanma becerisi ve küresel bir iş ağı demek. Doğru ülke ve bölüm seçimiyle, Türkiye’deki vakıf üniversitesi maliyetlerine yakın bütçelerle Avrupa’da eğitim almak mümkün.',
      '12 ülkede, aralarında Queen Mary University of London, Jagiellonian Üniversitesi ve Varşova Teknik Üniversitesi’nin de bulunduğu kurumlarla çalışıyoruz. Bölüm seçiminden motivasyon mektubuna, kabul sonrası vize ve konaklamaya kadar her aşamayı mentörlerimizle birlikte yönetiyoruz.',
    ],
    audience: ['Lise son sınıf öğrencileri ve mezunlar', 'IB, A-Level veya AP programındaki öğrenciler', 'Türkiye’de üniversite okuyup yurtdışına geçmek isteyenler', 'Burslu eğitim fırsatı arayanlar'],
    facts: [
      { label: 'Süre', value: '3–4 yıl' },
      { label: 'Başvuru', value: 'Eylül – mart' },
      { label: 'Dil', value: 'IELTS / TOEFL / Duolingo' },
      { label: 'Başlangıç', value: 'Eylül (bazı ülkelerde şubat)' },
    ],
    features: [
      { title: '5 üniversiteye başvuru', text: 'Mentörlük paketimizle sizin adınıza 5 üniversiteye eksiksiz başvuru.' },
      { title: 'Motivasyon mektubu', text: 'Her üniversite için ayrı, kişiye özel motivasyon mektubu (SOP).' },
      { title: 'Foundation programları', text: 'Doğrudan kabul alamayan öğrenciler için hazırlık yılı seçenekleri.' },
      { title: 'Burs danışmanlığı', text: 'Devlet, üniversite ve bölgesel burs başvuruları.' },
      { title: 'Portfolyo desteği', text: 'Mimarlık, tasarım ve sanat bölümleri için portfolyo değerlendirmesi.' },
      { title: 'Mülakat provası', text: 'Gerçek mülakat atmosferinde deneme görüşmeleri.' },
    ],
    requirements: ['Lise diploması ve transkript', 'Dil yeterlilik belgesi (IELTS, TOEFL, Duolingo)', 'Motivasyon mektubu', 'Referans mektupları', 'Bazı bölümler için portfolyo veya giriş sınavı', 'Pasaport'],
    steps: [
      { title: 'Mentörle tanışma', text: 'Akademik geçmiş, dil seviyesi ve beklentileriniz üzerine birebir görüşme.' },
      { title: 'Stratejik liste', text: 'Güvenli, orta ve hedef okullardan oluşan 5 üniversitelik başvuru listesi.' },
      { title: 'Dosya hazırlığı', text: 'Motivasyon mektupları, referanslar, CV ve portfolyonun hazırlanması.' },
      { title: 'Başvurular ve mülakat', text: 'Başvuruların yapılması, takibi ve mülakat hazırlığı.' },
      { title: 'Kabul ve vize', text: 'Kabul değerlendirmesi, kayıt ve vize sürecinin yönetimi.' },
      { title: 'Yerleşme', text: 'Konaklama, uçuş ve varış sonrası uyum desteği.' },
    ],
    costFactors: ['Ülke ve üniversite türü (devlet / özel)', 'Bölüm', 'Şehrin yaşam maliyeti', 'Foundation veya dil hazırlık ihtiyacı', 'Burs durumu'],
    faqs: [
      { q: 'Türkiye’de lise mezunu olarak doğrudan yurtdışında üniversiteye başvurabilir miyim?', a: 'Ülkeye göre değişir. Polonya, Macaristan, İtalya ve Amerika’da doğrudan başvuru yaygındır. İngiltere ve Almanya’da çoğunlukla Foundation veya Studienkolleg gibi bir hazırlık yılı gerekir.' },
      { q: 'Yurtdışı diplomam Türkiye’de geçerli olur mu?', a: 'YÖK tarafından tanınan üniversitelerden alınan diplomalar için denklik başvurusu yapılabilir. Yalnızca tanınırlığı olan kurumlarla çalışıyoruz.' },
      { q: 'YKS puanı gerekiyor mu?', a: 'Birçok ülkede YKS puanı istenmez. Ancak Türkiye’de denklik sürecinde bazı bölümler için belirli koşullar aranabilir; başvuru öncesinde bunu birlikte değerlendiriyoruz.' },
      { q: 'Başvurular ne zaman yapılmalı?', a: 'Eylül dönemi için başvurular genellikle bir önceki yılın ekim ayından itibaren açılır. Burs ve popüler bölümler için ilk dönemde başvurmak avantaj sağlar.' },
    ],
    seo: {
      title: 'Yurtdışında üniversite okumak için yol haritası',
      body: [
        'Yurtdışında üniversite başvurusu, lise son sınıftan en az bir yıl önce planlanmaya başlanmalıdır. Dil sınavı, motivasyon mektubu, referanslar ve varsa portfolyo hazırlığı zaman alır; erken başlamak hem kabul hem burs şansını artırır.',
        'Bölüm ve ülke seçiminde mezuniyet sonrası çalışma hakları, diplomanın Türkiye’de tanınırlığı ve toplam bütçe birlikte değerlendirilmelidir. Mentörlerimiz her öğrenci için güvenli, orta seviye ve hedef okulları dengeleyen bir başvuru stratejisi kurar.',
        'Kabul aldıktan sonra vize, konaklama ve kayıt işlemleri ayrı bir planlama gerektirir. Tampa olarak bu süreci varış sonrası uyum dahil uçtan uca yönetiyoruz.',
      ],
    },
    countryTitle: (c) => `${c.loc} Üniversite`,
    countryLead: (c) => `${c.loc} üniversite okumak; ${c.highlights[0].text.charAt(0).toLowerCase()}${c.highlights[0].text.slice(1)}`,
  },
  {
    key: 'yuksek-lisans',
    slug: 'yurtdisi-yuksek-lisans',
    name: 'Yurtdışı Yüksek Lisans',
    short: 'Yüksek lisans',
    trait: 'Güçlü',
    image: '/img/misc/masters.jpg',
    lead: 'Dünyanın dört bir yanında seçkin üniversitelerde yüksek lisans programlarına katılarak kariyerinizde bir adım öne çıkmaya hazır mısınız?',
    promise: 'Uzman danışmanlarımızla hayallerinizdeki eğitimi planlayın, akademik hedeflerinize ulaşın. Hangi alanda uzmanlaşmak istediğinize karar verin, biz sizin için en uygun üniversite ve programı bulalım.',
    intro: [
      'Yurtdışında yüksek lisans; uzmanlaşmak, kariyer yönünü değiştirmek veya uluslararası bir iş piyasasına adım atmak isteyenler için en etkili yatırımlardan biridir. Bir yıllık İngiltere programlarından Almanya’nın harçsız iki yıllık derecelerine kadar seçenekler çok geniştir.',
      'Almanya, İngiltere ve Polonya başta olmak üzere 15 ülkede öğrencilerimizi yerleştirdik. Program seçimi, motivasyon mektubu, referanslar, mülakat ve vize süreçlerinde mentörlerimiz yanınızda; mezuniyetten sonra da iletişimimiz sürüyor.',
    ],
    audience: ['Lisans son sınıf öğrencileri ve yeni mezunlar', 'Kariyerinde uzmanlaşmak isteyen profesyoneller', 'Alan değiştirmek isteyenler', 'Yurtdışında çalışma izni ve kariyer hedefleyenler'],
    facts: [
      { label: 'Süre', value: '1–2 yıl' },
      { label: 'Başvuru', value: 'Ekim – haziran' },
      { label: 'Sınavlar', value: 'IELTS / TOEFL, gerekirse GRE / GMAT' },
      { label: 'Başlangıç', value: 'Eylül / ekim, bazı programlarda ocak' },
    ],
    features: [
      { title: 'Program eşleştirme', text: 'Akademik geçmişinize ve kariyer hedefinize uygun program analizi.' },
      { title: 'SOP ve CV', text: 'Her programa özel motivasyon mektubu ve uluslararası formatta CV.' },
      { title: 'Referans mektupları', text: 'Akademik ve profesyonel referansların içerik ve koordinasyonu.' },
      { title: 'Burs ve asistanlık', text: 'Burs, indirim ve asistanlık fırsatlarının takibi.' },
      { title: 'Mülakat hazırlığı', text: 'Deneme mülakatları ve geri bildirim.' },
      { title: 'Vize danışmanlığı', text: 'Finansal belgelerden mülakata kadar vize dosyası.' },
    ],
    requirements: ['Lisans diploması ve transkript', 'Dil yeterlilik belgesi', 'Motivasyon mektubu (SOP)', '2–3 referans mektubu', 'CV', 'Bazı programlar için GRE / GMAT veya portfolyo'],
    steps: [
      { title: 'Hedef analizi', text: 'Not ortalaması, deneyim ve hedeflerinizi mentörünüzle değerlendirin.' },
      { title: 'Program listesi', text: 'Kabul şansı ve kariyer çıktısına göre 5 programlık strateji.' },
      { title: 'Belge hazırlığı', text: 'SOP, CV, referanslar ve varsa portfolyonun hazırlanması.' },
      { title: 'Başvuru ve takip', text: 'Başvuruların yapılması ve üniversitelerle yazışmaların takibi.' },
      { title: 'Kabul ve finansman', text: 'Teklifleri karşılaştırma, burs ve depozito süreçleri.' },
      { title: 'Vize ve yerleşme', text: 'Vize, konaklama ve varış sonrası destek.' },
    ],
    costFactors: ['Ülke ve üniversite', 'Program süresi (1 veya 2 yıl)', 'Alan (MBA ve tıp bilimleri daha yüksek)', 'Şehrin yaşam maliyeti', 'Burs ve indirimler'],
    faqs: [
      { q: 'Not ortalamam düşükse yurtdışında yüksek lisans yapabilir miyim?', a: 'Evet. Not ortalaması önemli bir kriter olsa da iş deneyimi, güçlü bir motivasyon mektubu ve referanslar dosyayı dengeleyebilir. Ayrıca kabul koşulları daha esnek olan ülke ve programları birlikte değerlendiriyoruz.' },
      { q: 'ALES puanı gerekiyor mu?', a: 'Yurtdışındaki üniversiteler ALES istemez. Bazı programlar GRE veya GMAT talep edebilir; birçok program ise sınav şartı aramaz.' },
      { q: 'Yüksek lisans sonrası çalışma izni alabilir miyim?', a: 'İngiltere, İrlanda, Kanada, Almanya ve Avustralya gibi ülkeler mezunlara çalışma veya iş arama izni tanır. Ülke seçiminde bu haklar belirleyici bir kriterdir.' },
      { q: 'İş deneyimi şart mı?', a: 'Çoğu program için şart değildir. MBA ve bazı yönetim programları ise genellikle 2–3 yıl iş deneyimi ister.' },
    ],
    seo: {
      title: 'Yurtdışında yüksek lisans için doğru strateji',
      body: [
        'Yüksek lisans başvurularında en sık yapılan hata, tüm başvurularda aynı motivasyon mektubunu kullanmaktır. Her üniversitenin eğitim felsefesi ve önceliği farklıdır; bazıları araştırma deneyimine, bazıları liderlik ve topluma katkıya önem verir. Mentörlerimiz her başvuru için ayrı mektup yazmanızı sağlar.',
        'Başvuru stratejisi kurarken güvenli, orta seviye ve ulaşılması zor hedef okulların dengeli bir listesini oluşturmak kabul şansını en üst düzeye çıkarır. Programın modülleri, akademik kadrosu ve mezunların kariyer verileri bu listeyi şekillendirir.',
        'Almanya’da ücretsiz yüksek lisans, İngiltere’de bir yıllık hızlı programlar, Polonya ve Macaristan’da ekonomik seçenekler; her ülkenin kendine özgü bir avantajı vardır. Ön görüşmede bütçenize ve hedefinize uygun dengeyi birlikte kuruyoruz.',
      ],
    },
    countryTitle: (c) => `${c.loc} Yüksek Lisans`,
    countryLead: (c) => `${c.loc} yüksek lisans; ${c.tagline.charAt(0).toLowerCase()}${c.tagline.slice(1)}`,
  },
  {
    key: 'work-study',
    slug: 'work-and-study',
    name: 'Work and Study',
    short: 'Work & Study',
    trait: 'Sınır tanımayan',
    image: '/img/misc/work-study.jpg',
    lead: 'Work and Study programı, yurt dışında eğitim alırken aynı zamanda yasal olarak çalışabilme fırsatı sunan en popüler sistemlerden biridir.',
    promise: 'Dil eğitimi alırken çalışarak hem bütçenizi destekleyin hem de uluslararası iş deneyimi kazanın.',
    intro: [
      'Work and study programları, öğrenci statüsüyle eğitim alırken haftalık belirli saat sınırları içinde yasal olarak çalışmanıza imkân tanır. Bu model özellikle dil eğitimi almak ve kariyerine global bir yön vermek isteyenler tarafından tercih edilir.',
      'İrlanda, Malta, Kanada, Avustralya ve Dubai’de; okul seçimi, vize, konaklama ve ilk iş arama sürecinizde rehberlik ediyoruz. Hangi ülkenin size uygun olduğunu yaşınız, dil seviyeniz ve bütçeniz belirler.',
    ],
    audience: ['18–35 yaş arası, yurtdışında yaşam deneyimi arayanlar', 'Eğitim masraflarının bir kısmını çalışarak karşılamak isteyenler', 'Uluslararası iş deneyimiyle CV’sini güçlendirmek isteyenler', 'Uzun vadede yurtdışında kariyer planlayanlar'],
    facts: [
      { label: 'Süre', value: '25 hafta – 2 yıl' },
      { label: 'Çalışma', value: 'Dönem içinde yarı zamanlı' },
      { label: 'Yaş', value: '18 yaş ve üzeri' },
      { label: 'Ülkeler', value: 'İrlanda, Malta, Kanada, Avustralya, Dubai' },
    ],
    features: [
      { title: 'Yasal çalışma hakkı', text: 'Öğrenci vizesinin tanıdığı saat sınırları dahilinde çalışma.' },
      { title: 'Co-op programları', text: 'Kanada’da staj dönemi içeren kolej diplomaları.' },
      { title: 'CV ve iş hazırlığı', text: 'Ülke formatında CV ve iş görüşmesi hazırlığı.' },
      { title: 'Konaklama', text: 'İlk haftalar için güvenli konaklama ayarlaması.' },
      { title: 'Banka ve kayıt işlemleri', text: 'Vergi numarası, banka hesabı ve yerel kayıt süreçleri için rehberlik.' },
      { title: 'Uzun vadeli plan', text: 'Dil eğitiminden diploma ve üniversiteye geçiş planlaması.' },
    ],
    requirements: ['Geçerli pasaport', 'Programa göre minimum yaş ve dil seviyesi', 'Finansal yeterlilik belgeleri', 'Sağlık sigortası', 'Öğrenci vizesi'],
    steps: [
      { title: 'Ülke seçimi', text: 'Çalışma hakları, maliyet ve hedeflerinize göre ülke karşılaştırması.' },
      { title: 'Okul ve program', text: 'Çalışma izni veren akredite programa kayıt.' },
      { title: 'Vize dosyası', text: 'Finansal belgeler ve öğrenci vizesi başvurusu.' },
      { title: 'Varış ve kayıt', text: 'Oturum izni, banka hesabı ve vergi numarası işlemleri.' },
      { title: 'İş arama', text: 'CV, iş platformları ve görüşmelere hazırlık.' },
      { title: 'Sonraki adım', text: 'Diploma, üniversite veya kariyer için uzun vadeli plan.' },
    ],
    costFactors: ['Ülke', 'Program süresi', 'Konaklama', 'Vize ve sigorta', 'İlk ayların yaşam gideri'],
    faqs: [
      { q: 'Work and study yaş sınırı var mı?', a: 'Genel olarak bir üst yaş sınırı yoktur; ancak vize değerlendirmesinde eğitim geçmişi ve kariyer planının tutarlılığı önem kazanır. Blogumuzda yaş faktörünün vizeye etkisini ayrıntılı anlattık.' },
      { q: 'Kazandığım para masraflarımı karşılar mı?', a: 'Yarı zamanlı çalışma genellikle günlük yaşam giderlerinin bir kısmını karşılar. Eğitim ücreti ve ilk aylar için vize başvurusunda finansal yeterlilik göstermeniz gerekir.' },
      { q: 'Hangi işlerde çalışabilirim?', a: 'Öğrenciler çoğunlukla perakende, kafe-restoran, otelcilik ve müşteri hizmetleri gibi sektörlerde çalışır. Dil seviyeniz yükseldikçe iş seçenekleriniz de genişler.' },
    ],
    seo: {
      title: 'Work and study programını doğru planlamak',
      body: [
        'Work and study bir iş programı değil, öğrenci programıdır. Bu yüzden vize başvurusunda öncelik eğitimdir; çalışma hakkı eğitimle birlikte gelen bir imkândır. Başvuru dosyası, öğrencinin eğitim hedefini net şekilde ortaya koymalıdır.',
        'Ülkeler arasında çalışma saatleri, minimum program süresi ve maliyetler farklıdır. İrlanda ve Malta Avrupa’da, Kanada ve Avustralya ise uzun vadeli kariyer planlarında öne çıkar.',
      ],
    },
    countryTitle: (c) => `Work and Study ${c.name}`,
    countryLead: (c) => `${c.loc} work and study; eğitim alırken yasal olarak çalışma ve ${c.hub} gibi bir şehirde yaşama deneyimi demek.`,
  },
]

export const programByKey = Object.fromEntries(programs.map((p) => [p.key, p])) as Record<ProgramKey, Program>
export const programBySlug = Object.fromEntries(programs.map((p) => [p.slug, p])) as Record<string, Program>

export function countriesFor(key: ProgramKey) {
  return countries.filter((c) => c.programs.includes(key))
}
