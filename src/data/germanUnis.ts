// Almanya'daki özel (uygulamalı bilimler) üniversiteleri.
// Program ve ücret bilgileri üniversitelerin tanıtımlarından derlenmiştir; ücretler yıllık ve yaklaşıktır,
// üniversiteler her yıl günceller. Kesin ücret ve kontenjan için Tampa ile iletişime geçilir.
import type { Faq } from './programs'

export type ProgramGroup = { level: 'Hazırlık' | 'Lisans' | 'Yüksek lisans' | 'MBA'; fee?: string; note?: string; items: string[] }

export type GermanUni = {
  slug: string
  name: string
  short: string
  city: string
  campuses: string[]
  founded?: string
  image: string
  languages: string
  fromFee: { bachelor?: string; master?: string }
  focus: string[]
  lead: string
  about: string[]
  highlights: string[]
  programs: ProgramGroup[]
  intakes: string
  admission?: string[]
  scholarships?: string[]
}

export const germanAdvantages: { title: string; text?: string; list?: string[] }[] = [
  {
    title: 'YKS yerleşme şartı yok',
    text: 'Devlet üniversitelerinin aksine, özel üniversitelerin çoğunda Türkiye’deki YKS sınavına girme ya da bir bölüme yerleşme şartı aranmaz. Adaylar lise diploması, not ortalaması ve akademik motivasyonları üzerinden değerlendirilir.',
  },
  {
    title: 'Tamamen İngilizce eğitim',
    text: 'Lisans ve yüksek lisans programlarının büyük çoğunluğu İngilizce olarak sunulur; öğrenciler küresel iş diline hâkim olurken eş zamanlı olarak günlük yaşamda Almanca öğrenir.',
  },
  {
    title: 'Esnek dil ve kabul koşulları',
    list: [
      'Üniversitelerin bir kısmı yalnızca kendi düzenledikleri mülakat ve iç seviye tespit sınavlarıyla öğrenci kabul eder.',
      'IELTS talep eden kurumlar öğrencinin genel akademik başarısına göre skoru esnetebilir (genellikle IELTS 5.5–6.0 yeterlidir).',
      'Dil yeterliliği henüz bulunmayan adaylar için kampüs bünyesinde hazırlık eğitimi (Pathway / Foundation) imkânı sunulur.',
    ],
  },
  {
    title: 'İş ve kariyer odaklı sistem',
    list: [
      'Aktif kariyer merkezleri öğrencileri ilk yıldan itibaren iş bulmaya hazırlar; CV optimizasyonu ve mülakat simülasyonları birebir yürütülür.',
      'Zorunlu kurumsal stajlar: Müfredata entegre stajlar sayesinde öğrenciler küresel şirketlerde profesyonel iş deneyimi kazanır.',
      'Kampüs kariyer günleri: Düzenli networking etkinlikleri ve fuarlarla öğrenciler doğrudan uluslararası İK yöneticileriyle bir araya gelir.',
    ],
  },
  {
    title: '18 aylık mezuniyet sonrası çalışma izni',
    text: 'Mezun olan her uluslararası öğrenci, Almanya’da yasal olarak 18 ay boyunca tam zamanlı iş arama ve çalışma iznine sahip olur.',
  },
  {
    title: 'Yüksek vize başarı oranı',
    text: 'Tampa Yurtdışı Eğitim’in stratejik dosya hazırlığı, doğru motivasyon kurgusu ve bloke hesap yönetimi sayesinde vize alım oranları en üst seviyededir.',
  },
  {
    title: 'YÖK denkliği',
    text: 'Alman devleti ve bağımsız akreditasyon kuruluşlarınca onaylı tüm kurumlar YÖK tarafından tanınmakta ve mezuniyet sonrası denklik yönetmeliklerine tam uyum sağlamaktadır.',
  },
]

