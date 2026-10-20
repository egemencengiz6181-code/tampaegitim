// Öncelikli anahtar kelimeler için program × ülke sayfalarına özel derin içerik.
// Metinlerde [link](/yol) ve **kalın** kullanılabilir (Rich bileşeni).
import type { Faq } from './programs'
import { ukVisa, ukWork, ukSummer } from './uk'

export type DeepSection = { h: string; p?: string[]; list?: string[]; table?: { head: string[]; rows: string[][] } }
export type Deep = {
  seoTitle: string
  description: string
  h1?: string
  lead?: string
  sections: DeepSection[]
  faqs?: Faq[]
}

export const deep: Record<string, Deep> = {
  'yaz:ingiltere': {
    seoTitle: 'İngiltere Yaz Okulu 2027: 7–17 Yaş Yaz Okulları ve Kampları',
    description: 'İngiltere yaz okulları ve yaz kampları: 7–17 yaş, kampüs konaklamalı, 7/24 gözetimli programlar. 2027 fiyatları, şehirler, vize ve kayıt takvimi.',
    h1: 'İngiltere Yaz Okulları ve Yaz Kampları',
    lead: '7–17 yaş arası öğrenciler için İngilizce dersleri, aktiviteler ve gezilerle dolu, 7/24 gözetimli yaz programları. Londra’dan Oxford’a, Cambridge’den Brighton’a 2027 yazı için kayıtlar açık.',
    sections: [
      {
        h: 'İngiltere yaz okulu nedir, kimler için uygundur?',
        p: [
          `**İngiltere yaz okulları**, yaz tatilinde ${ukSummer.duration} süren, İngilizce dil eğitimini spor, sanat ve kültürel gezilerle birleştiren yatılı programlardır. Öğrenciler üniversite veya yatılı okul kampüslerinde konaklar, dünyanın dört bir yanından gelen yaşıtlarıyla aynı sınıfları ve aktiviteleri paylaşır.`,
          'Yurt dışında ilk deneyimini yaşayacak ortaokul ve lise öğrencileri, İngilizce konuşma özgüvenini artırmak isteyenler ve ileride yurt dışında lise veya üniversite okumayı düşünenler için İngiltere yaz kampları en güvenli ve verimli başlangıçtır. Ayrıntılı bilgi için [İngiltere yaz okulu rehberimizi](/blog/ingiltere-yaz-okulu-rehberi) okuyabilirsiniz.',
        ],
      },
      {
        h: 'Yaş gruplarına göre İngiltere yaz programları',
        table: {
          head: ['Yaş grubu', 'Önerilen program', 'Öne çıkan özellik'],
          rows: [
            ['7–11 yaş', 'Kırsal veya kapalı kampüs programları', 'Oyun temelli İngilizce, yüksek gözetmen oranı'],
            ['12–14 yaş', 'Kampüs + şehir gezileri', 'Proje çalışmaları, haftada 2 tam gün gezi'],
            ['15–17 yaş', 'Londra, Oxford, Cambridge şehir kampüsleri', 'Akademik İngilizce, liderlik, sınav hazırlık'],
            ['18 yaş ve üzeri', 'Yetişkin dil okulları / Her Şey Dahil Londra paketi', 'Esnek süre, şehir hayatı'],
          ],
        },
        p: ['18 yaş üstü katılımcılar için [İngiltere dil okulları](/yurtdisi-dil-okullari/ingiltere) ve [Her Şey Dahil Londra paketimiz](/her-sey-dahil-paketler/londra) daha uygun seçeneklerdir.'],
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
        h: 'İngiltere yaz okulları için popüler şehirler',
        list: [
          '**Londra:** Müzeler, tarihi yapılar ve şehir enerjisi; 13–17 yaş için ideal. [Londra yaz okulları](/blog/londra-yaz-okullari)',
          '**Oxford ve Cambridge:** Akademik atmosfer, tarihi kolej binaları. [Oxford ve Cambridge yaz okulları](/blog/oxford-cambridge-yaz-okulu)',
          '**Brighton ve Bournemouth:** Sahil kenarında daha sakin ve sosyal programlar.',
          '**Canterbury ve kırsal kampüsler:** Geniş spor alanları, küçük yaş grupları için korunaklı ortam.',
        ],
      },
      {
        h: 'Fiyata neler dahil?',
        p: ['İngiltere yaz okulu fiyatları kampüs, şehir, süre ve özel ilgi programına göre değişir. Standart programlarda genellikle İngilizce dersleri, tam pansiyon kampüs konaklaması, aktivite ve akşam programları, programda belirtilen geziler, 7/24 gözetim ve seviye sertifikası fiyata dahildir. Uçak bileti, vize, sigorta ve harçlık genellikle ayrıca hesaplanır. Fiyatı etkileyen unsurları [İngiltere yaz okulu fiyatları](/blog/ingiltere-yaz-okulu-fiyatlari) yazımızda detaylandırdık.'],
      },
      {
        h: 'Güvenlik: velilerin en çok sorduğu konu',
        p: ['Önerdiğimiz kampüslerde belirli sayıda öğrenciye bir grup lideri düşer, kampüs girişleri kontrol edilir, gece yoklamaları yapılır ve 7/24 ulaşılabilen acil durum hattı bulunur. Program boyunca okulla ve ailenizle düzenli iletişimde kalıyoruz. Ayrıntılar: [yaz okullarında program güvenliği](/bilgi-bankasi/yaz-okulu-guvenlik), [çocuklar için İngiltere yaz kampı](/blog/cocuklar-icin-ingiltere-yaz-kampi).'],
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
        list: [
          '15 yıllık tecrübe ve 5.000’den fazla öğrenci',
          'İngiltere Üniversite Temsilciliği ile okullarla doğrudan iletişim',
          'Çocuğunuzun yaşına ve karakterine göre kampüs seçimi',
          'Muvafakatname, vize ve uçuş sürecinin tek elden yönetimi',
          'Program boyunca veliyle düzenli iletişim',
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
        h: 'Hangi şehir?',
        p: ['Londra kariyer ve kültür, Brighton sahil ve sosyal hayat, Oxford ve Cambridge akademik atmosfer, Manchester ve Liverpool uygun yaşam maliyeti, Bournemouth ise sakinlik ve aile yanı konaklama ile öne çıkar. Ayrıntılı karşılaştırma: [İngiltere’de dil okulu için hangi şehir?](/blog/ingilterede-dil-okulu-sehir-secimi)'],
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
    seoTitle: 'İngiltere’de Üniversite Okumak: UCAS, Foundation, Şartlar',
    description: 'İngiltere’de üniversite kaydı: UCAS başvurusu, Foundation yılı, IELTS şartları, ücretler ve burslar. İzmir’deki İngiltere Üniversite Temsilciliğimizle.',
    h1: 'İngiltere’de Üniversite Okumak',
    sections: [
      { h: 'İngiltere’de lisans eğitimi', p: ['İngiltere’de lisans programları genellikle 3 yıl sürer ve öğrenciler ilk yıldan itibaren seçtikleri alanda uzmanlaşır. Bazı programlar staj yılı (placement year) veya yurt dışında bir yıl seçenekleri sunar.'] },
      { h: 'UCAS ile başvuru', p: ['Başvurular UCAS üzerinden yapılır; tek başvuruyla en fazla 5 program seçilebilir. Kişisel beyan (personal statement), referans ve akademik notlar değerlendirmenin temelidir. Ayrıntılar: [İngiltere’de üniversite okumak](/blog/ingilterede-universite-okumak).'] },
      { h: 'Foundation yılı', p: ['Türkiye’de lise mezunu öğrenciler birçok üniversiteye doğrudan değil, bir yıllık [Foundation programını](/bilgi-bankasi/foundation-nedir) tamamladıktan sonra kabul alır. IB veya A-Level ile doğrudan başvuru mümkündür.'] },
      { h: 'Dil şartları', p: ['Çoğu lisans programı IELTS 6.0–6.5 ister. Ayrıntılar: [IELTS kaç puan gerekir?](/blog/ielts-kac-puan-gerekir)'] },
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
