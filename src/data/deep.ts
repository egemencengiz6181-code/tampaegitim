// Öncelikli anahtar kelimeler için program × ülke sayfalarına özel derin içerik.
// Metinlerde [link](/yol) ve **kalın** kullanılabilir (Rich bileşeni).
import type { Faq } from './programs'
import { ukVisa, ukWork, ukSummer, ukUcas2027, ukMaintenance, ukTuitionRange, ukRepresentationPath } from './uk'
import { site } from './site'
import { ukPriceCities } from './schoolPrices'

export type DeepSection = {
  h: string
  p?: string[]
  list?: string[]
  /** Hücrelerde de [link](/yol) kullanılabilir */
  table?: { head: string[]; rows: string[][] }
  /** Vurgulu kutu (ör. temsilcilik) */
  box?: { text: string; link: { label: string; to: string } }
  /** src/data/social.ts > universities içindeki adlar */
  logos?: string[]
}
export type Deep = {
  seoTitle: string
  description: string
  h1?: string
  lead?: string
  /** Hero altındaki özet kutusu (öne çıkan snippet için) */
  summary?: { text: string; facts: { label: string; value: string }[] }
  /** Bu programla etiketli Google yorumları gösterilir (social.ts > reviews.program) */
  reviewProgram?: string
  sections: DeepSection[]
  faqs?: Faq[]
}

const ukLanguageCityFit: Record<string, string> = {
  londra: 'Kariyer, kültür ve şehir hayatı isteyenler',
  brighton: 'Sahil şehri ve sosyal hayat arayanlar',
  oxford: 'Akademik İngilizce ve sınav hazırlığı',
  cambridge: 'Akademik atmosfer, sınav hazırlığı',
  manchester: 'Daha uygun bütçe, canlı öğrenci şehri',
  bournemouth: 'Sakin ortam, aile yanı konaklama',
}

/** Dil okulu şehir tablosu: 4 haftalık en düşük eğitim ücreti schoolPrices.ts'den (liste boşsa bağlantı). */
function ukLanguageCityRows() {
  return ukPriceCities.map((c) => {
    const four = c.schools.map((x) => x.prices[4]).filter((n): n is number => typeof n === 'number')
    const price = four.length ? `${Math.min(...four).toLocaleString('tr-TR')} £’dan` : `[Fiyat listesi](/ingiltere-dil-okullari-fiyat-listesi/${c.slug})`
    return [c.name, price, ukLanguageCityFit[c.slug] ?? '']
  })
}