export const germanSteps = [
  { title: 'Ön görüşme', text: 'Not ortalamanızı, İngilizce seviyenizi, bütçenizi ve kariyer hedefinizi konuşur; size uygun üniversite ve bölümleri belirleriz.' },
  { title: 'Başvuru dosyası', text: 'Diploma, transkript, pasaport, CV ve motivasyon mektubunuzu üniversitenin beklentisine göre birlikte hazırlarız.' },
  { title: 'Mülakat ve kabul', text: 'Gerekiyorsa üniversitenin online mülakatına veya iç sınavına hazırlanır, kabul mektubunuzu alırız.' },
  { title: 'Bloke hesap ve sigorta', text: 'Almanya öğrenci vizesi için zorunlu bloke hesabı ve sağlık sigortasını açma sürecini yönetiriz.' },
  { title: 'Vize başvurusu', text: 'Vize dosyanızı hazırlar, randevu ve mülakat sürecinde yanınızda oluruz.' },
  { title: 'Almanya’ya varış', text: 'Konaklama, şehir kaydı (Anmeldung) ve oturum izni adımlarında rehberlik ederiz.' },
]

export const germanFaqs: Faq[] = [
  { q: 'Almanya’daki özel üniversitelere YKS olmadan başvurabilir miyim?', a: 'Evet. Özel (uygulamalı bilimler) üniversitelerin çoğu Türkiye’deki YKS sınavına girme veya bir bölüme yerleşme şartı aramaz. Lise diploması, not ortalaması, İngilizce seviyesi ve motivasyon mektubu üzerinden değerlendirme yapılır.' },
  { q: 'Almanca bilmem gerekiyor mu?', a: 'Hayır. Bu üniversitelerdeki lisans ve yüksek lisans programlarının büyük bölümü tamamen İngilizcedir. Günlük yaşam ve iş hayatı için Almanca öğrenmenizi öneririz; birçok üniversite ücretsiz veya indirimli Almanca dersleri sunar.' },
  { q: 'Hangi IELTS puanı gerekli?', a: 'Üniversiteye ve programa göre değişmekle birlikte genellikle IELTS 5.5–6.0 yeterlidir. Bazı üniversiteler kendi online İngilizce sınavını veya mülakatını kabul eder; dil seviyesi yetmeyen adaylar için hazırlık (Foundation / Pathway) programları vardır.' },
  { q: 'Özel üniversite diplomaları YÖK tarafından tanınıyor mu?', a: 'Alman devleti tarafından tanınan ve bağımsız akreditasyon kuruluşlarınca onaylanan üniversitelerin diplomaları YÖK tarafından tanınır ve denklik yönetmeliğine uygundur. Başvuru öncesinde seçtiğiniz programın akreditasyon durumunu birlikte kontrol ediyoruz.' },
  { q: 'Mezun olduktan sonra Almanya’da çalışabilir miyim?', a: 'Evet. Almanya’da üniversiteden mezun olan uluslararası öğrenciler 18 ay boyunca iş arama ve tam zamanlı çalışma iznine sahiptir. Öğrenim süresince de yılda belirli gün sınırıyla yarı zamanlı çalışılabilir.' },
  { q: 'Yıllık ücretler ne kadar?', a: 'Lisans programları genellikle yıllık 9.000–13.500 €, yüksek lisans programları 11.000–21.000 € aralığındadır; MBA programları daha yüksek olabilir. Ücretler üniversite, şehir ve programa göre değişir; burs ve erken kayıt indirimleri için bizimle iletişime geçin.' },
  { q: 'Başvurular ne zaman yapılır?', a: 'Çoğu üniversitede kış (Ekim) ve yaz (Şubat–Mart) olmak üzere iki ana dönem vardır; bazı okullar yılda dört başlangıç sunar. Vize süreci de hesaba katıldığında, başlangıçtan en az 4–6 ay önce başvurmanızı öneririz.' },
]

