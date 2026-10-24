// İngiltere, Amerika, Kanada, İrlanda ve Avustralya kavram rehberleri (bilgi bankası).
// Değişken veriler 24 Ekim 2026 itibarıyla resmî kaynaklardan kontrol edilmiştir.
import type { Guide } from '../guides'

export const angloGuides: Guide[] = [
  /* ================= İNGİLTERE ================= */
  {
    slug: 'ucas-nedir',
    title: 'UCAS nedir? İngiltere lisans başvuru sistemi',
    group: 'Başvuru',
    program: 'lisans',
    countries: ['ingiltere'],
    summary: 'İngiltere’de lisans başvurularının yapıldığı merkezi sistem UCAS’ın işleyişi, 2027 takvimi, ücreti ve başvuru stratejisi.',
    facts: [
      { label: 'Başvuru ücreti (2027 girişi)', value: '£34,50 (en fazla 5 tercih)' },
      { label: 'Oxford, Cambridge, tıp', value: '15 Ekim 2026, 18.00' },
      { label: 'Eşit değerlendirme son tarihi', value: '13 Ocak 2027, 18.00 (İngiltere saati)' },
      { label: 'Tercih sayısı', value: 'En fazla 5 program' },
      { label: 'Kişisel beyan', value: '3 soru, toplam 4.000 karakter' },
    ],
    sections: [
      {
        h: 'UCAS ne işe yarar?',
        p: [
          'UCAS (Universities and Colleges Admissions Service), İngiltere, İskoçya, Galler ve Kuzey İrlanda’daki üniversitelerin lisans başvurularını tek bir çatı altında toplayan merkezi başvuru sistemidir. Öğrenci, her üniversiteye ayrı ayrı başvuru yapmak yerine UCAS Hub üzerinde tek bir form doldurur; bu form seçtiği en fazla beş programa aynı anda iletilir.',
          'Türkiye’den başvuran bir öğrenci için UCAS’ın anlamı şudur: notlar, kişisel beyan (personal statement) ve öğretmen referansı bir kez hazırlanır ve bütün tercihler aynı dosyayı görür. Bu nedenle dosyanın tek bir bölüme ya da alana odaklı olması, beş farklı bölüme dağılmış bir dosyadan çok daha güçlüdür.',
          'UCAS yalnızca lisans (undergraduate) başvuruları içindir. Yüksek lisans başvuruları genellikle doğrudan üniversitenin kendi portalı üzerinden yapılır; Foundation programlarının çoğu da UCAS dışında, doğrudan üniversiteye başvuruyla alınır. Ayrıntılar için [Foundation nedir?](/bilgi-bankasi/foundation-nedir) rehberine bakabilirsiniz.',
        ],
      },
      {
        h: '2027 girişi başvuru takvimi',
        p: ['Eylül 2027’de başlayacak programlar için takvim aşağıdaki gibidir. Saatler İngiltere saatidir; Türkiye ile kış aylarında 3 saat fark vardır, yani 18.00 son saati Türkiye’de 21.00’e denk gelir.'],
        table: {
          head: ['Tarih', 'Ne olur?'],
          rows: [
            ['Mayıs 2026', 'UCAS Hub’da 2027 girişi başvurusu hazırlanmaya başlanabilir'],
            ['1 Eylül 2026', 'Tamamlanan başvurular UCAS’a gönderilebilir'],
            ['15 Ekim 2026, 18.00', 'Oxford, Cambridge ve tıp, diş hekimliği, veterinerlik başvuruları için son tarih'],
            ['13 Ocak 2027, 18.00', 'Diğer programlar için eşit değerlendirme (equal consideration) son tarihi'],
            ['Şubat – mayıs 2027', 'Üniversitelerden kararların gelmesi, ek tercih imkânı (UCAS Extra)'],
            ['30 Haziran 2027 civarı', 'Bu tarihten sonra gelen başvurular doğrudan Clearing sürecine girer'],
          ],
        },
      },
      {
        h: 'UCAS formunda neler var?',
        list: [
          '**Kişisel bilgiler ve uyruk:** Pasaport bilgileri, vize ihtiyacı, adres ve iletişim bilgileri.',
          '**Eğitim geçmişi:** Lise ve varsa üniversite notları, alınan ve beklenen sınav sonuçları (IB, A-Level, IELTS vb.).',
          '**Tercihler:** En fazla beş program. Tıp, diş hekimliği ve veterinerlikte bu bölümlerden en fazla dört tercih yapılabilir.',
          '**Kişisel beyan:** 2026 girişinden itibaren üç ayrı sorudan oluşur; toplam 4.000 karakteri geçemez. Ayrıntılar: [Personal statement nasıl yazılır?](/bilgi-bankasi/personal-statement-nasil-yazilir).',
          '**Referans:** Genellikle okul danışmanı veya bir öğretmen tarafından yazılır ve UCAS’a doğrudan referans veren yükler.',
          '**Ödeme ve gönderim:** 2027 girişi için tek seferlik £34,50 başvuru ücreti ödenir ve form gönderilir.',
        ],
      },
      {
        h: 'Türk öğrenciler için UCAS adım adım',
        list: [
          '**Lise 11. sınıf sonu:** Hedef bölüm ve üniversite listesini çıkarın, her programın giriş şartlarını (IB puanı, A-Level notları veya Foundation gereksinimi) kontrol edin.',
          '**Yaz dönemi:** IELTS hazırlığına başlayın; çoğu programda 6.0–7.0 arası genel puan istenir. Bkz. [IELTS rehberi](/bilgi-bankasi/ielts).',
          '**Eylül – ekim:** Kişisel beyanın taslaklarını tamamlayın, referans verecek öğretmenle görüşün.',
          '**Ekim – aralık:** Formu gönderin. Ocak son tarihini beklemek yerine sonbaharda göndermek, popüler programlarda daha rahat bir değerlendirme süreci sağlar.',
          '**Ocak – mayıs:** Teklifleri takip edin; koşullu teklif (conditional offer) aldıysanız şartları not edin.',
          '**Mayıs – haziran:** Bir kesin tercih (firm) ve bir yedek tercih (insurance) seçin.',
          '**Temmuz – ağustos:** Sonuçlar netleşince üniversite kabulü kesinleştirir; ardından CAS ve Student vizesi süreci başlar.',
        ],
      },
      {
        h: 'Teklif türleri ve cevaplama',
        p: [
          'Üniversiteler başvuruya üç şekilde cevap verir: **koşulsuz teklif** (unconditional), **koşullu teklif** (conditional, örneğin “IB 36 puan ve IELTS 6.5”) veya ret. Bütün kararlar geldikten sonra öğrenci tek bir kesin tercih ve isterse bir yedek tercih seçer, diğer teklifleri reddeder.',
          'Yedek tercihin şartları kesin tercihten daha düşük olmalıdır; aksi hâlde kesin tercihin şartlarını tutturamayan öğrenci yedeğin şartlarını da tutturamaz ve güvence anlamını yitirir. Hiç teklif alamayan veya tüm teklifleri reddeden öğrenciler UCAS Extra veya Clearing ile tekrar şans arayabilir: [Clearing nedir?](/bilgi-bankasi/clearing-nedir).',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'Beş tercihi birbirinden çok farklı bölümlere dağıtmak; kişisel beyan hepsine ikna edici olamaz.',
          'Türkiye lise diplomasıyla doğrudan birinci sınıfa kabul etmeyen programlara Foundation olmadan başvurmak.',
          'Referansı son haftaya bırakmak; öğretmenin yazıp yüklemesi zaman alır ve başvuru referans gelmeden gönderilemez.',
          'İngiltere saatini unutmak ve 13 Ocak 18.00 sınırını Türkiye saatine göre hesaplamak.',
          'Bütün tercihleri yalnızca sıralamaya göre yapmak; şehir, ders içeriği ve staj yılı (sandwich year) gibi unsurları göz ardı etmek.',
        ],
      },
      {
        h: 'Referans ve tahmini notlar (predicted grades)',
        p: [
          'İngiltere’de başvurular çoğunlukla final sonuçları açıklanmadan, okulun verdiği **tahmini notlarla** yapılır. IB veya A-Level okuyan öğrencilerde bu notları okulun IB/A-Level koordinatörü belirler ve referansla birlikte UCAS’a girer. Türkiye müfredatıyla okuyan öğrencilerde ise genellikle 9., 10. ve 11. sınıf transkriptleri ve 12. sınıf için beklenen ortalama paylaşılır.',
          'Referans, öğrencinin akademik performansını, derslere ilgisini ve seçtiği bölüme uygunluğunu anlatan yaklaşık bir sayfalık bir metindir. 2024 girişinden bu yana UCAS referansı üç başlıklı bir yapıdadır: okulun genel tanıtımı, öğrenciyi etkileyen özel koşullar ve öğrencinin bölüme uygunluğu. Referansı yazacak öğretmenin İngilizce bir metin hazırlaması gerektiği için en az bir ay önceden bilgilendirilmesi ve öğrencinin ilgi alanlarını, okuduğu kitapları, yaptığı projeleri özetleyen kısa bir not vermesi çok işe yarar. Referans yazımı hakkında ayrıntılar için [referans mektubu](/bilgi-bankasi/referans-mektubu) rehberimize bakabilirsiniz.',
        ],
      },
      {
        h: 'Tampa ile UCAS süreci',
        p: ['Program listesi, beş tercihlik strateji, kişisel beyan ve referans koordinasyonundan teklif cevaplamaya kadar her aşamayı [eğitim danışmanlığı](/hizmetler/egitim-danismanligi) kapsamında birlikte yürütüyoruz. İngiltere’de lisans seçenekleri için [İngiltere lisans programları](/lisans-programlari/ingiltere) sayfasına göz atabilirsiniz.'],
      },
    ],
    seoTitle: 'UCAS Nedir? İngiltere Üniversite Başvurusu 2027 Rehberi',
    description: 'UCAS nedir, nasıl başvurulur? 2027 girişi son tarihleri, £34,50 ücret, 5 tercih kuralı, kişisel beyan, referans ve teklif türleri tek rehberde.',
    faqs: [
      { q: 'UCAS başvurusu ne kadar?', a: '2027 girişi için UCAS başvuru ücreti tek seferlik £34,50’dir ve en fazla beş tercihi kapsar. Bazı üniversiteler ayrıca giriş sınavı veya mülakat ücreti isteyebilir; bunlar UCAS ücretine dahil değildir.' },
      { q: 'UCAS’ta kaç üniversiteye başvurabilirim?', a: 'Tek bir başvuruyla en fazla beş programa başvurabilirsiniz. Tıp, diş hekimliği ve veterinerlikte bu alanlardan en fazla dört tercih yapılır; beşinci tercih farklı bir bölüm olabilir.' },
      { q: 'UCAS son başvuru tarihi ne zaman?', a: '2027 girişi için Oxford, Cambridge ve tıp gibi bölümlerde son tarih 15 Ekim 2026, diğer programlarda eşit değerlendirme son tarihi 13 Ocak 2027 saat 18.00’dir (İngiltere saati). Bu tarihten sonra yapılan başvurular, üniversitede yer kaldıysa değerlendirilir.' },
      { q: 'Türk lise diplomasıyla UCAS’tan başvurabilir miyim?', a: 'Başvurabilirsiniz, ancak birçok üniversite Türkiye lise diplomasını doğrudan birinci sınıf için yeterli görmez ve Foundation yılı ister. IB Diploma veya A-Level sahipleri ise doğrudan birinci sınıfa başvurabilir.' },
      { q: 'Oxford ve Cambridge’e aynı yıl başvurabilir miyim?', a: 'Hayır. Aynı başvuru döneminde Oxford ve Cambridge’den yalnızca birine başvurulabilir. İstisnalar çok sınırlıdır; bu nedenle tercih kararını bölüm ve kolej yapısına göre erken vermek gerekir.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'cas-nedir',
    title: 'CAS nedir? İngiltere Student vizesi kabul belgesi',
    group: 'Vize & Belgeler',
    countries: ['ingiltere'],
    summary: 'CAS (Confirmation of Acceptance for Studies) nedir, üniversite ne zaman verir, içinde neler yazar ve Student vizesinde nasıl kullanılır?',
    facts: [
      { label: 'Geçerlilik', value: 'Verilişinden itibaren 6 ay' },
      { label: 'En erken vize başvurusu', value: 'Program başlangıcından 6 ay önce' },
      { label: 'Vize ücreti (8 Nisan 2026’dan beri)', value: '£558' },
      { label: 'Ortalama karar süresi', value: 'Yurt dışından yaklaşık 3 hafta' },
    ],
    sections: [
      {
        h: 'CAS ne demek?',
        p: [
          'CAS, “Confirmation of Acceptance for Studies” ifadesinin kısaltmasıdır. İngiltere’de Student vizesiyle okuyacak her öğrenciye, lisans veren sponsor kurum (üniversite, Foundation sağlayıcısı veya yatılı okul) tarafından elektronik olarak atanan benzersiz bir referans numarasıdır. Fiziksel bir belge değil, İçişleri Bakanlığı (Home Office) sistemine kaydedilmiş bir dijital kayıttır; öğrenciye genellikle e-postayla bir CAS bildirimi (CAS statement) gönderilir.',
          'Student vizesi başvurusunda CAS numarası olmadan form tamamlanamaz. Kabul mektubu (offer letter) ile CAS aynı şey değildir: kabul mektubu üniversitenin size yer verdiğini gösterir, CAS ise kurumun sizi vize için resmen sponsor ettiğini gösterir.',
        ],
      },
      {
        h: 'CAS’ta hangi bilgiler yer alır?',
        list: [
          'CAS referans numarası ve sponsor kurumun lisans numarası',
          'Programın adı, seviyesi (RQF/FHEQ), başlangıç ve bitiş tarihleri',
          'Programın toplam ve ilk yıl harç ücreti, ödenmiş tutar ve varsa konaklama ödemesi',
          'Üniversitenin İngilizce yeterliliğini nasıl değerlendirdiği (örneğin IELTS for UKVI veya kendi değerlendirmesi)',
          'Kabul kararında kullanılan belgeler (diploma, transkript, sınav sonuçları)',
          'ATAS belgesi gerekip gerekmediği (bazı mühendislik ve fen alanlarındaki yüksek lisans ve doktora programları için)',
        ],
        p: ['CAS’taki bilgilerin pasaportunuzla ve vize formunuzla birebir tutması gerekir. İsim yazımı, doğum tarihi veya ödenen harç tutarındaki küçük bir hata bile vize sürecinde gecikmeye yol açabilir; CAS taslağını üniversiteden aldığınızda mutlaka kontrol edin.'],
      },
      {
        h: 'CAS ne zaman ve nasıl alınır?',
        p: ['Üniversiteler CAS’ı genellikle şu koşullar tamamlandıktan sonra düzenler:'],
        list: [
          '**Koşulsuz kabul:** Koşullu teklifinizdeki not ve İngilizce şartlarını belgeleyip teklifi koşulsuza çevirmeniz.',
          '**Depozito veya harç ödemesi:** Birçok üniversite uluslararası öğrencilerden CAS öncesinde belirli bir depozito ister; tutar kuruma göre değişir.',
          '**Ön vize kontrolü (credibility check):** Bazı üniversiteler öğrenciyle kısa bir çevrim içi görüşme yapar; program seçimi, finansman ve kariyer planı sorulur.',
          '**Belgelerin yüklenmesi:** Pasaport, diploma, transkript, banka belgeleri ve varsa önceki vize geçmişi.',
        ],
      },
      {
        h: 'CAS sonrası Student vizesi takvimi',
        table: {
          head: ['Adım', 'Ne zaman?', 'Not'],
          rows: [
            ['CAS’ın gelmesi', 'Genellikle başlangıçtan 2–4 ay önce', 'Eylül başlangıçlarında çoğunlukla haziran – ağustos'],
            ['Finansal belgeler', 'Başvurudan önce en az 28 gün', 'Harç + yaşam gideri hesapta 28 gün kesintisiz durmalı'],
            ['Online vize formu ve ödeme', 'Başlangıçtan en erken 6 ay önce', '£558 vize ücreti ve sağlık katkı payı (IHS)'],
            ['Biyometri randevusu', 'Formdan sonra', 'Türkiye’de TLScontact merkezlerinde'],
            ['Karar', 'Ortalama 3 hafta', 'Öncelikli hizmet seçeneği varsa ek ücretle daha hızlı'],
            ['İngiltere’ye giriş', 'Başlangıçtan en fazla 1 ay önce', '6 aydan kısa programlarda en fazla 1 hafta önce'],
          ],
        },
      },
      {
        h: 'Finansal yeterlilik: CAS’taki rakamlarla bağlantı',
        p: [
          'Vize başvurusunda göstermeniz gereken tutar, CAS’ta yazan ilk yıl harcından ödenmiş kısmın düşülmesiyle bulunur; buna yaşam gideri eklenir. 30 Kasım 2026 ve sonrasındaki başvurularda yaşam gideri, Londra’daki programlar için aylık £1.570, Londra dışı için aylık £1.203’tür ve en fazla 9 ay üzerinden hesaplanır.',
          'Örnek: Manchester’da ilk yıl harcı £24.000 olan, £5.000 depozito ödemiş bir öğrenci için hesap: £19.000 kalan harç + (9 × £1.203) £10.827 yaşam gideri = **£29.827**. Bu tutarın en az 28 gün boyunca öğrencinin veya ebeveyninin hesabında kesintisiz bulunması gerekir. Banka ve sponsor yazıları için [örnek banka mektubu](/kaynaklar/ornek-banka-mektubu) ve [örnek sponsor mektubu](/kaynaklar/ornek-sponsor-mektubu) sayfalarımıza bakabilirsiniz.',
        ],
      },
      {
        h: 'Credibility görüşmesi: CAS öncesi son eşik',
        p: [
          'Home Office, sponsor üniversitelerin vize reddi oranlarını yakından izler; bu oran belirli bir eşiği aşarsa kurumun sponsorluk lisansı risk altına girer. Bu nedenle birçok üniversite CAS vermeden önce öğrenciyle 10–20 dakikalık bir çevrim içi görüşme yapar. Görüşme bir sınav değildir, ancak hazırlıksız girilmesi CAS’ın gecikmesine hatta verilmemesine yol açabilir.',
          'Sık sorulan sorular şunlardır: Neden bu üniversiteyi ve bu bölümü seçtiniz? Programın hangi modülleri ilginizi çekiyor? Eğitiminizi kim finanse ediyor ve ailenizin geliri nereden geliyor? Mezun olduktan sonra ne yapmayı planlıyorsunuz? Neden Türkiye’de veya başka bir ülkede değil de İngiltere’de okumak istiyorsunuz? Cevapların kişisel beyanınızla ve vize dosyanızdaki belgelerle tutarlı olması gerekir. Ezber cevaplar yerine kendi cümlelerinizle, programın ders içeriğine atıf yaparak konuşmanız en iyi sonucu verir.',
        ],
      },
      {
        h: 'Sık karşılaşılan CAS sorunları',
        list: [
          '**Süresi dolmuş CAS:** CAS verildikten sonra 6 ay içinde kullanılmazsa geçersiz olur; yeni CAS istenmesi gerekir.',
          '**Program değişikliği:** Bölüm veya başlangıç tarihi değişirse eski CAS kullanılamaz, üniversite yeni CAS düzenler.',
          '**Vize reddi sonrası:** Ret gerekçesi giderilirse bazı üniversiteler yeni CAS verir; ancak ikinci bir ret sonrası CAS vermeyen kurumlar da vardır. Bkz. [vize reddi sonrası](/bilgi-bankasi/vize-reddi-sonrasi).',
          '**Hatalı bilgi:** Ödeme tutarı veya İngilizce bilgisi yanlış girilmişse vize başvurusundan önce düzeltilmesi istenmelidir.',
        ],
      },
      {
        h: 'Tampa’nın desteği',
        p: ['Koşulların tamamlanması, depozito planlaması, credibility görüşmesine hazırlık, finansal belgelerin 28 gün kuralına göre düzenlenmesi ve vize formu [vize danışmanlığı](/hizmetler/vize-danismanligi) kapsamında takip edilir. Genel vize çerçevesi için [öğrenci vizesi rehberi](/bilgi-bankasi/ogrenci-vizesi-rehberi) sayfamıza da göz atabilirsiniz.'],
      },
    ],
    seoTitle: 'CAS Nedir? İngiltere Öğrenci Vizesi CAS Belgesi Rehberi',
    description: 'CAS nedir, üniversite ne zaman verir? İçeriği, 6 aylık geçerliliği, credibility görüşmesi, £558 vize ücreti, 28 gün kuralı ve sık yapılan hatalar.',
    faqs: [
      { q: 'CAS ne kadar sürede gelir?', a: 'Koşulsuz kabul, depozito ve istenen belgeler tamamlandıktan sonra çoğu üniversite CAS’ı birkaç gün ile birkaç hafta içinde düzenler. Eylül başlangıçlarında yoğunluk nedeniyle haziran – ağustos aylarında süre uzayabilir.' },
      { q: 'CAS numarası kaç hanelidir?', a: 'CAS referans numarası 14 karakterden oluşan harf ve rakam dizisidir. Vize formuna bu numara eksiksiz girilmelidir; Home Office CAS kaydındaki bilgileri bu numara üzerinden görür.' },
      { q: 'CAS aldıktan sonra vize kesin mi?', a: 'Hayır. CAS yalnızca üniversitenin sizi sponsor ettiğini gösterir. Vize kararı finansal belgeler, İngilizce yeterliliği, gerçek öğrenci olup olmadığınız ve diğer şartlar değerlendirilerek ayrıca verilir.' },
      { q: 'CAS için depozito zorunlu mu?', a: 'Yasal bir zorunluluk değildir, ancak birçok üniversite uluslararası öğrencilerden CAS öncesinde depozito ister. Ödenen tutar CAS’ta görünür ve vize için göstermeniz gereken harç tutarından düşülür.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'ihs-saglik-katki-payi',
    title: 'IHS nedir? İngiltere sağlık katkı payı hesaplama',
    group: 'Vize & Belgeler',
    countries: ['ingiltere'],
    summary: 'Immigration Health Surcharge (IHS) nedir, öğrenciler ne kadar öder, nasıl hesaplanır ve NHS’ten nasıl yararlanılır?',
    facts: [
      { label: 'Öğrenci tutarı', value: 'Yıllık £776' },
      { label: 'Graduate Route ve diğer vizeler', value: 'Yıllık £1.035' },
      { label: '6 aya kadar ek süre', value: 'Yarım yıl ücreti (£388)' },
      { label: 'Kim ödemez?', value: '6 ay ve altı vizeler (ör. Standard Visitor)' },
    ],
    sections: [
      {
        h: 'IHS ne demek?',
        p: [
          'IHS (Immigration Health Surcharge), İngiltere’ye 6 aydan uzun süreli vizeyle gelen yabancıların vize başvurusu sırasında peşin ödediği sağlık katkı payıdır. Ödendikten sonra öğrenci, İngiltere’nin kamu sağlık sistemi NHS’ten (National Health Service) büyük ölçüde İngiltere vatandaşlarıyla aynı koşullarda yararlanır: aile hekimi (GP) muayenesi, hastane tedavisi ve acil servis ücretsizdir.',
          'Öğrenciler için indirimli tutar 6 Şubat 2024’te £470’ten £776’ya yükseltilmiştir; standart yetişkin tutarı ise aynı tarihte £1.035 olmuştur. Tutarlar zaman zaman güncellendiği için başvuru öncesinde gov.uk’taki IHS hesaplayıcısında kendi vize sürenizle kontrol etmeniz önerilir.',
          'IHS ayrı bir sigorta poliçesi değildir ve ayrıca satın alınmaz; Student vizesi online formunu doldururken sistem tutarı otomatik hesaplar ve vize ücretiyle birlikte ödenir. Ödeme yapılmadan biyometri randevusuna geçilemez.',
        ],
      },
      {
        h: 'Kim ne kadar öder?',
        table: {
          head: ['Vize türü', 'Yıllık IHS', 'Not'],
          rows: [
            ['Student vizesi (ve öğrencinin bakmakla yükümlü olduğu kişiler)', '£776', '6 Şubat 2024’ten beri geçerli indirimli tutar'],
            ['Child Student vizesi', '£776', '16–17 yaş ve yatılı okul öğrencileri'],
            ['Graduate Route', '£1.035', 'Standart yetişkin tutarı'],
            ['Skilled Worker ve diğer çalışma vizeleri', '£1.035', 'Bazı sağlık çalışanları muaftır'],
            ['Standard Visitor, Short-term Study', 'Ödenmez', '6 aya kadar kısa süreli vizeler'],
          ],
        },
      },
      {
        h: 'IHS nasıl hesaplanır?',
        p: [
          'IHS, programın süresine göre değil, **size verilecek vizenin süresine** göre hesaplanır. Student vizesi programın süresine ek olarak bir miktar daha uzun verilir: 12 ay ve üzeri programlarda program bitiminden sonra 4 ay, 6–12 ay arası programlarda 2 ay eklenir; ayrıca programdan önce bir aya kadar erken giriş süresi hesaba katılabilir.',
          'Hesaplamada her tam yıl için yıllık tutar, kalan süre 6 ay veya altındaysa yarım yıllık tutar, 6 aydan fazlaysa bir tam yıllık tutar alınır.',
        ],
        table: {
          head: ['Örnek program', 'Yaklaşık vize süresi', 'IHS'],
          rows: [
            ['1 yıllık yüksek lisans (12 ay)', '1 yıl + 4–5 ay', '£776 + £388 = £1.164'],
            ['3 yıllık lisans', '3 yıl + 4–5 ay', '3 × £776 + £388 = £2.716'],
            ['4 yıllık lisans (sandwich year dahil)', '4 yıl + 4–5 ay', '4 × £776 + £388 = £3.492'],
            ['Foundation (9 ay)', '9 ay + 2 ay ve erken giriş', '£776'],
          ],
        },
      },
      {
        h: 'IHS neleri kapsar, neleri kapsamaz?',
        list: [
          '**Kapsar:** GP (aile hekimi) kaydı ve muayene, hastane tedavisi, acil servis, gerekli tetkikler ve uzman yönlendirmeleri.',
          '**Kısmen kapsar:** İngiltere’de (England) reçeteli ilaçlar için reçete başına sabit bir ücret alınır; İskoçya ve Galler’de reçeteler ücretsizdir.',
          '**Kapsamaz:** Diş tedavisi ve göz muayenesinde NHS katkı ücretleri ödenir; özel hastane, estetik işlemler ve yurt dışına çıkışta oluşan sağlık giderleri kapsam dışıdır.',
          '**Seyahat:** IHS yalnızca İngiltere içinde geçerlidir; tatilde Avrupa’ya giderken ayrıca seyahat sağlık sigortası yaptırılmalıdır.',
        ],
      },
      {
        h: 'İade durumları',
        p: [
          'Vize reddedilirse veya başvuru geri çekilirse ödenen IHS genellikle iade edilir; iade, ödemenin yapıldığı karta otomatik olarak yapılır. Vize, başvurduğunuzdan daha kısa süreli verilirse aradaki fark iade edilebilir.',
          'Buna karşılık vize alınıp İngiltere’ye gidildikten sonra programı erken bırakmak, kullanılmayan dönem için kural olarak iade hakkı doğurmaz. Programı yarıda bırakma ihtimali varsa bu durum danışmanınızla önceden konuşulmalıdır.',
        ],
      },
      {
        h: 'İngiltere’ye vardıktan sonra yapılacaklar',
        list: [
          'Okulunuza veya konaklama adresinize yakın bir GP’ye kayıt olun; birçok üniversitenin kampüs sağlık merkezi vardır.',
          'NHS numaranızı edinin ve NHS App’i kurun; randevu ve reçete takibi buradan yapılır.',
          'Acil olmayan durumlarda 111 hattını, acil durumlarda 999’u arayın.',
          'Sürekli kullandığınız bir ilaç varsa Türkiye’den getireceğiniz miktar ve İngilizce doktor raporu konusunda önceden bilgi alın.',
        ],
      },
      {
        h: 'Aile üyeleri, uzatma ve Graduate Route geçişi',
        p: [
          'Ocak 2024’ten bu yana Student vizesiyle aile üyesi getirme hakkı büyük ölçüde araştırma ağırlıklı yüksek lisans ve doktora öğrencileriyle sınırlıdır. Bu hakka sahip öğrencilerin eşi ve çocukları da kendi vize süreleri için öğrenci tutarından (£776) IHS öder; her aile üyesi için ayrı hesaplama yapılır.',
          'İngiltere içinden vize uzatma (örneğin Foundation’dan lisansa geçiş) veya Graduate Route’a geçiş sırasında yeni vize süresi için tekrar IHS ödenir. Graduate Route’ta tutar yıllık £1.035’tir; 1 Ocak 2027 ve sonrasındaki başvurularda 18 aylık bir Graduate Route için bu, bir tam yıl ve bir yarım yıl ücreti, yani yaklaşık **£1.552,50** demektir. Ayrıntılar için [Graduate Route nedir?](/bilgi-bankasi/graduate-route-nedir) rehberine bakın.',
          'Bir başka sık sorulan durum da 6 ay ve altındaki dil kurslarıdır. Standard Visitor vizesiyle yapılan bu programlarda IHS ödenmez ve NHS hizmetlerinden ücretsiz yararlanılamaz; bu nedenle kısa programlar için mutlaka seyahat sağlık sigortası yaptırılmalıdır.',
        ],
      },
      {
        h: 'Bütçe planlamasında IHS',
        p: ['IHS, vize ücretiyle birlikte başvuru anında peşin ödendiği için ilk yıl bütçesinin en çok gözden kaçan kalemidir. 3 yıllık bir lisans için £558 vize ücreti ve £2.716 IHS ile yalnızca vize aşamasında yaklaşık £3.274 ödenir. Kalemlerin tamamı için [yurt dışı bütçe planlama](/bilgi-bankasi/yurtdisi-butce-planlama), sigorta seçenekleri için [sağlık sigortası](/bilgi-bankasi/saglik-sigortasi) rehberlerimize, vize dosyası için [vize danışmanlığı](/hizmetler/vize-danismanligi) sayfamıza bakabilirsiniz.'],
      },
    ],
    seoTitle: 'IHS Nedir? İngiltere Sağlık Katkı Payı Ücreti ve Hesaplama',
    description: 'IHS nedir, öğrenciler ne kadar öder? Yıllık £776 öğrenci tutarı, vize süresine göre hesaplama örnekleri, NHS kapsamı, iade koşulları ve aile durumu.',
    faqs: [
      { q: 'IHS ücreti 2026’da ne kadar?', a: 'Student vizesi sahipleri ve onların aile üyeleri için yıllık £776, Graduate Route dahil diğer çoğu vize için yıllık £1.035’tir. Tutarlar değişebileceği için başvuru sırasında gov.uk hesaplayıcısıyla kontrol edilmelidir.' },
      { q: 'IHS ödersem ayrıca sağlık sigortası yaptırmam gerekir mi?', a: 'İngiltere içindeki temel sağlık hizmetleri için gerekmez; NHS’ten yararlanırsınız. Ancak özel sağlık hizmeti, diş tedavisi veya İngiltere dışına seyahatler için ek sigorta isteğe bağlı olarak yaptırılabilir.' },
      { q: 'IHS taksitle ödenebilir mi?', a: 'Hayır. Vize başvurusu sırasında vizenin tüm süresi için tek seferde ödenir. Ödeme yapılmadan başvuru tamamlanmaz.' },
      { q: 'Vize reddedilirse IHS iade edilir mi?', a: 'Evet, vize reddi veya başvurunun geri çekilmesi durumunda IHS genellikle ödemenin yapıldığı karta iade edilir. Vize ücreti ise iade edilmez.' },
      { q: '1 yıllık yüksek lisans için IHS ne kadar tutar?', a: '12 aylık bir yüksek lisansta vize genellikle program süresi artı 4 ay olarak verilir. Bu durumda bir tam yıl (£776) ve bir yarım yıl (£388) olmak üzere toplam yaklaşık £1.164 IHS ödenir.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'russell-group-nedir',
    title: 'Russell Group nedir? İngiltere’nin araştırma üniversiteleri',
    group: 'Üniversite',
    program: 'lisans',
    countries: ['ingiltere'],
    summary: 'Russell Group’taki 24 üniversite hangileri, grubun gerçekte ne anlama geldiği ve tercih yaparken nasıl değerlendirilmesi gerektiği.',
    facts: [
      { label: 'Üye sayısı', value: '24 üniversite' },
      { label: 'Kuruluş', value: '1994' },
      { label: 'Kapsam', value: 'İngiltere, İskoçya, Galler, Kuzey İrlanda' },
      { label: 'Odak', value: 'Araştırma yoğun kamu üniversiteleri' },
    ],
    sections: [
      {
        h: 'Russell Group ne demek?',
        p: [
          'Russell Group, Birleşik Krallık’taki araştırma yoğun 24 kamu üniversitesinin oluşturduğu bir birliktir. Adını, ilk toplantıların yapıldığı Londra’daki Russell Hotel’den alır. 1994’te kurulan grup, üyelerinin araştırma finansmanı, yükseköğretim politikası ve uluslararası iş birlikleri konusundaki ortak çıkarlarını temsil eder.',
          'Grup 1994’te 17 üniversiteyle kurulmuş, zamanla genişlemiştir: 1998’de King’s College London, 2006’da Cardiff ve Queen’s University Belfast, 2012’de ise Durham, Exeter, Queen Mary University of London ve York katılmıştır. Bugünkü 24 üyeli yapı 2012’den beri değişmemiştir. Grubun Londra’daki bir merkez ofisi vardır ve üniversiteler adına hükümetle araştırma finansmanı, öğrenci vizeleri ve uluslararası öğrenci politikaları gibi konularda görüş bildirir.',
          'Russell Group resmî bir sıralama, akreditasyon veya kalite damgası değildir. Bir üniversitenin bu gruba üye olması, araştırma hacmi ve kurumsal profili yüksek olduğunu gösterir; ama her bölümün mutlaka grubun dışındaki tüm üniversitelerden daha iyi olduğu anlamına gelmez.',
        ],
      },
      {
        h: '24 üye üniversite',
        table: {
          head: ['Bölge', 'Üniversiteler'],
          rows: [
            ['Londra', 'Imperial College London, King’s College London, London School of Economics (LSE), Queen Mary University of London, University College London (UCL)'],
            ['Güney ve Güneybatı İngiltere', 'University of Oxford, University of Southampton, University of Bristol, University of Exeter'],
            ['Doğu İngiltere', 'University of Cambridge'],
            ['Midlands', 'University of Birmingham, University of Nottingham, University of Warwick'],
            ['Kuzey İngiltere', 'University of Manchester, University of Liverpool, University of Leeds, University of Sheffield, University of York, Durham University, Newcastle University'],
            ['İskoçya', 'University of Edinburgh, University of Glasgow'],
            ['Galler', 'Cardiff University'],
            ['Kuzey İrlanda', 'Queen’s University Belfast'],
          ],
        },
      },
      {
        h: 'Russell Group üniversitelerinin ortak özellikleri',
        list: [
          '**Araştırma yoğunluğu:** Birleşik Krallık’taki üniversite araştırma gelirinin büyük kısmı bu kurumlara gider; laboratuvar ve kütüphane altyapısı güçlüdür.',
          '**Rekabetçi kabul:** Popüler bölümlerde (tıp, hukuk, ekonomi, bilgisayar bilimi) giriş şartları yüksektir; Türk öğrenciler için IB’de genellikle 34–40 puan veya güçlü bir Foundation sonucu beklenir.',
          '**Büyük öğrenci toplulukları:** Çoğu kampüste uluslararası öğrenci oranı yüksektir, Türk öğrenci dernekleri de yaygındır.',
          '**İşveren algısı:** Büyük işverenlerin mezun programlarında bu üniversitelerin adı tanınır; ancak işveren nihayetinde bölüm, staj ve beceriye bakar.',
        ],
      },
      {
        h: 'Russell Group dışında da güçlü üniversiteler var',
        p: [
          'Bazı üniversiteler Russell Group üyesi olmamalarına rağmen belirli alanlarda üst sıralarda yer alır. Örneğin St Andrews, Bath, Loughborough ve Lancaster gibi kurumlar ulusal sıralamalarda birçok Russell Group üyesinin önünde yer alabilir. Sanat, tasarım ve performans alanlarında ise uzmanlaşmış kurumlar (University of the Arts London, Royal College of Art gibi) çoğu araştırma üniversitesinden daha güçlü bir seçenektir.',
          'Bu yüzden tercih listesi yapılırken Russell Group etiketi tek başına bir kriter olmamalı; bölüm sıralaması, ders içeriği, staj yılı (bkz. [sandwich year nedir?](/bilgi-bankasi/sandwich-year-nedir)), şehir ve yaşam maliyeti birlikte değerlendirilmelidir.',
        ],
      },
      {
        h: 'Türk öğrenciler için giriş yolları',
        list: [
          '**IB Diploma veya A-Level:** UCAS üzerinden doğrudan birinci sınıfa başvuru. Bkz. [IB, A-Level ve AP](/bilgi-bankasi/ib-a-level-ap).',
          '**Foundation:** Türkiye lise diplomasıyla birçok Russell Group üniversitesi bir yıllık Foundation ister; bazı üniversitelerin kendi bünyesinde veya partner kurumlarında Foundation programı vardır.',
          '**Üniversite birinci yılından geçiş:** Türkiye’de iyi bir üniversitede birinci yılını başarıyla tamamlamış öğrencileri bazı kurumlar doğrudan birinci sınıfa kabul edebilir.',
          '**Yüksek lisans:** Türkiye’den lisans mezunları için genellikle not ortalaması (çoğu programda 4 üzerinden yaklaşık 3,0 ve üzeri) ve IELTS 6.5–7.0 istenir. Bkz. [İngiltere’de yüksek lisans](/yurtdisi-yuksek-lisans/ingiltere).',
        ],
      },
      {
        h: 'Şehir ve yaşam maliyeti farkı',
        p: [
          'Russell Group üniversitelerinin beşi Londra’dadır ve Londra’da okuyan bir öğrencinin vize için göstermesi gereken yaşam gideri, 30 Kasım 2026 ve sonrasındaki başvurularda aylık £1.570’tir. Manchester, Leeds, Sheffield, Liverpool, Newcastle, Glasgow veya Cardiff gibi şehirlerde bu tutar aylık £1.203’e düşer. Dokuz aylık bir akademik yılda aradaki fark vize hesabında bile £3.300’ün üzerindedir; gerçek kira farkı ise çoğu zaman bundan daha fazladır.',
          'Bu yüzden aynı bölüm için Londra’daki bir üniversite ile kuzeydeki bir Russell Group üyesi arasında kararsız kalan öğrenciler, üç yıllık toplam maliyeti yan yana koyarak karar vermelidir. Kuzey şehirlerinde öğrenci nüfusu yoğun, ulaşım kolay ve özel öğrenci rezidansı seçenekleri geniştir. Konaklama türleri ve ortalama fiyatlar için [konaklama seçenekleri](/bilgi-bankasi/konaklama-secenekleri) rehberimize bakabilirsiniz.',
        ],
      },
      {
        h: 'Tercih yaparken pratik bir yöntem',
        p: ['Beş UCAS tercihinizi tamamen Russell Group’tan yapmak yerine, notlarınıza göre iki iddialı, iki gerçekçi ve bir güvenli tercih belirlemek daha sağlıklıdır. Örneğin IB tahmini notu 34 olan bir öğrenci için 38 isteyen bir program iddialı, 32–34 isteyen programlar gerçekçidir. Bu dengeyi kurmak için [UCAS nedir?](/bilgi-bankasi/ucas-nedir) rehberimize ve [İngiltere’de lisans](/lisans-programlari/ingiltere) sayfamıza göz atabilirsiniz.'],
      },
    ],
    seoTitle: 'Russell Group Nedir? İngiltere’nin 24 Üniversitesi Listesi',
    description: 'Russell Group nedir, hangi üniversiteler üye? 24 üniversitenin bölgelere göre listesi, giriş yolları, şehir maliyetleri ve tercih stratejisi.',
    faqs: [
      { q: 'Russell Group’ta kaç üniversite var?', a: 'Russell Group’ta 24 üniversite vardır. Bunların 20’si İngiltere’de, ikisi İskoçya’da, biri Galler’de ve biri Kuzey İrlanda’dadır.' },
      { q: 'Russell Group üniversitesi mezunu olmak iş bulmayı kolaylaştırır mı?', a: 'Büyük işverenler bu üniversitelerin adını tanır ve mezun programlarında sık rastlanır. Yine de işe alımda bölüm, staj deneyimi ve beceriler belirleyicidir; grup dışındaki güçlü üniversitelerin mezunları da benzer fırsatlara ulaşır.' },
      { q: 'Russell Group üniversiteleri yüksek lisans için de avantajlı mı?', a: 'Araştırma altyapısı güçlü olduğu için özellikle araştırma ağırlıklı yüksek lisans ve doktora programlarında avantaj sağlarlar. Ders ağırlıklı (taught) yüksek lisansta ise program içeriği, staj bağlantıları ve şehir, gruba üyelik kadar önemlidir.' },
      { q: 'Russell Group üniversiteleri daha mı pahalı?', a: 'Harç ücretleri gruba üyelikten çok bölüme ve şehre göre değişir. Laboratuvar gerektiren bölümler ve Londra’daki üniversiteler genellikle daha yüksek ücretlidir; grup dışında da benzer ücretli üniversiteler vardır.' },
      { q: 'Russell Group’a yeni üniversite katılır mı?', a: 'Grup üyeliği zaman zaman genişlemiştir; son olarak 2012’de Durham, Exeter, Queen Mary ve York gruba katılmıştır. Üyelik bir başvuru ve kabul süreciyle gerçekleşir, sıralamalara bağlı otomatik bir mekanizma yoktur.' },
      { q: 'Türkiye lise diplomasıyla Russell Group’a girilir mi?', a: 'Çoğu Russell Group üniversitesi Türkiye lise diplomasıyla doğrudan birinci sınıfa kabul etmez; Foundation yılı veya IB/A-Level gibi ek bir yeterlilik ister. Bazı kurumlar Türkiye’de üniversite birinci yılını tamamlamış öğrencileri kabul edebilir.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'clearing-nedir',
    title: 'Clearing nedir? UCAS’ta boş kontenjanlara başvuru',
    group: 'Başvuru',
    program: 'lisans',
    countries: ['ingiltere'],
    summary: 'UCAS Clearing ne zaman açılır, kimler kullanabilir, Türk öğrenciler hangi durumlarda Clearing’den yararlanır ve vize takvimi nasıl yönetilir?',
    facts: [
      { label: 'Açılış', value: 'Genellikle temmuz başı' },
      { label: 'A-Level sonuç günü', value: 'Ağustos ortası (2026: 13 Ağustos)' },
      { label: 'Kapanış', value: 'Genellikle ekim ortası' },
      { label: 'Ek ücret', value: 'Yok (UCAS ücretine dahil)' },
    ],
    sections: [
      {
        h: 'Clearing ne demek?',
        p: [
          'Clearing, UCAS’ın yaz aylarında işlettiği ve üniversitelerin henüz dolmamış kontenjanlarını, yerleşemeyen veya geç başvuran öğrencilerle eşleştiren son aşamadır. Birçok kişi Clearing’i yalnızca “düşük notlular için” bir yol olarak bilir; oysa geç karar veren, planı değişen veya tekliflerini reddeden öğrenciler de bu süreçten yararlanır. Bazı tanınmış üniversiteler de belirli bölümlerde Clearing’e yer ayırır.',
          'Clearing ile yerleşen öğrenci, normal yoldan yerleşen bir öğrenciyle aynı diplomayı alır; transkriptte veya diplomada Clearing ile girildiğine dair bir ibare yer almaz. Üniversiteler için de Clearing, kontenjanlarını doldurmanın olağan bir parçasıdır.',
          'Clearing’de ek UCAS ücreti ödenmez; başvuru sırasında ödenen tek seferlik ücret Clearing’i de kapsar.',
        ],
      },
      {
        h: 'Kimler Clearing’i kullanabilir?',
        list: [
          'Başvurusunu 30 Haziran civarındaki son tarihten sonra yapan öğrenciler (başvurular doğrudan Clearing’e düşer).',
          'Hiç teklif alamayan veya aldığı tüm teklifleri reddeden öğrenciler.',
          'Kesin ve yedek tercihinin şartlarını sonuçlar açıklandığında karşılayamayan öğrenciler.',
          'Notları beklenenden yüksek gelen ve kesin tercihini bırakmak isteyen öğrenciler (bu durumda “Clearing’e bırakma / release” seçeneği kullanılır).',
        ],
      },
      {
        h: 'Clearing takvimi',
        p: ['Tarihler her yıl UCAS tarafından açıklanır; 2027 takvimi henüz kesinleşmediği için aşağıdaki tablo 2026 döngüsüne ve genel işleyişe dayanır.'],
        table: {
          head: ['Dönem', 'Ne olur?'],
          rows: [
            ['30 Haziran civarı', 'Ana başvuru dönemi kapanır; sonraki başvurular Clearing’e girer'],
            ['Temmuz başı', 'Clearing resmen açılır; sonucu elinde olan öğrenciler (ör. IB) başvurabilir'],
            ['Temmuz başı', 'IB sonuçları açıklanır'],
            ['Ağustos ortası', 'A-Level sonuç günü; Clearing’in en yoğun dönemi'],
            ['Eylül başı', 'Koşullu tekliflerin şartlarını tamamlama son günü'],
            ['Ekim ortası', 'Clearing kapanır'],
          ],
        },
      },
      {
        h: 'Clearing adım adım',
        list: [
          '**Sonuç günü hazırlığı:** Diploma notlarınızı, IELTS sonucunuzu ve kişisel beyanınızı elinizin altında tutun. Clearing’de dosyanız hızlı incelenir.',
          '**Boş kontenjanları arayın:** UCAS’ın Clearing arama aracında “vacancies” görünen programları ve üniversitelerin Clearing sayfalarını kontrol edin.',
          '**Üniversiteyi arayın veya formu doldurun:** Birçok kurum Clearing başvurularını telefonla veya online formla alır; size sözlü veya yazılı teklif verebilir.',
          '**Teklifi UCAS Hub’a ekleyin:** Üniversitenin izniyle Clearing tercihini Hub’a eklersiniz; aynı anda yalnızca bir Clearing tercihi eklenebilir.',
          '**Kabulün kesinleşmesi:** Üniversite UCAS üzerinden onaylar; ardından konaklama, depozito ve CAS süreci başlar.',
        ],
      },
      {
        h: 'Türk öğrenciler için Clearing: vize takvimi kritik',
        p: [
          'Clearing ile ağustosta yerleşen bir Türk öğrencinin önünde eylül başlangıcına kadar çok kısa bir süre kalır. Bu sürede depozito ödenmesi, CAS alınması, finansal belgelerin en az 28 gün hesapta beklemesi, Student vizesi başvurusu ve yaklaşık 3 haftalık karar süresi tamamlanmalıdır. Bu nedenle Clearing’i düşünen öğrencinin **parasının temmuzdan itibaren hesapta hazır durması** büyük avantaj sağlar.',
          'Bazı üniversiteler uluslararası öğrencilere Clearing’de daha sınırlı yer ayırır veya ocak başlangıçlı alternatif sunar. Vize için gereken süre yetişmeyecekse ocak girişi veya Foundation programı daha gerçekçi olabilir. Belgelerin bu sıkışık takvimde nasıl düzenleneceği için [CAS nedir?](/bilgi-bankasi/cas-nedir) ve [başvuru takvimi](/bilgi-bankasi/basvuru-takvimi) rehberlerimize bakın.',
        ],
      },
      {
        h: 'UCAS Extra ve Clearing farkı',
        p: [
          'UCAS Extra, beş tercihinden hiç teklif almamış veya hepsini reddetmiş öğrencilere şubat sonundan temmuz başına kadar açık olan ek bir tercih hakkıdır. Extra’da aynı anda tek bir program eklenir; reddedilirseniz yenisini ekleyebilirsiniz. Clearing ise sonuçların netleştiği yaz aylarında, boş kontenjanlar üzerinden işler.',
          'Türk öğrenciler için Extra çoğu zaman Clearing’den daha avantajlıdır, çünkü baharda kabul alan bir öğrencinin CAS ve vize için önünde birkaç ayı vardır. İlk beş tercihinden olumsuz yanıt alan bir öğrenci, Clearing’i beklemek yerine Extra döneminde giriş şartlarına daha uygun bir program arayarak takvim riskini azaltabilir.',
        ],
      },
      {
        h: 'Clearing’e önceden hazırlanmak',
        list: [
          'Kesin ve yedek tercih şartlarını tutturamama ihtimali varsa temmuzda üç dört alternatif program listesi çıkarın.',
          'Kişisel beyanınızın genel bir alana (örneğin işletme veya mühendislik) uyacak şekilde yazıldığından emin olun; Clearing’de genellikle yakın bölümlere yönelirsiniz.',
          'IELTS sonucunuzun geçerli ve programların istediği puanda olduğunu kontrol edin; Clearing’de yeni sınava girecek zaman yoktur. Bkz. [IELTS rehberi](/bilgi-bankasi/ielts).',
          'Sonuç günü sabah İngiltere saatiyle 8.00’de telefon hatları açıldığında hazır olun; Türkiye saatiyle bu 10.00’a denk gelir.',
        ],
      },
      {
        h: 'Clearing’de dikkat edilmesi gerekenler',
        list: [
          'Sadece “boş yer var” diye bölüm seçmeyin; ders içeriğini, şehri ve konaklama imkânını kontrol edin.',
          'Ağustosta üniversite yurtları büyük ölçüde dolmuş olabilir; özel öğrenci rezidanslarına bakın: [öğrenci konaklama](/ogrenci-konaklama).',
          'Telefonla teklif aldığınızda program adını, giriş yılını ve şartları yazılı olarak teyit edin.',
          'Notlarınız yüksek geldiyse kesin tercihten çıkmak geri dönüşü olmayan bir adımdır; yeni teklifi garantilemeden bırakmayın.',
          'Clearing teklifini kabul etmeden önce uluslararası öğrenci harcının tutarını ve depozito son tarihini sorun; bazı üniversiteler Clearing öğrencilerine birkaç gün içinde ödeme yapılmasını şart koşar.',
          'Sürecin tamamını tek başınıza yönetmekte zorlanırsanız [eğitim danışmanlığı](/hizmetler/egitim-danismanligi) kapsamında sonuç günü için önceden alternatif listesi hazırlıyoruz.',
        ],
      },
    ],
    seoTitle: 'Clearing Nedir? UCAS Clearing Takvimi ve Başvuru Rehberi',
    description: 'UCAS Clearing nedir, ne zaman açılır? Kimler başvurabilir, adım adım süreç, Türk öğrenciler için vize takvimi riski ve dikkat edilmesi gerekenler.',
    faqs: [
      { q: 'Clearing ne zaman açılır?', a: 'Clearing genellikle temmuz başında açılır ve ekim ortasına kadar sürer. En yoğun dönem ağustos ortasındaki A-Level sonuç günüdür; 2026’da bu tarih 13 Ağustos’tu.' },
      { q: 'Clearing ile iyi bir üniversiteye girilebilir mi?', a: 'Evet, bazı tanınmış üniversiteler belirli bölümlerde Clearing’e kontenjan açar. Ancak popüler bölümlerde yerler çok hızlı dolar ve her yıl hangi programların açılacağı değişir.' },
      { q: 'Clearing için ek ücret ödenir mi?', a: 'Hayır. UCAS başvurusu için ödenen tek seferlik ücret Clearing’i de kapsar; ayrıca bir ödeme yapılmaz.' },
      { q: 'Clearing’de birden fazla üniversiteye başvurabilir miyim?', a: 'Birden fazla üniversiteyle telefonda veya online formla görüşüp teklif alabilirsiniz. Ancak UCAS Hub’a aynı anda yalnızca bir Clearing tercihi eklenebilir; üniversite bunu reddederse yeni bir tercih ekleyebilirsiniz.' },
      { q: 'Uluslararası öğrenciler Clearing’e başvurabilir mi?', a: 'Başvurabilir; ancak vize için gereken süre dikkate alınmalıdır. CAS, 28 günlük finansal belge kuralı ve vize karar süresi nedeniyle ağustosta yerleşen öğrencilerin eylül başlangıcına yetişmesi zor olabilir.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'personal-statement-nasil-yazilir',
    title: 'Personal statement nasıl yazılır? Yeni UCAS formatı',
    group: 'Başvuru',
    program: 'lisans',
    countries: ['ingiltere'],
    summary: '2026 girişiyle gelen üç sorulu UCAS kişisel beyanı: her soruda ne yazılmalı, karakter sınırı, örnek yapı ve Türk öğrencilerin sık yaptığı hatalar.',
    facts: [
      { label: 'Soru sayısı', value: '3 zorunlu soru' },
      { label: 'Toplam sınır', value: '4.000 karakter (boşluk dahil)' },
      { label: 'Soru başına alt sınır', value: '350 karakter' },
      { label: 'Kaç kez yazılır?', value: 'Tek beyan, 5 tercihin hepsine gider' },
    ],
    sections: [
      {
        h: 'Personal statement ne işe yarar?',
        p: [
          'Personal statement (kişisel beyan), UCAS başvurusunda öğrencinin kendi sesiyle neden bu bölümü okumak istediğini, buna nasıl hazırlandığını ve bölüme neler katacağını anlattığı metindir. Notların birbirine yakın olduğu adaylar arasında karar veren akademisyenler için en önemli niteliksel veridir; özellikle mülakat yapmayan üniversitelerde öğrenciyi tanımanın tek yoludur.',
          'Beyan tektir ve beş tercihin hepsine aynı metin gider. Bu nedenle “X Üniversitesi’nde okumak istiyorum” gibi kurum adı geçen cümleler yazılmaz; metin üniversiteye değil **bölüme** odaklanır. Bölümleri birbirinden çok farklı tercihlerde (örneğin hem psikoloji hem bilgisayar mühendisliği) inandırıcı bir beyan yazmak neredeyse imkânsızdır.',
        ],
      },
      {
        h: 'Yeni format: üç soru',
        p: ['2026 girişinden itibaren UCAS, tek parça serbest metin yerine üç ayrı soruya geçti. Toplam sınır değişmedi: üç cevabın toplamı boşluklar dahil 4.000 karakteri geçemez ve her cevap en az 350 karakter olmalıdır. Karakterleri sorular arasında esnek dağıtabilirsiniz.'],
        table: {
          head: ['Soru', 'Ne bekleniyor?', 'Önerilen pay'],
          rows: [
            ['1. Bu bölümü neden okumak istiyorsunuz?', 'Alana duyulan ilginin kaynağı, merak ettiğiniz konular, uzun vadeli hedef', '%30–35 (yaklaşık 1.200–1.400 karakter)'],
            ['2. Eğitiminiz ve yeterlilikleriniz sizi bu bölüme nasıl hazırladı?', 'Dersler, projeler, ödevler, okul dışı akademik çalışmalar ve bunlardan öğrendikleriniz', '%35–40 (yaklaşık 1.400–1.600 karakter)'],
            ['3. Eğitim dışında hazırlanmak için başka neler yaptınız ve bu deneyimler neden faydalı?', 'Staj, gönüllülük, iş deneyimi, kulüpler, okumalar, sorumluluklar', '%25–30 (yaklaşık 1.000–1.200 karakter)'],
          ],
        },
      },
      {
        h: '1. soru: Neden bu bölüm?',
        p: [
          'Bu bölümde amaç, ilginizin yüzeysel değil derin olduğunu göstermektir. “Küçüklüğümden beri doktor olmak istiyorum” gibi genel cümleler yerine, ilginizi tetikleyen somut bir an, okuduğunuz bir kitap, bir makale veya bir problem üzerinden başlayın ve bu ilginin sizi alanın hangi alt konularına yönlendirdiğini anlatın.',
          'Örnek yapı: Ekonomi okumak isteyen bir öğrenci, Türkiye’deki enflasyon dönemlerinde fiyatların nasıl değiştiğini gözlemleyerek merak ettiği bir soruyla başlar; ardından bu soruyu araştırırken okuduğu bir kitaptan ve öğrendiği bir kavramdan bahseder; son olarak üniversitede hangi konuları (örneğin para politikası, davranışsal ekonomi) daha derinlemesine öğrenmek istediğini belirtir.',
        ],
      },
      {
        h: '2. soru: Eğitiminiz sizi nasıl hazırladı?',
        p: [
          'Burada ders listesi saymak yerine seçtiğiniz derslerin size kazandırdığı becerileri anlatın. IB öğrencileri Extended Essay ve Internal Assessment konularını, A-Level öğrencileri EPQ (Extended Project) çalışmasını, Türkiye müfredatıyla okuyanlar ise proje ödevlerini, olimpiyat hazırlıklarını veya TÜBİTAK projelerini kullanabilir.',
          'Her örnek için “ne yaptım → ne öğrendim → bu bölümde neden işime yarayacak” zincirini kurun. Örneğin bir fizik deneyinde ölçüm hatalarını nasıl analiz ettiğiniz, mühendislik başvurusu için bir bilgi listesinden çok daha etkilidir. Türkiye’deki okul sistemini bilmeyen bir okuyucu için gerekiyorsa kısa bir açıklama ekleyin (örneğin “fen lisesi”nin ne anlama geldiği).',
        ],
      },
      {
        h: '3. soru: Eğitim dışında neler yaptınız?',
        p: ['Bu soru, sınıf dışında alana nasıl yaklaştığınızı ve kişisel özelliklerinizi göstermenize alan açar. Önemli olan etkinliğin büyüklüğü değil, ondan ne çıkardığınızdır. Bir yaz boyunca aile işletmesinde çalışmak, doğru anlatılırsa prestijli ama yüzeysel bir yaz okulundan daha güçlü bir örnek olabilir.'],
        list: [
          '**Staj ve iş deneyimi:** Hastane gönüllülüğü (tıp), hukuk bürosu (hukuk), yazılım projesi (bilgisayar bilimi).',
          '**Okumalar ve çevrim içi dersler:** Alanla ilgili popüler bilim kitapları, açık dersler, podcast’ler; ama yalnızca isim saymak yerine bir fikri tartışarak.',
          '**Sorumluluklar:** Kulüp başkanlığı, kardeş bakımı, yarı zamanlı iş; zaman yönetimi ve olgunluk gösterir.',
          '**Yarışmalar ve projeler:** Model Birleşmiş Milletler, münazara, robotik, bilim olimpiyatları.',
        ],
      },
      {
        h: 'Yazım süreci: önerilen takvim',
        list: [
          '**Haziran – temmuz:** Her soru için madde madde fikir listesi çıkarın; her maddeye bir örnek ve bir çıkarım ekleyin.',
          '**Ağustos:** İlk taslağı karakter sınırını düşünmeden yazın.',
          '**Eylül:** Metni sınırın içine indirin, tekrar eden fikirleri ayıklayın; bir öğretmen veya danışmandan geri bildirim alın.',
          '**Ekim:** Son okuma, dil kontrolü ve UCAS Hub’a aktarma. Oxford, Cambridge veya tıp başvurularında bu aşamanın 15 Ekim’den önce bitmesi gerekir.',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'Metni tamamen yapay zekâ araçlarına yazdırmak: UCAS benzerlik tespiti yapar ve beyanın öğrencinin kendi çalışması olmasını bekler; araçlar yalnızca fikir ve dil kontrolü için yardımcı olabilir.',
          'İnternetten bulunan örnek beyanlardan cümle almak; UCAS’ın benzerlik kontrol sistemi bu durumu üniversitelere bildirir.',
          'Üç cevapta aynı örneği tekrar etmek; akademisyenler üç cevabı bir bütün olarak okur.',
          'Türkçeden birebir çevrilmiş, uzun ve süslü cümleler kurmak; sade, net ve aktif cümleler tercih edin.',
          'Notları veya başarıları sadece listelemek; her bilginin ardından “bu bana ne kattı” sorusunu cevaplayın.',
        ],
        p: ['Yüksek lisans başvurularında istenen niyet mektubu (statement of purpose) farklı bir metindir; bunun için [motivasyon mektubu nasıl yazılır?](/bilgi-bankasi/motivasyon-mektubu-nasil-yazilir) rehberimize ve [örnek niyet mektubu](/kaynaklar/ornek-niyet-mektubu) sayfamıza bakabilirsiniz. Lisans başvurusunun tüm adımları için [UCAS nedir?](/bilgi-bankasi/ucas-nedir) rehberimiz, kişisel destek için [eğitim danışmanlığı](/hizmetler/egitim-danismanligi) sayfamız size yardımcı olur.'],
      },
    ],
    seoTitle: 'Personal Statement Nasıl Yazılır? UCAS 3 Soru Formatı',
    description: 'UCAS personal statement nasıl yazılır? 2026’dan itibaren 3 soru, 4.000 karakter sınırı, soru başına içerik önerisi, yazım takvimi ve sık yapılan hatalar.',
    faqs: [
      { q: 'Personal statement kaç kelime olmalı?', a: 'UCAS kelime değil karakter sınırı kullanır: üç cevabın toplamı boşluklar dahil en fazla 4.000 karakterdir. Bu yaklaşık 550–650 İngilizce kelimeye karşılık gelir; her cevap en az 350 karakter olmalıdır.' },
      { q: 'Personal statement’ta üniversite adı yazılır mı?', a: 'Yazılmaması önerilir. Aynı beyan beş tercihin hepsine gittiği için belirli bir üniversitenin adı diğer tercihlerde olumsuz bir izlenim bırakır. Metin bölüme ve alana odaklanmalıdır.' },
      { q: 'Personal statement’ı yapay zekâyla yazabilir miyim?', a: 'UCAS, beyanın öğrencinin kendi çalışması olmasını bekler ve metinleri benzerlik açısından tarar. Yapay zekâ araçları fikir toplamak veya dil hatalarını görmek için kullanılabilir, ancak metnin tamamını bir araca yazdırmak risklidir ve beyanı kişisellikten uzaklaştırır.' },
      { q: 'Farklı bölümlere başvuruyorsam ne yapmalıyım?', a: 'Tercihleriniz birbirine yakınsa (örneğin ekonomi ve işletme) ortak noktayı öne çıkaran bir beyan yazabilirsiniz. Çok farklı alanlara başvuruyorsanız tercih listenizi daraltmanız genellikle daha iyi sonuç verir.' },
      { q: 'Eski formatla yazılmış örnekler hâlâ işe yarar mı?', a: 'İçerik fikirleri açısından faydalı olabilir, ancak 2026 girişinden itibaren beyan üç ayrı soruya bölündüğü için yapı farklıdır. Her cevabın kendi sorusuna doğrudan yanıt verdiğinden emin olun.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'sandwich-year-nedir',
    title: 'Sandwich year nedir? İngiltere’de staj yıllı lisans',
    group: 'Üniversite',
    program: 'lisans',
    countries: ['ingiltere'],
    summary: 'Sandwich year (placement year) nedir, nasıl bulunur, ücretli mi, Student vizesi ve harç açısından ne anlama gelir?',
    facts: [
      { label: 'Toplam süre', value: 'Genellikle 3 yıl yerine 4 yıl' },
      { label: 'Staj yılı', value: 'Çoğunlukla 2. ve son yıl arasında, 9–12 ay' },
      { label: 'Vize şartı', value: 'Staj, lisans programının en fazla %50’si' },
      { label: 'Ücret', value: 'Stajların çoğu maaşlıdır' },
    ],
    sections: [
      {
        h: 'Sandwich year ne demek?',
        p: [
          'Sandwich year, İngiltere’deki lisans programlarında ikinci yıl ile son yıl arasına yerleştirilen, genellikle 9–12 ay süren tam zamanlı iş yeri stajıdır. Akademik yılların arasına “sıkıştırıldığı” için sandwich adını alır. Programın adında genellikle “with Placement Year”, “with Industrial Placement” veya “with Professional Experience” ifadesi yer alır ve lisans 3 yerine 4 yıl sürer.',
          'Staj yılı programın resmî ve kredili bir parçasıdır: öğrenci bu yıl boyunca üniversiteye kayıtlı kalır, bir akademik danışman tarafından takip edilir ve yıl sonunda bir rapor veya proje teslim eder. Başarıyla tamamlandığında diploma ve transkriptte staj yılı ayrıca belirtilir.',
        ],
      },
      {
        h: 'Hangi bölümlerde yaygın?',
        list: [
          '**İşletme ve yönetim:** Pazarlama, finans, insan kaynakları stajları; birçok büyük şirketin yerleşik “placement” programı vardır.',
          '**Mühendislik:** Makine, inşaat, elektrik-elektronik ve kimya mühendisliğinde endüstriyel staj çok yaygındır.',
          '**Bilgisayar bilimi:** Yazılım geliştirme, veri analizi ve siber güvenlik stajları.',
          '**Psikoloji, eczacılık, biyobilimler:** Araştırma laboratuvarları ve klinik ortamlar.',
          '**Moda ve tasarım:** Tasarım stüdyoları ve markalar.',
        ],
        p: ['Bath, Loughborough, Surrey, Aston ve Brunel gibi üniversiteler staj yılı geleneğiyle bilinir; ancak birçok Russell Group üniversitesi de aynı bölüm için hem 3 yıllık hem staj yıllı 4 yıllık seçenek sunar.'],
      },
      {
        h: 'Staj yılı, yurt dışı yıl ve entegre yüksek lisans farkı',
        table: {
          head: ['Program türü', 'Süre', 'Fark'],
          rows: [
            ['Standart lisans (BA/BSc)', '3 yıl', 'Staj zorunlu değil, yazları kısa staj yapılabilir'],
            ['Sandwich / placement year', '4 yıl', '1 yıl tam zamanlı iş yeri deneyimi'],
            ['Year abroad (yurt dışında bir yıl)', '4 yıl', 'Bir yılı partner üniversitede okuyarak geçirmek'],
            ['Entegre yüksek lisans (MEng, MSci)', '4 yıl', 'Son yıl yüksek lisans seviyesinde, staj yıllı versiyonu 5 yıl olabilir'],
          ],
        },
      },
      {
        h: 'Staj nasıl bulunur?',
        p: [
          'Staj yılını garanti eden programlar azdır; çoğu durumda öğrenci üniversitenin kariyer merkezinin desteğiyle kendisi başvurur. Süreç genellikle ikinci yılın başında, ekim – kasım aylarında başlar. Büyük şirketlerin başvuruları sonbaharda açılır ve online testler, video mülakat ve değerlendirme günü (assessment centre) gibi aşamalardan oluşur.',
          'Türk öğrenciler için önemli bir avantaj, Student vizesinin programın parçası olan staj yılını kapsamasıdır; işverenin ayrıca vize sponsorluğu yapması gerekmez. Bu, uluslararası öğrencilerin yarı zamanlı iş başvurularında karşılaştıkları çekinceyi büyük ölçüde ortadan kaldırır. Yine de bazı savunma ve kamu kurumları güvenlik nedeniyle yalnızca İngiltere vatandaşlarını kabul edebilir.',
        ],
        list: [
          'Birinci yıldan itibaren İngilizce CV ve LinkedIn profili hazırlayın: [örnek CV](/kaynaklar/ornek-cv).',
          'Üniversitenin kariyer fuarlarına ve işveren tanıtımlarına katılın.',
          'Bir sektöre 20–40 başvuru yapmanın olağan olduğunu bilin; ilk retler süreci olumsuz etkilemez.',
          'Staj bulunamazsa çoğu üniversite öğrenciyi 3 yıllık programa geri aktarır; bu seçeneği başvurudan önce kontrol edin.',
          'Mülakatlarda “neden bu sektör, neden bu şirket” sorularına hazırlanın; değerlendirme günlerinde grup çalışması ve sunum yapılması yaygındır.',
          'Staj sözleşmesini imzalamadan önce kariyer merkezine onaylatın; staj yerinin üniversite tarafından uygun bulunması kredi için şarttır.',
        ],
      },
      {
        h: 'Vize ve çalışma kuralları',
        p: [
          'Student vizesi kurallarına göre lisans seviyesindeki programlarda iş yeri stajı programın toplam süresinin **%50’sini** geçemez; lisans altı seviyede bu oran üçte birdir. Staj, programın zorunlu ya da seçmeli ama kredili ve değerlendirilen bir parçası olmalıdır. Bu koşullar sağlandığında staj süresince haftalık 20 saat çalışma sınırı staj için uygulanmaz.',
          'Staj yıllı bir programa kabul alındığında CAS’ta 4 yıllık süre yazar ve vize de buna göre verilir. Bu nedenle sağlık katkı payı (IHS) 4 yıl üzerinden hesaplanır. Ayrıntılı hesaplama için [IHS rehberimize](/bilgi-bankasi/ihs-saglik-katki-payi) bakabilirsiniz. Programı 3 yıllığa çevirmek veya staj yılını erken bitirmek gibi değişiklikler üniversite tarafından Home Office’e bildirilir ve vize süresi kısaltılabilir.',
        ],
      },
      {
        h: 'Maliyet ve kazanç',
        p: [
          'Staj yılında üniversiteler harcın yalnızca bir kısmını alır; uluslararası öğrenciler için bu indirimli tutar kuruma göre değişir ve tam yıllık harcın küçük bir bölümüdür. Staj yerlerinin çoğu maaşlıdır; maaş sektöre ve şehre göre değişir ve en az ulusal asgari ücret düzeyinde olmalıdır. Pek çok öğrenci bu dönemde kira ve yaşam giderlerinin önemli bir kısmını kendi maaşıyla karşılar.',
          'Konaklama da planlanmalıdır: staj yeri üniversite şehrinden farklı bir şehirde olabilir ve öğrenci yurdu sözleşmeleri genellikle akademik yıla göre yapıldığı için staj yılında yeni bir kira dönemi başlar. Londra’daki bir staj için kira bütçesi kuzey şehirlerine göre belirgin şekilde yüksektir.',
          'Uzun vadeli kazanç ise daha önemlidir: staj yılını tamamlayan birçok öğrenci aynı şirketten mezuniyet sonrası iş teklifi alır. Mezuniyetten sonra [Graduate Route](/bilgi-bankasi/graduate-route-nedir) ile İngiltere’de çalışmaya devam etmek isteyen bir öğrenci için staj yılı, CV’deki en güçlü kalemdir.',
        ],
      },
    ],
    seoTitle: 'Sandwich Year Nedir? İngiltere’de Staj Yıllı Lisans Rehberi',
    description: 'Sandwich year nedir? İngiltere’de placement year’lı lisans, staj bulma süreci, Student vizesi %50 kuralı, harç indirimi ve maaşlı staj avantajları.',
    faqs: [
      { q: 'Sandwich year zorunlu mu?', a: 'Çoğu programda isteğe bağlıdır. Öğrenci 4 yıllık staj yıllı versiyona başvurur, ancak staj bulamazsa genellikle 3 yıllık programa aktarılabilir. Bazı mühendislik ve eczacılık programlarında ise staj programın zorunlu bir parçasıdır.' },
      { q: 'Staj yılında maaş alınır mı?', a: 'Stajların büyük çoğunluğu maaşlıdır ve İngiltere’deki asgari ücret kuralları geçerlidir. Maaş sektöre, şirkete ve şehre göre önemli ölçüde değişir.' },
      { q: 'Uluslararası öğrenciler staj yılına katılabilir mi?', a: 'Evet. Staj programın kredili bir parçası olduğu sürece Student vizesi kapsamındadır ve işverenin ayrıca vize sponsoru olması gerekmez. Staj, lisans seviyesinde programın toplam süresinin yarısını geçmemelidir.' },
      { q: 'Staj yılında harç ödenir mi?', a: 'Evet, ancak tam harç ödenmez. Üniversiteler staj yılı için indirimli bir ücret alır; uluslararası öğrenciler için tutar kurumdan kuruma değişir ve kabul aşamasında ücret tablosundan kontrol edilmelidir.' },
      { q: 'Staj yılı Türkiye’de yapılabilir mi?', a: 'Bazı üniversiteler İngiltere dışında staja izin verir; bu durumda staj süresince İngiltere’de bulunmadığınız için vize ve konaklama planınız da değişir. Üniversitenin onayı ve staj yerinin akademik açıdan uygunluğu şarttır.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'graduate-route-nedir',
    title: 'Graduate Route nedir? İngiltere mezuniyet sonrası çalışma vizesi',
    group: 'Work and Study',
    countries: ['ingiltere'],
    summary: 'Graduate Route ile İngiltere’de mezuniyet sonrası 18 ay çalışma: şartlar, 2027 değişikliği, ücretler ve Skilled Worker vizesine geçiş.',
    facts: [
      { label: 'Süre (1 Ocak 2027’den itibaren)', value: '18 ay (doktora: 3 yıl)' },
      { label: '31 Aralık 2026’ya kadarki başvurular', value: '2 yıl' },
      { label: 'Başvuru ücreti', value: '£937' },
      { label: 'Sağlık katkı payı', value: 'Yıllık £1.035' },
      { label: 'İşveren sponsoru', value: 'Gerekmez' },
    ],
    sections: [
      {
        h: 'Graduate Route ne demek?',
        p: [
          'Graduate Route (Graduate visa), İngiltere’de lisans veya yüksek lisans programını Student vizesiyle başarıyla tamamlayan öğrencilerin, iş teklifi olmadan ülkede kalıp çalışmasına izin veren mezuniyet sonrası vizedir. Bir işverenin sponsorluğu gerekmez, asgari maaş şartı yoktur ve meslek kısıtlaması bulunmaz: tam zamanlı, yarı zamanlı veya serbest çalışılabilir, iş değiştirilebilir, iş aranabilir.',
          'Vize süresi başvuru tarihine göre değişir. 31 Aralık 2026’ya kadar yapılan başvurulara 2 yıl, **1 Ocak 2027 ve sonrasında** yapılan başvurulara 18 ay verilir. Doktora (PhD) ve diğer doktora düzeyi programların mezunları için süre 3 yıl olarak kalır. Eylül 2026’da başlayan 12 aylık bir yüksek lisans programını tamamlayan öğrenci, başvurusunu 2027’de yapacağı için 18 aylık vizeye tabi olur.',
        ],
      },
      {
        h: 'Kimler başvurabilir?',
        list: [
          'Başvuru sırasında İngiltere’de bulunan ve geçerli Student (veya eski adıyla Tier 4) vizesi olan öğrenciler',
          'İngiltere’deki lisans, yüksek lisans, doktora veya belirli diğer uygun programları Student vizesiyle gereken asgari süre boyunca okuyarak tamamlayanlar',
          'Üniversitesinin, programı başarıyla tamamladığını Home Office’e bildirdiği öğrenciler',
          'Daha önce Graduate Route veya doktora sonrası benzer bir vize almamış olanlar',
        ],
        p: ['Foundation, dil kursu veya tek başına sertifika programları Graduate Route hakkı vermez. Ancak Foundation sonrası İngiltere’de lisansı tamamlayan öğrenci, lisans mezuniyeti üzerinden başvurabilir.'],
      },
      {
        h: 'Zamanlama: ne zaman başvurulur?',
        p: [
          'Başvuru, üniversite sonuçları Home Office’e bildirdikten sonra ve Student vizesinin süresi dolmadan yapılmalıdır. Mezuniyet töreni veya diploma beklenmez. Student vizesi programın bitiminden sonra (12 ay ve üzeri programlarda) 4 ay daha geçerli olduğu için bu dönem genellikle yeterlidir.',
          'Başvuru İngiltere içinden online yapılır; çoğu öğrenci kimliğini UK Immigration: ID Check uygulamasıyla doğrular. Başvuru sürecindeyken eski vizenin şartlarıyla çalışmaya devam edilebilir. Karar genellikle 8 hafta içinde gelir.',
        ],
      },
      {
        h: 'Maliyet tablosu',
        table: {
          head: ['Kalem', '18 aylık vize', '2 yıllık vize', '3 yıllık vize (doktora)'],
          rows: [
            ['Başvuru ücreti', '£937', '£937', '£937'],
            ['Sağlık katkı payı (IHS)', '£1.552,50', '£2.070', '£3.105'],
            ['Toplam', '£2.489,50', '£3.007', '£4.042'],
          ],
        },
        p: ['Tutarlar 8 Nisan 2026’dan beri geçerli başvuru ücreti ve yıllık £1.035 IHS üzerinden hesaplanmıştır; ücretler genellikle her nisan güncellenir. Graduate Route için finansal yeterlilik belgesi istenmez.'],
      },
      {
        h: 'Graduate Route sonrası seçenekler',
        p: [
          'Graduate Route uzatılamaz. Süre bitmeden İngiltere’de kalmaya devam etmek isteyen mezunlar için en yaygın yol, lisanslı bir işveren tarafından sponsor edilen **Skilled Worker** vizesine geçiştir. Bu vizede mesleğin uygun meslekler listesinde olması ve belirli bir maaş eşiğinin karşılanması gerekir; yeni mezunlar için (new entrant) indirimli eşikler uygulanır. Eşikler sık değiştiği için geçiş döneminde gov.uk’tan güncel tutar kontrol edilmelidir.',
          '18 aylık sürenin kısalması, iş aramaya mezuniyetten önce başlamayı daha da önemli hâle getirir. Son yılın sonbaharında açılan mezun programlarına (graduate scheme) başvurmak, staj yıllı bir program seçmek ([sandwich year nedir?](/bilgi-bankasi/sandwich-year-nedir)) ve üniversitenin kariyer merkezini erken kullanmak bu süreyi verimli değerlendirmenin yollarıdır.',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'Student vizesinin bitiş tarihini kaçırmak: vize süresi dolduktan sonra Graduate Route’a geçilemez.',
          'Programı tamamlamadan, örneğin tez teslim edilmeden başvurmak; üniversite bildirimi yapılmadan başvuru reddedilir.',
          'Başvuru sonuçlanmadan İngiltere dışına seyahat etmek; bu, başvurunun geri çekilmiş sayılmasına yol açabilir.',
          'Aile üyelerinin durumunu planlamamak: yalnızca halihazırda öğrencinin bakmakla yükümlü olduğu kişi olarak İngiltere’de bulunan aile üyeleri Graduate Route’a bağlı olarak kalabilir.',
        ],
      },
      {
        h: 'Graduate Route döneminde pratik işler',
        list: [
          '**eVisa ve share code:** İngiltere fiziksel BRP kartları yerine dijital eVisa sistemine geçti. İşverenler çalışma hakkınızı UKVI hesabınızdan oluşturacağınız “share code” ile kontrol eder; işe başlamadan önce bu kodu hazır tutun.',
          '**National Insurance numarası:** Öğrencilikte almadıysanız ilk işinizden önce başvurun; vergi ve sosyal güvenlik kayıtlarınız bu numarayla tutulur.',
          '**Council tax:** Tam zamanlı öğrenciler council tax’ten muaftır; mezun olup Graduate Route’a geçtiğinizde bu muafiyet sona erer ve kira bütçenize eklenmelidir.',
          '**Kira ve konaklama:** Öğrenci rezidanslarının çoğu mezunları kabul etmez; mezuniyet yazına doğru yeni bir kira sözleşmesi ve depozito planlayın.',
          '**Seyahat:** Graduate Route sahibi olarak İngiltere’ye girip çıkabilirsiniz; ancak Schengen ülkelerine gidişlerde Türk vatandaşları için ayrıca Schengen vizesi gerekir.',
        ],
      },
      {
        h: 'Planlamanın başlangıcı: program seçimi',
        p: ['Graduate Route hakkı, programın seçildiği andan itibaren düşünülmelidir: programın Student vizesiyle İngiltere’de okunması, uzaktan eğitim ağırlıklı olmaması ve sürenin tamamlanması gerekir. Yüksek lisans seçenekleri için [İngiltere’de yüksek lisans](/yurtdisi-yuksek-lisans/ingiltere), lisans için [İngiltere lisans programları](/lisans-programlari/ingiltere) sayfalarımıza, ülkedeki genel çalışma kuralları için [İngiltere ülke sayfamıza](/ulkeler/ingiltere) bakabilirsiniz.'],
      },
    ],
    seoTitle: 'Graduate Route Nedir? İngiltere 18 Aylık Çalışma Vizesi',
    description: 'Graduate Route nedir? 1 Ocak 2027’den itibaren 18 ay, doktora mezunlarına 3 yıl; başvuru şartları, £937 ücret, IHS ve Skilled Worker’a geçiş.',
    faqs: [
      { q: 'Graduate Route kaç yıl?', a: '1 Ocak 2027 ve sonrasında yapılan başvurularda Graduate Route 18 ay, doktora mezunları için 3 yıldır. 31 Aralık 2026’ya kadar yapılan başvurulara ise 2 yıl verilir.' },
      { q: 'Graduate Route için iş teklifi gerekir mi?', a: 'Hayır. Graduate Route işveren sponsorluğu, iş teklifi veya asgari maaş şartı gerektirmez. Bu süre içinde iş arayabilir, iş değiştirebilir veya serbest çalışabilirsiniz.' },
      { q: 'Graduate Route’a Türkiye’den başvurulabilir mi?', a: 'Hayır. Başvuru İngiltere içinden, Student vizesi henüz geçerliyken yapılmalıdır. Mezuniyet sonrası Türkiye’ye dönen bir öğrenci Graduate Route hakkını kullanamaz.' },
      { q: 'Graduate Route için ne kadar ödenir?', a: 'Başvuru ücreti 8 Nisan 2026’dan beri £937’dir. Buna ek olarak yıllık £1.035 sağlık katkı payı (IHS) ödenir; 18 aylık bir vize için IHS yaklaşık £1.552,50, toplam maliyet yaklaşık £2.489,50’dir.' },
      { q: 'Graduate Route uzatılabilir mi?', a: 'Uzatılamaz. Süre bitmeden İngiltere’de kalmak isteyenler genellikle işveren sponsorluğuyla Skilled Worker vizesine geçer veya başka bir uygun vize kategorisine başvurur.' },
      { q: 'Foundation veya dil kursu sonrası Graduate Route alınır mı?', a: 'Hayır. Graduate Route lisans, yüksek lisans, doktora ve belirli uygun programların başarıyla tamamlanmasına bağlıdır. Foundation sonrası İngiltere’de lisansı bitiren öğrenci ise lisans mezuniyeti üzerinden başvurabilir.' },
    ],
    updated: '2026-10-24',
  },
  /* ================= AMERİKA ================= */
  {
    slug: 'i-20-nedir',
    title: 'I-20 nedir? Amerika F-1 öğrenci belgesi rehberi',
    group: 'Vize & Belgeler',
    countries: ['amerika'],
    summary: 'Form I-20 nedir, okul ne zaman düzenler, üzerinde hangi bilgiler yazar ve F-1 vizesi, giriş ve okul değişikliğinde nasıl kullanılır?',
    facts: [
      { label: 'Düzenleyen', value: 'Okulun DSO’su (Designated School Official)' },
      { label: 'Vize en erken', value: 'Program başlangıcından 365 gün önce verilebilir' },
      { label: 'Amerika’ya giriş', value: 'Başlangıçtan en fazla 30 gün önce' },
      { label: 'Seyahat imzası', value: 'Genellikle 12 ay geçerli' },
    ],
    sections: [
      {
        h: 'I-20 ne demek?',
        p: [
          'Form I-20, “Certificate of Eligibility for Nonimmigrant Student Status” adlı belgedir. Amerika’da SEVP (Student and Exchange Visitor Program) sertifikalı bir okula kabul edilen ve F-1 (akademik ve dil eğitimi) veya M-1 (mesleki eğitim) statüsüyle okuyacak öğrenciye okul tarafından düzenlenir. Belge, öğrencinin SEVIS adlı federal veri tabanına kaydedildiğini ve okulun onu öğrenci olarak kabul ettiğini gösterir.',
          'I-20 olmadan F-1 vizesine başvurulamaz, SEVIS ücreti ödenemez ve Amerika’ya öğrenci olarak giriş yapılamaz. Belge yalnızca vize aşamasında değil, eğitim boyunca statünüzü gösteren temel belgedir; OPT, CPT, okul değişikliği ve seyahat gibi her işlem I-20 üzerinden yürür.',
        ],
      },
      {
        h: 'I-20 nasıl alınır?',
        list: [
          '**Kabul:** Üniversite, college, community college veya dil okulundan kabul alın. Okulun SEVP sertifikalı olması şarttır.',
          '**Finansal belgeler:** Okul, I-20’de yazacak ilk yıl toplam maliyetini (harç, yaşam gideri, sağlık sigortası ve diğer giderler) karşılayabildiğinizi gösteren banka yazısı ve sponsor belgesi ister.',
          '**Pasaport ve form:** Pasaport kopyası ve okulun kendi I-20 talep formu doldurulur; bazı okullar depozito ister.',
          '**Düzenleme:** DSO, öğrenciyi SEVIS’e kaydeder ve I-20’yi genellikle PDF olarak e-postayla gönderir. Belge elektronik imzalı olabilir; çıktısını alıp öğrencinin de imzalaması gerekir.',
        ],
        p: ['Dil okulları da SEVP sertifikalıysa I-20 düzenleyebilir. Ancak F-1 statüsüyle dil eğitimi için programın tam zamanlı olması, yani haftada en az 18 saat ders içermesi gerekir; daha az saatli kurslar I-20 kapsamına girmez. Kısa süreli ve haftada 18 saatin altındaki kurslar ise genellikle ziyaretçi vizesiyle yapılabilir.', 'Finansal belgelerde tutarın I-20’de yazan ilk yıl maliyetini karşılaması gerekir. Ebeveyn sponsorluğunda banka yazısı ve sponsor mektubu için [örnek banka mektubu](/kaynaklar/ornek-banka-mektubu) ve [örnek sponsor mektubu](/kaynaklar/ornek-sponsor-mektubu) sayfalarımıza bakabilirsiniz.'],
      },
      {
        h: 'I-20’de hangi bilgiler yer alır?',
        table: {
          head: ['Bölüm', 'Ne yazar?', 'Neden önemli?'],
          rows: [
            ['SEVIS ID', '“N” harfiyle başlayan 11 karakterli numara', 'SEVIS ücreti ve vize formunda kullanılır'],
            ['Okul bilgileri', 'Okul adı, adresi ve okul kodu', 'Okulun SEVP sertifikasını gösterir'],
            ['Program bilgileri', 'Seviye, bölüm, başlangıç ve tahmini bitiş tarihi', 'Giriş tarihi ve statü süresi buna göre belirlenir'],
            ['Tahmini masraflar', 'İlk yıl harç, yaşam ve diğer giderler', 'Vize mülakatında finansal yeterliliğin temeli'],
            ['Finansman', 'Kişisel, aile, burs veya okul desteği', 'Banka belgelerinizle uyuşmalıdır'],
            ['Seyahat imzası (2. sayfa)', 'DSO imzası ve tarihi', 'Yurt dışından dönüşte geçerli olmalıdır'],
          ],
        },
      },
      {
        h: 'I-20 ile F-1 vizesine giden yol',
        list: [
          'I-20’deki bilgilerin pasaportunuzla aynı olduğunu kontrol edin ve belgeyi imzalayın.',
          'SEVIS I-901 ücretini ödeyin: F-1 için 350 USD. Bkz. [SEVIS ücreti nedir?](/bilgi-bankasi/sevis-ucreti-nedir).',
          'DS-160 vize formunu doldurun, vize başvuru ücretini ödeyin ve randevu alın.',
          'Mülakata I-20, SEVIS ödeme makbuzu, finansal belgeler ve akademik belgelerle gidin. Bkz. [F-1 vize mülakatı](/bilgi-bankasi/f1-vize-mulakati).',
          'Vize çıktıktan sonra, program başlangıcından en fazla 30 gün önce Amerika’ya giriş yapın ve okula vardığınızda uluslararası öğrenci ofisine kayıt olun.',
        ],
      },
      {
        h: 'Eğitim süresince I-20',
        p: [
          'Amerika’da okurken I-20 yaşayan bir belgedir. Bölüm değiştirmek, program süresini uzatmak, okul değiştirmek (transfer), CPT veya OPT başvurusu yapmak gibi her durumda DSO yeni veya güncellenmiş bir I-20 düzenler. Program bitiş tarihi yaklaşıyor ve süre yetmeyecekse, tarih dolmadan uzatma talep edilmelidir.',
          'Yurt dışına çıkıp tekrar giriş yapacaksanız I-20’nin ikinci sayfasındaki seyahat imzası güncel olmalıdır. Bu imza genellikle 12 ay, OPT dönemindeyken 6 ay geçerli kabul edilir. Okul değişikliğinde yeni okul yeni bir I-20 düzenler, ancak SEVIS ID aynı kalır ve SEVIS ücreti yeniden ödenmez.',
          'Okula vardıktan sonra ilk iş, uluslararası öğrenci ofisine giderek kaydınızı yaptırmaktır. DSO, SEVIS kaydınızı “aktif” duruma getirir; bu işlem program başlangıç tarihinden sonraki belirli bir süre içinde yapılmazsa kayıt sorunlu hâle gelebilir.',
          'Statü süresiyle ilgili önemli bir not: Amerikan İç Güvenlik Bakanlığı (DHS), F-1 öğrencilerinin “duration of status” sistemini sabit süreli girişle değiştiren bir kuralı Temmuz 2026’da yayımladı; ancak bu kural 14 Eylül 2026’da bir federal mahkeme kararıyla geçici olarak durduruldu. Mevcut durumda öğrenciler I-20’deki program süresi boyunca statü korumaya devam ediyor; dava sürdüğü için gelişmeleri okulunuzun uluslararası öğrenci ofisinden takip edin.',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'İsim yazımının pasaporttan farklı olması (Türkçe karakterlerin farklı yazılması gibi); vize ve giriş aşamasında sorun çıkarır.',
          'Finansal belgelerdeki tutarın I-20’deki tahmini masraftan düşük olması.',
          'Birden fazla okuldan I-20 alıp vize mülakatında hangi okula gideceğine karar verememek; mülakata gideceğiniz okulun I-20’siyle gidin.',
          'Program başlangıcından 30 günden daha erken giriş yapmaya çalışmak.',
          'Seyahat imzası süresi dolmuş I-20 ile yurt dışından dönmek.',
        ],
        p: ['Amerika’da üniversite ve yüksek lisans seçenekleri için [Amerika lisans programları](/lisans-programlari/amerika) ve [Amerika’da yüksek lisans](/yurtdisi-yuksek-lisans/amerika) sayfalarımıza, vize dosyası desteği için [vize danışmanlığı](/hizmetler/vize-danismanligi) sayfamıza bakabilirsiniz.'],
      },
    ],
    seoTitle: 'I-20 Nedir? Amerika Öğrenci Vizesi I-20 Belgesi Rehberi',
    description: 'I-20 nedir, nasıl alınır? İçindeki bilgiler, SEVIS ID, finansal belgeler, F-1 vize adımları, 30 gün giriş kuralı, seyahat imzası ve sık yapılan hatalar.',
    faqs: [
      { q: 'I-20 ne kadar sürede gelir?', a: 'Kabul ve finansal belgeler tamamlandıktan sonra çoğu okul I-20’yi birkaç gün ile birkaç hafta içinde e-postayla gönderir. Başvuru yoğunluğu olan bahar aylarında süre uzayabilir.' },
      { q: 'I-20 ile vize aynı şey mi?', a: 'Hayır. I-20 okulun düzenlediği uygunluk belgesidir; F-1 vizesi ise Amerikan konsolosluğunun pasaportunuza bastığı giriş izni etiketidir. Vize süresi dolsa bile I-20 geçerli ve statünüz korunuyorsa Amerika’da okumaya devam edebilirsiniz.' },
      { q: 'Birden fazla okuldan I-20 alabilir miyim?', a: 'Evet, birden fazla okuldan kabul alıp her birinden I-20 alabilirsiniz. Ancak SEVIS ücretini ve vize mülakatını gerçekten gideceğiniz okulun I-20’si ile yapmanız gerekir.' },
      { q: 'I-20 kaybolursa ne yapmalıyım?', a: 'Okulunuzun uluslararası öğrenci ofisine başvurarak yeni bir kopya isteyebilirsiniz. Elektronik olarak gönderilen I-20’lerde yeniden çıktı almak yeterlidir; ancak seyahat imzasının güncel olduğundan emin olun.' },
      { q: 'I-20’deki tahmini masraf neden yüksek görünüyor?', a: 'Okul, harca ek olarak yaşam gideri, sağlık sigortası, kitap ve kişisel giderleri de ekler. Vize için göstermeniz gereken asgari tutar bu toplamdır; gerçek harcamanız şehre ve yaşam tarzına göre değişir.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'sevis-ucreti-nedir',
    title: 'SEVIS ücreti nedir? I-901 ödemesi nasıl yapılır?',
    group: 'Vize & Belgeler',
    countries: ['amerika'],
    summary: 'SEVIS I-901 ücreti nedir, F-1 ve J-1 için ne kadar, ne zaman ve nasıl ödenir, vize reddinde ne olur?',
    facts: [
      { label: 'F-1 ve M-1', value: '350 USD' },
      { label: 'J-1 (çoğu kategori)', value: '220 USD' },
      { label: 'J-1 au pair, kamp danışmanı, yaz iş programı', value: '35 USD' },
      { label: 'Reddedilen başvuru', value: '12 ay içinde yeniden kullanılabilir' },
    ],
    sections: [
      {
        h: 'SEVIS ücreti ne demek?',
        p: [
          'SEVIS (Student and Exchange Visitor Information System), Amerika’daki F, M ve J statüsündeki öğrenci ve değişim katılımcılarının kayıtlarının tutulduğu federal veri tabanıdır. I-901 SEVIS ücreti, bu sistemin ve onu yöneten SEVP programının işletme masraflarını karşılamak için öğrenciden alınan tek seferlik bir ödemedir.',
          'SEVIS kaydınız, Amerika’daki eğitiminiz boyunca okulunuzun DSO’su tarafından güncellenir: kayıt, ders yükü, adres, bölüm değişikliği, CPT ve OPT gibi bilgiler bu sisteme işlenir. Yani SEVIS ücreti bir kerelik bir “giriş bedeli” gibi görünse de aslında eğitim süresince statünüzü takip eden sistemin karşılığıdır.',
          'Bu ücret, vize başvuru ücretinden (MRV) ayrıdır ve farklı bir kuruma, ABD İç Güvenlik Bakanlığı’na (DHS) ödenir. Ödeme yapılmadan konsolosluk vize mülakatında vize veremez; bu yüzden SEVIS ücreti vize sürecinin ilk somut adımlarından biridir.',
        ],
      },
      {
        h: 'Kim ne kadar öder?',
        table: {
          head: ['Statü', 'I-901 ücreti', 'Örnek'],
          rows: [
            ['F-1 öğrenci', '350 USD', 'Lisans, yüksek lisans, community college, dil okulu'],
            ['M-1 öğrenci', '350 USD', 'Mesleki ve teknik eğitim'],
            ['J-1 değişim katılımcısı', '220 USD', 'Araştırmacı, değişim öğrencisi, stajyer'],
            ['J-1 özel kategoriler', '35 USD', 'Au pair, kamp danışmanı, yaz iş ve seyahat programı'],
            ['F-2 / J-2 aile üyeleri', 'Ödenmez', 'Eş ve çocuklar'],
          ],
        },
        p: ['Tutarlar 2019’dan beri değişmemiştir; yine de ödeme öncesinde resmî ödeme sitesinde güncel tutarı kontrol etmeniz önerilir.'],
      },
      {
        h: 'Ne zaman ödenir?',
        p: [
          'SEVIS ücreti, okulunuzdan I-20 (veya J-1 için DS-2019) aldıktan sonra ve vize mülakatından önce ödenir. Ödemenin sisteme yansıması için mülakattan en az birkaç iş günü önce yapılması tavsiye edilir. Pratikte en mantıklı sıra şudur: I-20 gelir → SEVIS ücreti ödenir → DS-160 formu doldurulur → vize başvuru ücreti ödenip randevu alınır.',
          'Program başlangıç tarihiniz ertelenirse ve okul aynı SEVIS kaydı üzerinden yeni bir I-20 düzenlerse, ödenen ücret genellikle geçerliliğini korur. Okul yeni bir SEVIS kaydı açarsa yeniden ödeme gerekebilir.',
        ],
      },
      {
        h: 'Adım adım ödeme',
        list: [
          'DHS’nin resmî SEVIS ödeme sitesine (fmjfee.com) girin. Üçüncü taraf ödeme sitelerinden kaçının.',
          'I-901 formunu seçin ve I-20’deki bilgileri birebir girin: SEVIS ID (N ile başlayan numara), okul kodu, ad soyad ve doğum tarihi.',
          'Kredi veya banka kartıyla ödeme yapın. Sponsorunuz başkası ise ödemeyi onun kartıyla yapmak mümkündür.',
          'Ödeme onayını (I-797 makbuzu) PDF olarak kaydedin ve çıktısını alın; mülakatta ve Amerika’ya girişte yanınızda olsun.',
        ],
      },
      {
        h: 'Türkiye’den ödeme yaparken pratik notlar',
        list: [
          '**Kart limiti ve yurt dışı işlem:** Ödeme dolar cinsinden çekilir; kartınızın internet ve yurt dışı işlemlere açık olduğundan emin olun. Bankanızın döviz çevrim ücreti ayrıca yansıyabilir.',
          '**Bilgilerin birebir girilmesi:** Ad ve soyadı I-20’de nasıl yazıyorsa (Türkçe karakter olmadan) öyle girin. Bir harf farkı bile ödemenin kaydınızla eşleşmemesine yol açabilir.',
          '**Makbuzun saklanması:** Ödeme onayı ekranında görünen makbuzu hemen PDF olarak kaydedin. Sonradan aynı siteden yeniden çıktı almak mümkündür, ancak mülakat günü acele etmemek için önceden hazırlayın.',
          '**Ödemenin sisteme düşmesi:** Kartla yapılan ödemeler genellikle hızlı yansır; yine de mülakattan hemen önceki güne bırakmamak en güvenli yoldur.',
          '**Mükerrer ödeme:** Yanlışlıkla iki kez ödeme yaptıysanız SEVP’ye iade talebiyle başvurulabilir; süreç uzun sürebildiği için ilk ödemeyi dikkatle yapın.',
        ],
      },
      {
        h: 'Kimler tekrar ödemez?',
        list: [
          'Aynı SEVIS kaydıyla okul değiştiren (transfer) öğrenciler',
          'Aynı okulda lisanstan yüksek lisansa, aynı SEVIS kaydı devam ederek geçen öğrenciler',
          'OPT ve STEM OPT başvurusu yapan öğrenciler (ayrı bir USCIS ücreti ödenir, SEVIS ücreti değil)',
          'Vize reddi sonrası 12 ay içinde aynı kayıt için yeniden başvuran öğrenciler',
        ],
        p: ['Buna karşılık beş aydan uzun süre Amerika dışında kalıp yeni bir I-20 ile dönen veya statüsü sona erdiği için yeni kayıt açılan öğrencilerden yeniden ödeme istenebilir.'],
      },
      {
        h: 'Vize reddedilirse SEVIS ücreti ne olur?',
        p: [
          'SEVIS ücreti kural olarak iade edilmez. Ancak vize reddedilirse ödeme, ret tarihinden itibaren 12 ay içinde aynı SEVIS kaydıyla (veya aynı program için düzenlenen yeni I-20 ile) yapılacak yeni vize başvurusunda kullanılabilir. Bu nedenle ret sonrası makbuzu saklamak önemlidir.',
          'Ret nedeninin anlaşılması, yeni mülakata hazırlanmaktan daha önemlidir; aynı dosyayla tekrar gidilmesi genellikle aynı sonucu doğurur. Bkz. [vize reddi sonrası](/bilgi-bankasi/vize-reddi-sonrasi) rehberimiz.',
        ],
      },
      {
        h: 'Toplam vize maliyetinde SEVIS',
        p: ['F-1 vizesi için bir öğrencinin vize aşamasında ödediği temel kalemler 350 USD SEVIS ücreti ve 185 USD vize başvuru (MRV) ücretidir. Bunlara ek olarak Temmuz 2025’te yasalaşan 250 USD’lik “visa integrity fee”nin vize verildiğinde tahsil edilmesi öngörülmektedir; uygulamanın başlangıcı ve konsolosluklar arasındaki tahsilat durumu netleşmediği için randevu öncesinde güncel bilgi kontrol edilmelidir. Vize sürecinin tamamı için [I-20 nedir?](/bilgi-bankasi/i-20-nedir) ve [F-1 vize mülakatı](/bilgi-bankasi/f1-vize-mulakati) rehberlerimize, genel çerçeve için [öğrenci vizesi rehberi](/bilgi-bankasi/ogrenci-vizesi-rehberi) sayfamıza bakabilirsiniz.'],
      },
    ],
    seoTitle: 'SEVIS Ücreti Nedir? 2026 I-901 Ödemesi ve Tutarları',
    description: 'SEVIS ücreti nedir, ne kadar? F-1 için 350 USD, J-1 için 220 USD; I-901 ödemesi adım adım, kimler tekrar ödemez ve vize reddinde 12 ay kuralı.',
    faqs: [
      { q: 'SEVIS ücreti 2026’da ne kadar?', a: 'F-1 ve M-1 öğrenciler için 350 USD, J-1 değişim katılımcılarının çoğu için 220 USD, au pair ve kamp danışmanı gibi bazı J-1 kategorileri için 35 USD’dir. Tutarlar 2019’dan beri değişmemiştir.' },
      { q: 'SEVIS ücreti iade edilir mi?', a: 'Kural olarak iade edilmez. Ancak vize reddedilirse ödeme, 12 ay içinde aynı kayıtla yapılacak yeni bir vize başvurusunda yeniden kullanılabilir.' },
      { q: 'SEVIS ücretini başkası ödeyebilir mi?', a: 'Evet. Ödeme, öğrencinin bilgileri girildiği sürece ebeveyn veya sponsorun kredi kartıyla yapılabilir. Makbuz öğrencinin adına düzenlenir.' },
      { q: 'SEVIS ücretini ödedikten sonra okul değiştirirsem ne olur?', a: 'Vize mülakatından önce farklı bir okula gitmeye karar verirseniz, yeni okulun I-20’sindeki SEVIS ID farklı olacağı için çoğu durumda yeni okul için tekrar ödeme yapmanız gerekir. Bazı durumlarda ödemenin yeni kayda aktarılması mümkündür; bunun için SEVP ile iletişime geçilmelidir.' },
      { q: 'SEVIS ücreti ile vize ücreti aynı mı?', a: 'Hayır. SEVIS ücreti İç Güvenlik Bakanlığı’na, vize başvuru (MRV) ücreti ise Dışişleri Bakanlığı’na bağlı konsolosluk sistemine ödenir. İkisi de F-1 başvurusu için ayrı ayrı gereklidir.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'f1-vize-mulakati',
    title: 'F-1 vize mülakatı: sorular, belgeler ve hazırlık',
    group: 'Vize & Belgeler',
    countries: ['amerika'],
    summary: 'Amerika F-1 öğrenci vizesi mülakatında sorulan sorular, götürülecek belgeler, 214(b) reddi ve Türkiye’den başvuranlar için pratik hazırlık.',
    facts: [
      { label: 'Vize başvuru (MRV) ücreti', value: '185 USD' },
      { label: 'SEVIS I-901 ücreti', value: '350 USD' },
      { label: 'Mülakat', value: 'Çoğu başvuruda yüz yüze zorunlu' },
      { label: 'Başvuru yeri', value: 'Vatandaşı veya yerleşik olduğunuz ülke' },
      { label: 'Vize en erken', value: 'Başlangıçtan 365 gün önce' },
    ],
    sections: [
      {
        h: 'F-1 vize mülakatı nedir?',
        p: [
          'F-1 vizesi, Amerika’da akademik bir programda veya tam zamanlı dil okulunda okuyacak öğrencilere verilen öğrenci vizesidir. Vize kararını, başvurunun son aşamasında konsolosluk görevlisi (consular officer) kısa bir yüz yüze mülakatla verir. Mülakat çoğunlukla 2–5 dakika sürer ve genellikle İngilizce yapılır; görevli bu kısa sürede dosyanızın ve cevaplarınızın tutarlı olup olmadığına karar verir.',
          'Eylül 2025’ten bu yana öğrenci vizesi başvurularında mülakattan muafiyet (interview waiver) imkânı büyük ölçüde kalktı ve F/J başvuru sahiplerinin randevuyu vatandaşı oldukları veya yasal olarak yaşadıkları ülkede alması gerekiyor. Türkiye’den başvuranlar için vize mülakatları Ankara’daki ABD Büyükelçiliği ve İstanbul’daki Başkonsolosluk’ta yapılır. Randevu bekleme süreleri dönemsel olarak uzayabildiği için I-20 gelir gelmez randevu alınmalıdır.',
        ],
      },
      {
        h: 'Başvuru adımları ve ücretler',
        table: {
          head: ['Adım', 'Açıklama', 'Ücret'],
          rows: [
            ['1. I-20', 'Okulun düzenlediği uygunluk belgesi', '—'],
            ['2. SEVIS I-901', 'fmjfee.com üzerinden ödeme', '350 USD'],
            ['3. DS-160', 'Online vize formu; sosyal medya hesapları dahil', '—'],
            ['4. MRV ücreti ve randevu', 'Vize başvuru ücreti, randevu sistemi üzerinden', '185 USD'],
            ['5. Mülakat', 'Ankara veya İstanbul’da yüz yüze', '—'],
            ['6. Visa integrity fee', 'Yasalaştı, vize verildiğinde tahsil edilmesi öngörülüyor; uygulama durumu kontrol edilmeli', '250 USD (öngörülen)'],
          ],
        },
        p: ['DS-160’ta son beş yılda kullandığınız sosyal medya kullanıcı adlarını eksiksiz yazmanız gerekir. Dışişleri Bakanlığı, öğrenci vizesi başvuru sahiplerinden sosyal medya hesaplarının inceleme için herkese açık (public) olmasını istemektedir; kapalı hesaplar sürecin uzamasına yol açabilir.'],
      },
      {
        h: 'Mülakatta götürülecek belgeler',
        list: [
          '**Zorunlu:** Pasaport, imzalı I-20, DS-160 onay sayfası, SEVIS ödeme makbuzu, MRV ödeme onayı, randevu belgesi.',
          '**Finansal:** Banka hesap dökümü ve banka yazısı, sponsor (genellikle ebeveyn) gelir belgeleri, maaş bordrosu veya şirket evrakı, burs varsa burs mektubu. Tutar I-20’deki ilk yıl masrafını karşılamalıdır.',
          '**Akademik:** Diploma ve transkript, TOEFL, IELTS, Duolingo, SAT veya GRE/GMAT sonuçları, kabul mektubu.',
          '**Türkiye’ye bağlılık:** Aile, mülk, ailenin işi, mezuniyet sonrası iş planı gibi geri dönüş niyetini destekleyen belgeler.',
        ],
        p: ['Görevli çoğu zaman belge istemez; yine de sorulan her soruyu belgeyle destekleyebilecek şekilde dosyanızı düzenli tutun. Belgeleri Türkçe ise İngilizce özet veya tercüme yanınızda olsun.'],
      },
      {
        h: 'En sık sorulan sorular',
        table: {
          head: ['Soru', 'Görevlinin aslında öğrenmek istediği'],
          rows: [
            ['Neden bu okulu ve bu bölümü seçtiniz?', 'Gerçek bir akademik plan olup olmadığı'],
            ['Neden Türkiye’de değil de Amerika’da okumak istiyorsunuz?', 'Programın size özgü katkısı'],
            ['Eğitiminizi kim finanse ediyor? Aileniz ne iş yapıyor?', 'Finansal yeterlilik ve kaynağın tutarlılığı'],
            ['Kaç okula başvurdunuz, hangilerinden kabul aldınız?', 'Seçimin bilinçli yapılıp yapılmadığı'],
            ['Mezun olduktan sonra ne yapacaksınız?', 'Göçmen niyeti taşımadığınız (214(b))'],
            ['Amerika’da akrabanız var mı?', 'Dosyanın bütünlüğü; dürüst cevap verilmeli'],
          ],
        },
      },
      {
        h: '214(b) reddi: en yaygın ret nedeni',
        p: [
          'F-1 retlerinin büyük kısmı Göçmenlik ve Vatandaşlık Yasası’nın 214(b) maddesine dayanır. Bu maddeye göre her başvuru sahibi, aksini kanıtlayana kadar göçmen niyetli sayılır. Görevli; geri dönüş bağlarınızı, akademik planınızı veya finansal durumunuzu ikna edici bulmazsa 214(b) kapsamında ret verir ve size genellikle bir bilgi kâğıdı verilir.',
          '214(b) reddi kalıcı bir yasak değildir; yeniden başvurulabilir. Ancak aynı dosya ve aynı cevaplarla tekrar gitmek genellikle aynı sonucu doğurur. Yeni başvurudan önce reddin muhtemel nedeni belirlenmeli, eksikler giderilmeli ve değişen durum (yeni burs, daha güçlü finansal belge, daha net bir kariyer planı) belgelenmelidir. Ayrıntılar: [vize reddi sonrası](/bilgi-bankasi/vize-reddi-sonrasi).',
        ],
      },
      {
        h: 'Mülakat günü pratik ipuçları',
        list: [
          'Cevaplarınızı ezberlemeyin; kısa, net ve kendi cümlelerinizle konuşun. Ezber cevaplar görevlinin dikkatini çeker.',
          'Bölümünüzün birkaç dersini ve neden ilginizi çektiğini somut olarak anlatabilin.',
          'Ailenizin işini ve gelirini kendi ağzınızdan açıklayabilecek kadar bilin; finansal sorular öğrenciye sorulur.',
          'Amerika’da çalışarak okul masraflarını karşılayacağınızı söylemeyin; F-1 statüsünde kampüs dışı çalışma kısıtlıdır ve finansal yeterlilik bu varsayıma dayanamaz.',
          'Güvenlik kontrolünde elektronik cihazlar alınmaz; telefon ve büyük çantaları yanınızda götürmeyin.',
          'Vize onaylanırsa pasaportunuz kuryeyle geri gönderilir; uçuş biletini vize çıkmadan kesinleştirmeyin.',
        ],
      },
      {
        h: 'Vize sonrası ve güncel kurallar',
        p: [
          'Vize, program başlangıcından en erken 365 gün önce verilebilir; ancak Amerika’ya giriş, I-20’deki başlangıç tarihinden en fazla 30 gün önce yapılabilir. Girişte sınır görevlisine I-20 ve finansal belgelerinizi gösterebilecek şekilde el bagajınızda taşıyın.',
          'Öğrenci statüsünün süresini sabit bir tarihe bağlayan yeni DHS kuralı 15 Eylül 2026’da yürürlüğe girecekti; ancak 14 Eylül 2026’da bir federal mahkeme kuralı geçici olarak durdurdu ve öğrenciler şimdilik “duration of status” sistemiyle kabul ediliyor. Mezuniyet sonrası çalışma hakları için [OPT ve CPT nedir?](/bilgi-bankasi/opt-cpt-nedir) rehberimize, belgeler için [I-20 nedir?](/bilgi-bankasi/i-20-nedir) sayfamıza, mülakat provası ve dosya kontrolü için [vize danışmanlığı](/hizmetler/vize-danismanligi) sayfamıza bakabilirsiniz.',
        ],
      },
    ],
    seoTitle: 'F-1 Vize Mülakatı: Sorular, Belgeler ve Hazırlık 2026',
    description: 'F-1 vize mülakatında hangi sorular sorulur? Götürülecek belgeler, 185 USD MRV ve 350 USD SEVIS ücreti, sosyal medya kuralı ve 214(b) reddine hazırlık.',
    faqs: [
      { q: 'F-1 vize mülakatı ne kadar sürer?', a: 'Mülakat genellikle 2–5 dakika sürer. Görevli birkaç kısa soruyla akademik planınızı, finansal durumunuzu ve geri dönüş niyetinizi değerlendirir; uzun açıklamalar yerine net cevaplar beklenir.' },
      { q: 'F-1 vizesi için ne kadar para göstermek gerekir?', a: 'I-20’de yazan ilk yıl toplam tahmini masrafı (harç, yaşam, sigorta ve diğer giderler) karşılayacak tutarı göstermeniz gerekir. Kalan yıllar için de ailenin gelirinin bu masrafları karşılayabileceğini anlatabilmelisiniz.' },
      { q: 'F-1 vizesi reddedilirse tekrar başvurabilir miyim?', a: 'Evet, 214(b) reddi kalıcı bir yasak değildir. Ancak yeniden başvurmadan önce reddin nedenini belirleyip dosyayı güçlendirmeniz gerekir; aynı dosyayla tekrar gitmek genellikle aynı sonucu verir.' },
      { q: 'F-1 mülakatı hangi dilde yapılır?', a: 'Mülakat dili görevliye göre değişebilir, ancak öğrenci vizesi mülakatlarında genellikle İngilizce sorular sorulur. İngilizce eğitim alacak bir öğrencinin kısa ve net İngilizce cevaplar verebilmesi, dil yeterliliği açısından da olumlu bir izlenim bırakır.' },
      { q: 'Sosyal medya hesaplarımı açık yapmak zorunda mıyım?', a: 'Dışişleri Bakanlığı öğrenci vizesi başvuru sahiplerinden sosyal medya hesaplarını inceleme için herkese açık hâle getirmelerini istemektedir. Kapalı hesaplar sürecin uzamasına neden olabilir; DS-160’ta beyan edilen tüm hesapların doğru olması gerekir.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'opt-cpt-nedir',
    title: 'OPT ve CPT nedir? Amerika’da öğrenciyken ve mezuniyet sonrası çalışma',
    group: 'Work and Study',
    countries: ['amerika'],
    summary: 'F-1 öğrencilerinin çalışma hakları: kampüs içi iş, CPT, 12 aylık OPT ve 24 aylık STEM OPT uzatması; başvuru zamanı, ücretler ve güncel gelişmeler.',
    facts: [
      { label: 'Kampüs içi çalışma', value: 'Dönem içinde haftada 20 saat' },
      { label: 'OPT süresi', value: 'Her eğitim seviyesi için 12 ay' },
      { label: 'STEM OPT uzatması', value: '24 ay ek süre' },
      { label: 'İşsizlik sınırı', value: 'OPT’de 90 gün, STEM ile toplam 150 gün' },
      { label: 'Başvuru penceresi', value: 'Bitişten 90 gün önce – 60 gün sonra' },
    ],
    sections: [
      {
        h: 'F-1 öğrencileri çalışabilir mi?',
        p: [
          'F-1 statüsü öncelikle eğitim içindir ve çalışma hakları sınırlıdır. Öğrenciler kampüs içinde (kütüphane, yemekhane, laboratuvar asistanlığı gibi) dönem içinde haftada 20 saate, resmî tatillerde tam zamanlı çalışabilir. Kampüs dışında çalışmak ise ancak programın parçası olan CPT veya OPT gibi izinlerle mümkündür. İzinsiz kampüs dışı çalışma, statü ihlali sayılır ve SEVIS kaydının sonlandırılmasına yol açabilir.',
          'Bu nedenle vize mülakatında ve bütçe planlamasında Amerika’daki çalışma gelirine güvenilmemelidir. Çalışma hakları daha çok mesleki deneyim kazanmak ve mezuniyet sonrası kariyere köprü kurmak için önemlidir.',
        ],
      },
      {
        h: 'CPT nedir?',
        p: [
          'CPT (Curricular Practical Training), eğitim sırasında yapılan ve programın müfredatının bir parçası olan staj, kooperatif eğitim (co-op) veya pratik çalışmadır. İzni USCIS değil, okulun DSO’su verir ve I-20’ye işler. CPT için genellikle en az bir akademik yıl tam zamanlı okumuş olmak gerekir; ancak birinci yıldan itibaren staj zorunlu olan bazı yüksek lisans programlarında bu şart aranmayabilir.',
          'CPT belirli bir işveren ve belirli tarihler için verilir. Haftada 20 saate kadar yarı zamanlı veya tam zamanlı olabilir. Önemli kural: toplamda 12 ay veya daha fazla **tam zamanlı** CPT kullanan öğrenci, o eğitim seviyesi için OPT hakkını kaybeder. Yarı zamanlı CPT ise OPT hakkını etkilemez.',
        ],
      },
      {
        h: 'OPT nedir?',
        p: [
          'OPT (Optional Practical Training), öğrencinin bölümüyle ilgili alanda çalışmasına izin veren, her eğitim seviyesi (lisans, yüksek lisans, doktora) için 12 aya kadar kullanılabilen çalışma iznidir. Eğitim sırasında (pre-completion) veya mezuniyet sonrası (post-completion) kullanılabilir; öğrencilerin büyük çoğunluğu mezuniyet sonrasını tercih eder. OPT için iş teklifi şartı yoktur, ancak çalışılan işin bölümle ilgili olması gerekir.',
          'Başvuru iki aşamalıdır: önce DSO, SEVIS’te OPT önerisi (recommendation) girer ve yeni bir I-20 düzenler; ardından öğrenci USCIS’e Form I-765 ile başvurur. Post-completion OPT başvurusu program bitiminden en erken 90 gün önce, en geç 60 gün sonra yapılabilir ve DSO önerisinden itibaren 30 gün içinde USCIS’e ulaşmalıdır. Çalışmaya başlamak için EAD kartının gelmesi ve kartın başlangıç tarihinin gelmiş olması gerekir.',
        ],
      },
      {
        h: 'CPT, OPT ve STEM OPT karşılaştırması',
        table: {
          head: ['Özellik', 'CPT', 'OPT', 'STEM OPT'],
          rows: [
            ['Ne zaman?', 'Eğitim sırasında', 'Genellikle mezuniyet sonrası', 'OPT bitiminde'],
            ['Süre', 'İşverene ve döneme göre', '12 ay', '24 ay ek'],
            ['İzni veren', 'Okul (DSO)', 'USCIS (EAD kartı)', 'USCIS (EAD kartı)'],
            ['İş teklifi', 'Gerekli', 'Gerekli değil', 'E-Verify kayıtlı işveren gerekli'],
            ['Kimler?', 'Müfredatında staj olanlar', 'Tüm F-1 mezunları', 'Uygun STEM alanından mezunlar'],
            ['Ek belge', 'İşveren teklif mektubu', 'Form I-765', 'Form I-765 ve I-983 eğitim planı'],
          ],
        },
      },
      {
        h: 'STEM OPT uzatması',
        p: [
          'DHS’nin STEM listesinde yer alan bir bölümden (bilgisayar bilimi, mühendislik, matematik, veri bilimi, bazı işletme analitiği ve ekonomi programları gibi) mezun olan öğrenciler, 12 aylık OPT’nin ardından 24 aylık STEM OPT uzatmasına başvurabilir. Böylece toplam çalışma süresi 36 aya çıkar. Bölümün STEM sayılıp sayılmadığı, I-20’de yazan CIP koduna göre belirlenir; bu nedenle program seçerken CIP kodunu kontrol etmek önemlidir.',
          'STEM OPT için işverenin E-Verify sistemine kayıtlı olması, öğrenciyle birlikte Form I-983 eğitim planı hazırlaması ve öğrencinin haftada en az 20 saat çalışması gerekir. Başvuru, mevcut OPT bitmeden en fazla 90 gün önce yapılabilir.',
        ],
      },
      {
        h: 'Ücretler, işsizlik sınırı ve yapılmaması gerekenler',
        list: [
          '**Form I-765 ücreti:** Online başvuruda yaklaşık 470 USD, kâğıt başvuruda yaklaşık 520 USD; tutarlar USCIS tarafından değiştirilebileceği için başvuru öncesinde kontrol edilmelidir.',
          '**İşsizlik sınırı:** OPT süresince toplam 90 günden fazla işsiz kalınamaz; STEM OPT ile birlikte toplam sınır 150 gündür.',
          '**Bildirim:** İşveren, adres veya iş değişikliği 10 gün içinde SEVP portalı veya DSO aracılığıyla bildirilmelidir.',
          '**Seyahat:** OPT sırasında yurt dışına çıkıp dönmek için geçerli EAD kartı, iş teklifi veya iş belgesi, güncel seyahat imzalı I-20 ve geçerli vize gerekir.',
          'Program bitiminden sonra 60 günlük süre içinde OPT’ye başvurmayan öğrencinin statüsü sona erer; bu süre kaçırılırsa OPT hakkı kullanılamaz.',
        ],
      },
      {
        h: 'Güncel gelişmeler: önerilen OPT ücretleri',
        p: [
          'DHS, Ocak 2026’da OPT ve STEM OPT’nin kapsamını ve süresini yeniden değerlendirdiğini açıkladı ve 8 Ekim 2026’da OPT önerileri için okullardan çok yüksek tutarlı ücretler alınmasını öngören bir kural taslağı yayımladı. Bu bir **taslaktır**; kamuoyu görüşüne açıktır, yürürlük tarihi yoktur ve kesinleşmeden uygulanmayacaktır. Bugün itibarıyla OPT, STEM OPT ve CPT kuralları yukarıda anlatıldığı şekilde geçerlidir.',
          'Amerika’da kariyer planı yapan öğrenciler ve aileler için önerimiz, OPT’yi programın tek gerekçesi yapmamak ve süreci okulun uluslararası öğrenci ofisinden takip etmektir. Program seçenekleri için [Amerika’da yüksek lisans](/yurtdisi-yuksek-lisans/amerika) ve [Amerika lisans programları](/lisans-programlari/amerika), vize süreci için [F-1 vize mülakatı](/bilgi-bankasi/f1-vize-mulakati) sayfalarımıza, ülke geneli bilgiler için [Amerika](/ulkeler/amerika) sayfamıza bakabilirsiniz.',
        ],
      },
    ],
    seoTitle: 'OPT ve CPT Nedir? Amerika’da Öğrenci Çalışma Hakları 2026',
    description: 'OPT ve CPT nedir? F-1 öğrencileri için kampüs içi iş, 12 aylık OPT, 24 aylık STEM OPT, başvuru takvimi, I-765 ücreti, 90 gün kuralı ve güncel gelişmeler.',
    faqs: [
      { q: 'OPT ne kadar süre?', a: 'OPT her eğitim seviyesi için 12 aydır. DHS’nin STEM listesinde yer alan bir bölümden mezun olanlar 24 aylık STEM OPT uzatmasıyla toplam 36 aya kadar çalışabilir.' },
      { q: 'OPT için iş teklifi gerekir mi?', a: 'Standart OPT başvurusu için iş teklifi gerekmez, ancak çalışılan işin bölümle ilgili olması gerekir. STEM OPT uzatmasında ise E-Verify kayıtlı bir işverenle çalışmak ve I-983 eğitim planı hazırlamak zorunludur.' },
      { q: 'CPT kullanmak OPT hakkını etkiler mi?', a: 'Yarı zamanlı CPT etkilemez. Ancak toplamda 12 ay veya daha fazla tam zamanlı CPT kullanan öğrenci, aynı eğitim seviyesi için OPT hakkını kaybeder.' },
      { q: 'OPT kaldırılacak mı?', a: 'Ekim 2026 itibarıyla OPT ve STEM OPT yürürlüktedir. DHS, OPT önerileri için yüksek ücretler öngören bir kural taslağı yayımladı ve programın kapsamını incelediğini açıkladı; ancak kesinleşmiş bir değişiklik yoktur. Gelişmeleri okulunuzun DSO’sundan takip etmeniz önerilir.' },
      { q: 'Dil okulu öğrencileri OPT alabilir mi?', a: 'Hayır. Dil okulu programları OPT veya CPT hakkı vermez. Bu haklar lisans, yüksek lisans ve doktora gibi derece programlarına ve bazı uygun programlara özgüdür.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'common-app-nedir',
    title: 'Common App nedir? Amerika üniversite başvuru platformu',
    group: 'Başvuru',
    program: 'lisans',
    countries: ['amerika'],
    summary: 'Common App ile Amerika’da lisans başvurusu: 20 okul sınırı, essay, öneri mektupları, erken ve normal başvuru takvimi, uluslararası öğrenci notları.',
    facts: [
      { label: 'Üye kurum', value: '1.000’i aşkın okul' },
      { label: 'Okul sınırı', value: 'Tek hesapla en fazla 20 okul' },
      { label: 'Ana essay', value: '250–650 kelime, 7 konu seçeneği' },
      { label: 'Yeni dönem açılışı', value: 'Her yıl 1 Ağustos' },
      { label: 'Erken başvuru', value: 'Genellikle 1 veya 15 Kasım' },
    ],
    sections: [
      {
        h: 'Common App ne işe yarar?',
        p: [
          'Common Application (Common App), Amerika’daki 1.000’i aşkın üniversite ve college’ın lisans başvurularını kabul ettiği ortak online başvuru platformudur. Öğrenci kişisel bilgilerini, eğitim geçmişini, etkinliklerini ve ana essay’ini bir kez girer; bu ortak bölüm seçtiği tüm okullara gönderilir. Her okul ayrıca kendi ek sorularını (supplemental questions) ve ek essay’lerini isteyebilir.',
          'İngiltere’deki UCAS’tan farklı olarak Common App’te her okul ayrı değerlendirme yapar, ayrı ücret alır ve ayrı son tarihlere sahiptir. Tek hesapla en fazla 20 okula başvurulabilir. Bazı üniversiteler Common App dışında kendi sistemlerini (örneğin University of California sistemi) veya Coalition gibi alternatif platformları kullanır; bu nedenle hedef listenizdeki her okulun başvuru yöntemini kontrol edin.',
        ],
      },
      {
        h: 'Common App’in bölümleri',
        list: [
          '**Profile ve Family:** Kişisel bilgiler, vatandaşlık, ebeveynlerin eğitim ve meslek bilgileri.',
          '**Education:** Lise bilgileri, not sistemi, sınıf sıralaması (varsa), alınan dersler ve notlar. Türkiye’deki 100’lük not sistemi olduğu gibi girilir; okulunuzun danışmanı not sistemini açıklayan bir okul profili (school profile) yükler.',
          '**Testing:** SAT, ACT, TOEFL, IELTS veya Duolingo sonuçları. Birçok okul hâlâ test-optional politikası uygular, ancak bazı seçici okullar SAT/ACT’yi yeniden zorunlu hâle getirdi. Bkz. [SAT ve ACT](/bilgi-bankasi/sat-act).',
          '**Activities:** En fazla 10 etkinlik; her biri için rol, süre ve kısa açıklama. Kulüpler, spor, gönüllülük, iş, aile sorumlulukları burada yer alır.',
          '**Writing:** Ana essay ve isteğe bağlı ek bilgi (Additional Information) bölümü.',
          '**Recommenders:** Okul danışmanı (counselor) ve genellikle iki öğretmenden öneri mektubu.',
        ],
      },
      {
        h: 'Ana essay: 7 konu, 650 kelime',
        p: [
          'Common App ana essay’i 250–650 kelime arasında olmalıdır ve 7 konu seçeneğinden biri seçilir. Common App, 2026–2027 döneminde konuların değişmediğini açıkladı. Konular kabaca şu temalardır: sizi tanımlayan bir geçmiş veya kimlik, bir başarısızlık veya zorlukla karşılaşma, bir inancı sorgulama, birinin size yaptığı bir iyiliğin etkisi, kişisel gelişim yaratan bir deneyim, zamanı unutturan bir ilgi alanı ve serbest konu.',
          'Bu metin UCAS’taki personal statement’tan çok farklıdır: akademik ilgi yerine **kişiliğinizi ve bakış açınızı** anlatır. Okul adı veya bölüm odaklı olmak zorunda değildir; iyi bir essay, küçük ve somut bir anı üzerinden sizin nasıl düşündüğünüzü gösterir. Okullara özel kısa essay’ler (“Neden bizim okulumuz?”) ise mutlaka okulun programlarına, kulüplerine ve kampüs kültürüne dair özgün ayrıntılar içermelidir.',
        ],
      },
      {
        h: 'Başvuru türleri ve takvim',
        table: {
          head: ['Başvuru türü', 'Tipik son tarih', 'Bağlayıcı mı?', 'Not'],
          rows: [
            ['Early Decision (ED)', '1 veya 15 Kasım', 'Evet', 'Kabul edilirseniz o okula gitmeyi taahhüt edersiniz; yalnızca bir okula yapılır'],
            ['Early Action (EA)', '1 veya 15 Kasım', 'Hayır', 'Erken sonuç; birden fazla okula yapılabilir (bazı okullarda kısıtlı)'],
            ['Restrictive Early Action', '1 Kasım', 'Hayır', 'Diğer özel okullara erken başvuruyu kısıtlar'],
            ['Early Decision II', 'Ocak başı', 'Evet', 'Bazı okullarda ikinci bağlayıcı aşama'],
            ['Regular Decision (RD)', '1–15 Ocak (bazı okullarda şubat)', 'Hayır', 'Sonuçlar genellikle mart sonu – nisan başı'],
            ['Rolling admission', 'Kontenjan dolana kadar', 'Hayır', 'Başvurular geldikçe değerlendirilir'],
          ],
        },
        p: ['Kabul alan öğrenciler genellikle 1 Mayıs’a kadar (National Candidates Reply Date) hangi okula gideceklerini bildirir ve depozito öder. Ardından okul I-20’yi düzenler: [I-20 nedir?](/bilgi-bankasi/i-20-nedir).'],
      },
      {
        h: 'Uluslararası öğrenciler için önemli notlar',
        list: [
          '**Finansal yardım:** Amerika’daki okulların çoğu uluslararası öğrencilerin başvurusunu değerlendirirken maddi ihtiyacı dikkate alır (need-aware); maddi ihtiyacı hiç dikkate almayan (need-blind) okul sayısı çok azdır. Burs isteyecekseniz çoğu okul CSS Profile veya kendi uluslararası finansal yardım formunu ister.',
          '**Başvuru ücreti:** Okula göre değişir; çoğu seçici okulda 75–90 USD civarındadır. Maddi durumu yetersiz öğrenciler için Common App üzerinden ücret muafiyeti (fee waiver) talep edilebilir.',
          '**Belgeler:** Transkriptler ve öneri mektupları İngilizce olmalı veya tercüme edilmelidir. Bazı okullar WES veya ECE gibi kuruluşlardan transkript değerlendirmesi isteyebilir.',
          '**İngilizce yeterliliği:** TOEFL iBT için seçici okullarda genellikle 100 ve üzeri, IELTS’te 7.0 ve üzeri beklenir. Bkz. [TOEFL rehberi](/bilgi-bankasi/toefl).',
          '**Mülakat:** Bazı okullar mezunlarıyla isteğe bağlı online görüşme yapar.',
        ],
      },
      {
        h: 'Önerilen hazırlık takvimi',
        list: [
          '**10. ve 11. sınıf:** Notları yüksek tutun, uzun soluklu 2–3 etkinliğe odaklanın, SAT/ACT ve TOEFL’a hazırlanın.',
          '**11. sınıf bahar:** 10–15 okulluk ilk liste; öneri mektubu yazacak öğretmenleri belirleyin.',
          '**Yaz:** Ana essay taslakları; 1 Ağustos’ta yeni dönem açıldığında hesap bilgilerini girin.',
          '**Eylül – ekim:** ED/EA kararı, okul ek essay’leri, öneri mektuplarının sisteme yüklenmesi.',
          '**Kasım – ocak:** Erken başvurular, sonuçlara göre normal başvuru listesinin tamamlanması.',
        ],
        p: ['Amerika’da lisans seçeneklerini [Amerika lisans programları](/lisans-programlari/amerika), daha uygun maliyetli bir giriş yolu olarak [community college nedir?](/bilgi-bankasi/community-college-nedir) sayfalarımızda inceleyebilir, okul listesi ve essay desteği için [eğitim danışmanlığı](/hizmetler/egitim-danismanligi) sayfamıza başvurabilirsiniz.'],
      },
    ],
    seoTitle: 'Common App Nedir? Amerika Üniversite Başvurusu Rehberi',
    description: 'Common App nedir, nasıl doldurulur? 20 okul sınırı, 650 kelimelik essay, öneri mektupları, ED/EA/RD takvimi ve uluslararası öğrenciler için burs notları.',
    faqs: [
      { q: 'Common App ile kaç okula başvurabilirim?', a: 'Tek bir Common App hesabıyla en fazla 20 okula başvurabilirsiniz. Her okul ayrı ücret ve ayrı son tarihe sahiptir; okulların ek essay’leri de ayrıca hazırlanmalıdır.' },
      { q: 'Common App essay kaç kelime olmalı?', a: 'Ana essay 250 ile 650 kelime arasında olmalıdır. Okulların ek essay’leri ise genellikle 50–350 kelime arasında değişir ve her okul kendi sınırını belirler.' },
      { q: 'Common App ücretli mi?', a: 'Common App hesabı ücretsizdir; ücreti okullar belirler. Seçici okullarda başvuru ücreti genellikle 75–90 USD civarındadır, bazı okullar ücret almaz. Koşulları sağlayan öğrenciler ücret muafiyeti talep edebilir.' },
      { q: 'Uluslararası öğrenciler Amerika’da burs alabilir mi?', a: 'Alabilir, ancak imkânlar okuldan okula çok değişir. Bazı okullar uluslararası öğrencilere ihtiyaca dayalı (need-based) cömert yardımlar verir, bazıları yalnızca başarı bursu sunar. Burs isteyen öğrencilerin başvuru aşamasında finansal yardım formlarını da doldurması gerekir.' },
      { q: 'Early Decision’a başvurmalı mıyım?', a: 'Gerçekten ilk tercihiniz olan ve maddi koşullarını kabul edebileceğiniz bir okul varsa ED avantaj sağlayabilir. Ancak bağlayıcıdır; burs paketini karşılaştırma imkânı istiyorsanız Early Action veya Regular Decision daha uygun olabilir.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'community-college-nedir',
    title: 'Community college nedir? Amerika’da 2+2 üniversite yolu',
    group: 'Üniversite',
    program: 'lisans',
    countries: ['amerika'],
    summary: 'Community college nedir, associate derecesi, 2+2 transfer modeli, maliyet avantajı ve Türk öğrencilerin F-1 vizesiyle bu yolu nasıl kullanabileceği.',
    facts: [
      { label: 'Program süresi', value: 'Associate derecesi: 2 yıl' },
      { label: 'Transfer modeli', value: '2 yıl community college + 2 yıl üniversite' },
      { label: 'İngilizce şartı', value: 'Okula göre değişir; ESL ile koşullu kabul yaygın' },
      { label: 'Vize', value: 'F-1 (SEVP sertifikalı okullarda)' },
    ],
    sections: [
      {
        h: 'Community college ne demek?',
        p: [
          'Community college, Amerika’da genellikle eyalet ve yerel yönetimler tarafından finanse edilen, iki yıllık “associate” derecesi veren kamu yükseköğretim kurumlarıdır. Türkiye’deki meslek yüksekokullarına benzer bir yapı olsa da en önemli farkı, öğrencilerin burada aldığı derslerin dört yıllık üniversitelere aktarılabilmesidir. Pek çok öğrenci ilk iki yılı community college’da okuyup üçüncü sınıfa bir eyalet üniversitesine veya özel üniversiteye transfer olur; buna “2+2 modeli” denir.',
          'Community college’lar ayrıca mesleki sertifika programları, İngilizce (ESL) programları ve yetişkin eğitimi sunar. Sınıflar büyük üniversitelere göre daha küçüktür ve dersler çoğunlukla araştırmacılar yerine öğretime odaklı eğitmenler tarafından verilir.',
        ],
      },
      {
        h: 'Associate derecesi türleri',
        table: {
          head: ['Derece', 'Açılımı', 'Amaç'],
          rows: [
            ['AA', 'Associate of Arts', 'Sosyal bilimler, işletme, iletişim gibi alanlarda transfer'],
            ['AS', 'Associate of Science', 'Mühendislik, bilgisayar, sağlık bilimleri gibi alanlarda transfer'],
            ['AAS', 'Associate of Applied Science', 'Doğrudan iş hayatına yönelik; transferi daha sınırlı'],
            ['Certificate', 'Sertifika programı', 'Kısa süreli mesleki eğitim'],
          ],
        },
      },
      {
        h: 'Neden community college?',
        list: [
          '**Maliyet:** Uluslararası öğrenciler için yıllık harç, aynı eyaletteki dört yıllık üniversitelere göre genellikle belirgin şekilde düşüktür; iki yılda ciddi bir tasarruf sağlanır. Tutarlar eyalete ve okula göre çok değiştiği için güncel ücreti okulun uluslararası öğrenci sayfasından kontrol edin.',
          '**Esnek kabul şartları:** SAT/ACT çoğunlukla istenmez; lise diploması, transkript, finansal belge ve İngilizce yeterliliği genellikle yeterlidir.',
          '**İkinci şans:** Lise notları seçici üniversitelere yetmeyen öğrenciler, community college’daki güçlü notlarıyla daha iyi bir üniversiteye transfer olabilir.',
          '**İngilizce desteği:** İngilizcesi yeterli olmayan öğrenciler aynı kampüste ESL programıyla başlayıp akademik derslere geçebilir.',
          '**Küçük sınıflar ve destek:** Akademik danışmanlık ve transfer danışmanlığı yoğun olarak verilir.',
        ],
      },
      {
        h: '2+2 transfer nasıl işler?',
        p: [
          'Transferin başarılı olması için community college’da alınan derslerin hedef üniversite tarafından kabul edilmesi gerekir. Bunun için birçok eyalette community college’lar ile eyalet üniversiteleri arasında **articulation agreement** adı verilen ders denklik anlaşmaları vardır. Bazı okullar ise belirli bir not ortalamasını tutturan öğrencilere hedef üniversiteye kabul garantisi veren transfer programları sunar. Uluslararası öğrencilerin bu garanti programlarına katılıp katılamayacağı okula göre değişir; kayıt olmadan önce mutlaka sorun.',
          'Transferde en önemli kriterler community college not ortalaması (seçici üniversitelerde genellikle 3,5 ve üzeri), hedef bölüm için gereken ön koşul derslerin tamamlanması ve transfer essay’idir. Transfer başvuruları çoğu üniversitede Common App üzerinden yapılır: [Common App nedir?](/bilgi-bankasi/common-app-nedir).',
        ],
      },
      {
        h: 'Başvuru belgeleri ve takvim',
        p: [
          'Community college başvuruları dört yıllık üniversitelere göre çok daha sadedir ve genellikle okulun kendi online formu üzerinden yapılır. Çoğu okul güz (ağustos – eylül), bahar (ocak) ve bazıları yaz dönemi için öğrenci alır. Uluslararası öğrenciler için son başvuru tarihi, vize süresine pay bırakmak amacıyla genellikle dönem başlangıcından iki ila dört ay öncedir.',
          'İstenen belgeler çoğunlukla şunlardır: başvuru formu ve başvuru ücreti, lise diploması ve transkriptin İngilizce tercümesi, İngilizce yeterlilik belgesi (TOEFL, IELTS veya Duolingo; minimum puan okula göre değişir ve bazı okullar kendi yerleştirme sınavını kabul eder), pasaport kopyası, I-20 için banka yazısı ve sponsor belgesi. İngilizce puanı yetersiz olan öğrencilere çoğu okul ESL programıyla koşullu kabul verir; ESL’i tamamlayan öğrenci ek sınav olmadan akademik derslere geçer.',
          'Kabulden sonra okul, ilk yıl tahmini masrafını gösteren I-20’yi düzenler. Yurt ve homestay seçenekleri sınırlı olduğu için konaklama başvurusunu kabulle eş zamanlı yapmak gerekir. İngilizce sınavı seçimi için [Duolingo English Test](/bilgi-bankasi/duolingo-english-test) ve [TOEFL](/bilgi-bankasi/toefl) rehberlerimize bakabilirsiniz.',
        ],
      },
      {
        h: 'Vize ve çalışma hakları',
        p: [
          'SEVP sertifikalı community college’lar I-20 düzenleyebilir; öğrenci F-1 vizesiyle tam zamanlı (dönemde genellikle en az 12 kredi) okur. Vize süreci dört yıllık üniversitelerle aynıdır: [I-20 nedir?](/bilgi-bankasi/i-20-nedir) ve [F-1 vize mülakatı](/bilgi-bankasi/f1-vize-mulakati) rehberlerimize bakabilirsiniz.',
          'Community college öğrencileri kampüs içinde dönem içinde haftada 20 saate kadar çalışabilir. Associate derecesini tamamlayan öğrenciler 12 aylık OPT hakkına sahiptir; ancak transfer planı olan öğrenciler OPT’yi genellikle lisans sonrasına saklar, çünkü her eğitim seviyesi için ayrı bir OPT hakkı vardır. Ayrıntılar: [OPT ve CPT nedir?](/bilgi-bankasi/opt-cpt-nedir).',
        ],
      },
      {
        h: 'Dikkat edilmesi gerekenler',
        list: [
          'Bütün community college’lar uluslararası öğrenci kabul etmez; okulun SEVP sertifikalı olduğunu kontrol edin.',
          'Birçok community college’da yurt yoktur; öğrenciler homestay veya paylaşımlı kiralık evde kalır. Konaklama ve ulaşım bütçesini baştan hesaplayın.',
          'Ders seçiminde transfer hedefinizi baştan belirleyin; transfer edilmeyen dersler süreyi uzatır.',
          'Vize mülakatında community college tercihinin bilinçli bir plan olduğunu (maliyet, transfer hedefi, bölüm) net olarak anlatın.',
          'Kaliforniya, Washington, Teksas ve Florida gibi eyaletler geniş community college ağlarıyla öne çıkar; şehir ve iklim tercihini de hesaba katın.',
        ],
        p: ['Amerika’da lisans yollarını karşılaştırmak için [Amerika lisans programları](/lisans-programlari/amerika) ve [Amerika ülke sayfamıza](/ulkeler/amerika) göz atabilirsiniz.'],
      },
    ],
    seoTitle: 'Community College Nedir? Amerika’da 2+2 Üniversite Yolu',
    description: 'Community college nedir? Associate derecesi türleri, 2+2 transfer modeli, maliyet avantajı, kabul şartları, F-1 vizesi, OPT ve dikkat edilmesi gerekenler.',
    faqs: [
      { q: 'Community college diploması geçerli mi?', a: 'Evet. Community college’lar bölgesel akreditasyona sahip kamu kurumlarıdır ve verdikleri associate dereceleri Amerika’da tanınır. Transfer sonrası alınan lisans diploması ise doğrudan dört yıllık üniversitenin diplomasıdır.' },
      { q: 'Community college’dan iyi bir üniversiteye geçilebilir mi?', a: 'Geçilebilir. Birçok eyalet üniversitesi community college öğrencileri için özel transfer kontenjanları ayırır. Seçici üniversitelere transfer için yüksek not ortalaması, ön koşul derslerin tamamlanması ve güçlü bir transfer essay’i gerekir.' },
      { q: 'Community college için SAT gerekir mi?', a: 'Çoğu community college SAT veya ACT istemez. Lise diploması, transkript, finansal belgeler ve İngilizce yeterlilik belgesiyle başvuru yapılır; bazı okullar yerleştirme sınavı uygular.' },
      { q: 'Community college’dan sonra Amerika’da yüksek lisans yapılabilir mi?', a: 'Associate derecesi tek başına yüksek lisansa başvuru için yeterli değildir. Ancak community college’dan dört yıllık bir üniversiteye transfer olup lisansı tamamlayan öğrenci, diğer lisans mezunları gibi yüksek lisansa başvurabilir.' },
      { q: 'Community college’da okurken çalışabilir miyim?', a: 'F-1 öğrencileri kampüs içinde dönem içinde haftada 20 saate kadar çalışabilir. Kampüs dışında çalışma yalnızca CPT veya OPT gibi izinlerle mümkündür.' },
    ],
    updated: '2026-10-24',
  },
  /* ================= KANADA ================= */
  {
    slug: 'pgwp-nedir',
    title: 'PGWP nedir? Kanada mezuniyet sonrası çalışma izni',
    group: 'Work and Study',
    countries: ['kanada'],
    summary: 'Kanada’da PGWP (Post-Graduation Work Permit): kimler alabilir, süre nasıl hesaplanır, dil ve bölüm şartları, 180 gün kuralı ve sık yapılan hatalar.',
    facts: [
      { label: 'Asgari program süresi', value: '8 ay' },
      { label: 'En uzun süre', value: '3 yıl' },
      { label: 'Başvuru süresi', value: 'Mezuniyet onayından itibaren 180 gün' },
      { label: 'Dil şartı', value: 'Üniversite CLB 7, kolej CLB 5' },
      { label: 'Başvuru ücreti', value: '255 CAD (155 + 100 açık iş izni ücreti)' },
    ],
    sections: [
      {
        h: 'PGWP ne demek?',
        p: [
          'PGWP (Post-Graduation Work Permit), Kanada’da PGWP’ye uygun bir okulda (DLI) en az 8 aylık bir programı tamamlayan uluslararası öğrencilere verilen **açık iş iznidir**. Açık iş izni, belirli bir işverene bağlı olmadan Kanada’nın herhangi bir yerinde, herhangi bir işte tam zamanlı çalışmaya izin verir. İş teklifi şartı yoktur.',
          'PGWP’nin önemi yalnızca çalışma hakkından gelmez: Kanada’da edinilen nitelikli iş deneyimi, Express Entry’deki Canadian Experience Class gibi kalıcı oturum programlarında önemli puan ve uygunluk sağlar. Bu yüzden PGWP, Kanada’yı tercih eden öğrencilerin çoğu için eğitim planının merkezindedir. Ancak PGWP hayatta yalnızca bir kez verilir; ikinci bir program sonrası yeniden alınamaz.',
        ],
      },
      {
        h: 'Temel uygunluk şartları',
        list: [
          'PGWP’ye uygun bir DLI’da en az 8 aylık (Québec’te 900 saatlik) bir programı tamamlamış olmak',
          'Her dönemde tam zamanlı öğrenci olmak (yalnızca son dönem yarı zamanlı olabilir)',
          'Programın tamamlandığını gösteren resmî yazının (transkript veya mezuniyet yazısı) alınmasından itibaren 180 gün içinde başvurmak',
          'Bu 180 gün içinde bir noktada geçerli bir öğrenim izni (study permit) sahibi olmak',
          'Dil şartını karşılamak (aşağıda)',
          'Lisans altı programlar için bölümün PGWP’ye uygun alanlar listesinde olması (aşağıda)',
        ],
      },
      {
        h: 'Dil ve bölüm şartları',
        table: {
          head: ['Program türü', 'Dil şartı', 'Bölüm (field of study) şartı'],
          rows: [
            ['Lisans, yüksek lisans, doktora', 'CLB/NCLC 7 (dört becerinin her birinde)', 'Yok'],
            ['Diğer üniversite programları', 'CLB/NCLC 7', 'Var: uygun alanlar listesi'],
            ['Kolej, politeknik, diğer programlar (diploma, graduate certificate)', 'CLB/NCLC 5', 'Var: uygun alanlar listesi'],
            ['Uçuş okulu', 'Yok', 'Yok (özel şartlar geçerli)'],
          ],
        },
        p: [
          'CLB 7, IELTS General Training’de dört becerinin her birinde 6.0’a; CLB 5 ise dinleme, yazma ve konuşmada 5.0, okumada 4.0’a karşılık gelir; kabul edilen sınavlar arasında IELTS General Training, CELPIP General ve PTE Core yer alır. Akademik IELTS bu amaçla kabul edilmez. Sınav sonucunun başvuru sırasında iki yıldan eski olmaması gerekir.',
          'Bölüm şartı, 1 Kasım 2024 ve sonrasında öğrenim izni başvurusu yapan lisans altı (çoğunlukla kolej) öğrencileri için geçerlidir. IRCC, 2026 için uygun alanlar listesini değiştirmeyeceğini Ocak 2026’da açıkladı. Programın uygun olup olmadığı 6 haneli CIP koduna göre belirlenir; kolej programı seçerken okuldan CIP kodunu yazılı olarak isteyin.',
        ],
      },
      {
        h: 'PGWP süresi nasıl hesaplanır?',
        table: {
          head: ['Tamamlanan program', 'PGWP süresi'],
          rows: [
            ['8 aydan kısa', 'PGWP verilmez'],
            ['8 ay – 2 yıldan kısa (lisans altı)', 'Program süresi kadar'],
            ['2 yıl ve üzeri', '3 yıl'],
            ['Yüksek lisans (en az 8 ay)', '3 yıl'],
            ['Birden fazla uygun program', 'Süreler toplanabilir, en fazla 3 yıl'],
          ],
        },
        p: ['Eylül 2024 ve sonrasında başlayan programlarda programın en az yarısının Kanada’da sınıfta tamamlanması gerekir; Kanada dışından online okunan süreler PGWP süresinden düşülür.'],
      },
      {
        h: 'Başvuru adımları',
        list: [
          '**Son dönem:** Dil sınavına girin; sonuç başvuru sırasında hazır olmalıdır.',
          '**Mezuniyet onayı:** Okul, programı tamamladığınızı gösteren resmî yazıyı veya final transkripti verir; 180 günlük süre bu tarihte başlar.',
          '**Online başvuru:** IRCC hesabından PGWP başvurusu yapılır; 255 CAD ücret ödenir. Kanada dışından başvuranlar için biyometri gerekebilir.',
          '**Bekleme dönemi:** Öğrenim izniniz geçerliyken Kanada içinden başvurduysanız, belirli koşullarla karar beklerken tam zamanlı çalışmaya başlayabilirsiniz.',
          '**Karar:** İzin, pasaportunuzun geçerlilik süresini aşamaz; pasaportunuzun uzun süreli geçerli olduğundan emin olun.',
        ],
      },
      {
        h: 'PGWP ve kalıcı oturum ilişkisi',
        p: [
          'PGWP kendi başına kalıcı oturum hakkı vermez; ancak bu izinle edinilen tam zamanlı ve nitelikli iş deneyimi, Express Entry sistemindeki Canadian Experience Class (CEC) programı için temel şarttır. CEC için genellikle son üç yıl içinde Kanada’da en az bir yıllık nitelikli iş deneyimi gerekir. Eyaletlerin kendi göçmenlik programları (PNP) da uluslararası mezunlara özel kanallar sunabilir.',
          'Bu nedenle PGWP süresini planlarken iki noktaya dikkat edin: birincisi, 8 aylık bir programla alınan kısa bir PGWP, bir yıllık iş deneyimi biriktirmek için yeterli olmayabilir; ikincisi, Kanada’nın göçmenlik hedefleri ve Express Entry çekiliş kriterleri yıldan yıla değiştiği için hiçbir program kalıcı oturumu garanti etmez. Eğitim tercihini yalnızca göçmenlik hedefine bağlamak yerine, Türkiye’ye dönüş senaryosunda da değerli olacak bir alan seçmek en güvenli yaklaşımdır.',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'Öğrenim izninin bitiş tarihini kaçırmak: izin sona ermeden önce ya PGWP’ye başvurmalı ya da ziyaretçi statüsüne geçmelisiniz.',
          'Özel kolejlerin kamu–özel ortaklık (curriculum licensing) programlarına kaydolmak; bu programların çoğu PGWP’ye uygun değildir.',
          'Akademik IELTS sonucu yüklemek; PGWP için General Training gerekir.',
          'Bir dönem izin almak veya yarı zamanlı okumak; tam zamanlı öğrenim şartı ihlal edilmiş olur.',
          'Pasaport süresinin kısa olması nedeniyle PGWP’nin beklenenden kısa verilmesi.',
        ],
        p: ['Kanada’da okul ve öğrenim izni süreci için [DLI ve PAL nedir?](/bilgi-bankasi/dli-pal-nedir), finansal belge için [GIC nedir?](/bilgi-bankasi/gic-nedir) rehberlerimize, program seçenekleri için [Kanada’da yüksek lisans](/yurtdisi-yuksek-lisans/kanada) ve [Kanada ülke sayfamıza](/ulkeler/kanada) bakabilirsiniz.'],
      },
    ],
    seoTitle: 'PGWP Nedir? Kanada Mezuniyet Sonrası Çalışma İzni 2026',
    description: 'PGWP nedir, kimler alabilir? 8 ay kuralı, 3 yıla kadar süre, CLB 7 ve CLB 5 dil şartı, bölüm listesi, 180 gün başvuru süresi ve 255 CAD ücret.',
    faqs: [
      { q: 'PGWP kaç yıl verilir?', a: 'PGWP süresi programın süresine bağlıdır. 8 ay ile 2 yıl arası lisans altı programlarda program süresi kadar, 2 yıl ve üzeri programlarda ve en az 8 aylık yüksek lisans programlarında 3 yıl verilir.' },
      { q: 'PGWP için iş teklifi gerekir mi?', a: 'Hayır. PGWP açık bir iş iznidir; iş teklifi olmadan başvurulur ve Kanada’da herhangi bir işverenle çalışmaya izin verir.' },
      { q: 'PGWP için hangi dil sınavı kabul edilir?', a: 'IELTS General Training, CELPIP General ve PTE Core gibi IRCC’nin kabul ettiği sınavlar geçerlidir; Akademik IELTS kabul edilmez. Üniversite mezunları için CLB 7, kolej mezunları için CLB 5 gerekir.' },
      { q: 'Özel kolejde okursam PGWP alabilir miyim?', a: 'Bazı özel kurumlar PGWP’ye uygundur, ancak kamu kolejlerinin müfredatını lisansla kullanan özel kolej programlarının çoğu uygun değildir. Kayıttan önce okulun ve programın PGWP’ye uygunluğunu IRCC’nin DLI listesinden kontrol edin.' },
      { q: 'PGWP ikinci kez alınabilir mi?', a: 'Hayır. PGWP hayatta yalnızca bir kez verilir. İlk PGWP’den sonra ikinci bir program okuyan öğrenci yeni bir PGWP alamaz; bu nedenle programların sırası planlanırken bu kural dikkate alınmalıdır.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'dli-pal-nedir',
    title: 'DLI ve PAL nedir? Kanada öğrenim izni için okul ve eyalet onayı',
    group: 'Vize & Belgeler',
    countries: ['kanada'],
    summary: 'Kanada’da DLI (onaylı okul) ve PAL/TAL (eyalet onay mektubu) nedir, 2026 öğrenim izni kotası, kimler PAL’den muaf ve başvuru sırası.',
    facts: [
      { label: '2026 öğrenim izni hedefi', value: '408.000 (155.000 yeni gelen)' },
      { label: 'PAL’den muaf (2026)', value: 'Kamu DLI’larında yüksek lisans ve doktora' },
      { label: 'Öğrenim izni ücreti', value: '150 CAD + 85 CAD biyometri' },
      { label: 'Kampüs dışı çalışma', value: 'Dönem içinde haftada 24 saat' },
    ],
    sections: [
      {
        h: 'DLI ne demek?',
        p: [
          'DLI (Designated Learning Institution), eyalet veya bölge yönetimi tarafından uluslararası öğrenci kabul etmek üzere onaylanmış eğitim kurumudur. İlk, orta ve lise düzeyindeki okullar otomatik olarak DLI sayılır; ancak lise sonrası eğitimde (kolej, üniversite, dil okulu) yalnızca IRCC’nin DLI listesinde yer alan kurumlar öğrenim izni (study permit) için kabul mektubu verebilir. Her DLI’nın kendine ait bir numarası vardır ve bu numara öğrenim izni başvurusunda zorunludur.',
          'DLI listesinde her okulun yanında PGWP’ye uygun olup olmadığı da yazar. Bir okulun DLI olması, mezuniyet sonrası çalışma izni vereceği anlamına gelmez; özellikle özel kolejlerde bu ayrım çok önemlidir. Ayrıntılar için [PGWP nedir?](/bilgi-bankasi/pgwp-nedir) rehberimize bakın.',
        ],
      },
      {
        h: 'PAL / TAL ne demek?',
        p: [
          'PAL (Provincial Attestation Letter) veya bölgeler için TAL (Territorial Attestation Letter), öğrencinin o eyaletin uluslararası öğrenci kotası içinde yer aldığını gösteren onay mektubudur. Kanada, 2024’ten itibaren öğrenim izni başvurularına ulusal bir üst sınır getirdi; IRCC her yıl eyaletlere başvuru kontenjanı dağıtıyor, eyaletler de bu kontenjanı okullara paylaştırıyor. Okul, öğrenciye kabul mektubuyla birlikte (veya sonrasında) PAL düzenler.',
          'PAL gerektiren bir başvuruda PAL olmadan yapılan öğrenim izni başvurusu genellikle işleme alınmadan iade edilir. Québec’te ise PAL yerine Québec Kabul Belgesi (CAQ) süreci, eyaletin onayını da içerecek şekilde işler.',
        ],
      },
      {
        h: '2026 kotası ve muafiyetler',
        p: ['IRCC’nin Kasım 2025’te açıkladığı rakamlara göre 2026 için 408.000 öğrenim izni verilmesi hedefleniyor; bunun 155.000’i yeni gelen öğrenciler, 253.000’i uzatma ve geri dönen öğrenciler içindir.'],
        table: {
          head: ['Grup', 'PAL/TAL gerekir mi?', '2026 hedefi'],
          rows: [
            ['Kamu DLI’larında yüksek lisans ve doktora', 'Hayır (1 Ocak 2026’dan itibaren)', '49.000'],
            ['Anaokulu – 12. sınıf öğrencileri', 'Hayır', '115.000'],
            ['Aynı okulda, aynı seviyede izin uzatanlar', 'Hayır', 'Diğer muaflar içinde'],
            ['Lisans, kolej diploması, graduate certificate', 'Evet', 'PAL gerektiren 180.000 içinde'],
            ['Özel kurumlarda yüksek lisans', 'Evet', 'PAL gerektiren grup içinde'],
          ],
        },
      },
      {
        h: 'Öğrenim izni başvuru sırası',
        list: [
          '**Okul ve program seçimi:** DLI listesinden okulun numarasını ve PGWP uygunluğunu kontrol edin.',
          '**Kabul mektubu:** Okuldan resmî kabul mektubu (Letter of Acceptance) alın.',
          '**PAL:** Gerekliyse okul veya eyalet üzerinden PAL’inizi alın; PAL’in geçerlilik süresi sınırlıdır.',
          '**Finansal belgeler:** Québec dışı için 1 Eylül 2026’dan itibaren tek kişi için 23.448 CAD yaşam gideri, artı ilk yıl harcı ve yol masrafı. Bkz. [GIC nedir?](/bilgi-bankasi/gic-nedir).',
          '**Online başvuru:** IRCC hesabından başvuru, 150 CAD öğrenim izni ücreti ve 85 CAD biyometri ücreti.',
          '**Biyometri ve sağlık muayenesi:** Türkiye’deki VFS Global merkezlerinde biyometri; gerekirse IRCC onaylı doktorda sağlık muayenesi.',
          '**Onay:** Giriş izni yazısı (Port of Entry Letter) ve vize gelir; öğrenim izni Kanada’ya girişte havalimanında düzenlenir.',
        ],
      },
      {
        h: 'Study plan (niyet mektubu) ve ret riskleri',
        p: [
          'Kanada öğrenim izni başvurularında en sık görülen ret gerekçeleri, öğrencinin eğitimden sonra ülkeyi terk edeceğine ikna olunamaması, programın öğrencinin geçmişiyle bağlantısız görünmesi ve finansal kaynağın yeterince açıklanmamasıdır. Bu yüzden başvuruya eklenen study plan (eğitim planı), dosyanın en kritik belgelerinden biridir.',
          'İyi bir study plan; neden bu programı ve bu okulu seçtiğinizi, programın önceki eğitiminiz ve iş deneyiminizle nasıl ilişkili olduğunu, Türkiye’de benzer bir programın neden size aynı faydayı sağlamayacağını, eğitim masraflarının nasıl karşılanacağını ve mezuniyet sonrası kariyer planınızı açık ve somut bir şekilde anlatır. Özellikle lisans mezunu olup kolej programına başvuran öğrencilerin bu tercihin mantığını iyi açıklaması gerekir; görevliler “geri adım” gibi görünen eğitim tercihlerini daha dikkatli inceler.',
        ],
      },
      {
        h: 'Kanada’da öğrenciyken çalışma',
        p: [
          'Öğrenim izni sahibi tam zamanlı öğrenciler, akademik dönem içinde kampüs dışında haftada 24 saate kadar, planlanmış tatillerde (yaz ve kış arası gibi) tam zamanlı çalışabilir. Kampüs içinde çalışma için ayrı bir saat sınırı uygulanmaz. Dil okulu öğrencileri ve hazırlık programındaki öğrenciler ise genellikle çalışma hakkına sahip değildir.',
          'Co-op (staj) bölümleri programın parçası olduğu için ayrı bir co-op iş izni gerektirir; bu izin genellikle öğrenim izniyle birlikte verilir. Çalışma gelirine güvenerek bütçe yapmak yerine, bu geliri ek destek olarak görmek daha gerçekçidir.',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'PAL’in geçerlilik süresini kaçırmak veya PAL olmadan başvurmak.',
          'Okul değiştirmeyi PAL’in bağlı olduğu eyaletten bağımsız düşünmek; farklı eyalete geçişte yeni PAL gerekebilir.',
          'DLI olan ama PGWP’ye uygun olmayan bir programa kaydolmak.',
          'Finansal belgelerde paranın kaynağını açıklamamak; büyük ve ani yatırılan tutarlar açıklama gerektirir.',
          'Niyet mektubunda (study plan) programın kariyer hedefiyle bağlantısını kurmamak. Bkz. [örnek niyet mektubu](/kaynaklar/ornek-niyet-mektubu).',
        ],
        p: ['Kanada’da lisans ve yüksek lisans seçenekleri için [Kanada lisans programları](/lisans-programlari/kanada) sayfamıza, başvuru ve vize dosyası için [vize danışmanlığı](/hizmetler/vize-danismanligi) sayfamıza bakabilirsiniz.'],
      },
    ],
    seoTitle: 'DLI ve PAL Nedir? Kanada Öğrenim İzni 2026 Kota Rehberi',
    description: 'Kanada’da DLI ve PAL nedir? 2026 öğrenim izni kotası, PAL’den muaf olan yüksek lisans öğrencileri, başvuru sırası, ücretler ve haftalık 24 saat çalışma.',
    faqs: [
      { q: 'PAL nasıl alınır?', a: 'PAL’i öğrenci doğrudan başvurarak değil, kabul aldığı okul aracılığıyla alır. Okul, eyaletin kendisine ayırdığı kontenjan içinden öğrenciye PAL düzenler; bazı eyaletlerde öğrencinin depozito ödemesi veya kabulü onaylaması gerekir.' },
      { q: 'Yüksek lisans için PAL gerekir mi?', a: '1 Ocak 2026’dan itibaren kamu DLI’larında yüksek lisans ve doktora programlarına başvuran öğrenciler PAL/TAL’den muaftır. Özel kurumlardaki yüksek lisans programları ve graduate certificate gibi lisans sonrası sertifika programları için PAL gerekmeye devam eder.' },
      { q: 'DLI numarası nerede yazar?', a: 'DLI numarası okulun kabul mektubunda ve IRCC’nin resmî DLI listesinde yer alır. Öğrenim izni başvurusunda bu numaranın eksiksiz girilmesi gerekir.' },
      { q: 'Okul değiştirirsem yeni PAL gerekir mi?', a: 'Aynı eyalet içinde okul değiştirmek için öğrenim izni sahibinin IRCC’ye bildirim yapması gerekir. Farklı bir eyalete veya farklı bir eğitim seviyesine geçişte ise yeni bir öğrenim izni başvurusu ve buna bağlı olarak yeni bir PAL gerekebilir; geçişten önce güncel kuralları kontrol edin.' },
      { q: 'Kanada öğrenim izni ne kadar sürede çıkar?', a: 'İşlem süresi başvurulan ülkeye ve döneme göre değişir; IRCC güncel ortalama süreleri kendi sitesinde yayımlar. Eylül başlangıçlı programlar için başvurunun bahar aylarında yapılması, yaz yoğunluğundan etkilenmemek için önerilir.' },
      { q: 'Kanada’da öğrenciyken haftada kaç saat çalışılabilir?', a: 'Tam zamanlı öğrenciler akademik dönem içinde kampüs dışında haftada 24 saate kadar, planlanmış tatillerde tam zamanlı çalışabilir. Kampüs içi çalışma için ayrı bir saat sınırı yoktur.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'gic-nedir',
    title: 'GIC nedir? Kanada öğrenim izni için finansal yeterlilik',
    group: 'Vize & Belgeler',
    countries: ['kanada'],
    summary: 'GIC (Guaranteed Investment Certificate) nedir, 2026’da ne kadar yatırılır, nasıl açılır, para nasıl geri ödenir ve diğer finansal belgelerle farkı.',
    facts: [
      { label: 'Yaşam gideri şartı (1 Eylül 2026’dan itibaren)', value: '23.448 CAD (tek kişi, Québec dışı)' },
      { label: 'Önceki tutar', value: '22.895 CAD' },
      { label: 'Ek aile üyesi', value: 'Kişi başı yaklaşık 6.318 CAD' },
      { label: 'Zorunlu mu?', value: 'Hayır; kabul edilen kanıtlardan biri' },
    ],
    sections: [
      {
        h: 'GIC ne demek?',
        p: [
          'GIC (Guaranteed Investment Certificate), Kanada bankalarında açılan, anaparası garanti edilen vadeli bir yatırım hesabıdır. Uluslararası öğrenciler için sunulan özel “öğrenci GIC” programlarında öğrenci, Kanada’ya gelmeden önce ilk yılın yaşam giderini bu hesaba yatırır; banka da IRCC’ye sunulmak üzere bir sertifika (GIC sertifikası) düzenler. Öğrenci Kanada’ya vardıktan sonra para bir plan dahilinde kendisine geri ödenir.',
          'IRCC açısından GIC, öğrencinin ilk yıl yaşam giderini karşılayacak paranın gerçekten var olduğunu ve Kanada’da erişilebilir olduğunu gösteren güçlü bir kanıttır. Kasım 2024’te hızlı başvuru kanalı SDS’nin kapatılmasından sonra GIC zorunlu olmaktan çıktı; ancak finansal yeterliliği en net gösteren belgelerden biri olmaya devam ediyor.',
        ],
      },
      {
        h: '2026’da ne kadar para gösterilmeli?',
        p: ['IRCC, Québec dışındaki öğrenim izni başvuruları için yaşam gideri tutarını 1 Eylül 2026’dan itibaren güncelledi. Bu tutar ilk yıl harcına ve yol masrafına **ek olarak** gösterilir.'],
        table: {
          head: ['Aile büyüklüğü', 'Yaşam gideri (1 Eylül 2026’dan itibaren)'],
          rows: [
            ['1 kişi (öğrenci)', '23.448 CAD'],
            ['2 kişi', '29.192 CAD'],
            ['3 kişi', '35.888 CAD'],
            ['Her ek kişi', 'Yaklaşık +6.318 CAD'],
          ],
        },
      },
      {
        h: 'GIC nasıl açılır?',
        list: [
          '**Banka seçimi:** Öğrenci GIC programı sunan Kanada bankalarından birini seçin. Programlar, ücretler ve geri ödeme planları bankadan bankaya değişir.',
          '**Online başvuru:** Pasaport, kabul mektubu ve iletişim bilgileriyle bankanın online formunu doldurun; banka size bir hesap ve havale talimatı verir.',
          '**Havale:** Tutarı, banka işlem ücretiyle birlikte Türkiye’deki bankanızdan uluslararası havaleyle gönderin. Gönderen kişi öğrenci veya ebeveyn olabilir; havale açıklamasına bankanın verdiği referans numarası yazılmalıdır.',
          '**Sertifika:** Para hesaba geçtikten sonra banka, yatırılan tutarı gösteren GIC sertifikasını veya onay yazısını düzenler. Bu belge öğrenim izni başvurusuna yüklenir.',
          '**Kanada’da aktivasyon:** Vardıktan sonra kimlik doğrulamasıyla hesabı aktif edersiniz.',
        ],
      },
      {
        h: 'Para nasıl geri ödenir?',
        p: [
          'Öğrenci GIC programlarında genellikle ilk tutarın bir kısmı varıştan hemen sonra öğrencinin Kanada’daki hesabına aktarılır; kalan tutar 10–12 ay boyunca aylık eşit taksitlerle ödenir. Böylece öğrencinin ilk yıl boyunca düzenli bir yaşam gideri geliri olur. Taksit planı ve faiz oranı bankaya göre değişir.',
          'Öğrenim izni reddedilirse veya öğrenci Kanada’ya hiç gitmezse banka, ret mektubu gibi belgelerle parayı işlem ücretini düşerek iade eder. İade süresi birkaç haftayı bulabilir; bu nedenle aile bütçesinde bu ihtimali hesaba katın.',
        ],
      },
      {
        h: 'Masraflar ve faiz',
        p: [
          'Öğrenci GIC programlarında bankalar genellikle hesap açılışı ve yönetimi için sabit bir işlem ücreti alır; bu ücret bankadan bankaya değişir ve yatırılacak tutara eklenerek gönderilir. Türkiye’deki bankanızın uluslararası havale masrafı ve olası aracı banka kesintileri de ayrıca hesaba katılmalıdır. Hesaba eksik tutar geçerse banka sertifikayı düzenlemez veya ek ödeme ister.',
          'GIC hesabı küçük de olsa faiz getirir; faiz oranı ve ödenme şekli bankanın o dönemki koşullarına bağlıdır. Ancak GIC bir yatırım aracı olarak değil, vize sürecinde finansal güvence olarak görülmelidir. Döviz kuru riskini azaltmak isteyen aileler, tutarı vize başvurusundan birkaç hafta önce ve tek seferde göndermeyi tercih eder.',
        ],
      },
      {
        h: 'GIC mi, banka hesabı mı?',
        table: {
          head: ['Kanıt türü', 'Avantaj', 'Dikkat edilmesi gereken'],
          rows: [
            ['GIC', 'Paranın Kanada’da hazır olduğunu net gösterir', 'Para kilitlenir, aylık taksitle geri alınır'],
            ['Türkiye’deki banka hesabı', 'Para ailede kalır, esneklik', 'Son 4–6 ayın dökümü, paranın kaynağı açıklanmalı'],
            ['Burs veya eğitim kredisi', 'Resmî kurum belgesi güçlü kanıttır', 'Tutar ve süre net yazmalı'],
            ['Harcın peşin ödendiğini gösteren makbuz', 'Gösterilecek tutarı azaltır', 'Okulun resmî makbuzu olmalı'],
          ],
        },
        p: ['Pratikte güçlü dosyalar bu kanıtları birleştirir: ilk yıl harcı okula ödenmiş, yaşam gideri GIC ile gösterilmiş ve ailenin gelirini gösteren belgeler eklenmiş olur. Banka ve sponsor yazıları için [örnek banka mektubu](/kaynaklar/ornek-banka-mektubu) ve [örnek sponsor mektubu](/kaynaklar/ornek-sponsor-mektubu) sayfalarımıza bakabilirsiniz.'],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'Eski tutarla (22.895 CAD) GIC açmak: 1 Eylül 2026 ve sonrasındaki başvurular yeni tutarla değerlendirilir.',
          'Banka işlem ücretini hesaba katmadan tam tutarı göndermek; hesaba eksik para geçer.',
          'Havale açıklamasına referans numarasını yazmamak; para eşleşmez ve gecikir.',
          'GIC’yi tek kanıt sanmak; harcın nasıl ödeneceği ve sonraki yılların finansmanı da açıklanmalıdır.',
        ],
        p: ['Kanada öğrenim izni sürecinin diğer adımları için [DLI ve PAL nedir?](/bilgi-bankasi/dli-pal-nedir) rehberimize, genel bütçe için [yurt dışı bütçe planlama](/bilgi-bankasi/yurtdisi-butce-planlama) sayfamıza, ülke bilgileri için [Kanada](/ulkeler/kanada) sayfamıza bakabilirsiniz.'],
      },
    ],
    seoTitle: 'GIC Nedir? Kanada Öğrenci GIC Tutarı 2026: 23.448 CAD',
    description: 'GIC nedir, ne kadar yatırılır? 1 Eylül 2026’dan itibaren 23.448 CAD yaşam gideri şartı, GIC açma adımları, geri ödeme planı ve banka hesabıyla farkı.',
    faqs: [
      { q: 'GIC zorunlu mu?', a: 'Hayır. SDS kanalının Kasım 2024’te kapatılmasından sonra GIC zorunlu değildir; finansal yeterliliği gösteren kabul edilmiş kanıtlardan biridir. Banka hesap dökümü, burs belgesi veya eğitim kredisi gibi diğer kanıtlar da kullanılabilir.' },
      { q: 'Kanada için 2026’da ne kadar para göstermek gerekir?', a: '1 Eylül 2026 ve sonrasında yapılan başvurularda Québec dışındaki tek bir öğrenci için ilk yıl yaşam gideri 23.448 CAD’dir. Bu tutara ilk yıl harcı ve yol masrafı ayrıca eklenir.' },
      { q: 'Vize reddedilirse GIC parası geri alınır mı?', a: 'Evet. Öğrenim izni reddedilirse ret yazısıyla bankaya başvurularak para, işlem ücreti düşülerek iade edilir. İade süresi bankaya göre birkaç hafta sürebilir.' },
      { q: 'GIC’ye parayı ebeveyn yatırabilir mi?', a: 'Evet, havale ebeveyn hesabından yapılabilir. Ancak GIC hesabı öğrenci adına açılır ve paranın kaynağının vize dosyasında ebeveyn gelir belgeleriyle açıklanması gerekir.' },
      { q: 'GIC parası ne zaman kullanılabilir?', a: 'Para, Kanada’ya vardıktan ve hesap kimlik doğrulamasıyla aktif edildikten sonra kullanılabilir. Genellikle ilk tutar varıştan kısa süre sonra, kalan tutar ise aylık taksitlerle öğrencinin Kanada’daki hesabına aktarılır.' },
      { q: 'Québec için tutar farklı mı?', a: 'Evet. Québec, öğrenciler için kendi finansal yeterlilik tutarlarını belirler ve CAQ sürecinde bu tutarlara göre değerlendirme yapar. Québec’teki bir okula gidecekseniz eyaletin güncel tutarlarını ayrıca kontrol edin.' },
    ],
    updated: '2026-10-24',
  },
  /* ================= İRLANDA ================= */
  {
    slug: 'irlanda-stamp-2-ilep',
    title: 'İrlanda Stamp 2 ve ILEP nedir? Dil okulu ve çalışma hakkı',
    group: 'Work and Study',
    program: 'work-study',
    countries: ['irlanda'],
    summary: 'İrlanda’da Stamp 2 oturum izni, ILEP listesi ve TrustEd Ireland geçişi: 25 hafta kuralı, finansal şart, çalışma saatleri ve IRP kaydı.',
    facts: [
      { label: 'Asgari dil programı', value: '25 hafta, haftada en az 15 saat' },
      { label: 'Çalışma', value: 'Dönem içinde 20, tatillerde 40 saat/hafta' },
      { label: 'Tatil dönemleri', value: '1 Haziran – 30 Eylül ve 15 Aralık – 15 Ocak' },
      { label: 'Finansal şart (8 aya kadar)', value: 'Ayda €833 veya toplam €6.665' },
      { label: 'IRP kayıt ücreti', value: '€300' },
    ],
    sections: [
      {
        h: 'Stamp 2 ne demek?',
        p: [
          'Stamp 2, İrlanda’da tam zamanlı bir programda okuyan Avrupa Birliği ve Avrupa Ekonomik Alanı dışından öğrencilere verilen oturum izni türüdür. İrlanda’ya vardıktan sonra göçmenlik kaydı (registration) yapılır ve öğrenciye IRP (Irish Residence Permit) kartı verilir; kart üzerinde izin türü “Stamp 2” olarak yazar. Stamp 2, belirli kurallar dahilinde çalışma hakkı da verdiği için İrlanda’yı Türk öğrenciler arasında en popüler work and study ülkelerinden biri yapar.',
          'Türk vatandaşları İrlanda’ya 90 günden uzun eğitim için gitmeden önce Türkiye’den uzun dönem öğrenci vizesi (D tipi study visa) almak zorundadır. Vize başvurusu AVATS adlı online sistemden yapılır, belgeler başvuru merkezine teslim edilir. Vize ile ülkeye giriş yapıldıktan sonra Stamp 2 kaydı yapılır.',
        ],
      },
      {
        h: 'ILEP ve TrustEd Ireland nedir?',
        p: [
          'ILEP (Interim List of Eligible Programmes), Stamp 2 iznine uygun dil ve yükseköğretim programlarının resmî listesidir. Dil okulunun bir programının bu listede yer alması, o program için öğrenci vizesi ve Stamp 2 alınabileceği anlamına gelir. Listede olmayan bir dil okuluna kaydolarak uzun dönem öğrenci vizesi alınamaz.',
          'İrlanda, dil okulları için ILEP’ten, kalite kurumu QQI’nin yürüttüğü **TrustEd Ireland** (IEM) sistemine geçiş sürecindedir. Yetkilendirilen ilk dil okulları 2026 yazında açıklandı; geçiş tamamlanana kadar ILEP referans liste olarak kullanılmaya devam ediyor. Bazı okullar son güncellemelerde listeden çıkarıldığı için kayıt öncesinde okulun güncel ILEP dosyasında ve TrustEd Ireland listesinde yer aldığını mutlaka kontrol edin.',
        ],
      },
      {
        h: 'Dil okulu öğrencileri için şartlar',
        table: {
          head: ['Şart', 'Kural'],
          rows: [
            ['Program süresi', 'En az 25 hafta, ILEP’te yer alan program'],
            ['Ders saati', 'Haftada en az 15 saat gündüz dersi'],
            ['Devam', 'En az %85 devam zorunluluğu'],
            ['Sınav', 'Program sonunda tanınmış bir İngilizce sınavı'],
            ['Okul ücreti', '€6.000’e kadar ise tamamı, üzerindeyse en az €6.000 peşin ödenmeli'],
            ['Finansal şart (30 Haziran 2025’ten beri)', '8 aya kadar programlarda ayda €833 veya toplam €6.665 (hangisi düşükse)'],
            ['Sağlık sigortası', 'Özel sağlık sigortası zorunlu'],
            ['Azami süre', 'Dil eğitimi toplamda en fazla 2 yıl (8’er aylık en fazla üç izin)'],
          ],
        },
        p: ['Finansal yeterliliğin, başvuru sırasında hemen erişilebilir durumda olduğunu gösteren banka belgeleriyle kanıtlanması gerekir. Tutarlar zaman zaman güncellendiği için başvuru öncesinde İrlanda göçmenlik idaresinin (ISD) güncel sayfası kontrol edilmelidir.'],
      },
      {
        h: 'Çalışma kuralları',
        list: [
          '**Dönem içinde:** Haftada en fazla 20 saat.',
          '**Resmî tatil dönemlerinde:** 1 Haziran – 30 Eylül ve 15 Aralık – 15 Ocak arasında haftada en fazla 40 saat.',
          '**Sınırlar haftalıktır:** Saatler ortalama alınarak değil, her hafta ayrı ayrı uygulanır; birden fazla işte çalışılsa da toplam sınır geçerlidir.',
          '**Serbest çalışma yasak:** Stamp 2 sahipleri serbest meslek (self-employment) yapamaz.',
          '**Vergi ve kayıt:** Çalışmaya başlamadan önce PPS numarası alınmalı ve vergi kaydı (Revenue) yapılmalıdır.',
        ],
        p: ['Çalışma hakkı, dil eğitimi masraflarına katkı sağlar; ancak vize dosyasında finansal yeterlilik bu gelire dayanamaz. İş bulma süreci için [yurt dışında part-time iş bulma](/bilgi-bankasi/yurtdisinda-part-time-is-bulma) rehberimize bakabilirsiniz.'],
      },
      {
        h: 'Varış sonrası: IRP kaydı',
        list: [
          'İrlanda’ya vardıktan sonra en kısa sürede göçmenlik kaydı için randevu alın; Dublin’de kayıt merkezi üzerinden, diğer bölgelerde yerel göçmenlik ofisleri aracılığıyla yapılır.',
          'Kayıt için pasaport, okul kayıt yazısı, okul ücretinin ödendiğini gösteren belge, sağlık sigortası poliçesi ve finansal belgeler götürülür.',
          '€300 kayıt ücreti ödenir; IRP kartı birkaç hafta içinde posta ile gönderilir.',
          'Program uzatmalarında ve yeni dönemlerde izin yenilemesi online sistem üzerinden yapılır.',
        ],
      },
      {
        h: 'Dil okulundan yükseköğretime geçiş',
        p: [
          'İrlanda’da dil eğitiminden sonra bir yükseköğretim programına (lisans, yüksek lisans veya diploma) geçen öğrenciler Stamp 2 ile kalmaya devam edebilir. 2026 için, dil iznini bitiren ve sonbaharda başlayacak bir yükseköğretim programına kayıt olan bazı öğrencilere, yeni programa kadar köprü niteliğinde geçici bir Stamp 2 izni tanındı. Yükseköğretim öğrencileri için finansal şart yıllık €10.000’dir.',
          'İrlanda’da Level 8 (lisans, honours) veya Level 9 (yüksek lisans) bir programdan mezun olanlar, Third Level Graduate Programme kapsamında **Stamp 1G** izniyle haftada 40 saate kadar çalışarak iş arayabilir. Ayrıntılar ve seçenekler için [İrlanda’da work and study](/work-and-study/irlanda), [İrlanda dil okulları](/yurtdisi-dil-okullari/irlanda) ve [work and study nedir?](/bilgi-bankasi/work-and-study-nedir) sayfalarımıza bakabilirsiniz.',
        ],
      },
      {
        h: 'Sık yapılan hatalar',
        list: [
          'ILEP’te yer almayan veya listeden çıkarılmış bir okula kaydolmak.',
          '25 haftadan kısa bir programla Stamp 2 beklemek; kısa programlar çalışma hakkı vermez.',
          'Devam oranını %85’in altına düşürmek; izin yenilemesi reddedilebilir.',
          'Dublin’de konaklamayı geç ayarlamak; ilk haftalar için okul aracılığıyla yer ayırtmak önerilir: [öğrenci konaklama](/ogrenci-konaklama).',
        ],
      },
    ],
    seoTitle: 'İrlanda Stamp 2 ve ILEP Nedir? Dil Okulu ve Çalışma 2026',
    description: 'İrlanda Stamp 2 nedir? ILEP ve TrustEd Ireland, 25 hafta kuralı, €6.665 finansal şart, haftada 20/40 saat çalışma, IRP kaydı ve Stamp 1G geçişi.',
    faqs: [
      { q: 'İrlanda’da dil okuluyla çalışılabilir mi?', a: 'Evet. ILEP’te yer alan en az 25 haftalık bir dil programına kayıtlı Stamp 2 sahipleri dönem içinde haftada 20, 1 Haziran – 30 Eylül ve 15 Aralık – 15 Ocak tatil dönemlerinde haftada 40 saate kadar çalışabilir.' },
      { q: 'İrlanda dil okulu vizesi için ne kadar para gerekir?', a: '30 Haziran 2025’ten bu yana 8 aya kadar programlar için ayda €833 veya toplam €6.665 (hangisi düşükse) gösterilmesi gerekir. Buna ek olarak okul ücretinin €6.000’e kadar olan kısmının peşin ödenmiş olması gerekir.' },
      { q: 'ILEP listesi nereden kontrol edilir?', a: 'ILEP, İrlanda göçmenlik idaresinin (ISD) sitesinde Excel dosyası olarak yayımlanır. Dil okullarının TrustEd Ireland sistemine geçişi sürdüğü için QQI’nin yetkilendirilmiş okullar listesini de kontrol etmeniz önerilir.' },
      { q: 'İrlanda’da dil eğitimi en fazla kaç yıl sürebilir?', a: 'Dil eğitimi için Stamp 2 toplamda en fazla 2 yıl (8’er aylık en fazla üç izin) verilir. Sonrasında İrlanda’da kalmak isteyen öğrencilerin bir yükseköğretim programına geçmesi gerekir.' },
      { q: 'Türk vatandaşları İrlanda öğrenci vizesi almak zorunda mı?', a: 'Evet. Türk vatandaşlarının İrlanda’da 90 günden uzun eğitim için Türkiye’den uzun dönem öğrenci vizesi alması gerekir. Vize başvurusu AVATS online sistemi üzerinden yapılır.' },
    ],
    updated: '2026-10-24',
  },
  /* ================= AVUSTRALYA ================= */
  {
    slug: 'cricos-nedir',
    title: 'CRICOS nedir? Avustralya’da kayıtlı okul ve program kodu',
    group: 'Vize & Belgeler',
    countries: ['avustralya'],
    summary: 'CRICOS kodu nedir, nasıl kontrol edilir, Student vizesi (subclass 500), CoE, ESOS güvenceleri ve 2026 öğrenci kotasıyla ilişkisi.',
    facts: [
      { label: 'Açılımı', value: 'Commonwealth Register of Institutions and Courses for Overseas Students' },
      { label: 'Student vizesi', value: 'Subclass 500 (yalnızca CRICOS’lu programlar)' },
      { label: 'Çalışma hakkı', value: 'Dönem içinde iki haftada 48 saat' },
      { label: '2026 ulusal planlama seviyesi', value: '295.000 yeni uluslararası öğrenci' },
    ],
    sections: [
      {
        h: 'CRICOS ne demek?',
        p: [
          'CRICOS (Commonwealth Register of Institutions and Courses for Overseas Students), Avustralya hükümetinin uluslararası öğrencilere eğitim vermeye yetkili kurumları ve programları kaydettiği resmî veri tabanıdır. Avustralya’da Student vizesiyle (subclass 500) okunacak her program CRICOS’a kayıtlı olmalıdır; kayıtlı olmayan bir programa öğrenci vizesi verilmez.',
          'CRICOS’ta iki tür kod vardır: kurumun **sağlayıcı kodu** (provider code, örneğin beş rakam ve bir harften oluşan bir kod) ve her programın **program kodu** (course code, altı rakam ve bir harf). Bu kodlar okulun sitesinde, broşürlerinde ve kabul belgelerinde yer alır. Kurumun kayıtlı olması yetmez; seçtiğiniz programın da kendi CRICOS koduna sahip olması gerekir.',
        ],
      },
      {
        h: 'CRICOS kaydının öğrenciye sağladığı güvenceler',
        list: [
          '**ESOS Yasası:** CRICOS’taki kurumlar, uluslararası öğrencileri koruyan Education Services for Overseas Students (ESOS) Act 2000 ve Ulusal Davranış Kuralları’na (National Code) tabidir.',
          '**Ücret güvencesi:** Kurum kapanır veya programı veremezse Tuition Protection Service (TPS), öğrencinin başka bir okula yerleştirilmesini veya kullanılmamış ücretin iadesini sağlar.',
          '**Yazılı sözleşme:** Okul, ücretleri, iade koşullarını ve hizmetleri açıkça yazan bir kayıt sözleşmesi vermek zorundadır.',
          '**Öğrenci desteği:** Oryantasyon, akademik destek ve şikâyet süreçleri kurallarla tanımlanmıştır.',
          '**18 yaş altı öğrenciler:** Velayet ve konaklama düzenlemelerinin okul tarafından onaylanması gerekir.',
        ],
      },
      {
        h: 'CRICOS kodu nasıl kontrol edilir?',
        list: [
          'Hükümetin resmî CRICOS arama sitesine (cricos.education.gov.au) girin.',
          'Kurum adını veya sağlayıcı kodunu arayın; kurumun kaydının aktif olduğunu kontrol edin.',
          'Program listesinde seçtiğiniz programı bulun: program kodu, süresi, kampüsü ve toplam ücreti burada yazar.',
          'Programın süresinin (hafta cinsinden) kabul mektubundaki süreyle aynı olduğunu doğrulayın.',
          'Dil okulu (ELICOS) programlarında haftalık ders saatinin en az 20 saat olduğunu kontrol edin; Student vizesiyle okunacak ELICOS programlarında bu şarttır.',
        ],
      },
      {
        h: 'Kabulden vizeye: CoE süreci',
        table: {
          head: ['Adım', 'Açıklama'],
          rows: [
            ['1. Teklif (Letter of Offer)', 'CRICOS’lu programdan kabul ve kayıt sözleşmesi'],
            ['2. Ödeme', 'Depozito veya ilk dönem ücreti ve OSHC sağlık sigortası'],
            ['3. CoE (Confirmation of Enrolment)', 'Okulun elektronik kayıt onayı; vize başvurusunda zorunlu'],
            ['4. Student vizesi başvurusu', 'ImmiAccount üzerinden online; Genuine Student soruları, finansal ve İngilizce belgeler'],
            ['5. Biyometri ve sağlık muayenesi', 'Gerekirse onaylı merkezlerde'],
            ['6. Karar ve varış', 'Vize şartlarına (devam, ilerleme, adres bildirimi) uyum'],
          ],
        },
      },
      {
        h: 'Student vizesi (subclass 500) temel şartları',
        list: [
          '**Genuine Student (GS):** Mart 2024’ten beri başvuru formunda, eğitim amacınızı, program seçiminizi ve kişisel durumunuzu anlatan sorular cevaplanır.',
          '**Finansal yeterlilik:** Tek bir öğrenci için 12 aylık yaşam gideri 29.710 AUD; ilk yıl okul ücreti ve yol masrafları ayrıca gösterilir.',
          '**İngilizce:** Programa ve sınava göre değişen asgari puanlar; okulların kendi giriş şartları genellikle daha yüksektir.',
          '**OSHC:** Vize süresinin tamamını kapsayan zorunlu sağlık sigortası. Bkz. [OSHC nedir?](/bilgi-bankasi/oshc-nedir).',
          '**Başvuru ücreti:** 1 Temmuz 2026’dan itibaren standart Student vizesi başvuru ücreti 2.500 AUD’dir; bazı dil ve derece dışı programlar için farklı bir tutar uygulanabilir.',
        ],
        p: ['Öğrenciler dönem içinde iki haftada (fortnight) en fazla 48 saat, resmî tatillerde sınırsız çalışabilir. Programa başlamadan çalışmaya başlanamaz.'],
      },
      {
        h: 'Mezuniyet sonrası: Temporary Graduate vizesi',
        p: [
          'CRICOS’lu ve en az iki akademik yıl süren bir programı Avustralya’da tamamlayan öğrenciler, belirli şartlarla Temporary Graduate vizesine (subclass 485) başvurabilir. Lisans ve ders ağırlıklı yüksek lisans mezunlarına genellikle iki yıl, doktora mezunlarına üç yıl süre tanınır; başvuru için yaş sınırı ve İngilizce şartı vardır. Bu vizede de başvuru ücreti 1 Temmuz 2026’da artırıldı; güncel tutar Home Affairs sitesinden kontrol edilmelidir.',
          'Bu hakkın doğabilmesi için programın CRICOS kaydının ve süresinin “Australian Study Requirement” denilen şartı karşılaması gerekir: genellikle en az 16 aylık (iki akademik yıl), Avustralya’da yüz yüze tamamlanan bir eğitim. Kısa sertifika programları ve dil kursları bu hakkı vermez. Program seçerken bu şartı baştan kontrol etmek, mezuniyet sonrası planları güvence altına alır.',
        ],
      },
      {
        h: '2026–2027 öğrenci kotası',
        p: [
          'Avustralya hükümeti, uluslararası öğrenci sayısını yönetmek için “ulusal planlama seviyesi” (National Planning Level) uygular. 2026 için bu seviye 295.000 yeni uluslararası öğrenci olarak belirlendi ve 2027 için de aynı seviyede tutulduğu açıklandı. Her kurum kendisine ayrılan payı aşmaya yaklaştığında vize işlemleri yavaşlayabilir.',
          'Pratik sonucu şudur: popüler üniversitelerde ve programlarda başvuruyu erken yapmak, CoE’yi erken almak ve vize dosyasını eksiksiz hazırlamak her zamankinden daha önemlidir. Program seçenekleri için [Avustralya lisans programları](/lisans-programlari/avustralya), [Avustralya’da work and study](/work-and-study/avustralya) ve [Avustralya mı İrlanda mı?](/bilgi-bankasi/avustralya-mi-irlanda-mi) sayfalarımıza bakabilirsiniz.',
        ],
      },
    ],
    seoTitle: 'CRICOS Nedir? Avustralya Öğrenci Vizesi Okul Kodu Rehberi',
    description: 'CRICOS kodu nedir, nasıl kontrol edilir? Avustralya Student vizesi (500), CoE süreci, ESOS ve TPS güvenceleri, 29.710 AUD finansal şart ve 2026 kotası.',
    faqs: [
      { q: 'CRICOS kodu olmayan bir okulda okuyabilir miyim?', a: 'Student vizesiyle okuyamazsınız. Student vizesi yalnızca CRICOS’a kayıtlı kurumların kayıtlı programları için verilir. Kısa süreli kurslar ise ziyaretçi vizesi kapsamında, belirli sınırlar içinde yapılabilir.' },
      { q: 'CRICOS ve CoE aynı şey mi?', a: 'Hayır. CRICOS, okul ve programların kayıtlı olduğu resmî veri tabanıdır. CoE (Confirmation of Enrolment) ise okulun size, CRICOS’lu bir programa kaydınızı onaylayan elektronik belgedir ve vize başvurusunda zorunludur.' },
      { q: 'Avustralya’da öğrenciyken kaç saat çalışılabilir?', a: 'Student vizesi sahipleri program dönemi içinde iki haftada en fazla 48 saat, resmî tatillerde sınırsız çalışabilir. Çalışmaya program başladıktan sonra başlanabilir.' },
      { q: 'Avustralya öğrenci vizesi ücreti ne kadar?', a: '1 Temmuz 2026’dan itibaren standart Student vizesi (subclass 500) başvuru ücreti 2.500 AUD’dir. Bazı dil ve derece dışı programlar için farklı bir tutar uygulanabilir; başvuru öncesinde Home Affairs sitesinden güncel ücreti kontrol edin.' },
      { q: 'Avustralya Student vizesi için ne kadar para göstermek gerekir?', a: 'Tek bir öğrenci için 12 aylık yaşam gideri olarak 29.710 AUD gösterilmesi gerekir. Buna ilk yıl okul ücreti ve yol masrafı eklenir; aile üyeleri için ek tutarlar istenir.' },
      { q: 'Okulum kapanırsa ne olur?', a: 'CRICOS’taki kurumlar ESOS güvencesi kapsamındadır. Kurum programı veremezse Tuition Protection Service, öğrencinin uygun başka bir programa yerleştirilmesine veya kullanılmamış ücretin iadesine yardımcı olur.' },
    ],
    updated: '2026-10-24',
  },
  {
    slug: 'oshc-nedir',
    title: 'OSHC nedir? Avustralya öğrenci sağlık sigortası',
    group: 'Vize & Belgeler',
    countries: ['avustralya'],
    summary: 'OSHC (Overseas Student Health Cover) nedir, kimler için zorunlu, ne kadar tutar, neleri kapsar, sağlayıcılar ve vize süresine göre doğru poliçe.',
    facts: [
      { label: 'Zorunluluk', value: 'Student vizesinin tüm süresi boyunca' },
      { label: 'Onaylı sağlayıcı', value: '5 kurum' },
      { label: 'Tek kişi yaklaşık maliyet', value: 'Yılda birkaç yüz AUD (sağlayıcıya göre)' },
      { label: 'Önceden var olan hastalıklar', value: 'Bazı hizmetlerde 12 ay bekleme süresi' },
    ],
    sections: [
      {
        h: 'OSHC ne demek?',
        p: [
          'OSHC (Overseas Student Health Cover), Avustralya’da Student vizesiyle (subclass 500) okuyan uluslararası öğrencilerin yaptırmak zorunda olduğu sağlık sigortasıdır. Avustralya vatandaşları kamu sağlık sistemi Medicare’den yararlanırken, uluslararası öğrenciler bu sisteme dahil değildir; OSHC bu boşluğu doldurur. Vize şartı olduğu için poliçenin vize başvurusundan önce alınması ve vize süresinin tamamını kapsaması gerekir.',
          'OSHC’yi yalnızca Avustralya Sağlık Bakanlığı ile sözleşmesi olan sağlayıcılar satabilir. Bugün bu sağlayıcılar ahm, Allianz Care, Bupa, Medibank ve nib’dir. Çoğu okul, kayıt sırasında kendi anlaşmalı sağlayıcısının poliçesini teklif eder; öğrenci başka bir onaylı sağlayıcıyı seçmekte de serbesttir.',
        ],
      },
      {
        h: 'OSHC neleri kapsar, neleri kapsamaz?',
        table: {
          head: ['Hizmet', 'Kapsam'],
          rows: [
            ['Doktor (GP) muayenesi', 'Medicare tarifesinin genellikle tamamı; doktor ek ücret alırsa fark size kalabilir'],
            ['Kamu hastanesinde yatış', 'Kapsar (çoğu poliçede ortak oda)'],
            ['Uzman doktor', 'Medicare tarifesinin büyük kısmı; ek ücret olabilir'],
            ['Ambulans', 'Acil ambulans genellikle kapsar'],
            ['Reçeteli ilaçlar', 'Poliçeye göre sınırlı tutarda kapsar'],
            ['Diş, göz, fizyoterapi', 'Standart OSHC kapsamaz; ek (extras) poliçe gerekir'],
            ['Önceden var olan hastalıklar ve hamilelik', 'Bazı hizmetlerde 12 aylık bekleme süresi'],
          ],
        },
      },
      {
        h: 'Ne kadar tutar?',
        p: [
          'OSHC ücreti poliçe türüne (tek kişi, çift, aile), süresine ve sağlayıcıya göre değişir. Tek kişilik poliçeler için yıllık ücret, sağlayıcılar arasında farklılık göstermekle birlikte genellikle birkaç yüz AUD düzeyindedir; çift ve aile poliçeleri ise belirgin şekilde daha pahalıdır. Fiyatlar genellikle her yıl güncellenir, bu nedenle vize başvurusundan hemen önce sağlayıcının sitesinden güncel teklif alınmalıdır.',
          'Bütçe hesabında OSHC’yi tek başına değil, vize ücreti ve ilk dönem okul ücretiyle birlikte düşünün: üç kalem de vize başvurusundan önce ödenir ve öğrencinin Avustralya’ya gitmeden yaptığı en büyük harcamalardır. Çok yıllı programlarda poliçenin tüm yıllar için tek seferde ödenmesi, ilk yıl bütçesini beklenenden daha yüksek gösterebilir.',
          'Ücret, poliçenin tamamı için genellikle peşin ödenir. Bazı sağlayıcılar daha kısa dönemler için ödeme imkânı sunsa da vize başvurusunda vize süresinin tamamını kapsayan bir poliçe gösterilmelidir.',
        ],
      },
      {
        h: 'Poliçe süresi nasıl belirlenir?',
        p: [
          'OSHC, programın değil **vizenin** süresini kapsamalıdır. Student vizesi genellikle programın bitiminden sonra bir süre daha geçerli verilir: 10 aydan uzun ve yılın sonunda biten programlarda vize çoğunlukla bir sonraki yılın 15 Mart’ına kadar, diğer programlarda program bitiminden itibaren yaklaşık iki aya kadar uzatılır. Poliçe başlangıcı ise Avustralya’ya varış tarihini (genellikle programdan birkaç hafta önce) kapsamalıdır.',
          'Program uzarsa, okul değişirse veya vize uzatılırsa OSHC de uzatılmalıdır. Sigortasız kalınan bir dönem, vize şartlarının ihlali sayılabilir. Pratik bir kural olarak poliçe başlangıcını uçuş tarihinize, bitişini ise okulunuzun CoE’sinde yazan program bitişine vize için eklenen süreyi ekleyerek belirleyin; okulunuz ve sağlayıcınız doğru tarihleri hesaplamanıza yardımcı olur.',
        ],
      },
      {
        h: 'Poliçe türleri ve aile üyeleri',
        p: [
          'OSHC poliçeleri genellikle üç türdür: tek kişilik (single), çift (couple) ve aile (family). Student vizesine bağlı olarak Avustralya’ya gelen eş ve çocuklar da vize süresi boyunca OSHC kapsamında olmak zorundadır; bu durumda aile poliçesi alınır. Aile poliçesinin yıllık maliyeti tek kişilik poliçenin birkaç katı olabilir ve vize dosyasında gösterilmesi gereken finansal tutar da aile üyeleri için ayrıca artar.',
          'Poliçe seçerken yalnızca fiyata değil, doğrudan faturalama yapan doktor ağının okulunuza ve evinize yakınlığına, uygulamanın kullanım kolaylığına ve hastanede yatışta oda türüne de bakın. Sağlayıcılar arasında kapsam asgari olarak benzer olsa da ek hizmetler ve geri ödeme süreçleri farklılık gösterir.',
        ],
      },
      {
        h: 'Kimler muaf?',
        list: [
          'Belçika vatandaşları (ülkeler arası sağlık anlaşması kapsamında)',
          'Norveç vatandaşları (belirli Norveç sağlık güvencesi şartlarıyla)',
          'İsveç vatandaşları (belirli İsveç kurumlarınca sigortalı olanlar)',
          'Bu istisnalar Türk vatandaşları için geçerli değildir; Türk öğrenciler OSHC yaptırmak zorundadır.',
        ],
      },
      {
        h: 'Avustralya’da OSHC nasıl kullanılır?',
        list: [
          'Vardıktan sonra sağlayıcının mobil uygulamasını kurun ve dijital üye kartınızı indirin.',
          'Sağlayıcının “direct billing” (doğrudan faturalama) yapan doktor listesinden bir GP seçin; böylece muayenede cebinizden ödeme yapmazsınız.',
          'Doktor doğrudan faturalama yapmıyorsa ücreti ödeyip faturayı uygulama üzerinden yükleyerek geri ödeme isteyin.',
          'Acil durumlarda 000’ı arayın; acil olmayan durumlar için sağlayıcının 24 saat açık sağlık danışma hattını kullanın.',
          'Ruh sağlığı desteği çoğu okulun öğrenci hizmetlerinde ücretsiz sunulur; OSHC de belirli psikolojik hizmetleri kapsayabilir.',
        ],
        p: ['Avustralya’da okul ve vize kuralları için [CRICOS nedir?](/bilgi-bankasi/cricos-nedir), ülke genelinde sigorta seçenekleri için [sağlık sigortası](/bilgi-bankasi/saglik-sigortasi) rehberlerimize, program seçenekleri için [Avustralya dil okulları](/yurtdisi-dil-okullari/avustralya) ve [Avustralya](/ulkeler/avustralya) sayfalarımıza bakabilirsiniz.'],
      },
    ],
    seoTitle: 'OSHC Nedir? Avustralya Öğrenci Sağlık Sigortası Rehberi',
    description: 'OSHC nedir, zorunlu mu? Avustralya öğrenci sağlık sigortasının kapsamı, 5 onaylı sağlayıcı, vize süresine göre poliçe, bekleme süreleri ve kullanım.',
    faqs: [
      { q: 'OSHC zorunlu mu?', a: 'Evet. Student vizesi (subclass 500) sahipleri vize süresinin tamamı boyunca OSHC yaptırmak zorundadır. Belçika, Norveç ve İsveç vatandaşları için sınırlı istisnalar vardır; Türk vatandaşları için muafiyet yoktur.' },
      { q: 'OSHC ne kadar?', a: 'Ücret sağlayıcıya, poliçe türüne ve süresine göre değişir. Tek kişilik poliçeler için yıllık ücret genellikle birkaç yüz AUD düzeyindedir; çift ve aile poliçeleri daha pahalıdır. Güncel fiyatı vize başvurusundan önce sağlayıcıdan almanız gerekir.' },
      { q: 'OSHC diş tedavisini kapsar mı?', a: 'Standart OSHC diş, göz ve fizyoterapi gibi hizmetleri kapsamaz. Bu hizmetler için bazı sağlayıcıların sunduğu ek (extras) poliçeler isteğe bağlı olarak alınabilir.' },
      { q: 'Okulun önerdiği OSHC’yi almak zorunda mıyım?', a: 'Hayır. Beş onaylı sağlayıcıdan herhangi birini seçebilirsiniz. Okulun anlaşmalı sağlayıcısı pratik olabilir, ancak fiyat ve kapsam karşılaştırması yapmak faydalıdır.' },
      { q: 'OSHC ile Medicare arasındaki fark nedir?', a: 'Medicare, Avustralya vatandaşları ve kalıcı oturum sahipleri için kamu sağlık sistemidir; uluslararası öğrenciler bu sisteme dahil değildir. OSHC, öğrencilere Medicare’e benzer temel doktor ve hastane güvencesi sağlayan özel bir sigortadır.' },
      { q: 'Vize reddedilirse OSHC ücreti iade edilir mi?', a: 'Sağlayıcıların çoğu vize reddi veya Avustralya’ya gidilmemesi durumunda, poliçe kullanılmamışsa iade yapar. İade koşulları ve olası işlem ücreti sağlayıcıya göre değişir.' },
    ],
    updated: '2026-10-24',
  },
]
