// Almanya ve Avusturya kavram rehberleri (bilgi bankası). Son kontrol: 2026-10-24
import type { Guide } from '../guides'

export const almancaGuides: Guide[] = [
  /* ================= SPERRKONTO ================= */
  {
    slug: 'sperrkonto-nedir',
    title: 'Sperrkonto (bloke hesap) nedir?',
    group: 'Vize & Belgeler',
    program: 'lisans',
    countries: ['almanya'],
    summary: 'Almanya öğrenci vizesi için istenen bloke hesabın 2026 tutarı, nasıl açıldığı, aylık çekim kuralı, masraflar ve sık yapılan hatalar.',
    facts: [
      { label: 'Yıllık tutar (2026)', value: '11.904 €' },
      { label: 'Aylık çekim limiti', value: '992 €' },
      { label: 'Kimler için', value: 'AB dışı öğrenciler (ulusal D vizesi)' },
      { label: 'Açılış süresi', value: 'Genellikle birkaç gün; para transferi 1–2 hafta' },
      { label: 'Alternatifler', value: 'Verpflichtungserklärung, burs belgesi' },
    ],
    sections: [
      {
        h: 'Sperrkonto ne işe yarar?',
        p: [
          'Sperrkonto, Almanya’da okuyacak AB dışı öğrencilerin ilk yıl yaşam masraflarını karşılayabileceklerini kanıtlamak için açtıkları, üzerinde çekim kısıtı olan bir banka hesabıdır. Alman Dışişleri Bakanlığı (Auswärtiges Amt) bu hesabı finansal yeterlilik kanıtı olarak kabul eder ve Türkiye’den yapılan [öğrenci vizesi başvurularının](/bilgi-bankasi/almanya-ogrenci-vizesi) neredeyse tamamında bloke hesap onay belgesi istenir.',
          'Mantık basittir: Bir yıllık asgari yaşam gideri hesaba tek seferde yatırılır, ancak siz Almanya’ya geldikten sonra her ay yalnızca belirlenen tutar serbest bırakılır. Böylece öğrencinin ilk aylarda parasız kalması önlenir. Hesaptaki para size aittir; harcanmayan kısım istenirse sonradan geri alınabilir.',
        ],
      },
      {
        h: '2026’da ne kadar yatırmak gerekiyor?',
        p: [
          'Güncel asgari tutar **yıllık 11.904 avro**, yani **aylık 992 avro**dur. Bu rakam, Almanya’daki devlet öğrenci yardımı BAföG’ün ihtiyaç tutarına bağlıdır ve BAföG oranları değiştiğinde güncellenir. Bu nedenle başvuru yapacağınız dönemde Türkiye’deki Alman temsilciliğinin sitesindeki tutarı mutlaka kontrol edin; eski bir rakamla açılmış hesap vize dosyasında eksik sayılır.',
          'Dil kursu, üniversite adaylığı (Studienbewerber) veya farklı oturum amaçları için istenen tutar öğrenci vizesinden farklı olabilir. Ayrıca sağlayıcılar, kendi hizmet bedellerini ve bazen bir güvenlik payını yatırmanız gereken tutara ekler. Transfer sırasında kur farkı ve banka kesintisi nedeniyle eksik kalmaması için birkaç yüz avro fazla göndermek pratik bir önlemdir.',
        ],
        table: {
          head: ['Kalem', 'Tutar', 'Not'],
          rows: [
            ['Asgari bloke tutar', '11.904 €/yıl', 'Öğrenim vizesi için 2026 tutarı'],
            ['Aylık serbest bırakılan', '992 €', 'Almanya’ya varıştan sonra'],
            ['Açılış ücreti', 'Sağlayıcıya göre değişir', 'Kampanyalı paketler olabilir'],
            ['Aylık hesap ücreti', 'Genellikle birkaç avro', 'Sözleşmede yazar'],
            ['Kısa süreli program', 'Ay sayısı × 992 €', 'Süre 12 aydan kısaysa temsilciliğe danışın'],
          ],
        },
      },
      {
        h: 'Adım adım hesap açma süreci',
        list: [
          'Kabul belgenizi (Zulassung) veya Studienkolleg / dil kursu kayıt belgenizi alın; bazı sağlayıcılar başvuru aşamasında bunu ister.',
          'Alman Dışişleri Bakanlığı’nın kabul ettiği bir sağlayıcı seçin (örneğin Fintiba, Expatrio veya Coracle gibi dijital sağlayıcılar). Listeyi temsilcilik sitesinden doğrulayın.',
          'Online formu pasaport bilgilerinizle doldurun ve kimlik doğrulamasını (genellikle görüntülü veya uygulama üzerinden) tamamlayın.',
          'Size verilen IBAN’a, kendi adınıza veya velinizin adına bir Türk bankasından avro olarak SWIFT transferi yapın. Açıklama kısmına sağlayıcının istediği referans numarasını yazın.',
          'Para hesaba geçtiğinde sağlayıcı “Sperrkonto-Bestätigung” adlı onay belgesini gönderir. Bu belge vize dosyasına girer.',
          'Almanya’ya vardıktan sonra hesabı aktive edin ve bir Alman cari hesabı (Girokonto) tanımlayın; aylık 992 avro bu hesaba aktarılmaya başlar.',
        ],
      },
      {
        h: 'Sağlayıcı seçerken neye bakmalı?',
        p: [
          'Sağlayıcılar arasındaki fark çoğunlukla ücret yapısı ve ek hizmetlerdedir. Bazıları bloke hesabı sağlık sigortası ile paket hâlinde sunar; bu, vize dosyasındaki sigorta belgesini de tek kalemde çözebilir. Ancak paketteki sigortanın türüne dikkat edin: Üniversiteye kayıt için genellikle Almanya’daki yasal sağlık sigortası (gesetzliche Krankenversicherung) gerekir, seyahat sigortası yalnızca ilk haftaları karşılar. Ayrıntılar için [sağlık sigortası rehberimize](/bilgi-bankasi/saglik-sigortasi) bakabilirsiniz.',
        ],
        list: [
          'Açılış ve aylık ücret toplamı (bir yıllık maliyeti hesaplayın)',
          'Vize reddinde geri ödeme süresi ve kesinti tutarı',
          'Türkçe veya İngilizce müşteri desteği',
          'Almanya’ya gelmeden önce Alman IBAN’ı verip vermediği',
          'Erken çekim veya tutarı artırma imkânı',
        ],
      },
      {
        h: 'Bloke hesap yerine ne kullanılabilir?',
        p: [
          'Sperrkonto tek yol değildir. Almanya’da oturan biri (akraba, aile dostu) yerel yabancılar dairesinde **Verpflichtungserklärung** imzalayarak masraflarınızı üstlenebilir; bu kişinin gelirinin yeterli olduğu ayrıca incelenir. Tam burs alan öğrenciler burs belgesini, bazı durumlarda velisinin Almanya’daki gelirini gösterenler de farklı belgeler sunabilir. Hangi alternatifin sizin dosyanız için kabul göreceğini başvurudan önce temsilcilikle teyit edin.',
          'Türkiye’deki ailenin banka hesabı, tapu veya maaş belgesi tek başına Almanya öğrenci vizesinde Sperrkonto yerine geçmez. Bu konuda [sponsor mektubu örneğimiz](/kaynaklar/ornek-sponsor-mektubu) başka ülkeler için faydalı olsa da Almanya için bloke hesap veya resmî taahhüt aranır.',
        ],
      },
      {
        h: '992 avro gerçekte yeter mi?',
        p: [
          'Bloke hesap tutarı yasal bir asgari sınırdır, şehrinizdeki gerçek yaşam maliyetini garanti etmez. Aylık 992 avro; kira, yemek, sağlık sigortası, telefon ve ulaşım gibi temel kalemleri küçük ve orta ölçekli üniversite şehirlerinde karşılayabilir. Ancak Münih, Frankfurt, Hamburg veya Köln’de özel bir öğrenci rezidansında kalıyorsanız yalnızca kira bu tutarın yarısını aşabilir. Bu nedenle ailelere, bloke hesaba ek olarak ilk dönem için ayrı bir başlangıç bütçesi ayırmalarını öneriyoruz.',
        ],
        table: {
          head: ['Gider kalemi', 'Tipik aylık aralık', 'Not'],
          rows: [
            ['Kira (yurt veya WG)', '300–600 €', 'Büyük şehirlerde daha yüksek'],
            ['Yasal sağlık sigortası (öğrenci tarifesi)', 'Yaklaşık 130–150 €', 'Kasaya göre küçük farklar olur'],
            ['Yemek ve market', '200–300 €', 'Mensa kullanımı maliyeti düşürür'],
            ['Telefon, internet, yayın payı', '30–50 €', 'WG’de paylaşılır'],
            ['Ulaşım', 'Katkı payına dahil', 'Deutschlandsemesterticket'],
          ],
        },
      },
      {
        h: 'İkinci yıl, iade ve hesap kapatma',
        p: [
          'Bloke hesap ilk oturum izni ve vize için kritik olsa da, ikinci yıl oturum izni uzatılırken de yabancılar dairesi finansal yeterlilik ister. Bu aşamada yeni bir bloke hesap yatırması yapabilir, Almanya’daki yan iş gelirinizi (iş sözleşmesi ve maaş bordrolarıyla) gösterebilir veya bir Verpflichtungserklärung sunabilirsiniz. Hangi belgenin kabul edileceği şehirden şehre farklı uygulanabildiği için uzatmadan birkaç ay önce yerel yabancılar dairesinin listesini kontrol edin. Genel bütçe hesabı için [yurt dışı bütçe planlama rehberimize](/bilgi-bankasi/yurtdisi-butce-planlama), Almanya’daki eğitim seçeneklerine genel bakış için [Almanya sayfamıza](/ulkeler/almanya) göz atabilirsiniz.',
          'Vize başvurunuz reddedilirse ya da Almanya’ya gitmekten vazgeçerseniz, ret yazısını veya temsilciliğin istediği belgeyi sağlayıcıya ileterek parayı geri isteyebilirsiniz. İade, sağlayıcının ücretleri düşüldükten sonra genellikle gönderen hesaba yapılır. Almanya’dayken hesabı erken kapatmak için ise yabancılar dairesinin onayı gerekebilir; Türkiye’deki Alman temsilcilikleri de bloke hesabın kapatılması için ayrı bir form kullanır.',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'Geçen yılın tutarıyla hesap açmak ve vize randevusunda eksik tutar nedeniyle dosyanın askıya alınması',
          'Transferi son haftaya bırakmak; uluslararası transfer ve onay belgesi birkaç iş günü sürebilir',
          'Transfer açıklamasına referans numarasını yazmamak',
          'Paket sigortanın üniversite kaydı için yeterli olduğunu varsaymak',
          'Almanya’daki ilk ay için yanında hiç nakit veya kart limiti getirmemek; ilk aktarım hesap aktivasyonundan sonra başlar',
        ],
      },
    ],
    seoTitle: 'Sperrkonto Nedir? 2026 Bloke Hesap Tutarı ve Açılışı',
    description: 'Almanya bloke hesap (Sperrkonto) 2026 tutarı 11.904 €: nasıl açılır, sağlayıcı seçimi, aylık 992 € çekim kuralı, vize reddinde iade ve alternatifler.',
    faqs: [
      { q: 'Sperrkonto 2026’da ne kadar?', a: 'Almanya öğrenim vizesi için 2026’da istenen asgari tutar yıllık 11.904 avro, aylık 992 avrodur. Tutar BAföG oranlarına bağlı olarak değişebildiği için başvuru öncesinde Alman temsilciliğinin güncel duyurusunu kontrol etmelisiniz.' },
      { q: 'Bloke hesaba parayı ailem gönderebilir mi?', a: 'Evet. Transferi veliniz veya bir yakınınız kendi Türk banka hesabından yapabilir; önemli olan hesabın sizin adınıza açılmış olması ve doğru referans numarasının yazılmasıdır. Vize reddinde iade genellikle gönderen hesaba yapılır.' },
      { q: 'Bloke hesaptaki parayı Almanya’da hemen çekebilir miyim?', a: 'Hayır. Hesap aktive edildikten sonra her ay yalnızca 992 avro Alman cari hesabınıza aktarılır. İlk aktarım hesap aktivasyonuna bağlı olduğundan ilk birkaç hafta için ayrıca bütçe ayırmanız gerekir.' },
      { q: 'Sperrkonto olmadan Almanya öğrenci vizesi alınır mı?', a: 'Almanya’da yaşayan birinin yabancılar dairesinde imzaladığı Verpflichtungserklärung veya tam burs belgesi bloke hesabın yerine geçebilir. Türkiye’deki aile hesap dökümleri ise tek başına yeterli sayılmaz.' },
      { q: 'Vize reddedilirse bloke hesaptaki para geri gelir mi?', a: 'Evet. Ret yazısını sağlayıcıya ilettiğinizde para, sağlayıcının hizmet bedelleri düşülerek iade edilir. İade süresi sağlayıcıya göre birkaç günden birkaç haftaya kadar değişebilir.' },
    ],
    updated: '2026-10-24',
  },

  /* ================= UNI-ASSIST ================= */
  {
    slug: 'uni-assist-nedir',
    title: 'Uni-assist nedir, nasıl başvurulur?',
    group: 'Başvuru',
    program: 'lisans',
    countries: ['almanya'],
    summary: 'Alman üniversitelerinin uluslararası başvuruları ön incelemeden geçirdiği uni-assist sistemi: ücretler, VPD, belgeler ve Türk öğrencilere özel kurallar.',
    facts: [
      { label: 'İlk başvuru ücreti', value: '75 €' },
      { label: 'Aynı dönemde ek başvuru', value: '30 €' },
      { label: 'Ortalama inceleme süresi', value: 'Birkaç hafta (yoğun dönemde daha uzun)' },
      { label: 'Türkiye için APS', value: 'Gerekmez' },
      { label: 'Çeviri kuralı', value: '“Yeminli tercüman” ibareli Türkçe mühür' },
    ],
    sections: [
      {
        h: 'Uni-assist ne yapar?',
        p: [
          'Uni-assist (Arbeits- und Servicestelle für internationale Studienbewerbungen), çok sayıda Alman üniversitesinin yurt dışı diplomalı adayların başvurularını ön incelemeden geçirmek için kullandığı merkezi bir hizmettir. Uni-assist sizi kabul etmez veya reddetmez; belgelerinizin eksiksiz olup olmadığını, diplomanızın Almanya’da hangi düzeyde üniversiteye giriş hakkı verdiğini ve notunuzun Alman sistemine çevrilmiş karşılığını kontrol eder. Kabul kararını her zaman üniversite verir.',
          'Türk öğrenciler açısından uni-assist’in en önemli işlevi, Türk lise diplomasının veya üniversite derecesinin Almanya’da hangi kapıyı açtığını resmî olarak belirlemesidir. Örneğin yalnızca lise diploması ve YKS yerleşmesiyle lisans programına başvuran bir adayın dosyası, uni-assist incelemesinde “Studienkolleg gerekli” sonucuyla dönebilir. Bu sonuç ret değildir; üniversite size doğrudan bölüm yerine Studienkolleg ve Feststellungsprüfung yolunu önerir. Bu nedenle başvurudan önce diplomanızın durumunu [anabin rehberimizdeki](/bilgi-bankasi/anabin-nedir) kurallarla karşılaştırmak, hangi başvuru türünü seçeceğinizi netleştirir.',
          'Her üniversite uni-assist kullanmaz. Bazıları başvuruları kendi portalları üzerinden alır, bazıları ise yalnızca belirli programlarda uni-assist’e yönlendirir. Bu yüzden ilk adım, hedef programın başvuru sayfasında “Bewerbung über uni-assist” ifadesi olup olmadığını kontrol etmektir.',
        ],
      },
      {
        h: 'İki başvuru türü: tam başvuru ve VPD',
        p: [
          '**Tam başvuru** modelinde uni-assist dosyanızı inceler ve uygun bulursa doğrudan üniversiteye iletir. **VPD (Vorprüfungsdokumentation)** modelinde ise uni-assist size not ortalamanızın Alman karşılığını gösteren bir belge düzenler; siz bu belgeyle üniversitenin kendi portalından başvurursunuz. VPD genellikle bir yıl geçerlidir ve aynı başvuru döneminde birden fazla üniversitede kullanılabilir. Bazı üniversiteler kendi kurallarına göre daha uzun süre kabul edebilir.',
        ],
        table: {
          head: ['', 'Tam başvuru', 'VPD'],
          rows: [
            ['Kabul kararını kim verir?', 'Üniversite', 'Üniversite'],
            ['Başvuru nereden yapılır?', 'Uni-assist portalı (My assist)', 'Önce uni-assist, sonra üniversite portalı'],
            ['Çıktı', 'Dosya üniversiteye iletilir', 'Not çevirili VPD belgesi'],
            ['Ücret', '75 € ilk, 30 € ek', 'Aynı ücret yapısı'],
            ['Tipik kullanım', 'Lisans ve birçok yüksek lisans', 'Kendi portalı olan üniversiteler'],
          ],
        },
      },
      {
        h: 'Ücretler ve ödeme',
        p: [
          'Aynı başvuru dönemi (örneğin kış dönemi) için ilk üniversite başvurusu **75 avro**, aynı dönemdeki her ek başvuru **30 avro**dur. Ücret iade edilmez; dosyanız reddedilse bile geri alınmaz. Uni-assist, ödeme ulaşmadan dosyayı incelemeye almaz, bu yüzden son başvuru tarihine yakın günlerde kredi kartıyla ödeme yapmak havaleye göre daha güvenlidir. Ücretlerin güncel hâlini uni-assist’in “Handling fees” sayfasından kontrol edin.',
        ],
      },
      {
        h: 'Türkiye’den başvuranlar için belge listesi',
        p: [
          'Uni-assist’in ülke bazlı kurallarına göre Türkiye’de liseyi bitiren adaylardan istenen temel belgeler şunlardır. Belgeleri My assist portalına yüklersiniz; bazı üniversiteler ayrıca onaylı kopya veya asıl belge görmek isteyebilir.',
        ],
        list: [
          'Lise diploması ve not dökümü',
          'YKS yerleştirme sonuç belgesi (ÖSYM): yerleştiğiniz üniversite, fakülte ve puan türü görünmeli',
          'Türkiye’de üniversiteye kayıtlıysanız transkript (tercihen e-Devlet çıktısı)',
          'Anadolu Teknik Lisesi veya Anadolu İmam Hatip Lisesi mezunları için son dört yılın ders ve not listesi',
          'Açık Öğretim Lisesi mezunları için tasdikname ile getirilen derslerin listesi',
          'Önlisans mezunları için önlisans diploması ve not dökümü',
          'Dil belgesi (TestDaF, DSH, Goethe C1/C2, telc C1 Hochschule veya İngilizce programlar için IELTS/TOEFL)',
          'Pasaport kopyası ve programın istediği diğer belgeler (CV, motivasyon mektubu)',
        ],
      },
      {
        h: 'Çeviri ve onay kuralları',
        p: [
          'Uni-assist Türkiye’den gelen çevirilerde yalnızca **yeminli tercüman** çevirisini kabul eder ve tercüman mühründe Türkçe “yeminli tercüman” ibaresinin bulunmasını şart koşar. Sadece İngilizce veya Almanca yazılı mühürler kabul edilmez. Diploma ve transkriptlerin hangi durumda apostil veya noter onayı gerektirdiğini [apostil ve yeminli tercüme rehberimizde](/bilgi-bankasi/apostil-ve-yeminli-tercume) ayrıntılı anlattık.',
          'Türkiye’de üniversite okumuş adayların not çevirisinde, uni-assist ders bazlı geçme notlarını değil, diplomanın verilmesi için gereken asgari not ortalamasını dikkate alır. Bu bilgi çoğunlukla Diploma Supplement’in 4.2 numaralı bölümünde yer alır. Not çevirisinin nasıl yapıldığını [NC puanı rehberinde](/bilgi-bankasi/nc-puani-nedir) örnekle anlattık.',
        ],
      },
      {
        h: 'Adım adım başvuru ve zamanlama',
        list: [
          'Hedef programın sayfasında başvurunun uni-assist üzerinden mi, VPD ile mi, yoksa doğrudan üniversiteye mi yapıldığını belirleyin.',
          'uni-assist.de üzerinden My assist hesabı açın; kişisel bilgilerinizi pasaportla birebir aynı yazın.',
          'Eğitim geçmişinizi (lise, varsa üniversite) eksiksiz girin ve programı “Bewerbung” sekmesinden seçin.',
          'Diploma, YKS yerleştirme belgesi, transkript ve çevirileri tek tek okunaklı PDF olarak yükleyin.',
          'Ödemeyi yapın ve başvuruyu “gönderildi” durumuna getirin; yalnızca kaydedilmiş başvurular incelenmez.',
          'Uni-assist’ten eksik belge e-postası gelirse belirtilen süre içinde tamamlayın.',
          'Olumlu ön değerlendirme sonrası dosya üniversiteye iletilir; kabul veya ret bildirimini üniversiteden beklersiniz.',
        ],
        p: [
          'Kış dönemi için birçok üniversitede son tarih 15 Temmuz, yaz dönemi için 15 Ocak civarıdır; ancak yüksek lisans programları ve kontenjanlı bölümler çok daha erken tarihler belirleyebilir. Uni-assist yoğun dönemlerde incelemeyi birkaç haftada tamamlar, bu nedenle dosyanızı son tarihten en az 6–8 hafta önce göndermeniz eksik belge çıkarsa tamamlamaya zaman bırakır. Genel takvim için [başvuru takvimi rehberimize](/bilgi-bankasi/basvuru-takvimi) bakabilirsiniz.',
        ],
      },
      {
        h: 'Uni-assist kullanmayan üniversiteler',
        p: [
          'Bazı büyük üniversiteler (özellikle yüksek lisans düzeyinde) kendi online portallarını kullanır ve yabancı belgeleri doğrudan inceler. Bazıları ise “Dialogorientiertes Serviceverfahren” (DoSV) denilen ortak sistemle kontenjanlı lisans programlarını hochschulstart.de üzerinden koordine eder; bu durumda bile AB dışı adayların önce uni-assist veya üniversiteden VPD alması istenebilir. Kısacası tek bir kural yoktur; her programın başvuru sayfası esas alınmalıdır. Lisans seçenekleri için [Almanya’da lisans](/lisans-programlari/almanya), yüksek lisans için [Almanya’da yüksek lisans](/yurtdisi-yuksek-lisans/almanya) sayfalarımıza, başvuru dosyasında istenen metinler için [motivasyon mektubu rehberimize](/bilgi-bankasi/motivasyon-mektubu-nasil-yazilir) bakabilirsiniz.',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'YKS yerleştirme belgesi yerine yalnızca sonuç (puan) belgesini yüklemek',
          'Mührü yalnızca İngilizce olan tercüme bürosu kullanmak',
          'Her üniversite için ayrı ücret ödendiğini sanıp gereksiz VPD almak veya tersine VPD isteyen üniversiteye tam başvuru yapmak',
          'Dil belgesini sonradan göndereceğini programın kabul edip etmediğini kontrol etmemek',
          'Uni-assist’in olumlu ön değerlendirmesini kabul sanmak',
        ],
      },
    ],
    seoTitle: 'Uni-assist Nedir? Başvuru, Ücretler ve VPD Rehberi',
    description: 'Uni-assist nedir, nasıl başvurulur? 75 € ilk başvuru ücreti, VPD farkı, Türkiye’den istenen belgeler, yeminli tercüme kuralı ve sık yapılan hatalar.',
    faqs: [
      { q: 'Uni-assist ücreti ne kadar?', a: 'Aynı başvuru dönemi için ilk üniversite başvurusu 75 avro, her ek başvuru 30 avrodur. Ücret, başvuru reddedilse bile iade edilmez.' },
      { q: 'Uni-assist kabul veriyor mu?', a: 'Hayır. Uni-assist yalnızca belgelerinizi ve giriş hakkınızı ön incelemeden geçirir, notunuzu Alman sistemine çevirir. Kabul veya ret kararını başvurduğunuz üniversite verir.' },
      { q: 'VPD nedir, ne kadar geçerli?', a: 'VPD, uni-assist’in not ortalamanızın Alman karşılığını gösteren belgesidir. Genellikle bir yıl geçerlidir ve üniversitenin kendi portalından başvururken yüklenir.' },
      { q: 'Uni-assist başvurusu kaç hafta sürer?', a: 'Eksiksiz dosyalar genellikle birkaç haftada incelenir; yaz aylarındaki yoğun dönemde süre uzayabilir. Son başvuru tarihinden en az 6–8 hafta önce göndermeniz önerilir.' },
      { q: 'Türk öğrenciler için APS gerekiyor mu?', a: 'Hayır. APS sertifikası Çin, Hindistan ve Vietnam gibi belirli ülkeler için istenir; Türkiye’den başvuranlar için gerekmez.' },
      { q: 'Uni-assist belgeleri posta ile göndermek gerekir mi?', a: 'Belgeler önce My assist portalına dijital olarak yüklenir. Bazı üniversiteler kayıt aşamasında onaylı kopya veya asıl belge görmek isteyebileceği için programın ve üniversitenin kurallarını ayrıca kontrol edin.' },
    ],
    updated: '2026-10-24',
  },

  /* ================= NC ================= */
  {
    slug: 'nc-puani-nedir',
    title: 'NC (Numerus Clausus) puanı nedir, Türk notları nasıl çevrilir?',
    group: 'Üniversite',
    program: 'lisans',
    countries: ['almanya'],
    summary: 'Almanya’da kontenjanlı bölümlerin NC sınırı nasıl oluşur, Türk lise ve üniversite notları Bavyera formülüyle nasıl çevrilir: örnekli anlatım.',
    facts: [
      { label: 'Alman not skalası', value: '1,0 (en iyi) – 4,0 (geçer)' },
      { label: 'Çeviri yöntemi', value: 'Modifiye Bavyera formülü' },
      { label: 'Türk lise skalası', value: '100 üzerinden, geçme notu 50' },
      { label: 'NC türleri', value: 'Ulusal ve yerel (örtlich)' },
    ],
    sections: [
      {
        h: 'NC neyi ifade eder?',
        p: [
          'Numerus clausus Latince “kapalı sayı” anlamına gelir ve Almanya’da başvuru sayısı kontenjanı aşan bölümler için kullanılır. Halk arasında “NC puanı” denilen değer aslında sabit bir baraj değildir: Bir önceki dönemde o bölüme kabul edilen son adayın not ortalamasıdır. Örneğin bir psikoloji bölümünün NC’si 1,4 ise, geçen dönem 1,4’ten daha zayıf ortalamayla kimse kabul edilmemiştir. Bu yıl başvuran adaylara göre sınır yukarı veya aşağı oynayabilir.',
          'Kontenjansız bölümlerde (zulassungsfrei) NC yoktur; giriş koşullarını sağlayan herkes kayıt yaptırabilir. Kontenjanlı (zulassungsbeschränkt) bölümlerde ise not ortalaması, bazen ek olarak test sonucu, mesleki deneyim veya mülakat puanıyla birleştirilerek sıralama yapılır.',
        ],
      },
      {
        h: 'Ulusal ve yerel NC',
        p: [
          'Tıp, diş hekimliği, eczacılık ve veterinerlik ulusal düzeyde kontenjanlı bölümlerdir. Almanlar ve AB vatandaşları bu bölümlere hochschulstart.de üzerinden başvurur. AB dışı adaylar (Türk vatandaşları dahil) ise genellikle doğrudan üniversiteye veya uni-assist aracılığıyla başvurur ve “Ausländerquote” denilen, toplam kontenjanın küçük bir yüzdesinden oluşan kotada birbirleriyle yarışır. Bu bölümlerde beklenen ortalama çoğunlukla 1,0–1,3 aralığındadır ve ek olarak TMS gibi testler avantaj sağlar.',
          'Psikoloji, işletme, hukuk veya popüler şehirlerdeki birçok bölümün NC’si ise yereldir: Her üniversite kendi kontenjanını ve sıralamasını belirler. Aynı bölüm Münih’te 1,5 isterken daha küçük bir şehirde kontenjansız olabilir.',
          'Bu nedenle “psikolojinin NC’si kaç?” sorusunun tek bir cevabı yoktur. Her üniversite, her dönemin sonunda kabul edilen son adayın notunu (Auswahlgrenze) ayrıca yayımlar. Bu listeler bir sonraki dönem için yalnızca yön göstericidir; başvuru sayısı arttığında sınır yükselebilir, kontenjan arttığında düşebilir.',
        ],
      },
      {
        h: 'Bavyera formülü: Türk notları nasıl çevrilir?',
        p: [
          'Alman üniversiteleri ve uni-assist, yabancı notları Alman skalasına çevirmek için Kültür Bakanları Konferansı’nın (KMK) önerdiği **modifiye Bavyera formülünü** kullanır:',
          '**Alman notu = 1 + 3 × (Nmax − Nd) ÷ (Nmax − Nmin)**',
          'Burada **Nmax** sizin sisteminizdeki en yüksek not, **Nmin** geçer not, **Nd** ise sizin notunuzdur. Sonuç genellikle virgülden sonraki ilk haneye kadar alınır, ikinci hane atılır (yuvarlanmaz). Türk lise diplomasında not 100 üzerinden verilir ve geçme notu 50’dir; yani Nmax = 100, Nmin = 50 kabul edilir.',
          '**Örnek:** Diploma notunuz 87 olsun. 1 + 3 × (100 − 87) ÷ (100 − 50) = 1 + 3 × 13 ÷ 50 = 1 + 0,78 = 1,78. İkinci hane atıldığında Alman karşılığınız **1,7** olur.',
        ],
        table: {
          head: ['Türk lise notu (100’lük)', 'Hesap', 'Alman karşılığı'],
          rows: [
            ['100', '1 + 3 × 0/50', '1,0'],
            ['95', '1 + 3 × 5/50', '1,3'],
            ['90', '1 + 3 × 10/50', '1,6'],
            ['85', '1 + 3 × 15/50', '1,9'],
            ['80', '1 + 3 × 20/50', '2,2'],
            ['75', '1 + 3 × 25/50', '2,5'],
            ['70', '1 + 3 × 30/50', '2,8'],
            ['60', '1 + 3 × 40/50', '3,4'],
          ],
        },
      },
      {
        h: 'Üniversite not ortalaması (4,00 skalası) nasıl çevrilir?',
        p: [
          'Yüksek lisans başvurusunda veya Türkiye’de üniversite okuduktan sonra yapılan lisans başvurusunda formül aynıdır; değişen Nmin değeridir. Uni-assist, ders bazında geçme notunu değil, **diplomanın verilmesi için gereken asgari ortalamayı** esas alır. Birçok Türk üniversitesinde bu değer 2,00’dir ve Diploma Supplement’in 4.2 numaralı bölümünde yazar; sizin üniversitenizde farklıysa o değer kullanılır.',
          '**Örnek:** Nmax = 4,00, Nmin = 2,00 ve ortalamanız 3,20 ise: 1 + 3 × (4,00 − 3,20) ÷ 2,00 = 1 + 1,2 = **2,2**. Ortalamanız 3,50 olsaydı sonuç 1,75, yani **1,7** olurdu. Görüldüğü gibi Nmin’in 2,00 olması, Türk ortalamalarının Almanya’da beklenenden daha düşük görünmesine yol açabilir; hedef programın istediği alt sınırı buna göre değerlendirmek gerekir.',
        ],
      },
      {
        h: 'Hesaplamada sık yapılan hatalar',
        list: [
          'Türk üniversitelerinde ders geçme notunu (örneğin DD veya 1,00) Nmin olarak almak; uni-assist mezuniyet için gereken asgari ortalamayı kullanır.',
          'Sonucu yuvarlamak: 1,78 sonucu 1,8 değil, ikinci hane atılarak 1,7 olarak kabul edilir.',
          '100’lük sistemdeki Türk üniversite notlarını 4’lük sisteme kendi tablonuzla çevirip öyle hesaplamak; resmî transkriptteki skala esas alınır.',
          'Lise diploma notu yerine son yıl ortalamasını kullanmak; hesaplama diploma notu üzerinden yapılır.',
          'Uni-assist’in veya üniversitenin yaptığı resmî çeviri gelmeden yalnızca kendi hesabınıza göre başvuru listesi daraltmak.',
        ],
        p: [
          'Bu hesaplamaların resmî çıktısı uni-assist’in VPD belgesi veya üniversitenin kendi değerlendirmesidir. Süreç için [uni-assist rehberimize](/bilgi-bankasi/uni-assist-nedir), diplomanızın Almanya’daki giriş hakkı için [anabin rehberimize](/bilgi-bankasi/anabin-nedir) bakabilirsiniz.',
        ],
      },
      {
        h: 'Not dışında hangi kriterler etkili olabilir?',
        p: [
          'Kontenjanlı bölümlerde sıralama tek başına nota bağlı olmayabilir. Üniversiteler; alanla ilgili mesleki eğitim veya iş deneyimini, ilgili derslerdeki notları, TMS veya TestAS gibi test sonuçlarını, motivasyon mektubunu ve bazı programlarda mülakatı puanlamaya katabilir. Yüksek lisans programlarında ise lisans ortalamasının yanında ders içeriğinin uygunluğu, kredi sayısı ve dil belgesi belirleyicidir. Hedef programın seçim yönetmeliği (Auswahlsatzung) bu ağırlıkları açıkça yazar. [Almanya’da lisans](/lisans-programlari/almanya) sayfamızda bölüm seçimi ve başvuru stratejisi hakkında daha fazla bilgi bulabilirsiniz.',
        ],
      },
      {
        h: 'Studienkolleg yolunda hangi not sayılır?',
        p: [
          'Lise diploması Almanya’da doğrudan giriş hakkı vermeyen adaylar [Studienkolleg](/bilgi-bankasi/studienkolleg-nedir) sonunda Feststellungsprüfung (FSP) sınavına girer. Bu durumda üniversite başvurusunda kullanılan not çoğunlukla FSP notudur; bazı eyalet ve üniversiteler FSP notunu lise notuyla birleştirerek hesaplar. Yani Studienkolleg’e giden bir öğrenci, lise notu zayıf olsa bile iyi bir FSP sonucu ile kontenjanlı bölümlerde şansını artırabilir. Hangi yöntemin uygulanacağı üniversitenin başvuru yönetmeliğinde yazar.',
        ],
      },
      {
        h: 'NC sınırını aşmak için pratik stratejiler',
        list: [
          'Aynı bölümü farklı şehirlerde aynı anda hedefleyin; büyük şehirlerin NC’si genellikle daha yüksektir.',
          'Hochschulstart veya üniversite sitelerindeki geçmiş dönem kabul sınırlarını (Auswahlgrenzen) karşılaştırın.',
          'Tıp gibi bölümlerde TMS, mühendislik ve fen alanlarında bazı üniversitelerin kabul ettiği TestAS gibi testlerle notunuzu destekleyin.',
          'Kış ve yaz dönemi başvurularını ayrı değerlendirin; bazı programlar yaz döneminde de öğrenci alır ve rekabet farklı olabilir.',
          'NC’si yüksek bölüme alternatif olarak benzer içerikli kontenjansız bir programı veya [özel üniversiteleri](/almanyadaki-ozel-universiteler) yedek plan olarak hazırlayın.',
        ],
      },
    ],
    seoTitle: 'NC Puanı Nedir? Türk Notunu Alman Notuna Çevirme Rehberi',
    description: 'Almanya NC puanı nedir, nasıl hesaplanır? Bavyera formülüyle Türk lise ve üniversite notunu Alman notuna çevirme, örnek tablo ve başvuru stratejisi.',
    faqs: [
      { q: 'NC puanı nasıl hesaplanır?', a: 'NC, bir önceki dönemde kontenjanlı bölüme kabul edilen son adayın not ortalamasıdır; sabit bir baraj değildir. Her yıl başvuran adaylara göre değişir.' },
      { q: 'Türk lise notu Alman notuna nasıl çevrilir?', a: 'Modifiye Bavyera formülü kullanılır: 1 + 3 × (100 − not) ÷ 50. Örneğin 85 diploma notu 1,9’a, 90 ise 1,6’ya karşılık gelir.' },
      { q: '3,00 not ortalaması Almanya’da kaça denk gelir?', a: 'Geçme ortalaması 2,00 olan bir Türk üniversitesinde 3,00 ortalama, Bavyera formülüne göre 2,5’e karşılık gelir. Sizin üniversitenizin asgari mezuniyet ortalaması farklıysa sonuç da değişir.' },
      { q: 'Almanya’da tıp için kaç not gerekir?', a: 'AB dışı adaylar için ayrılan kota küçük olduğundan kabul sınırları genellikle 1,0–1,3 aralığındadır. Ayrıca güçlü Almanca (çoğunlukla C1) ve TMS gibi testler önemli avantaj sağlar.' },
      { q: 'NC’siz bölüm ne demek?', a: 'NC’siz (zulassungsfrei) bölümlerde kontenjan sınırı yoktur; giriş koşullarını ve dil şartını sağlayan her aday kayıt yaptırabilir. Bu bölümlerde not ortalaması kabul için belirleyici değildir, ancak bazı programlar yine de yetenek testi veya ön koşul dersler isteyebilir.' },
    ],
    updated: '2026-10-24',
  },

  /* ================= ANABIN ================= */
  {
    slug: 'anabin-nedir',
    title: 'Anabin nedir? H+ statüsü ve Türk diplomaları',
    group: 'Üniversite',
    program: 'lisans',
    countries: ['almanya'],
    summary: 'Anabin veri tabanı nasıl kullanılır, H+ / H+- / H- ne anlama gelir, Türk lise diploması ve YKS ile doğrudan kabul veya Studienkolleg kuralları.',
    facts: [
      { label: 'Yöneten kurum', value: 'KMK bünyesindeki ZAB' },
      { label: 'Kurum statüleri', value: 'H+, H+/-, H-' },
      { label: 'Türk lise diploması', value: 'Genellikle Studienkolleg yolu' },
      { label: 'Resmî diploma değerlendirmesi', value: 'ZAB Zeugnisbewertung (ücretli)' },
    ],
    sections: [
      {
        h: 'Anabin ne işe yarar?',
        p: [
          'Anabin (Anerkennung und Bewertung ausländischer Bildungsnachweise), Almanya’daki Kültür Bakanları Konferansı’na (KMK) bağlı Yabancı Eğitim Merkezi’nin (ZAB) yönettiği ücretsiz bir veri tabanıdır. Üniversiteler, uni-assist, yabancılar daireleri ve işverenler yabancı okul ve diplomaların Almanya’daki karşılığını değerlendirirken anabin’e bakar. İki ana bölümü vardır: okul diplomaları ve üniversiteye giriş hakları (Schulabschlüsse mit Hochschulzugang) ile yükseköğretim kurumları ve dereceleri (Hochschulen / Hochschulabschlüsse).',
          'Anabin bir kabul belgesi vermez; yalnızca değerlendirme ölçütü sunar. Kesin karar başvurduğunuz üniversiteye veya ilgili makama aittir.',
          'Türk öğrenciler anabin’i genellikle iki aşamada kullanır: Lise sonrası lisans başvurusunda diplomanın doğrudan giriş hakkı verip vermediğini görmek için, lisans sonrası ise mezun olunan üniversitenin ve derecenin Almanya’daki karşılığını kontrol etmek için. Veri tabanı Almanca hazırlanmıştır; temel terimleri bilmek işinizi kolaylaştırır: “allgemeiner Hochschulzugang” tüm bölümlere, “fachgebundener Hochschulzugang” yalnızca ilgili alana giriş hakkı anlamına gelir, “Feststellungsprüfung” ise Studienkolleg sonundaki yeterlilik sınavıdır.',
        ],
      },
      {
        h: 'H+, H+/- ve H- ne demek?',
        p: [
          'Anabin her yükseköğretim kurumuna bir statü verir. Bu statü, o kurumdan alınan diplomanın Almanya’da yüksek lisans başvurusu, kamu sektöründe çalışma veya mavi kart gibi işlemlerde nasıl değerlendirileceğini doğrudan etkiler.',
        ],
        table: {
          head: ['Statü', 'Anlamı', 'Pratik sonuç'],
          rows: [
            ['H+', 'Kurum kendi ülkesinde tanınmış yükseköğretim kurumu', 'Diploma genellikle sorunsuz değerlendirilir'],
            ['H+/-', 'Kurum yalnızca belirli programlar veya dönemler için tanınır', 'Programınızın kapsamda olup olmadığı ayrıca kontrol edilir'],
            ['H-', 'Kurum tanınmış yükseköğretim kurumu sayılmaz', 'Diploma Almanya’da yükseköğretim derecesi olarak kabul görmeyebilir'],
          ],
        },
      },
      {
        h: 'Türk üniversiteleri anabin’de nasıl görünür?',
        p: [
          'YÖK tarafından tanınan Türk devlet ve vakıf üniversitelerinin büyük çoğunluğu anabin’de **H+** statüsündedir. Kurumu ararken ülke olarak “Türkei” seçilir ve üniversitenin resmî adı, çoğunlukla Türkçe hâliyle yazılır (örneğin “Orta Doğu Teknik Üniversitesi”). Yeni kurulan vakıf üniversiteleri bazen veri tabanına geç eklenir; listede yoksa bu otomatik olarak tanınmadığı anlamına gelmez, ZAB’dan bireysel değerlendirme istenebilir.',
          'Kurum statüsünün yanında dereceniz de kontrol edilmelidir. Anabin’in “Abschlüsse” bölümünde Türk lisans derecesinin (Lisans Diploması) Alman Bachelor ile karşılaştırması yer alır. Yüksek lisans başvurularında üniversiteler hem kurumun H+ olmasına hem de lisansınızın süre ve kredi yükünün programın şartlarını karşılamasına bakar. Türkiye’ye dönüşte tanınma ise ayrı bir konudur; bunun için [YÖK denkliği rehberimize](/bilgi-bankasi/yok-denkligi) bakabilirsiniz.',
        ],
      },
      {
        h: 'Türk lise diploması: doğrudan kabul mü, Studienkolleg mi?',
        p: [
          'Bu, Türk öğrencilerin en çok sorduğu konudur ve kurallar okul türüne, YKS sonucuna ve Türkiye’de üniversite okuyup okumadığınıza göre değişir. KMK’nın 2015 kararı ve sonraki uygulamalara göre genel tablo şöyledir:',
        ],
        list: [
          '**Yalnızca lise diploması + YKS’de bir lisans programına yerleşme:** Almanya’daki üniversiteler için genellikle doğrudan giriş hakkı vermez; [Studienkolleg](/bilgi-bankasi/studienkolleg-nedir) ve Feststellungsprüfung yolu açılır.',
          '**Lise diploması + YKS’de yeterli puan (KMK’nın belirlediği eşik 180 puandır) + dört yıllık bir lisans programına yerleşme:** Fachhochschule’lerde (uygulamalı bilimler üniversiteleri) ilgili alanda doğrudan başvuru hakkı tanınabilir.',
          '**Lise diploması + Türkiye’de ilgili alanda başarılı üniversite eğitimi:** Belirli bir süre başarıyla okuyan öğrenciler, aynı veya yakın alanda Alman üniversitelerine Studienkolleg’siz başvurabilir. Gerekli süre (çoğu durumda en az bir akademik yıl) bölüme ve üniversiteye göre değiştiği için transkriptinizle birlikte kontrol edilmelidir.',
          '**Meslek lisesi diploması:** Studienkolleg’e erişim için de YKS eşiği ve yerleşme şartı aranır; Fachhochschule’de doğrudan erişim için ayrıca bir başarılı üniversite yılı istenir.',
          '**Önlisans mezunları:** İlgili alanda doğrudan başvuru hakkı kazanabilir.',
          '**Türkiye’deki okullarda alınan Alman Abitur’u (DIA):** Almanya’daki üniversitelere doğrudan giriş hakkı verir.',
        ],
      },
      {
        h: 'Anabin’de diplomanızı adım adım kontrol edin',
        list: [
          'anabin.kmk.org adresine girin ve “Schulabschlüsse mit Hochschulzugang” bölümünden ülke olarak Türkei’yi seçin.',
          'Okul türünüze uygun diplomayı (Lise Diploması, Meslek Lisesi Diploması vb.) açın ve “Bewertung” kısmındaki koşulları okuyun.',
          'Türkiye’de üniversite okuduysanız “Hochschulen” bölümünden kurumunuzu arayıp statüsünü (H+ vb.) not edin.',
          'Lisans mezunuysanız “Abschlüsse” bölümünden derecenizin Alman karşılığını kontrol edin.',
          'Sonucu hedef üniversitenin uluslararası ofisi veya uni-assist’in ücretsiz giriş hakkı kontrol aracıyla teyit edin.',
        ],
      },
      {
        h: 'Yüksek lisans başvurusunda anabin kontrolü: örnek',
        p: [
          'Türkiye’de dört yıllık işletme lisansını 240 AKTS ile tamamlamış bir öğrencinin Almanya’da ekonomi yüksek lisansına başvurduğunu düşünelim. İlk olarak anabin’de üniversitesinin H+ olduğunu görür. Ardından derecesinin Alman Bachelor ile karşılaştırılabilir olduğunu “Abschlüsse” bölümünden teyit eder. Son olarak programın istediği alan derslerini (örneğin en az belirli sayıda AKTS matematik-istatistik) transkriptiyle karşılaştırır. Anabin ilk iki adımı yanıtlar; üçüncü adım tamamen programın kendi şartıdır ve kabul kararında genellikle en belirleyici kısımdır.',
          'Üç yıllık (180 AKTS) dereceler ve uzaktan eğitimle alınmış diplomalar için anabin değerlendirmesi farklı olabilir. Açık öğretim fakültesi mezunları ve önlisans üzerine dikey geçiş yapanlar, başvurudan önce uni-assist veya üniversiteden mutlaka bireysel ön bilgi almalıdır. Yüksek lisans seçenekleri için [Almanya’da yüksek lisans](/yurtdisi-yuksek-lisans/almanya) sayfamıza bakabilirsiniz.',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'Kurumu İngilizce adıyla aramak ve bulamayınca tanınmadığını sanmak; Türkçe resmî adı ve kısaltmaları deneyin.',
          'Kurum statüsüne (H+) bakıp derece karşılaştırmasını atlamak.',
          'Lise diplomasının anabin değerlendirmesindeki YKS ve yerleşme koşullarını okumadan Studienkolleg’e gerek olmadığını varsaymak.',
          'Eski bir forum yazısındaki kuralı esas almak; KMK değerlendirmeleri zaman zaman güncellenir ve geçerlilik tarihleri belirtilir.',
          'Anabin çıktısını resmî belge sanmak; resmî değerlendirme için ZAB veya uni-assist belgesi gerekir. Uni-assist sürecini [uni-assist rehberimizde](/bilgi-bankasi/uni-assist-nedir) anlattık.',
        ],
      },
      {
        h: 'ZAB değerlendirmesi ne zaman gerekir?',
        p: [
          'Üniversite başvurusu için çoğu zaman anabin kaydı ve uni-assist değerlendirmesi yeterlidir. Ancak Almanya’da çalışırken, mavi kart başvurusunda veya kurumunuz anabin’de yer almadığında ZAB’dan ücretli bir **Zeugnisbewertung** (diploma değerlendirme belgesi) istemeniz gerekebilir. Süreç online yürütülür ve birkaç ay sürebilir; ücreti başvuru döneminde ZAB sitesinden kontrol edin. Tıp gibi düzenlenmiş mesleklerde ise anabin yerine [Approbation](/bilgi-bankasi/approbation-nedir) süreci uygulanır.',
        ],
      },
    ],
    seoTitle: 'Anabin Nedir? H+ Statüsü ve Türk Diplomalarının Durumu',
    description: 'Anabin nedir, nasıl kullanılır? H+, H+/- ve H- statüleri, Türk üniversitelerinin durumu, lise diploması ve YKS ile doğrudan kabul ya da Studienkolleg.',
    faqs: [
      { q: 'Anabin H+ ne demek?', a: 'H+, kurumun kendi ülkesinde tanınmış bir yükseköğretim kurumu olduğunu gösterir. H+ statülü bir üniversiteden alınan diploma Almanya’da genellikle sorunsuz değerlendirilir.' },
      { q: 'Türk lise diplomasıyla Almanya’da doğrudan üniversiteye girilir mi?', a: 'Çoğu durumda hayır; lise diploması ve YKS yerleşmesi genellikle Studienkolleg yolunu açar. Türkiye’de ilgili alanda başarılı üniversite eğitimi, yeterli YKS puanıyla Fachhochschule başvurusu veya Alman Abitur’u ise doğrudan başvuru imkânı sağlayabilir.' },
      { q: 'Üniversitem anabin’de yoksa ne yapmalıyım?', a: 'Listede olmaması tanınmadığı anlamına gelmez; özellikle yeni vakıf üniversiteleri geç eklenebilir. Hedef üniversiteye veya ZAB’a başvurarak bireysel değerlendirme isteyebilirsiniz.' },
      { q: 'Anabin ve uni-assist aynı şey mi?', a: 'Hayır. Anabin bir değerlendirme veri tabanıdır; uni-assist ise üniversiteler adına başvuruları inceleyen bir hizmettir ve kararlarında anabin ölçütlerini kullanır.' },
      { q: 'Almanya’da yüksek lisans için anabin kontrolü gerekli mi?', a: 'Evet, kurumunuzun H+ statüsünü ve lisans derecenizin karşılığını başvurudan önce kontrol etmeniz önerilir. Üniversiteler bu bilgiyle birlikte programın kredi ve içerik şartlarına da bakar.' },
    ],
    updated: '2026-10-24',
  },

  /* ================= VİZE ================= */
  {
    slug: 'almanya-ogrenci-vizesi',
    title: 'Almanya öğrenci vizesi (ulusal D vizesi)',
    group: 'Vize & Belgeler',
    program: 'lisans',
    countries: ['almanya'],
    summary: 'Türkiye’den Almanya ulusal D öğrenci vizesi: vize türleri, Auslandsportal ve iDATA randevusu, belge listesi, ücret, süre ve varış sonrası oturum izni.',
    facts: [
      { label: 'Vize türü', value: 'Ulusal vize (D), §16b AufenthG' },
      { label: 'Vize ücreti', value: '75 € (yetişkin)' },
      { label: 'Finansal kanıt', value: '11.904 € bloke hesap (2026)' },
      { label: 'Çalışma izni', value: 'Yılda 140 tam veya 280 yarım gün' },
      { label: 'Önerilen başlangıç', value: 'Dönem başından 3–5 ay önce' },
    ],
    sections: [
      {
        h: 'Hangi vize türüne başvurmalısınız?',
        p: [
          'Almanya’da 90 günden uzun sürecek her eğitim için ulusal vize (D tipi) gerekir; kısa süreli Schengen vizesiyle gidip Almanya’da öğrenci oturumuna geçmek mümkün değildir. Hangi D vizesine başvuracağınız, elinizdeki belgeye bağlıdır:',
          'Doğru vize türünü seçmek önemlidir, çünkü Almanya’da vize amacını sonradan değiştirmek her zaman mümkün değildir. Örneğin yalnızca dil kursu vizesiyle gelen bir öğrencinin Almanya’dayken öğrenim oturumuna geçişi, yasal düzenlemelere ve yabancılar dairesinin uygulamasına bağlıdır. Planınız dil kursu ardından üniversite ise, bunu başvuruda baştan göstermek ve mümkünse koşullu kabulle başvurmak daha güvenli bir yoldur.',
        ],
        table: {
          head: ['Durum', 'Vize amacı', 'Not'],
          rows: [
            ['Üniversite veya Studienkolleg kabulü var', 'Öğrenim (Studium, §16b)', 'En yaygın tür'],
            ['Koşullu kabul (dil şartlı)', 'Öğrenim (hazırlık dahil)', 'Dil kursu + üniversite birlikte planlanır'],
            ['Henüz kabul yok, Almanya’da başvuru yapılacak', 'Üniversite adaylığı (Studienbewerber, §17)', 'Süre sınırlı; kabul alınca öğrenime çevrilir'],
            ['Yalnızca Almanca kursu', 'Dil kursu (§16f)', 'Haftada en az 18 saat yoğun kurs aranır'],
          ],
        },
      },
      {
        h: 'Başvuru kanalı: Auslandsportal ve iDATA',
        p: [
          'Türkiye’deki Alman temsilcilikleri (Ankara Büyükelçiliği, İstanbul ve İzmir Başkonsoloslukları) öğrenim vizelerinde dijital başvuruya geçmiştir: Başvuru formu ve belgeler büyük ölçüde Konsolosluk Hizmetleri Portalı (**Auslandsportal**) üzerinden yüklenir. Randevu, biyometrik veri (parmak izi, fotoğraf) ve belge teslim işlemleri ise yetkili hizmet sağlayıcı **iDATA** üzerinden yürütülür. Hangi şehirdeki merkeze gideceğiniz ikamet ettiğiniz ile göre belirlenir.',
          'Yoğun dönemlerde (Mayıs–Ağustos) randevu bekleme süreleri birkaç haftadan birkaç aya çıkabilir. Bu yüzden kabul belgesi beklerken bile randevu sistemine erken kayıt olmak ve belgelerin geri kalanını hazırlamak en sağlıklı yöntemdir. Prosedür sık güncellendiği için başvuru öncesinde temsilciliğin ve iDATA’nın güncel duyurularını kontrol edin.',
          'Randevu gününde parmak izi ve fotoğraf alınır, belgelerin asıllarıyla yüklenen dijital kopyaların uyumu kontrol edilir. Bazı dosyalarda konsolosluk görevlisi kısa bir görüşme yapar; bazılarında ise dosya doğrudan değerlendirmeye alınır. Pasaportunuz vize kararı çıkana kadar sizde kalabilir veya teslim edilmesi istenebilir; karar sonrası pasaport iDATA üzerinden iade edilir ya da kargo seçeneği sunulur. Başvuruyu velisi adına yapan reşit olmayan öğrencilerde ebeveyn izin belgesi ve ebeveynlerin kimlik belgeleri de istenir.',
        ],
      },
      {
        h: 'Belge listesi',
        list: [
          'Geçerli pasaport (vizenin bitişinden sonra da geçerli, en az iki boş sayfa) ve biyometrik fotoğraf',
          'Eksiksiz doldurulmuş başvuru formu (Auslandsportal) ve imzalı beyan',
          'Üniversite kabul belgesi (Zulassungsbescheid), koşullu kabul veya Studienkolleg kabul belgesi',
          'Finansal yeterlilik: [Sperrkonto](/bilgi-bankasi/sperrkonto-nedir) onay belgesi, Verpflichtungserklärung veya burs belgesi',
          'Seyahat sağlık sigortası (varıştan üniversite kaydına kadar) ve gerekirse yasal sağlık sigortası onayı',
          'Lise diploması, transkript ve varsa üniversite belgeleri; istenirse yeminli tercüme ve apostil',
          'Dil belgesi (Almanca veya İngilizce; programın şartına göre)',
          'Motivasyon mektubu ve CV (özellikle Studienkolleg ve dil kursu başvurularında önemlidir)',
          'Vize ücreti ödeme belgesi',
        ],
      },
      {
        h: 'Ücret ve işlem süresi',
        p: [
          'Yetişkinler için ulusal vize ücreti **75 avro**dur ve ret durumunda iade edilmez. iDATA ayrıca hizmet bedeli talep eder. İşlem süresi dosyanın türüne ve döneme göre değişir; eksiksiz dosyalar çoğunlukla birkaç hafta içinde sonuçlanır, ancak Almanya’daki yabancılar dairesinin onayı gereken durumlarda süre uzayabilir. Kış dönemi (Ekim) başlangıcı için Mayıs–Haziran’da, yaz dönemi (Nisan) için Kasım–Aralık’ta sürece başlamak güvenlidir.',
        ],
      },
      {
        h: 'Kış dönemi için örnek zaman çizelgesi',
        table: {
          head: ['Zaman', 'Yapılacak iş'],
          rows: [
            ['Ocak–Mart', 'Bölüm ve üniversite seçimi, dil sınavı tarihi, belge tercümeleri'],
            ['Mart–Mayıs', 'Uni-assist veya üniversite başvuruları; iDATA randevu sistemine kayıt'],
            ['Mayıs–Temmuz', 'Kabul belgesi, bloke hesap açılışı ve para transferi, sigorta'],
            ['Haziran–Ağustos', 'Vize randevusu ve belge teslimi'],
            ['Ağustos–Eylül', 'Vize sonucu, uçuş ve konaklama, Almanya’ya varış'],
            ['Ekim', 'Anmeldung, üniversite kaydı, oturum izni randevusu'],
          ],
        },
        p: [
          'Kabul belgesi geç gelen öğrenciler için en riskli ay Ağustos olur: Randevu bulunamazsa dönem başlangıcı kaçabilir. Bazı üniversiteler vizesi geciken öğrencilere geç kayıt imkânı tanır; bu durumda üniversitenin uluslararası ofisinden alınacak bir yazı işe yarayabilir. Varış sonrası konaklama planı için [Almanya öğrenci yurtları rehberimize](/bilgi-bankasi/almanya-ogrenci-yurtlari), sigorta seçimi için [sağlık sigortası rehberimize](/bilgi-bankasi/saglik-sigortasi) bakabilirsiniz.',
        ],
      },
      {
        h: 'Mülakatta ve dosyada nelere dikkat edilir?',
        p: [
          'Konsolosluk, eğitim planınızın tutarlı olup olmadığına bakar: Seçtiğiniz bölüm geçmişinizle ilişkili mi, dil seviyeniz programa yetecek mi, Studienkolleg’den sonra hangi bölüme geçeceğinizi biliyor musunuz? Özellikle dil kursu ile başlayan planlarda “neden Almanya, neden bu bölüm, mezuniyet sonrası plan” sorularına net cevap vermeniz önemlidir. [Niyet mektubu örneğimiz](/kaynaklar/ornek-niyet-mektubu) bu soruların yazılı hâlini hazırlamanıza yardımcı olur.',
        ],
        list: [
          'Belgelerdeki isim yazımlarının pasaportla birebir aynı olması',
          'Bloke hesap tutarının güncel rakamla açılmış olması',
          'Türkiye’de yarım bırakılan bölümler veya uzun boşluklar için açıklama hazırlamak',
          'Sahte veya şişirilmiş belgeden kesinlikle kaçınmak; bu, ileriki tüm başvuruları etkiler',
        ],
      },
      {
        h: 'Almanya’ya vardıktan sonra',
        list: [
          'İlk iki hafta içinde ikamet adresinizi belediyeye kaydettirin (Anmeldung); bunun için ev sahibinden Wohnungsgeberbestätigung alınır.',
          'Bloke hesabınızı aktive edip Alman cari hesabı açın.',
          'Üniversiteye kayıt (Immatrikulation) için yasal sağlık sigortası onayı alın.',
          'D vizesinin süresi dolmadan yabancılar dairesinden (Ausländerbehörde) öğrenci oturum iznini (Aufenthaltserlaubnis) talep edin; büyük şehirlerde randevular erken dolar.',
          'Yan iş yapacaksanız yasal sınır yılda 140 tam veya 280 yarım gündür; üniversitede öğrenci asistanlığı genellikle bu sınıra dahil edilmez.',
        ],
      },
      {
        h: 'Vize reddedilirse',
        p: [
          'Ret yazısındaki gerekçeyi dikkatle okuyun: Çoğu ret eksik finansal kanıt, tutarsız eğitim planı veya belge eksikliğinden kaynaklanır. Gerekçeyi gidererek yeni başvuru yapmak çoğu zaman en hızlı yoldur; itiraz imkânları ise temsilciliğe göre değişir. Ayrıntılar için [vize reddi sonrası rehberimize](/bilgi-bankasi/vize-reddi-sonrasi) bakın. Dosyanızı birlikte hazırlamak isterseniz [vize danışmanlığı](/hizmetler/vize-danismanligi) sayfamızdan bize ulaşabilirsiniz.',
        ],
      },
    ],
    seoTitle: 'Almanya Öğrenci Vizesi 2026: Belgeler, iDATA ve Ücret',
    description: 'Almanya öğrenci vizesi (D tipi) nasıl alınır? Auslandsportal ve iDATA randevusu, belge listesi, 75 € ücret, bloke hesap, süre ve varış sonrası adımlar.',
    faqs: [
      { q: 'Almanya öğrenci vizesi kaç günde çıkar?', a: 'Eksiksiz dosyalar çoğunlukla birkaç hafta içinde sonuçlanır, ancak randevu bekleme süresi buna eklenir. Yoğun yaz aylarında toplam süreç iki-üç ayı bulabileceği için dönem başından 3–5 ay önce başlamanız önerilir.' },
      { q: 'Almanya öğrenci vizesi ücreti ne kadar?', a: 'Yetişkinler için ulusal vize ücreti 75 avrodur. Buna iDATA’nın hizmet bedeli, tercüme ve bloke hesap masrafları eklenir.' },
      { q: 'Kabul almadan Almanya öğrenci vizesi alınır mı?', a: 'Üniversite adaylığı (Studienbewerber) vizesiyle Almanya’ya gidip başvurularınızı orada sürdürebilirsiniz. Bu vize süreli olduğundan kabul alındığında öğrenim amaçlı oturuma çevrilmesi gerekir.' },
      { q: 'Öğrenci vizesiyle Almanya’da çalışabilir miyim?', a: 'Evet. Öğrenciler yılda 140 tam gün veya 280 yarım gün çalışabilir. Studienkolleg ve dil kursu dönemlerinde çalışma hakları farklı olabileceğinden oturum izninizdeki ibareyi kontrol edin.' },
      { q: 'Almanya öğrenci vizesi için randevu nasıl alınır?', a: 'Randevu ve biyometrik işlemler Türkiye’de iDATA üzerinden yürütülür; başvuru belgeleri ise büyük ölçüde Auslandsportal’a yüklenir. Yoğun dönemlerde randevular erken dolduğundan kabul beklerken sisteme kayıt olmanız faydalıdır.' },
      { q: 'Studienkolleg için hangi vizeye başvurulur?', a: 'Studienkolleg kabulü olan adaylar öğrenim amaçlı ulusal D vizesine başvurur; Studienkolleg Almanya’da üniversite hazırlığı olarak öğrenim kapsamında değerlendirilir. Giriş sınavına davet aldıysanız ve henüz kabulünüz yoksa üniversite adaylığı vizesi seçeneği değerlendirilebilir.' },
    ],
    updated: '2026-10-24',
  },

  /* ================= APPROBATION ================= */
  {
    slug: 'approbation-nedir',
    title: 'Approbation nedir? Almanya’da hekimlik lisansı',
    group: 'Vize & Belgeler',
    program: 'lisans',
    countries: ['almanya'],
    summary: 'Almanya’da doktor, diş hekimi ve eczacı olarak çalışmak için gereken Approbation: Almanya mezunları ve Türk diplomalılar için adımlar, dil şartı ve sınavlar.',
    facts: [
      { label: 'Veren makam', value: 'Eyalet sağlık otoriteleri' },
      { label: 'Genel Almanca', value: 'En az B2' },
      { label: 'Tıbbi Almanca', value: 'Fachsprachprüfung (C1 düzeyi)' },
      { label: 'AB dışı diplomalar', value: 'Kenntnisprüfung veya denklik incelemesi' },
      { label: 'Geçici izin', value: 'Berufserlaubnis (süreli)' },
    ],
    sections: [
      {
        h: 'Approbation nedir?',
        p: [
          'Approbation, Almanya’da hekimlik, diş hekimliği, eczacılık, veterinerlik ve psikoterapistlik mesleklerini süresiz ve kısıtsız olarak icra etmeye yetki veren devlet lisansıdır. Üniversite diploması tek başına bu hakkı vermez; lisansı eyaletin sağlık otoritesi düzenler (örneğin Berlin’de LAGeSo, Bavyera’da ilgili bölge hükümeti). Approbation tüm Almanya’da geçerlidir ve uzmanlık eğitimine (Facharztweiterbildung) başlamanın ön koşuludur.',
          'Türk öğrenciler için iki farklı yol vardır: Tıp eğitimini Almanya’da tamamlayıp Approbation almak veya Türkiye’de tıp fakültesini bitirip diplomayı Almanya’da tanıtmak.',
          'Approbation, anabin veya ZAB değerlendirmesinden farklıdır: Tıp düzenlenmiş bir meslek olduğu için diplomanın “akademik” karşılığı tek başına yeterli değildir; devlet, mesleği güvenle yapabileceğinizi ayrıca doğrular. Bu nedenle Türkiye’deki tıp diplomanızın anabin’de H+ statülü bir üniversiteden alınmış olması süreci kolaylaştırır, ama Fachsprachprüfung ve gerekirse Kenntnisprüfung aşamalarını ortadan kaldırmaz. Uzmanlık eğitimini Türkiye’de tamamlamış hekimler için uzmanlık belgesinin tanınması ise ayrı bir süreçtir ve eyalet tabip odası tarafından değerlendirilir.',
        ],
      },
      {
        h: 'Yol 1: Almanya’da tıp okuyanlar',
        p: [
          'Almanya’da tıp okuyan öğrenci, [Staatsexamen](/bilgi-bankasi/staatsexamen-nedir) sisteminin üç aşamasını başarıyla tamamladıktan sonra Approbation başvurusu yapar. Ek bir denklik sınavı gerekmez; başvuruda diploma, sabıka kaydı, sağlık raporu ve kimlik belgeleri sunulur. Almanya’da tıp mezunu olan yabancı öğrenciler için ayrıca oturum açısından da avantaj vardır: Mezuniyet sonrası iş arama izni ve hekimlerin yüksek istihdam talebi sayesinde uzmanlık eğitimine geçiş genellikle sorunsuz ilerler. Burada asıl zorluk tıp fakültesine kabul almaktır: AB dışı adaylar için ayrılan kota küçüktür ve genellikle çok yüksek not ortalaması ile C1 düzeyinde Almanca beklenir. Not hesaplamasını [NC puanı rehberimizde](/bilgi-bankasi/nc-puani-nedir) anlattık.',
        ],
      },
      {
        h: 'Yol 2: Türkiye’de tıp mezunları',
        p: [
          'Türk tıp diploması AB dışı (Drittstaat) diploma olarak değerlendirilir. Süreç kabaca şu adımlardan oluşur; eyaletlere göre sıra ve belge listesi farklılaşabilir:',
        ],
        list: [
          'Çalışmak istediğiniz eyaletin yetkili makamına Approbation başvurusu yapın (diploma, transkript, ders içerikleri, staj belgesi, iyi hâl belgesi, sabıka kaydı, sağlık raporu, CV ve onaylı çeviriler).',
          'En az B2 düzeyinde genel Almanca belgesi sunun (Goethe veya telc gibi kabul gören sınavlar).',
          'Eyalet tabip odasında (Ärztekammer) yapılan **Fachsprachprüfung**’u geçin; bu sınav C1 düzeyinde tıbbi iletişimi (hasta anamnezi, doktor-doktor görüşmesi, yazılı rapor) ölçer.',
          'Eğitiminizin Alman eğitimine eşdeğerliği incelenir. Eşdeğer bulunmazsa veya inceleme yerine tercih edilirse **Kenntnisprüfung** (bilgi sınavı) yapılır; sınav ağırlıklı olarak iç hastalıkları ve cerrahi alanında, hasta başında uygulanır.',
          'Sınavı geçtikten sonra Approbation belgesi düzenlenir.',
        ],
      },
      {
        h: '2026 düzenlemesi: Kenntnisprüfung tek sınav oluyor',
        p: [
          'Federal hükümet, yabancı sağlık meslek mensuplarının tanınma süreçlerini hızlandırmak için 2026’da bir yönetmelik hazırladı. Taslağa göre AB dışı diplomalı hekimler için uzun süren dosya bazlı eşdeğerlik incelemesi yerine Kenntnisprüfung tek tip giriş sınavı hâline geliyor, sınava hasta başında yapılan bir bölüm ekleniyor ve belge şartları sadeleştiriliyor (örneğin İngilizce belgeler için çeviri istenmemesi). Yönetmeliğin 1 Kasım 2026’da yürürlüğe girmesi planlanmakla birlikte Federal Konsey sürecindeki değişiklikler nedeniyle ayrıntılar netleşmektedir. Başvuru yapmadan önce ilgili eyalet makamının güncel uygulamasını mutlaka kontrol edin.',
        ],
      },
      {
        h: 'Berufserlaubnis ve eyalet seçimi',
        p: [
          'Süreç devam ederken bazı eyaletler süreli ve kısıtlı bir çalışma izni olan **Berufserlaubnis** verebilir. Bu izinle genellikle bir hastanede gözetim altında asistan hekim olarak çalışılır. Berufserlaubnis süresi sınırlıdır ve uzmanlık eğitimi için tam geçerlilik sağlamayabilir; bu nedenle kalıcı çözüm her zaman Approbation’dır. Berufserlaubnis için de genellikle B2 genel Almanca ve Fachsprachprüfung şartı aranır; izin belirli bir hastane veya pozisyonla sınırlı tutulabilir.',
          'Approbation tüm Almanya’da geçerli olsa da başvuruyu hangi eyalette yapacağınız süreci etkiler: Dosya inceleme süreleri, Kenntnisprüfung randevularının sıklığı ve Fachsprachprüfung’un bekleme süresi eyaletten eyalete belirgin şekilde değişir. Başvuru genellikle çalışmak istediğiniz veya iş teklifi aldığınız eyalette yapılır. Bir hastaneden iş teklifi veya hospitasyon (gözlem stajı) yazısı almak, hem Berufserlaubnis hem de vize sürecinde dosyanızı güçlendirir.',
        ],
      },
      {
        h: 'Türkiye’de hazırlanması gereken belgeler',
        list: [
          'Tıp fakültesi diploması ve geçici mezuniyet belgesi (onaylı kopya, apostil)',
          'Ders adlarını, saatlerini ve stajları gösteren ayrıntılı transkript ve mümkünse ders içerikleri',
          'İntörnlük dönemi rotasyonlarını gösteren belge',
          'Türkiye’de mesleği icra etme yetkisini gösteren belge (diploma tescili) ve iyi hâl belgesi (Certificate of Good Standing)',
          'Adli sicil kaydı (Almanya’daki başvuru tarihine göre güncel olmalı)',
          'Almanca CV ve kimlik belgeleri',
          'Tüm belgelerin yeminli tercümesi; çeviri kuralları için [apostil ve yeminli tercüme rehberimize](/bilgi-bankasi/apostil-ve-yeminli-tercume) bakın',
        ],
        p: [
          '**Sık yapılan hata:** Dil hazırlığını erteleyip belge toplamaya odaklanmak. Belgelerin bir kısmı (adli sicil, iyi hâl belgesi) belirli bir süre sonra güncelliğini yitirir; bu nedenle dil seviyeniz B2’ye yaklaştığında başvuru dosyasını tamamlamak çoğu zaman en verimli sıralamadır.',
        ],
      },
      {
        h: 'Süre ve maliyet planı',
        table: {
          head: ['Aşama', 'Tipik süre', 'Not'],
          rows: [
            ['Almanca A1’den B2’ye', '9–12 ay', 'Yoğun kursla'],
            ['B2’den tıbbi C1’e (Fachsprache)', '3–6 ay', 'Hekimlere özel kurslar'],
            ['Başvuru ve dosya incelemesi', 'Birkaç ay', 'Eyalete göre değişir'],
            ['Kenntnisprüfung hazırlığı ve sınav', '6–12 ay', 'Sınav tarihleri sınırlı olabilir'],
          ],
        },
        p: [
          'Sınav, tercüme, onay ve başvuru ücretleri eyaletten eyalete değişir. Hazırlık döneminde Almanya’da bulunmak isteyenler için tanınma amaçlı özel oturum izni seçenekleri vardır; vize planını sürecin başında netleştirmek gerekir. Almanca hazırlığı için [Almanca dil sınavları rehberimize](/bilgi-bankasi/testdaf-goethe-telc) ve [Almanya dil okullarına](/yurtdisi-dil-okullari/almanya) göz atabilirsiniz.',
        ],
      },
      {
        h: 'Diş hekimliği ve eczacılık',
        p: [
          'Diş hekimleri ve eczacılar için de mantık aynıdır: Almanya’da eğitimini tamamlayanlar Staatsexamen sonrası Approbation alır, AB dışı diplomalılar ise dil şartı, mesleki dil sınavı ve gerekirse bilgi sınavından geçer. Mesleki dil sınavları ilgili meslek odasında yapılır. Avrupa’da İngilizce tıp eğitimi seçeneklerini ise [Avrupa’da tıp eğitimi rehberimizde](/bilgi-bankasi/avrupada-tip-egitimi) karşılaştırdık.',
        ],
      },
    ],
    seoTitle: 'Approbation Nedir? Almanya’da Doktor Olarak Çalışmak',
    description: 'Approbation nedir, nasıl alınır? Almanya’da doktorluk lisansı: B2 Almanca, Fachsprachprüfung, Kenntnisprüfung, Berufserlaubnis ve 2026 düzenlemesi.',
    faqs: [
      { q: 'Türk tıp diplomasıyla Almanya’da doktor olunur mu?', a: 'Evet, ancak önce Approbation almanız gerekir. Bunun için B2 genel Almanca, tabip odasındaki Fachsprachprüfung ve eşdeğerlik incelemesi veya Kenntnisprüfung aşamalarını tamamlamanız beklenir.' },
      { q: 'Fachsprachprüfung nedir?', a: 'Eyalet tabip odalarının yaptığı, C1 düzeyinde tıbbi Almanca sınavıdır. Hasta görüşmesi, hekimler arası vaka aktarımı ve yazılı rapor bölümlerinden oluşur.' },
      { q: 'Approbation süreci ne kadar sürer?', a: 'Almanca seviyenize ve eyalete göre değişmekle birlikte sıfırdan başlayan bir hekim için genellikle 1,5–3 yıl arası planlanır. En uzun kalem çoğunlukla dil hazırlığıdır.' },
      { q: 'Berufserlaubnis ile Approbation farkı nedir?', a: 'Berufserlaubnis, süreli ve kısıtlı bir geçici çalışma iznidir. Approbation ise süresiz, tüm Almanya’da geçerli ve uzmanlık eğitimine tam erişim sağlayan lisanstır.' },
      { q: 'Kenntnisprüfung nedir?', a: 'Kenntnisprüfung, AB dışı diplomalı hekimlerin Alman tıp eğitimine denk bilgiye sahip olduklarını gösterdikleri sözlü-pratik bilgi sınavıdır. Ağırlıklı olarak iç hastalıkları ve cerrahi konularında, hasta başında yapılır; 2026 düzenlemesiyle AB dışı adaylar için tek tip sınav hâline gelmesi planlanmaktadır.' },
    ],
    updated: '2026-10-24',
  },

  /* ================= STAATSEXAMEN ================= */
  {
    slug: 'staatsexamen-nedir',
    title: 'Staatsexamen nedir? Tıp, hukuk ve eczacılıkta devlet sınavı',
    group: 'Üniversite',
    program: 'lisans',
    countries: ['almanya'],
    summary: 'Almanya’da tıp, hukuk, eczacılık ve öğretmenlik gibi bölümlerin Bachelor yerine bitirdiği Staatsexamen: aşamalar, süre ve Türk öğrenciler için anlamı.',
    facts: [
      { label: 'Düzenleyen', value: 'Devlet (eyalet veya federal sınav kurumları)' },
      { label: 'Başlıca bölümler', value: 'Tıp, diş hekimliği, eczacılık, hukuk, öğretmenlik' },
      { label: 'Tıp süresi', value: 'Asgari 6 yıl 3 ay' },
      { label: 'Ara derece', value: 'Genellikle yok (Bachelor verilmez)' },
    ],
    sections: [
      {
        h: 'Staatsexamen ne demek?',
        p: [
          'Staatsexamen, “devlet sınavı” anlamına gelir ve kamu düzeni açısından kritik görülen meslekler için öğrencinin bilgi ve becerisini üniversite yerine devletin ölçtüğü bir mezuniyet sistemidir. Bachelor–Master yapısındaki programlarda notları üniversite verir; Staatsexamen bölümlerinde ise ders ve stajlar üniversitede yapılır, ama mezuniyeti belirleyen sınavlar devletin sınav kurumları tarafından düzenlenir.',
          'Bu bölümlerde arada bir Bachelor diploması verilmez. Öğrenci programın tamamını bitirip sınavları geçtiğinde doğrudan mesleğe giden yeterliliği elde eder. Bu nedenle yarıda bırakmak, kolayca başka bir ülkeye “kredi transferi” yapmaktan daha karmaşıktır.',
          'Staatsexamen’in mantığı, aynı meslek için ülke genelinde ortak bir asgari standart sağlamaktır. Tıpta yazılı sınav soruları federal düzeyde merkezi olarak hazırlanır; böylece Hamburg’da ve Münih’te okuyan iki öğrenci aynı yazılı sınava girer. Bu, mezuniyet notunun işverenler ve uzmanlık eğitimi veren hastaneler açısından karşılaştırılabilir olmasını sağlar. Öte yandan sınavların zorluğu nedeniyle öğrencilerin büyük kısmı ders dönemlerinin yanında aylarca süren ayrı bir sınav hazırlığı yapar.',
        ],
      },
      {
        h: 'Hangi bölümler Staatsexamen ile biter?',
        table: {
          head: ['Bölüm', 'Asgari süre', 'Mesleğe geçiş'],
          rows: [
            ['Tıp (Humanmedizin)', '12 dönem + 3 ay', 'Approbation'],
            ['Diş hekimliği', 'Yaklaşık 10–11 dönem', 'Approbation'],
            ['Eczacılık', '8 dönem + 1 yıl staj', 'Approbation'],
            ['Veterinerlik', 'Yaklaşık 11 dönem', 'Approbation'],
            ['Hukuk', 'Genellikle 9–10 dönem + 2 yıl Referendariat', 'Avukatlık ve hâkimlik'],
            ['Öğretmenlik (bazı eyaletlerde)', 'Eyalete göre değişir', 'Referendariat sonrası öğretmenlik'],
          ],
        },
        p: [
          'Öğretmenlik eğitimi birçok eyalette Bachelor/Master of Education yapısına geçmiştir; Bavyera gibi bazı eyaletler ise Staatsexamen sistemini sürdürmektedir. Gıda kimyası gibi daha az bilinen bölümlerde de devlet sınavı uygulanabilir.',
          'Asgari süreler yasal sınırlardır; uygulamada öğrenciler sınav hazırlığı, doktora tezi (tıpta Dr. med. genellikle eğitim sırasında yazılır) veya yurt dışı dönemleri nedeniyle bu süreleri aşabilir. Bütçe ve oturum izni planlamasında bu ek sürenin hesaba katılması önerilir.',
          'Staatsexamen bölümlerinde dönemler genellikle yalnızca kış döneminde başlar; tıp ve eczacılıkta bazı üniversiteler yaz döneminde de öğrenci alır. Başvuru yapmadan önce programın hangi dönemde başladığını kontrol etmek, Studienkolleg ve vize takviminizi doğru kurmanızı sağlar.',
        ],
      },
      {
        h: 'Tıpta üç aşamalı sınav sistemi',
        list: [
          '**Birinci aşama (M1, Physikum):** Yaklaşık dört dönemlik temel bilimler (anatomi, fizyoloji, biyokimya) eğitiminin sonunda yapılır; yazılı ve sözlü bölümleri vardır.',
          '**İkinci aşama (M2):** Klinik dönemin sonunda, toplam yaklaşık on dönemden sonra yapılan kapsamlı yazılı sınavdır.',
          '**Praktisches Jahr (PJ):** 48 haftalık klinik uygulama yılı; dahiliye, cerrahi ve seçmeli bir alanda geçirilir.',
          '**Üçüncü aşama (M3):** PJ’nin ardından hasta başında yapılan sözlü-pratik sınavdır. Başarıyla tamamlayan öğrenci Approbation başvurusu yapabilir.',
        ],
        p: [
          'Almanya’da tıp eğitimini yeniden düzenleyecek yeni bir Approbationsordnung uzun süredir hazırlanmaktadır; yürürlük tarihi birkaç kez ertelendi. Sınav aşamalarının yeri ve adı ileride değişebileceği için hedef üniversitenin güncel çalışma düzenine bakmak gerekir.',
        ],
      },
      {
        h: 'Hukukta iki devlet sınavı',
        p: [
          'Hukuk öğrencileri üniversite eğitiminin sonunda **Erste Juristische Prüfung**’a girer; bu sınavın bir kısmı devlet, bir kısmı üniversite tarafından yapılır. Ardından yaklaşık iki yıl süren ve mahkemelerde, savcılıklarda, idarede ve avukatlık bürolarında geçen staj dönemi (**Referendariat**) gelir. Sonunda yapılan **Zweite Juristische Staatsprüfung** hâkimlik, savcılık ve avukatlık yolunu açar. Alman hukuku üzerine kurulu bu yapı nedeniyle hukuk, anadili Almanca olmayan öğrenciler için dil açısından en zorlu bölümlerden biridir.',
        ],
      },
      {
        h: 'Türk öğrenciler için ne anlama geliyor?',
        list: [
          'Staatsexamen bölümleri neredeyse tamamen Almanca yürür; başvuruda genellikle C1 (TestDaF 4x4, DSH-2 veya eşdeğeri) istenir. Ayrıntılar için [TestDaF, Goethe ve telc rehberine](/bilgi-bankasi/testdaf-goethe-telc) bakın.',
          'Tıp, diş hekimliği ve eczacılık kontenjanlıdır ve AB dışı adaylar için ayrılan kota küçüktür; not ortalaması belirleyicidir.',
          'Lise diplomasıyla başvuranlar çoğunlukla önce [Studienkolleg’in M-Kurs](/bilgi-bankasi/studienkolleg-nedir) bölümünü tamamlar.',
          'Bu bölümlerde dönem başına harç genellikle diğer bölümlerle aynıdır; sadece [dönem katkı payı](/bilgi-bankasi/semesterbeitrag-nedir) ödenir (Baden-Württemberg gibi AB dışı öğrenciden harç alan eyaletler hariç).',
          'Türkiye’ye dönüşte tanınma YÖK denklik süreciyle değerlendirilir; tıpta ek sınav şartları gündeme gelebilir. [YÖK denkliği rehberimize](/bilgi-bankasi/yok-denkligi) göz atın.',
        ],
      },
      {
        h: 'Eczacılık ve diş hekimliği sınav yapısı',
        p: [
          'Eczacılıkta birinci devlet sınavı yaklaşık dördüncü dönemden sonra temel fen bilimlerini (kimya, biyoloji, fizik) ölçer; ikinci sınav sekiz dönemlik üniversite eğitiminin sonunda farmasötik kimya, farmakoloji ve klinik eczacılık gibi alanları kapsar. Ardından bir yıllık uygulama dönemi (en az altı ayı bir halk eczanesinde) gelir ve üçüncü devlet sınavıyla süreç tamamlanır. Diş hekimliğinde de 2020’de yürürlüğe giren yeni yönetmelikle eğitim üç aşamalı devlet sınavına bağlanmıştır.',
        ],
      },
      {
        h: 'Staatsexamen bölümleri için hazırlık yol haritası',
        list: [
          '**Lise 10–11. sınıf:** Almancaya başlayın; tıp ve eczacılık için biyoloji ve kimya notlarınızı yüksek tutun, çünkü Studienkolleg M-Kurs ve sınavlar bu temele dayanır.',
          '**Lise son sınıf:** YKS’ye girin ve bir lisans programına yerleşin; Almanya’daki giriş hakkı için bu belge gerekir. Kurallar için [anabin rehberimize](/bilgi-bankasi/anabin-nedir) bakın.',
          '**Mezuniyet sonrası ilk yıl:** B1–B2 seviyesine ulaşıp Studienkolleg giriş sınavlarına başvurun; aynı anda TMS gibi testlere hazırlanmak avantaj sağlar.',
          '**Studienkolleg:** İki dönem sonunda Feststellungsprüfung’a girin; buradaki not, tıp gibi bölümlerde sıralamayı doğrudan etkiler.',
          '**Başvuru:** C1 dil belgesi ve FSP notuyla birden fazla üniversiteye başvurun; AB dışı kota küçük olduğu için tek bir üniversiteye bağlı kalmayın.',
        ],
        p: [
          'Bu bölümler için genel lisans seçeneklerini [Almanya’da lisans](/lisans-programlari/almanya) sayfamızda bulabilirsiniz.',
        ],
      },
      {
        h: 'Staatsexamen ile Bachelor/Master farkı',
        table: {
          head: ['', 'Staatsexamen', 'Bachelor + Master'],
          rows: [
            ['Sınavı kim yapar?', 'Devlet sınav kurumu', 'Üniversite'],
            ['Ara diploma', 'Yok', 'Bachelor sonrası diploma'],
            ['Mesleğe geçiş', 'Doğrudan lisans (Approbation vb.)', 'Mesleğe göre değişir'],
            ['Yurt dışına transfer', 'Daha zor, ders denkliği gerekir', 'ECTS sayesinde daha kolay'],
          ],
        },
      },
    ],
    seoTitle: 'Staatsexamen Nedir? Almanya’da Tıp ve Hukuk Sınavları',
    description: 'Staatsexamen nedir? Almanya’da tıp, hukuk, eczacılık ve öğretmenlikte devlet sınavı: M1, M2, PJ ve M3 aşamaları, süreler, dil şartı ve hazırlık yolu.',
    faqs: [
      { q: 'Staatsexamen lisans mı, yüksek lisans mı?', a: 'Staatsexamen ne Bachelor ne de Master’dır; mesleğe doğrudan yeterlilik veren ayrı bir mezuniyet türüdür. Akademik düzey olarak genellikle Master ile aynı seviyede kabul edilir.' },
      { q: 'Almanya’da tıp kaç yıl sürer?', a: 'Tıp eğitimi asgari 6 yıl 3 aydır; buna 48 haftalık klinik uygulama yılı (PJ) dahildir. Uygulamada birçok öğrenci 6,5–7 yılda bitirir.' },
      { q: 'Physikum nedir?', a: 'Physikum, tıp eğitiminin yaklaşık dördüncü döneminin sonunda yapılan birinci devlet sınavıdır (M1). Temel bilimleri ölçer ve klinik döneme geçişin koşuludur.' },
      { q: 'Yabancı öğrenciler Almanya’da hukuk okuyabilir mi?', a: 'Evet, ancak eğitim tamamen Alman hukuku üzerine kuruludur ve çok ileri düzey Almanca gerektirir. Staatsexamen sonrası avukatlık veya hâkimlik için ikinci devlet sınavı ve Referendariat da tamamlanmalıdır.' },
      { q: 'Staatsexamen notu Türkiye’de nasıl tanınır?', a: 'Almanya’da Staatsexamen ile tamamlanan tıp, diş hekimliği veya eczacılık eğitimi, Türkiye’ye dönüşte YÖK denklik süreciyle değerlendirilir. Mesleğe göre ek sınav veya belge şartları gündeme gelebileceği için dönüş planınız varsa güncel YÖK kurallarını önceden kontrol edin.' },
    ],
    updated: '2026-10-24',
  },

  /* ================= SEMESTERBEITRAG ================= */
  {
    slug: 'semesterbeitrag-nedir',
    title: 'Semesterbeitrag nedir? Almanya’da dönem katkı payı',
    group: 'Yaşam',
    program: 'lisans',
    countries: ['almanya'],
    summary: 'Almanya’da harçsız üniversitelerde bile ödenen dönem katkı payı: neleri kapsar, ne kadar tutar, Deutschlandsemesterticket ve harçtan farkı.',
    facts: [
      { label: 'Tipik tutar', value: 'Dönem başına yaklaşık 200–450 €' },
      { label: 'Semesterticket (WS 2026/27)', value: '226,80 € (ayda 37,80 €)' },
      { label: 'Ödeme sıklığı', value: 'Her dönem (yılda 2 kez)' },
      { label: 'Ödenmezse', value: 'Kayıt yenilenmez (Exmatrikulation)' },
    ],
    sections: [
      {
        h: 'Harçsız üniversitede neden ödeme yapılıyor?',
        p: [
          'Almanya’daki devlet üniversitelerinin çoğu öğrenim ücreti (Studiengebühren) almaz. Ancak her öğrenci, kayıt olurken ve her dönem kaydını yenilerken **Semesterbeitrag** (dönem katkı payı) öder. Bu ödeme eğitimin karşılığı değil, öğrenci hizmetlerinin ve ulaşım biletinin finansmanıdır. Üniversiteye kayıtlı olan herkes, ister lisans ister yüksek lisans öğrencisi olsun, aynı katkı payını öder; uyruk veya not ortalaması tutarı değiştirmez. Tutar her üniversitenin bağlı olduğu Studierendenwerk ve öğrenci birliği kararlarıyla belirlendiğinden aynı şehirdeki iki üniversitede bile farklı olabilir. Kayıt yenileme (Rückmeldung) bu ödemeye bağlı olduğundan süresinde yapılmazsa üniversiteden kaydınız silinebilir.',
        ],
      },
      {
        h: 'Semesterbeitrag hangi kalemlerden oluşur?',
        table: {
          head: ['Kalem', 'Ne için?', 'Tipik tutar'],
          rows: [
            ['Studierendenwerk payı', 'Yurtlar, yemekhane, danışmanlık, sosyal hizmetler', 'Yaklaşık 50–150 €'],
            ['Öğrenci birliği (AStA / Studierendenschaft)', 'Öğrenci temsilciliği, kültür ve spor etkinlikleri', 'Genellikle 10–30 €'],
            ['Deutschlandsemesterticket', 'Almanya genelinde bölgesel toplu taşıma', '226,80 € (WS 2026/27)'],
            ['İdari ücret (bazı eyaletlerde)', 'Kayıt ve idari işlemler', 'Genellikle 50–75 €'],
          ],
        },
        p: [
          'Toplam tutar üniversiteden üniversiteye değişir ve bugünkü fiyatlarla çoğunlukla dönem başına 200–450 avro arasındadır. Güncel tutar, üniversitenin “Semesterbeitrag” veya “Rückmeldung” sayfasında her dönem ayrıca ilan edilir.',
          'Katkı payının Studierendenwerk’e giden kısmı, öğrencinin günlük hayatında doğrudan karşılığını bulur: Üniversite yemekhanelerinde (Mensa) indirimli yemek, öğrenci yurtlarına erişim, psikolojik danışmanlık, finansman danışmanlığı ve çocuklu öğrenciler için kreş hizmetleri bu bütçeyle desteklenir. Öğrenci birliği payı ise spor tesislerine, kültür etkinliklerine ve hukuki danışmanlık gibi hizmetlere aktarılır. Bu nedenle katkı payı, Almanya’da öğrenci olmanın en düşük maliyetli ama en çok kullanılan kalemlerinden biridir.',
        ],
      },
      {
        h: 'Deutschlandsemesterticket: katkı payının en büyük kalemi',
        p: [
          'Birçok üniversitede katkı payının içinde **Deutschlandsemesterticket** bulunur. Bu bilet, normal Deutschlandticket’in yüzde 60’ı fiyatına satılır ve öğrenciye Almanya genelinde yerel ve bölgesel toplu taşımayı (otobüs, metro, tramvay, bölgesel trenler) sınırsız kullanma hakkı verir; ICE ve IC gibi hızlı trenler dahil değildir. Deutschlandticket’in 2026’da ayda 63 avroya çıkmasıyla öğrenci bileti kış dönemi 2026/27’den itibaren aylık 37,80 avro, yani dönem başına **226,80 avro** olmuştur.',
          'Bilet, tüm öğrencilerin ödediği dayanışma modeliyle çalışır; tek tek kullanıp kullanmamanız fiyatı değiştirmez. Uzun süreli staj, engellilik veya yurt dışında geçirilen dönem gibi durumlarda bilet bedelinin iadesi için başvuru yapılabilir; şartları üniversiteniz belirler.',
        ],
      },
      {
        h: 'Semesterbeitrag ile öğrenim harcı arasındaki fark',
        p: [
          'Katkı payı herkes için zorunludur; öğrenim harcı ise sadece bazı durumlarda alınır. Türk öğrencilerin bütçe yaparken karıştırmaması gereken başlıca harç türleri şunlardır:',
        ],
        list: [
          '**Baden-Württemberg:** AB dışı öğrencilerden dönem başına 1.500 avro harç alınır (bazı muafiyetler hariç). Stuttgart, Heidelberg, Karlsruhe, Freiburg ve Mannheim bu eyalettedir.',
          '**TU München:** AB dışı öğrencilerden programa göre dönem başına birkaç bin avroya varan harç alır; güncel tutarı TUM’un sitesinden kontrol edin.',
          '**İkinci öğrenim (Zweitstudium) ve uzun süreli öğrenim harçları:** Bazı eyaletlerde ikinci bir derece için veya standart süreyi uzun süre aşan öğrencilerden ek ücret alınır.',
          '**Özel üniversiteler:** Katkı payı yerine yıllık binlerce avroluk öğrenim ücreti söz konusudur. Seçenekler için [Almanya’daki özel üniversiteler](/almanyadaki-ozel-universiteler) sayfamıza bakın.',
        ],
      },
      {
        h: 'Ne zaman ve nasıl ödenir?',
        list: [
          'İlk ödeme kabul aldıktan sonra kayıt (Immatrikulation) aşamasında yapılır; ödeme kanıtı olmadan kayıt tamamlanmaz.',
          'Sonraki dönemlerde ödeme kayıt yenileme (Rückmeldung) süresinde yapılır: kış dönemi için genellikle Haziran–Temmuz, yaz dönemi için Aralık–Ocak.',
          'Ödeme, üniversitenin verdiği IBAN’a ve öğrenci numaranızı içeren referansla havale edilir. Türkiye’den ödeme yapıyorsanız SWIFT kesintilerinin tutarı eksik bırakmamasına dikkat edin.',
          'Ödemeden sonra öğrenci belgesi (Immatrikulationsbescheinigung) ve dijital öğrenci bileti erişime açılır; bu belge oturum izni uzatmasında da istenir.',
          'Ödeme yaptıktan sonra dekontu saklayın; üniversite sisteminde ödeme birkaç gün içinde görünmezse öğrenci işleri (Studierendensekretariat) bu belgeyi isteyebilir.',
        ],
      },
      {
        h: 'Studienkolleg, izinli dönem ve özel durumlar',
        list: [
          '**Studienkolleg öğrencileri:** Üniversiteye bağlı devlet Studienkolleg’lerinde öğrenciler genellikle üniversiteye kayıtlı sayılır ve aynı katkı payını öder; böylece semesterticket ve yemekhane indirimlerinden yararlanır. Ayrıntılar için [Studienkolleg rehberimize](/bilgi-bankasi/studienkolleg-nedir) bakın.',
          '**İzinli dönem (Urlaubssemester):** Hastalık, staj veya yurt dışı dönemi gibi gerekçelerle izin alınan dönemlerde de kayıt yenilenir; katkı payının bir kısmı (çoğunlukla semesterticket) iade edilebilir veya hiç alınmayabilir.',
          '**Yüksek lisans öğrencileri:** Lisans öğrencileriyle aynı katkı payını öder; Master programı ücretsiz olsa bile bu ödeme zorunludur.',
          '**Doktora öğrencileri:** Üniversiteye kayıtlı doktora öğrencileri de katkı payı öder; kayıt zorunluluğu üniversiteye göre değişir.',
          '**Erasmus veya değişim öğrencileri:** Genellikle ev sahibi üniversitede harç ödemez, ancak bazı üniversiteler semesterticket gibi kalemleri talep edebilir.',
        ],
      },
      {
        h: 'İlk yıl için örnek ödeme planı',
        table: {
          head: ['Ödeme', 'Ne zaman?', 'Tahmini tutar'],
          rows: [
            ['Uni-assist başvuru ücreti', 'Başvuru aşaması', '75 € + ek başvurular 30 €'],
            ['İlk Semesterbeitrag', 'Kayıt (Ekim dönemi için Ağustos–Eylül)', '200–450 €'],
            ['İkinci Semesterbeitrag', 'Kayıt yenileme (Ocak–Şubat civarı)', '200–450 €'],
            ['Kira depozitosu', 'Taşınma', 'En fazla 3 aylık net kira'],
            ['Baden-Württemberg harcı (AB dışı)', 'Her dönem', '1.500 €'],
          ],
        },
      },
      {
        h: 'Bütçe planına nasıl eklenmeli?',
        p: [
          'Yıllık iki katkı payı ödemesi, [bloke hesaptan](/bilgi-bankasi/sperrkonto-nedir) her ay serbest bırakılan tutarla birlikte düşünülmelidir. Katkı payı dönem başında tek seferde ödendiği için o ay kira ve depozito gibi kalemlerle çakışabilir. İlk dönem için kayıt, depozito, ilk kira ve katkı payını kapsayan ayrı bir başlangıç bütçesi ayırmak en sağlıklı yöntemdir. Genel hesaplama için [yurt dışı bütçe planlama rehberimizden](/bilgi-bankasi/yurtdisi-butce-planlama) yararlanabilirsiniz.',
          'Almanya’daki eğitim seçeneklerinin genel maliyet karşılaştırması için [Almanya sayfamıza](/ulkeler/almanya) da göz atabilirsiniz. Katkı payının tam tutarı kabul belgesiyle birlikte veya kayıt e-postasında bildirilir; bu tutarı bütçe tablonuza ekledikten sonra ödemeyi son güne bırakmamanız, uluslararası transferlerdeki gecikmelere karşı en iyi önlemdir.',
        ],
      },
    ],
    seoTitle: 'Semesterbeitrag Nedir? Almanya Dönem Katkı Payı 2026',
    description: 'Semesterbeitrag nedir, ne kadar? Almanya’da dönem katkı payının kalemleri, 226,80 € Deutschlandsemesterticket, ödeme tarihleri ve öğrenim harcından farkı.',
    faqs: [
      { q: 'Almanya’da üniversite gerçekten ücretsiz mi?', a: 'Devlet üniversitelerinin çoğunda öğrenim harcı yoktur, ancak her dönem yaklaşık 200–450 avroluk katkı payı ödenir. Baden-Württemberg ve TU München gibi istisnalarda AB dışı öğrencilerden ayrıca harç alınır.' },
      { q: 'Semesterbeitrag ödenmezse ne olur?', a: 'Kayıt yenileme ödemeye bağlı olduğundan süresinde ödenmezse üniversiteden kaydınız silinebilir. Bu durum oturum izninizi de doğrudan etkiler.' },
      { q: 'Deutschlandsemesterticket ne kadar?', a: 'Kış dönemi 2026/27’den itibaren aylık 37,80 avro, dönem başına 226,80 avrodur. Bilet Almanya genelinde yerel ve bölgesel toplu taşımada geçerlidir, hızlı trenleri kapsamaz.' },
      { q: 'Semesterbeitrag iade edilir mi?', a: 'Kayıttan vazgeçerseniz veya belirli durumlarda (uzun staj, yurt dışı dönemi) kısmi iade mümkündür. Şartlar ve başvuru süreleri her üniversitenin kendi kurallarına bağlıdır.' },
      { q: 'Semesterbeitrag ne zaman ödenir?', a: 'İlk ödeme kayıt (Immatrikulation) sırasında, sonrakiler ise her dönemin kayıt yenileme süresinde yapılır. Kış dönemi için genellikle Haziran–Temmuz, yaz dönemi için Aralık–Ocak dönemindeki son tarihleri üniversitenizin sitesinden takip edin.' },
    ],
    updated: '2026-10-24',
  },

  /* ================= YURTLAR ================= */
  {
    slug: 'almanya-ogrenci-yurtlari',
    title: 'Almanya’da öğrenci yurtları ve konaklama',
    group: 'Yaşam',
    program: 'lisans',
    countries: ['almanya'],
    summary: 'Studierendenwerk yurtları, WG odaları ve özel öğrenci rezidansları: Almanya’da kira seviyeleri, bekleme listeleri, başvuru zamanı ve dolandırıcılık riskleri.',
    facts: [
      { label: 'Studierendenwerk yurdu', value: 'Ortalama yaklaşık 300–350 € (sıcak kira)' },
      { label: 'WG odası', value: 'Ortalama 500 € civarı, büyük şehirlerde daha yüksek' },
      { label: 'Özel öğrenci rezidansı', value: 'Genellikle 550–900 €+' },
      { label: 'Depozito (Kaution)', value: 'Yasal üst sınır 3 aylık net kira' },
      { label: 'Adres kaydı', value: 'Taşınmadan sonra 2 hafta içinde' },
    ],
    sections: [
      {
        h: 'Almanya’da konaklama neden erken planlanmalı?',
        p: [
          'Almanya’da üniversiteye kabul almak çoğu zaman oda bulmaktan daha kolaydır. Özellikle Münih, Frankfurt, Hamburg, Köln, Berlin ve Heidelberg gibi şehirlerde öğrenci yurtlarının bekleme listeleri uzundur. Alman Studierendenwerk birliğinin verilerine göre 30 Eylül 2025 itibarıyla yalnızca on bir büyük şehirdeki Studierendenwerk’lerin bekleme listelerinde 33 binden fazla öğrenci bulunuyordu. Bu nedenle konaklama araştırmasına kabul beklerken başlamak gerekir.',
          'Konaklama bütçesi, Almanya’daki yaşam maliyetinin en büyük ve en değişken kalemidir. Aynı öğrenci, küçük bir üniversite şehrinde yurt odasında kalarak ayda birkaç yüz avro tasarruf edebilirken, büyük bir metropolde özel rezidansta bütçesinin yarısından fazlasını kiraya ayırmak zorunda kalabilir. Yurt bulma şansı da şehre göre değişir: Bazı şehirlerde ilk dönem için uluslararası öğrencilere öncelik tanınırken, bazılarında bekleme süresi birkaç dönemi bulabilir.',
        ],
      },
      {
        h: 'Seçenekleri karşılaştırın',
        table: {
          head: ['Seçenek', 'Tipik aylık maliyet', 'Artıları', 'Eksileri'],
          rows: [
            ['Studierendenwerk yurdu', 'Yaklaşık 300–350 €', 'En uygun fiyat, eşyalı, faturalar dahil', 'Uzun bekleme listeleri'],
            ['WG (paylaşımlı daire)', 'Ortalama 500 € civarı', 'Almanca pratiği, sosyal çevre', 'Mülakat (WG-Casting) ve rekabet'],
            ['Özel öğrenci rezidansı', '550–900 €+', 'Online rezervasyon, hızlı onay', 'Pahalı, kısa iptal süreleri'],
            ['Tek kişilik daire', 'Şehre göre 600 € üzeri', 'Bağımsızlık', 'Eşyasız, uzun sözleşme, yüksek depozito'],
            ['Geçici kiralama (Zwischenmiete)', 'Değişken', 'İlk aylar için pratik', 'Kısa süreli, sürekli taşınma'],
          ],
        },
        p: [
          'Rakamlar şehir ortalamalarını yansıtır; Münih ve Frankfurt gibi şehirlerde WG odaları ortalamanın belirgin şekilde üzerindedir, Doğu Almanya’daki üniversite şehirlerinde ise daha uygundur. Kira bütçenizin aylık 992 avroluk bloke hesap tutarının içinden karşılanacağını unutmayın.',
        ],
      },
      {
        h: 'Studierendenwerk yurduna başvuru',
        list: [
          'Üniversitenizin bağlı olduğu Studierendenwerk’in (bazı şehirlerde Studentenwerk) sitesinden online başvuru yapın; birçok yurtta kabul belgesi gelmeden başvuru alınır.',
          'Birden fazla yurt veya oda tipi seçin; tek bir yurda başvurmak bekleme süresini uzatır.',
          'Başvurunuzu düzenli olarak güncelleyin; bazı Studierendenwerk’ler belirli aralıklarla ilginizi teyit etmenizi ister, aksi hâlde listeden çıkarılırsınız.',
          'Teklif geldiğinde süre çok kısadır (çoğu zaman birkaç gün); e-postanızı sık kontrol edin.',
          'Uluslararası öğrencilere ayrılan kontenjan veya “Servicepaket” gibi paketler olup olmadığını uluslararası ofise sorun.',
        ],
      },
      {
        h: 'WG ve özel kiralamada nelere dikkat etmeli?',
        p: [
          'WG odaları genellikle WG-Gesucht gibi ilan sitelerinden bulunur. Ev arkadaşları adayları kısa bir görüşmeye çağırır; Almanca birkaç cümleyle kendinizi tanıtmanız şansınızı artırır. Sözleşmede kiranın “kalt” (yan giderler hariç) mi “warm” (ısınma ve ortak giderler dahil) mi olduğunu, elektrik ve internetin dahil olup olmadığını kontrol edin.',
          '**Dolandırıcılığa karşı:** Evi görmeden veya video görüşmesi yapmadan depozito ya da kira göndermeyin. “Yurt dışındayım, anahtarı kargoyla göndereceğim” diyen ilan sahipleri, piyasanın çok altındaki fiyatlar ve yalnızca para transfer servisleriyle ödeme isteyenler tipik dolandırıcılık işaretleridir. Depozito yasal olarak en fazla üç aylık net kira kadar olabilir ve taksitle ödenebilir.',
        ],
      },
      {
        h: 'Taşındıktan sonra yapılacaklar',
        list: [
          'Ev sahibinden **Wohnungsgeberbestätigung** (ev sahibi onayı) alın ve iki hafta içinde belediyede adres kaydı (Anmeldung) yaptırın; oturum izni, banka hesabı ve vergi numarası bu kayda bağlıdır.',
          'Kendi adınıza ev tutarsanız yayın katkı payı (Rundfunkbeitrag) için kayıt yapın; konut başına aylık bir ücrettir ve WG’de ev arkadaşları arasında paylaşılır.',
          'Taşınırken odanın durumunu fotoğraflayıp teslim tutanağına (Übergabeprotokoll) yazdırın; depozito iadesinde anlaşmazlıkları önler.',
          'Ev sigortası (Haftpflichtversicherung, kişisel sorumluluk sigortası) yaptırmayı değerlendirin; düşük maliyetlidir ve kazara verilen hasarları karşılar.',
          'Elektrik ve internet ayrı sözleşmeyse kendi adınıza abonelik açın; tek kişilik dairelerde bu kalemler aylık bütçeye ayrıca eklenir.',
        ],
      },
      {
        h: 'Kış dönemi için konaklama zaman çizelgesi',
        table: {
          head: ['Zaman', 'Adım'],
          rows: [
            ['Mart–Mayıs', 'Hedef şehirlerdeki Studierendenwerk yurtlarına başvuru, bekleme listesine giriş'],
            ['Mayıs–Temmuz', 'Kabul belgesiyle uluslararası ofis paketlerini sorma, özel rezidans fiyatlarını karşılaştırma'],
            ['Temmuz–Ağustos', 'WG ilanlarına video görüşmeyle başvurma, gerekirse geçici konaklama ayırtma'],
            ['Eylül', 'Sözleşme, depozito ve teslim tarihini netleştirme'],
            ['Ekim', 'Taşınma, teslim tutanağı, Anmeldung'],
          ],
        },
        p: [
          'Şehir seçimi konaklama maliyetini doğrudan etkiler. Aynı bölümü sunan iki üniversiteden biri daha küçük bir şehirdeyse, kira farkı yıllık bütçede ciddi bir tasarruf yaratabilir ve yurt bulma şansınızı artırır. Bütçe hesaplarken aylık 992 avroluk [bloke hesap](/bilgi-bankasi/sperrkonto-nedir) tutarını ve şehirlerin genel yaşam maliyetini birlikte değerlendirin; şehir seçenekleri için [Almanya sayfamıza](/ulkeler/almanya) göz atabilirsiniz.',
        ],
      },
      {
        h: 'Yurt odasında neler bulunur?',
        p: [
          'Studierendenwerk yurtları genellikle eşyalı tek kişilik odalardan oluşur: yatak, masa, sandalye, dolap ve çoğunlukla internet bağlantısı bulunur. Mutfak ve banyo bazı yurtlarda ortak (koridor veya daire bazında), bazılarında odaya özeldir. Kira genellikle “sıcak kira” olarak ısınma, elektrik ve su giderlerini kapsar. Yatak takımı, mutfak eşyası ve havlu gibi kişisel eşyaları ise öğrenci kendisi getirir; ilk gün için bunları önceden planlamak gerekir.',
          'Yurt sözleşmeleri çoğunlukla dönem başında başlar ve belirli bir azami kalış süresiyle (çoğu zaman standart öğrenim süresi kadar) sınırlıdır. Erken çıkışta sözleşmedeki ihbar süresine uymanız gerekir; aksi hâlde kalan ayların kirası istenebilir.',
        ],
      },
      {
        h: 'İlk aylar için pratik strateji',
        p: [
          'Kalıcı oda bulamadıysanız ilk 1–3 ay için geçici kiralama veya özel öğrenci rezidansıyla başlayıp, şehirdeyken WG ve yurt aramaya devam etmek gerçekçi bir yoldur. Vize başvurusu için genellikle kesin adres istenmez, ancak Almanya’ya vardıktan sonra Anmeldung için kayıt yapılabilecek bir adres gerekir. Konaklama türlerinin genel karşılaştırması için [konaklama seçenekleri rehberimize](/bilgi-bankasi/konaklama-secenekleri), dil kursu döneminde aile yanı veya yurt seçenekleri için [öğrenci konaklama](/ogrenci-konaklama) sayfamıza bakabilirsiniz.',
        ],
      },
    ],
    seoTitle: 'Almanya Öğrenci Yurtları: Studierendenwerk, WG ve Fiyat',
    description: 'Almanya öğrenci yurtları rehberi: Studierendenwerk başvurusu, WG odaları, özel rezidanslar, ortalama kiralar, depozito, Anmeldung ve dolandırıcılık.',
    faqs: [
      { q: 'Almanya’da öğrenci yurdu ne kadar?', a: 'Studierendenwerk yurtlarında ortalama sıcak kira aylık 300–350 avro civarındadır. Özel öğrenci rezidansları ise şehre göre genellikle 550–900 avro veya daha fazlasıdır.' },
      { q: 'Almanya’da yurt başvurusu ne zaman yapılmalı?', a: 'Mümkün olduğunca erken, tercihen kabul beklerken başvurun. Büyük şehirlerde bekleme süresi birkaç dönemi bulabildiği için kış dönemi için bahar aylarında başvurmak avantaj sağlar.' },
      { q: 'WG nedir?', a: 'WG (Wohngemeinschaft), birkaç kişinin bir daireyi paylaştığı, her birinin kendi odası olduğu ortak yaşam biçimidir. Almanya’da öğrenciler arasında en yaygın konaklama türlerinden biridir.' },
      { q: 'Almanya’da ev kiralarken depozito ne kadar?', a: 'Yasal üst sınır üç aylık net kiradır ve kiracı bunu taksitle ödeme hakkına sahiptir. Evi görmeden veya sözleşme imzalamadan depozito göndermemelisiniz.' },
      { q: 'Anmeldung yapmadan ne olur?', a: 'Adres kaydı yapılmadan oturum izni, banka hesabı ve vergi numarası gibi işlemler tamamlanamaz. Kayıt taşındıktan sonraki iki hafta içinde yapılmalıdır.' },
      { q: 'Almanya’da yurt bulamazsam ne yapmalıyım?', a: 'İlk aylar için geçici kiralama (Zwischenmiete) veya özel öğrenci rezidansıyla başlayıp şehirdeyken WG ve yurt aramaya devam edebilirsiniz. Üniversitenin uluslararası ofisi de çoğu zaman geçici konaklama listeleri ve ilk hafta için öneriler paylaşır.' },
    ],
    updated: '2026-10-24',
  },

  /* ================= AVUSTURYA ================= */
  {
    slug: 'avusturya-universite-basvurusu',
    title: 'Avusturya’da üniversite başvurusu',
    group: 'Üniversite',
    program: 'yuksek-lisans',
    countries: ['avusturya'],
    summary: 'Avusturya devlet üniversitelerine Türkiye’den başvuru: 726,72 € dönem harcı, YKS şartı, başvuru tarihleri, Vorstudienlehrgang, ÖSD ve oturum izni.',
    facts: [
      { label: 'AB dışı dönem harcı', value: '726,72 € + ÖH payı (26,20 €)' },
      { label: 'Türk lise diploması şartı', value: 'YKS’yi başarıyla tamamlamış olmak' },
      { label: 'Dil şartı', value: 'Almanca programlarda çoğunlukla C1' },
      { label: 'Hazırlık', value: 'Vorstudienlehrgang (VWU vb.)' },
      { label: 'Finansal kanıt (2026)', value: '24 yaş altı 722,58 €/ay, üstü 1.308,39 €/ay' },
    ],
    sections: [
      {
        h: 'Neden Avusturya?',
        p: [
          'Avusturya’daki devlet üniversiteleri (Universität Wien, TU Wien, Universität Graz, Universität Innsbruck, Universität Salzburg vb.) AB dışı öğrenciler için bile düşük harçlı, köklü ve Almanca eğitimin yanında giderek artan sayıda İngilizce yüksek lisans programı sunan kurumlardır. Almanca dil yeterliliğini Almanya ve İsviçre ile ortak kullanabilmeniz de büyük avantajdır. Ülke hakkında genel bilgi için [Avusturya sayfamıza](/ulkeler/avusturya) bakabilirsiniz.',
          'Avusturya sistemi Almanya’ya benzese de Türk öğrenciler açısından önemli farklar vardır: Lise diploması, YKS başarısıyla birlikte değerlendirildiğinde birçok programa Studienkolleg olmadan başvuru imkânı sunar; buna karşılık başvuru süreleri daha kısa ve belge kuralları (apostil, onaylı tercüme) daha katıdır. Başvuru doğrudan üniversitenin kendi online sistemi üzerinden yapılır, Almanya’daki gibi merkezi bir ön inceleme kurumu yoktur.',
        ],
      },
      {
        h: 'Harçlar: 726,72 avro ve ÖH payı',
        p: [
          'Devlet üniversitelerinde AB/AEA dışından gelen öğrenciler, Üniversiteler Yasası’na (UG §91) göre ilk dönemden itibaren dönem başına **726,72 avro** öğrenim harcı öder. Buna ek olarak tüm öğrenciler Avusturya öğrenci birliği payı (**ÖH-Beitrag**) öder; bu tutar kış dönemi 2026/27 için **26,20 avro**dur. AB vatandaşları ve Avusturyalılar ise yalnızca standart süreyi aşarsa 363,36 avro öder.',
          'Uygulamalı bilimler üniversiteleri (Fachhochschule) ve özel üniversiteler farklı ücret politikaları uygulayabilir; bazı FH’ler AB dışı öğrencilerden daha yüksek ücret alır. Burs veya muafiyet imkânları kurum bazındadır; Türkiye, harç muafiyeti tanınan ülkeler listesinde değildir.',
        ],
        table: {
          head: ['Kalem', 'Tutar', 'Sıklık'],
          rows: [
            ['Öğrenim harcı (AB dışı, devlet üniversitesi)', '726,72 €', 'Her dönem'],
            ['ÖH-Beitrag (WS 2026/27)', '26,20 €', 'Her dönem'],
            ['Yıllık toplam (2 dönem)', 'Yaklaşık 1.506 €', 'Yıllık'],
          ],
        },
      },
      {
        h: 'Türk lise diplomasıyla lisans başvurusu',
        p: [
          'Avusturya, Türk lise diplomasını tek başına yeterli saymaz. Universität Wien gibi üniversiteler, Türkiye’de liseyi bitiren Türk vatandaşlarından **ÖSYS/YKS** sınavına girip başarılı olduklarını gösteren apostilli belgeyi ister. Yabancı uyruklu adaylar için YÖS sonucu aranır. Avusturya makamlarının uygulamasına göre sınav belgesinde belirli bir asgari toplam puanın (180) yer alması gerekir. Ayrıca adayın seçtiği bölüme kendi ülkesinde de girebilecek olması (özel üniversite giriş yeterliliği) bazı programlarda ayrıca kontrol edilir.',
          'En az üç yıllık (180 ECTS) bir lisans programını tamamlamış adaylardan YKS belgesi istenmez; tamamlanmış lisans diploması genel üniversiteye giriş yeterliliği yerine geçer. Diploma ve sınav belgeleri apostilli ve yeminli tercümeli olarak sunulmalıdır; ayrıntılar için [apostil ve yeminli tercüme rehberimize](/bilgi-bankasi/apostil-ve-yeminli-tercume) bakın.',
        ],
      },
      {
        h: 'Başvuru takvimi: Universität Wien örneği',
        p: [
          'Avusturya’da AB dışı adayların başvuru tarihleri Almanya’ya göre daha erken ve katıdır. Universität Wien’in 2026/27 takvimi, diğer üniversiteler için de iyi bir referanstır:',
        ],
        table: {
          head: ['Program türü', 'Başvuru süresi (AB dışı)', 'Kayıt süresi'],
          rows: [
            ['Giriş sınavı olmayan lisans, Kış 2026/27', '22 Haziran – 3 Ağustos 2026', '13 Temmuz – 31 Ekim 2026'],
            ['Giriş sınavı olmayan lisans, Yaz 2027', '16 Kasım 2026 – 7 Ocak 2027', '11 Ocak – 31 Mart 2027'],
            ['Giriş/yetenek sınavlı programlar (2026/27)', '2 Mart – 4 Mayıs 2026 (yılda bir)', 'Dönem kayıt süresinde'],
          ],
        },
        list: [
          'Psikoloji, tıp (MedAT), işletme ve bazı fen bölümlerinde giriş sınavı vardır ve kayıt yılda bir kez, ilkbaharda açılır.',
          'Başvuru süresinde dosya eksiksiz ve onaylı belgelerle tamamlanmazsa kayıt aşamasına geçilemez.',
          'Diğer üniversitelerin (TU Wien, Graz, Innsbruck) tarihleri farklı olabilir; her birinin “Zulassung” sayfasını kontrol edin.',
        ],
      },
      {
        h: 'Almanca şartı, ÖSD ve Vorstudienlehrgang',
        p: [
          'Almanca programlar için genellikle **C1** düzeyi beklenir. Avusturya’ya özgü **ÖSD** (Österreichisches Sprachdiplom Deutsch) sertifikaları, Goethe-Zertifikat, TestDaF ve telc ile birlikte yaygın olarak kabul edilir; Türkiye’de ÖSD sınav merkezlerinde girilebilir. Sınavları karşılaştırmak için [TestDaF, Goethe ve telc rehberimize](/bilgi-bankasi/testdaf-goethe-telc) bakabilirsiniz.',
          'Almancası henüz yeterli olmayan ancak diğer tüm şartları sağlayan adaylar, üniversiteye **olağan dışı öğrenci** olarak kaydedilip **Vorstudienlehrgang**’a (üniversite hazırlık programı) yönlendirilir. Viyana’daki üniversiteler için bu program VWU (Vorstudienlehrgang der Wiener Universitäten) tarafından yürütülür; Graz ve Innsbruck gibi şehirlerde benzer programlar vardır. Program sonunda Almanca ek sınavı (Ergänzungsprüfung) geçildiğinde olağan öğrenci statüsüne geçilir. Vorstudienlehrgang ücretlidir ve süresi başlangıç seviyenize göre değişir. Önceden dil seviyenizi yükseltmek isterseniz [Avusturya dil okullarına](/yurtdisi-dil-okullari/avusturya) göz atabilirsiniz.',
        ],
      },
      {
        h: 'Yüksek lisans başvurusu',
        p: [
          'Yüksek lisans (Master) başvurusunda lisans derecenizin içerik ve kredi bakımından programa uygunluğu incelenir; eksik görülen dersler için ek ders şartıyla kabul verilebilir. İngilizce yüksek lisans programlarında IELTS veya TOEFL gibi belgeler istenir ve başvuru tarihleri çoğunlukla lisans takviminden erkendir. Program seçenekleri için [Avusturya’da yüksek lisans](/yurtdisi-yuksek-lisans/avusturya) sayfamıza bakabilirsiniz.',
        ],
      },
      {
        h: 'Oturum izni ve finansal kanıt',
        p: [
          'Avusturya’da altı aydan uzun eğitim için **Aufenthaltsbewilligung Student** (öğrenci oturum izni) gerekir. Başvuru genellikle Türkiye’deki Avusturya temsilciliği üzerinden yapılır ve Avusturya’ya giriş için D vizesi verilebilir. Finansal kanıt için 2026’da geçerli asgari tutarlar, 24 yaş altındakiler için aylık **722,58 avro**, 24 yaş ve üstü için aylık **1.308,39 avro**dur; tutarlar yıllık olarak güncellenir. Ayrıca kira sözleşmesi veya konaklama belgesi ve sağlık sigortası istenir. Öğrenciler, oturum izni kapsamında haftada 20 saate kadar çalışabilir.',
          'Başvurunuzu ve belge sıralamasını birlikte planlamak için [eğitim danışmanlığı](/hizmetler/egitim-danismanligi) sayfamızdan bizimle iletişime geçebilirsiniz.',
        ],
        table: {
          head: ['', 'Avusturya (devlet)', 'Almanya (devlet)'],
          rows: [
            ['AB dışı öğrenim harcı', '726,72 € / dönem', 'Çoğu eyalette yok (Baden-Württemberg 1.500 €)'],
            ['Dönem katkı payı', 'ÖH-Beitrag 26,20 €', 'Semesterbeitrag yaklaşık 200–450 €'],
            ['Türk lise diploması', 'YKS başarısıyla doğrudan başvuru', 'Çoğunlukla Studienkolleg'],
            ['Dil hazırlığı', 'Vorstudienlehrgang (kayıtlıyken)', 'Studienkolleg veya dil kursu'],
            ['Finansal kanıt', '722,58 € veya 1.308,39 € / ay (yaşa göre)', '992 € / ay bloke hesap'],
          ],
        },
      },
    ],
    seoTitle: 'Avusturya’da Üniversite Başvurusu: Harç, YKS ve Tarihler',
    description: 'Avusturya’da üniversite başvurusu: AB dışı öğrenciler için 726,72 € dönem harcı, YKS şartı, Universität Wien tarihleri, Vorstudienlehrgang ve oturum izni.',
    faqs: [
      { q: 'Avusturya’da üniversite ücretli mi?', a: 'Devlet üniversitelerinde AB dışı öğrenciler dönem başına 726,72 avro harç ve yaklaşık 26 avro öğrenci birliği payı öder. Yıllık toplam yaklaşık 1.500 avrodur.' },
      { q: 'Türk lise diplomasıyla Avusturya’da üniversiteye girilir mi?', a: 'Evet, ancak diplomanın yanında YKS’de başarılı olduğunuzu gösteren apostilli belge gerekir. Bazı programlarda bölüme kendi ülkenizde de girebilecek olmanız ayrıca kontrol edilir.' },
      { q: 'Vorstudienlehrgang nedir?', a: 'Almancası yetersiz olan adayların üniversiteye olağan dışı öğrenci olarak kaydedildiği hazırlık programıdır. Almanca ek sınavını geçtikten sonra asıl bölümünüze başlarsınız.' },
      { q: 'Avusturya öğrenci oturum izni için ne kadar para gösterilmeli?', a: '2026’da 24 yaş altındakiler için aylık 722,58 avro, 24 yaş ve üstü için aylık 1.308,39 avro gösterilmesi gerekir. Tutarlar her yıl güncellendiği için başvuru öncesinde kontrol edilmelidir.' },
      { q: 'ÖSD nedir, Almanya’da geçerli mi?', a: 'ÖSD, Avusturya’nın resmî Almanca dil sertifikasıdır ve Avusturya üniversitelerinde yaygın olarak kabul edilir. Almanya’da da birçok kurum ÖSD’yi kabul eder, ancak üniversite başvurusunda programın listesini kontrol etmek gerekir.' },
      { q: 'Avusturya’da üniversite başvurusu ne zaman yapılır?', a: 'Universität Wien’de AB dışı adaylar için kış dönemi 2026/27 başvuruları 22 Haziran–3 Ağustos 2026 arasında yapıldı; giriş sınavlı programlarda süre Mart–Mayıs’tadır. Diğer üniversitelerin tarihleri farklı olabileceğinden hedef üniversitenin takvimini ayrıca kontrol edin.' },
    ],
    updated: '2026-10-24',
  },
]