export const germanUnis: GermanUni[] = [
  {
    slug: 'ue-university-of-europe-for-applied-sciences',
    name: 'University of Europe for Applied Sciences',
    short: 'UE',
    city: 'Berlin',
    campuses: ['Berlin', 'Hamburg', 'Potsdam', 'Iserlohn', 'Hannover'],
    image: '/img/almanya/berlin-tv-blue.jpg',
    languages: 'İngilizce ve Almanca',
    fromFee: { bachelor: '12.100 €', master: '11.000 €' },
    focus: ['Tasarım ve medya', 'Dijital iş ve veri bilimi', 'Yazılım mühendisliği', 'Spor ve etkinlik yönetimi'],
    lead: 'Merkezi Berlin’de olan UE; tasarım, dijital iş, yazılım ve spor yönetimi alanlarındaki uygulamalı programlarıyla Almanya’nın en çok tercih edilen özel üniversitelerinden biri.',
    about: [
      'University of Europe for Applied Sciences (UE), ana kampüsü ve idari merkezi Berlin’de bulunan, devlet tarafından tanınan özel bir uygulamalı bilimler üniversitesidir. Hamburg, Potsdam, Iserlohn ve Hannover’deki kampüsleriyle Almanya’nın farklı şehirlerinde eğitim verir.',
      'Programlar küçük sınıflarda, proje ve stüdyo çalışmasıyla yürütülür. Tasarım, fotoğraf, oyun tasarımı ve UX/UI gibi yaratıcı alanların yanında dijital iş, veri bilimi ve yazılım mühendisliği gibi teknoloji odaklı bölümler de sunar.',
    ],
    highlights: ['Berlin merkezli, 5 kampüs', 'Yaratıcı ve teknoloji odaklı bölümler', 'İngilizce ve Almanca programlar', 'Kış ve yaz dönemi başlangıçları'],
    programs: [
      {
        level: 'Lisans',
        fee: 'yıllık 12.100 €',
        items: [
          'Business and Management Studies (İngilizce / Almanca)',
          'Digital Business & Data Science (İngilizce)',
          'Digital Media and Marketing (İngilizce / Almanca)',
          'Digital Product Management (İngilizce)',
          'Software Engineering (İngilizce)',
          'Communication Design (İngilizce / Almanca)',
          'Film + Motion Design (İngilizce / Almanca)',
          'Game Design (İngilizce / Almanca)',
          'Illustration (İngilizce / Almanca)',
          'Photography (İngilizce)',
          'UX/UI Design (İngilizce / Almanca)',
          'Sport & Event Management (İngilizce / Almanca)',
          'Sports Studies (İngilizce)',
          'Football Management (İngilizce / Almanca)',
          'Business Psychology (Almanca)',
          'Psychology (Almanca)',
          'Sports Science: Fitness & Health / Training & Performance (Almanca)',
        ],
      },
      {
        level: 'Yüksek lisans',
        fee: 'yıllık 11.000 – 13.000 €',
        items: [
          'Corporate Management (İngilizce / Almanca)',
          'Creative Computing (İngilizce)',
          'Data Science (İngilizce)',
          'Software Engineering (İngilizce)',
          'Innovation Design Management (İngilizce)',
          'International Sport & Event Management (İngilizce)',
          'New Media Design (İngilizce)',
          'Visual & Experience Design (İngilizce)',
          'Photography (İngilizce)',
          'Marketing Management (Almanca)',
          'Psychology: Clinical & Rehabilitation / Coaching (Almanca)',
        ],
      },
      { level: 'MBA', fee: 'yaklaşık 12.000 €', items: ['Master of Business Administration (İngilizce)'] },
    ],
    intakes: 'Kış dönemi için son başvuru 1 Eylül, yaz dönemi için 5 Şubat. Bu tarihlerden sonra kontenjan olan programlarda bekleme listesi uygulanır.',
  },
  {
    slug: 'srh-berlin-university-of-applied-sciences',
    name: 'SRH Berlin University of Applied Sciences',
    short: 'SRH Berlin',
    city: 'Berlin',
    campuses: ['Berlin'],
    image: '/img/almanya/berlin-tv.jpg',
    languages: 'İngilizce',
    fromFee: { bachelor: '9.000 €', master: '12.900 €' },
    focus: ['İşletme ve uluslararası yönetim', 'Mühendislik ve bilgisayar bilimleri', 'İletişim ve yaratıcı endüstriler', 'Otel ve turizm işletmeciliği'],
    lead: 'Berlin’in merkezinde, işletmeden mühendisliğe, yaratıcı endüstrilerden otel yönetimine kadar geniş bir İngilizce program yelpazesi sunan, uygulama odaklı özel üniversite.',
    about: [
      'SRH Berlin University of Applied Sciences, Almanya’nın köklü özel eğitim gruplarından SRH’ye bağlı, Berlin’de bulunan bir uygulamalı bilimler üniversitesidir. İşletme, uluslararası yönetim, mühendislik, bilgisayar bilimleri, iletişim, yaratıcı endüstriler ve konaklama işletmeciliği alanlarında İngilizce lisans ve yüksek lisans programları sunar.',
      'Üniversite; uygulamalı dersleri, sektör bağlantılı stajları ve gerçek şirket projeleriyle tanınır. Öğretim üyelerinin birebir rehberliği ve küçük sınıflar, öğrencinin bireysel gelişimini ön planda tutar.',
    ],
    highlights: ['Berlin şehir merkezi', 'Tamamen İngilizce programlar', 'Mühendislik ve bilişim bölümleri', 'Ekim başlangıcı için Ağustos’ta başvuru önerilir'],
    programs: [
      {
        level: 'Lisans',
        fee: 'yıllık 9.000 – 10.200 €',
        items: [
          'International Business Administration',
          'International Business Administration – Marketing',
          'International Hotel Management',
          'Computer Science',
          'Applied Mechatronic Systems',
          'Development of Digital Products',
          'Advertising & Brand Communication',
          'Marketing Communication',
          'Creative Industries Management',
          'Film & Motion Design',
          'Photography',
          'Illustration',
          'Audio Design',
          'Music Production',
          'Popular Music',
        ],
      },
      {
        level: 'Yüksek lisans',
        fee: 'yıllık 12.900 €',
        items: [
          'International Management (Creative Leadership, Entrepreneurship)',
          'International Business and Leadership (Trade Management, Supply Chain Management)',
          'Hospitality Management and Leadership',
          'Digital Business Management (IT Security, Software Engineering, Data Analytics, IT Management)',
          'Computer Science (Cyber Security, Big Data and Artificial Intelligence)',
          'Engineering and International Business (Renewable Energy, Water and Waste Management)',
          'Engineering and Sustainable Technology Management (Mobility and Automotive Industry, Smart Building Technologies)',
          'Industry: Automation, Robotics & 3D Manufacturing',
          'Strategic Design',
          'Social Design & Sustainable Innovation',
          'Computing and the Arts',
          'Film, Television and Digital Narratives',
          'Photography',
        ],
      },
      {
        level: 'MBA',
        fee: 'yıllık 15.000 €',
        items: ['General Management', 'Executive General Management', 'International Healthcare Management', 'International Human Resource Management', 'Marketing Intelligence'],
      },
    ],
    intakes: 'Kesin bir son başvuru tarihi yoktur; Ekim başlangıçlı programlar için başvuruların en geç Ağustos’ta yapılması önerilir.',
  },
  {
    slug: 'macromedia-university-of-applied-sciences',
    name: 'Macromedia University of Applied Sciences',
    short: 'Macromedia',
    city: 'Berlin, Köln, Hamburg, Münih',
    campuses: ['Berlin', 'Köln', 'Hamburg', 'Münih'],
    founded: '2006',
    image: '/img/dest/almanya.jpg',
    languages: 'İngilizce',
    fromFee: { bachelor: '10.600 €', master: '13.000 €' },
    focus: ['Medya ve iletişim', 'Marka ve moda yönetimi', 'Film ve tasarım', 'Müzik yönetimi'],
    lead: 'Medya, iletişim, tasarım ve yönetim alanlarında Almanya’nın önde gelen özel üniversitelerinden; dört büyük şehirde kampüs ve yurt dışında bir dönem okuma imkânı.',
    about: [
      'Macromedia University of Applied Sciences, 2006’da kurulan ve medya, iletişim, tasarım ve yönetim alanlarında uzmanlaşan özel bir üniversitedir. Berlin, Köln, Hamburg ve Münih başta olmak üzere Almanya’nın büyük şehirlerinde kampüsleri bulunur.',
      'Üniversite, iş dünyasıyla temas ve sürekli mesleki gelişim konularında uluslararası sıralamalarda öne çıkar. “6 artı 1” modeliyle öğrenciler, 3,5 yıllık lisans eğitimlerinin bir dönemini yurt dışındaki partner üniversitelerden birinde tamamlayabilir.',
    ],
    highlights: ['4 şehirde kampüs', 'Medya ve yaratıcı endüstrilerde uzman', '6+1 modeli ile yurt dışında bir dönem', 'İngilizce programlar'],
    programs: [
      {
        level: 'Lisans',
        fee: 'yıllık 10.600 €',
        items: [
          'Media Management (Business Management, Fashion Management, Brand Management, Media and Communication, Music Management)',
          'Media and Communication Design',
          'Fashion Design',
          'Filmmaking',
          'Acting',
        ],
      },
      { level: 'Yüksek lisans', fee: 'yıllık 13.000 €', items: ['Media and Communication Management (Brand Management, Digital Media Business, Music Management)'] },
      { level: 'MBA', fee: 'yıllık 13.000 €', items: ['MBA Generic', 'MBA Marketing', 'MBA International Business', 'MBA Data Analytics'] },
    ],
    intakes: 'Yaz dönemi için son başvuru 15 Şubat, kış dönemi için 1 Eylül.',
  },
  {
    slug: 'ism-international-school-of-management',
    name: 'ISM International School of Management',
    short: 'ISM',
    city: 'Dortmund (merkez)',
    campuses: ['Dortmund', 'Berlin', 'Frankfurt', 'Hamburg', 'Köln', 'Münih', 'Stuttgart'],
    image: '/img/almanya/berlin-tv-sky.jpg',
    languages: 'İngilizce veya İngilizce/Almanca',
    fromFee: { bachelor: '10.560 €', master: '12.360 €' },
    focus: ['Uluslararası yönetim', 'Finans ve lojistik', 'Pazarlama ve moda yönetimi', 'Psikoloji ve yönetim'],
    lead: 'Dortmund merkezli, 7 şehirde kampüsü bulunan, kariyer odaklı eğitimi ve Almanya’daki staj ve iş bağlantılarıyla öne çıkan devlet tarafından tanınan özel işletme üniversitesi.',
    about: [
      'International School of Management (ISM), merkezi Dortmund’da bulunan, devlet tarafından tanınan özel bir işletme üniversitesidir. Münih, Hamburg, Dortmund, Köln, Frankfurt, Stuttgart ve Berlin’deki kampüslerinde İngilizce veya iki dilli (İngilizce/Almanca) lisans ve yüksek lisans programları sunar.',
      'ISM; öğretim kadrosunun kalitesi, dijital öğrenme ve kariyer fırsatları bakımından Almanya’daki işletme odaklı uygulamalı bilimler üniversiteleri arasında üst sıralarda yer alır. Staj ve iş bulma süreçlerinde öğrencilerine aktif destek verir.',
    ],
    highlights: ['7 şehirde kampüs', 'İşletme ve yönetimde uzman', 'Staj ve kariyer desteği', 'İngilizce ve iki dilli programlar'],
    programs: [
      {
        level: 'Lisans',
        fee: 'yıllık 10.560 – 11.160 €',
        items: [
          'B.Sc. International Management (İngilizce veya İngilizce/Almanca)',
          'B.Sc. Finance & Management',
          'B.A. Marketing & Communications Management',
          'B.A. Tourism & Event Management',
          'B.A. Psychology & Management',
          'B.A. Global Brand & Fashion Management',
          'LL.B. Business Law',
        ],
      },
      {
        level: 'Yüksek lisans',
        fee: 'yıllık 12.360 – 12.960 €',
        items: [
          'M.Sc. International Management (İngilizce)',
          'M.Sc. Finance (İngilizce)',
          'M.Sc. International Logistics & Supply Chain Management (İngilizce)',
          'M.Sc. Business Intelligence & Data Science (İngilizce)',
          'M.A. Strategic Marketing Management (İngilizce)',
          'M.A. Luxury, Fashion & Sales Management',
          'M.A. International Business – işletme dışı lisans mezunları için (İngilizce)',
          'MBA General Management (İngilizce)',
          'M.A. Psychology & Management',
          'M.Sc. Organizational Psychology & Human Resources Management',
          'M.Sc. Real Estate Management',
          'M.A. Entrepreneurship',
          'M.A. Digital Marketing',
        ],
      },
    ],
    intakes: 'Güz ve bahar dönemi başlangıçları vardır; son başvuru tarihleri programa göre değişir. Güncel tarihler için bizimle iletişime geçin.',
  },
  {
    slug: 'gisma-business-school',
    name: 'GISMA Business School',
    short: 'GISMA',
    city: 'Berlin ve Potsdam',
    campuses: ['Berlin', 'Potsdam'],
    founded: '1999',
    image: '/img/almanya/berlin-brandenburg.jpg',
    languages: 'İngilizce',
    fromFee: { bachelor: '12.000 €', master: '15.000 €' },
    focus: ['İşletme ve yönetim', 'Veri bilimi ve yapay zekâ', 'Dijital pazarlama', 'Siber güvenlik ve analitik'],
    lead: '1999’da kurulan, uluslararası tanınırlığa sahip işletme okulu; Berlin ve Potsdam kampüslerinde tamamen İngilizce lisans, yüksek lisans ve MBA programları.',
    about: [
      'GISMA Business School, 1999’da Almanya’nın uluslararası öğrenciler için cazip bir işletme eğitimi merkezi olması amacıyla kurulmuş, uluslararası tanınırlığı olan bir işletme okuludur. Programlarını Berlin ve Potsdam kampüslerinde, tamamen İngilizce olarak sunar.',
      'Kuruluşundan bu yana Siemens, Volkswagen, Continental ve TUI gibi büyük şirketlerle iş birlikleri bulunur. Yüksek lisans programları işletme, finans, pazarlama, veri analitiği ve siber güvenlik gibi geniş bir alana yayılır; burs imkânları da sunulmaktadır.',
    ],
    highlights: ['Tamamen İngilizce', 'Berlin ve Potsdam kampüsleri', 'Geniş yüksek lisans seçenekleri', 'Burs imkânları'],
    programs: [
      {
        level: 'Lisans',
        fee: 'yıllık 12.000 €',
        items: [
          'BSc Data Science, AI and Digital Business',
          'BSc International Business Management',
          'BSc (Hons) Digital Business Management',
          'BSc (Hons) Digital Marketing',
          'BA (Hons) Business Management',
          'BA (Hons) Business Management (Marketing)',
        ],
      },
      {
        level: 'Yüksek lisans',
        fee: 'program toplamı 15.000 – 21.450 €',
        items: [
          'MSc Management in International Business (20.350 €)',
          'MSc Innovation, Strategy and Entrepreneurship (21.450 €)',
          'MSc Marketing Management (19.450 €)',
          'MSc International Business Management (16.500 €)',
          'MSc Project Management (16.000 €)',
          'MSc Digital Marketing (16.000 €)',
          'MSc Business Intelligence and Analytics (16.000 €)',
          'MSc Cyber Security and Data Governance (16.000 €)',
          'MSc Corporate Financial Management (15.000 €)',
          'MSc Global Accounting (15.000 €)',
          'MSc International Marketing (15.000 €)',
          'MSc Leadership and Human Resource Management (15.000 €)',
          'MSc Strategic Business Management (15.000 €)',
        ],
      },
      { level: 'MBA', fee: 'yaklaşık 31.450 €', items: ['Master of Business Administration'] },
    ],
    intakes: 'Resmî bir son başvuru tarihi yoktur; derslerin başlamasından en az üç ay önce başvurulması önerilir.',
    scholarships: ['Akademik başarıya dayalı burs imkânları sunulur; güncel burs oranları için bizimle iletişime geçin.'],
  },
  {
    slug: 'cbs-international-business-school',
    name: 'CBS International Business School',
    short: 'CBS',
    city: 'Köln, Mainz, Potsdam',
    campuses: ['Köln', 'Mainz', 'Potsdam'],
    image: '/img/almanya/koln.jpg',
    languages: 'İngilizce ve Almanca',
    fromFee: {},
    focus: ['İşletme ve uluslararası yönetim', 'Lisans, yüksek lisans ve MBA', 'Güçlü kariyer ağı'],
    lead: 'Köln, Mainz ve Potsdam kampüslerinde; 750’den fazla şirket bağlantısı ve yılda 200’ü aşkın kariyer etkinliğiyle iş dünyasına yakın bir işletme okulu.',
    about: [
      'CBS International Business School, Cologne Business School ve European Management School’un birleşimiyle 2020’de bugünkü adını alan, birçok farklı ülkeden öğrencinin okuduğu özel bir işletme okuludur. 1.900’den fazla öğrencisiyle İngilizce ve Almanca Bachelor of Arts, Bachelor of Science, Master of Arts, Master of Science ve MBA programları sunar.',
      'Köln, Mainz ve Potsdam’daki üç kampüsünde yılda 200’den fazla kariyer etkinliği düzenler. 750’yi aşkın uluslararası şirket ve kurum bağlantısı, öğrencilerin staj ve iş bulma süreçlerinde önemli bir avantaj sağlar.',
    ],
    highlights: ['750+ şirket bağlantısı', 'Yılda 200+ kariyer etkinliği', 'Köln, Mainz ve Potsdam kampüsleri', 'Tek seferlik 3.000 € burs imkânı'],
    programs: [
      { level: 'Lisans', note: 'İşletme ve yönetim alanında İngilizce ve Almanca programlar. Güncel bölüm listesi için bizimle iletişime geçin.', items: ['Bachelor of Arts (B.A.)', 'Bachelor of Science (B.Sc.)'] },
      { level: 'Yüksek lisans', note: 'İngilizce ve Almanca programlar.', items: ['Master of Arts (M.A.)', 'Master of Science (M.Sc.)'] },
      { level: 'MBA', items: ['Tam zamanlı MBA'] },
    ],
    intakes: 'Eylül başlangıcı için son başvuru 15 Mayıs, Şubat başlangıcı için 15 Ekim.',
    scholarships: ['İyi akademik performans ve motivasyona sahip lisans, yüksek lisans ve tam zamanlı MBA öğrencilerine bir defaya mahsus 3.000 € burs imkânı.'],
  },
  {
    slug: 'eu-business-school-munih',
    name: 'EU Business School',
    short: 'EU Business School',
    city: 'Münih',
    campuses: ['Münih', 'Barselona', 'Cenevre', 'Montrö'],
    founded: '1973',
    image: '/img/almanya/munih.jpg',
    languages: 'İngilizce',
    fromFee: { bachelor: '13.500 €', master: '14.250 €' },
    focus: ['Uluslararası işletme', 'Dijital pazarlama ve iş analitiği', 'Finans ve bankacılık', 'Spor ve turizm yönetimi'],
    lead: '1973’ten bu yana eğitim veren, Münih kampüsünde İngilizce hazırlık, lisans, yüksek lisans ve MBA programları sunan uluslararası işletme okulu.',
    about: [
      'EU Business School, 1973’te kurulan köklü bir uluslararası işletme okuludur. Almanya’daki Münih kampüsünün yanı sıra Barselona, Cenevre ve Montrö’de de kampüsleri bulunur.',
      'Tüm programlar İngilizcedir. İngilizce seviyesi henüz yeterli olmayan öğrenciler için yaklaşık 13 haftalık hazırlık (Foundation) programı vardır; erken başvurularda kayıt indirimi uygulanır.',
    ],
    highlights: ['Münih kampüsü + 3 Avrupa kampüsü', 'Yılda 4 lisans başlangıcı', '13 haftalık İngilizce hazırlık', 'Erken kayıt indirimi'],
    programs: [
      { level: 'Hazırlık', fee: '5.200 €', note: 'Yaklaşık 13 hafta; Şubat, Haziran ve Eylül başlangıçlı. Online seçenek de vardır.', items: ['Foundation (İngilizce hazırlık) programı'] },
      {
        level: 'Lisans',
        fee: 'yıllık 13.500 €',
        items: ['BSc (Hons) International Business', 'BA (Hons) Business Management', 'BA (Hons) Business Management – Marketing', 'BA (Hons) Business Management – Finance', 'BA (Hons) Business Management – Enterprise', 'BA (Hons) Business Management – Human Resource Management'],
      },
      {
        level: 'Yüksek lisans',
        fee: 'yıllık 14.250 €',
        items: [
          'MSc in International Management (uzmanlık alanları: International Business, International Marketing, Communication & Public Relations, Global Banking & Finance, Leisure & Tourism Management, Entrepreneurship, Digital Business, Sports Management, Human Resources Management, Design Management, Blockchain Management)',
          'Master in Digital Marketing, Transformation & Design Thinking',
          'Master in Business Analytics & Data Science',
        ],
      },
      { level: 'MBA', fee: 'yıllık 20.850 €', items: ['Master of Business Administration'] },
    ],
    intakes: 'Lisans programları Ekim, Şubat, Haziran ve Ağustos; yüksek lisans ve MBA programları Ekim, Ocak ve Mart aylarında başlar.',
  },
  {
    slug: 'berlin-international-university-of-applied-sciences',
    name: 'Berlin International University of Applied Sciences',
    short: 'Berlin International',
    city: 'Berlin',
    campuses: ['Berlin'],
    image: '/img/almanya/berlin-skyline.jpg',
    languages: 'İngilizce',
    fromFee: {},
    focus: ['Mimarlık ve iç mimarlık', 'Grafik tasarım ve görsel iletişim', 'İşletme yönetimi', 'Uluslararası yönetim ve pazarlama'],
    lead: 'Berlin’de, tasarım ve işletme fakülteleriyle kültürlerarası ve disiplinlerarası eğitimi hedefleyen, tamamen İngilizce eğitim veren uluslararası bir uygulamalı bilimler üniversitesi.',
    about: [
      'Berlin International University of Applied Sciences (BI), Almanya’nın başkentinde bulunan, tamamen İngilizce eğitim veren bir uygulamalı bilimler üniversitesidir. Kültürlerarası ve disiplinlerarası öğretim ile uygulamalı araştırmayı merkezine alır; öğrenci topluluğunun büyük bölümü uluslararası öğrencilerden oluşur.',
      'Üniversitede Tasarım Fakültesi ve İşletme Fakültesi bulunur. Her dönem her ders için öğrenci değerlendirmeleri yapılır ve öğretim kalitesi bu geri bildirimlerle sürekli izlenir. İngilizce seviyesi yeterli olmayan öğrenciler, derslere başlamadan önce BI İngilizce Hazırlık Okulu’na katılabilir.',
    ],
    highlights: ['Tamamen İngilizce', 'Tasarım ve İşletme fakülteleri', 'İngilizce hazırlık okulu', 'Lisans öğrencilerine %25 burs imkânı'],
    programs: [
      { level: 'Lisans', items: ['Architecture (Mimarlık)', 'Interior Architecture (İç Mimarlık)', 'Interior Design (İç Tasarım)', 'Graphic Design and Visual Communication', 'Business Administration (İşletme Yönetimi)', 'International Management and Marketing'] },
      { level: 'Yüksek lisans', items: ['Interior Architecture (İç Mimarlık)', 'Business Administration (İşletme Yönetimi)', 'International Management'] },
    ],
    intakes: 'Kış ve yaz dönemi başlangıçları vardır. Başvurular online yapılır; bazı programlarda mülakat veya iş deneyimi istenebilir.',
    admission: [
      'Tüm programlar İngilizce olduğundan Almanca şartı yoktur; İngilizce seviyesinin en az B2 olması beklenir.',
      'Kabul edilen sınavlar: IELTS Academic 6.0 · TOEFL iBT 74 · TOEFL ITP 543 · PTE Academic 59 · Cambridge FCE (B2) · üniversitenin kendi İngilizce yeterlilik sınavı (60/100)',
      'IB Diploması (HL veya SL’de English A ya da B) veya İngilizce eğitim veren bir lisede mezuniyet de kabul edilebilir.',
    ],
    scholarships: [
      'BI Bursu: lisans öğrencilerinin bir akademik yıl boyunca öğrenim ücretinde %25 indirim.',
      'Christian Wulff Bursu: üstün akademik başarı gösteren bir öğrenciye öğrenim süresi sonuna kadar ücretin %50’si.',
      'DAAD Ödülü (1.000 €), STIBET (yaşam masraflarına aylık destek) ve PROMOS (yurt dışında dönem/staj desteği) gibi dış burslar.',
    ],
  },
]

export const germanUniBySlug = Object.fromEntries(germanUnis.map((u) => [u.slug, u])) as Record<string, GermanUni>
