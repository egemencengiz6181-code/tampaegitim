import type { ProgramKey } from './countries'

export type GuideGroup =
  | 'Dil okulu'
  | 'Yaz okulu'
  | 'Lise'
  | 'Üniversite'
  | 'Yüksek lisans'
  | 'Work and Study'
  | 'Sınavlar'
  | 'Başvuru'
  | 'Vize & Belgeler'
  | 'Yaşam'

export type Guide = {
  slug: string
  title: string
  group: GuideGroup
  program?: ProgramKey
  /** İlgili ülke slug'ları; ülke sayfalarında listelenir */
  countries?: string[]
  summary: string
  facts?: { label: string; value: string }[]
  sections: { h: string; p?: string[]; list?: string[] }[]
}

export const guideGroups: GuideGroup[] = ['Dil okulu', 'Yaz okulu', 'Lise', 'Üniversite', 'Yüksek lisans', 'Work and Study', 'Sınavlar', 'Başvuru', 'Vize & Belgeler', 'Yaşam']

export const guides: Guide[] = [
  /* ================= DİL OKULU ================= */
  {
    slug: 'dil-okulu-secimi',
    title: 'Yurtdışı dil okulu nasıl seçilir?',
    group: 'Dil okulu',
    program: 'dil',
    summary: 'Akreditasyondan milliyet dağılımına, sınıf mevcudundan konuma kadar doğru okulu seçmenin kriterleri.',
    sections: [
      { h: 'Akreditasyon', p: ['Okulun bağlı olduğu ülkenin resmi kalite kuruluşu tarafından akredite olması, ders kalitesi, öğretmen yeterliliği ve öğrenci güvenliği için temel güvencedir. İngiltere’de British Council, İrlanda’da ACELS / QQI, Malta’da ELT Council, Kanada’da Languages Canada gibi kuruluşların onayına bakılır.', 'Uzun dönem öğrenci vizesi veya çalışma izni hedefleniyorsa, okulun ilgili ülkenin vize listesinde (örneğin İrlanda’da ILEP) yer alması gerekir.'] },
      { h: 'Sınıf mevcudu ve seviye sayısı', p: ['Küçük sınıflar (genellikle 12–15 kişi) konuşma pratiğini artırır. Okulun kaç seviye sınıf açtığı da önemlidir: seviye sayısı fazla olan okullarda kendi düzeyinize daha yakın bir sınıfa yerleşirsiniz.'] },
      { h: 'Milliyet dağılımı', p: ['Sınıfta aynı dili konuşan öğrencilerin oranı arttıkça ders dışında İngilizce kullanma fırsatı azalır. Milliyet oranları sezona göre değişir; yaz aylarında Avrupalı genç öğrenciler, kış aylarında Latin Amerika ve Asya’dan yetişkin öğrenciler yoğunlaşabilir. Danışmanlarımız okulların güncel oranlarını paylaşır.'] },
      { h: 'Şehir ve konum', list: ['Büyük şehirler: kültürel imkân ve iş fırsatı fazla, yaşam maliyeti yüksek', 'Küçük şehirler: daha sakin, uygun maliyetli, yerel halkla iletişim daha kolay', 'Okulun ulaşım ağına ve konaklama seçeneklerine yakınlığı'] },
      { h: 'Program çeşitliliği', p: ['Genel İngilizce dışında sınav hazırlık, iş İngilizcesi, akademik yıl ve birebir ders seçenekleri sunan okullar, program sırasında hedefiniz değişirse esneklik sağlar.'] },
    ],
  },
  {
    slug: 'dil-okulu-suresi',
    title: 'Yurtdışında dil okulu ne kadar sürmeli?',
    group: 'Dil okulu',
    program: 'dil',
    summary: 'Seviye hedefinize göre kaç haftalık programın size uygun olduğunu hesaplamanın yolu.',
    facts: [
      { label: 'Bir seviye', value: 'Ortalama 8–12 hafta' },
      { label: 'A1 → B2', value: 'Yaklaşık 6–9 ay' },
      { label: 'En kısa program', value: '1 hafta' },
      { label: 'Akademik yıl', value: '24–52 hafta' },
    ],
    sections: [
      { h: 'Seviye atlama süresi', p: ['Avrupa Ortak Dil Çerçevesi’ne (CEFR) göre, haftada 20 ve üzeri ders saatlik yoğun bir programda bir seviyeyi tamamlamak ortalama 8–12 hafta sürer. Başlangıç seviyeleri daha hızlı geçilir; B2’den C1’e geçiş ise daha uzun zaman alır.'] },
      { h: 'Hedefe göre öneriler', list: ['Tatil ve pratik amaçlı: 2–4 hafta', 'Konuşma özgüvenini artırmak: 4–8 hafta', 'Bir seviye atlamak: 8–12 hafta', 'Üniversite için B2/C1 seviyesine ulaşmak: 24 hafta ve üzeri', 'Work and study programları: ülkeye göre en az 25 hafta'] },
      { h: 'Süreyi etkileyen faktörler', p: ['Haftalık ders saati, konaklama türü (aile yanı dil pratiğini artırır), ders dışında dili kullanma sıklığı ve başlangıç seviyesi süreyi belirleyen başlıca unsurlardır. Okullar ilk gün yapılan seviye tespit sınavıyla sizi uygun sınıfa yerleştirir ve düzenli aralıklarla ilerlemenizi ölçer.'] },
    ],
  },
  {
    slug: '30-yas-ustu-dil-programlari',
    title: '30 yaş üstü dil programları',
    group: 'Dil okulu',
    program: 'dil',
    summary: 'Yetişkin katılımcıların bir arada olduğu, sakin tempolu ve profesyonel odaklı dil programları.',
    sections: [
      { h: 'Neden ayrı bir program?', p: ['Birçok dil okulunda genel sınıflar ağırlıklı olarak 18–25 yaş arası öğrencilerden oluşur. 30 yaş üstü (bazı okullarda 25+ veya 40+) programlar, benzer yaş ve deneyimdeki katılımcıları bir araya getirerek ders konularını ve sosyal programı yetişkinlerin ilgi alanlarına göre şekillendirir.'] },
      { h: 'Program içeriği', list: ['İş hayatı, güncel olaylar ve kültür odaklı ders konuları', 'Müze, tiyatro, şarap tadımı gibi yetişkinlere yönelik sosyal etkinlikler', 'Daha küçük sınıflar ve esnek ders saatleri', 'Rezidans veya otel konforunda konaklama seçenekleri'] },
      { h: 'Hangi ülkelerde?', p: ['İngiltere, Malta, İrlanda, Kanada ve Amerika’daki birçok okul yetişkin programları sunar. Malta, uygun maliyeti ve sakin atmosferiyle 30 yaş üstü katılımcıların en sık tercih ettiği destinasyonlardan biridir.'] },
    ],
  },
  {
    slug: 'akademik-yil-programlari',
    title: 'Akademik yıl dil programları',
    group: 'Dil okulu',
    program: 'dil',
    summary: '6 ay ile 1 yıl arası süren, sınav ve üniversite hazırlığını birleştiren uzun dönem dil eğitimi.',
    sections: [
      { h: 'Akademik yıl nedir?', p: ['Akademik yıl programları genellikle 24–52 hafta süren, yoğun genel dil eğitimini sınav hazırlığı ve akademik becerilerle birleştiren uzun dönem programlardır. Okullar bu programlarda haftalık ücretlerde indirim uygular.'] },
      { h: 'Kimler için uygun?', list: ['Yurtdışında üniversite veya yüksek lisans planlayanlar', 'Dili ileri seviyeye taşımak isteyen profesyoneller', 'Work and study kapsamında uzun dönem programa ihtiyaç duyanlar', 'Bir yıl ara vererek yurtdışı deneyimi kazanmak isteyenler'] },
      { h: 'Program sonunda', p: ['Öğrenciler program sonunda IELTS, TOEFL veya Cambridge gibi uluslararası bir sınava girerek belgelendirilmiş bir dil yeterliliği elde eder. Danışmanlarımız bu süreyi bir sonraki eğitim adımınızla birlikte planlar.'] },
    ],
  },
  {
    slug: 'neden-malta',
    title: 'Neden Malta’da dil eğitimi?',
    group: 'Dil okulu',
    program: 'dil',
    countries: ['malta'],
    summary: 'Uygun maliyet, Akdeniz iklimi ve Schengen avantajıyla Malta’nın öne çıkan yönleri.',
    sections: [
      { h: 'Uygun maliyet', p: ['Malta’daki dil okulları ve konaklama seçenekleri, İngiltere ve İrlanda’ya kıyasla genellikle daha ekonomiktir. Bu da aynı bütçeyle daha uzun süre eğitim almayı mümkün kılar.'] },
      { h: 'İngilizce resmi dil', p: ['Malta’da İngilizce, Maltacayla birlikte resmi dildir. Günlük hayatta, resmi işlemlerde ve iş dünyasında yaygın olarak kullanılır.'] },
      { h: 'Yakınlık ve iklim', p: ['İstanbul’dan direkt uçuşlarla yaklaşık 2,5 saatte ulaşılan Malta, yılın büyük bölümünde güneşli ve ılıman bir iklime sahiptir. Plaj, tekne turları ve ada gezileri sosyal programın doğal bir parçasıdır.'] },
      { h: 'Schengen vizesi', p: ['Malta bir Schengen ülkesidir. 90 güne kadar programlar Schengen vizesiyle yapılır ve bu vize süresince diğer Schengen ülkelerine seyahat edilebilir.'] },
    ],
  },
  {
    slug: 'neden-irlanda',
    title: 'Neden İrlanda’da dil eğitimi?',
    group: 'Dil okulu',
    program: 'dil',
    countries: ['irlanda'],
    summary: 'Çalışma hakkı, teknoloji ekosistemi ve samimi kültürüyle İrlanda.',
    sections: [
      { h: 'Çalışma imkânı', p: ['İrlanda’da ILEP listesindeki okullarda en az 25 haftalık genel İngilizce programına kayıt olan öğrenciler, Stamp 2 oturum izniyle dönem içinde haftada 20, belirlenen tatil dönemlerinde haftada 40 saate kadar çalışabilir.'] },
      { h: 'Teknoloji ve kariyer', p: ['Dublin, birçok global teknoloji şirketinin Avrupa merkezine ev sahipliği yapar. Dil eğitimi sonrasında yüksek lisans veya kariyer planlayanlar için güçlü bir ağ sunar.'] },
      { h: 'Kültür', p: ['İrlandalılar sıcakkanlı ve sohbeti seven bir toplum olarak bilinir. Bu da gündelik hayatta İngilizce pratik yapmayı kolaylaştırır.'] },
      { h: 'Dikkat edilmesi gerekenler', p: ['Dublin’de konaklama talebi yüksektir; konaklamayı erken planlamak ve ilk haftalar için okul aracılığıyla yer ayırtmak önerilir.'] },
    ],
  },

  /* ================= YAZ OKULU ================= */
  {
    slug: 'yaz-okulu-guvenlik',
    title: 'Yaz okullarında program güvenliği',
    group: 'Yaz okulu',
    program: 'yaz',
    summary: 'Velilerin en çok sorduğu soru: çocuğum yurtdışında güvende mi?',
    sections: [
      { h: 'Gözetim', p: ['Önerdiğimiz yaz okulları 7/24 gözetim sunar. Belirli sayıda öğrenciye bir grup lideri düşer; grup liderleri öğrencilerle birlikte konaklar ve tüm aktivitelere eşlik eder.'] },
      { h: 'Kampüs güvenliği', list: ['Kampüs girişlerinde kontrol ve ziyaretçi kaydı', 'Gece yoklaması ve oda kontrolleri', 'Yaş grubuna göre belirlenen serbest zaman kuralları', 'Acil durumlar için 7/24 ulaşılabilen telefon hattı', 'Kampüste veya yakınında sağlık hizmeti'] },
      { h: 'Aileyle iletişim', p: ['Program boyunca aileler okul ve danışmanımız aracılığıyla bilgilendirilir. Öğrencinin telefon kullanım kuralları ve iletişim saatleri programdan önce veliyle paylaşılır.'] },
    ],
  },
  {
    slug: 'yaz-okulu-gezi-ve-etkinlikler',
    title: 'Yaz okulu gezileri ve etkinlikleri',
    group: 'Yaz okulu',
    program: 'yaz',
    summary: 'Ders sonrasında öğrencileri neler bekliyor: atölyeler, spor, akşam programları ve tam gün geziler.',
    sections: [
      { h: 'Tipik bir hafta', list: ['Hafta içi sabahları seviyeye göre İngilizce dersleri', 'Öğleden sonra spor, sanat, drama veya proje atölyeleri', 'Akşamları disko, yetenek gecesi, film ve quiz geceleri', 'Hafta içi yarım gün şehir gezileri', 'Hafta sonu tam gün geziler'] },
      { h: 'Örnek geziler', p: ['İngiltere programlarında Londra, Oxford, Cambridge, Bath ve Brighton; Malta’da Valletta, Mdina ve Gozo adası; İrlanda’da Dublin şehir merkezi ve kıyı kasabaları sık yapılan gezilerdendir.'] },
      { h: 'Özel ilgi programları', p: ['Futbol, tenis, binicilik, kodlama, liderlik veya sanat gibi alanlarda yoğunlaşmak isteyen öğrenciler için dil derslerini bu aktivitelerle birleştiren programlar bulunur.'] },
    ],
  },
  {
    slug: 'yaz-okulu-hazirlik-listesi',
    title: 'Yaz okulu öncesi hazırlık listesi',
    group: 'Yaz okulu',
    program: 'yaz',
    summary: 'Pasaporttan harçlığa, valizden belgelere kadar yola çıkmadan önce kontrol edilmesi gerekenler.',
    sections: [
      { h: 'Belgeler', list: ['Geçerli pasaport (dönüş tarihinden sonra en az 6 ay)', 'Vize (gerekiyorsa)', 'Noter onaylı muvafakatname', 'Okul kabul ve kayıt belgeleri', 'Sağlık sigortası poliçesi', 'Uçuş ve transfer bilgileri'] },
      { h: 'Valiz', list: ['Yağmurluk ve kat kat giyinmeye uygun kıyafetler', 'Spor ayakkabı ve spor kıyafetleri', 'Adaptör ve şarj aletleri', 'Düzenli kullanılan ilaçlar ve reçeteleri', 'Küçük bir sırt çantası'] },
      { h: 'Harçlık', p: ['Hafta sonu gezilerinin çoğu programa dahildir; harçlık genellikle kişisel alışveriş ve atıştırmalıklar için gereklidir. Önerilen haftalık tutarı programa göre veliyle paylaşıyoruz.'] },
    ],
  },
  {
    slug: 'grup-yaz-okulu',
    title: 'Refakatli grup yaz okulları',
    group: 'Yaz okulu',
    program: 'yaz',
    summary: 'Türkiye’den refakatçi eşliğinde birlikte uçan öğrenci grupları nasıl organize edilir?',
    sections: [
      { h: 'Nasıl işler?', p: ['Uygun dönemlerde aynı programa katılan öğrenciler Türkiye’den bir refakatçi eşliğinde birlikte uçar. Refakatçi havalimanı işlemlerinde ve okul tarafından karşılanana kadar öğrencilerle birliktedir.'] },
      { h: 'Avantajları', list: ['İlk kez yurtdışına çıkan öğrenciler için güven', 'Ailelere düzenli bilgilendirme', 'Uçuş ve transferlerin tek elden organizasyonu'] },
      { h: 'Dikkat', p: ['Grup içinde Türkçe konuşma eğilimini azaltmak için öğrenciler okulda farklı milliyetlerden öğrencilerle aynı sınıf ve odalara yerleştirilir.'] },
    ],
  },

  /* ================= LİSE ================= */
  {
    slug: 'yurtdisinda-lise-secimi',
    title: 'Yurtdışında lise seçimi',
    group: 'Lise',
    program: 'lise',
    summary: 'Yatılı okul mu, aile yanı mı? Okul modellerini ve seçim kriterlerini karşılaştırıyoruz.',
    sections: [
      { h: 'Okul modelleri', list: ['Yatılı okullar (boarding school): kampüste yaşam, yoğun akademik ve sosyal program', 'Özel gündüz okulları ve aile yanı konaklama', 'Devlet okullarında değişim programları (1 dönem – 1 yıl)'] },
      { h: 'Seçim kriterleri', list: ['Öğrencinin bağımsızlık düzeyi ve karakteri', 'Akademik hedef: mezuniyet mi, değişim mi?', 'Sunulan müfredat: A-Level, IB, AP veya yerel diploma', 'Uluslararası öğrenci oranı ve destek hizmetleri', 'Okulun konumu ve ulaşılabilirliği'] },
      { h: 'Ne zaman başvurmalı?', p: ['Yatılı okulların birçoğu bir sonraki eylül dönemi için başvuruları sonbahar ve kış aylarında değerlendirir; giriş sınavı ve mülakat süreçleri olabilir. En az 9–12 ay önceden planlama yapılması önerilir.'] },
    ],
  },
  {
    slug: 'boarding-school-nedir',
    title: 'Boarding school (yatılı okul) nedir?',
    group: 'Lise',
    program: 'lise',
    countries: ['ingiltere', 'amerika', 'kanada', 'isvicre'],
    summary: 'Öğrencilerin okul kampüsünde yaşadığı, akademik ve sosyal hayatın iç içe geçtiği okul modeli.',
    sections: [
      { h: 'Yatılı okulda hayat', p: ['Öğrenciler okul kampüsündeki yatakhanelerde (house) kalır; her yatakhanede öğrencilerden sorumlu bir housemaster veya housemistress bulunur. Günlük program ders, etüt, spor ve kulüp faaliyetlerinden oluşur.'] },
      { h: 'Avantajları', list: ['Disiplinli çalışma ortamı ve öğretmenlere kolay erişim', 'Spor, müzik ve sanatta geniş imkânlar', 'Bağımsızlık ve sorumluluk kazanma', 'Üniversite başvurularında güçlü rehberlik'] },
      { h: 'Vasi (guardian) hizmeti', p: ['18 yaş altındaki uluslararası öğrenciler için okul tatillerinde ve acil durumlarda sorumluluk üstlenen bir vasi atanması genellikle zorunludur. Bu süreci okul ve ailelerle birlikte koordine ediyoruz.'] },
    ],
  },
  {
    slug: 'ib-a-level-ap',
    title: 'IB, A-Level ve AP: farkları nedir?',
    group: 'Lise',
    program: 'lise',
    summary: 'Uluslararası lise programlarının yapısı ve üniversite başvurusuna etkisi.',
    sections: [
      { h: 'International Baccalaureate (IB)', p: ['IB Diploma Programı, altı ders grubu, uzun bir araştırma ödevi (Extended Essay), bilgi kuramı (TOK) ve sosyal sorumluluk projelerinden (CAS) oluşan iki yıllık bir programdır. Dünya genelinde birçok üniversite tarafından tanınır.'] },
      { h: 'A-Level', p: ['İngiliz sisteminde lise son iki yılında genellikle 3–4 derste uzmanlaşılan programdır. İngiltere başta olmak üzere birçok ülkede üniversiteye doğrudan başvuru imkânı sağlar.'] },
      { h: 'Advanced Placement (AP)', p: ['Amerikan sisteminde lise öğrencilerinin üniversite seviyesinde ders alıp sınavına girdiği programdır. Başarılı AP sonuçları Amerika’daki üniversitelerde kredi veya muafiyet sağlayabilir.'] },
      { h: 'Hangisi size uygun?', p: ['Hedef ülke ve bölüm, öğrencinin çalışma tarzı ve güçlü olduğu dersler seçimi belirler. Danışmanlarımız bu kararı üniversite hedefiyle birlikte değerlendirir.'] },
    ],
  },

  /* ================= ÜNİVERSİTE ================= */
  {
    slug: 'foundation-nedir',
    title: 'Foundation programı nedir?',
    group: 'Üniversite',
    program: 'lisans',
    countries: ['ingiltere', 'ispanya', 'kanada', 'avustralya'],
    summary: 'Türkiye’deki lise diplomasıyla doğrudan kabul alınamayan ülkelerde üniversiteye açılan hazırlık yılı.',
    sections: [
      { h: 'Foundation ne işe yarar?', p: ['Foundation, uluslararası öğrencileri üniversite birinci sınıfına hazırlayan bir yıllık akademik programdır. Dil becerilerini geliştirirken seçilen alana yönelik temel dersleri de içerir.'] },
      { h: 'Kimler için?', list: ['12 yıllık lise eğitimini tamamlamış ancak hedef ülkenin giriş koşullarını doğrudan karşılamayanlar', 'İngilizce seviyesi akademik düzeye henüz ulaşmamış öğrenciler', 'Bölüm değiştirmek isteyen veya akademik profilini güçlendirmek isteyenler'] },
      { h: 'Üniversiteye geçiş', p: ['Foundation programını belirlenen not ortalamasıyla tamamlayan öğrenciler, anlaşmalı üniversitelerin birinci sınıfına geçiş hakkı kazanır. Bazı programlar belirli üniversitelere garantili geçiş sunar.'] },
    ],
  },
  {
    slug: 'studienkolleg-nedir',
    title: 'Studienkolleg nedir?',
    group: 'Üniversite',
    program: 'lisans',
    countries: ['almanya'],
    summary: 'Almanya’da üniversiteye doğrudan kabul alamayan uluslararası öğrenciler için hazırlık okulu.',
    sections: [
      { h: 'Neden gerekli?', p: ['Almanya, Türkiye’deki lise diplomasını çoğu durumda üniversiteye doğrudan giriş için yeterli kabul etmez. Bu öğrenciler ya Studienkolleg’i tamamlar ya da Türkiye’de bir üniversitede belirli bir süre başarılı olarak doğrudan başvuru hakkı kazanır.'] },
      { h: 'Program yapısı', p: ['Studienkolleg genellikle iki dönem sürer ve hedeflenen bölüme göre kurslara ayrılır (örneğin T-Kurs teknik bölümler, W-Kurs ekonomi, M-Kurs tıp ve biyoloji). Program sonunda Feststellungsprüfung adlı yeterlilik sınavına girilir.'] },
      { h: 'Giriş koşulları', p: ['Devlet Studienkolleg’lerine giriş için genellikle B1–B2 seviyesinde Almanca ve giriş sınavı gerekir. Almanca hazırlık sürecinizi ve başvuru takviminizi birlikte planlıyoruz.'] },
    ],
  },
  {
    slug: 'turkiyede-okurken-yurtdisina-gecis',
    title: 'Türkiye’de üniversite okurken yurtdışına geçiş',
    group: 'Üniversite',
    program: 'lisans',
    summary: 'Türkiye’de başladığınız lisans eğitimini yurtdışında sürdürmenin yolları.',
    sections: [
      { h: 'Seçenekler', list: ['Yurtdışındaki bir üniversitenin birinci sınıfına yeniden başvurmak', 'Kredi transferiyle ileri sınıflara geçiş (ülkeye ve üniversiteye göre)', 'Değişim programlarıyla bir dönem yurtdışında okuyup ardından transfer değerlendirmek', 'Lisansı Türkiye’de tamamlayıp yüksek lisansı yurtdışında yapmak'] },
      { h: 'Kredi transferi', p: ['Transfer kararını üniversiteler, aldığınız derslerin içerik ve kredilerini kendi programlarıyla karşılaştırarak verir. Ders içerikleri (syllabus) ve transkript bu süreçte en önemli belgelerdir.'] },
      { h: 'Almanya için not', p: ['Almanya’da Türkiye’de belirli bir süre başarılı üniversite eğitimi, Studienkolleg’e gerek kalmadan doğrudan başvuru hakkı sağlayabilir. Koşullar bölüme göre değiştiğinden durumunuzu birlikte değerlendiriyoruz.'] },
    ],
  },
  {
    slug: 'avrupada-uygun-maliyetli-universite',
    title: 'Avrupa’da uygun maliyetli üniversite seçenekleri',
    group: 'Üniversite',
    program: 'lisans',
    countries: ['almanya', 'italya', 'polonya', 'macaristan', 'avusturya'],
    summary: 'Harçsız veya düşük harçlı devlet üniversiteleri ve burs imkânları sunan ülkeler.',
    sections: [
      { h: 'Almanya', p: ['Devlet üniversitelerinin çoğunda harç alınmaz; öğrenciler dönemlik katkı payı öder. Bazı eyaletlerde AB dışı öğrencilerden harç alınabilir. Almanca programlar için Studienkolleg veya dil yeterliliği gerekir.'] },
      { h: 'İtalya', p: ['Devlet üniversitelerinde harçlar aile gelirine göre belirlenir. Bölgesel DSU bursları, şartları sağlayan öğrencilere harç muafiyeti, konaklama ve yemek desteği sunabilir.'] },
      { h: 'Polonya ve Macaristan', p: ['İngilizce programların yaygın olduğu, harçların ve yaşam maliyetinin Batı Avrupa’ya göre düşük olduğu ülkelerdir. Macaristan’da Stipendium Hungaricum devlet bursu önemli bir fırsattır.'] },
      { h: 'Avusturya', p: ['Devlet üniversitelerinde AB dışı öğrenciler için harçlar Avrupa ortalamasının altındadır. Programların çoğu Almancadır.'] },
    ],
  },
  {
    slug: 'avrupada-tip-egitimi',
    title: 'Avrupa’da tıp eğitimi',
    group: 'Üniversite',
    program: 'lisans',
    countries: ['macaristan', 'polonya', 'italya'],
    summary: 'İngilizce tıp programları, giriş sınavları ve denklik süreci hakkında bilinmesi gerekenler.',
    sections: [
      { h: 'Hangi ülkeler?', p: ['Macaristan, Polonya ve İtalya, İngilizce tıp programlarıyla uluslararası öğrencilerin sık tercih ettiği ülkelerdir. Programlar genellikle 6 yıl sürer.'] },
      { h: 'Giriş sınavları', p: ['İtalya’da İngilizce tıp programlarına IMAT sınavıyla girilir. Macaristan ve Polonya’daki üniversiteler genellikle biyoloji ve kimya ağırlıklı kendi giriş sınavlarını veya mülakatlarını uygular.'] },
      { h: 'Türkiye’de çalışmak', p: ['Yurtdışında tıp eğitimi alanların Türkiye’de çalışabilmesi için YÖK denkliği ve ilgili sınav süreçlerini tamamlaması gerekir. Başvuru öncesinde üniversitenin tanınırlığını mutlaka kontrol ediyoruz.'] },
    ],
  },

  /* ================= YÜKSEK LİSANS ================= */
  {
    slug: 'neden-yurtdisinda-yuksek-lisans',
    title: 'Neden yurtdışında yüksek lisans?',
    group: 'Yüksek lisans',
    program: 'yuksek-lisans',
    summary: 'Uluslararası diploma, mezuniyet sonrası çalışma hakları ve global iş ağı.',
    sections: [
      { h: 'Kariyer avantajı', p: ['Yurtdışında yüksek lisans; ikinci bir dili akademik ve profesyonel düzeyde kullanma becerisi, uluslararası bir diploma ve farklı ülkelerden oluşan bir mezun ağı kazandırır.'] },
      { h: 'Kısa süre', p: ['İngiltere ve İrlanda’da birçok yüksek lisans programı 12 ay sürer. Bu, iş hayatına daha hızlı dönmek isteyenler için önemli bir avantajdır.'] },
      { h: 'Mezuniyet sonrası haklar', p: ['İngiltere, İrlanda, Kanada, Almanya ve Avustralya gibi ülkeler, mezunlarına belirli süre çalışma veya iş arama izni tanır. Koşullar ülkelerin göç politikalarına göre değişebileceğinden başvuru sırasında güncel durumu birlikte kontrol ediyoruz.'] },
      { h: 'Alan değiştirme', p: ['Bazı ülkelerde lisans alanından farklı bir alanda yüksek lisans yapmak mümkündür. Bu, kariyer yönünü değiştirmek isteyenler için önemli bir fırsattır.'] },
    ],
  },
  {
    slug: 'yuksek-lisans-basvurusu',
    title: 'Yurtdışında yüksek lisans başvurusu nasıl yapılır?',
    group: 'Yüksek lisans',
    program: 'yuksek-lisans',
    summary: 'Program seçiminden kabul mektubuna kadar adım adım başvuru süreci.',
    sections: [
      { h: '1. Program araştırması', p: ['Program modülleri, akademik kadro, staj imkânları, mezunların kariyer verileri ve kabul koşulları karşılaştırılır. Güvenli, orta seviye ve hedef programlardan dengeli bir liste oluşturulur.'] },
      { h: '2. Belgeler', list: ['Lisans diploması ve transkript (tercümeli)', 'Dil yeterlilik belgesi', 'Motivasyon mektubu (her programa özel)', '2–3 referans mektubu', 'Akademik CV', 'Varsa GRE / GMAT skoru veya portfolyo'] },
      { h: '3. Başvuru ve takip', p: ['Başvurular çoğunlukla üniversitelerin kendi portalları veya ortak platformlar üzerinden yapılır. Ek belge taleplerine ve mülakat davetlerine hızlı yanıt vermek önemlidir.'] },
      { h: '4. Kabul sonrası', p: ['Koşullu veya koşulsuz kabul mektupları değerlendirilir, depozito ödenir ve vize, konaklama süreçleri başlatılır.'] },
    ],
  },
  {
    slug: 'mba-rehberi',
    title: 'Yurtdışında MBA rehberi',
    group: 'Yüksek lisans',
    program: 'yuksek-lisans',
    summary: 'MBA programlarının türleri, başvuru koşulları ve doğru okul seçimi.',
    sections: [
      { h: 'MBA türleri', list: ['Tam zamanlı MBA (1–2 yıl)', 'Executive MBA: çalışan yöneticiler için hafta sonu veya modüler program', 'Online ve hibrit MBA', 'Uzmanlık MBA programları (finans, teknoloji, sağlık yönetimi vb.)'] },
      { h: 'Başvuru koşulları', p: ['Çoğu MBA programı 2–3 yıl ve üzeri iş deneyimi ister. GMAT veya GRE skoru, mülakat, kariyer hedeflerini anlatan makaleler ve referanslar başvurunun temelini oluşturur.'] },
      { h: 'Okul seçimi', p: ['Akreditasyonlar (AACSB, EQUIS, AMBA), mezunların kariyer verileri, sınıf profili ve okulun güçlü olduğu sektörler seçimde belirleyicidir.'] },
    ],
  },
  {
    slug: 'pre-master-programlari',
    title: 'Pre-master programları',
    group: 'Yüksek lisans',
    program: 'yuksek-lisans',
    summary: 'Yüksek lisansa doğrudan kabul için dil veya akademik koşulları henüz karşılamayanlara köprü program.',
    sections: [
      { h: 'Nedir?', p: ['Pre-master, yüksek lisans öncesinde akademik İngilizce, araştırma yöntemleri ve alan derslerini içeren bir dönem veya bir yıllık hazırlık programıdır.'] },
      { h: 'Kimler için?', list: ['Dil skoru programın istediği seviyenin altında olanlar', 'Lisans not ortalaması doğrudan kabul için yeterli olmayanlar', 'Farklı bir alanda yüksek lisans yapmak isteyenler'] },
      { h: 'Geçiş', p: ['Programı başarıyla tamamlayan öğrenciler anlaşmalı üniversitenin yüksek lisans programına geçiş hakkı kazanır.'] },
    ],
  },

  /* ================= WORK AND STUDY ================= */
  {
    slug: 'work-and-study-nedir',
    title: 'Work and Study nedir, ne değildir?',
    group: 'Work and Study',
    program: 'work-study',
    summary: 'Eğitimle birlikte gelen çalışma hakkını doğru anlamak.',
    sections: [
      { h: 'Nedir?', p: ['Work and study, öğrenci vizesiyle eğitim alırken ülkenin tanıdığı saat sınırları içinde yasal olarak çalışma imkânıdır. Dil okulu, kolej veya üniversite programlarıyla planlanabilir.'] },
      { h: 'Ne değildir?', list: ['Bir iş veya göçmenlik programı değildir; öncelik eğitimdir', 'İş garantisi içermez; iş arama süreci öğrenciye aittir', 'Devam zorunluluğu vardır; derslere katılmamak vize statüsünü riske atar', 'Kazanç genellikle tüm masrafları karşılamaz; finansal yeterlilik gerekir'] },
      { h: 'Doğru beklenti', p: ['Yarı zamanlı çalışma, günlük yaşam giderlerinin bir kısmını karşılamaya ve uluslararası iş deneyimi kazanmaya yardımcı olur. Uzun vadeli planınızı ve bütçenizi ön görüşmede birlikte netleştiriyoruz.'] },
    ],
  },
  {
    slug: 'work-and-study-basvuru-sartlari',
    title: 'Work and Study başvuru şartları',
    group: 'Work and Study',
    program: 'work-study',
    summary: 'Yaş, dil seviyesi, program süresi ve finansal yeterlilik koşulları.',
    sections: [
      { h: 'Genel şartlar', list: ['18 yaşını doldurmuş olmak', 'Geçerli pasaport', 'Ülkenin çalışma izni tanıdığı uzunlukta ve türde bir programa kayıt', 'Eğitim ücretinin ödendiğine dair belge', 'Finansal yeterlilik (ülkeye göre belirlenen tutar)', 'Sağlık sigortası'] },
      { h: 'Ülkeye göre farklar', p: ['İrlanda’da ILEP listesindeki okullarda en az 25 haftalık programlar, Kanada’da co-op içeren kolej programları, Avustralya’da öğrenci vizesi kapsamındaki programlar çalışma hakkı sağlar. Malta’da ise uzun dönem programlarda belirli bir süre sonra koşullu çalışma izni başvurusu yapılabilir.'] },
      { h: 'Vize dosyası', p: ['Eğitim geçmişi, mevcut iş durumu ve programın kariyer planına katkısını açıklayan tutarlı bir dosya, vize değerlendirmesinde belirleyicidir.'] },
    ],
  },
  {
    slug: 'avustralya-mi-irlanda-mi',
    title: 'Work and Study: Avustralya mı, İrlanda mı?',
    group: 'Work and Study',
    program: 'work-study',
    countries: ['avustralya', 'irlanda'],
    summary: 'İki popüler work and study ülkesini maliyet, mesafe ve çalışma koşullarıyla karşılaştırıyoruz.',
    sections: [
      { h: 'Mesafe ve uçuş', p: ['İrlanda Türkiye’ye yaklaşık 4–5 saatlik uçuş mesafesindeyken Avustralya’ya aktarmalı uçuşlar 20 saati aşar. Aileye yakınlık ve bilet maliyeti bu karşılaştırmada önemlidir.'] },
      { h: 'Çalışma koşulları', p: ['İrlanda’da uygun programlarda dönem içinde haftada 20 saat; Avustralya’da iki haftalık periyotta belirlenen saat sınırına kadar çalışılabilir. Avustralya’da saatlik ücretler genellikle daha yüksektir, yaşam maliyeti de öyle.'] },
      { h: 'Uzun vadeli plan', p: ['Avustralya, dil eğitiminden sonra mesleki eğitim (VET) ve üniversiteye geçiş yolları sunar. İrlanda ise Avrupa’da yüksek lisans ve teknoloji sektöründe kariyer hedefleyenler için avantajlıdır.'] },
    ],
  },
  {
    slug: 'yurtdisinda-part-time-is-bulma',
    title: 'Yurtdışında part-time iş nasıl bulunur?',
    group: 'Work and Study',
    program: 'work-study',
    summary: 'CV’den iş görüşmesine, öğrencilerin ilk işini bulma rehberi.',
    sections: [
      { h: 'Hazırlık', list: ['Ülke formatında, bir sayfalık CV', 'Yerel telefon numarası ve banka hesabı', 'Vergi numarası (ülkeye göre PPS, SIN, TFN vb.)', 'Referans verebilecek kişiler'] },
      { h: 'Nerede aranır?', p: ['Online iş platformları, okulların iş panoları, kafe ve mağazalara doğrudan CV bırakmak ve öğrenci toplulukları en yaygın yollardır. Turizm sezonu öncesi başvurmak şansı artırır.'] },
      { h: 'İlk haftalar', p: ['İş bulma süresi şehre, sezona ve dil seviyesine göre değişir. İlk birkaç ayın giderlerini karşılayacak bir bütçeyle yola çıkmanızı öneriyoruz.'] },
    ],
  },

  /* ================= SINAVLAR ================= */
  {
    slug: 'ielts',
    title: 'IELTS sınavı',
    group: 'Sınavlar',
    countries: ['ingiltere', 'irlanda', 'avustralya', 'kanada', 'yeni-zelanda'],
    summary: 'İngiltere, İrlanda, Avustralya, Kanada ve Avrupa’daki üniversitelerin en yaygın kabul ettiği İngilizce yeterlilik sınavı.',
    facts: [
      { label: 'Bölümler', value: 'Listening, Reading, Writing, Speaking' },
      { label: 'Süre', value: 'Yaklaşık 2 sa 45 dk' },
      { label: 'Puan', value: '0–9 band' },
      { label: 'Geçerlilik', value: '2 yıl (çoğu kurum için)' },
    ],
    sections: [
      { h: 'Academic ve General Training', p: ['Üniversite başvuruları için IELTS Academic, göç ve bazı iş başvuruları için General Training sınavı alınır. Dinleme ve konuşma bölümleri iki türde aynıdır; okuma ve yazma bölümleri farklıdır.', 'İngiltere vize başvurularında bazı durumlarda IELTS for UKVI sürümü istenebilir; hangi sürüme girmeniz gerektiğini başvuru öncesinde birlikte kontrol ediyoruz.'] },
      { h: 'Sınav bölümleri', list: ['Listening (yaklaşık 30 dk): 4 bölüm, 40 soru', 'Reading (60 dk): 3 uzun metin, 40 soru', 'Writing (60 dk): grafik yorumlama (Task 1) ve kompozisyon (Task 2)', 'Speaking (11–14 dk): sınav görevlisiyle yüz yüze görüşme'] },
      { h: 'Hangi skor gerekir?', p: ['Lisans programları çoğunlukla 6.0–6.5, yüksek lisans programları 6.5–7.0 genel skor ister. Bazı bölümler her alt bölüm için minimum puan şartı koyar. Dil okullarına kayıt için IELTS gerekmez.'] },
      { h: 'Kâğıt mı, bilgisayar mı?', p: ['Sınav kâğıt veya bilgisayar üzerinden alınabilir. Bilgisayarlı sınavda sonuçlar genellikle daha kısa sürede açıklanır.'] },
      { h: 'Hazırlık önerileri', list: ['Sınav formatını deneme sınavlarıyla tanıyın', 'Writing Task 2 için düzenli kompozisyon yazın ve geri bildirim alın', 'Speaking bölümü için bir partnerle süre tutarak pratik yapın', 'Reading bölümünde zaman yönetimine özellikle dikkat edin', 'Yurtdışında IELTS hazırlık modüllü dil programlarını değerlendirin'] },
    ],
  },
  {
    slug: 'toefl',
    title: 'TOEFL iBT',
    group: 'Sınavlar',
    countries: ['amerika', 'kanada'],
    summary: 'Başta Amerika ve Kanada olmak üzere dünya genelinde binlerce kurumun kabul ettiği internet tabanlı İngilizce sınavı.',
    facts: [
      { label: 'Bölümler', value: 'Reading, Listening, Speaking, Writing' },
      { label: 'Format', value: 'Bilgisayar tabanlı' },
      { label: 'Geçerlilik', value: '2 yıl' },
      { label: 'Kabul', value: 'ABD, Kanada ve Avrupa' },
    ],
    sections: [
      { h: 'Kimler için uygun?', p: ['Amerika’da lisans ve yüksek lisans hedefleyen öğrenciler için en yaygın tercih edilen sınavdır. Sınav merkezinde veya evden (Home Edition) alınabilir.'] },
      { h: 'Skor beklentileri', p: ['Üniversiteler genellikle 80–100 arası toplam skor ister; seçici programlar daha yüksek skor talep edebilir. Hedef okulların güncel şartlarını başvuru öncesinde birlikte kontrol ediyoruz.'] },
      { h: 'IELTS mi, TOEFL mı?', p: ['İki sınav da çoğu üniversite tarafından kabul edilir. Amerikan aksanına ve bilgisayar başında yazmaya alışkın olanlar TOEFL’ı, yüz yüze konuşma bölümünü tercih edenler IELTS’i seçebilir.'] },
    ],
  },
  {
    slug: 'duolingo-english-test',
    title: 'Duolingo English Test',
    group: 'Sınavlar',
    summary: 'Evden, online ve kısa sürede alınabilen, birçok üniversitenin kabul ettiği İngilizce yeterlilik testi.',
    facts: [
      { label: 'Süre', value: 'Yaklaşık 1 saat' },
      { label: 'Puan', value: '10–160' },
      { label: 'Sonuç', value: 'Birkaç gün içinde' },
      { label: 'Geçerlilik', value: '2 yıl' },
    ],
    sections: [
      { h: 'Avantajları', list: ['Evden, istenen zamanda alınabilir', 'Kısa süreli ve ekonomiktir', 'Sonuçlar hızlı açıklanır'] },
      { h: 'Sınırları', p: ['Her üniversite ve her vize türü tarafından kabul edilmez. Başvuru yapmadan önce hedef programın Duolingo’yu kabul edip etmediğini ve minimum skoru kontrol etmek gerekir.'] },
    ],
  },
  {
    slug: 'pte-academic',
    title: 'PTE Academic',
    group: 'Sınavlar',
    countries: ['avustralya', 'ingiltere', 'yeni-zelanda'],
    summary: 'Tamamen bilgisayar tabanlı, yapay zekâ ile puanlanan İngilizce yeterlilik sınavı.',
    facts: [
      { label: 'Süre', value: 'Yaklaşık 2 saat' },
      { label: 'Puan', value: '10–90' },
      { label: 'Sonuç', value: 'Genellikle birkaç gün' },
      { label: 'Geçerlilik', value: '2 yıl' },
    ],
    sections: [
      { h: 'Sınav yapısı', p: ['Konuşma ve yazma, okuma ve dinleme bölümlerinden oluşur. Konuşma bölümü dahil tüm sınav bilgisayarda yapılır ve otomatik puanlanır.'] },
      { h: 'Nerede geçerli?', p: ['Avustralya ve Yeni Zelanda’da yaygın olarak kabul edilir; İngiltere ve Kanada’da da birçok kurum ve bazı vize türleri için kullanılabilir.'] },
    ],
  },
  {
    slug: 'cambridge-sinavlari',
    title: 'Cambridge İngilizce sınavları',
    group: 'Sınavlar',
    summary: 'B2 First, C1 Advanced ve C2 Proficiency: süresiz geçerli uluslararası İngilizce sertifikaları.',
    sections: [
      { h: 'Sınav seviyeleri', list: ['B2 First (FCE): orta-üst seviye', 'C1 Advanced (CAE): ileri seviye, birçok üniversite tarafından kabul edilir', 'C2 Proficiency (CPE): en üst seviye'] },
      { h: 'Avantajı', p: ['Cambridge sertifikalarının süresi dolmaz. Bu yönüyle özellikle kariyer ve iş başvuruları için kalıcı bir belge sağlar.'] },
      { h: 'Hazırlık', p: ['Yurtdışındaki birçok dil okulu, 8–12 haftalık Cambridge sınav hazırlık kursları düzenler ve kurs sonunda öğrencileri sınava kaydeder.'] },
    ],
  },
  {
    slug: 'sat-act',
    title: 'SAT ve ACT',
    group: 'Sınavlar',
    countries: ['amerika'],
    summary: 'Amerika’da lisans başvurularında kullanılan standart akademik yetenek sınavları.',
    sections: [
      { h: 'SAT', p: ['SAT, okuma-yazma ve matematik bölümlerinden oluşan, dijital formatta yapılan bir sınavdır. Toplam puan 400–1600 arasındadır.'] },
      { h: 'ACT', p: ['ACT; İngilizce, matematik, okuma ve fen bölümlerinden oluşur ve 1–36 arasında puanlanır.'] },
      { h: 'Hâlâ gerekli mi?', p: ['Birçok Amerikan üniversitesi “test-optional” politikası uygulasa da güçlü bir skor başvuruyu ve burs şansını olumlu etkileyebilir. Bazı üniversiteler sınav şartını yeniden zorunlu hale getirmiştir.'] },
      { h: 'Ne zaman girilmeli?', p: ['Lise 11. sınıfta ilk denemenin yapılması, 12. sınıfın başında gerekirse ikinci kez girilmesi önerilir.'] },
    ],
  },
  {
    slug: 'gre-gmat',
    title: 'GRE ve GMAT',
    group: 'Sınavlar',
    summary: 'Yüksek lisans ve MBA başvurularında istenebilen analitik ve sayısal yetenek sınavları.',
    sections: [
      { h: 'Hangisi, kimin için?', p: ['GMAT ağırlıklı olarak işletme ve MBA programlarında, GRE ise mühendislik, fen ve sosyal bilimlerde istenir. Günümüzde birçok işletme okulu GRE skorunu da kabul etmektedir.'] },
      { h: 'Her programda şart mı?', p: ['Hayır. Avrupa’daki birçok yüksek lisans programı GRE veya GMAT istemez. Hedef programlarınıza göre sınava ihtiyaç olup olmadığını birlikte belirliyoruz.'] },
      { h: 'Hazırlık süresi', p: ['Çoğu aday için 2–3 aylık düzenli çalışma önerilir. Sınav skorları genellikle 5 yıl geçerlidir.'] },
    ],
  },
  {
    slug: 'testdaf-goethe-telc',
    title: 'TestDaF, DSH, Goethe ve telc',
    group: 'Sınavlar',
    countries: ['almanya', 'avusturya', 'isvicre'],
    summary: 'Almanya ve Avusturya’da eğitim için kullanılan Almanca yeterlilik sınavları.',
    sections: [
      { h: 'Üniversite için', p: ['Almanca eğitim veren programlar genellikle TestDaF (her bölümden TDN 4), DSH-2, Goethe-Zertifikat C1/C2 veya telc C1 Hochschule ister.'] },
      { h: 'Dil kursu ve vize için', p: ['Studienkolleg başvuruları ve bazı vize türleri için A1–B2 arası seviye belgeleri yeterli olabilir.'] },
      { h: 'Hazırlık', p: ['Almanya’daki dil okullarında bu sınavlara yönelik hazırlık kursları düzenlenir. Dil eğitimi ve sınav takvimini üniversite başvuru tarihleriyle birlikte planlıyoruz.'] },
    ],
  },
  {
    slug: 'imat',
    title: 'IMAT sınavı',
    group: 'Sınavlar',
    countries: ['italya'],
    summary: 'İtalya’daki devlet üniversitelerinin İngilizce tıp ve diş hekimliği programlarına giriş sınavı.',
    sections: [
      { h: 'Sınav içeriği', p: ['IMAT; mantık ve problem çözme, genel bilgi, biyoloji, kimya, fizik ve matematik sorularından oluşan çoktan seçmeli bir sınavdır.'] },
      { h: 'Takvim', p: ['Sınav yılda bir kez yapılır; kayıt ve sınav tarihleri her yıl İtalya Eğitim Bakanlığı tarafından duyurulur. Universitaly ön kaydı ve vize süreci bu takvimle birlikte planlanmalıdır.'] },
      { h: 'Hazırlık', p: ['Biyoloji ve kimya ağırlıklı olduğundan lise müfredatının iyi tekrar edilmesi ve geçmiş yılların sorularıyla deneme yapılması önerilir.'] },
    ],
  },
  {
    slug: 'italya-giris-sinavlari',
    title: 'İtalya giriş sınavları: TOLC ve CEnT-S',
    group: 'Sınavlar',
    countries: ['italya'],
    summary: 'Mühendislik, ekonomi ve fen bölümleri için İtalyan üniversitelerinin kullandığı giriş sınavları.',
    sections: [
      { h: 'TOLC', p: ['TOLC, CISIA konsorsiyumuna üye üniversitelerin kullandığı online giriş sınavlarıdır. TOLC-I mühendislik, TOLC-E ekonomi, TOLC-F eczacılık gibi alanlara yöneliktir.'] },
      { h: 'CEnT-S', p: ['CEnT-S, uluslararası öğrencilerin İngilizce programlara başvurusunda kullanılan, birçok ülkede alınabilen bir giriş sınavıdır.'] },
      { h: 'Hangi sınav gerekir?', p: ['Gereken sınav üniversiteye ve bölüme göre değişir. Hedef programlarınızın şartlarını başvuru takviminizle birlikte değerlendiriyoruz.'] },
    ],
  },

  /* ================= BAŞVURU ================= */
  {
    slug: 'universite-basvuru-rehberi',
    title: 'Lisans ve yüksek lisans başvuru rehberi',
    group: 'Başvuru',
    program: 'lisans',
    summary: 'Yurtdışında lisans ve yüksek lisans başvurusunun adım adım yol haritası.',
    sections: [
      { h: '1. Hedefleri belirleyin', p: ['Alan, ülke, bütçe ve mezuniyet sonrası planınızı netleştirin. Bu dört kriter başvuru listenizin çerçevesini çizer.'] },
      { h: '2. Uygunluk şartlarını kontrol edin', list: ['Diploma ve not ortalaması şartları', 'Dil sınavı ve minimum skorlar', 'Varsa giriş sınavları (SAT, GRE, IMAT, TOLC)', 'Portfolyo veya ön koşul dersler'] },
      { h: '3. Belgeleri hazırlayın', list: ['Transkript ve diploma (tercümeli)', 'Motivasyon mektubu (her okul için ayrı)', 'Referans mektupları', 'CV', 'Pasaport kopyası'] },
      { h: '4. Başvurun ve takip edin', p: ['Başvuru tarihleri ülkeden ülkeye değişir. Erken başvuru hem kabul hem burs açısından avantaj sağlar. Başvurudan sonra mülakat davetlerine ve ek belge taleplerine hızla yanıt verin.'] },
      { h: '5. Kabul sonrası', p: ['Kabul mektubunu değerlendirin, depozitoyu ödeyin, konaklama ve vize sürecini başlatın. Mentörlük paketimiz bu adımların tamamını kapsar.'] },
    ],
  },
  {
    slug: 'basvuru-takvimi',
    title: 'Yurtdışı eğitim başvuru takvimi',
    group: 'Başvuru',
    summary: 'Hangi program için ne kadar önceden hazırlanmalısınız?',
    sections: [
      { h: 'Programa göre planlama', list: ['Dil okulu: 1–3 ay önce (vize gereken ülkelerde daha erken)', 'Yaz okulu: 4–6 ay önce, ideal kayıt dönemi ocak – mart', 'Lise: 9–12 ay önce', 'Lisans: 12 ay önce; birçok ülkede başvurular eğitimden önceki sonbaharda açılır', 'Yüksek lisans: 9–12 ay önce; burslar için daha erken', 'Work and study: 3–4 ay önce'] },
      { h: 'Vize süreleri', p: ['Vize başvurularının değerlendirme süreleri sezona göre uzayabilir. Yaz aylarında randevu yoğunluğu arttığı için başvuruların erken planlanmasını öneriyoruz.'] },
    ],
  },
  {
    slug: 'motivasyon-mektubu-nasil-yazilir',
    title: 'Motivasyon mektubu nasıl yazılır?',
    group: 'Başvuru',
    summary: 'Başvurunuzun kaderini belirleyen belgede dikkat edilmesi gerekenler.',
    sections: [
      { h: 'Yapı', list: ['Giriş: alana ilgi duymanızı sağlayan somut bir deneyim', 'Akademik geçmiş ve projeler', 'Programın size neden uygun olduğu (modüller, akademisyenler)', 'Kariyer hedefleri ve programın katkısı', 'Kapanış'] },
      { h: 'Sık yapılan hatalar', list: ['Tüm okullara aynı mektubu göndermek', 'Genel ve klişe ifadeler kullanmak', 'CV’yi tekrar etmek', 'Kelime sınırını aşmak'] },
      { h: 'Her okul için ayrı mektup', p: ['Okulların eğitim felsefesi ve öncelikleri farklıdır. Bazıları araştırma deneyimine, bazıları liderlik ve topluma katkıya önem verir. Mektubu her programın beklentisine göre uyarlamak kabul şansını artırır.'] },
    ],
  },
  {
    slug: 'referans-mektubu',
    title: 'Referans mektubu kimden ve nasıl alınır?',
    group: 'Başvuru',
    summary: 'Akademik ve profesyonel referans mektuplarının içeriği ve doğru kişiyi seçmek.',
    sections: [
      { h: 'Kimden alınmalı?', list: ['Akademik referans: ders aldığınız veya proje yürüttüğünüz öğretmen ve akademisyenler', 'Profesyonel referans: staj veya iş yerinizdeki yöneticiler', 'Gönüllü çalışmalarda birlikte çalıştığınız kurum temsilcileri'] },
      { h: 'İyi bir mektupta neler olur?', list: ['Referans verenin kendini ve sizinle ilişkisini tanıtması', 'Somut örneklerle güçlü yönleriniz', 'Programa uygunluğunuz', 'İletişim bilgileri ve imza'] },
      { h: 'Zamanlama', p: ['Referans verecek kişilere en az 3–4 hafta önceden haber verin ve başvuru yaptığınız programlar hakkında kısa bir özet paylaşın.'] },
    ],
  },
  {
    slug: 'yurtdisi-burs-rehberi',
    title: 'Yurtdışı eğitimde burs imkânları',
    group: 'Başvuru',
    summary: 'Devlet, üniversite ve kurum burslarına genel bakış.',
    sections: [
      { h: 'Burs türleri', list: ['Devlet bursları (örneğin Macaristan Stipendium Hungaricum, Kore GKS)', 'Bölgesel burslar (örneğin İtalya DSU)', 'Üniversitelerin akademik başarı bursları ve harç indirimleri', 'Spor ve sanat bursları (özellikle Amerika)', 'Erasmus+ gibi değişim programı hibeleri'] },
      { h: 'Başvurularda başarı', p: ['Burs başvuruları genellikle normal başvuru takviminden daha erken kapanır. Güçlü not ortalaması, dil skoru, ders dışı faaliyetler ve özenle hazırlanmış bir motivasyon mektubu belirleyicidir.'] },
      { h: 'Gerçekçi beklenti', p: ['Tam burslar oldukça rekabetçidir. Kısmi burs ve harç indirimleri ise daha yaygındır. Profilinize uygun burs fırsatlarını başvuru stratejisine dahil ediyoruz.'] },
    ],
  },

  /* ================= VİZE & BELGELER ================= */
  {
    slug: 'ogrenci-vizesi-rehberi',
    title: 'Öğrenci vizesi rehberi',
    group: 'Vize & Belgeler',
    summary: 'Öğrenci vizesi başvurusunda sık istenen belgeler ve dikkat edilmesi gerekenler.',
    sections: [
      { h: 'Sık istenen belgeler', list: ['Pasaport ve fotoğraf', 'Okul kabul belgesi (CAS, I-20 vb.)', 'Finansal yeterlilik: banka mektubu ve hesap dökümü', 'Sponsor mektubu ve sponsorun gelir belgeleri', 'Konaklama belgesi', 'Sağlık sigortası', 'Öğrenciyse öğrenci belgesi, çalışıyorsa işveren yazısı'] },
      { h: 'Ret riskini azaltmak', p: ['Belgeler arasındaki tutarlılık, finansal belgelerin geçmişi ve eğitim planının mantığı vize memurlarının en çok dikkat ettiği unsurlardır. Dosyanızı göndermeden önce her belgeyi birlikte kontrol ediyoruz.'] },
      { h: 'Mülakat', p: ['Amerika gibi bazı ülkelerde vize mülakatı yapılır. Neden bu programı ve ülkeyi seçtiğinizi, masraflarınızı nasıl karşılayacağınızı ve eğitim sonrası planlarınızı net şekilde anlatabilmeniz önemlidir.'] },
    ],
  },
  {
    slug: 'vize-reddi-sonrasi',
    title: 'Vize reddi sonrası ne yapılmalı?',
    group: 'Vize & Belgeler',
    summary: 'Ret gerekçesini anlamak ve yeni başvuruyu güçlendirmek.',
    sections: [
      { h: 'Ret yazısını inceleyin', p: ['Konsolosluklar ret kararında genellikle gerekçe belirtir. Finansal yetersizlik, eğitim planının tutarsızlığı veya eksik belge en sık karşılaşılan nedenlerdir.'] },
      { h: 'Yeni başvuru', list: ['Ret gerekçesini doğrudan karşılayan ek belgeler hazırlayın', 'Eğitim planınızı ve motivasyonunuzu daha net açıklayın', 'Finansal belgelerin kaynağını ve sürekliliğini gösterin', 'Gerekirse itiraz (appeal) seçeneğini değerlendirin'] },
      { h: 'Bizim rolümüz', p: ['Vize kararı konsolosluğun takdirindedir. Biz ret gerekçesini analiz eder, yeni başvurunuzu bu gerekçeleri karşılayacak şekilde yeniden yapılandırırız.'] },
    ],
  },
  {
    slug: 'yok-denkligi',
    title: 'YÖK denkliği',
    group: 'Vize & Belgeler',
    summary: 'Yurtdışında alınan diplomanın Türkiye’de tanınması için bilinmesi gerekenler.',
    sections: [
      { h: 'Neden önemli?', p: ['Türkiye’de kamu sektöründe çalışmak, lisansüstü eğitime devam etmek veya bazı mesleklerde lisans almak için yurtdışı diplomanızın YÖK tarafından denkliğinin tanınması gerekir.'] },
      { h: 'Okul seçerken', p: ['Başvuru öncesinde üniversitenin YÖK tarafından tanınan kurumlar arasında olup olmadığını kontrol edin. Tampa olarak yalnızca tanınırlığı olan kurumlarla çalışıyoruz. Denklik koşulları zaman zaman güncellendiğinden, karar öncesinde güncel mevzuatı birlikte kontrol ediyoruz.'] },
      { h: 'Süreçte istenen belgeler', list: ['Diploma ve transkript (onaylı ve tercümeli)', 'Pasaport giriş-çıkış kayıtları', 'Ders içerikleri', 'Bazı durumlarda seviye tespit sınavı'] },
    ],
  },
  {
    slug: 'saglik-sigortasi',
    title: 'Yurtdışı eğitimde sağlık sigortası',
    group: 'Vize & Belgeler',
    summary: 'Vize için zorunlu sigorta türleri ve kapsamda dikkat edilmesi gerekenler.',
    sections: [
      { h: 'Ülkeye göre gereklilikler', list: ['Schengen ülkeleri: belirlenen minimum teminatlı seyahat sağlık sigortası', 'İngiltere: uzun dönem vizelerde Immigration Health Surcharge (IHS) ödemesi', 'Avustralya: Overseas Student Health Cover (OSHC)', 'Amerika: okulun belirlediği öğrenci sağlık sigortası'] },
      { h: 'Kapsam', p: ['Acil tedavi, hastane yatışı ve tıbbi nakil teminatlarının yeterli olduğundan emin olun. Paket programlarımızda sağlık sigortası fiyata dahildir.'] },
    ],
  },

  /* ================= YAŞAM ================= */
  {
    slug: 'konaklama-secenekleri',
    title: 'Yurtdışında konaklama seçenekleri',
    group: 'Yaşam',
    summary: 'Aile yanı, yurt, rezidans ve öğrenci evi arasında doğru seçimi yapmak.',
    sections: [
      { h: 'Aile yanı (host family)', p: ['Dili günlük hayatta pratik etmenin ve kültürü içeriden tanımanın en etkili yoludur. Genellikle tek kişilik oda, kahvaltı ve akşam yemeği dahil olarak sunulur. Okula ulaşım süresi şehre göre değişebilir.'] },
      { h: 'Öğrenci yurdu ve rezidans', p: ['Diğer uluslararası öğrencilerle bir arada yaşanan, okula yakın, sosyal ortamlardır. Rezidanslarda özel banyolu odalar, ortak mutfak ve çalışma alanları bulunur.'] },
      { h: 'Öğrenci evi', p: ['Uzun dönem öğrenciler için daha bağımsız ve ekonomik bir seçenektir. İlk haftalarda okul konaklamasında kalıp şehri tanıdıktan sonra öğrenci evine geçmek yaygın bir yöntemdir.'] },
      { h: 'Seçim kriterleri', list: ['Bütçe', 'Okula ve toplu taşımaya yakınlık', 'Yemek dahil olup olmaması', 'Bağımsızlık ve sosyal ortam tercihi', 'Yaş (18 yaş altı için kurallar farklıdır)'] },
    ],
  },
  {
    slug: 'yurtdisi-butce-planlama',
    title: 'Yurtdışı eğitim bütçesi nasıl planlanır?',
    group: 'Yaşam',
    summary: 'Eğitim ücreti dışında hesaba katılması gereken kalemler.',
    sections: [
      { h: 'Bütçe kalemleri', list: ['Okul ücreti ve kayıt ücreti', 'Konaklama', 'Vize ve sigorta', 'Uçak bileti', 'Yerel ulaşım', 'Yemek ve günlük giderler', 'Ders materyalleri', 'Sosyal aktiviteler ve seyahat'] },
      { h: 'İpuçları', p: ['Şehir seçimi bütçeyi en çok etkileyen faktördür. Aynı ülkede başkent yerine ikinci büyük şehri seçmek konaklama giderlerini ciddi oranda düşürebilir. Her şey dahil paketlerimiz bütçe sürprizlerini ortadan kaldırmak için tasarlandı.'] },
      { h: 'Kur riski', p: ['Okul ücretleri genellikle döviz cinsindendir. Ödemeleri planlarken kur dalgalanmalarını hesaba katmak ve ödeme takvimini önceden netleştirmek önemlidir.'] },
    ],
  },
  {
    slug: 'yurtdisina-cikmadan-once-kontrol-listesi',
    title: 'Yurtdışına çıkmadan önce kontrol listesi',
    group: 'Yaşam',
    summary: 'Belgelerden bankacılığa, telefondan valize; kalkıştan önce yapılacaklar.',
    sections: [
      { h: 'Belgeler', list: ['Pasaport ve vize', 'Okul kabul ve kayıt belgeleri', 'Konaklama onayı ve adresi', 'Sigorta poliçesi', 'Belgelerin dijital kopyaları'] },
      { h: 'Para ve iletişim', list: ['Yurtdışında kullanılabilen banka kartı', 'İlk günler için bir miktar yerel para', 'Yurtdışı paket veya yerel SIM kart planı', 'Acil durum iletişim bilgileri'] },
      { h: 'Varış günü', list: ['Havalimanı transferi veya karşılama bilgisi', 'Konaklamaya giriş saati', 'Okulun ilk gün programı', 'Tampa danışmanınızın iletişim bilgisi'] },
    ],
  },
  {
    slug: 'kultur-soku',
    title: 'Kültür şokuyla başa çıkmak',
    group: 'Yaşam',
    summary: 'Yeni bir ülkeye uyum sürecinin evreleri ve kolaylaştıran alışkanlıklar.',
    sections: [
      { h: 'Uyum evreleri', p: ['Çoğu öğrenci ilk haftalarda heyecan, ardından günlük farklılıklardan kaynaklanan bir yorgunluk ve özlem dönemi yaşar. Zamanla rutinler oturur ve yeni ortam alışılmış hale gelir. Bu süreç oldukça doğaldır.'] },
      { h: 'Kolaylaştıran alışkanlıklar', list: ['Okulun sosyal etkinliklerine katılmak', 'Farklı milliyetlerden arkadaş edinmek', 'Düzenli bir uyku ve spor rutini oluşturmak', 'Ailenizle belirli aralıklarla iletişim kurmak', 'Zorlandığınızda okulun öğrenci danışmanına veya bize ulaşmak'] },
    ],
  },
]

export const guideBySlug = Object.fromEntries(guides.map((g) => [g.slug, g])) as Record<string, Guide>
export const guidesForProgram = (k: ProgramKey) => guides.filter((g) => g.program === k)
export const guidesForCountry = (slug: string) => guides.filter((g) => g.countries?.includes(slug))
