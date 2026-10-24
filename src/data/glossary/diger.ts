import type { Guide } from '../guides'

// Kavram rehberleri: İtalya, Fransa, Orta Avrupa, Erasmus, apostil, Asya dil ve giriş sınavları
export const digerGuides: Guide[] = [
  {
    slug: 'cimea-dov-nedir',
    title: 'CIMEA ve DoV nedir? İtalya’da diploma değerlendirmesi',
    group: 'Vize & Belgeler',
    program: 'lisans',
    countries: ['italya'],
    summary: 'İtalya başvurusunda Türk diplomasının değerini gösteren iki belge: konsolosluk DoV’u ve CIMEA karşılaştırılabilirlik beyanı.',
    facts: [
      { label: 'CIMEA Statement of Comparability', value: 'Yaklaşık 150 avro (KDV dahil), eksiksiz dosyada en geç 15 iş günü' },
      { label: 'CIMEA Statement of Verification', value: 'Yaklaşık 65 avro; belgenin gerçekliğini doğrular' },
      { label: 'DoV (Dichiarazione di Valore)', value: 'İtalyan konsolosluğu düzenler; süre haftalar hatta aylar sürebilir' },
      { label: 'Kim ister?', value: 'Üniversite (kayıt) ve konsolosluk (vize) aşaması' },
    ],
    sections: [
      {
        h: 'Neden bir “değer belgesi” gerekiyor?',
        p: [
          'İtalyan üniversiteleri, Türkiye’de aldığınız lise ya da lisans diplomasının İtalya’daki hangi seviyeye karşılık geldiğini kendi başına kesin olarak bilemez. Diplomanın kaç yıllık eğitimi temsil ettiği, Türkiye’de üniversiteye giriş hakkı verip vermediği ve diplomayı veren kurumun resmi olarak tanınıp tanınmadığı belgelenmelidir. Bu bilgiyi resmi olarak iki yoldan sunabilirsiniz: İtalyan diplomatik temsilciliğinin düzenlediği **Dichiarazione di Valore (DoV)** ya da İtalya’nın tanıma merkezi CIMEA’nın düzenlediği **Statement of Comparability**.',
          'Bu belge hem üniversitenin kesin kayıt (immatricolazione) aşamasında hem de bazı durumlarda öğrenci vizesi dosyasında karşınıza çıkar. Belgeyi zamanında hazırlamamak, kabul almış öğrencinin kaydını yıl sonuna kadar “şartlı” bırakabilir.',
        ],
      },
      {
        h: 'DoV ile CIMEA beyanı arasındaki farklar',
        p: [
          'Pratikte son yıllarda birçok üniversite DoV yerine CIMEA beyanını kabul ettiğini açıkça duyuruyor; bazı üniversitelerin CIMEA ile anlaşması da var ve öğrencinin beyanı bu anlaşma üzerinden indirimli ya da üniversite tarafından başlatılmış şekilde alınabiliyor. Yine de kabul politikası okuldan okula değişir; ödeme yapmadan önce hedef üniversitenin uluslararası öğrenci ofisine yazılı olarak sormak en güvenli yoldur.',
        ],
        table: {
          head: ['Kriter', 'DoV', 'CIMEA Statement of Comparability'],
          rows: [
            ['Düzenleyen', 'Türkiye’deki İtalyan konsolosluğu', 'CIMEA (İtalya, NARIC merkezi)'],
            ['Başvuru şekli', 'Konsolosluğa belge teslimi, randevu', 'Çevrim içi “Diplome” platformu'],
            ['Ön koşul belgeler', 'Apostilli diploma ve İtalyanca tercüme', 'Diploma, transkript; çoğu durumda apostil'],
            ['Süre', 'Haftalar–aylar, döneme göre değişir', 'Eksiksiz dosyada en geç 15 iş günü'],
            ['Ücret', 'Konsolosluk harcı ve tercüme masrafı', 'Yaklaşık 150 avro'],
            ['Kabul eden', 'Tüm üniversiteler', 'Üniversitelerin büyük kısmı; önceden teyit gerekir'],
          ],
        },
      },
      {
        h: 'CIMEA beyanı adım adım',
        list: [
          'CIMEA’nın Diplome platformunda hesap açın ve “Statement of Comparability” hizmetini seçin.',
          'Diplomanızı, transkriptinizi ve pasaportunuzu yükleyin. Lise öğrencileri için e-Devlet’ten alınan barkodlu mezuniyet belgesi ve not dökümü sıkça kullanılır; apostilin gerekip gerekmediğini hizmet sayfasında kontrol edin.',
          'Belgeler Türkçe ise İngilizce tercüme ekleyin; CIMEA İngilizce belgeleri genellikle doğrudan değerlendirir.',
          'Üniversite CIMEA ile anlaşmalıysa başvuruda o üniversiteyi seçin; bazı okullar beyanı kendi adına talep eder ve sonucu doğrudan görür.',
          'Ödemeyi yapın; dosya eksiksizse beyan dijital olarak, doğrulama koduyla birlikte gelir.',
          'Beyanı Universitaly ön başvurusuna ve üniversitenin kayıt portalına yükleyin.',
        ],
      },
      {
        h: 'DoV hangi durumda hâlâ mantıklı?',
        p: [
          'Bazı üniversiteler, özellikle kısıtlı kontenjanlı tıp ve diş hekimliği programlarında ya da bazı sanat akademilerinde (AFAM), hâlâ DoV istemeyi sürdürebilir. Ayrıca konsolosluk, vize dosyasında diploma değerini kendi süreci üzerinden görmek isteyebilir. Böyle bir şart varsa DoV başvurusunu kabul mektubunu beklemeden, lise son sınıfta diploma çıkar çıkmaz başlatmak gerekir; çünkü yaz aylarında konsolosluk yoğunluğu ciddi gecikmelere yol açar.',
          'DoV için tipik sıra şöyledir: diplomanın noter onaylı sureti, kaymakamlık ya da valilikten apostil, İtalyanca yeminli tercüme ve tercümenin konsolosluk tarafından onayı. Apostil ve tercüme düzeni için [apostil ve yeminli tercüme rehberimize](/bilgi-bankasi/apostil-ve-yeminli-tercume) bakın.',
        ],
      },
      {
        h: 'Statement of Verification ne işe yarar?',
        p: [
          'Statement of Verification, diplomanızın sahte olmadığını ve gerçekten belirtilen kurum tarafından verildiğini CIMEA uzmanlarının doğruladığını gösteren ayrı bir belgedir. Seviyeyi karşılaştırmaz; sadece gerçekliği teyit eder. Bazı üniversiteler, apostil yerine bu doğrulamayı kabul ettiğini duyurur. Sizden ne istendiğini okuyun: “comparability” ve “verification” birbirinin yerine geçmez.',
        ],
      },
      {
        h: 'Lisans ve yüksek lisans adayları için farklar',
        p: [
          '**Tıp ve kontenjanlı programlarda dikkat:** IMAT ile tıp veya diş hekimliği okumak isteyen öğrencilerde kesin kayıt tarihi, sıralama listesine göre ilerler ve kayıt hakkı kazanan öğrenciye birkaç günlük süre tanınır. Bu sürede değer belgesinin hazır olmaması kaydı riske atabilir. Bu nedenle tıp adaylarına beyanı sınavdan önce, mezuniyet belgesi çıkar çıkmaz almalarını öneriyoruz. Tıp eğitiminin genel çerçevesi için [Avrupa’da tıp eğitimi](/bilgi-bankasi/avrupada-tip-egitimi) sayfamızı, İtalya’daki programlar için [İtalya lisans programları](/lisans-programlari/italya) sayfamızı inceleyebilirsiniz.',
        ],
        list: [
          'Lisans adayı: Lise diploması, son üç yılın notları ve YKS sonuç belgesi istenebilir. İtalya, Türk lise diplomasıyla doğrudan lisansa başvuruyu genellikle kabul eder; ancak bazı okullar ek koşul koyabilir.',
          'Yüksek lisans adayı: Lisans diploması, transkript ve mümkünse Diploma Supplement (Diploma Eki). Avrupa formatında Diploma Eki olan Türk üniversitelerinin mezunları bazı okullarda bu belgeyle de ilerleyebilir.',
          'Tıp ve diş hekimliği: Belgelere ek olarak [IMAT](/bilgi-bankasi/imat) sonucu ve kontenjan sırası belirleyicidir.',
        ],
      },
      {
        h: 'Zaman çizelgesi: lise son sınıf öğrencisi için örnek plan',
        p: [
          'Türkiye’de liseden Haziran’da mezun olan ve Eylül’de İtalya’da lisansa başlamak isteyen bir öğrencinin önünde dar bir pencere vardır. Diploma ve e-Devlet mezuniyet belgesi genellikle Haziran sonu ile Temmuz başında hazır olur; Universitaly ön başvurusu ve vize randevusu ise aynı haftalara denk gelir. Bu yüzden belge işini iki aşamaya bölmek gerekir: mezuniyetten önce yapılabilecekler ve mezuniyet sonrası hızla tamamlanacaklar.',
          'Mezuniyetten önce: hedef üniversitenin DoV mu yoksa CIMEA mı istediğini yazılı olarak öğrenin, CIMEA hesabını açın, 9–11. sınıf transkriptlerini ve pasaportu hazırlayın, tercüman ve noter planını yapın. Mezuniyetten hemen sonra: diploma ve 12. sınıf notlarını ekleyip CIMEA başvurusunu gönderin ya da apostil ve tercüme sürecini başlatıp konsolosluk randevusu alın. Yüksek lisans adayları için durum daha rahattır; lisans diploması ve transkript genellikle başvuru döneminden aylar önce elde olduğu için CIMEA beyanı başvuru dosyasının bir parçası olarak erken alınabilir.',
        ],
        list: [
          'Ocak–Mart: Üniversite başvuruları ve kabul; değer belgesi türünü teyit edin.',
          'Nisan–Haziran: Belgelerin hazırlanması, apostil ve tercüme takvimi; CIMEA hesabı.',
          'Haziran–Temmuz: Diploma sonrası CIMEA başvurusu veya DoV için konsolosluk randevusu.',
          'Temmuz–Ağustos: Beyanın Universitaly’ye yüklenmesi ve vize başvurusu.',
          'Eylül–Ekim: Kesin kayıt; asıl belgeler ve beyan üniversiteye sunulur.',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'Henüz mezun olmadan beyan istemek: Diploma düzenlenmeden CIMEA beyanı çıkmaz; bu dönemde üniversiteye “diploma bekleniyor” bilgisini verin.',
          'Hedef okulun kabul ettiğini teyit etmeden 150 avro ödemek.',
          'Transkriptin eksik ya da imzasız olması; okul müdürlüğünden ıslak imzalı veya e-imzalı belge alın.',
          'Universitaly ön başvurusunu beyanı beklerken geciktirmek; ön başvuru belgenin sonradan yüklenmesine genellikle izin verir.',
        ],
      },
    ],
    seoTitle: 'CIMEA ve DoV Nedir? İtalya Diploma Değerlendirmesi',
    description: 'İtalya başvurusunda CIMEA karşılaştırılabilirlik beyanı ile konsolosluk DoV’u arasındaki farklar, ücretler, süreler ve hangisini seçmeniz gerektiği.',
    faqs: [
      { q: 'CIMEA beyanı DoV yerine geçer mi?', a: 'Birçok İtalyan üniversitesi CIMEA Statement of Comparability belgesini DoV’a alternatif olarak kabul ediyor. Ancak bu bir kural değil, üniversite politikasıdır. Ödeme yapmadan önce hedef okulun uluslararası ofisinden yazılı teyit alın.' },
      { q: 'CIMEA beyanı ne kadar sürede çıkar?', a: 'CIMEA, eksiksiz yüklenmiş bir dosyada beyanı 15 iş günü içinde düzenlediğini belirtiyor. Eksik belge talep edilirse süre uzar; bu yüzden transkript ve tercümeleri baştan tam yükleyin.' },
      { q: 'Lise diploması için de CIMEA alınabilir mi?', a: 'Evet. Lisans başvurusu yapan öğrenciler lise diplomaları için Statement of Comparability alabilir. Diploma henüz düzenlenmediyse beyan çıkmaz; mezuniyet sonrasında başvurmanız gerekir.' },
      { q: 'DoV için hangi belgeler gerekir?', a: 'Genellikle apostilli diploma, apostilli transkript, İtalyancaya yeminli tercüme ve konsolosluğun istediği başvuru formu gerekir. Konsolosluğun güncel listesi değişebildiği için randevudan önce resmi sayfasını kontrol edin.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'universitaly-on-basvuru',
    title: 'Universitaly ön başvurusu (pre-enrollment) nasıl yapılır?',
    group: 'Başvuru',
    program: 'lisans',
    countries: ['italya'],
    summary: 'İtalya öğrenci vizesinin ön koşulu olan Universitaly ön kaydı: zamanlama, gerekli belgeler, üniversite onayı ve vize randevusu.',
    facts: [
      { label: 'Kimler için?', value: 'AB dışı ülkeden başvuran lisans, yüksek lisans ve doktora adayları' },
      { label: 'Vize başvurusu son günü', value: 'Çoğu temsilcilikte 30 Kasım (2026/27 dönemi için 30 Kasım 2026)' },
      { label: 'Mali yeterlilik 2026/27', value: 'Ayda 783,06 avro, yıllık 10.179,85 avro (MUR parametresi)' },
      { label: 'Ön başvuru son tarihi', value: 'Her üniversite kendisi belirler; yaz ortası ile Eylül sonu arası yaygın' },
    ],
    sections: [
      {
        h: 'Universitaly nedir, neden zorunlu?',
        p: [
          'Universitaly, İtalya Üniversite ve Araştırma Bakanlığı’nın (MUR) resmi portalıdır. AB dışından gelen ve İtalya’da tam zamanlı bir derece programına kaydolacak öğrenciler, öğrenci vizesine başvurmadan önce bu portal üzerinden **ön kayıt (pre-enrollment)** yapar. Ön kayıt, üniversitenin sizi kabul ettiğini ve kontenjanına yerleştirdiğini konsolosluğa resmi olarak bildiren dijital köprüdür.',
          'Önemli bir ayrım: Universitaly bir üniversite başvuru sistemi değildir. Önce üniversitenin kendi portalından başvurur ve kabul alırsınız; sonra Universitaly’de bu kabulle eşleşen ön başvuruyu doldurursunuz. Üniversite ön başvurunuzu onaylamadan (validation) vize başvurusu yapılamaz.',
        ],
      },
      {
        h: 'Doğru sıralama: kabulden vizeye',
        list: [
          '1. Üniversitenin kendi başvuru portalından başvuru ve kabul (ya da şartlı kabul).',
          '2. Universitaly’de hesap açma ve ön başvuru formunu doldurma; üniversite ve program seçimi.',
          '3. Belgelerin yüklenmesi: pasaport, fotoğraf, diploma, transkript ve diploma değer belgesi (DoV veya CIMEA).',
          '4. Üniversitenin ön başvuruyu onaylaması; onaylanan özet belge PDF olarak indirilir.',
          '5. Konsolosluk tarafından ön başvurunun görülmesi ve vize randevusu.',
          '6. D tipi “studio – immatricolazione universitaria” ulusal vizesi.',
          '7. İtalya’ya varış, 8 iş günü içinde oturma izni başvurusu ve kesin kayıt.',
        ],
      },
      {
        h: 'Gerekli belgeler',
        table: {
          head: ['Belge', 'Açıklama'],
          rows: [
            ['Pasaport', 'Vize süresini en az üç ay aşacak geçerlilikte'],
            ['Vesikalık fotoğraf', 'Dijital, güncel'],
            ['Diploma ve transkript', 'Lisans için lise, yüksek lisans için lisans belgeleri'],
            ['Değer belgesi', '[DoV veya CIMEA beyanı](/bilgi-bankasi/cimea-dov-nedir); bazı okullar sonradan yüklemeye izin verir'],
            ['Kabul mektubu', 'Üniversitenin verdiği kabul ya da şartlı kabul'],
            ['Dil belgesi', 'Programın dili için istenen sertifika (IELTS, TOEFL, CILS, CELI vb.)'],
            ['Giriş sınavı sonucu', 'Gerekiyorsa [IMAT](/bilgi-bankasi/imat), TOLC veya CEnT-S'],
          ],
        },
      },
      {
        h: 'Zamanlama: Türk öğrenciler için gerçekçi takvim',
        p: [
          'Bakanlık, kontenjanlı programlar dışında ön başvuru son tarihlerinin her üniversite tarafından belirlendiğini duyuruyor. Örneğin 2026/27 döneminde bazı üniversiteler son tarihi Temmuz sonuna, bazıları Eylül sonuna koydu. Vize başvurusu için ise çoğu temsilcilikte son gün 30 Kasım’dır; ancak derslerin Eylül veya Ekim’de başladığını düşünürseniz Kasım’a bırakmak gerçekçi değildir.',
          'Türkiye’de yaz aylarında İtalya vize randevuları yoğundur. Bu nedenle üniversite onayı geldiği gün randevu sistemini kontrol etmeyi, belgelerinizi ise onaydan önce tamamlamayı öneriyoruz. Giriş sınavı gereken bölümlerde sınav tarihleri takvimi belirler; ayrıntı için [İtalya giriş sınavları](/bilgi-bankasi/italya-giris-sinavlari) sayfamıza bakın.',
          '**Kontenjan ve “quota” konusu:** İtalyan üniversiteleri her yıl AB dışı öğrenciler için programa göre ayrı kontenjan (contingente) ilan eder. Kontenjanlı programlarda (tıp, diş hekimliği, mimarlık gibi) ön başvuru takvimi bakanlık tarafından merkezi olarak belirlenebilir ve sıralama sınav sonucuna göre yapılır. Bir programa kabul almak, o programın AB dışı kontenjanında yer aldığınız anlamına gelir; ön başvuru da bu kontenjanla eşleşir.',
        ],
      },
      {
        h: 'Vize aşamasında mali yeterlilik',
        p: [
          'Bakanlık her yıl öğrenci vizesi için asgari mali yeterliliği güncelliyor. 2026/27 akademik yılı için açıklanan tutar ayda 783,06 avro, yıllık toplamda 10.179,85 avrodur (13 aya yayılarak hesaplanır). Bu bir önceki yılın yaklaşık 6.947 avro olan tutarının belirgin şekilde üzerindedir; bu yüzden eski yıllara ait rehberlerdeki rakamlara güvenmeyin.',
          'Konsolosluklar bu tutarı “asgari” olarak görür; ailenin genel mali durumunu da değerlendirir. Banka hesabı, sponsor belgesi ve gelir belgeleri tutarlı olmalıdır. Örnek metinler için [banka mektubu](/kaynaklar/ornek-banka-mektubu) ve [sponsor mektubu](/kaynaklar/ornek-sponsor-mektubu) şablonlarımıza göz atabilirsiniz. Dönüş bileti ya da dönüş masrafını karşılayacak ek tutar da istenebilir.',
        ],
      },
      {
        h: 'Türkiye’de vize randevusu ve konsolosluk aşaması',
        p: [
          'Türkiye’deki İtalya vize başvuruları, temsilciliğin yetkilendirdiği aracı kurum üzerinden alınır; randevu ve belge listesi bu kurumun ve konsolosluğun sitesinde yayımlanır. Universitaly’de onaylanan ön başvuru özetini, kabul mektubunu, değer belgesini, mali yeterlilik belgelerini, sağlık sigortasını ve konaklama bilgisini aynı dosyada sunarsınız. Konsolosluk ön başvurunuzu sistemde görebildiği için bilgilerin birebir uyumlu olması gerekir.',
          'Mali belgelerde en çok sorun çıkan nokta tutarlılıktır. Sponsorun gelir belgeleri, banka hesabındaki birikimin kaynağı ve öğrencinin bütçe planı birbirini desteklemelidir. Hesaba başvurudan kısa süre önce açıklanamayan büyük tutar yatırılması, çoğu konsoloslukta ek soru veya ret gerekçesi olabilir. Konaklama için ilk aylarda kalacağınız yeri gösteren rezervasyon ya da kira ön sözleşmesi, dosyayı güçlendirir.',
          '**Vize sonrası ilk iki hafta:** Vize çıktıktan sonra İtalya’ya varış tarihinizi kayıt ve oryantasyon takvimine göre belirleyin. Varıştan sonraki ilk iki hafta en yoğun dönemdir: [codice fiscale](/bilgi-bankasi/codice-fiscale-nedir) alma, oturma izni kitini teslim etme, üniversite kesin kaydı, banka hesabı ve telefon hattı. Burs başvurusu yapacaksanız [DSU ve ISEE parificato](/bilgi-bankasi/italya-dsu-bursu-isee) takvimi çoğu zaman vize sürecinden önce başladığı için ön başvuru döneminde bu tarihleri de not edin.',
        ],
        list: [
          'Pasaport ve önceki vizelerin kopyaları',
          'Universitaly onaylı ön başvuru özeti',
          'Kabul mektubu ve varsa harç ödeme belgesi',
          'DoV veya CIMEA beyanı',
          'Mali yeterlilik: banka dökümü, sponsor taahhüdü, gelir belgeleri',
          'Sağlık sigortası ve konaklama belgesi',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'Universitaly’yi başvuru sistemi sanıp üniversitenin kendi başvurusunu atlamak.',
          'Ön başvuruda programı yanlış seçmek; onay aşamasında reddedilir ve süre kaybedilir.',
          'Pasaport bilgilerini pasaporttan farklı yazmak (Türkçe karakterler, ikinci isim).',
          'Onay gelmeden vize randevusuna gitmek; konsolosluk dosyayı almaz.',
          'Varışta oturma izni başvurusunu geciktirmek: [permesso di soggiorno](/bilgi-bankasi/permesso-di-soggiorno) için 8 iş günü süreniz var.',
        ],
      },
    ],
    seoTitle: 'Universitaly Ön Başvurusu Nasıl Yapılır? Adım Adım',
    description: 'Universitaly pre-enrollment adımları, gerekli belgeler, 2026/27 mali yeterlilik tutarı, son tarihler ve İtalya öğrenci vizesi için doğru sıralama.',
    faqs: [
      { q: 'Universitaly ön başvurusu ücretli mi?', a: 'Universitaly portalında ön başvuru için bakanlık ücreti alınmaz. Ücretler üniversitenin kendi başvurusunda, değer belgesinde (CIMEA veya DoV), tercümelerde ve vize aşamasında ortaya çıkar.' },
      { q: 'Universitaly onayı ne kadar sürede gelir?', a: 'Onay süresi üniversiteye ve döneme göre değişir; birkaç günden birkaç haftaya kadar uzayabilir. Yaz aylarında yoğunluk arttığı için ön başvuruyu kabul aldıktan hemen sonra doldurmak en iyisidir.' },
      { q: 'Kabul almadan Universitaly ön başvurusu yapılabilir mi?', a: 'Portal teknik olarak form doldurmanıza izin verebilir, ancak üniversite sizi kabul etmeden ön başvuruyu onaylamaz. Onaylanmamış ön başvuruyla vize başvurusu yapılamaz.' },
      { q: 'İtalya öğrenci vizesi için ne kadar para göstermek gerekir?', a: '2026/27 akademik yılı için asgari tutar ayda 783,06 avro, yıllık 10.179,85 avrodur. Bu asgari bir eşiktir; konsolosluk ailenin genel mali durumuna da bakar ve ek olarak dönüş masrafı isteyebilir.' },
      { q: 'İngilizce program için İtalyanca belgesi gerekir mi?', a: 'Hayır, İngilizce programlarda genellikle İngilizce yeterlilik belgesi istenir. İtalyanca belgesi yalnızca İtalyanca eğitim veren programlarda zorunludur; bazı okullar seviyeyi kendi sınavıyla da ölçebilir.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'codice-fiscale-nedir',
    title: 'Codice fiscale nedir, nasıl alınır?',
    group: 'Vize & Belgeler',
    countries: ['italya'],
    summary: 'İtalya’daki vergi kimlik numarası codice fiscale: ne işe yarar, Türkiye’den ve İtalya’dan nasıl ücretsiz alınır, nerelerde istenir.',
    facts: [
      { label: 'Nedir?', value: '16 karakterli İtalyan vergi kimlik kodu' },
      { label: 'Ücret', value: 'Resmi kurumlardan alındığında ücretsiz' },
      { label: 'Nereden?', value: 'Agenzia delle Entrate ofisleri veya İtalyan konsoloslukları' },
      { label: 'Geçerlilik', value: 'Süresizdir, bir kez verilir' },
    ],
    sections: [
      {
        h: 'Codice fiscale ne işe yarar?',
        p: [
          'Codice fiscale, İtalya’da yaşayan herkesin kullandığı 16 karakterlik (harf ve rakam) vergi kimlik kodudur. Türkiye’deki T.C. kimlik numarasının günlük hayattaki rolüne benzer: kira sözleşmesi, telefon hattı, banka hesabı, üniversite kaydı, sağlık sistemi kaydı ve burs başvurusu gibi işlemlerin neredeyse tamamında istenir.',
          'Kod; soyadınızın ve adınızın ünsüzlerinden, doğum yılı, ayı ve gününden, cinsiyetinizden ve doğum yerinizin kodundan türetilir. Yurt dışında doğanlar için doğum yeri kodu ülke kodudur. İnternetteki hesaplayıcılar bu kodu tahmin edebilir; ancak **resmi olarak atanmamış bir kod geçerli değildir**. Aynı kodun başka birine verilmiş olması ihtimaline karşı resmi sistem farklı bir kod atayabilir.',
        ],
      },
      {
        h: 'Kodun yapısı: 16 karakter neyi anlatır?',
        p: [
          'Codice fiscale’nin her bölümü belirli bir bilgiyi kodlar. İlk üç harf soyadından, sonraki üç harf addan türetilir; burada genellikle ünsüz harfler kullanılır. Ardından doğum yılının son iki hanesi, doğum ayını gösteren bir harf ve doğum günü gelir; kadınlarda gün sayısına 40 eklenir. Sonraki dört karakter doğum yerinin kodudur: İtalya’da doğanlarda belediye kodu, yurt dışında doğanlarda ülke kodu kullanılır. Son karakter ise bir kontrol harfidir.',
          'Bu yapı, Türk isimlerinde neden dikkatli olunması gerektiğini açıklar. Pasaportta “Şükrü” yerine “Sukru” yazıyorsa kod “SKR” üzerinden hesaplanır; başka bir belgede “Şükrü” yazılması sistemsel uyumsuzluk yaratır. Çift isimli öğrencilerde (örneğin Ayşe Nur) iki ismin birlikte mi kullanılacağı da pasaporttaki yazıma göre belirlenir. Kod bir kez verildiğinde değişmez; yanlış veriyle atanmışsa düzeltme talebi için yine Agenzia delle Entrate’ye başvurmanız gerekir. Pasaportunuzu yenilediğinizde ise kod aynı kalır; yalnızca yeni pasaport bilgisini işlem yaptığınız kurumlara bildirmeniz yeterlidir.',
        ],
      },
      {
        h: 'Nerelerde karşınıza çıkar?',
        table: {
          head: ['İşlem', 'Codice fiscale gerekir mi?'],
          rows: [
            ['Üniversite kesin kaydı', 'Çoğu üniversitede evet'],
            ['DSU bursu ve ISEE parificato', 'Evet'],
            ['Kira sözleşmesi', 'Evet; sözleşme kaydı için'],
            ['Telefon hattı (SIM kart)', 'Evet'],
            ['Banka hesabı', 'Evet'],
            ['Sağlık sistemine (SSN) kayıt', 'Evet'],
            ['Oturma izni başvurusu', 'Formda istenir; yoksa sonradan tamamlanabilir'],
          ],
        },
      },
      {
        h: 'Türkiye’den almak: konsolosluk yolu',
        p: [
          'İtalya’ya gitmeden önce codice fiscale’yi Türkiye’deki İtalyan diplomatik temsilciliklerinden talep etmek mümkündür. Bu yol özellikle [DSU bursu](/bilgi-bankasi/italya-dsu-bursu-isee) için ISEE parificato başvurusu yapacak ve yaz aylarında ev arayacak öğrenciler için faydalıdır. Temsilciliğin formunu doldurup pasaport kopyasıyla birlikte e-posta veya randevu yoluyla başvurursunuz. Güncel prosedür temsilciliğe göre değişebileceğinden başvurudan önce resmi sayfayı kontrol edin.',
          'Bazı üniversiteler Universitaly ön başvurusu veya kendi başvuru sistemleri sırasında codice fiscale bilgisini sorar; o aşamada kodunuz yoksa alanı boş bırakmanıza ya da sonradan güncellemenize genellikle izin verilir.',
          'Konsolosluk yoluyla aldığınız kod, İtalya’da Agenzia delle Entrate’nin sisteminde de aynıdır; İtalya’ya vardığınızda yeniden başvurmanız gerekmez. Sadece kodu gösteren belgeyi yanınızda bulundurun ve ilk resmi işlemde (örneğin banka veya kira) kodun sistemde doğru göründüğünü kontrol edin.',
        ],
      },
      {
        h: 'İtalya’da almak: Agenzia delle Entrate',
        p: [
          '**Codice fiscale ve tessera sanitaria farkı:** Codice fiscale bir koddur; tessera sanitaria ise bu kodu taşıyan ve İtalya sağlık sistemine kayıt olduğunuzda verilen sağlık kartıdır. Öğrenciler oturma izniyle birlikte ulusal sağlık sistemine (SSN) gönüllü kayıt yaptırdığında kart da bu kodla düzenlenir. Sağlık güvencesi seçenekleri için [sağlık sigortası rehberimize](/bilgi-bankasi/saglik-sigortasi) bakabilirsiniz.',
        ],
        list: [
          'Yakınınızdaki Agenzia delle Entrate (İtalya Gelir İdaresi) ofisini bulun; birçok ofis randevu ister.',
          'Pasaportunuzu ve vize sayfanızın kopyasını götürün; İtalya’daki adresinizi bilmeniz yeterlidir.',
          'AA4/8 adlı talep formunu doldurun (ofiste de verilir).',
          'Kod genellikle aynı gün bir belge olarak verilir; plastik kart (tessera sanitaria) daha sonra postayla gelebilir.',
          'Bazı üniversiteler uluslararası öğrenciler için oryantasyon haftasında ofisle ortak başvuru masası kurar; bu en hızlı yoldur.',
        ],
      },
      {
        h: 'Aileniz için de gerekir mi?',
        p: [
          'Bazı durumlarda öğrencinin yanı sıra aile üyelerinin de codice fiscale alması gerekebilir. Örneğin velinin İtalya’da öğrenci adına kira sözleşmesine kefil olması, bir bankada ortak hesap açılması ya da DSU başvurusunda bazı bölgesel sistemlerin hane üyelerinin bilgilerini kodla istemesi bu durumlara örnektir. Aynı şekilde İtalya’da ev satın alma veya uzun süreli kira gibi işlemler de kod gerektirir. Velinin İtalya’ya gelmeden kod alması, konsolosluk yoluyla mümkündür.',
          'İtalya’ya hazırlık sürecinin bütününü planlamak için [Universitaly ön başvurusu](/bilgi-bankasi/universitaly-on-basvuru) ve [İtalya ülke sayfamıza](/ulkeler/italya) da göz atabilirsiniz.',
        ],
      },
      {
        h: 'Pratik ipuçları ve sık hatalar',
        p: [
          '**Varış sonrası doğru sıra:** Codice fiscale yoksa ilk hafta Agenzia delle Entrate’ye gidin; ardından [permesso di soggiorno](/bilgi-bankasi/permesso-di-soggiorno) kitini postaneden teslim edin, banka hesabı ve telefon hattını açın, kira sözleşmenizi kayıt ettirin. Konaklama arayışı için [konaklama seçenekleri](/bilgi-bankasi/konaklama-secenekleri) sayfamız işinizi kolaylaştırır.',
        ],
        list: [
          'Adınızı pasaportta nasıl yazıyorsa öyle yazdırın; Ş, Ğ, İ gibi harfler kodu değiştirir ve belgeler arasında uyumsuzluk yaratır.',
          'Çevrim içi hesaplayıcıdan bulduğunuz kodu kira veya banka işlemlerinde kullanmayın.',
          'Kodu aldığınız belgeyi PDF olarak saklayın; birçok işlemde kopyası istenir.',
          'Ev sahipleri sözleşmeyi kaydettirmek için kodunuzu ister; kayıtlı sözleşme, oturma izni ve burs işlemleri için de önemlidir.',
          'Codice fiscale’nin ücretli olduğunu söyleyen aracı hizmetlere ödeme yapmayın; resmi kurumlarda ücretsizdir.',
        ],
      },
    ],
    seoTitle: 'Codice Fiscale Nedir? İtalya Vergi Numarası Nasıl Alınır',
    description: 'Codice fiscale nedir, İtalya’da öğrenciler nerelerde kullanır, Türkiye’deki konsolosluktan veya Agenzia delle Entrate’den ücretsiz nasıl alınır?',
    faqs: [
      { q: 'Codice fiscale ücretli mi?', a: 'Hayır. İtalyan konsoloslukları ve Agenzia delle Entrate codice fiscale’yi ücretsiz verir. Ücret talep eden aracı sitelere ödeme yapmanıza gerek yoktur.' },
      { q: 'Codice fiscale’yi internetten kendim hesaplayabilir miyim?', a: 'Hesaplayıcılar kodun tahmini halini verir ama resmi olarak atanmış kod değildir. Aynı kod daha önce başkasına verildiyse sistem farklı bir kod atar; bu nedenle resmi belge olmadan kullanmayın.' },
      { q: 'Codice fiscale’yi Türkiye’den almak mümkün mü?', a: 'Evet, Türkiye’deki İtalyan temsilciliklerine başvurarak almak mümkündür. Prosedür ve randevu yöntemi temsilciliğe göre değişebileceği için güncel duyuruyu kontrol edin.' },
      { q: 'Codice fiscale kaç günde çıkar?', a: 'İtalya’daki Agenzia delle Entrate ofislerinde kod genellikle başvuru günü verilir. Konsolosluk yoluyla yapılan başvurularda süre yoğunluğa göre birkaç gün ile birkaç hafta arasında değişebilir.' },
      { q: 'Codice fiscale kaybolursa ne yapılır?', a: 'Kodun kendisi değişmez; yalnızca belgeyi veya kartı kaybetmiş olursunuz. Agenzia delle Entrate ofisinden pasaportunuzla yeni bir belge alabilir, sağlık kartını ise kayıtlı olduğunuz sağlık biriminden yeniden talep edebilirsiniz.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'permesso-di-soggiorno',
    title: 'Permesso di soggiorno: İtalya öğrenci oturma izni',
    group: 'Vize & Belgeler',
    countries: ['italya'],
    summary: 'İtalya’ya vardıktan sonra 8 iş günü içinde başvurulan öğrenci oturma izni: posta kiti, ücretler, Questura randevusu ve yenileme şartları.',
    facts: [
      { label: 'Başvuru süresi', value: 'İtalya’ya girişten itibaren 8 iş günü' },
      { label: 'Tahmini maliyet (1 yıla kadar)', value: 'Yaklaşık 116 avro (16 + 30 + 30,46 + 40 avro)' },
      { label: 'Başvuru yeri', value: 'Poste Italiane “Sportello Amico” şubeleri, ardından Questura' },
      { label: 'Çalışma hakkı', value: 'Haftada 20 saat, yılda en fazla 1.040 saat' },
    ],
    sections: [
      {
        h: 'Vize ile oturma izni arasındaki fark',
        p: [
          'İtalya’ya giriş için aldığınız D tipi öğrenci vizesi sadece ülkeye girmenizi sağlar. Uzun süre yasal olarak kalabilmek için girişten sonraki **8 iş günü** içinde oturma izni (permesso di soggiorno per studio) başvurusu yapmanız gerekir. Başvuruyu yaptığınızda verilen alındı belgesi (ricevuta), kart çıkana kadar yasal kalışınızın kanıtıdır.',
          'Öğrenci izni genellikle bir yıl için verilir ve her yıl yenilenir. Kart, vizeden farklı olarak İtalya’daki ikametinizi ve öğrenci statünüzü gösterir; kira, banka ve sağlık kaydı gibi işlemlerde istenir.',
        ],
      },
      {
        h: 'Adım adım başvuru',
        list: [
          'Postane şubelerinden (Sportello Amico) veya üniversitenin uluslararası ofisinden başvuru kitini alın. Bazı üniversiteler kiti öğrencilere doğrudan dağıtır; kitin kendisi ücretsizdir.',
          'Formun 1. modülünü doldurun; öğrenci başvurularında 2. modül genellikle gerekmez. Üniversite ofisleri formu doldurmada yardımcı olur.',
          'Belgeleri ekleyin: pasaport ve tüm sayfalarının kopyası, vize kopyası, kayıt veya kabul belgesi, sağlık sigortası, mali yeterlilik belgesi ve konaklama adresi.',
          '16 avroluk damga pulunu (marca da bollo) tütüncü dükkânlarından (tabaccheria) alıp forma yapıştırın.',
          'Kiti kapalı zarfla postaneye teslim edin; elektronik kart ücreti ve posta ücretini ödeyin.',
          'Postanenin verdiği alındıyı ve Questura randevu bilgisini saklayın; randevuda parmak izi alınır.',
          'Kart hazır olduğunda Questura’dan teslim alın; durumu Polizia di Stato’nun sorgulama sayfasından takip edebilirsiniz.',
        ],
      },
      {
        h: 'Questura randevusunda neler olur?',
        p: [
          'Posta kitini teslim ettiğinizde size verilen belgede Questura (il emniyet müdürlüğünün göçmenlik birimi) randevu tarihi ve saati yazar. Randevuya pasaportunuzu, alındı belgesini, dört adet vesikalık fotoğrafı ve dosyada gönderdiğiniz belgelerin asıllarını götürün. Görevli belgelerinizi kontrol eder, parmak izlerinizi alır ve eksik belge varsa yeni bir tarih verebilir. Büyük şehirlerde randevu tarihi başvurudan haftalar sonrasına verilebilir; bu normaldir.',
          'Randevuya geç kalmak veya hiç gitmemek ciddi bir sorundur; tarihi değiştirmeniz gerekiyorsa üniversitenizin uluslararası ofisine danışın. Bazı üniversiteler Questura ile anlaşmalı “student desk” uygulaması yürütür ve öğrenciler için toplu randevu günleri ayarlar. Bu imkânın olup olmadığını oryantasyon haftasında sorun; zaman ve stres açısından büyük fark yaratır.',
        ],
      },
      {
        h: 'Ücretler (yaklaşık)',
        p: [
          'Bir yıldan uzun izinlerde katkı payı daha yüksek olabilir. Bu tutarlar dönemsel olarak güncellenebildiğinden ödeme öncesi postane ya da Polizia di Stato bilgisini kontrol edin.',
        ],
        table: {
          head: ['Kalem', 'Tutar', 'Nereye?'],
          rows: [
            ['Marca da bollo', '16 avro', 'Tabaccheria’dan pul'],
            ['Elektronik izin kartı', '30,46 avro', 'Postanede ödenir'],
            ['Posta gönderim ücreti', '30 avro', 'Postanede ödenir'],
            ['İzin katkı payı (1 yıla kadar)', '40 avro', 'Postanede ödenir'],
            ['Toplam', 'Yaklaşık 116,46 avro', ''],
          ],
        },
      },
      {
        h: 'Sağlık güvencesi: oturma izninin şartı',
        p: [
          'Başvuruda sağlık güvencesi göstermeniz gerekir. İki seçenek vardır: İtalya’da geçerli özel sağlık sigortası ya da ulusal sağlık sistemine (SSN) yıllık katkı payı ödeyerek gönüllü kayıt. SSN kaydı için [codice fiscale](/bilgi-bankasi/codice-fiscale-nedir) gerekir. Hangi seçeneğin size uygun olduğunu [sağlık sigortası rehberimizde](/bilgi-bankasi/saglik-sigortasi) karşılaştırdık.',
        ],
      },
      {
        h: 'Yenileme ve akademik başarı şartı',
        p: [
          'Öğrenci izni yenilenirken akademik ilerlemeniz değerlendirilir. Yönetmeliğe göre ilk yıldan sonra en az bir sınav, sonraki yıllarda ise en az iki sınav geçmiş olmanız beklenir. Sağlık nedeni gibi belgelenmiş durumlar dışında bu şartı karşılamamak yenilemenin reddine yol açabilir.',
          'Yenileme başvurusunu izin bitmeden önce yapın; pratikte son 60 gün içinde başvurmak önerilir. Süresi dolmuş izinle Schengen bölgesinde seyahat etmek ve Türkiye’ye gidip geri dönmek sorun yaratabilir.',
          '**Kart çıkana kadar seyahat:** İlk başvuruda kart genellikle birkaç ay içinde çıkar. Bu sürede alındı belgesi ve geçerli vizenizle İtalya’da yasal olarak kalırsınız. Ancak alındıyla diğer Schengen ülkelerine seyahat kurallarla sınırlıdır; Türkiye’ye gidip dönmek planlıyorsanız güncel kuralları Questura’ya veya konsolosluğa sorun. Vize sürecinin genel çerçevesi için [öğrenci vizesi rehberine](/bilgi-bankasi/ogrenci-vizesi-rehberi) bakabilirsiniz.',
        ],
      },
      {
        h: 'Kalış sürecinde adres ve belge yönetimi',
        p: [
          'İtalya’daki ilk yılınızın toplam maliyetini planlarken oturma izni ve sigorta gibi kalemleri unutmamak için [bütçe planlama rehberimize](/bilgi-bankasi/yurtdisi-butce-planlama) bakabilirsiniz.',
          '**Çalışma hakkı:** Öğrenci oturma izniyle haftada en fazla 20 saat, yıllık toplamda en fazla 1.040 saat çalışabilirsiniz. İş sözleşmesi ve vergi kaydı için codice fiscale gerekir. Yarı zamanlı iş arayışında dikkat edilmesi gerekenler için [part-time iş rehberimize](/bilgi-bankasi/yurtdisinda-part-time-is-bulma) göz atın.',
        ],
        list: [
          'Kira sözleşmenizin kayıtlı olduğundan emin olun; kayıtsız sözleşme oturma izni ve burs işlemlerinde sorun yaratabilir.',
          'Pasaportunuzu yenilerseniz yeni pasaport bilgisini Questura’ya bildirin.',
          'Kart üzerindeki bilgileri (isim yazımı, doğum tarihi) teslim anında kontrol edin.',
          'Mezuniyet sonrası İtalya’da iş aramak için öğrenci izninin iş arama iznine dönüştürülmesi mümkündür; koşulları mezuniyetten önce araştırın.',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          '8 iş günlük süreyi kaçırmak; gecikme ret veya para cezası riskini doğurur.',
          'Kopyaları eksik göndermek: pasaportun boş sayfaları dahil tüm sayfaları istenir.',
          'Adresi değiştirip Questura’ya bildirmemek; randevu ve kart bildirimleri yanlış adrese gider.',
          'Yenileme için sınavları son haftaya bırakmak.',
        ],
      },
    ],
    seoTitle: 'Permesso di Soggiorno Nedir? İtalya Öğrenci Oturma İzni',
    description: 'İtalya’da öğrenci oturma izni için 8 iş günlük süre, posta kiti, yaklaşık 116 avroluk ücretler, Questura randevusu ve yenileme şartları adım adım.',
    faqs: [
      { q: 'Permesso di soggiorno başvurusu ne zaman yapılır?', a: 'İtalya’ya girişinizden itibaren 8 iş günü içinde başvurmanız gerekir. Başvuru, postanelerdeki Sportello Amico şubelerine kitin teslim edilmesiyle başlar ve Questura randevusuyla devam eder.' },
      { q: 'Öğrenci oturma izni ne kadar tutar?', a: 'Bir yıla kadar olan izinlerde yaklaşık 116 avro öder: 16 avro damga pulu, 30,46 avro elektronik kart, 30 avro posta ve 40 avro katkı payı. Tutarlar güncellenebildiği için ödeme öncesi kontrol edin.' },
      { q: 'Oturma izni kartı kaç ayda çıkar?', a: 'Süre şehirden şehre değişir; ilk başvuruda genellikle birkaç ay sürer. Bu süre boyunca postanenin verdiği alındı belgesi yasal kalışınızın kanıtıdır.' },
      { q: 'Öğrenci oturma izni nasıl yenilenir?', a: 'Yenileme yine posta kitiyle yapılır ve izin bitmeden önce başvurulmalıdır. Akademik ilerleme şartı vardır: ilk yıldan sonra en az bir, sonraki yıllarda en az iki sınav geçmiş olmanız beklenir.' },
      { q: 'Oturma izniyle çalışabilir miyim?', a: 'Evet, öğrenci izniyle haftada 20 saate, yıllık 1.040 saate kadar çalışabilirsiniz. Çalışma için codice fiscale ve iş sözleşmesi gerekir.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'italya-dsu-bursu-isee',
    title: 'İtalya DSU bursu ve ISEE parificato rehberi',
    group: 'Üniversite',
    program: 'lisans',
    countries: ['italya'],
    summary: 'İtalya’da gelir esaslı bölgesel DSU bursları ve yabancı öğrenciler için ISEE parificato: kimler alabilir, belgeler, CAF süreci.',
    facts: [
      { label: 'Kim verir?', value: 'Bölgesel öğrenci hakları kurumları (ör. DiSCo Lazio, ER.GO, EDISU Piemonte, ESU Veneto)' },
      { label: 'Ne sağlar?', value: 'Nakit burs, yurt, yemek hizmeti ve çoğu durumda harç muafiyeti' },
      { label: 'Temel ölçüt', value: 'Ailenin gelir ve varlığı (ISEE/ISPE parificato) ve akademik başarı' },
      { label: 'Başvuru zamanı', value: 'Genellikle yaz ayları; çağrılar bölgeye göre değişir' },
    ],
    sections: [
      {
        h: 'DSU bursu nedir?',
        p: [
          'DSU (Diritto allo Studio Universitario), İtalya’da üniversite eğitimine erişimi kolaylaştırmak için verilen gelir esaslı bir destek sistemidir. Burs İtalyan devletinden değil, bölgesel kurumlardan gelir: Roma’daki üniversiteler için DiSCo Lazio, Bologna için ER.GO, Torino için EDISU Piemonte, Padova ve Venedik için ESU gibi. Lombardiya gibi bazı bölgelerde ise başvuru doğrudan üniversitenin burs ofisi üzerinden yürür.',
          'Burs, yabancı öğrencilere de açıktır. Türk öğrenciler için önemli olan, Türkiye’deki aile gelirinin İtalyan sistemine uygun şekilde belgelenmesidir. Bu belgelendirme **ISEE parificato** (yurt dışı gelirler için eşdeğer ISEE) olarak adlandırılır.',
        ],
      },
      {
        h: 'DSU bursu neleri kapsar?',
        p: [
          'Tutarlar bölgeye, ISEE değerine ve öğrencinin şehir dışından gelip gelmediğine göre değişir. Kesin rakamı her yıl yayımlanan bölgesel çağrı metni (bando) belirler.',
        ],
        table: {
          head: ['Destek', 'Açıklama'],
          rows: [
            ['Nakit burs', 'Yıllık tutar; şehir dışından gelen (fuori sede) öğrenciler en yüksek dilimdedir'],
            ['Konaklama', 'Kurumun yurtlarında yer; bazen bursun bir kısmı yurt ücretine mahsup edilir'],
            ['Yemek', 'Üniversite yemekhanelerinde ücretsiz veya indirimli öğün'],
            ['Harç muafiyeti', 'Burs kazananlar çoğu üniversitede yıllık katkı payından muaf tutulur'],
          ],
        },
      },
      {
        h: 'ISEE parificato nedir?',
        p: [
          'ISEE, İtalya’da ailenin ekonomik durumunu gösteren göstergedir; gelir, mülk ve hane büyüklüğü birlikte hesaplanır. Yurt dışında yaşayan yabancı öğrenciler için bu hesap, yetkili CAF’lar (vergi danışmanlık merkezleri) tarafından ailenin yurt dışı belgelerine göre yapılır ve “parificato” adını alır. Yanında ISPE parificato da hesaplanır; bu değer mülk ve birikimleri ölçer.',
          'Önemli bir ayrım: AB dışı öğrenciler için ISEE parificato çoğu üniversitede yalnızca burs ve hareketlilik destekleri için dikkate alınır; harç indirimine her zaman yansımaz. Bazı üniversiteler AB dışı öğrencilere sabit harç uygular. Kendi üniversitenizin harç yönetmeliğini ayrıca kontrol edin.',
          '**ISEE değeri nasıl düşük ya da yüksek çıkar:** ISEE hesabında yalnızca yıllık gelir değil, hane büyüklüğü, taşınmazların metrekaresi ve banka birikimleri de etkilidir. Aynı gelirle daha kalabalık bir hane daha düşük ISEE değeri alır. Ailenin birden fazla konutu veya yüksek birikimi varsa ISPE değeri eşiği aşabilir ve gelir düşük olsa bile burs alınamayabilir. Bu nedenle tüm varlıkları eksiksiz beyan etmek ve sonucu gerçekçi değerlendirmek önemlidir; eksik beyan sonradan tespit edilirse burs iptal edilir ve geri ödeme istenir.',
          'Bazı ülkeler için belge listesinde kolaylık tanınır; Türkiye bu listede yer almadığından tam belge seti hazırlanır. İtalya’daki lisans seçenekleri için [İtalya lisans programları](/lisans-programlari/italya) sayfamıza da bakabilirsiniz.',
        ],
      },
      {
        h: 'Türk aileler için gereken belgeler',
        p: [
          'Bazı üniversitelerin 2026/27 duyuruları, CAF’ın yalnızca o yıl düzenlenmiş orijinal belgeleri kabul ettiğini belirtiyor. Belgeleri çok erken toplamak bu nedenle geçersiz sayılmalarına yol açabilir; çağrı metni yayımlandığında tarih şartını okuyun.',
        ],
        list: [
          'Hane kompozisyonu: e-Devlet’ten alınan nüfus kayıt örneği (aile bireylerini gösterir).',
          'Her çalışan aile üyesinin ilgili yıl gelirini gösteren resmi belgeler (vergi levhası, SGK hizmet dökümü, maaş bordrosu, emekli maaşı belgesi).',
          'Aileye ait taşınmazlar ve metrekareleri (tapu kayıtları) ya da taşınmaz olmadığını gösteren belge.',
          'Banka hesap bakiyeleri ve yatırımlar (belirli bir tarih itibarıyla).',
          'Belgelerin İtalyancaya tercümesi ve yasal geçerlilik onayı; bazı CAF’lar apostil ile yeminli tercümeyi kabul ederken bazıları İtalyan konsolosluğu onaylı tercüme ister.',
          'Pasaport ve varsa [codice fiscale](/bilgi-bankasi/codice-fiscale-nedir).',
        ],
      },
      {
        h: 'CAF süreci nasıl işler?',
        list: [
          'Üniversitenizin veya bölgesel kurumun anlaşmalı CAF listesini bulun; birçok üniversite belirli bir CAF’ın çevrim içi portalını kullanır.',
          'Portalda kayıt açın, belge listesini indirin ve belgeleri yükleyin. Bazı CAF’lar ücretsiz hizmet verirken bazıları küçük bir ücret alır.',
          'CAF belgeleri inceler, eksik varsa bildirir ve ISEE/ISPE parificato değerlerini hesaplar.',
          'Sonuç belgesiyle bölgesel kurumun portalında burs başvurusunu tamamlayın.',
          'Yerleştirme listelerini (graduatoria) takip edin; sonuç genellikle sonbaharda açıklanır.',
        ],
      },
      {
        h: 'Bursu korumak: akademik şartlar',
        p: [
          'İlk yıl burs gelir ölçütüne göre verilir; ancak bursun bir kısmının ödenmesi veya geri istenmemesi, belirli bir tarihe kadar asgari kredi (CFU) kazanmanıza bağlıdır. Sonraki yıllarda burs almaya devam etmek için her yıl belirli sayıda kredi tamamlamanız gerekir. Kredi şartını karşılamayan öğrencilerden ödenen tutarın iadesi istenebilir.',
          'Bütçenizi bursa bağlı kurmayın; sonuç Eylül–Kasım arasında netleşir. Sonuç gelene kadar kira ve yaşam masraflarını karşılayacak bir plan yapın. Ayrıntı için [bütçe planlama rehberimize](/bilgi-bankasi/yurtdisi-butce-planlama) ve [burs rehberimize](/bilgi-bankasi/yurtdisi-burs-rehberi) bakın.',
        ],
      },
      {
        h: 'Takvim: hangi işi ne zaman yapmalı?',
        p: [
          'Bu takvim yaygın uygulamayı gösterir; bazı bölgeler başvuruyu daha erken kapatır. Başvuru tarihleri, ISEE parificato sonucunu bekleyen öğrenciler için genellikle esnektir: bazı kurumlar önce burs başvurusunu, sonra ISEE belgesini yüklemeye izin verir.',
        ],
        table: {
          head: ['Dönem', 'Yapılacak'],
          rows: [
            ['Mart–Mayıs', 'Hedef üniversitenin bölgesini ve burs kurumunu belirleyin; geçen yılın çağrı metnini okuyun'],
            ['Mayıs–Haziran', 'Türkiye’de gelir, mülk ve nüfus belgelerini toplayın; tercüme ve onay planını yapın'],
            ['Haziran–Temmuz', 'CAF portalında ISEE parificato başvurusu; çağrı metni yayımlanınca tarih şartlarını kontrol edin'],
            ['Temmuz–Eylül', 'Bölgesel kurumun portalında burs ve yurt başvurusu'],
            ['Eylül–Kasım', 'Geçici ve kesin yerleştirme listeleri; yurt teslimi ve ilk taksit'],
          ],
        },
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'Bölgeyi karıştırmak: Burs üniversitenin bulunduğu bölgenin kurumundan alınır.',
          'Bir aile üyesinin gelirini atlamak; eksik beyan bursun iptaline ve iade talebine yol açabilir.',
          'Tercüme ve onay sürecini son haftaya bırakmak.',
          'Sadece bursa güvenerek mali yeterliliği eksik göstermek; vize için mali şart bursla karşılanmış sayılmaz, burs sonuçları vizeden sonra çıkar.',
        ],
      },
    ],
    seoTitle: 'İtalya DSU Bursu Nedir? ISEE Parificato Nasıl Alınır?',
    description: 'İtalya DSU bursu nedir, Türk öğrenciler ISEE parificato için hangi belgeleri hazırlar, CAF süreci nasıl işler ve bursu korumak için kredi şartları.',
    faqs: [
      { q: 'Türk öğrenciler İtalya’da DSU bursu alabilir mi?', a: 'Evet, DSU bursları AB dışı öğrencilere de açıktır. Ailenin Türkiye’deki gelir ve varlıkları ISEE parificato olarak belgelenir; kazanıp kazanmamanız bu değere ve bölgesel çağrıdaki eşiklere bağlıdır.' },
      { q: 'ISEE parificato nereden alınır?', a: 'ISEE parificato, üniversitenizin veya bölgesel kurumun anlaştığı CAF tarafından hesaplanır. Çoğu CAF çevrim içi portal kullanır; belgeleri yükler, eksikleri tamamlar ve sonuç belgesini alırsınız.' },
      { q: 'DSU bursu ne zaman açıklanır?', a: 'Başvurular genellikle yaz aylarında yapılır, yerleştirme listeleri ise çoğunlukla sonbaharda açıklanır. Takvim bölgeye göre değişir; her yıl yayımlanan çağrı metni kesin tarihleri verir.' },
      { q: 'DSU bursu geri istenebilir mi?', a: 'Evet. Belirli bir tarihe kadar asgari kredi şartını karşılamazsanız veya beyanınızda eksiklik bulunursa ödenen tutarın iadesi istenebilir. Kredi şartlarını ilk dönemden takip edin.' },
      { q: 'DSU bursu olan öğrenci harç öder mi?', a: 'Burs kazanan öğrenciler çoğu üniversitede yıllık katkı payından muaf tutulur. Ancak bazı üniversiteler AB dışı öğrencilere farklı harç kuralları uygulayabilir; kendi okulunuzun yönetmeliğini kontrol edin.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'campus-france-proseduru',
    title: 'Campus France prosedürü: Études en France adım adım',
    group: 'Başvuru',
    program: 'lisans',
    countries: ['fransa'],
    summary: 'Türkiye’den Fransa’da okumak isteyenlerin geçtiği Études en France dosyası, Campus France mülakatı, ücret ve vize sıralaması.',
    facts: [
      { label: 'Platform', value: 'Études en France (EEF), Campus France Türkiye yönetir' },
      { label: 'Prosedür ücreti', value: 'Her yıl duyurulur; 2025/26 belgelerinde 170 avro olarak yer aldı' },
      { label: 'Vize türü', value: 'VLS-TS étudiant (oturma izni yerine geçen uzun süreli vize)' },
      { label: 'Mali yeterlilik', value: 'Ayda en az 615 avro (AB göç portalı)' },
    ],
    sections: [
      {
        h: 'Campus France ve Études en France nedir?',
        p: [
          'Campus France, Fransa’nın yükseköğretimi tanıtan ve uluslararası öğrenci başvurularını yöneten resmi ajansıdır. Türkiye, “Études en France” (EEF) prosedürünün uygulandığı ülkeler arasındadır. Bu, Türkiye’de yaşayan bir öğrencinin Fransız devlet üniversitelerine başvurusunu ve uzun süreli öğrenci vizesi ön dosyasını aynı çevrim içi platform üzerinden yürütmesi anlamına gelir.',
          'EEF dosyası iki işlevi birleştirir: birçok programa başvuru kanalı olur ve vize için zorunlu “ön konsolosluk” değerlendirmesini sağlar. Doğrudan başvuru kabul eden özel okullara ya da grandes écoles’a kabul alsanız bile vize öncesinde EEF dosyasını “kabul aldım” seçeneğiyle açmanız ve Campus France mülakatına girmeniz gerekir.',
        ],
      },
      {
        h: 'Hangi başvuru hangi yoldan?',
        table: {
          head: ['Başvuru türü', 'Kanal', 'Not'],
          rows: [
            ['Lisans 1. sınıf (L1), devlet üniversitesi', 'EEF içinde DAP prosedürü', 'Takvim erken; genellikle aralık ortasında kapanır'],
            ['Lisans 2–3. sınıf, BUT, master', 'EEF üzerinden okul seçimi', 'Programa göre son tarihler farklı'],
            ['Mimarlık okulları', 'EEF içinde ayrı takvim', 'Portfolyo istenebilir'],
            ['Özel okullar, işletme okulları', 'Okulun kendi sistemi', 'Kabul sonrası EEF dosyası yine zorunlu'],
          ],
        },
      },
      {
        h: 'DAP: lisans 1. sınıf adayları için ayrı kurallar',
        p: [
          'Lisede son sınıfta olan ve Fransız devlet üniversitelerinde lisansın birinci yılına (L1) başlamak isteyen öğrenciler DAP (Demande d’Admission Préalable) prosedürüne tabidir. DAP dosyası da Études en France üzerinden açılır, ancak takvimi diğer başvurulardan çok daha erkendir: dosya genellikle sonbaharda açılır ve aralık ortası civarında kapanır. Kararlar ilkbaharda EEF hesabına düşer.',
          'Fransızca eğitim veren L1 programları için Fransızca seviyesi belirleyicidir. DELF B2 veya üzerine sahip olmayan adaylar genellikle TCF DAP sınavına girer; sınav takvimi DAP takvimiyle uyumlu olacak şekilde Türkiye’de belirli merkezlerde duyurulur. DAP’ta birden fazla üniversite seçilebilir; seçimlerin şehir ve program açısından gerçekçi olması kabul ihtimalini artırır.',
        ],
      },
      {
        h: 'Adım adım EEF süreci',
        list: [
          'Campus France Türkiye sitesinden EEF hesabı açın; kişisel bilgilerinizi pasaportla aynı yazın.',
          'Eğitim geçmişinizi, transkriptlerinizi ve diplomanızı yükleyin. Türkçe belgeler için Fransızca ya da programın diline uygun tercüme gerekir; ayrıntı için [apostil ve yeminli tercüme rehberimize](/bilgi-bankasi/apostil-ve-yeminli-tercume) bakın.',
          'Dil belgesini ekleyin: Fransızca programlar için DELF/DALF ya da TCF; İngilizce programlar için IELTS veya TOEFL.',
          'Motivasyon mektuplarını ve CV’yi programa göre hazırlayın. [Motivasyon mektubu rehberimiz](/bilgi-bankasi/motivasyon-mektubu-nasil-yazilir) ve [örnek CV](/kaynaklar/ornek-cv) yardımcı olur.',
          'Program seçimlerinizi yapın, dosyayı Campus France’a gönderin ve prosedür ücretini Campus France’ın duyurduğu hesaba yatırın.',
          'Campus France mülakatına (entretien) katılın. Mülakatta proje tutarlılığınız, bütçeniz ve dil seviyeniz konuşulur.',
          'Okullardan gelen cevapları EEF üzerinden takip edin ve kabulü kesinleştirin (“je m’inscris” adımı).',
          'France-Visas portalında vize başvurusunu tamamlayın ve vize merkezinde biyometri randevusuna gidin.',
        ],
      },
      {
        h: 'Campus France mülakatına hazırlık',
        list: [
          'Neden Fransa, neden bu program ve sonrası için planınızı iki üç cümleyle net anlatabilin.',
          'Seçtiğiniz programlar arasında mantıklı bir çizgi olsun; birbirinden ilgisiz alanlar soru işareti yaratır.',
          'Bütçenizi rakamlarla bilin: kira, yaşam masrafı ve harç. Fransa için kabul edilen asgari kaynak ayda 615 avrodur.',
          'Not ortalamasındaki düşüşleri veya ara yılları dürüstçe açıklayın.',
          'Fransızca program seçtiyseniz mülakatın bir kısmı Fransızca olabilir.',
        ],
      },
      {
        h: 'Vize ve varış sonrası',
        p: [
          'Kabulü kesinleştirdikten sonra France-Visas portalında VLS-TS étudiant vizesine başvurursunuz. Bu vize, ilk yıl için oturma izni yerine geçer; ancak Fransa’ya varıştan sonra en geç üç ay içinde çevrim içi olarak doğrulanması (validation) gerekir. Doğrulama sırasında bir harç ödenir; tutarı başvuru döneminde resmi sitede kontrol edin.',
          'VLS-TS ile yılda 964 saate kadar çalışabilirsiniz. Konaklama tarafında Fransa’da 1 Temmuz 2026’dan itibaren AB dışı öğrencilerin konut yardımı hakkı daraltıldı; bütçenizi bu değişikliğe göre kurun. Ayrıntılar için [ülke sayfamıza](/ulkeler/fransa) ve [konaklama seçenekleri](/bilgi-bankasi/konaklama-secenekleri) rehberine bakın.',
        ],
      },
      {
        h: 'Fransa’ya gitmeden önce bütçe hesabı',
        p: [
          'Bütçe tablonuzu Campus France mülakatına da götürün; rakamlarla konuşmak mülakatın en güçlü kısmı olur. Fransa’daki lisans seçenekleri için [Fransa lisans programları](/lisans-programlari/fransa) sayfamıza bakabilirsiniz.',
          '**Prosedür ücreti ve diğer masraflar:** Campus France Türkiye prosedür ücretini her başvuru dönemi için ayrıca duyurur. 2025/26 dönemine ait mimarlık başvuru belgesinde ücret 170 avro olarak yer aldı; yeni dönemde tutar değişebilir. Ödeme, duyuruda belirtilen avro hesabına ve son tarihe kadar yapılmalıdır; ödemesi yapılmayan dosya değerlendirmeye alınmaz.',
          'Bunun dışında tercüme, dil sınavı, vize harcı ve Fransa’ya vardıktan sonra VLS-TS doğrulaması için çevrim içi ödenen harç bulunur. Fransa’da ilk yıl ayrıca [CVEC katkı payı](/bilgi-bankasi/cvec-caf-nedir) ödenir.',
        ],
        table: {
          head: ['Kalem', 'Not'],
          rows: [
            ['Devlet üniversitesi harcı (AB dışı)', 'Lisans ve master için farklı tutarlar; bazı üniversiteler indirim uygular'],
            ['CVEC', '2026/27 için 105 avro'],
            ['Yaşam masrafı', 'Vize için asgari ayda 615 avro; Paris’te gerçek masraf belirgin şekilde yüksektir'],
            ['Kira yardımı', 'AB dışı burssuz öğrenciler için 1 Temmuz 2026’dan itibaren kısıtlı'],
            ['Sağlık', 'Öğrenciler Fransız sosyal güvenlik sistemine kayıt olur; tamamlayıcı sigorta önerilir'],
          ],
        },
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'Ödeme son tarihini kaçırmak; dosya teknik olarak tamamlanmış olsa bile işleme alınmaz.',
          'DAP takvimini lisans 2–3 takvimiyle karıştırmak; L1 başvuruları çok daha erken kapanır.',
          'Kabul aldığı okulu EEF’de kesinleştirmeden vize randevusu almak.',
          'Mülakatta ezber bir konuşma yapmak; görüşmeci tutarlılığa bakar.',
        ],
      },
    ],
    seoTitle: 'Campus France Prosedürü: Études en France Adım Adım',
    description: 'Türkiye’den Fransa’ya başvuruda Études en France dosyası, Campus France mülakatı, prosedür ücreti, DAP takvimi ve VLS-TS vize sıralaması anlatılıyor.',
    faqs: [
      { q: 'Campus France prosedürü zorunlu mu?', a: 'Türkiye’de yaşayan ve Fransa’da uzun süreli eğitim için öğrenci vizesi alacak adaylar için Études en France prosedürü zorunludur. Kabulü doğrudan okuldan almış olsanız bile vize öncesi bu dosyayı tamamlamanız gerekir.' },
      { q: 'Campus France ücreti ne kadar?', a: 'Ücret her başvuru dönemi için Campus France Türkiye tarafından duyurulur. 2025/26 dönemine ait belgelerde 170 avro olarak yer aldı; yeni dönem tutarını resmi duyurudan kontrol edin.' },
      { q: 'Campus France mülakatında ne sorulur?', a: 'Genellikle eğitim projeniz, program seçimlerinizin mantığı, bütçeniz ve mezuniyet sonrası planınız sorulur. Fransızca program seçtiyseniz dil seviyeniz de görüşme sırasında gözlemlenebilir.' },
      { q: 'Fransa öğrenci vizesi için ne kadar para göstermek gerekir?', a: 'Fransa’da öğrenciler için kabul edilen asgari kaynak ayda 615 avrodur. Banka hesabı, sponsor belgesi veya burs belgesiyle bu tutarın tüm eğitim yılı için karşılanabildiğini göstermeniz beklenir.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'cvec-caf-nedir',
    title: 'CVEC ve CAF nedir? Fransa’da öğrenci katkı payı ve konut yardımı',
    group: 'Yaşam',
    countries: ['fransa'],
    summary: 'Fransa’da kayıt öncesi ödenen CVEC katkı payı (2026/27: 105 avro) ve CAF konut yardımında 1 Temmuz 2026 değişikliği.',
    facts: [
      { label: 'CVEC 2026/27', value: '105 avro, yılda bir kez' },
      { label: 'Nerede ödenir?', value: 'messervices.etudiant.gouv.fr (CVEC sertifikası alınır)' },
      { label: 'CAF konut yardımı (APL/ALS)', value: '1 Temmuz 2026’dan itibaren AB dışı, burssuz öğrenciler için kısıtlandı' },
      { label: 'İstisnalar', value: 'CROUS sosyal kriterli bursiyerler, çalışan öğrenciler, mülteciler' },
    ],
    sections: [
      {
        h: 'CVEC nedir?',
        p: [
          'CVEC (Contribution de Vie Étudiante et de Campus), Fransa’da yükseköğretime kaydolan öğrencilerin her akademik yıl başında ödediği yasal katkı payıdır. Toplanan tutar kampüs sağlık hizmetleri, kültür ve spor etkinlikleri ile öğrenci destek programlarına aktarılır. 2026/27 akademik yılı için tutar **105 avrodur** ve enflasyona bağlı olarak her yıl güncellenebilir.',
          'CVEC bir okul harcı değildir; harçtan ayrı ödenir. Üniversite kesin kaydı sırasında sizden CVEC sertifikası istenir. Bu nedenle kayıt gününden önce ödemeyi tamamlamış olmanız gerekir.',
          'CVEC ödemesi şehir bazında kaydedilir; kayıt olacağınız kurumun bulunduğu şehri yanlış seçerseniz sertifika yine geçerli olabilir, ancak bazı kurumlar düzeltme isteyebilir. Aynı yıl içinde okul değiştiren öğrenci ikinci kez ödeme yapmaz; mevcut sertifikası geçerlidir.',
        ],
      },
      {
        h: 'CVEC kimler öder, kimler muaf?',
        p: [
          'Muaf olsanız bile çoğu okul muafiyet sertifikası ister. Sertifika aynı portaldan, ödeme yapmadan alınır.',
        ],
        table: {
          head: ['Durum', 'CVEC'],
          rows: [
            ['Lisans, master veya doktoraya kaydolan uluslararası öğrenci', 'Öder'],
            ['CROUS sosyal kriterli bursiyer', 'Muaf; yine de muafiyet sertifikası alınır'],
            ['Fransız hükümeti bursiyeri', 'Genellikle muaf'],
            ['Erasmus gibi değişim programıyla gelen öğrenci', 'Muaf; sertifika gerekebilir'],
            ['Mülteci veya geçici koruma statüsündeki öğrenci', 'Muaf'],
          ],
        },
      },
      {
        h: 'CVEC nasıl ödenir?',
        list: [
          'messervices.etudiant.gouv.fr adresinde hesap açın.',
          'Kayıt olacağınız şehri ve akademik yılı seçin.',
          'Banka kartıyla 105 avroyu ödeyin.',
          'CVEC sertifikasını PDF olarak indirin; üzerindeki numara kayıt sisteminde istenir.',
          'Yanlışlıkla iki kez öderseniz veya sonradan muafiyet hakkı doğarsa portal üzerinden iade talep edebilirsiniz.',
        ],
      },
      {
        h: 'CAF ve konut yardımı (APL/ALS) nedir?',
        p: [
          'CAF (Caisse d’Allocations Familiales), Fransa’da aile ve konut yardımlarını yöneten kurumdur. Öğrencilerin en çok bildiği hizmet APL veya ALS adlı kira yardımıdır. Yardım, kiranın bir kısmını karşılar ve doğrudan ev sahibine ya da öğrenciye ödenir. Tutar kira, şehir ve gelire göre hesaplanır.',
          '**Önemli değişiklik:** 2026 Maliye Kanunu kapsamında 28 Haziran 2026’da yayımlanan kararname ile **1 Temmuz 2026’dan itibaren** AB, AEA ve İsviçre dışından gelen ve CROUS sosyal kriterli bursu olmayan öğrenciler konut yardımı alamıyor. Türk öğrenciler bu gruba girer. Mülteciler, vatansızlar ve AB dışı öğrencilerin eşleri yardım almaya devam ediyor; çalışan ya da çıraklık sözleşmesiyle okuyan öğrenciler ise koşullara bağlı olarak yararlanabiliyor. Bu nedenle daha önce yazılmış rehberlerdeki “CAF kiranızın önemli bir kısmını öder” bilgisi artık Türk öğrencilerin çoğu için geçerli değil.',
        ],
      },
      {
        h: 'Türk öğrenciler için konut yardımı durumu',
        p: [
          'Çalışan öğrenciler için asgari saat ya da gelir koşulu resmi duyuruda ayrıntılı verilmedi; başvurmadan önce caf.fr simülatörünü ve okulunuzun öğrenci ofisini kontrol edin.',
          '**CROUS bursu Türk öğrenciler için mümkün mü:** Yeni kuralda konut yardımına erişimin anahtarı, CROUS’un sosyal kriterlere göre verdiği burstur. Bu burs genellikle Fransız vatandaşlarına, AB vatandaşlarına ve Fransa’da belirli bir süredir yasal olarak yaşayan, mali olarak Fransa’ya bağlı ailelerin çocuklarına yöneliktir. Türkiye’den eğitim için yeni gelen bir öğrencinin bu bursa uygun olması pek olası değildir. Fransız hükümeti bursları veya Fransız Büyükelçiliği bursları ise ayrı programlardır; bunlar CVEC muafiyeti sağlayabilir. Genel burs seçenekleri için [burs rehberimize](/bilgi-bankasi/yurtdisi-burs-rehberi), Fransa başvurusunun bütün süreci için [Campus France prosedürü](/bilgi-bankasi/campus-france-proseduru) sayfamıza bakın.',
        ],
        table: {
          head: ['Öğrenci profili', 'APL/ALS hakkı (1 Temmuz 2026 sonrası)'],
          rows: [
            ['AB dışı, burssuz öğrenci', 'Yok'],
            ['CROUS sosyal kriterli bursiyer', 'Var (uygunluk ayrıca değerlendirilir)'],
            ['Çalışan öğrenci veya çıraklık (alternance) sözleşmesi olan', 'Koşullara bağlı olarak olabilir'],
            ['AB vatandaşlığı da olan çift vatandaş', 'AB vatandaşı olarak başvurabilir'],
          ],
        },
      },
      {
        h: 'Bütçeye etkisi ve alternatifler',
        list: [
          'Kira hesabını yardımsız yapın; Paris ve büyük şehirlerde bu fark aylık bütçeyi belirgin şekilde değiştirir.',
          'CROUS yurtları genellikle piyasa kirasının altındadır; uluslararası öğrencilere de kontenjan ayrılabilir, ancak yerler sınırlıdır.',
          'Alternance (iş ve okul birlikte) programları hem maaş hem de yardım hakkı açısından değerlendirilebilir.',
          'Kefil (garant) gereksinimi için devlet destekli Visale sistemi bazı öğrencilere açıktır; uygunluğu kontrol edin.',
          'Genel planlama için [bütçe rehberimize](/bilgi-bankasi/yurtdisi-butce-planlama) ve [öğrenci konaklama](/ogrenci-konaklama) sayfamıza bakın.',
        ],
      },
      {
        h: 'Fransa’ya varışta ilk ay kontrol listesi',
        p: [
          'CVEC ve konut işleri, Fransa’ya varıştan sonraki ilk haftalarda yapılacak diğer işlemlerle iç içedir. VLS-TS vizenizin çevrim içi doğrulaması üç ay içinde yapılmalı, Fransız banka hesabı açılmalı, sosyal güvenlik sistemine (Assurance Maladie) kayıt tamamlanmalı ve kira sözleşmesi imzalanmalıdır. Banka hesabı olmadan kira ödemek ve ev sigortası (assurance habitation) yaptırmak zorlaşır; kira sözleşmesi olmadan da banka hesabı açmak bazı bankalarda güçtür. Bu döngüyü kırmak için ilk ayları CROUS yurdunda veya öğrenci rezidansında geçirmek pratik bir çözümdür.',
        ],
        list: [
          'Kayıttan önce: CVEC sertifikası',
          'İlk hafta: Banka hesabı, telefon hattı, ev sigortası',
          'İlk ay: Üniversite kesin kaydı ve öğrenci kartı',
          'İlk üç ay: VLS-TS çevrim içi doğrulaması',
          'Kayıt sonrası: Sosyal güvenlik kaydı ve tamamlayıcı sağlık sigortası (mutuelle)',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'CVEC’i kayıt gününe bırakmak; bazı okullar sertifika olmadan kayıt ekranını açmaz.',
          'CVEC ile okul harcını aynı şey sanmak.',
          'Eski rehberlere dayanarak CAF yardımını bütçeye gelir olarak yazmak.',
          'Muaf olduğu halde sertifika almamak.',
        ],
      },
    ],
    seoTitle: 'CVEC ve CAF Nedir? Fransa Öğrenci Katkı Payı Rehberi',
    description: 'Fransa’da CVEC katkı payı 2026/27 için 105 avro: kimler öder, nasıl ödenir? CAF konut yardımında 1 Temmuz 2026 değişikliği Türk öğrencileri nasıl etkiler?',
    faqs: [
      { q: 'CVEC ücreti ne kadar?', a: 'CVEC 2026/27 akademik yılı için 105 avrodur. Tutar her yıl enflasyona göre güncellenebilir ve yılda bir kez, üniversite kaydından önce ödenir.' },
      { q: 'Erasmus öğrencileri CVEC öder mi?', a: 'Hayır, değişim programlarıyla Fransa’ya gelen öğrenciler CVEC’ten muaftır. Yine de bazı kurumlar portal üzerinden alınan muafiyet sertifikasını isteyebilir.' },
      { q: 'Türk öğrenciler CAF kira yardımı alabilir mi?', a: '1 Temmuz 2026’dan itibaren AB dışından gelen ve CROUS sosyal kriterli bursu olmayan öğrenciler APL/ALS alamıyor. Çalışan ya da çıraklık sözleşmesi olan öğrenciler koşullara bağlı olarak yararlanabilir; güncel kuralları caf.fr’de kontrol edin.' },
      { q: 'CVEC iade edilir mi?', a: 'Yanlışlıkla ödeme yaptıysanız, kaydınızı yapmadıysanız veya sonradan bursiyer olduysanız portal üzerinden iade talep edebilirsiniz. İade koşulları ve son tarihler portalda yayımlanır.' },
      { q: 'CVEC ödemeden üniversiteye kayıt olunur mu?', a: 'Hayır. Fransız yükseköğretim kurumları kesin kayıt sırasında CVEC sertifikası ister; muaf öğrenciler de muafiyet sertifikasını sunar. Sertifikayı kayıt gününden önce portaldan almak gerekir.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'nostrifikasyon-nedir',
    title: 'Nostrifikasyon nedir? Çekya, Polonya, Macaristan ve Slovakya’da diploma tanıma',
    group: 'Vize & Belgeler',
    program: 'lisans',
    countries: ['cekya', 'polonya', 'macaristan'],
    summary: 'Orta Avrupa’da Türk lise ve üniversite diplomasının resmi olarak tanınması: ülke ülke nostrifikasyon kuralları, belgeler ve süreler.',
    facts: [
      { label: 'Anlamı', value: 'Yabancı diplomanın yerel diplomaya eşdeğer sayılması işlemi' },
      { label: 'Çekya (lise)', value: 'Krajský úřad (bölge valiliği eğitim birimi) veya üniversitenin kendi değerlendirmesi' },
      { label: 'Polonya (lise)', value: 'OECD ülkesi diploması olduğu için çoğu durumda kanunen tanınır' },
      { label: 'Ön koşul', value: 'Apostilli diploma ve yerel dile yeminli tercüme' },
    ],
    sections: [
      {
        h: 'Nostrifikasyon ne demek?',
        p: [
          'Nostrifikasyon (Çekçe nostrifikace, Slovakça nostrifikácia), yabancı bir ülkede alınmış diplomanın yerel eğitim sistemindeki karşılığına eşdeğer olduğunun resmi kararla tanınmasıdır. Terim özellikle Çekya ve Slovakya’da yaygındır. Polonya ve Macaristan’da ise benzer işlem “tanıma” (uznanie, elismerés) olarak adlandırılır ve kurallar farklıdır.',
          'Türk öğrenci için iki ayrı tanıma sorusu vardır: lise diplomasının lisans programına giriş için tanınması ve lisans diplomasının yüksek lisans girişi ya da meslek icrası için tanınması. Bu rehber önce giriş aşamasına odaklanır. Türkiye’ye dönüşte yurt dışı diplomanın tanınması ise ayrı bir süreçtir; onun için [YÖK denklik rehberimize](/bilgi-bankasi/yok-denkligi) bakın.',
        ],
      },
      {
        h: 'Ülkelere göre karşılaştırma',
        p: [
          'Bu tablo genel çerçevedir. Program, üniversite ve yıl bazında farklılıklar olabileceği için kabul mektubundaki şartlar her zaman esas alınmalıdır.',
        ],
        table: {
          head: ['Ülke', 'Lise diploması (lisans girişi)', 'Kim karar verir?'],
          rows: [
            ['Çekya', 'Nostrifikasyon veya üniversitenin kabul sürecindeki kendi değerlendirmesi', 'Krajský úřad / devlet üniversitesi'],
            ['Polonya', 'OECD, AB ve EFTA ülkesi diplomaları, o ülkede üniversiteye giriş hakkı veriyorsa kanunen tanınır', 'Gerekirse üniversite ve NAWA'],
            ['Macaristan', 'Ayrı bir nostrifikasyon genellikle istenmez; üniversite kabulde değerlendirir', 'Üniversite; resmi tanıma için Oktatási Hivatal'],
            ['Slovakya', 'Nostrifikasyon gerekebilir', 'Bölge eğitim birimi veya üniversite'],
          ],
        },
      },
      {
        h: 'Çekya: en ayrıntılı süreç',
        p: [
          'Çekya’da Türkiye ile diploma eşdeğerliği konusunda ikili bir anlaşma bulunmadığından, Türk lise diploması Çekçe programlara kayıt için genellikle nostrifikasyon gerektirir. Başvuru, Çekya’da ikamet edeceğiniz bölgenin valiliğine bağlı eğitim birimine (krajský úřad, odbor školství) yapılır. Prag için bu birim Prag Belediyesi’dir (Magistrát hl. m. Prahy).',
          'Gerekli belgeler genellikle apostilli diploma, son yıllara ait apostilli transkript, alınan derslerin kapsamını gösteren belge (müfredat veya ders saatleri) ve hepsinin Çekçeye yeminli tercümesidir. Müfredat Çek sisteminden belirgin şekilde farklıysa bölge birimi bir **nostrifikasyon sınavı** (genellikle Çek dili, edebiyat, tarih veya alan dersleri) isteyebilir. Başvuru harcı birimden birime değişebilir; güncel tutarı ilgili birimden teyit edin.',
          'Alternatif yol: Çek devlet üniversiteleri, kabul süreci kapsamında yabancı lise diplomasını kendileri de değerlendirebilir. Bu değerlendirme yalnızca o üniversiteye kayıt için geçerlidir ve ücretli olabilir. İngilizce programların çoğu bu yolu kullanır. Çekya’daki üniversiteler için [Çekya üniversiteleri](/cekya-universiteleri) sayfamıza bakın.',
        ],
      },
      {
        h: 'Polonya: kanunen tanıma ve 2025 değişiklikleri',
        p: [
          'Polonya mevzuatı, AB, OECD ve EFTA ülkelerinde o ülkenin eğitim sistemi içinde verilen ve orada yükseköğretime giriş hakkı sağlayan lise diplomalarını kanunen tanır. Türkiye OECD üyesi olduğu için Türk lise diploması bu kapsama girer; ayrıca bir tanıma kararı gerekmez, ancak apostil ve Lehçe ya da İngilizce yeminli tercüme istenir.',
          'Temmuz 2025’te yürürlüğe giren düzenlemelerle Polonya üniversiteleri yabancı adaylar için eğitim dilinde en az B2 seviyesinde dil belgesi aramaya başladı. Vize ve kabul tarafındaki ayrıntılar için [Polonya öğrenci vizesi](/bilgi-bankasi/polonya-ogrenci-vizesi) rehberimize bakın.',
        ],
      },
      {
        h: 'Macaristan ve Slovakya',
        p: [
          'Macaristan’da İngilizce programlara başvuran öğrencilerden genellikle ayrı bir nostrifikasyon istenmez; üniversite diplomanızı kabul sürecinde kendisi değerlendirir. Diplomanızın Macaristan’da resmi olarak tanınması gerekiyorsa (örneğin bazı meslekler veya devlet işlemleri), yetkili kurum Oktatási Hivatal (Eğitim Kurumu) bünyesindeki tanıma merkezidir. Ülke hakkında daha fazlası için [Macaristan sayfamıza](/ulkeler/macaristan) bakın.',
          'Slovakya’da yabancı lise diplomasının tanınması için bölge düzeyindeki eğitim birimlerine başvurulur; bazı üniversiteler kabulü tanıma kararını sonradan sunma şartıyla verir. Slovakya’da tıp okumayı düşünen öğrenciler kayıt tarihinden önce tanıma takvimini netleştirmelidir.',
        ],
      },
      {
        h: 'Yüksek lisans adayları: lisans diplomasının tanınması',
        p: [
          'Türkiye’de lisans mezunu olup Çekya, Polonya veya Macaristan’da yüksek lisans yapmak isteyenler için tablo farklıdır. Çekya’da yükseköğretim diplomasının tanınması devlet üniversiteleri tarafından yapılır; ancak İngilizce yüksek lisans programlarının büyük kısmı başvuru sırasında diplomayı kendisi değerlendirir ve ayrı bir tanıma kararı istemez. Polonya’da yabancı yükseköğretim diplomaları ikili anlaşma veya tanıma prosedürüyle değerlendirilir; Bologna sürecine dahil bir ülkeden alınan lisans diploması pratikte çoğu yüksek lisans programına başvuru için yeterli kabul edilir. Macaristan’da ise kabul kararını üniversite verir.',
          'Diploma Eki (Diploma Supplement) bu aşamada büyük kolaylık sağlar. Türk üniversitelerinin çoğu İngilizce Diploma Eki düzenler; belgede programın kredisi (AKTS), süresi ve seviyesi yazdığından değerlendirme hızlanır. Diploma Eki’ni mezuniyet sırasında almadıysanız üniversitenizin öğrenci işlerinden talep edin.',
          '**Tıp ve diş hekimliği öğrencileri için not:** Orta Avrupa’da İngilizce tıp eğitimi alan Türk öğrenciler için asıl kritik tanıma, mezuniyetten sonra Türkiye’de yapılır. Mezuniyet sonrası YÖK denkliği ve gerekirse seviye tespit sınavı süreçlerini baştan bilin; seçim yapmadan önce [Avrupa’da tıp eğitimi rehberimizi](/bilgi-bankasi/avrupada-tip-egitimi) okuyun.',
        ],
      },
      {
        h: 'Belgeleri hazırlama sırası',
        list: [
          'Diplomanın ve transkriptin aslını veya noter onaylı suretini alın.',
          'Kaymakamlık veya valilikten apostil şerhi aldırın; ayrıntı için [apostil rehberimize](/bilgi-bankasi/apostil-ve-yeminli-tercume) bakın.',
          'Hedef ülkenin diline yeminli tercüme yaptırın; Çekya bazı durumlarda Çekya’daki yeminli tercümanın çevirisini tercih eder.',
          'Müfredat belgesini (okulun onaylı ders listesi ve haftalık saatleri) okul müdürlüğünden alın.',
          'Başvuruyu son kayıt tarihinden en az iki üç ay önce yapın; nostrifikasyon kararı ve olası sınav zaman alır.',
        ],
      },
      {
        h: 'Kayıt günü için kontrol listesi',
        p: [
          'Bu belgelerin tamamı vize sürecinde de istenebilir. Polonya ve Çekya’daki seçenekler için [Polonya lisans programları](/lisans-programlari/polonya) ve [Çekya lisans programları](/lisans-programlari/cekya) sayfalarımıza bakabilirsiniz.',
        ],
        list: [
          'Apostilli diploma ve transkriptin asılları',
          'Yeminli tercümeler (hedef ülkenin dilinde veya kabul edilen dilde)',
          'Nostrifikasyon kararı veya üniversitenin tanıma yazısı (gerekiyorsa)',
          'Pasaport ve vize veya oturma izni',
          'Dil belgesi ve kabul mektubu',
        ],
      },
    ],
    seoTitle: 'Nostrifikasyon Nedir? Çekya ve Polonya Diploma Tanıma',
    description: 'Nostrifikasyon nedir? Çekya, Polonya, Macaristan ve Slovakya’da Türk lise diplomasının tanınması, gerekli belgeler, sınav ihtimali ve doğru sıralama.',
    faqs: [
      { q: 'Çekya’da İngilizce programlar için nostrifikasyon gerekir mi?', a: 'Çoğu İngilizce programda üniversite, yabancı lise diplomasını kabul süreci içinde kendisi değerlendirir; ayrıca bölge birimine nostrifikasyon başvurusu gerekmeyebilir. Çekçe programlarda ise nostrifikasyon genellikle zorunludur.' },
      { q: 'Nostrifikasyon sınavı nedir?', a: 'Çekya’da bölge eğitim birimi, Türk müfredatının Çek müfredatından belirgin şekilde farklı olduğunu düşünürse belirli derslerden sınav isteyebilir. Sınav konuları kararda belirtilir ve sınav Çekçe yapılır.' },
      { q: 'Polonya’da Türk lise diploması tanınıyor mu?', a: 'Polonya, OECD ülkelerinde verilen ve o ülkede üniversiteye giriş hakkı sağlayan lise diplomalarını kanunen tanır; Türkiye OECD üyesidir. Yine de apostil ve yeminli tercüme istenir.' },
      { q: 'Nostrifikasyon ne kadar sürer?', a: 'Çekya’da bölge birimleri kararı genellikle yasal süre içinde verir, ancak eksik belge veya sınav gerekirse süre birkaç aya uzayabilir. Bu nedenle başvuruyu kayıt tarihinden aylar önce yapmak gerekir.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'polonya-ogrenci-vizesi',
    title: 'Polonya öğrenci vizesi (D tipi ulusal vize) rehberi',
    group: 'Vize & Belgeler',
    program: 'lisans',
    countries: ['polonya'],
    summary: 'Türkiye’den Polonya’ya D tipi öğrenci vizesi: e-Konsulat başvurusu, VFS randevusu, 2025 sonrası B2 dil şartı ve varışta oturma izni.',
    facts: [
      { label: 'Vize türü', value: 'D tipi ulusal vize, amaç: eğitim' },
      { label: 'Başvuru', value: 'e-Konsulat formu, ardından Türkiye’deki VFS Global merkezi' },
      { label: 'Dil şartı (2025 sonrası)', value: 'Eğitim dilinde en az B2 seviyesinde belge' },
      { label: 'Vize süresi', value: 'Genellikle en fazla 1 yıl; sonrasında geçici oturma izni' },
    ],
    sections: [
      {
        h: 'Polonya’da okumak için hangi vize?',
        p: [
          'Polonya’da lisans, yüksek lisans veya doktora eğitimi alacak Türk öğrenciler “eğitim” amaçlı D tipi ulusal vizeye başvurur. Bu vize Polonya’da uzun süre kalmanızı sağlar ve geçerlilik süresi boyunca diğer Schengen ülkelerinde de sınırlı süreli seyahat imkânı verir. D tipi vize genellikle en fazla bir yıl için verildiği için, çok yıllı programlarda Polonya’da geçici oturma iznine (karta pobytu) geçiş yapılır.',
          'Polonya 2025 yılında vize sistemindeki usulsüzlükleri gidermek amacıyla yabancı öğrenci kabulüne ilişkin kuralları sıkılaştırdı. Bu nedenle 2024 öncesine ait rehberlerdeki bilgiler bugün eksik kalabilir.',
        ],
      },
      {
        h: '2025 değişiklikleri: neler değişti?',
        list: [
          '4 Nisan 2025 tarihli kanunla getirilen kuralların büyük kısmı 1 Temmuz 2025’te yürürlüğe girdi.',
          'Üniversiteler, yabancı adaylardan eğitim dilinde en az B2 seviyesinde dil yeterliliği belgesi istemeye başladı. Kabul edilen sertifikalar Bilim ve Yükseköğretim Bakanlığı yönetmeliğiyle belirlendi; Cambridge B2 First ve C1 Advanced listede yer alıyor. IELTS ve TOEFL’ın üniversitelerde kabulünü programdan teyit edin; Duolingo’nun bazı okullarda artık kabul edilmeyeceği bildiriliyor.',
          'AB, OECD ve EFTA dışından diploması olan lisans adayları için giriş sınavı istenebiliyor; Türkiye OECD üyesi olduğundan Türk lise diploması bu açıdan avantajlıdır.',
          'Bazı kaynaklar, bir kurumda yabancı öğrenci oranının sınırlandırıldığını bildiriyor; bu kontenjan kabul sürecini dolaylı olarak etkileyebilir.',
        ],
      },
      {
        h: 'Kabul belgesinden vizeye zaman çizelgesi',
        p: [
          'Polonya üniversitelerinin uluslararası başvuruları genellikle yaz başına kadar sürer, ancak vize sürecini düşünen okullar AB dışı adaylar için daha erken son tarih koyar. Kabul belgesini haziranda almak, randevu ve olası ek belge talepleri için rahat bir pay bırakır. Ağustos sonuna kalan başvurular ekim başlangıcını kaçırma riski taşır.',
        ],
        table: {
          head: ['Dönem', 'Adım'],
          rows: [
            ['Şubat–Mayıs', 'Üniversite başvuruları; B2 dil belgesinin hazır olması'],
            ['Mayıs–Temmuz', 'Kabul belgesi ve ilk dönem harcının ödenmesi'],
            ['Haziran–Ağustos', 'e-Konsulat formu, VFS randevusu ve vize başvurusu'],
            ['Ağustos–Eylül', 'Vize kararı, konaklama ve yolculuk'],
            ['Ekim', 'Akademik yılın başlangıcı; Polonya’da akademik yıl genellikle 1 Ekim’de açılır'],
          ],
        },
      },
      {
        h: 'Başvuru adımları',
        list: [
          'Üniversiteden kabul belgesi (zaświadczenie o przyjęciu na studia) alın; belge eğitim süresini ve dilini göstermelidir.',
          'e-Konsulat sisteminde ulusal vize formunu doldurun, çıktısını alıp imzalayın.',
          'Türkiye’deki başvurular için randevu e-Konsulat üzerinden alınır ve dosya VFS Global merkezine şahsen teslim edilir; aile üyeleri gibi istisnalar dışında konsolosluğa doğrudan başvuru kabul edilmiyor.',
          'Biyometrik fotoğraf (3,5 x 4,5 cm, son altı ayda çekilmiş) ve pasaport hazırlayın. Pasaport on yıldan eski olmamalı, vize bitişinden sonra en az üç ay geçerli olmalı ve en az iki boş sayfası bulunmalıdır.',
          'Mali yeterlilik belgesini ekleyin.',
          'Polonya’da geçerli sağlık sigortası yaptırın.',
          'Harç dekontu, konaklama bilgisi ve gerekirse eğitim ücretinin ödendiğini gösteren belgeyi dosyaya koyun.',
        ],
      },
      {
        h: 'Belgeler ve mali yeterlilik',
        p: [
          'Mali yeterlilik tutarı 2018 tarihli bir yönetmeliğe dayanır ve güncellenebilir; pratikte konsolosluklar sadece asgari tutarı değil, eğitim ücretini ve yaşam masraflarını karşılayabileceğinizi gösteren tutarlı bir dosya bekler. Belge örnekleri için [banka mektubu](/kaynaklar/ornek-banka-mektubu) ve [sponsor mektubu](/kaynaklar/ornek-sponsor-mektubu) şablonlarımıza bakabilirsiniz.',
        ],
        table: {
          head: ['Belge', 'Not'],
          rows: [
            ['e-Konsulat formu', 'İmzalı çıktı'],
            ['Kabul belgesi', 'Üniversiteden, eğitim dili ve süresiyle'],
            ['Mali yeterlilik', 'VFS kontrol listesinde tek kişi için aylık en az 701 PLN; ayrıca dönüş masrafı'],
            ['Sağlık sigortası', 'Polonya’da geçerli, tüm kalış süresini kapsayan'],
            ['Dil belgesi', 'Eğitim dilinde en az B2'],
            ['Apostilli diploma', 'Lehçe veya İngilizce yeminli tercümeyle'],
          ],
        },
      },
      {
        h: 'Varış sonrası: geçici oturma izni',
        p: [
          'Eğitiminiz bir yıldan uzun sürüyorsa, vizenizin süresi bitmeden önce ikamet ettiğiniz voyvodalık ofisine (urząd wojewódzki) geçici oturma izni başvurusu yapmanız gerekir. Başvuru vizenin geçerlilik süresi içinde yapıldığında, karar beklenirken yasal kalışınız devam eder. Bu ofislerde bekleme süreleri uzun olabildiği için başvuruyu son haftalara bırakmayın.',
          'Öğrenci olarak Polonya’da tam zamanlı eğitim süresince belirli koşullarla çalışma izni almadan çalışabilirsiniz; koşulları üniversitenizin uluslararası ofisinden teyit edin. Ülke genel bilgileri için [Polonya sayfamıza](/ulkeler/polonya) bakın.',
          'Geçici oturma izni başvurusunda kabul belgesinin yerini üniversiteden alınan öğrenci belgesi (zaświadczenie o studiowaniu) alır; ayrıca kira sözleşmesi, sağlık sigortası ve mali yeterlilik yeniden istenir. Başvuru ücreti voyvodalık ofisine göre değişebilir ve kart ücreti ayrıca ödenir.',
        ],
      },
      {
        h: 'Sağlık sigortası ve NFZ',
        p: [
          'Vize başvurusunda Polonya’da geçerli bir sağlık sigortası istenir. Varıştan sonra öğrenciler, Polonya’nın kamu sağlık fonu NFZ’ye gönüllü sigortalı olarak kaydolabilir; öğrenciler için düşük bir aylık prim uygulanır. Bazı üniversiteler bu kayıt için yardım masası kurar. Özel sigorta ile NFZ arasındaki farklar ve seçim kriterleri için [sağlık sigortası rehberimize](/bilgi-bankasi/saglik-sigortasi) bakabilirsiniz. Lise diplomasının Polonya’da nasıl tanındığını ise [nostrifikasyon rehberimizde](/bilgi-bankasi/nostrifikasyon-nedir) anlattık.',
        ],
      },
      {
        h: 'Ret riskini artıran durumlar',
        list: [
          'Kabul aldığı programla eğitim geçmişi arasında mantıklı bağ kurulamaması.',
          'Dil belgesinin B2 altında olması veya kabul edilen listede bulunmaması.',
          'Banka hesabına başvurudan hemen önce açıklanamayan büyük tutar yatırılması.',
          'Konaklama ve bütçe bilgilerinin belgelerle çelişmesi.',
          'Ret sonrasında neler yapılabileceği için [vize reddi sonrası rehberimize](/bilgi-bankasi/vize-reddi-sonrasi) bakın; profesyonel destek için [vize danışmanlığı](/hizmetler/vize-danismanligi) sayfamız var.',
        ],
      },
    ],
    seoTitle: 'Polonya Öğrenci Vizesi: D Tipi Vize Başvurusu Rehberi',
    description: 'Polonya öğrenci vizesi için e-Konsulat formu, VFS randevusu, 2025’te gelen B2 dil şartı, mali yeterlilik, belgeler ve varışta geçici oturma izni.',
    faqs: [
      { q: 'Polonya öğrenci vizesi kaç günde çıkar?', a: 'Değerlendirme süresi döneme ve dosyanın eksiksiz olmasına göre değişir; yoğun yaz aylarında uzayabilir. Kabul belgesini aldıktan sonra randevuyu hemen planlamak en güvenli yoldur.' },
      { q: 'Polonya öğrenci vizesi için mülakat var mı?', a: 'Başvuru genellikle VFS merkezinde belge teslimi ve biyometri ile yapılır. Konsolosluk gerekli görürse ek belge isteyebilir veya görüşmeye çağırabilir.' },
      { q: 'Polonya’da okumak için B2 İngilizce şart mı?', a: 'Temmuz 2025’ten itibaren yabancı adaylardan eğitim dilinde en az B2 seviyesini gösteren belge isteniyor. Hangi sertifikaların kabul edildiğini başvurduğunuz üniversitenin güncel listesinden kontrol edin.' },
      { q: 'Polonya vizesi bitince ne yapılır?', a: 'Eğitim bir yıldan uzunsa, vize bitmeden önce voyvodalık ofisine geçici oturma izni başvurusu yapılır. Vize süresi içinde yapılan başvuru, karar beklenirken yasal kalışı sürdürür.' },
      { q: 'Polonya öğrenci vizesiyle Schengen’de seyahat edilebilir mi?', a: 'Geçerli D tipi ulusal vize, belirli süre sınırlarıyla diğer Schengen ülkelerinde kısa seyahat imkânı verir. Geçici oturma izni aldıktan sonra da benzer kurallar geçerlidir; seyahat öncesi güncel kuralları kontrol edin.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'erasmus-nedir',
    title: 'Erasmus nedir? Erasmus+ öğrenim ve staj hareketliliği',
    group: 'Üniversite',
    program: 'lisans',
    countries: ['almanya', 'italya', 'ispanya', 'fransa', 'polonya', 'cekya', 'macaristan'],
    summary: 'Erasmus+ ile Türkiye’deki üniversiteden bir dönem yurt dışına gitmek ya da Avrupa’da tam derece okurken değişime katılmak.',
    facts: [
      { label: 'Program dönemi', value: 'Erasmus+ 2021–2027' },
      { label: 'Türkiye’nin durumu', value: 'Programa tam katılan ülke; Türkiye Ulusal Ajansı yürütür' },
      { label: 'Süre', value: 'Öğrenim için genellikle 2–12 ay; her eğitim kademesinde toplam 12 aya kadar' },
      { label: 'Not ortalaması', value: 'Lisans için genellikle en az 2.20/4, yüksek lisans için daha yüksek' },
    ],
    sections: [
      {
        h: 'Erasmus+ nedir?',
        p: [
          'Erasmus+, Avrupa Birliği’nin eğitim, gençlik ve spor alanındaki hareketlilik programıdır. Öğrenciler açısından en bilinen kısmı, bir üniversitede kayıtlıyken anlaşmalı bir Avrupa üniversitesinde bir ya da iki dönem okumak (öğrenim hareketliliği) veya bir kurumda staj yapmaktır (staj hareketliliği). Gidilen kurumda harç ödenmez; derslerden alınan krediler kendi üniversitenizde tanınır.',
          'Türkiye, Erasmus+ programına tam olarak katılan ülkeler arasındadır ve program Türkiye’de Türkiye Ulusal Ajansı tarafından yürütülür. Bu, Türk üniversitelerindeki öğrencilerin Avrupa’daki öğrencilerle aynı temel haklara sahip olması demektir.',
        ],
      },
      {
        h: 'İki farklı senaryo',
        p: [
          'İkinci senaryo çoğu zaman gözden kaçar: [İtalya](/lisans-programlari/italya), Almanya veya [Polonya](/lisans-programlari/polonya) gibi bir ülkede lisans okuyan Türk öğrenci, kayıtlı olduğu üniversite üzerinden başka bir Avrupa ülkesine Erasmus’la gidebilir. Bu, Avrupa’da tam derece okumanın görünmeyen avantajlarından biridir. Bazı ülkelerde kendi vatandaşlığınızın bulunduğu ülkeye (Türkiye’ye) Erasmus’la gitmek de mümkündür; kuralları üniversiteden teyit edin.',
        ],
        table: {
          head: ['Senaryo', 'Nasıl işler?'],
          rows: [
            ['Türkiye’de üniversite öğrencisiyseniz', 'Kendi üniversitenizin Erasmus ilanına başvurursunuz; hibe Ulusal Ajans fonlarından üniversiteniz üzerinden ödenir'],
            ['Avrupa’da tam derece okuyorsanız', 'Okuduğunuz üniversitenin Erasmus programına o ülkedeki öğrenciler gibi başvurursunuz; hibe o ülkenin ulusal ajansından gelir'],
            ['Erasmus Mundus ortak yüksek lisans', 'Birkaç ülkede okunan ortak programlar; kabul edilenlere kapsamlı burs verilebilir'],
          ],
        },
      },
      {
        h: 'Türk üniversite öğrencileri için başvuru şartları',
        list: [
          'Örgün eğitimde tam zamanlı kayıtlı öğrenci olmak (hazırlık sınıfı öğrencileri genellikle başvuramaz).',
          'Not ortalaması: lisans öğrencileri için genellikle en az 2.20/4, yüksek lisans ve doktora için daha yüksek bir eşik (çoğu ilanda 2.50/4).',
          'Yabancı dil puanı: üniversitenin kendi sınavı veya YÖK tarafından kabul edilen sınavlar; bazı üniversiteler en az B1 ister.',
          'Seçim puanı akademik başarı ve dil puanının birlikte değerlendirilmesiyle oluşur; daha önce Erasmus’tan yararlanmak, engellilik veya şehit/gazi yakını olmak gibi durumlar puanı etkileyebilir. Kesin formül üniversitenin ilanında yer alır.',
          'Kontenjan, kendi bölümünüzün ikili anlaşmalarına bağlıdır; her bölümün anlaştığı okul listesi farklıdır.',
        ],
      },
      {
        h: 'Hibe miktarları',
        p: [
          'Türkiye’den giden öğrencilere ödenen aylık hibe, gidilen ülkenin yaşam maliyetine göre gruplanır. Ulusal Ajans’ın 2024 proje dönemi ve sonrası için yayımladığı tabloda öğrenim hareketliliğinde 1. ve 2. grup ülkeler (Almanya, Fransa, İtalya gibi) için aylık 600 avro, 3. grup ülkeler (Polonya, Macaristan gibi) için aylık 450 avro yer aldı; staj hibeleri daha yüksektir. Tutarlar proje dönemine göre değişebileceği için kendi üniversitenizin güncel ilanını esas alın.',
          'Hibe genellikle iki taksitte ödenir: gitmeden önce büyük kısmı, döndükten sonra kalan kısmı. Hibe tek başına bütün masrafları karşılamayabilir; kira ve şehir farkı için [bütçe planlama rehberimize](/bilgi-bankasi/yurtdisi-butce-planlama) göz atın. Az fırsatlı öğrencilere ek destek ve çevreci ulaşım kullananlara ek ödeme gibi kalemler de olabilir.',
        ],
      },
      {
        h: 'Staj hareketliliği ve yeni mezun stajı',
        p: [
          'Erasmus+ yalnızca ders almak için değildir. Staj hareketliliğinde öğrenci, Avrupa’daki bir şirkette, araştırma merkezinde veya kurumda en az iki aylık staj yapar ve öğrenim hibesinden daha yüksek bir aylık hibe alır. Stajı kendiniz bulmanız gerekir; üniversitenin Erasmus ofisi kabul belgesi (Letter of Acceptance) ve öğrenim anlaşmasının staj versiyonuyla süreci yönetir.',
          'Yeni mezun stajı ise öğrencinin mezuniyetten önce başvurup mezun olduktan sonraki 12 ay içinde tamamladığı stajdır. Bu seçenek, mezuniyet sonrası Avrupa’da iş deneyimi kazanmak isteyenler için önemli bir köprüdür. Başvurunun mezuniyetten önce yapılması gerektiğini unutmayın; mezun olduktan sonra başvuru kabul edilmez.',
        ],
      },
      {
        h: 'Erasmus Mundus ortak yüksek lisans programları',
        p: [
          'Erasmus Mundus, birkaç Avrupa üniversitesinin birlikte yürüttüğü ve öğrencinin en az iki farklı ülkede okuduğu ortak yüksek lisans programlarıdır. Kabul edilen öğrencilerin bir kısmına harç, yolculuk ve yaşam masraflarını karşılayan burs verilir. Başvurular programın kendi sitesi üzerinden, genellikle sonbahar ile kış arasında yapılır ve rekabet yüksektir. Güçlü bir akademik geçmiş, iyi bir dil puanı ve programa özel yazılmış bir motivasyon mektubu belirleyicidir. Yüksek lisans hedefleriniz için [Almanya yüksek lisans](/yurtdisi-yuksek-lisans/almanya) ve [İtalya yüksek lisans](/yurtdisi-yuksek-lisans/italya) sayfalarımız da fikir verebilir.',
        ],
      },
      {
        h: 'Gitmeden önce yapılacaklar',
        list: [
          'Öğrenim anlaşmasını (Learning Agreement) hazırlayın: hangi dersleri alacağınız ve kendi üniversitenizde hangi derslerin yerine sayılacağı imza altına alınır.',
          'Karşı üniversitenin kabul mektubunu ve konaklama bilgilerini alın.',
          'Schengen ülkeleri için ulusal veya Schengen vizesine başvurun; Erasmus öğrencileri genellikle öğrenim amaçlı vize alır. Genel süreç için [öğrenci vizesi rehberimize](/bilgi-bankasi/ogrenci-vizesi-rehberi) bakın.',
          'Hibe sözleşmesini imzalayın ve çevrim içi dil değerlendirmesini (OLS) tamamlayın.',
          'Sağlık sigortası yaptırın; ayrıntı için [sağlık sigortası rehberimize](/bilgi-bankasi/saglik-sigortasi) bakın.',
        ],
      },
      {
        h: 'Döndükten sonra kredi tanınması',
        p: [
          'Erasmus’un en önemli kuralı, yurt dışında başarıyla tamamlanan derslerin kendi üniversitenizde tanınmasıdır. Dönüşte karşı üniversiteden not dökümünü (Transcript of Records) alırsınız; kendi bölümünüz öğrenim anlaşmasına göre dersleri işler. Ders değişikliklerini mutlaka anlaşmaya “değişiklik” olarak eklettirin; aksi halde tanınmayan dersler mezuniyeti geciktirebilir.',
          '**Erasmus’tan sonra tam derece fikri:** Birçok öğrenci Erasmus dönemini, yüksek lisans için o ülkeye dönmeyi planladığı bir deneme olarak kullanır. Bu planı düşünüyorsanız Erasmus sırasında hocalarla tanışmak ve referans almak çok değerlidir. Yüksek lisans seçenekleri için [başvuru rehberimize](/bilgi-bankasi/universite-basvuru-rehberi) bakabilirsiniz.',
        ],
      },
    ],
    seoTitle: 'Erasmus Nedir? Erasmus+ Başvuru Şartları ve Hibeler',
    description: 'Erasmus nedir, Türk üniversite öğrencileri nasıl başvurur, not ve dil şartları, hibe miktarları ve Avrupa’da tam derece okurken Erasmus’a katılma imkânı.',
    faqs: [
      { q: 'Erasmus’a kimler başvurabilir?', a: 'Erasmus+ programına katılan bir yükseköğretim kurumunda örgün eğitimde kayıtlı öğrenciler başvurabilir. Türkiye’de lisans öğrencileri için not ortalaması eşiği genellikle 2.20/4’tür; dil puanı da seçimde belirleyicidir.' },
      { q: 'Erasmus hibesi ne kadar?', a: 'Hibe gidilen ülkenin grubuna göre değişir. Ulusal Ajans’ın 2024 sonrası tablosunda öğrenim için 1. ve 2. grup ülkelerde aylık 600 avro, 3. grup ülkelerde 450 avro yer aldı; güncel tutarı üniversitenizin ilanından kontrol edin.' },
      { q: 'Yurt dışında okurken Erasmus yapılabilir mi?', a: 'Evet. Avrupa’da bir üniversitede tam derece okuyan Türk öğrenciler, o üniversitenin Erasmus programına yerel öğrencilerle aynı şartlarla başvurabilir. Hibe o ülkenin ulusal ajansından ödenir.' },
      { q: 'Erasmus için vize gerekir mi?', a: 'Türk vatandaşları Schengen ülkelerinde Erasmus için öğrenim amaçlı vize alır. Süreye göre ulusal uzun süreli vize veya Schengen vizesi gerekebilir; başvuruyu kabul mektubu gelir gelmez planlayın.' },
      { q: 'Erasmus kaç ay sürer?', a: 'Öğrenim hareketliliği genellikle bir ya da iki dönemdir. Her eğitim kademesinde (lisans, yüksek lisans, doktora) öğrenim ve staj toplamı en fazla 12 aya kadar olabilir.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'apostil-ve-yeminli-tercume',
    title: 'Apostil ve yeminli tercüme: yurt dışı başvuru belgeleri',
    group: 'Vize & Belgeler',
    summary: 'Diploma ve transkriptin yurt dışında geçerli olması için apostil şerhi, noter onaylı yeminli tercüme ve doğru işlem sırası.',
    facts: [
      { label: 'Dayanak', value: '5 Ekim 1961 tarihli Lahey Apostil Sözleşmesi' },
      { label: 'Türkiye', value: 'Sözleşmeye taraf; 1985’ten bu yana uygulanıyor' },
      { label: 'İdari belgeler (diploma, transkript)', value: 'Kaymakamlık veya valilik' },
      { label: 'Adli belgeler (adli sicil, mahkeme kararı)', value: 'Adliyedeki adalet komisyonu başkanlıkları' },
    ],
    sections: [
      {
        h: 'Apostil nedir?',
        p: [
          'Apostil, bir ülkede düzenlenmiş resmi belgenin, Lahey Apostil Sözleşmesi’ne taraf başka bir ülkede ek bir konsolosluk onayına gerek kalmadan kullanılabilmesini sağlayan şerhtir. Belgenin içeriğini değil, üzerindeki imzanın ve mührün gerçekliğini, imzalayan kişinin sıfatını onaylar. Türkiye sözleşmeye taraftır; bu yüzden Türk diplomanızı İtalya, İspanya, Polonya, Çekya, Fransa, Almanya, ABD veya Japonya gibi taraf ülkelerde kullanırken genellikle apostil yeterlidir.',
          'Sözleşmeye taraf olmayan bir ülkede belge kullanılacaksa daha uzun bir yol izlenir: önce Türkiye’de ilgili makam onayı, ardından o ülkenin Türkiye’deki konsolosluğunun tasdiki. Hedef ülkenin taraf olup olmadığını Lahey Konferansı’nın güncel listesinden kontrol edin; son yıllarda Kanada ve Çin gibi ülkeler sözleşmeye katıldı.',
        ],
      },
      {
        h: 'Türkiye’de apostil nereden alınır?',
        p: [
          'İşlem genellikle kaymakamlık ya da valiliklerin yazı işleri veya apostil birimlerinde, belge sahibinin ya da yakınının başvurusuyla yapılır. Apostil şerhi için kural olarak ayrı bir harç alınmaz; masraf noter ve tercüme kalemlerinden doğar. Adli sicil kaydı gibi bazı belgeler e-Devlet üzerinden apostilli olarak da alınabiliyor; kapsamın diplomalar için geçerli olup olmadığını işlem öncesi kontrol edin.',
        ],
        table: {
          head: ['Belge türü', 'Örnek', 'Yetkili makam'],
          rows: [
            ['İdari belge', 'Diploma, transkript, öğrenci belgesi, nüfus kayıt örneği', 'Kaymakamlık veya valilik'],
            ['Noter belgesi', 'Noter onaylı diploma sureti, noter onaylı tercüme', 'Kaymakamlık veya valilik'],
            ['Adli belge', 'Adli sicil kaydı, mahkeme kararı', 'Adalet komisyonu başkanlığı'],
          ],
        },
      },
      {
        h: 'Yeminli tercüme ve noter onayı',
        p: [
          'Yeminli tercüme, noterde yemin etmiş tercümanın yaptığı ve imzaladığı çeviridir. Noter, tercümanın imzasını onaylar; böylece çeviri resmi belge niteliği kazanır. Yurt dışı başvurularında “noter onaylı yeminli tercüme” ifadesi bu iki adımı birlikte anlatır.',
          'Bazı ülkeler noter onaylı tercümenin de apostilli olmasını ister; çünkü noter onayı Türk makamının işlemidir ve yurt dışında kullanılacaksa onun da apostili gerekir. Bazı ülkeler ise kendi ülkesindeki yeminli tercümanın çevirisini tercih eder: örneğin İtalya’da bazı işlemler için konsolosluk onaylı ya da İtalya’daki mahkeme yeminli çeviri (traduzione giurata) istenebilir; Çekya’da Çek yeminli tercümanlar sıkça tercih edilir.',
        ],
      },
      {
        h: 'Doğru işlem sırası',
        p: [
          'Sıralamayı ters yapmak, yani önce tercüme edip sonra Türkçe belgeye apostil almak, apostil sayfasının çevrilmemiş kalmasına ve belgenin bazı ülkelerde reddedilmesine yol açabilir.',
        ],
        list: [
          '1. Belgenin aslını ya da noterden “aslı gibidir” onaylı suretini alın. Diplomanın aslını göndermek yerine noter onaylı suret üzerinden ilerlemek çoğu zaman daha güvenlidir.',
          '2. Türkçe belgeye (veya noter onaylı surete) kaymakamlık ya da valilikte apostil şerhi aldırın.',
          '3. Apostilli belgeyi, apostil sayfası dahil, hedef dile yeminli tercümana çevirtin.',
          '4. Tercümeyi noterde onaylatın.',
          '5. Hedef ülke istiyorsa noter onaylı tercümeye de apostil aldırın.',
          '6. Tüm sayfaları PDF olarak tarayın; çevrim içi başvurularda genellikle tarama yüklenir, aslı kayıt sırasında istenir.',
        ],
      },
      {
        h: 'Ülkelere göre tipik talepler',
        table: {
          head: ['Ülke / süreç', 'Sık istenen'],
          rows: [
            ['İtalya – DoV', 'Apostilli diploma ve transkript, İtalyanca tercüme; ayrıntı [CIMEA ve DoV](/bilgi-bankasi/cimea-dov-nedir)'],
            ['İtalya – ISEE parificato', 'Gelir ve mülk belgelerinin onaylı İtalyanca tercümesi'],
            ['Fransa – Études en France', 'Diploma ve transkriptin Fransızca veya İngilizce tercümesi'],
            ['Çekya, Slovakya – nostrifikasyon', 'Apostilli belge ve yerel dile yeminli tercüme; ayrıntı [nostrifikasyon](/bilgi-bankasi/nostrifikasyon-nedir)'],
            ['Polonya', 'Apostilli diploma, Lehçe veya İngilizce yeminli tercüme'],
            ['Almanya – uni-assist', 'Çoğu durumda onaylı suret ve onaylı tercüme; dijital yükleme'],
          ],
        },
      },
      {
        h: 'Lise ve üniversite öğrencileri için belge seti',
        p: [
          'Üniversitelerin İngilizce düzenlediği transkript ve Diploma Eki, İngilizce kabul eden ülkelerde tercüme masrafını ortadan kaldırabilir; bu belgelere doğrudan apostil alınıp alınamayacağını ve hedef kurumun İngilizce belgeyi kabul edip etmediğini önceden kontrol edin.',
        ],
        table: {
          head: ['Belge', 'Nereden alınır?', 'Apostil gerekir mi?'],
          rows: [
            ['Lise diploması', 'Okul müdürlüğü', 'Taraf ülkelerde çoğunlukla evet'],
            ['Lise not dökümü', 'Okul müdürlüğü veya e-Okul / e-Devlet', 'İstenen formata göre'],
            ['Lisans diploması', 'Üniversitenin öğrenci işleri', 'Çoğunlukla evet'],
            ['Transkript ve Diploma Eki', 'Üniversitenin öğrenci işleri', 'Ülkeye göre değişir'],
            ['Nüfus kayıt örneği', 'e-Devlet veya nüfus müdürlüğü', 'Burs ve aile belgelerinde istenebilir'],
            ['Adli sicil kaydı', 'e-Devlet veya adliye', 'Bazı vize ve oturma izni süreçlerinde'],
          ],
        },
      },
      {
        h: 'Masraf ve süre planlaması',
        p: [
          '**Dijital belgeler ve e-imza:** Son yıllarda birçok üniversite başvuruyu tamamen çevrim içi alıyor ve başvuru aşamasında taranmış belgeyi yeterli sayıyor. Ancak kesin kayıt, nostrifikasyon veya vize gibi aşamalarda asıl ya da onaylı belge yine istenir. e-Devlet’ten alınan barkodlu belgeler bazı kurumlar tarafından doğrulama koduyla kabul edilirken, bazı kurumlar kâğıt üzerinde ıslak imzalı ve apostilli belge ister. Hangi aşamada hangi formatın istendiğini bir tabloya dökmek, gereksiz noter masrafını önler. Tercümeli belgelerin bütçedeki yeri için [bütçe planlama rehberimize](/bilgi-bankasi/yurtdisi-butce-planlama) bakabilirsiniz.',
        ],
        list: [
          'Apostil genellikle aynı gün ya da birkaç gün içinde verilir; ancak yaz aylarında kaymakamlıklarda yoğunluk olabilir.',
          'Tercüme ücreti sayfa ve dil sayısına göre değişir; İngilizce dışındaki dillerde (İtalyanca, Çekçe, Lehçe) süre ve ücret daha yüksek olabilir.',
          'Noter onayı sayfa başına ücretlendirilir; belge sayısı arttıkça masraf belirgin şekilde yükselir. Birden fazla ülkeye başvuracaksanız tüm setleri aynı anda hazırlayın.',
          'Belgeleri en az iki takım halinde hazırlamak, posta kaybı veya ek talep durumunda zaman kazandırır.',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        p: [
          'Vize dosyalarında da aynı belgeler kullanıldığı için başvuru ve vize setini birlikte planlamak masrafı azaltır. Destek için [vize danışmanlığı](/hizmetler/vize-danismanligi) ve [eğitim danışmanlığı](/hizmetler/egitim-danismanligi) sayfalarımıza bakabilirsiniz.',
        ],
        list: [
          'Diploma yerine sadece geçici mezuniyet belgesine apostil almak; bazı kurumlar diploma ister.',
          'Pasaporttaki isim yazımıyla tercümedeki isim yazımının farklı olması.',
          'Tercümede apostil sayfasını atlamak.',
          'Taraf olmayan ülke için apostil almak; bu ülkelerde konsolosluk tasdiki gerekir.',
          'Belgelerin hangi formatta istendiğini (aslı, onaylı suret, dijital) okumadan noter masrafı yapmak.',
        ],
      },
    ],
    seoTitle: 'Apostil Nedir? Diploma Apostili ve Yeminli Tercüme',
    description: 'Apostil nedir, diploma ve transkript için kaymakamlık ya da valilikte nasıl alınır? Noter onaylı yeminli tercüme ve yurt dışı başvuruda doğru işlem sırası.',
    faqs: [
      { q: 'Diploma apostili nereden alınır?', a: 'Diploma idari bir belge olduğu için apostil şerhi kaymakamlık veya valiliklerden alınır. Noter onaylı diploma suretine de aynı makamlardan apostil aldırılabilir.' },
      { q: 'Apostil ücretli mi?', a: 'Apostil şerhi için kural olarak ayrı bir harç alınmaz. Asıl masraf noter onayı ve yeminli tercümeden doğar; bu masraflar sayfa ve dil sayısına göre değişir.' },
      { q: 'Önce tercüme mi yapılır, apostil mi?', a: 'Genellikle önce Türkçe belgeye apostil alınır, sonra apostil sayfası dahil belge tercüme edilip noterde onaylatılır. Bazı ülkeler noter onaylı tercümeye de ayrıca apostil ister.' },
      { q: 'Apostil kaç günde çıkar?', a: 'Kaymakamlık ve valiliklerde apostil çoğunlukla aynı gün ya da birkaç gün içinde verilir. Yoğun dönemlerde süre uzayabilir; başvuru son tarihinden en az birkaç hafta önce işlemleri başlatın.' },
      { q: 'e-Devlet belgelerine apostil alınabilir mi?', a: 'Adli sicil kaydı gibi bazı belgeler e-Devlet üzerinden apostilli olarak alınabiliyor. Diploma ve transkript için kapsamın güncel durumunu işlem öncesi kaymakamlık veya valilikten teyit edin.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'topik-nedir',
    title: 'TOPIK nedir? Korece yeterlilik sınavı rehberi',
    group: 'Sınavlar',
    program: 'lisans',
    countries: ['kore'],
    summary: 'Güney Kore’nin resmi Korece yeterlilik sınavı TOPIK: TOPIK I ve II, seviye puanları, üniversite şartları ve geçerlilik süresi.',
    facts: [
      { label: 'Düzenleyen', value: 'Kore Ulusal Uluslararası Eğitim Enstitüsü (NIIED)' },
      { label: 'Seviyeler', value: 'TOPIK I: 1–2. seviye, TOPIK II: 3–6. seviye' },
      { label: 'Geçerlilik', value: 'Sonuç açıklandıktan sonra 2 yıl' },
      { label: 'Format', value: 'Kâğıt (PBT) ve giderek yaygınlaşan internet tabanlı (IBT)' },
    ],
    sections: [
      {
        h: 'TOPIK nedir, kimler girer?',
        p: [
          'TOPIK (Test of Proficiency in Korean), Korece anadili olmayanların dil seviyesini ölçen resmi sınavdır. Kore’de Korece eğitim veren bir lisans ya da yüksek lisans programına başvuracaklar, Korece programlarla burs başvurusu yapanlar ve Kore’de çalışmak isteyenler bu sınavın sonucunu kullanır. Kore’de İngilizce eğitim veren programlar da çoğaldı; ancak bu programlarda bile TOPIK puanı kabulü ve burs şansını güçlendirebilir.',
          'Sınav iki ayrı testten oluşur. TOPIK I dinleme ve okuma sorularından oluşan tek oturumluk bir sınavdır. TOPIK II ise iki oturumda yapılır: ilk oturumda dinleme ve yazma, ikinci oturumda okuma bölümü bulunur. Dinleme ve okuma soruları çoktan seçmelidir; yazma bölümü ise kısa cevaplı ve kompozisyon sorularından oluşur. Konuşma becerisi kâğıt tabanlı sınavda ölçülmez, internet tabanlı formatta ayrı bir konuşma sınavı sunulmaya başlanmıştır.',
          'TOPIK’in Kore’de vize ve göç sistemindeki yeri de büyüktür: mezuniyet sonrası iş arama vizesine geçişte ve bazı çalışma vizelerinde TOPIK seviyesi ek puan sağlar. Kore’de uzun vadeli bir kariyer düşünüyorsanız TOPIK 4 ve üzerini hedeflemek, yalnızca kabul değil iş hayatı açısından da avantaj yaratır.',
        ],
      },
      {
        h: 'TOPIK I ve TOPIK II farkı',
        p: [
          'TOPIK’te “geçti/kaldı” yoktur; aldığınız toplam puana göre bir seviye belgesi verilir. TOPIK I’de 80 puanın altında, TOPIK II’de 120 puanın altında kalırsanız seviye verilmez. Hangi sınava gireceğinizi hedef seviyenize göre seçersiniz; aynı gün iki sınava da girmek mümkündür çünkü genellikle farklı oturumlarda yapılır.',
        ],
        table: {
          head: ['Sınav', 'Bölümler', 'Toplam puan', 'Seviyeler'],
          rows: [
            ['TOPIK I', 'Dinleme, okuma', '200', '1. seviye: 80+, 2. seviye: 140+'],
            ['TOPIK II', 'Dinleme, yazma, okuma', '300', '3. seviye: 120+, 4. seviye: 150+, 5. seviye: 190+, 6. seviye: 230+'],
          ],
        },
      },
      {
        h: 'Üniversiteler hangi seviyeyi ister?',
        p: [
          'Bu şartlar üniversite ve programa göre değişir. Başvuru dönemi geldiğinde programın kabul kılavuzunu okuyun. Kore’deki program seçenekleri için [Kore lisans programları](/lisans-programlari/kore) ve [Kore dil okulları](/yurtdisi-dil-okullari/kore) sayfalarımıza bakabilirsiniz.',
          '**GKS bursu ve TOPIK:** Kore hükümetinin GKS (Global Korea Scholarship) bursuna başvururken TOPIK zorunlu değildir; ancak sahip olunan TOPIK seviyesi değerlendirmede ek puan sağlar ve bazı aşamalarda öne geçirir. Burs kazananlar genellikle bir yıl Korece dil eğitimi alır ve bölüme başlamadan önce belirli bir TOPIK seviyesine ulaşması beklenir. Genel burs stratejisi için [burs rehberimize](/bilgi-bankasi/yurtdisi-burs-rehberi) bakın.',
        ],
        table: {
          head: ['Hedef', 'Tipik şart'],
          rows: [
            ['Korece lisans programı', 'Genellikle TOPIK 3; bazı rekabetçi bölümler 4 veya üzeri'],
            ['Korece yüksek lisans', 'Genellikle TOPIK 4 veya üzeri'],
            ['Mezuniyet şartı', 'Bazı üniversiteler mezuniyet için TOPIK 4 ister'],
            ['İngilizce programlar', 'TOPIK gerekmez; ek puan veya burs avantajı sağlayabilir'],
            ['Dil okulu', 'TOPIK gerekmez; seviye tespitle başlanır'],
          ],
        },
      },
      {
        h: 'Sınav takvimi ve Türkiye’de sınava girmek',
        p: [
          'Kâğıt tabanlı TOPIK yılda birkaç kez düzenlenir; Kore dışındaki ülkelerde oturum sayısı daha azdır. Türkiye’de sınav geçmiş yıllarda Ankara’daki Kore Kültür Merkezi ve diğer yetkili merkezler aracılığıyla yapıldı. Merkezler, kayıt dönemleri ve ücretler değişebildiği için kayıt öncesi resmi TOPIK sitesini (topik.go.kr) ve Kore Kültür Merkezi duyurularını takip edin. Kayıtlar genellikle sınavdan iki üç ay önce açılır ve kontenjan dolabilir.',
          'İnternet tabanlı TOPIK (IBT) kademeli olarak yaygınlaşıyor ve uzun vadede kâğıt sınavın yerini alması bekleniyor. IBT’de konuşma bölümü de ayrı bir sınav olarak sunulmaya başlandı.',
        ],
      },
      {
        h: 'TOPIK II yazma bölümü: nasıl puan toplanır?',
        p: [
          'TOPIK II’nin yazma bölümü dört sorudan oluşur. İlk iki soruda metin içindeki boşlukları uygun cümlelerle tamamlarsınız; üçüncü soruda bir grafik veya tablo verilir ve 200–300 karakterlik açıklayıcı bir paragraf yazmanız beklenir; dördüncü soruda ise verilen bir konuda 600–700 karakterlik görüş yazısı yazarsınız. Değerlendirme içerik, yapı ve dil kullanımına göre yapılır.',
          'Puan toplamanın en etkili yolu kalıpları öğrenmektir. Grafik sorusunda artış, azalış ve karşılaştırma ifadeleri; görüş yazısında giriş, iki gerekçe ve sonuçtan oluşan sabit bir yapı yüksek puan getirir. Yazılı dilde kullanılan resmi bitiş kalıbının (-다 biçimi) tutarlı kullanılması da önemlidir. Konuşma diliyle yazılan cevaplar puan kaybettirir.',
        ],
      },
      {
        h: 'Hazırlık planı',
        list: [
          'Hangul alfabesini ve temel dilbilgisini ilk ayda bitirin; TOPIK I için tipik hedef A2 seviyesidir.',
          'TOPIK II’de yazma bölümü en çok zorlanılan kısımdır: kısa cümle tamamlama, grafik yorumlama ve 600–700 karakterlik deneme yazımı bulunur.',
          'Resmi sitede yayımlanan geçmiş yıl sorularıyla süre tutarak deneme yapın.',
          'Dinleme için Korece haber ve podcast’leri yavaşlatmadan dinlemeye geçin.',
          'Kore’de bir dil okuluna gidiyorsanız, dönem sonunda TOPIK’e girmeyi hedefleyin; dil okulları ders planını genellikle TOPIK seviyelerine göre kurar.',
        ],
      },
      {
        h: 'Kore’de dil okulu ve TOPIK yolu',
        p: [
          'Korece bilmeden Kore’de lisans hedefleyen öğrencilerin yaygın yolu, bir üniversitenin dil enstitüsünde bir ila iki yıl Korece okuyup TOPIK 3 veya 4 almaktır. Dil enstitüleri genellikle her biri yaklaşık on haftalık dönemlerle çalışır ve her dönem bir seviye ilerlemeyi hedefler. Dil eğitimi aldığınız üniversitenin lisans programına geçişte bazı okullar kendi dil enstitüsü öğrencilerine kolaylık tanır. Genel strateji için [üniversite başvuru rehberimize](/bilgi-bankasi/universite-basvuru-rehberi) bakabilirsiniz.',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'Sonuç geçerliliğini (2 yıl) hesaba katmadan çok erken sınava girmek.',
          'TOPIK I sonucuyla TOPIK 3 isteyen programa başvurmak.',
          'Kayıt tarihini kaçırmak; Türkiye’de oturum sayısı sınırlıdır.',
        ],
      },
    ],
    seoTitle: 'TOPIK Nedir? Korece Sınavı Seviyeleri ve Geçme Puanları',
    description: 'TOPIK nedir, TOPIK I ve TOPIK II arasındaki fark, seviye puanları, Kore üniversitelerinin istediği seviyeler, GKS bursu etkisi ve Türkiye’de sınava girme.',
    faqs: [
      { q: 'TOPIK kaç yıl geçerli?', a: 'TOPIK sonucu, sonuçların açıklandığı tarihten itibaren 2 yıl geçerlidir. Başvuru takviminizi bu süreye göre planlayın.' },
      { q: 'Kore’de üniversite için TOPIK kaç olmalı?', a: 'Korece lisans programları genellikle en az TOPIK 3 ister; bazı bölümler ve yüksek lisans programları TOPIK 4 veya üzerini bekler. İngilizce programlarda TOPIK genellikle zorunlu değildir.' },
      { q: 'TOPIK Türkiye’de yapılıyor mu?', a: 'TOPIK geçmiş yıllarda Türkiye’de Ankara’daki Kore Kültür Merkezi ve yetkili merkezlerde düzenlendi. Merkez ve tarihler değişebildiği için kayıt öncesi resmi TOPIK sitesini ve Kore Kültür Merkezi duyurularını kontrol edin.' },
      { q: 'TOPIK I mi TOPIK II mi girmeliyim?', a: 'Başlangıç seviyesindeyseniz TOPIK I, üniversite başvurusu için 3. seviye ve üzerini hedefliyorsanız TOPIK II’ye girmelisiniz. TOPIK II’de 120 puanın altında kalırsanız seviye verilmez.' },
      { q: 'TOPIK sınavına kaç kez girilebilir?', a: 'TOPIK’e girme sayısında bir sınır yoktur. Her oturumda yeniden kayıt yapıp ücret ödersiniz; başvurularda genellikle en yüksek ve geçerlilik süresi dolmamış sonuç kullanılır.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'jlpt-nedir',
    title: 'JLPT nedir? Japonca yeterlilik sınavı N1–N5',
    group: 'Sınavlar',
    program: 'lisans',
    countries: ['japonya'],
    summary: 'Japonca Yeterlilik Sınavı JLPT: N1–N5 seviyeleri, geçme puanları, Temmuz ve Aralık oturumları, Türkiye’deki sınav merkezleri.',
    facts: [
      { label: 'Düzenleyen', value: 'Japan Foundation ve JEES' },
      { label: 'Seviyeler', value: 'N5 (en kolay) – N1 (en zor)' },
      { label: 'Oturumlar', value: 'Yılda iki kez: Temmuz ve Aralık (merkeze göre)' },
      { label: 'Türkiye merkezleri', value: 'Ankara (Ankara Üniversitesi TÖMER) ve İstanbul (Japon Sanat Derneği)' },
      { label: 'Geçerlilik', value: 'Sonucun resmi süre sınırı yoktur' },
    ],
    sections: [
      {
        h: 'JLPT nedir?',
        p: [
          'JLPT (Japanese-Language Proficiency Test), Japonca anadili olmayanların dil seviyesini ölçen ve dünya genelinde en yaygın kullanılan Japonca sınavıdır. Sınav çoktan seçmelidir; konuşma ve yazma bölümü yoktur. Sınav dil bilgisi, kelime, kanji, okuma ve dinleme becerilerini ölçer.',
          'Puanlama seviyeye göre farklı gruplanır. N1, N2 ve N3’te üç puan bölümü vardır: dil bilgisi (kelime ve dil bilgisi), okuma ve dinleme; her biri 0–60 puan üzerinden değerlendirilir. N4 ve N5’te ise dil bilgisi ile okuma tek bir bölümde (0–120) birleşir, dinleme ayrı bir bölümdür (0–60). Sonuç belgesinde hem toplam puan hem bölüm puanları yer alır; üniversiteler ve işverenler bazen yalnızca seviyeye değil, okuma ve dinleme bölüm puanlarına da bakar.',
          'JLPT’nin üniversite başvurusundaki rolü, EJU’dan farklıdır. Japon üniversitelerinin lisans programları uluslararası öğrencilerden çoğunlukla [EJU](/bilgi-bankasi/eju-nedir) puanı ister; JLPT ise birçok okulda ek belge, bazı okullarda EJU’ya alternatif ya da dil okulu ve meslek okulu (senmon gakkō) başvurularında ana şart olarak kullanılır.',
        ],
      },
      {
        h: 'Seviyeler ve geçme puanları',
        p: [
          'Toplam puanın yanı sıra her bölüm için asgari puan şartı vardır (N1–N3’te her bölümde en az 19, N4–N5’te birleşik dil bilgisi ve okuma bölümünde en az 38, dinlemede en az 19). Toplam puanı geçseniz bile bir bölümde bu eşiğin altında kalırsanız başarısız sayılırsınız.',
        ],
        table: {
          head: ['Seviye', 'Kabaca karşılık', 'Geçme puanı (180 üzerinden)'],
          rows: [
            ['N5', 'Temel kalıplar, hiragana–katakana, basit kanji', '80'],
            ['N4', 'Günlük temel konuşmalar', '90'],
            ['N3', 'Günlük hayatta orta düzey anlama', '95'],
            ['N2', 'Günlük hayat ve iş ortamında geniş anlama', '90'],
            ['N1', 'Akademik ve karmaşık metinler', '100'],
          ],
        },
      },
      {
        h: 'Seviyelere göre gereken çalışma süresi',
        p: [
          'JLPT seviyeleri arasındaki fark doğrusal değildir; özellikle N3’ten N2’ye ve N2’den N1’e geçiş, kanji ve okuma hızı nedeniyle çok daha fazla zaman ister. Türkçe konuşan öğrenciler için Japonca dil bilgisi, söz diziminin benzerliği sayesinde görece kolay öğrenilir; zorluk kanji ve kelime hazinesindedir. Japonya’daki dil okullarının çoğu, sıfırdan başlayan bir öğrencinin N2 seviyesine ulaşması için bir buçuk ila iki yıllık yoğun eğitim planlar.',
        ],
        list: [
          'N5: Hiragana, katakana ve yaklaşık 100 kanji; temel dil bilgisi.',
          'N4: Günlük konuşmalar ve yaklaşık 300 kanji.',
          'N3: Gazete başlıkları ve kısa metinler; kanji yükü belirgin şekilde artar.',
          'N2: Genel konulu makaleler, haberler; meslek okulu ve iş hayatı için eşik.',
          'N1: Akademik ve soyut metinler; Japonca yüksek lisans ve ileri iş pozisyonları.',
        ],
      },
      {
        h: 'Hangi hedef için hangi seviye?',
        p: [
          'Japonya’daki seçenekler için [Japonya dil okulları](/yurtdisi-dil-okullari/japonya) ve [Japonya lisans programları](/lisans-programlari/japonya) sayfalarımıza bakabilirsiniz.',
        ],
        table: {
          head: ['Hedef', 'Tipik beklenti'],
          rows: [
            ['Japonya’da dil okulu', 'Zorunlu değil; N5 veya eşdeğeri 150 saatlik eğitim belgesi vize dosyasını güçlendirir'],
            ['Meslek okulu (senmon gakkō)', 'Genellikle N2'],
            ['Japonca lisans programı', 'EJU Japonca puanı esas; JLPT N2–N1 ek avantaj'],
            ['Japonca yüksek lisans', 'Genellikle N2 veya N1'],
            ['İngilizce programlar', 'JLPT gerekmez'],
          ],
        },
      },
      {
        h: 'Türkiye’de JLPT’ye girmek',
        p: [
          'Resmi JLPT yurt dışı merkez listesine göre Türkiye’de iki şehirde sınav yapılır: Ankara’da Ankara Üniversitesi TÖMER hem Temmuz hem Aralık oturumlarını düzenler; İstanbul’da Japon Sanat Derneği ise yalnızca Aralık oturumunu düzenler. Kayıtlar sınavdan birkaç ay önce, ilgili merkezin duyurusuyla açılır ve kontenjan sınırlı olabilir.',
          'Merkezler belirli bir yıl için oturumu iptal edebildiğinden, plan yapmadan önce merkezin o yıla ait duyurusunu kontrol edin. Sonuçlar genellikle sınavdan iki üç ay sonra çevrim içi açıklanır; basılı belge daha sonra merkeze ulaşır.',
          'Ankara’daki Temmuz oturumu, Aralık’ta İstanbul’da sınava girmeyi planlayan öğrencilere ikinci bir şans sunar. Sınav kayıt ücreti ve ödeme yöntemi merkezlerin duyurusunda açıklanır; kimlik belgesi ve fotoğraf kuralları da merkezden merkeze küçük farklar gösterebilir.',
        ],
      },
      {
        h: 'Hazırlık planı',
        list: [
          'Seviye başına gereken kanji ve kelime listesini çıkarın; N3’ten itibaren kanji yükü belirgin şekilde artar.',
          'Okuma bölümünde zaman yönetimi en sık yapılan hatadır; geçmiş yıl örnek sorularını süre tutarak çözün.',
          'Dinleme için ders kayıtlarının yanında doğal hızdaki Japonca içeriklere geçin.',
          'Aralık sınavı hedefleniyorsa Temmuz’dan itibaren haftalık deneme sınavı yapın.',
          'Bir seviyeyi atlamak mümkündür; JLPT’de önceki seviyeyi almış olmak şartı yoktur.',
        ],
      },
      {
        h: 'JLPT, EJU ve vize',
        p: [
          'Japonya öğrenci vizesi (ryūgaku) süreci okulun başvurusu ve Uygunluk Belgesi (Certificate of Eligibility) ile ilerler. Dil okulları bu belge için başvururken öğrencinin Japonca çalışma geçmişini gösteren bir belge ister; JLPT N5 veya üzeri bu belgeyi sunmanın en net yoludur. Genel süreç için [öğrenci vizesi rehberimize](/bilgi-bankasi/ogrenci-vizesi-rehberi) bakın.',
        ],
      },
      {
        h: 'JLPT ve iş hayatı',
        p: [
          'JLPT, Japonya’da iş başvurularında en sık istenen belgedir. Birçok Japon şirketi yabancı çalışanlardan N2 veya N1 bekler; Japonya’nın puan esaslı yüksek nitelikli yabancı çalışan sisteminde de N1 ve N2 ek puan sağlar. Japonca eğitimi yalnızca üniversite için değil, mezuniyet sonrası kariyer için de planlıyorsanız JLPT’yi düzenli aralıklarla almak gelişiminizi belgelemenin en net yoludur. Japonya’daki program seçenekleri ve yaşam koşulları için [Japonya ülke sayfamıza](/ulkeler/japonya) bakabilirsiniz.',
        ],
      },
    ],
    seoTitle: 'JLPT Nedir? Japonca Sınavı N1–N5 ve Türkiye Merkezleri',
    description: 'JLPT nedir, N1–N5 seviyelerinin geçme puanları, Temmuz ve Aralık oturumları, Ankara ve İstanbul sınav merkezleri ve Japonya başvurusunda JLPT’nin rolü.',
    faqs: [
      { q: 'JLPT Türkiye’de nerede yapılıyor?', a: 'Resmi listeye göre Ankara’da Ankara Üniversitesi TÖMER Temmuz ve Aralık oturumlarını, İstanbul’da Japon Sanat Derneği yalnızca Aralık oturumunu düzenler. Oturumlar yıllara göre değişebildiği için merkezin duyurusunu kontrol edin.' },
      { q: 'JLPT sonucu kaç yıl geçerli?', a: 'JLPT sonucunun resmi bir geçerlilik süresi yoktur. Ancak bazı üniversite ve işverenler son birkaç yıl içinde alınmış sonuç isteyebilir.' },
      { q: 'JLPT N2 hangi seviyeye denk gelir?', a: 'N2, günlük hayatta ve iş ortamında konuşulan Japoncayı ve genel konulu metinleri büyük ölçüde anlayabilmek anlamına gelir. Japonca eğitim veren meslek okulları ve birçok yüksek lisans programı genellikle N2 ister.' },
      { q: 'Japon üniversiteleri JLPT mi EJU mu ister?', a: 'Lisans programlarına başvuran uluslararası öğrencilerden çoğunlukla EJU puanı istenir. JLPT ise ek belge olarak veya bazı okullarda alternatif şart olarak kullanılır.' },
      { q: 'JLPT’ye hangi seviyeden başlamalıyım?', a: 'Bir seviyeyi atlamak serbesttir; önceki seviyeyi almış olmanız gerekmez. Deneme sınavlarında hedef seviyenin geçme puanını rahatça aşıyorsanız doğrudan o seviyeye kaydolabilirsiniz.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'eju-nedir',
    title: 'EJU nedir? Japonya üniversite giriş sınavı',
    group: 'Sınavlar',
    program: 'lisans',
    countries: ['japonya'],
    summary: 'Japon üniversitelerinin uluslararası lisans adaylarından istediği EJU: dersler, puanlama, 2026 tarihleri ve Türkiye’den sınava girme.',
    facts: [
      { label: 'Düzenleyen', value: 'JASSO (Japonya Öğrenci Hizmetleri Kurumu)' },
      { label: '2026 oturumları', value: '21 Haziran 2026 ve 8 Kasım 2026' },
      { label: 'Türkiye’de merkez', value: 'Yok; sınav Japonya’da veya Asya’daki yurt dışı merkezlerde' },
      { label: 'Sınav dili', value: 'Japonca bölüm dışında Japonca veya İngilizce seçilebilir' },
    ],
    sections: [
      {
        h: 'EJU nedir?',
        p: [
          'EJU (Examination for Japanese University Admission for International Students), Japon üniversitelerinin uluslararası lisans adaylarının akademik hazırlığını ve Japonca seviyesini ölçmek için kullandığı ortak sınavdır. Japon öğrencilerin girdiği ulusal sınavın yerine geçer. Birçok Japon üniversitesi, özellikle Japonca eğitim veren lisans programlarında, başvuru şartı olarak EJU puanı ister; ardından kendi yazılı sınavını, mülakatını veya dosya değerlendirmesini yapar.',
          'EJU, [JLPT](/bilgi-bankasi/jlpt-nedir) ile karıştırılmamalıdır. JLPT sadece dil seviyesini ölçer; EJU ise akademik Japoncanın yanı sıra matematik, fen ve sosyal bilimler bilgisini de ölçer.',
        ],
      },
      {
        h: 'Sınav dersleri ve puanlama',
        p: [
          'Her ders zorunlu değildir; hangi derslere girmeniz gerektiğini hedef üniversitenin ve bölümün kabul kılavuzu belirler. Fen bölümleri genellikle Japonca, Fen ve Matematik Kurs 2; sosyal bilimler ise Japonca, Japonya ve Dünya ve Matematik Kurs 1 ister. Fen, Japonya ve Dünya ve Matematik derslerinde soruları Japonca veya İngilizce yanıtlamayı seçebilirsiniz; seçimi kayıt sırasında yaparsınız ve bazı üniversiteler belirli bir dil şartı koyar.',
        ],
        table: {
          head: ['Ders', 'İçerik', 'Puan aralığı'],
          rows: [
            ['Yabancı dil olarak Japonca', 'Okuma, dinleme, dinleme-okuma, yazma (kompozisyon)', 'Okuma + dinleme: 0–400; yazma: 0–50'],
            ['Fen', 'Fizik, kimya, biyolojiden ikisi seçilir', '0–200'],
            ['Japonya ve Dünya', 'Siyaset, ekonomi, tarih, coğrafya', '0–200'],
            ['Matematik', 'Kurs 1 (sosyal ve bazı fen bölümleri) veya Kurs 2 (mühendislik, fen, tıp)', '0–200'],
          ],
        },
      },
      {
        h: '2026 takvimi',
        p: [
          'Kasım oturumunun sonuçları genellikle bir sonraki yılın Nisan dönemi başvurularında, Haziran oturumunun sonuçları ise Eylül/Ekim dönemi ve bir sonraki Nisan dönemi başvurularında kullanılır. Üniversiteler genellikle son iki yıl içindeki oturumların puanlarını kabul eder; hangi oturumu kabul ettiklerini kılavuzlarında belirtir.',
          '**Sınav günü ve sonuçlar:** EJU, sabah Japonca bölümüyle başlar ve öğleden sonra seçtiğiniz derslerle devam eder; tam günlük bir sınavdır. Sınav kâğıt üzerinde, işaretleme formuyla yapılır; yazma bölümünde ise kompozisyon el yazısıyla yazılır. Sonuçlar Haziran oturumu için genellikle temmuz sonunda, Kasım oturumu için aralık sonunda çevrim içi açıklanır. Puanlar ham puan değil, oturumlar arasında karşılaştırılabilir olması için ölçeklenmiş puandır. Japonya’daki genel başvuru süreci için [üniversite başvuru rehberimize](/bilgi-bankasi/universite-basvuru-rehberi) bakabilirsiniz.',
        ],
        table: {
          head: ['Oturum', 'Sınav tarihi', 'Yurt dışı kayıt'],
          rows: [
            ['1. oturum', '21 Haziran 2026', 'Yurt dışı merkezler kendi takvimini duyurur'],
            ['2. oturum', '8 Kasım 2026', '6–30 Temmuz 2026 (yurt dışı başvurular için)'],
          ],
        },
      },
      {
        h: 'Türkiye’den EJU’ya nasıl girilir?',
        p: [
          'JASSO’nun 2026 kılavuzuna göre EJU Japonya dışında Hindistan (Yeni Delhi), Endonezya, Hong Kong, Malezya, Moğolistan, Myanmar, Filipinler, Güney Kore, Singapur, Sri Lanka, Tayvan, Tayland ve Vietnam’da yapılıyor. Türkiye’de ya da Avrupa’da merkez bulunmuyor. Türk öğrenciler bu nedenle genellikle üç yoldan birini izler:',
        ],
        list: [
          'Japonya’da bir dil okuluna kaydolup Japonya’daki merkezlerde sınava girmek (en yaygın yol).',
          'Asya’daki bir yurt dışı merkezine seyahat ederek sınava girmek.',
          'EJU istemeyen programlara başvurmak: İngilizce lisans programları, okulun kendi sınavıyla öğrenci alan programlar veya kabulü Japonya dışından veren “pre-arrival admission” sistemleri.',
        ],
      },
      {
        h: 'EJU puanı başvuruda nasıl kullanılır?',
        p: [
          'Japon üniversiteleri EJU puanını genellikle ilk eleme için kullanır. Başvuru sırasında sınav numaranızı bildirirsiniz; üniversite puanlarınızı JASSO sisteminden görür. Bazı okullar her ders için asgari puan ilan eder, bazıları ise yalnızca puan sıralamasına bakarak adayları ikinci aşamaya çağırır. İkinci aşamada yazılı sınav, mülakat veya her ikisi yapılır. Rekabetçi üniversitelerde başarılı adayların puanları ilan edilen asgari puanların belirgin şekilde üzerindedir; bu yüzden kılavuzdaki asgari puanı hedef değil, alt sınır olarak görün.',
          'Japonya dışında yaşayan öğrenciler için bazı üniversiteler “pre-arrival” ya da “overseas admission” denilen sistemle, EJU puanını ve belgeleri çevrim içi değerlendirip mülakatı uzaktan yapar. Bu sistemde öğrenci Japonya’ya gitmeden kabul alabilir. Bu programları erken araştırmak, Türkiye’den doğrudan lisansa başlamak isteyenler için zaman kazandırır.',
        ],
      },
      {
        h: 'EJU, dil okulu ve MEXT bursu',
        p: [
          'Japonca lisans hedefleyen Türk öğrenciler için tipik yol, Japonya’da bir ila iki yıl dil okulunda okuyup bu süre içinde EJU’ya girmektir. Dil okullarının üniversite hazırlık sınıfları, EJU dersleri ve mülakat hazırlığı sunar. Dil okulu seçenekleri için [Japonya dil okulları](/yurtdisi-dil-okullari/japonya) sayfamıza bakın.',
          'Japon hükümetinin MEXT bursu Türkiye’de Japonya Büyükelçiliği üzerinden de duyurulur ve kendi yazılı sınavı ile mülakatı vardır; büyükelçilik önerisiyle kazanılan lisans bursunda EJU şartı yoktur. Japonya’ya kendi imkânlarıyla gidip EJU’da yüksek puan alan öğrenciler ise JASSO’nun “Honors Scholarship” gibi desteklerine aday olabilir. Ayrıntılı burs stratejisi için [burs rehberimize](/bilgi-bankasi/yurtdisi-burs-rehberi) bakın.',
        ],
      },
      {
        h: 'Hazırlık ipuçları',
        list: [
          'Japonca bölümü akademik metin ağırlıklıdır; JLPT N2 seviyesine ulaşmak EJU Japonca için iyi bir başlangıç noktasıdır.',
          'Matematik Kurs 2, Türk lise müfredatının ileri konularıyla büyük ölçüde örtüşür; ama soruları Japonca okuma hızınız belirler.',
          'Japonya ve Dünya dersi Japonya’nın siyasi ve ekonomik yapısına odaklanır; Türk öğrenciler için en yabancı derstir, erken başlayın.',
          'Kompozisyon bölümünde belirli bir görüşü savunan, yapılandırılmış kısa deneme yazmayı çalışın.',
          'Geçmiş yıl soruları JASSO tarafından yayımlanır; deneme sınavlarını gerçek süreyle çözün.',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'Hedef bölümün istediği matematik kursunu yanlış seçmek.',
          'Sınav dilini (Japonca/İngilizce) üniversite şartını kontrol etmeden seçmek.',
          'Kasım oturumunun kayıt tarihinin Temmuz’da kapandığını unutmak.',
          'EJU puanını tek kriter sanmak; mülakat ve okulun kendi sınavı da belirleyicidir.',
        ],
      },
    ],
    seoTitle: 'EJU Nedir? Japonya Üniversite Giriş Sınavı Rehberi',
    description: 'EJU nedir, hangi dersleri kapsar, puanlama nasıl yapılır? 2026 sınav tarihleri, yurt dışı merkezler ve Türk öğrencilerin EJU’ya girme yolları anlatılıyor.',
    faqs: [
      { q: 'EJU Türkiye’de yapılıyor mu?', a: 'Hayır. JASSO’nun 2026 kılavuzunda Türkiye’de sınav merkezi bulunmuyor. Türk öğrenciler genellikle Japonya’daki merkezlerde ya da Asya’daki yurt dışı merkezlerde sınava girer.' },
      { q: 'EJU yılda kaç kez yapılır?', a: 'EJU yılda iki kez, Haziran ve Kasım aylarında yapılır. 2026 oturumları 21 Haziran ve 8 Kasım tarihlerindedir.' },
      { q: 'EJU puanı kaç yıl geçerli?', a: 'EJU puanının geçerliliğini üniversiteler belirler; çoğu okul son iki yıl içindeki oturumların puanlarını kabul eder. Hangi oturumların kabul edildiği başvuru kılavuzunda yazar.' },
      { q: 'EJU İngilizce yapılabilir mi?', a: 'Fen, Japonya ve Dünya ve Matematik dersleri Japonca veya İngilizce yanıtlanabilir. Japonca dersi ise doğal olarak Japonca yapılır; bazı üniversiteler belirli bir sınav dili şartı koyabilir.' },
      { q: 'EJU olmadan Japonya’da üniversite okunur mu?', a: 'Evet. İngilizce lisans programlarının çoğu ve bazı üniversitelerin kendi sınavıyla öğrenci alan programları EJU istemez. MEXT bursunun büyükelçilik önerili lisans kategorisinde de EJU şartı yoktur.' },
    ],
    updated: '2026-10-24',
  },
]