export const deep: Record<string, Deep> = {
  'yaz:ingiltere': {
    seoTitle: 'İngiltere Yaz Okulu ve Yaz Kampı 2027 | 7–17 Yaş | Tampa',
    description: 'İngiltere yaz okulları ve yaz kampları: 7–17 yaş, kampüs konaklamalı, 7/24 gözetimli programlar. 2027 fiyatları, şehirler, vize ve kayıt takvimi.',
    h1: 'İngiltere Yaz Okulu ve Yaz Kampı 2027',
    lead: '7–17 yaş arası öğrenciler için İngilizce dersleri, aktiviteler ve gezilerle dolu, 7/24 gözetimli yaz programları. Londra’dan Oxford’a, Cambridge’den Brighton’a 2027 yazı için kayıtlar açık.',
    summary: {
      text: `İngiltere yaz okulları, ${ukSummer.ages} arası öğrenciler için ${ukSummer.season.toLocaleLowerCase('tr')} döneminde ${ukSummer.duration} süren, kampüs konaklamalı ve ${ukSummer.supervision}li İngilizce ve aktivite programlarıdır.`,
      facts: [
        { label: 'Yaş', value: ukSummer.ages },
        { label: 'Süre', value: ukSummer.duration },
        { label: 'Dönem', value: ukSummer.season },
        { label: 'Fiyat', value: ukSummer.priceRange || 'Kampüs ve süreye göre, yazılı teklifle' },
        { label: 'Önerilen son kayıt', value: `${ukSummer.registrationDeadline} (vize için)` },
      ],
    },
    reviewProgram: 'Yaz okulu',
    sections: [
      {
        h: 'İngiltere yaz okulu nedir, kimler için uygundur?',
        p: [
          `**İngiltere yaz okulları**, yaz tatilinde ${ukSummer.duration} süren, İngilizce dil eğitimini spor, sanat ve kültürel gezilerle birleştiren yatılı programlardır. Öğrenciler üniversite veya yatılı okul kampüslerinde konaklar, dünyanın dört bir yanından gelen yaşıtlarıyla aynı sınıfları ve aktiviteleri paylaşır.`,
          'Yurt dışında ilk deneyimini yaşayacak ortaokul ve lise öğrencileri, İngilizce konuşma özgüvenini artırmak isteyenler ve ileride yurt dışında lise veya üniversite okumayı düşünenler için İngiltere yaz kampları güvenli ve verimli bir başlangıçtır. Seçim kriterleri için [İngiltere yaz okulu nasıl seçilir?](/blog/ingiltere-yaz-okulu-rehberi) rehberimize bakabilirsiniz.',
        ],
      },
      {
        h: 'Yaz okulu mu, yaz kampı mı? Farkı ne?',
        p: ['Türkiye’de iki ifade çoğu zaman aynı anlamda kullanılır. Okulların program adlarında ise ağırlık farkı vardır: yaz okulunda İngilizce dersi, yaz kampında aktivite ve özel ilgi alanı öne çıkar. Çoğu programda ikisi bir arada bulunur.'],
        table: {
          head: ['', 'Yaz okulu', 'Yaz kampı'],
          rows: [
            ['Odak', 'İngilizce dersi + aktivite', 'Aktivite, spor veya özel ilgi alanı + İngilizce'],
            ['Ders yoğunluğu', 'Genellikle haftada 15–20 ders saati', 'Daha az ders, daha çok aktivite'],
            ['Konaklama', 'Kampüs, bazı programlarda aile yanı', 'Çoğunlukla kampüs'],
            ['Kimler için?', 'İngilizcesini belirgin şekilde ilerletmek isteyenler', 'İlk deneyim, spor veya hobi odaklı öğrenciler'],
          ],
        },
      },
      {
        h: 'Yaşa göre seçim',
        table: {
          head: ['Yaş grubu', 'Önerilen program', 'Öne çıkan özellik'],
          rows: [
            ['7–12 yaş', 'Kırsal veya kapalı kampüs programları', 'Oyun temelli İngilizce, yüksek gözetmen oranı'],
            ['13–15 yaş', 'Kampüs + şehir gezileri', 'Proje çalışmaları, haftada 1–2 tam gün gezi'],
            ['16–17 yaş', 'Londra, Oxford, Cambridge şehir kampüsleri', 'Akademik İngilizce, liderlik, sınav ve üniversite hazırlığı'],
            ['18 yaş ve üzeri', 'Yetişkin dil okulları / Her Şey Dahil Londra paketi', 'Esnek süre, şehir hayatı'],
          ],
        },
        p: ['Küçük yaş grubu için [çocuklar için İngiltere yaz kampı](/blog/cocuklar-icin-ingiltere-yaz-kampi), 13–17 yaş için [gençlere yönelik İngiltere yaz programları](/blog/ingiltere-yaz-kamplari-ve-gencler-icin-firsatlar) yazılarımıza bakın. 18 yaş üstü katılımcılar için [İngiltere dil okulları](/yurtdisi-dil-okullari/ingiltere) ve [Her Şey Dahil Londra paketimiz](/her-sey-dahil-paketler/londra) daha uygundur.'],
      },
      {
        h: 'Şehre göre seçim',
        list: [
          '**Londra:** Müzeler, tarihi yapılar ve şehir enerjisi; 13–17 yaş için uygun. Ayrıntılar: [Londra yaz okulları](/blog/londra-yaz-okullari)',
          '**Oxford ve Cambridge:** Tarihi kolej binalarında konaklama, akademik ağırlıklı programlar. Ayrıntılar: [Oxford ve Cambridge yaz okulları](/blog/oxford-cambridge-yaz-okulu)',
          '**Brighton ve Bournemouth:** Sahil kenarında daha sakin ve sosyal programlar.',
          '**Kırsal kampüsler:** Geniş spor alanları; küçük yaş grupları için korunaklı, kapalı ortam.',
        ],
      },
      {
        h: 'Özel ilgi kampları',
        p: ['Bazı kampüsler İngilizce derslerinin yanında ya da yerine yoğun bir ilgi alanı programı sunar. Bu programlar genellikle ek ücretlidir; yaş sınırı ve içerik kampüse göre değişir.'],
        list: ['**Futbol ve tenis:** Lisanslı antrenörlerle günlük antrenman', '**Binicilik:** Seviyeye göre gruplarla at binme dersleri', '**Kodlama ve robotik:** Proje tabanlı teknoloji atölyeleri', '**Liderlik ve münazara:** Sunum, takım çalışması ve tartışma becerileri', '**Sanat, drama ve müzik:** Gösteriyle biten yaratıcı atölyeler'],
      },
      {
        h: 'İngiltere yaz okulu fiyatları 2027',
        p: [
          'Fiyatlar kampüs, şehir, süre ve özel ilgi programına göre değişir. Standart programlarda genellikle İngilizce dersleri, tam pansiyon kampüs konaklaması, aktivite ve akşam programları, programda belirtilen geziler, 7/24 gözetim ve seviye sertifikası fiyata dahildir. Uçak bileti, vize, sigorta ve harçlık genellikle ayrıca hesaplanır.',
          'Güncel 2027 fiyatlarını çocuğunuzun yaşına ve tercih ettiğiniz süreye göre ücretsiz ön görüşmede yazılı olarak paylaşıyoruz. Fiyatı belirleyen kalemleri [İngiltere yaz okulu fiyatları](/blog/ingiltere-yaz-okulu-fiyatlari) yazımızda anlattık.',
        ],
      },
      {
        h: 'İngiltere yaz okulunda bir gün',
        list: [
          '**08.00 – 09.00:** Kahvaltı',
          '**09.00 – 12.30:** Seviyeye göre İngilizce dersleri (genellikle haftada 15 ders saati)',
          '**12.30 – 13.30:** Öğle yemeği',
          '**13.30 – 17.30:** Spor, sanat, drama, proje atölyeleri veya yarım gün gezi',
          '**18.00 – 19.00:** Akşam yemeği',
          '**19.30 – 21.30:** Disko, yetenek gecesi, quiz, film geceleri',
          '**Hafta sonu:** Londra, Oxford, Cambridge, Bath veya Brighton’a tam gün gezi',
        ],
      },
      {
        h: 'Güvenlik: velilerin en çok sorduğu konu',
        p: ['Önerdiğimiz kampüslerde belirli sayıda öğrenciye bir grup lideri düşer, kampüs girişleri kontrol edilir, gece yoklamaları yapılır ve 7/24 ulaşılabilen acil durum hattı bulunur. Program boyunca okulla ve ailenizle düzenli iletişimde kalıyoruz. Ayrıntılar: [yaz okullarında program güvenliği](/bilgi-bankasi/yaz-okulu-guvenlik).'],
      },
      {
        h: 'İzmir’den refakatli grup',
        // TODO: Tampa'dan teyit: 2027 grup tarihleri, kampüs, refakatçi ve uçuş bilgileri
        p: ['Uygun dönemlerde İzmir’den refakatçi eşliğinde grup uçuşu düzenliyoruz. Refakatçi, öğrencilerle birlikte uçar ve kampüse yerleşmelerine eşlik eder; ilk kez yurt dışına çıkacak çocuklar için velilerin en çok tercih ettiği seçenektir. 2027 grup tarihleri ve kontenjan bilgisi için ön kayıt formunu doldurabilirsiniz. Grup programlarının genel işleyişi: [grup yaz okulu](/bilgi-bankasi/grup-yaz-okulu).'],
      },
      {
        h: 'İngiltere yaz okulu vizesi ve 2027 kayıt takvimi',
        p: [
          `${ukVisa.summer} Tüm belgeler için [İngiltere yaz okulu vize rehberimize](/blog/ingiltere-yaz-okulu-vize) bakın.`,
          'Popüler kampüsler ocak – mart arasında dolar. 2027 yazı için en geç nisan ayında kayıt, mayıs ayında vize başvurusu öneriyoruz: [2027 kayıt takvimi](/blog/ingiltere-yaz-okulu-kayit-takvimi).',
        ],
      },
      {
        h: 'Neden Tampa ile İngiltere yaz okulu?',
        // TODO: Tampa'dan teyit: yaz okuluna gönderilen öğrenci sayısı ve çalışılan kampüsler
        list: [
          `${site.experienceYears} yıllık tecrübe ve ${site.studentCount} öğrenci`,
          'Çocuğunuzun yaşına, İngilizce seviyesine ve karakterine göre kampüs seçimi',
          'Muvafakatname, vize ve uçuş sürecinin tek elden yönetimi',
          'İzmir ve Aydın ofislerinde yüz yüze veli görüşmesi',
          'Program boyunca okul ve veliyle düzenli iletişim',
        ],
      },
    ],
    faqs: [
      { q: 'İngiltere yaz okulları kaç yaşından itibaren uygundur?', a: `İngiltere yaz okulları genellikle ${ukSummer.ages} arası öğrencileri kabul eder. Yaş gruplarına göre ayrı sınıflar, yatakhaneler ve aktivite programları düzenlenir.` },
      { q: 'İngiltere yaz okulu kaç hafta sürer?', a: `Programlar ${ukSummer.duration} arasında seçilebilir. İlk deneyim için 2–3 hafta, İngilizcede belirgin ilerleme için 3–4 hafta öneriyoruz.` },
      { q: 'İngiltere yaz okulu için vize gerekiyor mu?', a: `Evet. ${ukVisa.summer} Dosyayı birlikte hazırlıyoruz.` },
      { q: 'İngiltere yaz okulları ne zaman başlar?', a: 'Programlar genellikle haziran sonundan ağustos sonuna kadar, çoğu kampüste her pazar veya pazartesi yeni girişlerle devam eder.' },
      { q: 'Çocuğum yalnız uçabilir mi?', a: 'Havayollarının refakatsiz çocuk hizmeti kullanılabilir veya uygun dönemlerde refakatli grup uçuşlarımıza katılabilir. Okullar öğrenciyi havalimanında karşılar.' },
    ],
  },

  'dil:ingiltere': {
    seoTitle: 'İngiltere Dil Okulları 2027 | Londra, Brighton, Oxford',
    description: 'İngiltere dil okulları: Londra, Brighton, Oxford ve Manchester’da akredite okullar. Genel İngilizce, IELTS hazırlık, konaklama, vize ve 2027 fiyatları.',
    h1: 'İngiltere Dil Okulları',
    lead: 'İngilizceyi doğduğu yerde, British Council akreditasyonlu okullarda öğrenin. 1 haftadan 1 yıla, haftada 15–30 ders saatiyle Londra’dan Bournemouth’a geniş okul seçenekleri.',
    sections: [
      {
        h: 'Neden İngiltere’de dil okulu?',
        p: ['İngiltere, dil okulları için en köklü akreditasyon sistemine sahip ülkelerden biridir. British Council tarafından denetlenen okullarda öğretmen yeterliliği, ders kalitesi ve öğrenci hizmetleri düzenli olarak kontrol edilir. Ders dışında da İngilizceyi gündelik hayatın her anında kullanırsınız; bu da öğrenme hızını belirgin şekilde artırır.'],
      },
      {
        h: 'Program seçenekleri',
        table: {
          head: ['Program', 'Haftalık ders', 'Kimler için?'],
          rows: [
            ['Genel İngilizce', '15–20 ders saati', 'Konuşma becerisini geliştirmek isteyen herkes'],
            ['Yoğun İngilizce', '25–30 ders saati', 'Kısa sürede hızlı ilerlemek isteyenler'],
            ['IELTS / Cambridge hazırlık', '20–30 ders saati', 'Üniversite veya vize için sınav hedefleyenler'],
            ['İş İngilizcesi', '20–30 ders saati', 'Profesyoneller'],
            ['30 yaş üstü', '15–25 ders saati', 'Yetişkin katılımcılar'],
            ['Akademik yıl', '24–52 hafta', 'Üniversite öncesi uzun dönem hazırlık'],
          ],
        },
      },
      {
        h: 'Şehir karşılaştırması: hangi şehir kime uygun?',
        table: { head: ['Şehir', '4 hafta eğitim', 'Kime uygun?'], rows: ukLanguageCityRows() },
        p: ['4 haftalık fiyatlar okulların yalnızca eğitim ücretidir; konaklama ayrıca hesaplanır. Okul okul karşılaştırma için [İngiltere dil okulları fiyat listesine](/ingiltere-dil-okullari-fiyat-listesi), şehir seçimi için [İngiltere’de dil okulu için hangi şehir?](/blog/ingilterede-dil-okulu-sehir-secimi) yazımıza bakın.'],
      },
      {
        h: 'Konaklama',
        p: ['Aile yanı konaklama dil pratiği için en etkili seçenektir; öğrenci rezidansları ise daha bağımsız bir yaşam sunar. [Her Şey Dahil Londra paketimizde](/her-sey-dahil-paketler/londra) tek kişilik, özel banyolu yurt odası fiyata dahildir.'],
      },
      {
        h: 'Vize',
        p: [`${ukVisa.language} Ayrıntılar: [İngiltere öğrenci vizesi rehberi](/blog/ingiltere-ogrenci-vizesi-rehberi).`],
      },
    ],
    faqs: [
      { q: 'İngiltere dil okulu için en kısa süre ne kadar?', a: 'Programlar 1 haftadan başlar. Her Şey Dahil Londra paketimiz 2 haftadan itibaren planlanabilir.' },
      { q: 'İngiltere’de dil okulunda çalışabilir miyim?', a: `Hayır. ${ukWork.visitor} Çalışarak dil öğrenmek isteyenler İrlanda veya Malta gibi ülkeleri değerlendirebilir.` },
      { q: 'İngiltere dil okulları her hafta mı başlıyor?', a: 'Genel İngilizce programlarında başlangıç genellikle her pazartesidir. Sınav hazırlık programlarının belirli başlangıç tarihleri vardır.' },
    ],
  },

  'lisans:ingiltere': {
    seoTitle: 'İngiltere’de Üniversite: Kayıt, Şartlar ve Ücretler 2027 | Tampa',
    description: 'İngiltere’de üniversite kaydı: UCAS başvurusu, Foundation yılı, IELTS şartları, ücretler ve burslar. İzmir’deki İngiltere Üniversite Temsilciliğimizle.',
    h1: 'İngiltere’de Üniversite Okumak ve Kayıt Süreci',
    lead: 'YKS’siz, 3 yılda tamamlanan lisans programları: Foundation, UCAS başvurusu, IELTS şartları ve Student vizesi. İngiltere üniversite kayıt sürecinizi İzmir’den yönetiyoruz.',
    sections: [
      {
        h: 'İngiltere’de lisans eğitimi',
        p: ['İngiltere’de lisans programları genellikle 3 yıl (İskoçya’da 4 yıl) sürer ve öğrenciler ilk yıldan itibaren seçtikleri alanda uzmanlaşır. Bazı programlar staj yılı (placement year) veya yurt dışında bir yıl seçenekleri sunar. **İngiltere üniversite başvurusu** YKS puanı istemez; lise notlarınız, İngilizce seviyeniz ve kişisel beyanınız değerlendirilir.'],
      },
      {
        h: 'Türk lise mezunu için 3 yol',
        table: {
          head: ['Yol', 'Kimler için?', 'Süre', 'Nasıl işler?'],
          rows: [
            ['Foundation', 'Türk lise diplomasıyla başvuranların çoğu', '1 yıl + 3 yıl lisans', 'Üniversiteye hazırlık yılı; gerekli notu alanlar anlaşmalı üniversitede lisansa geçer.'],
            ['IB / A-Level ile doğrudan', 'IB Diploma veya A-Level sahipleri', '3 yıl', 'UCAS üzerinden doğrudan 1. sınıfa başvuru.'],
            ['International Year One', 'Notları güçlü, foundation’a ihtiyaç duymayan öğrenciler', '1 yıl + 2 yıl', 'Lisansın 1. yılı ek akademik destekle okunur; başarılı öğrenci 2. sınıfa geçer.'],
          ],
        },
        p: ['Bazı üniversiteler yüksek not ortalaması ve AP gibi ek sınavlarla Türk lise diplomasını doğrudan kabul edebilir. Hangi yolun size uygun olduğunu notlarınıza ve hedef bölümünüze göre birlikte belirliyoruz. Foundation hakkında ayrıntılar: [Foundation nedir?](/bilgi-bankasi/foundation-nedir)'],
      },
      {
        h: 'İngiltere üniversite şartları',
        list: [
          '**Lise diploması ve transkript:** Bölüme göre değişen not ortalaması',
          '**İngilizce:** Çoğu lisans programı için IELTS 6.0–6.5; ayrıntılar: [IELTS kaç puan gerekir?](/blog/ielts-kac-puan-gerekir)',
          '**Kişisel beyan (personal statement):** Bölümü neden seçtiğinizi anlatan metin',
          '**Referans:** Okulunuzdan bir akademik referans',
          '**Bazı bölümlerde:** Portfolyo, mülakat veya giriş sınavı',
        ],
      },
      {
        h: 'Başvuru takvimi (2027 girişi)',
        list: [
          `**${ukUcas2027.opens}:** UCAS başvuruları açılır`,
          `**${ukUcas2027.earlyDeadline}:** Oxford, Cambridge, tıp, diş hekimliği ve veterinerlik için son tarih`,
          `**${ukUcas2027.equalConsideration}:** Diğer bölümler için eşit değerlendirme son tarihi`,
          '**Şubat – mayıs:** Üniversitelerden koşullu veya koşulsuz kabul teklifleri',
          '**Haziran – ağustos:** Koşulların tamamlanması, CAS ve Student vizesi başvurusu',
          '**Eylül 2027:** Dersler başlar',
        ],
        p: ['Foundation programlarının çoğu UCAS dışında, doğrudan üniversiteye başvuruyla ve daha esnek tarihlerle alınır. UCAS adımlarının ayrıntısı: [İngiltere’de üniversite okumak](/blog/ingilterede-universite-okumak).'],
      },
      {
        h: 'Ücretler ve yaşam maliyeti',
        p: [
          ukTuitionRange
            ? `Uluslararası öğrenciler için yıllık lisans harcı genellikle ${ukTuitionRange} arasındadır; tıp ve bazı laboratuvar ağırlıklı bölümlerde daha yüksektir.`
            : 'Uluslararası öğrenciler için yıllık harç üniversiteye ve bölüme göre belirgin şekilde değişir; tıp ve laboratuvar ağırlıklı bölümler daha yüksektir. Hedef bölümleriniz için güncel harçları yazılı olarak paylaşıyoruz.',
          `Student vizesinde yaşam gideri için ${ukMaintenance.from} ve sonrasındaki başvurularda Londra’da aylık ${ukMaintenance.london.toLocaleString('tr-TR')} £, Londra dışında aylık ${ukMaintenance.outside.toLocaleString('tr-TR')} £ (en fazla ${ukMaintenance.months} ay) gösterilmesi gerekir. Şehirlere göre bütçe: [İngiltere’de öğrenci yaşam maliyeti](/blog/ingilterede-ogrenci-yasam-maliyeti).`,
          'Üniversitelerin uluslararası öğrencilere sunduğu burslar çoğunlukla harçtan indirim şeklindedir; başarıya göre verilir ve başvuru döneminde açıklanır.',
        ],
      },
      {
        h: 'YKS’siz İngiltere’de üniversite ve denklik',
        p: ['İngiltere üniversiteleri YKS puanı istemez. Türkiye’ye dönüşte diplomanın tanınması için YÖK’ün denklik koşullarını program seçmeden önce birlikte kontrol ediyoruz.'],
      },
      {
        h: 'İngiltere Üniversite Temsilciliği ile neler değişir?',
        box: {
          text: 'İzmir Karşıyaka ofisimizdeki İngiltere Üniversite Temsilciliği, İngiltere üniversitelerine başvuru, bilgilendirme ve kabul süreçlerini yüz yüze yürütür. Program seçiminden CAS ve vizeye kadar tek bir danışmanla ilerlersiniz.',
          link: { label: 'İngiltere Üniversite Temsilciliği', to: ukRepresentationPath },
        },
      },
      {
        h: 'Çözüm ortaklarımızdan bazıları',
        // TODO: Tampa'dan teyit: resmi anlaşmalı İngiltere üniversiteleri listesi (partner sayfaları bu listeye göre açılacak)
        logos: ['Queen Mary University of London', 'Manchester Metropolitan University', 'University of Liverpool'],
      },
    ],
  },

  'yuksek-lisans:ingiltere': {
    seoTitle: 'İngiltere’de Yüksek Lisans: 1 Yıllık Master Programları',
    description: 'İngiltere’de yüksek lisans: 12 ay süren master programları, kabul şartları, IELTS, motivasyon mektubu, Student vizesi ve 18 aylık Graduate Route.',
    h1: 'İngiltere’de Yüksek Lisans',
    sections: [
      { h: '12 ayda master', p: ['İngiltere’de ders ağırlıklı (taught) yüksek lisans programlarının çoğu 12 ay sürer. Bu, kariyerine hızla dönmek isteyenler için hem zaman hem maliyet avantajı sağlar. Ayrıntılar: [İngiltere’de 1 yıllık yüksek lisans](/blog/ingilterede-yuksek-lisans).'] },
      { h: 'Kabul şartları', list: ['Lisans diploması ve not ortalaması', 'IELTS (genellikle 6.5–7.0)', 'Programa özel motivasyon mektubu', '2 referans mektubu', 'CV, bazı programlarda portfolyo'] },
      { h: 'Mezuniyet sonrası', p: ['Mezunlar Graduate Route ile İngiltere’de iş deneyimi kazanabilir. Güncel koşullar: [mezuniyet sonrası çalışma](/blog/ingiltere-mezuniyet-sonrasi-calisma).'] },
    ],
  },

  'lise:ingiltere': {
    seoTitle: 'İngiltere’de Lise Eğitimi: Yatılı Okullar ve A-Level',
    description: 'İngiltere’de lise eğitimi: yatılı okullar, GCSE ve A-Level programları, giriş sınavları, vasi zorunluluğu, öğrenci vizesi ve üniversiteye geçiş.',
    h1: 'İngiltere’de Lise Eğitimi',
    sections: [
      { h: 'GCSE ve A-Level', p: ['14–16 yaşta GCSE, 16–18 yaşta A-Level programı takip edilir. A-Level sonuçlarıyla İngiltere’deki üniversitelere doğrudan başvurulabilir. Ayrıntılar: [İngiltere’de lise eğitimi](/blog/ingilterede-lise-egitimi).'] },
      { h: 'Yatılı okul deneyimi', p: ['İngiliz yatılı okulları disiplinli akademik programları ve geniş spor, sanat ve kulüp imkânlarıyla bilinir. [Boarding school nedir?](/bilgi-bankasi/boarding-school-nedir)'] },
      { h: 'Yaz okuluyla başlamak', p: ['Yatılı okul öncesinde kampüs hayatını tanımak için [İngiltere yaz okulları](/yurtdisi-yaz-okullari/ingiltere) iyi bir başlangıçtır.'] },
    ],
  },
}

