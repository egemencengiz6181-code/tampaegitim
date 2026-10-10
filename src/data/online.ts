// Online eğitim programları: Kanada online lise diploması (Keystone School iş birliği) ve
// İngiltere online lisans / yüksek lisans (Global Education Career Centre, GECC iş birliği).
// İçerikler kurumların kendi tanıtımlarından derlenmiştir. Broşür PDF'leri public/docs/ altına eklenince `brochure` doldurulur.
import type { Faq } from './programs'

export type OnlineCourse = { name: string; level: string; duration: string; modules: string; price?: string; text: string; careers?: string[] }

export type OnlineProgram = {
  slug: string
  name: string
  short: string
  code: string
  country: string
  partner: { name: string; url: string; note: string }
  image: string
  kicker: string
  title: string
  lead: string
  seoTitle: string
  description: string
  stats: { value: string; label: string }[]
  intro: string[]
  audience: string[]
  how: { title: string; text: string }[]
  courses?: OnlineCourse[]
  highlights: { title: string; text: string }[]
  requirements: string[]
  faqs: Faq[]
  brochure?: { file: string; label: string }
}

export const onlinePrograms: OnlineProgram[] = [
  {
    slug: 'kanada-online-lise-diplomasi',
    name: 'Kanada Online Lise Diploması (OSSD)',
    short: 'Kanada online lise',
    code: 'YYZ',
    country: 'Kanada',
    partner: { name: 'Keystone School', url: 'https://keystoneschools.ca/kanadalisediplomasi', note: 'Toronto, Ontario' },
    image: '/img/dest/kanada.jpg',
    kicker: 'Online lise · Ontario Eğitim Bakanlığı diploması',
    title: 'Kanada Online Lise Diploması (OSSD)',
    lead: 'Türkiye’den ayrılmadan, online olarak Kanada’nın Ontario Lise Diplomasını (OSSD) alın; Kanada, ABD, İngiltere ve Avrupa’daki üniversitelere not ortalamanızla başvurun.',
    seoTitle: 'Kanada Online Lise Diploması (OSSD): Evden Kanada Lise Diploması',
    description: 'Keystone School iş birliğiyle Kanada Ontario Lise Diploması (OSSD) online programı: 14–20 yaş, 8–12 ders ile mezuniyet, Toronto kampüsüne geçiş imkânı ve dünya genelinde üniversite başvurusu.',
    stats: [
      { value: '8–12', label: 'Denklik sonrası tamamlanan ders sayısı' },
      { value: '35+', label: 'Ders seçeneği' },
      { value: '250+', label: 'Online program mezunu' },
      { value: '4', label: 'Mezun başına ortalama üniversite kabulü' },
    ],
    intro: [
      'Keystone School, Toronto’nun merkezinde, University of Toronto’nun hemen yanında kampüsü bulunan ve Ontario Eğitim Bakanlığı’nca yetkilendirilmiş bir okuldur. Online programın sonunda verilen diploma, kampüste okuyan öğrencilerin aldığı Ontario Secondary School Diploma (OSSD) ile aynıdır.',
      'Öğrenciler Türkiye’deki okullarına devam ederken ya da lise diplomalarını yeni tamamlamışken programa katılabilir. Daha önce aldıkları derslerin denkliği yapıldığı için çoğu öğrenci yalnızca 8 ila 12 ders tamamlayarak mezun olur.',
      'Proje bazlı, sınav stresinden uzak bir eğitim modeli uygulanır. 12. sınıf öğrencileri Ekim–Kasım aylarında üniversite başvurularını tamamlar ve Aralık ayından itibaren erken kabul teklifleri almaya başlar.',
    ],
    audience: [
      '14–20 yaş arasında, 9, 10, 11 veya 12. sınıfa devam eden öğrenciler',
      'Lise diplomasını kendi ülkesinde yeni tamamlamış öğrenciler',
      'Yurt dışında üniversite okumayı hedefleyen ve merkezi sınava bağlı kalmak istemeyenler',
      'Türkiye’deki okuluna devam ederken ikinci bir diploma almak isteyenler',
    ],
    how: [
      { title: 'Ders muafiyetleri', text: 'Öğrencinin daha önce tamamladığı derslerin denkliği yapılır; aynı dersleri tekrar almadan programa devam edilir ve süre kısalır.' },
      { title: '8–12 ders ile mezuniyet', text: 'Denklik durumuna göre yalnızca 8 ila 12 ders tamamlanarak OSSD alınabilir; bu, üniversite başvurusuna daha hızlı başlamayı sağlar.' },
      { title: 'Esnek, online model', text: 'Dersler Kanadalı sertifikalı öğretmenlerle online yürür; öğrenci kendi hızında ilerler ve programı Türkiye’den tamamlar.' },
      { title: 'Toronto kampüsüne geçiş', text: 'Dileyen online öğrenciler eğitimlerine Toronto kampüsünde devam edebilir ve kabulde öncelik hakkı kazanır.' },
    ],
    highlights: [
      { title: 'Uluslararası geçerli diploma', text: 'Ontario Eğitim Bakanlığı tarafından verilen diploma, online veya kampüste okumanızdan bağımsız olarak aynıdır.' },
      { title: 'Not ortalamasıyla başvuru', text: 'OSSD ile Kanada, ABD, İngiltere ve Avrupa’daki üniversitelere merkezi bir sınava girmeden, akademik başarınızla başvurabilirsiniz.' },
      { title: 'Erken kabul', text: '12. sınıf öğrencileri başvurularını sonbaharda tamamlar, Aralık’tan itibaren kabul almaya başlar.' },
      { title: 'Tampa desteği', text: 'Kayıt, ders denkliği, üniversite seçimi ve başvuru sürecini Türkiye’den birlikte planlıyoruz.' },
    ],
    requirements: ['Güncel ve önceki yıllara ait transkriptler (denklik için)', 'Pasaport veya kimlik fotokopisi', 'İngilizce seviyesini gösteren belge (varsa)', 'Başvuru formu'],
    faqs: [
      { q: 'Online alınan diploma ile kampüste alınan diploma aynı mı?', a: 'Evet. Keystone School’un Ontario Eğitim Bakanlığı tarafından verilen diploması, öğrencinin online ya da Toronto kampüsünde okumasından bağımsız olarak aynıdır.' },
      { q: 'Türkiye’deki okuluma devam edebilir miyim?', a: 'Evet. Öğrencilerin büyük bölümü kendi okullarına devam ederken OSSD programını online olarak tamamlar.' },
      { q: 'Kaç ders almam gerekiyor?', a: 'Daha önce tamamladığınız derslerin denkliğine göre genellikle 8 ila 12 ders yeterli olur. Kesin sayı, transkriptleriniz incelendikten sonra belirlenir.' },
      { q: 'Hangi ülkelerdeki üniversitelere başvurabilirim?', a: 'OSSD ile Kanada, ABD, İngiltere ve Avrupa başta olmak üzere dünya genelindeki üniversitelere başvurabilirsiniz. Üniversiteye göre ek dil yeterliliği istenebilir.' },
    ],
  },
  {
    slug: 'ingiltere-online-lisans-yuksek-lisans',
    name: 'İngiltere Online Lisans ve Yüksek Lisans',
    short: 'İngiltere online lisans / MBA',
    code: 'LHR',
    country: 'İngiltere',
    partner: { name: 'Global Education Career Centre (GECC)', url: 'https://geccentre.co.uk/', note: 'Londra' },
    image: '/img/dest/ingiltere.jpg',
    kicker: '%100 online · İngiliz üniversite diploması',
    title: 'İngiltere Online Lisans ve Yüksek Lisans',
    lead: 'Vize ve yaşam masrafı olmadan, işinizi bırakmadan İngiliz üniversite diplomasına uzanan %100 online Foundation, lisans, lisans tamamlama (top-up) ve MBA programları.',
    seoTitle: 'İngiltere Online Lisans ve Online MBA: %100 Online İngiliz Diploması',
    description: 'GECC iş birliğiyle İngiltere online lisans (BA Hons Business Management), lisans tamamlama (top-up), foundation ve online MBA programları: süre, modüller, ücretler, başvuru şartları.',
    stats: [
      { value: '%100', label: 'Online eğitim' },
      { value: '12', label: 'Yıl içinde başlangıç dönemi' },
      { value: 'Ayda 2', label: 'Hafta sonu canlı ders' },
      { value: 'Sınavsız', label: 'Ödev bazlı değerlendirme' },
    ],
    intro: [
      'Global Education Career Centre (GECC), Londra merkezli, 10 yılı aşkın süredir lisans, yüksek lisans ve diploma programlarını %100 online sunan bir eğitim kurumudur. Programlar, Ofqual tarafından tanınan İngiliz yeterlilik kuruluşu Qualifi üzerinden İngiliz üniversite partnerlerine bağlanır.',
      'Dersler Google Classroom üzerinden yürür; canlı derslerin yanında kayıtlı videolar da bulunur. Canlı dersler ayda iki kez Cuma–Pazar günleri yapılır, böylece çalışan profesyoneller işlerini bırakmadan eğitim alabilir.',
      'Değerlendirme sınavla değil, ödevlerle yapılır. Yurt dışında okumanın aksine vize, yaşam masrafı veya finansal yeterlilik belgesi gerekmez.',
    ],
    audience: [
      'İşini bırakmadan İngiliz lisans veya MBA diploması almak isteyen profesyoneller',
      'Ön lisans (HND / Level 4–5) mezunu olup lisansını tamamlamak isteyenler',
      'Yöneticilik sorumluluğu olan ama formal işletme eğitimi almamış ekip liderleri',
      'Yurt dışı eğitim maliyetine alternatif arayanlar',
    ],
    how: [
      { title: 'Canlı + kayıtlı dersler', text: 'Ayda iki hafta sonu, günde yaklaşık 3 saatlik canlı dersler; Cuma oturumları ağırlıklı olarak kayıtlı videolarla izlenir.' },
      { title: 'Ödev bazlı değerlendirme', text: 'Sınav yoktur; her modül ödevle tamamlanır ve geri bildirimle ilerlenir. Geçme notu 40/100’dür.' },
      { title: 'Yılda 12 başlangıç', text: 'Programlar yıl boyunca her ay başlar; uygun dönemi birlikte belirleriz.' },
      { title: 'Taksitli ödeme ve burs', text: 'Faizsiz aylık, üç aylık ve altı aylık ödeme planları ile burs seçenekleri bulunur.' },
    ],
    courses: [
      {
        name: 'Integrated Diploma in Business and Management',
        level: 'Foundation',
        duration: '6 ay',
        modules: '12 modül',
        price: '£6.450',
        text: 'Yöneticilik sorumluluğu olan ama formal eğitimi olmayan çalışanlar ve ekip liderleri için iş ve yönetim alanında uygulamalı bir hazırlık programı.',
        careers: ['Operasyon müdürü', 'Ofis yöneticisi', 'Proje / program yöneticisi', 'İş analisti'],
      },
      {
        name: 'BA (Hons) Business Management',
        level: 'Lisans',
        duration: '24 ay',
        modules: '12 modül',
        price: '£18.450',
        text: 'İnovasyon, yaratıcılık ve liderlik odaklı; işletme ve yönetimi ulusal ve küresel ölçekte ele alan online lisans programı.',
        careers: ['Yönetim danışmanı', 'Pazarlama / marka yöneticisi', 'İnsan kaynakları danışmanı', 'Uluslararası iş geliştirme', 'Finans danışmanı'],
      },
      {
        name: 'BA (Hons) Business Management Top-up',
        level: 'Lisans tamamlama',
        duration: '18 ay',
        modules: '6 modül',
        price: '£16.450',
        text: 'HND, Level 4–5 veya ön lisans mezunlarının lisans derecesini tamamlaması için tasarlandı. Mezuniyette, 3 yıllık tam zamanlı lisans mezunlarıyla aynı derece alınır.',
      },
      {
        name: 'MBA',
        level: 'Yüksek lisans',
        duration: '12 ay',
        modules: '8 modül + bitirme projesi',
        price: '£11.450',
        text: 'Gerçek iş problemleri üzerinden stratejik düşünmeyi geliştiren, iki aşamalı yoğun online MBA. Kariyerinde bir üst seviyeye geçmek isteyen yönetici ve profesyoneller için.',
        careers: ['Üst düzey yönetici', 'Girişimci', 'Danışman', 'Finans, pazarlama ve satışta yönetici rolleri'],
      },
    ],
    highlights: [
      { title: 'İngiliz diploması', text: 'Programlar, Ofqual tanınırlığındaki Qualifi üzerinden GECC’nin İngiliz üniversite partnerlerinden diplomaya bağlanır.' },
      { title: 'Vize ve yaşam masrafı yok', text: 'Eğitimin tamamı online olduğu için vize, konaklama ve finansal yeterlilik süreci gerekmez.' },
      { title: 'Çalışırken okuyun', text: 'Hafta sonu canlı dersler ve kayıtlı içeriklerle iş hayatınıza ara vermeden eğitim alın.' },
      { title: 'Uygun maliyet', text: 'Yurt dışında yüz yüze eğitimin çok altında bir maliyetle, taksitli ödeme imkânıyla.' },
    ],
    requirements: ['Pasaport fotokopisi', 'Özgeçmiş (CV)', 'Önceki eğitime ait diploma ve transkript', 'Niyet mektubu (Statement of Purpose)', 'Başvuru formu'],
    faqs: [
      { q: 'Hangi üniversitenin diplomasını alırım?', a: 'Programlar Qualifi üzerinden GECC’nin İngiliz üniversite partnerlerine bağlanır. Diplomanın alınacağı üniversite programa ve döneme göre belirlenir; başvuru öncesinde güncel seçenekleri sizinle paylaşıyoruz.' },
      { q: 'Dersler canlı mı?', a: 'Evet, canlı dersler ayda iki kez hafta sonu yapılır. Ayrıca kayıtlı videolar ve ders materyalleri istediğiniz zaman erişilebilir.' },
      { q: 'Sınav var mı?', a: 'Hayır. Değerlendirme ödevlerle yapılır; geçme notu 40/100’dür.' },
      { q: 'Ücret taksitlendirilebilir mi?', a: 'Evet. Faizsiz aylık, üç aylık ve altı aylık ödeme planları ile burs seçenekleri bulunur. Güncel ücret ve kampanyalar için bize ulaşın.' },
      { q: 'Vize gerekiyor mu?', a: 'Hayır. Eğitim tamamen online olduğu için vize veya yurt dışında yaşam masrafı gerekmez.' },
    ],
  },
]

export const onlineBySlug = Object.fromEntries(onlinePrograms.map((p) => [p.slug, p])) as Record<string, OnlineProgram>
