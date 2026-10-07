// İngiltere odaklı blog yazılarının gövdeleri.
// Metin içinde [bağlantı metni](/yol) ve **kalın** sözdizimi kullanılabilir.
export type PostSection = { h: string; p?: string[]; list?: string[] }

export const ukBodies: Record<string, PostSection[]> = {
  'ingiltere-yaz-okulu-rehberi': [
    {
      h: 'İngiltere yaz okulu nedir?',
      p: [
        '**İngiltere yaz okulları**, genellikle 7–17 yaş arası öğrencilerin yaz tatilinde 1 ila 6 hafta boyunca İngilizce derslerini spor, sanat, atölye ve gezilerle birleştirdiği yatılı programlardır. Programların büyük bölümü üniversite veya yatılı okul kampüslerinde yürütülür; öğrenciler kampüste konaklar, yemeklerini okulda yer ve 7/24 grup liderlerinin gözetiminde olur.',
        'Yaz okulu, ilk yurt dışı deneyimi için en güvenli başlangıçlardan biridir. Dünyanın dört bir yanından gelen yaşıtlarıyla aynı sınıfı ve aynı yatakhaneyi paylaşan öğrenci, İngilizceyi ders dışında da kullanmak zorunda kalır; bu da konuşma özgüvenini birkaç hafta içinde belirgin şekilde artırır. Tüm program seçeneklerini [İngiltere yaz okulları](/yurtdisi-yaz-okullari/ingiltere) sayfamızda bulabilirsiniz.',
      ],
    },
    {
      h: 'Yaş gruplarına göre program seçimi',
      list: [
        '**7–11 yaş:** Daha korunaklı, kapalı kampüs programları; ağırlık oyun temelli İngilizce, el sanatları ve spor aktivitelerinde.',
        '**12–14 yaş:** Dil dersleri ile proje çalışmalarının dengelendiği, haftada 2 tam gün gezi içeren programlar.',
        '**15–17 yaş:** Daha fazla bağımsızlık; şehir merkezlerinde kampüsler, akademik İngilizce, liderlik ve sınav hazırlık seçenekleri.',
        '**18 yaş ve üzeri:** Yaz okulu yerine yetişkin [dil okulu programları](/yurtdisi-dil-okullari/ingiltere) veya [her şey dahil Londra paketi](/her-sey-dahil-paketler/londra) tercih edilir.',
      ],
    },
    {
      h: 'Bir günde neler var?',
      p: [
        'Tipik bir İngiltere yaz okulu gününde sabah 3 saat İngilizce dersi yapılır. Öğrenciler ilk gün yapılan seviye tespit sınavına göre gruplara ayrılır. Öğleden sonra spor, drama, sanat veya kodlama gibi atölyeler; akşamları ise disko, yetenek gecesi, quiz ve film geceleri düzenlenir.',
        'Hafta sonları genellikle tam gün geziler yapılır: Londra, Oxford, Cambridge, Bath, Brighton ve Stonehenge en sık ziyaret edilen yerlerdir. Ders ve aktivitelerin ayrıntısını [yaz okulu gezileri ve etkinlikleri](/bilgi-bankasi/yaz-okulu-gezi-ve-etkinlikler) rehberimizde anlattık.',
      ],
    },
    {
      h: 'Hangi şehir ve kampüs?',
      p: [
        'Londra kampüsleri şehrin enerjisini ve müzelerini sunar; Oxford ve Cambridge akademik atmosferiyle öne çıkar; Brighton, Bournemouth ve Canterbury gibi şehirler ise daha sakin ve sahil kenarında bir yaz vaat eder. Kırsal bölgelerdeki yatılı okul kampüsleri geniş spor alanlarıyla küçük yaş grupları için idealdir.',
        'Şehir seçimine dair ayrıntılı karşılaştırmalar için [Londra yaz okulları](/blog/londra-yaz-okullari) ve [Oxford ve Cambridge yaz okulları](/blog/oxford-cambridge-yaz-okulu) yazılarımıza göz atabilirsiniz.',
      ],
    },
    {
      h: 'Güvenlik ve iletişim',
      p: [
        'Önerdiğimiz İngiltere yaz okullarında belirli sayıda öğrenciye bir grup lideri düşer; kampüs girişleri kontrol edilir, gece yoklamaları yapılır ve acil durumlar için 7/24 ulaşılabilen bir telefon hattı bulunur. Velilerin en çok merak ettiği bu konuyu [yaz okullarında program güvenliği](/bilgi-bankasi/yaz-okulu-guvenlik) rehberimizde detaylandırdık.',
      ],
    },
    {
      h: 'Başvuru takvimi ve vize',
      p: [
        'İngiltere yaz okulları haziran sonundan ağustos sonuna kadar sürer. Popüler kampüsler ocak – mart arasında dolmaya başlar; vize süreci de düşünüldüğünde en geç nisan ayında kaydın tamamlanmasını öneriyoruz. Ayrıntılı takvim için [2027 kayıt takvimi](/blog/ingiltere-yaz-okulu-kayit-takvimi) yazımızı okuyabilirsiniz.',
        'Türk vatandaşı öğrenciler İngiltere’ye yaz okulu için ziyaretçi vizesiyle gider. 18 yaş altı başvurularda veli izni ve finansal belgeler kritik önemdedir; tüm adımları [İngiltere yaz okulu vize rehberimizde](/blog/ingiltere-yaz-okulu-vize) bulabilirsiniz.',
      ],
    },
    {
      h: 'Tampa ile İngiltere yaz okulu süreci',
      list: [
        'Ücretsiz ön görüşmede çocuğunuzun yaşı, seviyesi ve ilgi alanlarını dinliyoruz.',
        'Size uygun 2–3 kampüsü karşılaştırmalı olarak sunuyoruz.',
        'Kayıt, muvafakatname ve vize dosyasını birlikte hazırlıyoruz.',
        'Uçuş ve havalimanı karşılamasını planlıyor, program boyunca ailenizle iletişimde kalıyoruz.',
      ],
      p: ['İki yıldır bizimle çalışan velimiz Serap Baytur’un dediği gibi: “İlk günden Türkiye’ye dönene kadar tüm süreçleri titizlikle takip etti.” Hemen [ücretsiz danışmanlık alabilir](/basvuru) ya da [İngiltere yaz okulu kampanya sayfamızı](/lp/ingiltere-yaz-okulu) inceleyebilirsiniz.'],
    },
  ],

  'ingiltere-yaz-okulu-fiyatlari': [
    {
      h: 'Neden tek bir fiyat yok?',
      p: [
        'İngiltere yaz okulu fiyatları; kampüsün türüne, şehre, programın içeriğine ve süreye göre geniş bir aralıkta değişir. Bu yüzden “İngiltere yaz okulu kaç para?” sorusunun doğru cevabı, öğrencinin yaşına ve beklentisine göre hazırlanan bir teklifle verilebilir. Aşağıda fiyatı belirleyen başlıca unsurları sıraladık.',
      ],
    },
    {
      h: 'Fiyatı belirleyen 8 unsur',
      list: [
        '**Kampüs tipi:** Tarihi yatılı okullar ve prestijli üniversite kampüsleri genellikle daha yüksek fiyatlıdır.',
        '**Şehir:** Londra ve Oxford/Cambridge programları, sahil şehirlerine ve kırsal kampüslere göre daha pahalıdır.',
        '**Süre:** Haftalık fiyat çoğu programda uzun sürelerde düşer.',
        '**Ders yoğunluğu:** Haftada 15 ders saatlik standart program ile yoğun ve akademik programlar arasında fark vardır.',
        '**Gezi sayısı:** Haftalık tam gün ve yarım gün gezilerin sayısı fiyatı etkiler.',
        '**Özel ilgi programları:** Futbol, tenis, binicilik, kodlama veya liderlik gibi ek programlar ayrıca ücretlendirilir.',
        '**Oda tipi:** Tek kişilik veya özel banyolu odalar ek ücretlidir.',
        '**Transfer ve refakat:** Havalimanı transferleri ve refakatli grup uçuşları fiyata dahil olabilir veya olmayabilir.',
      ],
    },
    {
      h: 'Fiyata genellikle neler dahildir?',
      list: ['İngilizce dersleri ve ders materyalleri', 'Tam pansiyon konaklama', 'Aktivite ve akşam programları', 'Programda belirtilen geziler', 'Seviye sertifikası', '7/24 gözetim'],
      p: ['Uçak bileti, vize ücreti, sağlık sigortası ve harçlık çoğu programda ayrıca hesaplanır. Bütçe planlarken bu kalemleri de eklemeyi unutmayın; [yurtdışı eğitim bütçesi](/bilgi-bankasi/yurtdisi-butce-planlama) rehberimiz yardımcı olabilir.'],
    },
    {
      h: 'Bütçeyi verimli kullanmak için ipuçları',
      list: [
        'Erken kayıt dönemlerinde (genellikle ocak – şubat) indirimleri takip edin.',
        'Londra yerine sahil şehirlerini veya kırsal kampüsleri değerlendirin.',
        'Özel ilgi programı yerine standart programın aktivite paketini tercih edin.',
        'Kardeş indirimleri ve grup kayıtlarını sorun.',
      ],
    },
    {
      h: 'Kişiye özel teklif alın',
      p: ['Okulların güncel fiyatlarını ve kampanyalarını takip ediyor, çocuğunuzun yaşına uygun 2–3 seçeneği yazılı ve karşılaştırmalı olarak sunuyoruz. [İngiltere yaz okulları](/yurtdisi-yaz-okullari/ingiltere) sayfamızdan programları inceleyebilir veya [ücretsiz danışmanlık formunu](/basvuru) doldurabilirsiniz. 18 yaş üstü için sabit fiyatlı [her şey dahil Londra paketimiz](/her-sey-dahil-paketler/londra) de bir seçenek.'],
    },
  ],

  'londra-yaz-okullari': [
    {
      h: 'Neden Londra?',
      p: [
        'Londra, dünyanın en çok kültürlü şehirlerinden biri. British Museum, Natural History Museum ve Tate Modern gibi müzelerin çoğu ücretsiz; Buckingham Sarayı, Tower Bridge ve West End tiyatroları da bir yürüyüş mesafesinde. Londra yaz okulları bu zenginliği gezi programlarıyla derslerin doğal bir parçasına dönüştürür.',
      ],
    },
    {
      h: 'Kimler için uygun?',
      list: ['Şehir hayatını ve hareketi seven 13–17 yaş gençler', 'Müzeler, tarih ve sanatla ilgilenen öğrenciler', 'Daha önce yaz okuluna katılmış, biraz daha bağımsızlık isteyenler'],
      p: ['Daha küçük yaştaki öğrenciler için Londra’ya günübirlik geziler düzenleyen, şehir dışındaki kampüsleri öneriyoruz.'],
    },
    {
      h: 'Kampüs ve konaklama',
      p: ['Londra yaz okulları genellikle üniversite yurtlarında, tek veya çift kişilik odalarda konaklama sunar. Bazı programlar aile yanı seçeneği de içerir. Merkezdeki kampüsler ulaşım açısından avantajlıdır; şehrin dış bölgelerindeki kampüsler ise daha geniş yeşil alanlara sahiptir.'],
    },
    {
      h: 'Örnek bir hafta',
      list: ['Pazartesi – Cuma sabah: İngilizce dersleri', 'Pazartesi öğleden sonra: Westminster ve Big Ben yürüyüş turu', 'Salı: British Museum proje çalışması', 'Çarşamba: Spor turnuvası ve akşam disko', 'Perşembe: Covent Garden ve West End', 'Cumartesi: Oxford veya Cambridge tam gün gezi', 'Pazar: Dinlenme ve kampüs aktiviteleri'],
    },
    {
      h: 'Londra yaz okulu için ilk adım',
      p: ['Tüm İngiltere kampüslerini [İngiltere yaz okulları](/yurtdisi-yaz-okullari/ingiltere) sayfamızda bulabilirsiniz. Program ve fiyat karşılaştırması için [bize ulaşın](/basvuru). Genel bilgiler için [İngiltere yaz okulu rehberi](/blog/ingiltere-yaz-okulu-rehberi) yazımız iyi bir başlangıç.'],
    },
  ],

  'oxford-cambridge-yaz-okulu': [
    {
      h: 'Akademik yaz programı nedir?',
      p: [
        'Oxford ve Cambridge’deki yaz programları, İngilizce dil eğitimini akademik içerikle birleştirir. Öğrenciler tarihi kolej binalarında ders alır; tartışma (münazara), sunum, yaratıcı yazarlık, işletme, tıp veya hukuka giriş gibi konularda atölyelere katılır.',
        'Bu programların çoğu bağımsız eğitim kurumları tarafından üniversite binalarında düzenlenir. Program kalitesini ve akreditasyonunu kontrol etmek önemlidir. Bu kurumların üniversitelerin kendisiyle karıştırılmaması gerekir.',
      ],
    },
    {
      h: 'Kimler için?',
      list: ['İngilizcesi orta ve üzeri seviyede olan 13–17 yaş öğrenciler', 'Yurt dışında üniversite okumayı düşünen lise öğrencileri', 'Akademik bir ilgi alanını keşfetmek isteyenler'],
    },
    {
      h: 'Programın kazandırdıkları',
      list: ['Akademik İngilizce ve sunum becerisi', 'Üniversite kampüs hayatına erken bir bakış', 'Farklı ülkelerden yaşıtlarla ağ', 'Üniversite başvurularında anlatılabilecek bir deneyim'],
      p: ['Yurt dışında üniversite hedefi olan öğrenciler için bu deneyim, ilerideki [üniversite başvuru ve mentörlük sürecinde](/tampa-yurtdisi-egitim-universite-basvuru-ve-mentorluk-paketi) motivasyon mektubuna güçlü bir malzeme sağlar.'],
    },
    {
      h: 'Nasıl seçilir?',
      p: ['Program içeriği, sınıf mevcudu, öğrenci yaş aralığı ve milliyet dağılımı en önemli kriterlerdir. Tüm seçenekleri [İngiltere yaz okulları](/yurtdisi-yaz-okullari/ingiltere) sayfamızda inceleyebilir, [Tampa Akademi](/tampa-akademi) ile kariyer hedeflerinizi birlikte değerlendirebilirsiniz.'],
    },
  ],

  'cocuklar-icin-ingiltere-yaz-kampi': [
    {
      h: 'İlk yurt dışı deneyimi için doğru yaş',
      p: ['7–12 yaş arası çocuklar için İngiltere yaz kampları, oyun temelli İngilizce eğitimi ve yoğun aktivite programıyla tasarlanır. Bu yaş grubunda en önemli kriter, çocuğun aileden ayrı kalmaya hazır olup olmadığıdır. Daha önce izci kampı veya yatılı bir okul gezisine katılmış çocuklar genellikle daha kolay uyum sağlar.'],
    },
    {
      h: 'Küçük yaş programlarının farkı',
      list: ['Daha yüksek gözetmen oranı', 'Kapalı ve geniş kampüsler', 'Daha kısa ve oyun temelli dersler', 'Akşamları erken saatte biten programlar', 'Yaş grubuna özel yatakhaneler ve “house parent” sistemi'],
    },
    {
      h: 'Veli olarak nasıl hazırlanmalı?',
      list: ['Çocuğunuzla programı birlikte inceleyin, fotoğraflara bakın.', 'Telefon kullanım kurallarını önceden konuşun.', 'Çocuğunuzun kendi valizini toplamasına yardım edin.', 'İlk birkaç gün özlem duyulmasının doğal olduğunu anlatın.'],
      p: ['Valiz için [İngiltere yaz okulu valiz listemizi](/blog/ingiltere-yaz-okulu-valiz-listesi) kullanabilirsiniz.'],
    },
    {
      h: 'Yolculuk',
      p: ['Küçük yaştaki öğrenciler havayollarının refakatsiz çocuk hizmetiyle veya uygun dönemlerde [refakatli grup uçuşlarımızla](/bilgi-bankasi/grup-yaz-okulu) seyahat edebilir. Okullar öğrenciyi havalimanında karşılar.'],
    },
    {
      h: 'Sonraki adım',
      p: ['Çocuğunuzun yaşına ve karakterine uygun kampüsleri birlikte seçelim. [İngiltere yaz okulları](/yurtdisi-yaz-okullari/ingiltere) sayfamızı inceleyin veya [ücretsiz ön görüşme](/basvuru) planlayın.'],
    },
  ],

  'ingiltere-yaz-okulu-vize': [
    {
      h: 'Hangi vize gerekir?',
      p: ['Türk vatandaşları kısa süreli yaz okulu programları için İngiltere’ye Standard Visitor (ziyaretçi) vizesiyle gider. Bu vize, 6 aya kadar süren kısa dil ve yaz programlarına katılımı kapsar ancak çalışma hakkı tanımaz. Vize türleri hakkında genel bilgi için [İngiltere öğrenci vizesi rehberimize](/blog/ingiltere-ogrenci-vizesi-rehberi) bakabilirsiniz.'],
    },
    {
      h: '18 yaş altı başvurularda istenen belgeler',
      list: ['Geçerli pasaport', 'Yaz okulu kabul ve ödeme belgeleri', 'Ebeveynlerin izin yazısı ve kimlik fotokopileri', 'Doğum belgesi veya nüfus kayıt örneği (ebeveyn ilişkisini göstermek için)', 'Ebeveynlerin banka hesap dökümleri ve gelir belgeleri', 'Öğrenci belgesi', 'Seyahat planı'],
      p: ['Belge listesi başvuru sahibinin durumuna göre değişebilir; güncel listeyi başvuru öncesinde birlikte kontrol ediyoruz. Muvafakatname ve banka mektubu için [örnek belgelerimize](/kaynaklar) göz atabilirsiniz.'],
    },
    {
      h: 'Ne zaman başvurmalı?',
      p: ['Yaz aylarında vize başvuru merkezlerinde randevu yoğunluğu artar. Yaz okulu kaydını en geç nisan ayında tamamlayıp vize başvurusunu mayıs ayı içinde yapmanızı öneriyoruz.'],
    },
    {
      h: 'Sık yapılan hatalar',
      list: ['Banka dökümlerinde açıklanamayan büyük para girişleri', 'Belgeler arasında tarih ve isim tutarsızlıkları', 'Ebeveyn izin yazısının eksik olması', 'Başvurunun program tarihine çok yakın yapılması'],
      p: ['Vize kararı konsolosluğun takdirindedir; biz dosyanın eksiksiz ve tutarlı hazırlanmasını sağlıyoruz. Ayrıntılar için [vize danışmanlığı](/hizmetler/vize-danismanligi) sayfamıza bakın.'],
    },
  ],

  'ingiltere-yaz-okulu-kayit-takvimi': [
    {
      h: 'İngiltere yaz okulları ne zaman başlar?',
      p: ['İngiltere’deki yaz okulları genellikle haziranın son haftası ile ağustosun son haftası arasında düzenlenir. Çoğu kampüste her pazar veya pazartesi yeni öğrenci girişi yapılır; programlar 1–6 hafta arasında seçilebilir. Türkiye’de okulların kapanış tarihine göre temmuz ayı en yoğun dönemdir.'],
    },
    {
      h: '2027 yazı için önerilen takvim',
      list: ['**Ekim – aralık 2026:** Program araştırması ve ön görüşme', '**Ocak – mart 2027:** Kayıt (popüler kampüsler bu dönemde dolar, erken kayıt indirimleri)', '**Nisan 2027:** Uçuş planı, muvafakatname ve vize belgeleri', '**Mayıs 2027:** Vize başvurusu', '**Haziran 2027:** Oryantasyon ve valiz hazırlığı', '**Temmuz – ağustos 2027:** Program'],
    },
    {
      h: 'Neden erken kayıt?',
      p: ['Popüler kampüslerde belirli yaş grupları ve milliyetler için kontenjan sınırı bulunur. Erken kayıt hem tercih ettiğiniz tarihi hem de uygun fiyatı garantilemenin en iyi yoludur. Genel başvuru zamanlamaları için [başvuru takvimi](/bilgi-bankasi/basvuru-takvimi) rehberimize de göz atabilirsiniz.'],
    },
    {
      h: 'Yerinizi ayırtın',
      p: ['[İngiltere yaz okulları](/yurtdisi-yaz-okullari/ingiltere) sayfamızdan programları inceleyin ve [ücretsiz ön görüşme](/basvuru) planlayın.'],
    },
  ],

  'yaz-okulu-ingiltere-mi-malta-mi-irlanda-mi': [
    {
      h: 'Kısa karşılaştırma',
      list: ['**İngiltere:** En geniş kampüs ve program çeşitliliği, tarihi şehirlere geziler; vize gerekir.', '**Malta:** Sıcak iklim, deniz ve plaj aktiviteleri, Türkiye’ye yakınlık; Schengen vizesi gerekir.', '**İrlanda:** Samimi ve güvenli ortam, daha küçük gruplar; İrlanda vizesi gerekir.'],
    },
    {
      h: 'İklim ve aktiviteler',
      p: ['Malta yaz okullarında programın önemli bir kısmı deniz ve plaj etkinlikleriyle geçer. İngiltere ve İrlanda’da ise serin bir yaz ve yoğun kültürel geziler sizi bekler. Hareketli ve sosyal bir yaz isteyen gençler Malta’yı, akademik ve kültürel bir deneyim isteyenler İngiltere’yi tercih edebilir.'],
    },
    {
      h: 'Milliyet dağılımı',
      p: ['Malta yaz okullarında Avrupa’dan, özellikle İtalya ve İspanya’dan gelen öğrenciler yoğundur. İngiltere’deki büyük kampüslerde milliyet çeşitliliği genellikle daha fazladır. Okulların geçmiş yıllardaki milliyet oranlarını sizinle paylaşıyoruz.'],
    },
    {
      h: 'Hangisi size uygun?',
      p: ['Programları ülke bazında incelemek için [İngiltere](/yurtdisi-yaz-okullari/ingiltere), [Malta](/yurtdisi-yaz-okullari/malta) ve tüm [yurt dışı yaz okulları](/yurtdisi-yaz-okullari) sayfalarımıza göz atın. Kararsız kaldıysanız [bize ulaşın](/basvuru); çocuğunuzun yaşına ve beklentisine göre birlikte karar verelim.'],
    },
  ],

  'ingiltere-yaz-okulu-valiz-listesi': [
    {
      h: 'Belgeler',
      list: ['Pasaport ve vize', 'Noter onaylı muvafakatname (18 yaş altı)', 'Okul kabul ve kayıt belgeleri', 'Sağlık sigortası poliçesi', 'Uçuş bilgileri ve okulun acil durum numarası', 'Belgelerin fotokopileri ve dijital kopyaları'],
    },
    {
      h: 'Kıyafetler',
      p: ['İngiltere yazı ılıktır ancak akşamları serinler ve sık sık yağmur yağar. Kat kat giyinmeye uygun kıyafetler en iyi seçimdir.'],
      list: ['Yağmurluk veya su geçirmez mont', 'Bir kalın kazak veya polar', 'Spor kıyafetleri ve spor ayakkabı', 'Rahat yürüyüş ayakkabısı', 'Disko ve tema geceleri için birkaç özel kıyafet', 'Mayo (havuzlu kampüsler için)'],
    },
    {
      h: 'Elektronik ve kişisel',
      list: ['İngiltere tipi (G tipi) priz adaptörü', 'Telefon ve şarj aleti', 'Düzenli kullanılan ilaçlar ve reçeteleri', 'Küçük bir sırt çantası ve matara', 'Güneş kremi (evet, İngiltere’de de)'],
    },
    {
      h: 'Harçlık',
      p: ['Gezilerin çoğu programa dahildir; harçlık genellikle hediyelik eşya ve atıştırmalıklar için gerekir. Önerilen haftalık tutarı programa göre sizinle paylaşıyoruz. Program detayları için [İngiltere yaz okulu rehberimize](/blog/ingiltere-yaz-okulu-rehberi) göz atın.'],
    },
  ],

  'ingiltere-yaz-kamplari-ve-gencler-icin-firsatlar': [
    { h: 'Erken yaşta dil eğitiminin önemi', p: ['Çocuklar ve gençler, dili doğal ortamında duyduklarında telaffuz ve dinleme becerilerini yetişkinlere göre çok daha hızlı geliştirir. Birkaç haftalık bir yaz kampı bile konuşma özgüveninde belirgin bir fark yaratır.'] },
    { h: 'Hangi yaş için hangi program?', p: ['7–12 yaş arası öğrenciler için daha korunaklı, aktivite ağırlıklı kampüs programları; 13–17 yaş arası gençler için ise daha fazla sorumluluk ve şehir keşfi içeren programlar önerilir. Akademik hedefi olan öğrenciler için sınav hazırlık veya proje tabanlı programlar da bulunur. Ayrıntılar için [İngiltere yaz okulu rehberi](/blog/ingiltere-yaz-okulu-rehberi).'] },
    { h: 'Bir günde neler var?', p: ['Sabahları seviyeye göre ayrılmış sınıflarda İngilizce dersleri yapılır. Öğleden sonra spor, drama, sanat veya proje atölyeleri; akşamları ise disko, yetenek gecesi ve film gibi sosyal etkinlikler düzenlenir. Hafta sonları Londra, Oxford, Cambridge veya Bath’a tam gün geziler yapılır.'] },
    { h: 'Ne zaman kayıt olunmalı?', p: ['Popüler kampüsler ocak – mart arasında dolmaya başlar. Vize ve belge süreçleri de düşünüldüğünde, kaydın en geç nisan ayında tamamlanması önerilir. Bkz. [2027 kayıt takvimi](/blog/ingiltere-yaz-okulu-kayit-takvimi).'] },
    { h: 'Güvenlik ve konaklama', p: ['Programlar genellikle üniversite veya yatılı okul kampüslerinde yürütülür. 7/24 gözetim, giriş kontrolü ve grup liderleri sayesinde aileler gönül rahatlığıyla çocuklarını gönderebilir. Tüm programlar için [İngiltere yaz okulları](/yurtdisi-yaz-okullari/ingiltere).'] },
  ],

  'yetiskinler-icin-ingiltere-yaz-dil-programlari': [
    { h: 'Yaz okulu yetişkinler için de var', p: ['18 yaş üstü katılımcılar için İngiltere’deki dil okulları yaz aylarında yoğun programlar düzenler. Yıllık izninizi 2–4 haftalık bir dil programıyla birleştirerek hem İngilizcenizi geliştirebilir hem de tatil yapabilirsiniz.'] },
    { h: 'Seçenekler', list: ['Genel İngilizce (haftada 15–30 ders saati)', 'İş İngilizcesi ve sunum becerileri', '30 yaş üstü özel sınıflar', 'IELTS veya Cambridge sınav hazırlık', 'Birebir dersler'], p: ['30 yaş üstü programlar hakkında daha fazla bilgi için [rehberimize](/bilgi-bankasi/30-yas-ustu-dil-programlari) göz atın.'] },
    { h: 'Her şey dahil Londra paketi', p: ['Konaklama, uçak bileti, vize, sigorta ve Londra eğlence paketini tek fiyatta birleştiren [her şey dahil Londra paketimiz](/her-sey-dahil-paketler/londra) 2 haftadan itibaren planlanabilir.'] },
    { h: 'Hangi şehir?', p: ['Londra kültürel imkânlarıyla, Brighton sahil atmosferiyle, Bournemouth ise sakinliği ve uygun fiyatlarıyla öne çıkar. Ayrıntılı karşılaştırma için [İngiltere’de dil okulu şehir seçimi](/blog/ingilterede-dil-okulu-sehir-secimi) yazımızı okuyun. Tüm seçenekler: [İngiltere dil okulları](/yurtdisi-dil-okullari/ingiltere).'] },
  ],

  'ingilterede-yurt-disi-egitim-rehberi': [
    {
      h: 'Neden İngiltere?',
      p: [
        'İngiltere; İngilizcenin anavatanı, dünyanın en köklü üniversitelerine ev sahipliği yapan ve kısa süreli programlarıyla öne çıkan bir eğitim ülkesi. Lisans programları genellikle 3 yıl, yüksek lisans programlarının birçoğu 12 ay sürer. Bu da hem zaman hem yaşam maliyeti açısından avantaj sağlar.',
        'Türkiye’den İngiltere’ye yurt dışı eğitim için giden öğrenciler; kısa dil kurslarından yatılı liselere, yaz okullarından doktoraya kadar geniş bir yelpazede seçenek bulur. İngiltere’deki tüm programlarımızı [İngiltere’de eğitim](/ulkeler/ingiltere) sayfamızda topladık.',
      ],
    },
    {
      h: 'İngiltere’de eğitim seçenekleri',
      list: [
        '**[Dil okulları](/yurtdisi-dil-okullari/ingiltere):** 1 haftadan 1 yıla; genel, akademik ve sınav hazırlık İngilizcesi.',
        '**[Yaz okulları](/yurtdisi-yaz-okullari/ingiltere):** 7–17 yaş için kampüs konaklamalı yaz programları.',
        '**[Lise](/yurtdisi-lise-egitimi/ingiltere):** Yatılı okullarda GCSE ve A-Level.',
        '**[Üniversite](/lisans-programlari/ingiltere):** UCAS üzerinden başvuru, gerekirse Foundation yılı.',
        '**[Yüksek lisans](/yurtdisi-yuksek-lisans/ingiltere):** Çoğunlukla 12 ay süren master programları.',
        '**[Her şey dahil Londra paketi](/her-sey-dahil-paketler/londra):** 18 yaş üstü için tek fiyatlı dil eğitimi paketi.',
      ],
    },
    {
      h: 'Hangi vize?',
      p: ['Programın süresine ve türüne göre Standard Visitor, Short-term Study veya Student vizesi gerekir. Ayrıntılar için [İngiltere öğrenci vizesi rehberimize](/blog/ingiltere-ogrenci-vizesi-rehberi) bakın.'],
    },
    {
      h: 'Maliyet ve yaşam',
      p: ['Londra Avrupa’nın en pahalı şehirleri arasındadır; Manchester, Liverpool, Brighton veya Bournemouth gibi şehirlerde yaşam daha uygundur. Konaklama türleri ve günlük giderler için [İngiltere’de öğrenci olarak yaşamak](/blog/ingilterede-ogrenci-yasam-maliyeti) yazımızı okuyun.'],
    },
    {
      h: 'İngiltere’de çalıştığımız kurumlar',
      p: ['Queen Mary University of London, Manchester Metropolitan University, University of Liverpool ve EC English gibi kurumlarla öğrencilerimizi yerleştiriyoruz. İzmir’deki İngiltere Üniversite Temsilciliğimiz ve okul ortaklarımızla kurduğumuz yakın iletişim sayesinde varış sonrasında da öğrencilerimizin yanındayız.'],
    },
    {
      h: 'Adım adım İngiltere’de eğitim',
      list: ['Ücretsiz ön görüşme ile hedef ve bütçenin belirlenmesi', 'Program ve okul karşılaştırması', 'Başvuru veya kayıt', 'Vize dosyasının hazırlanması', 'Konaklama, uçuş ve havalimanı karşılama', 'Eğitim boyunca takip'],
      p: ['[Ücretsiz danışmanlık](/basvuru) için formu doldurun ya da [İngiltere yurt dışı eğitim kampanya sayfamızı](/lp/ingiltere-yurt-disi-egitim) inceleyin.'],
    },
  ],

  'ingilterede-dil-okulu-sehir-secimi': [
    { h: 'Şehir seçimi neden önemli?', p: ['Aynı kalitede iki dil okulu, bulundukları şehre göre çok farklı bir deneyim sunabilir. Yaşam maliyeti, sınıflardaki milliyet dağılımı, sosyal hayat ve okula ulaşım süresi şehirden şehre değişir.'] },
    { h: 'Londra', p: ['Kültür, kariyer ve sosyal hayat açısından en zengin seçenek. Müzeler, tiyatrolar ve iş fırsatları burada; ancak konaklama ve ulaşım giderleri yüksek. İş İngilizcesi ve kariyer odaklı programlar için ideal.'] },
    { h: 'Brighton', p: ['Londra’ya trenle yaklaşık bir saat mesafede, genç ve yaratıcı bir sahil şehri. Canlı sosyal hayatı ve uygun boyutuyla dil öğrencilerinin gözdesi. Ayrıntılar: [Brighton’da dil okulu](/blog/brighton-dil-okulu).'] },
    { h: 'Oxford ve Cambridge', p: ['Akademik atmosfer ve tarihi doku. Üniversite öncesi akademik İngilizce ve sınav hazırlık programları için öne çıkar.'] },
    { h: 'Bournemouth ve Bristol', p: ['Bournemouth sakin bir sahil şehri ve aile yanı konaklama için popüler; Bristol ise genç nüfusu ve kültürel hayatıyla daha büyük bir şehir deneyimi sunar.'] },
    { h: 'Manchester ve Liverpool', p: ['Kuzey İngiltere’nin öğrenci şehirleri. Londra’ya göre daha uygun yaşam maliyeti ve güçlü üniversiteleriyle uzun dönem programlar için iyi bir alternatif.'] },
    { h: 'Karar vermek için', p: ['Tüm seçenekleri [İngiltere dil okulları](/yurtdisi-dil-okullari/ingiltere) sayfamızda inceleyin. Okul seçimi kriterleri için [dil okulu nasıl seçilir](/bilgi-bankasi/dil-okulu-secimi) rehberimize göz atın veya [bize ulaşın](/basvuru).'] },
  ],

  'ingiltere-ogrenci-vizesi-rehberi': [
    { h: 'Programa göre vize türü', list: ['**Standard Visitor:** 6 aya kadar dil kursları ve yaz okulları. Çalışma hakkı yoktur.', '**Short-term Study (İngilizce dil kursu):** 6–11 ay arası İngilizce kursları.', '**Student vizesi:** Lisans, yüksek lisans ve diğer uzun dönem akademik programlar. Okulun düzenlediği CAS belgesi gerekir.'], p: ['Vize kategorileri ve koşulları zaman zaman güncellenir; başvuru öncesinde güncel kuralları birlikte kontrol ediyoruz.'] },
    { h: 'Sık istenen belgeler', list: ['Pasaport', 'Okul kabul belgesi veya CAS', 'Finansal yeterlilik: banka hesap dökümleri', 'Sponsor mektubu ve sponsorun gelir belgeleri', 'Öğrenci belgesi veya işveren yazısı', 'Gerekiyorsa İngilizce yeterlilik belgesi', 'Tüberküloz testi (belirli süreyi aşan başvurularda)'], p: ['Örnek [sponsor mektubu](/kaynaklar/ornek-sponsor-mektubu) ve [banka mektubu](/kaynaklar/ornek-banka-mektubu) şablonlarımızı kullanabilirsiniz.'] },
    { h: 'Student vizesi için finansal şartlar', p: ['Student vizesinde eğitim ücretinin ödenmemiş kısmına ek olarak, belirlenen süre için yaşam masraflarını karşılayacak tutarın belirli bir süre boyunca hesapta tutulduğunu göstermeniz gerekir. Tutarlar Londra ve Londra dışı için farklıdır ve dönemsel olarak güncellenir.'] },
    { h: 'Sağlık ek ücreti (IHS)', p: ['6 aydan uzun süreli vizelerde Immigration Health Surcharge ödenir; bu ödeme öğrencinin İngiltere’deki kamu sağlık hizmetlerinden yararlanmasını sağlar.'] },
    { h: 'Vize sürecinde yanınızdayız', p: ['Vize türünün belirlenmesinden randevu takibine kadar tüm süreci [vize danışmanlığı](/hizmetler/vize-danismanligi) hizmetimizle yönetiyoruz. Genel bilgiler için [öğrenci vizesi rehberi](/bilgi-bankasi/ogrenci-vizesi-rehberi) ve olası bir ret durumu için [vize reddi sonrası](/bilgi-bankasi/vize-reddi-sonrasi) rehberlerimize göz atın.'] },
  ],

  'ingilterede-universite-okumak': [
    { h: 'İngiltere’de lisans eğitiminin yapısı', p: ['İngiltere’de lisans programları genellikle 3 yıl sürer (İskoçya’da 4 yıl). Öğrenciler ilk yıldan itibaren seçtikleri alanda uzmanlaşır; bu yüzden bölüm seçimi başvuru aşamasında netleşmiş olmalıdır. Bazı programlar staj yılı (placement year) seçeneği sunar.'] },
    { h: 'UCAS başvurusu', p: ['Başvurular UCAS adlı merkezi sistem üzerinden yapılır. Tek başvuruyla en fazla 5 programa başvurulabilir. Başvuruda kişisel beyan (personal statement), referans mektubu, akademik notlar ve tahmini notlar yer alır. Oxford, Cambridge ve tıp gibi bölümler için başvuru tarihi diğerlerinden daha erkendir.'] },
    { h: 'Türkiye’den lise mezunları için Foundation', p: ['Türkiye’deki lise diploması birçok İngiliz üniversitesi için doğrudan kabul açısından yeterli görülmez. Bu durumda öğrenciler bir yıllık [Foundation programını](/bilgi-bankasi/foundation-nedir) tamamlayarak birinci sınıfa geçer. IB diploması veya A-Level ile doğrudan başvuru mümkündür.'] },
    { h: 'Dil şartları', p: ['Lisans programları genellikle IELTS 6.0–6.5 ister; bazı bölümler alt bölümlerde minimum puan şartı koyar. Ayrıntılar: [IELTS kaç puan gerekir?](/blog/ielts-kac-puan-gerekir)'] },
    { h: 'Başvuruyu güçlendirmek', list: ['Bölüme ilgiyi gösteren projeler ve okumalar', 'Güçlü bir kişisel beyan', 'Akademik referans', 'Gerekiyorsa portfolyo'], p: ['[Üniversite başvuru ve mentörlük paketimiz](/tampa-yurtdisi-egitim-universite-basvuru-ve-mentorluk-paketi) ile 5 başvurunuzu mentör eşliğinde hazırlıyoruz. Tüm detaylar: [İngiltere’de üniversite](/lisans-programlari/ingiltere).'] },
  ],

  'ingilterede-yuksek-lisans': [
    { h: 'Neden İngiltere’de yüksek lisans?', list: ['Birçok programın 12 ay sürmesi', 'Dünya sıralamalarında üst sıralardaki üniversiteler', 'Uluslararası sınıflar ve güçlü mezun ağı', 'Mezuniyet sonrası çalışma imkânı (Graduate Route)'] },
    { h: 'Kabul şartları', p: ['İngiliz üniversiteleri genellikle lisans not ortalamasını kendi sınıflandırma sistemine (2:1, 2:2 gibi) çevirerek değerlendirir. Bunun yanında IELTS (çoğunlukla 6.5–7.0), motivasyon mektubu, referanslar ve CV istenir. GRE/GMAT çoğu programda şart değildir; MBA programları istisna olabilir.'] },
    { h: 'Program türleri', list: ['**MSc / MA:** Ders ağırlıklı (taught) yüksek lisans', '**MRes:** Araştırma ağırlıklı yüksek lisans', '**MBA:** İş deneyimi gerektiren işletme yüksek lisansı', '**LLM:** Hukuk yüksek lisansı'] },
    { h: 'Başvuru takvimi', p: ['Eylül dönemi için başvurular bir önceki yılın sonbaharında açılır. Popüler programlar ve burslar için ilk turlarda başvurmak avantaj sağlar. Bazı programlarda ocak girişi de mümkündür.'] },
    { h: 'Mentörlü başvuru', p: ['Her programa özel motivasyon mektubu ve referans desteğiyle başvurularınızı birlikte hazırlıyoruz. Detaylar: [İngiltere’de yüksek lisans](/yurtdisi-yuksek-lisans/ingiltere), [yüksek lisans başvurusu nasıl yapılır](/bilgi-bankasi/yuksek-lisans-basvurusu), [mezuniyet sonrası çalışma](/blog/ingiltere-mezuniyet-sonrasi-calisma).'] },
  ],

  'ingilterede-lise-egitimi': [
    { h: 'İngiliz lise sistemi', p: ['İngiltere’de 14–16 yaş arası öğrenciler GCSE, 16–18 yaş arası öğrenciler A-Level programını takip eder. A-Level’da öğrenciler genellikle 3–4 derste uzmanlaşır ve bu sonuçlarla doğrudan üniversiteye başvurur. Bazı okullar IB programı da sunar.'] },
    { h: 'Yatılı okullar', p: ['İngiltere, dünyanın en köklü yatılı okul (boarding school) geleneğine sahiptir. Öğrenciler kampüsteki yatakhanelerde kalır; ders, etüt, spor ve kulüp faaliyetlerinden oluşan disiplinli bir program takip eder. Ayrıntılar: [boarding school nedir?](/bilgi-bankasi/boarding-school-nedir)'] },
    { h: 'Başvuru ve giriş', list: ['Son iki yılın karneleri', 'Okulun giriş sınavı veya İngilizce seviye testi', 'Mülakat (çoğunlukla online)', 'Öğretmen referansları'], p: ['Popüler okullar için başvuruların 9–12 ay önceden yapılması önerilir.'] },
    { h: 'Vasi (guardian)', p: ['18 yaş altı uluslararası öğrencilerin İngiltere’de bir vasisinin olması genellikle zorunludur. Vasi, tatillerde ve acil durumlarda öğrenciden sorumludur.'] },
    { h: 'Sonraki adım', p: ['Okul modellerini ve başvuru sürecini [İngiltere’de lise eğitimi](/yurtdisi-lise-egitimi/ingiltere) sayfamızda bulabilirsiniz. Program farkları için [IB, A-Level ve AP](/bilgi-bankasi/ib-a-level-ap) rehberimize göz atın.'] },
  ],

  'ingilterede-ogrenci-yasam-maliyeti': [
    { h: 'Londra mı, diğer şehirler mi?', p: ['İngiltere’de yaşam maliyetini en çok belirleyen faktör şehirdir. Londra’da konaklama ve ulaşım giderleri diğer şehirlere göre belirgin şekilde yüksektir. Manchester, Liverpool, Leeds, Brighton veya Bournemouth gibi şehirlerde aynı bütçeyle daha konforlu bir yaşam mümkündür.'] },
    { h: 'Konaklama türleri', list: ['**Aile yanı:** Dil öğrencileri için popüler; genellikle kahvaltı ve akşam yemeği dahil.', '**Öğrenci rezidansı:** Özel banyolu odalar, ortak mutfak, 7/24 güvenlik.', '**Üniversite yurtları:** Birinci sınıf öğrencilerine öncelik tanınır.', '**Paylaşımlı öğrenci evi:** Uzun dönem için ekonomik seçenek.'], p: ['Ayrıntılar için [konaklama seçenekleri](/bilgi-bankasi/konaklama-secenekleri) rehberimize bakın.'] },
    { h: 'Günlük giderler', list: ['Toplu taşıma (öğrenci indirimli kartlar)', 'Market ve yemek', 'Telefon ve internet', 'Ders materyalleri', 'Sosyal aktiviteler'] },
    { h: 'Bütçe ipuçları', list: ['Öğrenci indirim kartlarından yararlanın', 'Haftalık market alışverişi planlayın', 'Ücretsiz müzeleri ve etkinlikleri takip edin', 'Uzun dönem programlarda öğrenci evine geçmeyi değerlendirin'], p: ['Sürprizsiz bir bütçe isteyenler için [her şey dahil Londra paketimiz](/her-sey-dahil-paketler/londra) konaklama dahil tek fiyat sunar.'] },
  ],

  'brighton-dil-okulu': [
    { h: 'Brighton’ı özel kılan nedir?', p: ['Brighton, İngiltere’nin güney sahilinde, Londra’ya trenle yaklaşık bir saat uzaklıkta bir şehir. Ünlü iskelesi, renkli sokakları, kafeleri ve genç nüfusuyla dil öğrencilerinin en sevdiği şehirlerden biri.'] },
    { h: 'Kimler için uygun?', list: ['Londra’nın kalabalığından uzak ama sosyal bir şehir isteyenler', 'Sahil yaşamını sevenler', 'Kısa ve orta süreli dil programı planlayanlar', 'Yaz aylarında İngilizce öğrenmek isteyen gençler'] },
    { h: 'Konaklama', p: ['Aile yanı konaklama Brighton’da yaygındır ve dil pratiği için büyük avantaj sağlar. Öğrenci rezidansları da mevcuttur.'] },
    { h: 'Londra’ya yakınlık', p: ['Hafta sonları Londra’ya günübirlik gitmek kolaydır. [Her şey dahil Londra paketimizde](/her-sey-dahil-paketler/londra) Londra – Brighton çift yön otobüs bileti de bulunur.'] },
    { h: 'Brighton’da dil okulu için', p: ['Programlar ve okullar: [İngiltere dil okulları](/yurtdisi-dil-okullari/ingiltere). Şehir karşılaştırması: [İngiltere’de dil okulu için hangi şehir?](/blog/ingilterede-dil-okulu-sehir-secimi)'] },
  ],

  'ingiltere-mezuniyet-sonrasi-calisma': [
    { h: 'Graduate Route nedir?', p: ['Graduate Route, İngiltere’de lisans veya yüksek lisans programını başarıyla tamamlayan uluslararası öğrencilere, iş teklifi şartı aranmadan ülkede çalışma imkânı tanıyan bir vize kategorisidir. Öğrenci vizesinin süresi bitmeden İngiltere içinden başvurulur.'] },
    { h: 'Süre ve güncel durum', p: ['Graduate Route’un süresi ve koşulları İngiltere hükümetinin göç politikasına göre güncellenebilir; son yıllarda bu konuda değişiklik önerileri gündeme gelmiştir. Başvuru planınızı yaparken güncel kuralları birlikte kontrol ediyoruz.'] },
    { h: 'Neden önemli?', list: ['Uluslararası iş deneyimi', 'İngiliz iş piyasasında ağ kurma fırsatı', 'Kariyerde uzun vadeli seçenekler (Skilled Worker vizesine geçiş imkânı)'] },
    { h: 'Planlama', p: ['Mezuniyet sonrası çalışma hedefiniz varsa program ve şehir seçimini buna göre yapmak önemlidir. Detaylar: [İngiltere’de yüksek lisans](/yurtdisi-yuksek-lisans/ingiltere), [İngiltere’de 1 yıllık yüksek lisans](/blog/ingilterede-yuksek-lisans).'] },
  ],
}