/** Ülke sayfaları için ek içerik */
export const countryDeep: Record<string, Deep> = {
  ingiltere: {
    seoTitle: 'İngiltere’de Yurt Dışı Eğitim: Dil Okulu, Yaz Okulu, Master',
    description: 'İngiltere’de yurt dışı eğitim: dil okulları, 7–17 yaş yaz okulları, yatılı liseler, üniversite ve yüksek lisans. Vize, şehirler, maliyet ve başvuru.',
    h1: 'İngiltere’de Yurt Dışı Eğitim',
    sections: [
      {
        h: 'İngiltere’de hangi program size uygun?',
        list: [
          '**7–17 yaş:** [İngiltere yaz okulları](/yurtdisi-yaz-okullari/ingiltere): dil, aktivite ve gezilerle yaz programları',
          '**14–18 yaş:** [İngiltere’de lise](/yurtdisi-lise-egitimi/ingiltere): yatılı okullar ve A-Level',
          '**Lise mezunları:** [İngiltere’de üniversite](/lisans-programlari/ingiltere): Foundation ve UCAS',
          '**Üniversite mezunları:** [İngiltere’de yüksek lisans](/yurtdisi-yuksek-lisans/ingiltere): 12 aylık master',
          '**Her yaş:** [İngiltere dil okulları](/yurtdisi-dil-okullari/ingiltere) ve [Her Şey Dahil Londra paketi](/her-sey-dahil-paketler/londra)',
        ],
      },
      {
        h: 'İngiltere yurt dışı eğitim rehberleri',
        p: ['Karar vermeden önce okumanızı önerdiğimiz yazılar: [İngiltere’de yurt dışı eğitim rehberi](/blog/ingilterede-yurt-disi-egitim-rehberi), [İngiltere yaz okulu rehberi 2027](/blog/ingiltere-yaz-okulu-rehberi), [İngiltere öğrenci vizesi](/blog/ingiltere-ogrenci-vizesi-rehberi) ve [İngiltere’de öğrenci olarak yaşamak](/blog/ingilterede-ogrenci-yasam-maliyeti).'],
      },
    ],
  },
  'lisans:japonya': {
    seoTitle: 'Japonya’da Üniversite: Japonca Hazırlık ve Lisans Başvurusu',
    description: 'Japonya’da üniversite okumak: Japonca dil okulunda hazırlık, İngilizce lisans programları, EJU ve JLPT, öğrenci vizesi ve başvuru süreci.',
    lead: 'Japonca hazırlık programından lisans başvurusuna kadar Japonya’da üniversite yolculuğunuzu birlikte planlıyoruz.',
    sections: [
      {
        h: 'Japonya’da üniversiteye giden iki yol',
        list: [
          '**Japonca hazırlık + Japonca lisans:** Japonya’da bir dil okulunda 1–2 yıl Japonca eğitimi, ardından Japonca eğitim veren bölümlere başvuru',
          '**İngilizce lisans programları:** Seçili üniversitelerin İngilizce yürütülen bölümlerine IELTS/TOEFL ile doğrudan başvuru',
        ],
      },
      {
        h: 'Başvuruda neler istenir?',
        list: ['Lise diploması ve transkript', 'Dil yeterliliği: JLPT (Japonca bölümler) veya IELTS/TOEFL (İngilizce bölümler)', 'Birçok üniversitede EJU (Examination for Japanese University Admission) sonuçları', 'Motivasyon mektubu ve gerekirse mülakat'],
      },
    ],
  },
  'lisans:kore': {
    seoTitle: 'Güney Kore’de Üniversite: Korece Hazırlık, TOPIK ve Burslar',
    description: 'Güney Kore’de üniversite okumak: üniversite dil enstitülerinde Korece hazırlık, TOPIK şartı, İngilizce programlar, GKS bursu ve D-2 öğrenci vizesi.',
    lead: 'Üniversite dil enstitüsünde Korece hazırlıktan lisans başvurusuna ve D-2 öğrenci vizesine kadar Güney Kore’de üniversite sürecinizi yönetiyoruz.',
    sections: [
      {
        h: 'Güney Kore’de lisans eğitimi nasıl işler?',
        list: [
          '**Korece hazırlık:** Üniversitelerin dil enstitülerinde dönemlik yoğun Korece programları (D-4 vizesi)',
          '**Korece lisans:** Çoğu bölüm için TOPIK 3 veya üzeri seviye',
          '**İngilizce lisans:** Seçili bölümlerde IELTS/TOEFL ile başvuru',
          '**Burslar:** GKS (Kore Hükümeti Bursu) ve üniversitelerin başarı bursları',
        ],
      },
    ],
  },
  'lisans:dubai': {
    seoTitle: 'Dubai’de Üniversite: İngilizce Lisans ve Uluslararası Kampüsler',
    description: 'Dubai’de üniversite okumak: İngiliz, Amerikan ve Avustralya üniversitelerinin Dubai kampüsleri, İngilizce lisans programları, foundation ve öğrenci oturum izni.',
    lead: 'Dünyaca tanınan üniversitelerin Dubai kampüslerinde İngilizce lisans eğitimi; Türkiye’ye 4,5 saat uzaklıkta, güvenli ve uluslararası bir şehirde.',
    sections: [
      {
        h: 'Dubai’de lisans eğitiminin öne çıkan yanları',
        list: [
          'İngiliz, Amerikan ve Avustralya üniversitelerinin Dubai kampüslerinde, çoğu programda ana kampüsle aynı diploma',
          'Tüm eğitim İngilizce; yeterli seviyesi olmayan öğrenciler için foundation (hazırlık) programları',
          'İşletme, mühendislik, bilgisayar bilimleri, medya ve turizm işletmeciliği gibi popüler bölümler',
          'Okul sponsorluğunda öğrenci oturum izni',
        ],
      },
    ],
  },
  'lisans:arjantin': {
    seoTitle: 'Arjantin’de Üniversite: İspanyolca Hazırlık ve Lisans Eğitimi',
    description: 'Arjantin’de üniversite okumak: Buenos Aires ve Córdoba’da İspanyolca hazırlık programları, lisans başvurusu, denklik ve öğrenci oturum izni.',
    lead: 'İspanyolca hazırlık programıyla başlayıp Arjantin’de üniversite eğitimine geçiş; okul seçiminden kayda ve oturum iznine kadar yanınızdayız.',
    sections: [
      {
        h: 'Hazırlıktan üniversiteye adım adım',
        list: [
          '**İspanyolca hazırlık:** Üniversitede derslere katılabilecek akademik İspanyolca seviyesine ulaşmak için yoğun dil programı',
          '**Üniversite başvurusu:** Lise diploması denkliği, İspanyolca yeterliliği ve okulun istediği belgelerle başvuru',
          '**Oturum izni:** Kabul belgesiyle öğrenci oturum izni (residencia) başvurusu',
        ],
      },
    ],
  },
  'dil:arjantin': {
    seoTitle: 'Arjantin’de İspanyolca Dil Okulları ve Üniversite Hazırlık',
    description: 'Arjantin’de İspanyolca eğitimi: Buenos Aires’te kısa süreli dil kursları ve üniversiteye hazırlık programları, konaklama ve vize bilgileri.',
    lead: 'Buenos Aires’te İspanyolca: kısa süreli dil kurslarından üniversiteye hazırlık programlarına kadar.',
    sections: [],
  },
}
