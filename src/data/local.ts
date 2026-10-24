import type { Faq } from './programs'

// Yerel (şehir) sayfaları: İzmir merkez ofis ve Aydın ofisi.
// Ofis adres/telefon bilgileri src/data/site.ts → offices dizisinden gelir; burada yalnızca içerik var.
// Vize merkezi ve sınav merkezi bilgileri 2026 Ekim itibarıyla resmi/kurumsal kaynaklardan derlendi; değişebilir.

export type LocalPage = {
  slug: string
  office: string
  city: string
  seoTitle: string
  description: string
  lead: string
  intro: string[]
  services: { title: string; text: string }[]
  visaCenters: { country: string; text: string }[]
  exams: string[]
  process: { title: string; text: string }[]
  flights: string
  nearby: string[]
  faqs: Faq[]
}

export const localPages: LocalPage[] = [
  {
    slug: 'izmir-yurt-disi-egitim',
    office: 'izmir',
    city: 'İzmir',
    seoTitle: 'İzmir Yurt Dışı Eğitim Danışmanlığı | Ofis ve Randevu',
    description:
      'İzmir’de yurt dışı eğitim danışmanlığı: Karşıyaka merkez ofiste dil okulu, lise, lisans ve yüksek lisans başvurusu, vize dosyası ve sınav planı tek elden.',
    lead:
      'Karşıyaka’daki merkez ofisimizde yurt dışında dil okulu, yaz okulu, lise, üniversite ve yüksek lisans planınızı yüz yüze konuşuyor; başvurudan vize randevusuna kadar her adımı İzmir’den yönetiyoruz.',
    intro: [
      'Tampa Yurtdışı Eğitim’in genel merkezi İzmir Karşıyaka’da, Park Yaşam Ofisleri’nde. 15 yıllık sektör deneyimimizle bugüne kadar 5.000’i aşkın öğrenciye eşlik ettik; Google’daki 89 değerlendirmede 5.0 puan almamız da bu yolculuğu birlikte yürüdüğümüz ailelerin yorumlarına dayanıyor. Merkez ofiste öğrenciyle ve veliyle aynı masada oturup hedefi, bütçeyi ve takvimi birlikte netleştiriyoruz.',
      'İzmir’den yurt dışına çıkmak isteyen bir öğrenci için en büyük avantaj, işlemlerin önemli bir kısmının şehirde yapılabilmesi. İngiltere, Almanya, İspanya, Hollanda ve İrlanda gibi ülkelerin vize başvuru merkezleri İzmir’de hizmet veriyor; IELTS, TOEFL ve PTE gibi sınavlara da şehir içinde girilebiliyor. Böylece Ankara’ya ya da İstanbul’a gitmeniz gereken durumlar genellikle ABD ve Kanada gibi birkaç ülkeyle sınırlı kalıyor.',
      'Ege Üniversitesi, Dokuz Eylül, İzmir Yüksek Teknoloji Enstitüsü ya da şehirdeki vakıf üniversitelerinde okuyan öğrencilerin önemli bir kısmı yüksek lisansı yurt dışında yapmayı düşünüyor; lise öğrencileri ise yaz okulu veya bir dönem yurt dışı deneyimiyle başlıyor. Hangi aşamada olursanız olun, ilk görüşmede size yazılı bir yol haritası çıkarıyor ve kimin hangi belgeyi ne zamana kadar hazırlayacağını netleştiriyoruz.',
    ],
    services: [
      {
        title: 'Dil okulları',
        text: 'Londra, Dublin, Malta veya Kanada’da 2 haftadan bir yıla kadar uzanan [yurt dışı dil okulu](/yurtdisi-dil-okullari) programlarını karşılaştırıyoruz. İzmir’den kısa süreli yaz kursuna gidenlerden üniversite hazırlığı için uzun program arayanlara kadar seviye testini ofiste yapıyoruz.',
      },
      {
        title: 'Yaz okulları',
        text: 'Ortaokul ve lise öğrencileri için gözetimli kampüs programları sunuyoruz. [Yurt dışı yaz okulları](/yurtdisi-yaz-okullari) sayfasında yaş gruplarını görebilirsiniz; İzmir’deki okulların karne tarihine göre çıkış haftasını birlikte seçiyoruz.',
      },
      {
        title: 'Lise eğitimi',
        text: 'Bir dönem, bir yıl ya da diploma programı olarak [yurt dışında lise eğitimi](/yurtdisi-lise-egitimi) planlıyoruz. Denklik ve dönüşte Türkiye’deki okula uyum konusunu velilerle ofiste ayrıntılı konuşuyoruz.',
      },
      {
        title: 'Lisans programları',
        text: 'İngiltere’de UCAS, Almanya’da Studienkolleg, İtalya’da devlet üniversiteleri gibi farklı yolları [lisans programları](/lisans-programlari) sayfamızda anlattık. İzmir’deki kolejlerde IB veya A-Level okuyan öğrencilerin başvuru takvimini 11. sınıfta başlatmayı öneriyoruz.',
      },
      {
        title: 'Yüksek lisans',
        text: 'İzmir’deki üniversitelerden mezun olan ya da son sınıfta olan öğrencilerle not ortalaması, dil skoru ve bütçeye göre ülke seçiyoruz. Bir yıllık İngiltere programlarından Almanya’daki devlet üniversitelerine kadar seçenekler [yurt dışı yüksek lisans](/yurtdisi-yuksek-lisans) sayfasında.',
      },
      {
        title: 'Work and Study',
        text: 'Okurken yasal çalışma hakkı veren ülkelerde dil eğitimini iş deneyimiyle birleştiren [Work and Study](/work-and-study) programlarını anlatıyoruz. Çalışma izninin sınırlarını ve gerçekçi kazanç beklentisini ilk görüşmede açıkça konuşuyoruz.',
      },
    ],
    visaCenters: [
      {
        country: 'İngiltere',
        text: 'Başvuru gov.uk üzerinden online yapılır; biyometri ve belge teslimi için VFS Global’in İzmir’deki İngiltere vize başvuru merkezinden randevu alınabilir. Türkiye’deki diğer İngiltere merkezleri İstanbul, Ankara, Antalya ve Adana’dadır.',
      },
      {
        country: 'Almanya',
        text: 'Alman temsilcilikleri adına Türkiye’de vize başvurularını iDATA kabul eder ve iDATA’nın Konak’ta bir İzmir ofisi bulunur. Almanya’nın İzmir Başkonsolosluğu da Ege bölgesindeki ulusal (D tipi) öğrenci vizesi dosyalarıyla ilgilidir; randevu yalnızca idata.com.tr üzerinden alınmalıdır.',
      },
      {
        country: 'İtalya',
        text: 'İtalya’nın İzmir’de konsolosluğu ve iDATA ofisi vardır. Uzun süreli öğrenci vizesinde kabul edilen program türleri dönem dönem değişebildiği için başvurudan önce güncel duyuruları kontrol etmek gerekir.',
      },
      {
        country: 'İspanya',
        text: 'İspanya başvuruları BLS International üzerinden alınır; BLS’nin Konak’ta İzmir ofisi vardır. İzmir, İspanya’nın İstanbul Başkonsolosluğu’nun görev bölgesindedir.',
      },
      {
        country: 'Fransa',
        text: 'Fransa’nın yetkili vize başvuru merkezinin İzmir’de de ofisi bulunur; öğrenci adayları önce Campus France (Études en France) sürecini tamamlar, ardından France-Visas üzerinden randevuya geçer.',
      },
      {
        country: 'Hollanda',
        text: 'Hollanda için kısa süreli vize başvuruları VFS Global üzerinden yapılır ve İzmir’de merkez vardır. Uzun süreli öğrenci ikamet izni ise genellikle üniversitenin sponsor olarak başlattığı süreçle yürür.',
      },
      {
        country: 'Malta',
        text: 'Malta başvuruları VFS Global aracılığıyla alınır ve bölge sınırlaması yoktur; yani Türkiye’deki herhangi bir Malta merkezini seçebilirsiniz. İzmir’de Malta için randevu verilip verilmediğini VFS’nin Malta sayfasından kontrol edin.',
      },
      {
        country: 'İrlanda',
        text: 'İrlanda Büyükelçiliği’nin vize başvuru merkezlerinden biri İzmir’dedir. Dosyalar Ankara’daki büyükelçilikte değerlendirilir ve karar öncesinde Ankara’da kişisel görüşme istenebilir.',
      },
      {
        country: 'ABD',
        text: 'F-1 ve J-1 vize mülakatları Türkiye’de Ankara’daki ABD Büyükelçiliği ile İstanbul’daki Başkonsolosluk’ta yapılır; İzmir’de mülakat yapılmaz. Bu nedenle İzmirli öğrencilerin mülakat günü için Ankara veya İstanbul’a gitmesi gerekir.',
      },
      {
        country: 'Kanada',
        text: 'Kanada başvurusu IRCC üzerinden online yapılır; biyometri için Türkiye’deki VFS Global merkezleri yalnızca Ankara ve İstanbul’dadır. İzmir’de Kanada başvuru merkezi bulunmuyor.',
      },
      {
        country: 'Avustralya',
        text: 'Avustralya öğrenci vizesi ImmiAccount üzerinden online yapılır; biyometri istendiğinde VFS Global’in Avustralya biyometri merkezlerinden randevu alınır. Güncel merkez listesini başvuru sırasında kontrol edin.',
      },
      {
        country: 'Önemli not',
        text: 'Randevu ve adres bilgisi değişebilir, başvuru öncesi resmi siteden kontrol edin. Yalnızca resmi randevu sitelerini kullanın; para karşılığı randevu vaat eden aracılara itibar etmeyin. Belge hazırlığını [vize danışmanlığı](/hizmetler/vize-danismanligi) hizmetimizle birlikte yürütebiliriz.',
      },
    ],
    exams: [
      'IELTS: İzmir’de British Council’e bağlı merkezler (Konak ve Çankaya semtlerinde) ile IDP IELTS İzmir (Bayraklı) sınav yapıyor; İngiltere vizesi için gereken IELTS for UKVI seçeneği bazı merkezlerde sunuluyor. Hazırlık için [IELTS rehberimize](/bilgi-bankasi/ielts) bakabilirsiniz.',
      'TOEFL iBT: ETS’nin İzmir’de yetkili sınav merkezleri bulunuyor; merkez ve tarih listesi ets.org üzerinden kayıt sırasında görülür. Evden girilen TOEFL iBT Home Edition da bir seçenek.',
      'PTE Academic: Pearson’ın İzmir’de Dokuz Eylül Üniversitesi bünyesinde bir sınav merkezi olduğu duyuruldu; güncel tarihleri pearsonpte.com’dan kontrol edin.',
      'Almanca: Goethe-Institut’un Türkiye’deki üç enstitüsünden biri İzmir’de ve Goethe-Zertifikat sınavları burada yapılıyor. TestDaF için İzmir’de tarih açılıp açılmadığı dönemden döneme değiştiğinden TestDaF portalından kontrol etmek gerekir; ayrıntılar [TestDaF ve Goethe rehberinde](/bilgi-bankasi/testdaf-goethe-telc).',
      'Sınav ücretleri ve tarihleri kurumlara göre değişir ve sık güncellenir; kayıt yapmadan önce resmi kayıt sayfasından teyit edin.',
    ],
    process: [
      {
        title: 'Ön görüşme',
        text: 'Karşıyaka’daki ofisimizde ya da online olarak 30 dakikalık bir görüşmeyle başlıyoruz. Hedef, bütçe, dil seviyesi ve zamanlama konuşulur; danışmanlık ücretsizdir.',
      },
      {
        title: 'Yol haritası',
        text: 'Görüşmeden sonra ülke ve okul seçeneklerini, toplam maliyet kalemlerini ve takvimi yazılı olarak paylaşıyoruz. Veliler için her kalemin neden gerekli olduğunu ayrıca açıklıyoruz.',
      },
      {
        title: 'Sınav ve belge planı',
        text: 'Gerekli dil sınavını İzmir’deki uygun merkezde hangi tarihte almanız gerektiğini belirliyoruz. Transkript, diploma, tercüme ve apostil işlerini sıraya koyuyoruz.',
      },
      {
        title: 'Başvuru ve kabul',
        text: 'Okul veya üniversite başvurularını sizinle birlikte hazırlıyor, motivasyon mektubu ve referans metinlerini gözden geçiriyoruz. Kabul mektubu geldiğinde kayıt ve ödeme adımlarını takip ediyoruz.',
      },
      {
        title: 'Vize dosyası',
        text: 'Vize başvuru formu, finansal belgeler ve sponsor yazıları ofiste kontrol edilir. Randevunuz İzmir’deyse belge teslim gününe kadar dosyayı birlikte son kez gözden geçiriyoruz.',
      },
      {
        title: 'Konaklama ve yola çıkış',
        text: 'Yurt, aile yanı veya öğrenci rezidansı seçimini, uçuş planını ve varış haftasını konuşuyoruz. Yurt dışındayken de WhatsApp üzerinden ulaşabileceğiniz bir danışmanınız oluyor.',
      },
    ],
    flights:
      'İzmir Adnan Menderes Havalimanı (ADB), Karşıyaka’dan yaklaşık 30–40 dakika uzaklıkta. Almanya’ya özellikle Frankfurt başta olmak üzere birçok şehre direkt seferler bulunuyor; Hollanda ve diğer bazı Avrupa şehirlerine de sezona göre değişen direkt bağlantılar var. Londra, Dublin, Kuzey Amerika ve Avustralya yönünde ise öğrenciler çoğunlukla İstanbul aktarmalı uçuyor. Sefer listeleri sezona göre değiştiği için bilet almadan önce havayolu sitelerinden güncel durumu kontrol edin.',
    nearby: [
      'Karşıyaka, Bayraklı, Bornova ve Çiğli’den ofisimize toplu taşımayla kolayca ulaşılabilir.',
      'Konak, Buca, Karabağlar, Narlıdere ve Balçova’daki ailelerle ofiste ya da online görüşüyoruz.',
      'Urla, Çeşme, Seferihisar, Menemen, Torbalı ve Bergama’daki öğrenciler için görüşmeleri online başlatıp belge teslimi için ofis randevusu planlıyoruz.',
      'Manisa, Balıkesir ve Uşak’tan gelen danışanlarımız da merkez ofiste ağırlanıyor ya da süreci tamamen online yürütüyor.',
    ],
    faqs: [
      {
        q: 'İzmir’de yurt dışı eğitim danışmanlığı ücretli mi?',
        a: 'Tampa’da danışmanlık hizmetimiz ücretsizdir. Öğrenci yalnızca okulun eğitim ve konaklama ücretlerini, sınav ve vize gibi resmi kurumların ücretlerini öder. Ön görüşme için Karşıyaka ofisimize gelebilir ya da online randevu alabilirsiniz.',
      },
      {
        q: 'İngiltere vizesi için İzmir’de nereye başvurulur?',
        a: 'Başvuru gov.uk üzerinden online doldurulur ve ödenir. Ardından VFS Global’in İzmir’deki İngiltere vize başvuru merkezinden biyometri randevusu alınır. Adres ve randevu durumu değişebildiği için VFS’nin İngiltere–Türkiye sayfasından son bilgiyi kontrol edin.',
      },
      {
        q: 'İzmir’den Almanya öğrenci vizesi nasıl alınır?',
        a: 'Kabul belgesi, bloke hesap ve sağlık sigortası hazırlandıktan sonra iDATA’nın resmi sitesinden İzmir ofisi için randevu alınır. Ulusal öğrenci vizesi dosyasını Almanya’nın ilgili temsilciliği değerlendirir. Belge listesi sık güncellendiği için başvurudan hemen önce iDATA ve diplo.de sayfalarını kontrol edin.',
      },
      {
        q: 'Amerika vize mülakatı İzmir’de yapılıyor mu?',
        a: 'Hayır. ABD öğrenci vizesi mülakatları Türkiye’de Ankara’daki Büyükelçilik ve İstanbul’daki Başkonsolosluk’ta yapılır. İzmirli öğrenciler randevu sisteminde bu iki şehirden birini seçer ve mülakat günü oraya gider.',
      },
      {
        q: 'İzmir’de IELTS sınavına nerede girebilirim?',
        a: 'İzmir’de British Council’e bağlı merkezler ve IDP IELTS İzmir sınav düzenliyor; hem kağıt hem bilgisayar üzerinde sınav seçenekleri bulunabiliyor. İngiltere’de dil okulu veya foundation için vize başvurusu yapacaksanız IELTS for UKVI gerekip gerekmediğini kayıttan önce bizimle netleştirin.',
      },
      {
        q: 'İzmir ofisinize gelmeden süreci online yürütebilir miyim?',
        a: 'Evet. Ön görüşmeyi görüntülü yapabilir, belgeleri dijital olarak paylaşabilirsiniz. Islak imza veya asıl belge gereken durumlarda Karşıyaka ofisimize kısa bir ziyaret yeterli oluyor.',
      },
    ],
  },
  {
    slug: 'aydin-yurt-disi-egitim',
    office: 'aydin',
    city: 'Aydın',
    seoTitle: 'Aydın Yurt Dışı Eğitim Danışmanlığı | Efeler Ofisi',
    description:
      'Aydın’da yurt dışı eğitim danışmanlığı: Efeler ofisimizde dil okulu, yaz okulu, lise, üniversite ve yüksek lisans başvuruları ile vize hazırlığı randevuyla.',
    lead:
      'Efeler’deki My Town Plaza ofisimizde Aydın ve çevresindeki öğrencilerle randevulu görüşüyor; yurt dışı okul seçimi, başvuru ve vize hazırlığını İzmir’e gitmenize gerek kalmadan buradan planlıyoruz.',
    intro: [
      'Aydın ofisimiz, İzmir’deki genel merkezimizin desteğiyle çalışıyor ve Aydın ile çevre illerdeki aileler için yüz yüze danışmanlık noktası. Görüşmeler randevuyla yapılıyor; böylece her öğrenciye ayrılan süre bölünmüyor ve veliler sorularını rahatça sorabiliyor. Ofis Efeler’de, Kurtuluş Mahallesi’ndeki My Town Plaza’da.',
      'Aydınlı öğrencilerin yurt dışı planında en çok sorulan konu, vize ve sınav işlemleri için nereye gidileceği. Aydın’da büyük ülkelerin vize başvuru merkezleri bulunmadığından randevuların çoğu İzmir’de alınıyor; ABD ve Kanada gibi ülkeler için ise Ankara ya da İstanbul gerekiyor. Bu yolculukları tek bir güne sığdıracak şekilde sınav, belge ve randevu tarihlerini birlikte planlıyoruz.',
      'Aydın Adnan Menderes Üniversitesi öğrencileri arasında Erasmus deneyiminden sonra yüksek lisansı yurt dışında sürdürmek isteyenler sık görülüyor. Kuşadası ve Didim çevresinde büyüyen gençlerin bir kısmı da Otel ve Ağırlama Yönetimi gibi alanlarda yurt dışında okumayı ya da Work and Study ile deneyim kazanmayı düşünüyor. Sektörde 15 yılı aşan deneyimimizi ve 5.000’den fazla öğrenciyle edindiğimiz birikimi bu farklı hedeflere göre uyarlıyoruz.',
    ],
    services: [
      {
        title: 'Dil okulları',
        text: 'Aydınlı öğrenciler için en kolay ilk adım çoğu zaman 4–12 haftalık bir dil programı. [Yurt dışı dil okulları](/yurtdisi-dil-okullari) arasından bütçeye, yaşa ve hedef sınava göre okul öneriyoruz; seviye tespitini Efeler ofisinde yapıyoruz.',
      },
      {
        title: 'Yaz okulları',
        text: 'Okulların kapandığı haziran sonundan itibaren 12–17 yaş grubu için gözetimli programlar planlıyoruz. [Yurt dışı yaz okulları](/yurtdisi-yaz-okullari) için kayıtların erken dolduğunu göz önünde bulundurarak velilere kış aylarında görüşmeyi öneriyoruz.',
      },
      {
        title: 'Lise eğitimi',
        text: 'Aydın’dan [yurt dışında lise eğitimi](/yurtdisi-lise-egitimi) için çocuğunu göndermeyi düşünen ailelerle aile yanı ve yatılı okul seçeneklerini karşılaştırıyoruz. Güvenlik, rehber öğretmen ve iletişim sıklığı gibi konuları ayrıntılı ele alıyoruz.',
      },
      {
        title: 'Lisans programları',
        text: 'Türkiye’deki lise diplomasıyla doğrudan kabul veren ülkeleri ve foundation gerektiren ülkeleri [lisans programları](/lisans-programlari) sayfamızda özetledik. Aydın’daki anadolu ve fen liselerinden gelen öğrencilerle not ortalaması ve dil hedefini 10. sınıftan itibaren takip ediyoruz.',
      },
      {
        title: 'Yüksek lisans',
        text: 'Erasmus’la Avrupa’yı görmüş öğrencilerin sık sorduğu soru, aynı ülkede yüksek lisansa nasıl geçileceği. [Yurt dışı yüksek lisans](/yurtdisi-yuksek-lisans) başvurusunda burs, harç ve yaşam maliyetini birlikte hesaplıyoruz.',
      },
      {
        title: 'Work and Study',
        text: 'Kuşadası veya Didim’de sezonluk işlerde çalışmış gençler için [Work and Study](/work-and-study) programları, bu deneyimi yurt dışında dil eğitimiyle birleştirme imkanı sunuyor. Hangi ülkede haftada kaç saat çalışılabildiğini ve beklenen giderleri açıkça anlatıyoruz.',
      },
    ],
    visaCenters: [
      {
        country: 'İngiltere',
        text: 'Aydın’a en yakın İngiltere vize başvuru merkezi İzmir’deki VFS Global merkezi. Online başvuruyu gov.uk’te tamamladıktan sonra biyometri için İzmir randevusu seçilebilir.',
      },
      {
        country: 'Almanya',
        text: 'Aydın’dan Almanya başvurusu yapanlar genellikle iDATA’nın İzmir ofisinden randevu alıyor. Randevu sırası yoğun dönemlerde uzayabildiğinden kabul belgesi gelir gelmez randevu araştırmaya başlamak gerekiyor.',
      },
      {
        country: 'İtalya',
        text: 'İtalya için Aydın’a en yakın iDATA ofisi ve İtalyan konsolosluğu İzmir’de. Öğrenci vizesinde kabul edilen program türleriyle ilgili duyuruları başvuru öncesinde takip etmek önemli.',
      },
      {
        country: 'İspanya ve Fransa',
        text: 'Aydın, bu iki ülkenin İstanbul’daki başkonsolosluklarının görev bölgesinde yer alıyor. Belge teslimi ise genellikle İzmir’deki başvuru merkezlerinde yapılıyor: İspanya için BLS International, Fransa için ülkenin yetkili başvuru merkezi.',
      },
      {
        country: 'Hollanda, İrlanda ve Malta',
        text: 'Hollanda ve İrlanda için İzmir’deki başvuru merkezleri Aydın’a en yakın seçenek. Malta başvurularında bölge sınırlaması bulunmadığından VFS Global’in randevu açık olan herhangi bir Malta merkezi seçilebiliyor.',
      },
      {
        country: 'ABD ve Kanada',
        text: 'Amerika öğrenci vizesi için mülakat Ankara veya İstanbul’da; Kanada biyometrisi için VFS Global merkezleri de yalnızca bu iki şehirde. Aydın’dan gidecek öğrencilere yolculuğu tek güne indirecek bir plan öneriyoruz.',
      },
      {
        country: 'Avustralya',
        text: 'Başvuru ImmiAccount’ta online yapılıyor; biyometri istenirse VFS Global’in Avustralya için yetkili merkezlerinden randevu alınıyor.',
      },
      {
        country: 'Hatırlatma',
        text: 'Randevu ve adres bilgisi değişebilir, başvuru öncesi resmi siteden kontrol edin. Dosya hazırlığında [vize danışmanlığı](/hizmetler/vize-danismanligi) desteği alabilir, [öğrenci vizesi rehberimizi](/bilgi-bankasi/ogrenci-vizesi-rehberi) inceleyebilirsiniz.',
      },
    ],
    exams: [
      'Aydın’dan IELTS’e girmek isteyen öğrenciler için en yakın merkezler İzmir’de: British Council’e bağlı merkezler ve IDP IELTS İzmir düzenli tarih açıyor. Sınav günü sabah erken başladığından bir gün önce İzmir’e geçmeyi öneriyoruz.',
      'TOEFL iBT ve PTE Academic için de yakın merkezler İzmir’de. TOEFL’ın evden girilen Home Edition seçeneği Aydın’dan çıkmadan sınava girmek isteyenler için pratik bir alternatif.',
      'Almanca sertifika gerekenler için Goethe-Institut İzmir en yakın enstitü. TestDaF tarihlerini ise kayıt portalından kontrol etmek gerekiyor; seviye ve sınav farkları için [TestDaF ve Goethe rehberine](/bilgi-bankasi/testdaf-goethe-telc) göz atın.',
      'Aydın’da bu sınavlar için düzenli bir merkez olduğunu doğrulayamadık; şehirde tarih açılırsa ofisimizden bilgi alabilirsiniz. Ücret ve tarihler kurumlar tarafından sık güncellendiği için kayıttan önce resmi sayfalara bakın.',
    ],
    process: [
      {
        title: 'Randevulu ilk görüşme',
        text: 'Efeler ofisimizde ya da online olarak tanışıyoruz. Öğrencinin okulu, notları, ilgi alanları ve ailenin bütçesi konuşulur; bu görüşme için ücret alınmaz.',
      },
      {
        title: 'Seçeneklerin karşılaştırılması',
        text: 'İki ya da üç ülke ve her birinde birkaç okul için maliyet, süre ve kabul koşullarını yan yana koyuyoruz. Kararı acele ettirmeden aileye bırakıyoruz.',
      },
      {
        title: 'Dil sınavı ve evraklar',
        text: 'Sınavın İzmir’de hangi tarihte alınacağını, tercüme ve noter işlerinin Aydın’da nasıl halledileceğini planlıyoruz. Belgelerin asıllarını ofiste kontrol ediyoruz.',
      },
      {
        title: 'Başvuru ve ödeme takibi',
        text: 'Okul başvurusunu gönderiyor, kabul ve depozito adımlarını sizin adınıza takip ediyoruz. Okulla yazışmaları da düzenli olarak sizinle paylaşıyoruz.',
      },
      {
        title: 'Vize randevusu',
        text: 'İzmir, Ankara veya İstanbul’daki randevuya gitmeden önce dosyayı Aydın ofisinde baştan sona birlikte gözden geçiriyoruz. Eksik bir belge yüzünden randevunun boşa gitmemesi için kontrol listesi veriyoruz.',
      },
      {
        title: 'Yola çıkış öncesi bilgilendirme',
        text: 'Konaklama, havalimanı karşılaması ve ilk hafta için pratik bilgileri öğrenciye ve veliye ayrı ayrı anlatıyoruz. Yurt dışındaki süreç boyunca iletişim devam ediyor.',
      },
    ],
    flights:
      'Aydın’ın en yakın havalimanı İzmir Adnan Menderes (ADB); Efeler’den otoyolla genellikle 1–1,5 saat sürüyor ve İzmir–Aydın hattındaki bölgesel trenler de havalimanı yakınından geçiyor. Güneydeki ilçeler için Milas-Bodrum Havalimanı (BJV) ikinci bir seçenek; Söke ve Didim’den bazı aileler bu havalimanını daha yakın buluyor. ADB’den Almanya’nın Frankfurt gibi şehirlerine direkt seferler var; Londra, Dublin ve okyanus ötesi rotalarda ise genellikle İstanbul aktarması gerekiyor. Sefer saatleri sezona göre değiştiğinden bileti almadan önce havayollarından teyit edin.',
    nearby: [
      'Efeler merkezden ve İncirliova, Köşk, Germencik gibi yakın ilçelerden ofisimize kısa sürede ulaşılabilir.',
      'Nazilli, Kuyucak, Sultanhisar ve Çine’deki ailelerle randevulu ofis görüşmesi ya da online görüşme yapıyoruz.',
      'Söke, Kuşadası ve Didim’deki öğrenciler sürecin çoğunu online yürütüp yalnızca belge kontrolü için Efeler’e gelebiliyor.',
      'Denizli ve Muğla’dan da danışanlarımız var; uzak ilçelerdeki öğrenciler için görüntülü görüşme ve dijital belge paylaşımı yeterli oluyor.',
    ],
    faqs: [
      {
        q: 'Aydın’da yurt dışı eğitim danışmanlığı ücretli mi?',
        a: 'Hayır, danışmanlık hizmetimiz ücretsizdir. Ödediğiniz tutarlar okulun eğitim ve konaklama bedeli ile sınav, vize ve sigorta gibi kurumlara ait ücretlerdir. Efeler ofisimizde görüşmek için önceden randevu almanız yeterli.',
      },
      {
        q: 'Aydın’dan İngiltere vizesi için nereye gidilir?',
        a: 'Aydın’da İngiltere vize başvuru merkezi bulunmuyor; en yakın merkez İzmir’deki VFS Global merkezi. Online formu tamamladıktan sonra biyometri için İzmir’i seçebilirsiniz. Randevuya gitmeden önce dosyanızı Aydın ofisimizde birlikte kontrol edebiliriz.',
      },
      {
        q: 'Aydın’da vize başvuru merkezi var mı?',
        a: 'Büyük ülkelerin Aydın’da düzenli bir vize başvuru merkezi olduğunu doğrulayamadık; Aydınlı başvuru sahipleri çoğunlukla İzmir’deki VFS Global, iDATA ve BLS ofislerine gidiyor. ABD mülakatı ve Kanada biyometrisi için ise Ankara veya İstanbul gerekiyor. Güncel listeyi her ülkenin resmi randevu sitesinden kontrol edin.',
      },
      {
        q: 'Aydın Adnan Menderes Üniversitesi mezunu olarak yurt dışında yüksek lisans yapabilir miyim?',
        a: 'Evet. Türkiye’deki akredite bir üniversiteden alınan lisans diploması, yurt dışındaki yüksek lisans başvurularında genel olarak kabul görür; kabul kararını not ortalaması, dil skoru ve bölüm uyumu belirler. Hedef ülkeye göre gereken belgeleri ilk görüşmede listeliyoruz.',
      },
      {
        q: 'Aydın ofisine gelmeden online danışmanlık alabilir miyim?',
        a: 'Alabilirsiniz. Nazilli, Söke, Didim ya da Denizli gibi uzak noktalardan görüşenler için ön görüşmeyi görüntülü yapıyor, belgeleri dijital olarak alıyoruz. İmza veya belge aslı gerektiğinde tek bir ofis ziyareti planlıyoruz.',
      },
      {
        q: 'Aydın’dan yurt dışına giden öğrenci hangi havalimanını kullanmalı?',
        a: 'Efeler ve kuzey ilçeler için İzmir Adnan Menderes Havalimanı genellikle en pratik seçenek. Söke ve Didim’den gidenler için Milas-Bodrum Havalimanı da değerlendirilebilir. Seçimi uçuşun aktarma noktasına ve fiyata göre birlikte yapıyoruz.',
      },
    ],
  },
]
