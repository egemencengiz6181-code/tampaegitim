import type { Faq } from './programs'

export type ServiceBlock =
  | { type: 'text'; title: string; body: string[] }
  | { type: 'list'; title: string; intro?: string; items: string[] }
  | { type: 'cards'; title: string; intro?: string; items: { title: string; text: string }[] }
  | { type: 'steps'; title: string; intro?: string; items: { title: string; text: string; points?: string[] }[] }
  | { type: 'quiz'; title: string; intro: string; questions: { q: string; options: string[] }[] }
  | { type: 'note'; title: string; body: string }

export type Service = {
  slug: string
  path: string
  name: string
  short: string
  category: 'Mentörlük' | 'Danışmanlık' | 'Akademi'
  image: string
  lead: string
  summary: string
  highlights: string[]
  blocks: ServiceBlock[]
  faqs?: Faq[]
}

export const services: Service[] = [
  {
    slug: 'universite-basvuru-ve-mentorluk-paketi',
    path: '/tampa-yurtdisi-egitim-universite-basvuru-ve-mentorluk-paketi',
    name: 'Üniversite Başvuru ve Mentörlük Paketi',
    short: 'Başvuru & mentörlük',
    category: 'Mentörlük',
    image: '/img/misc/application.jpg',
    lead: 'Bu özel danışmanlık ve mentörlük paketi, yurtdışında eğitim hedeflerinizi en iyi şekilde gerçekleştirmenize yardımcı olmak için tasarlanmıştır.',
    summary: 'Sürecin her aşamasında size rehberlik ederek en iyi fırsatları değerlendirmenizi sağlıyoruz: 5 üniversite başvurusu, motivasyon mektupları, referanslar, CV, portfolyo, mülakat ve vize.',
    highlights: ['Sizin adınıza 5 üniversite başvurusu', 'Her üniversiteye özel motivasyon mektubu', 'Referans mektubu içerik desteği', 'Uluslararası formatta CV', 'Portfolyo düzenleme desteği', 'Mülakat provaları', 'Vize danışmanlığı'],
    blocks: [
      {
        type: 'text',
        title: 'Sizin adınıza yapacağımız 5 üniversite başvurusu',
        body: [
          'Bu hizmet kapsamında, öğrencilerimizin hedeflerine ve akademik geçmişlerine en uygun 5 üniversiteye başvurularını eksiksiz şekilde gerçekleştiriyoruz. Süreç, başvuru yapılan her okulun gereklilikleri ve başvuru tarihleri dikkate alınarak profesyonelce yönetilir.',
        ],
      },
      {
        type: 'steps',
        title: 'Süreç nasıl işler?',
        intro: 'Danışmanlık hizmetimizi alan ve almak isteyen her öğrenci, sürecin en başında alanında uzman bir mentörümüzle 15 dakikalık birebir veya Zoom görüşmesi gerçekleştirir.',
        items: [
          {
            title: 'Öğrenci profili ve hedef analizi',
            text: 'Mentörümüz, öğrencinin akademik geçmişini, dil seviyesini, güçlü ve gelişime açık yönlerini değerlendirir.',
            points: ['Akademik geçmiş: not ortalaması, mezun olunan okul ve bölüm', 'Dil yeterliliği: IELTS, TOEFL veya diğer sınav skorları', 'Yurtdışı eğitim beklentileri: üniversite, şehir ve yaşam tarzı tercihleri'],
          },
          {
            title: 'Üniversite ve program seçimi için stratejik planlama',
            text: 'Mentörümüz, öğrencinin hedeflerine en uygun 5 üniversite ve bölümü belirlemek için bir yol haritası oluşturur.',
            points: ['Kabul kriterleri ve öğrenciye uygunluk değerlendirilir', 'Güvenli, orta seviye ve ulaşılması zor hedef okullar belirlenir', 'Bölüm seçiminde dikkat edilmesi gerekenler anlatılır'],
          },
          {
            title: 'Motivasyon mektubu (SOP) yazımı',
            text: 'Motivasyon mektubu, üniversitelerin öğrenci hakkında bilgi edindiği en önemli belgedir. Mentörümüz eşliğinde her üniversiteye ayrı motivasyon mektubu yazılır.',
            points: ['Birebir görüşmeyle kişisel hedefler belirlenir', 'Her üniversitenin beklentisine göre özel içerik oluşturulur', 'Dil ve yazım açısından detaylı redaksiyon yapılır', 'Özgünlük analiziyle mektubun tamamen kişiye özel olması sağlanır'],
          },
          {
            title: 'Referans mektupları',
            text: 'Lisans başvurularında genellikle 1–2, yüksek lisans ve doktorada en az 2, bazen 3 referans istenir. Referans veren kişinin öğrenci hakkında yetkin bir otoriteye sahip olması gerekir.',
            points: ['Referans alınacak kişilerin belirlenmesi', 'Her üniversitenin kriterlerine uygun mektup içeriği', 'Referans veren kişiyle koordinasyon', 'Dil ve akademik üslup düzenlemeleri'],
          },
          {
            title: 'CV hazırlama',
            text: 'Kişisel bilgilerden referanslara kadar 9 başlıkta, uluslararası standartlara uygun bir CV hazırlanır.',
            points: ['Uluslararası formatta yapı', 'Dil ve anlatım hatalarının düzeltilmesi', 'Güçlü yönleri öne çıkaran içerik', 'Başvuruyu zayıflatacak bilgilerin çıkarılması'],
          },
          {
            title: 'Portfolyo düzenleme',
            text: 'Mimarlık, tasarım, güzel sanatlar, moda, fotoğrafçılık, sahne sanatları ve teknik proje sunumu gerektiren bölümler için mevcut portfolyonuz değerlendirilir ve güçlendirilir.',
          },
          {
            title: 'Mülakat hazırlığı',
            text: 'Formatın belirlenmesinden deneme mülakatlarına, beden dilinden zor sorulara kadar kapsamlı hazırlık.',
            points: ['Mülakat formatı ve beklentilerin analizi', 'Kişiye özel soru-cevap çalışmaları', 'Özgüven ve beden dili çalışmaları', 'Deneme mülakatları (mock interview)'],
          },
          {
            title: 'Vize danışmanlığı',
            text: 'Kabulün ardından vize sürecinin eksiksiz ve hatasız tamamlanması için kapsamlı destek.',
            points: ['Vize türünün belirlenmesi', 'Gerekli evrakların hazırlanması', 'Finansal yeterlilik belgeleri', 'Başvuru formları ve randevu takibi', 'Vize mülakatına hazırlık'],
          },
        ],
      },
      {
        type: 'text',
        title: 'Neden her üniversiteye ayrı motivasyon mektubu?',
        body: [
          'Okulların eğitim felsefesi, akademik yaklaşımı ve öncelikleri farklıdır. Bazı üniversiteler öğrencinin araştırma ilgisini ön plana koyarken, bazıları liderlik ve topluma katkıya önem verir. “Kopyala-yapıştır” yöntemi risklidir, fark edilir ve başvurunun elenmesine yol açabilir.',
          'Örneğin Harvard ve UCL’ye başvuran bir öğrenci düşünelim. Harvard liderlik, toplumsal etki ve yenilikçi düşünmeye odaklanırken, UCL araştırma projeleri ve akademik başarıları daha çok ön plana çıkarır.',
        ],
      },
      {
        type: 'list',
        title: 'Portfolyo hangi alanlarda gereklidir?',
        items: ['Mimarlık ve iç mimarlık', 'Endüstriyel tasarım ve ürün tasarımı', 'Grafik tasarım ve görsel iletişim tasarımı', 'Güzel sanatlar (resim, heykel, seramik)', 'Moda tasarımı ve tekstil', 'Fotoğrafçılık ve dijital sanatlar', 'Sahne sanatları (tiyatro, dans, müzik, film, animasyon)', 'Mühendislik ve teknik proje sunumları'],
      },
      {
        type: 'note',
        title: 'Bilmeniz gerekenler',
        body: 'Portfolyo düzenleme desteği sıfırdan portfolyo oluşturmayı kapsamaz; mevcut portfolyonuz üzerinden değerlendirme ve yönlendirme yapılır. Vize onayı tamamen ilgili konsolosluğun takdirinde olduğundan kesin vize garantisi verilmez, ancak sürecin en doğru şekilde yürütülmesi sağlanır.',
      },
    ],
    faqs: [
      { q: 'Paket kaç üniversite başvurusunu kapsıyor?', a: 'Paket, hedeflerinize ve akademik geçmişinize en uygun 5 üniversiteye yapılacak başvuruyu kapsar.' },
      { q: 'İlk görüşme ücretli mi?', a: 'Mentörümüzle yapacağınız 15 dakikalık ilk görüşme, ihtiyaçlarınızı anlamak için yapılır ve sizi hiçbir şeye bağlamaz.' },
      { q: 'Vize garantisi veriyor musunuz?', a: 'Vize kararı konsolosluğun takdirindedir; bu nedenle hiçbir kurum kesin garanti veremez. Biz dosyanızın eksiksiz ve doğru hazırlanmasını garanti altına alırız.' },
    ],
  },
  {
    slug: 'kariyer-rehberligi-ve-mentorluk-programi',
    path: '/kariyer-rehberligi-ve-mentorluk-programi',
    name: 'Kariyer Rehberliği ve Mentörlük Programı',
    short: 'Kariyer rehberliği',
    category: 'Mentörlük',
    image: '/img/misc/career.jpg',
    lead: 'Gençlerin veya kariyer değiştirmek isteyen bireylerin hangi meslek dalına uygun olduklarını keşfetmeleri ve mesleki eğitim sürecine hazırlanmalarını amaçlayan kapsamlı bir rehberlik süreci.',
    summary: 'Berufsorientierung Ausbildung yaklaşımıyla hazırlanan program; toplam 90 dakikalık 3 birebir oturumda yetenek, ilgi ve kişilik analizini bölüm, üniversite ve ülke seçimine dönüştürür.',
    highlights: ['3 birebir danışmanlık oturumu', 'Yetenek, ilgi ve kişilik testleri', 'Kişiye özel meslek önerileri', 'Bölüm, üniversite ve ülke seçimi', 'Burslu üniversiteye hazırlık desteği'],
    blocks: [
      {
        type: 'list',
        title: 'Kimlere yöneliktir?',
        items: ['14 yaş ve üzeri tüm gençler', 'Meslek seçiminde kararsız kalan bireyler', 'Hangi alana yönelmesi gerektiğini bilmeyen ya da güçlü yönlerini henüz keşfedememiş kişiler', 'Kendine en uygun üniversite ve ülkeyi seçmek isteyen öğrenciler'],
      },
      {
        type: 'steps',
        title: 'Program neler sunar?',
        intro: 'Toplamda 90 dakikalık 3 ayrı birebir danışmanlık oturumu içerir.',
        items: [
          { title: 'Tanışma ve oryantasyon', text: 'Öğrenciyle tanışılır, profil analizi ve oryantasyon testleri uygulanır.', points: ['Hedefler, kaygılar ve beklentiler değerlendirilir', 'Soru-cevap bölümüyle öğrencinin düşünsel yapısı daha iyi anlaşılır'] },
          { title: 'Kişilik ve yetenek analizi', text: 'İlk oturumdaki testlerin sonuçları değerlendirilir; güçlü ve gelişime açık yönler ortaya konur.', points: ['İlgi alanlarına göre potansiyel kariyer yolları analiz edilir', 'Öğrenciye özel meslek önerileri sunulur', 'Karar verme becerileri güçlendirilir'] },
          { title: 'Bölüm, üniversite ve ülke seçimi', text: 'Analizlere göre uygun bölüm, üniversite ve ülke alternatifleri sunulur.', points: ['Kabul için gerekli belgeler ve şartlar aktarılır', 'Gerekli sertifika, sınav ve yeterlilikler açıklanır', 'Öğrencinin karakterine uygun ülke kültürüyle eşleştirme yapılır'] },
        ],
      },
      {
        type: 'cards',
        title: 'Uygulanan testlere örnekler',
        items: [
          { title: 'Yetenek testleri', text: 'Sayısal ve mantıksal düşünme, göz-el koordinasyonu, hafıza ve dikkat becerileri gibi pratik başarı alanlarını ölçer.' },
          { title: 'İlgi alanı testleri', text: 'Öğrencinin neye ilgi duyduğunu ve hangi alanlarda motive olduğunu belirler: insanlarla mı, teknik işlerle mi?' },
          { title: 'Kişilik testleri', text: 'İş ortamındaki davranış biçimleri, stres yönetimi, takım çalışması ve liderlik becerilerini analiz eder.' },
        ],
      },
      {
        type: 'quiz',
        title: 'Kendini tanı: örnek test',
        intro: 'Aşağıdaki sorular öğrencinin kendine yönelik farkındalığını artırmak için hazırlanmıştır. Seçimlerini yap, oturumda birlikte yorumlayalım.',
        questions: [
          { q: 'Hangi tür aktiviteler seni en çok mutlu eder?', options: ['Yeni şeyler keşfetmek ve araştırmak', 'Başkalarına yardım etmek ve insanlarla ilgilenmek', 'Bir şeyler tamir etmek veya inşa etmek', 'Yaratıcı projeler üzerinde çalışmak', 'Matematiksel veya mantıksal problemler çözmek'] },
          { q: 'Bir grup projesinde en çok hangi rolü üstlenmek istersin?', options: ['Planlamayı ve organizasyonu yapmak', 'Takım arkadaşlarına moral vermek', 'Teknik işleri halletmek', 'Tasarım ve sunum hazırlamak', 'Verileri analiz edip en iyi çözümü bulmak'] },
          { q: 'Hangi ders seni en çok ilgilendiriyor?', options: ['Fen bilimleri (biyoloji, kimya, fizik)', 'Sosyal bilimler (tarih, psikoloji, felsefe)', 'Teknoloji ve mühendislik', 'Sanat ve edebiyat', 'Matematik ve ekonomi'] },
        ],
      },
      {
        type: 'cards',
        title: 'Programın kazandırdıkları',
        items: [
          { title: 'Meslek seçimi için kapsamlı analiz', text: 'Uzman mentör eşliğinde birebir görüşmelerde değerler, yetenekler ve kariyer hedefleri detaylı değerlendirilir; bilişsel beceriler, duygusal zekâ, liderlik ve problem çözme kapasitesi ortaya çıkarılır.' },
          { title: 'Güçlü yönleri keşfetme', text: 'Katılımcı hangi alanlarda güçlü olduğunu ve neleri geliştirmesi gerektiğini öğrenir; öneriler iş dünyasının değişen ihtiyaçları dikkate alınarak oluşturulur.' },
          { title: 'Üniversite ve ülke seçiminde destek', text: 'Hangi ülke ve üniversitenin hedeflerle daha uyumlu olduğu sunulur; akademik kriterler, dil yeterlilikleri ve başvuru süreçleri detaylı aktarılır.' },
          { title: 'Burslu üniversiteye hazırlık', text: 'Portfolyo, gönüllü çalışmalar, ders dışı aktiviteler ve gerekli sertifikalar hakkında yönlendirme yapılır.' },
        ],
      },
    ],
  },
  {
    slug: 'vize-danismanligi',
    path: '/hizmetler/vize-danismanligi',
    name: 'Vize Danışmanlığı',
    short: 'Vize',
    category: 'Danışmanlık',
    image: '/img/misc/office-1.jpg',
    lead: 'Vize başvurularında yapılan en küçük hata bile sürecin uzamasına veya reddedilmesine neden olabilir. Tüm adımları titizlikle takip ediyoruz.',
    summary: 'Öğrenci, ziyaretçi ve kısa dönem eğitim vizelerinde evrak listesinden mülakat provasına kadar uçtan uca dosya hazırlığı.',
    highlights: ['Vize türünün belirlenmesi', 'Evrak listesi ve hazırlığı', 'Finansal yeterlilik belgeleri', 'Form doldurma ve randevu takibi', 'Mülakat hazırlığı', 'Ret durumlarına karşı çözümler'],
    blocks: [
      {
        type: 'steps',
        title: 'Vize sürecinde neler yapıyoruz?',
        items: [
          { title: 'Vize türünün belirlenmesi', text: 'Program süresi, ülke ve amaca göre doğru vize kategorisini belirleriz.' },
          { title: 'Gerekli evrakların listelenmesi ve hazırlanması', text: 'Size özel bir evrak listesi hazırlar, her belgeyi kontrol ederiz.' },
          { title: 'Finansal yeterlilik belgelerinin düzenlenmesi', text: 'Banka mektubu, sponsor mektubu ve hesap dökümlerinin konsolosluk beklentisine uygunluğunu kontrol ederiz.' },
          { title: 'Başvuru formlarının doldurulması', text: 'Online formları sizinle birlikte, eksiksiz ve tutarlı şekilde doldururuz.' },
          { title: 'Randevu sürecinin takibi ve planlanması', text: 'Yoğun dönemleri göz önünde bulundurarak randevunuzu zamanında planlarız.' },
          { title: 'Vize mülakatına hazırlık', text: 'Amerika gibi mülakat gerektiren ülkeler için deneme görüşmeleri yaparız.' },
          { title: 'Biyometrik işlemler ve sağlık sigortası', text: 'Biyometri randevusu ve ülke şartlarına uygun sigorta için yönlendirme.' },
          { title: 'Ekstra talepler ve ret durumları', text: 'Ek belge taleplerine ve olası ret durumlarına karşı çözüm üretiriz.' },
        ],
      },
      {
        type: 'note',
        title: 'Önemli not',
        body: 'Vize onayı tamamen ilgili konsolosluğun takdirinde olduğu için kesin vize garantisi verilmez; ancak sürecin en doğru şekilde yürütülmesi sağlanır.',
      },
    ],
  },
  {
    slug: 'egitim-danismanligi',
    path: '/hizmetler/egitim-danismanligi',
    name: 'Eğitim Danışmanlığı',
    short: 'Eğitim danışmanlığı',
    category: 'Danışmanlık',
    image: '/img/misc/office-2.jpg',
    lead: 'Doğru ülke, doğru okul ve doğru program: kararınızı verirken ihtiyaç duyduğunuz bilgiyi tek bir danışmandan alın.',
    summary: 'Dil okulundan yüksek lisansa kadar tüm programlarda profil analizi, okul karşılaştırması, kayıt, konaklama ve varış sonrası destek.',
    highlights: ['Ücretsiz ön görüşme', 'Profil ve bütçe analizi', 'Karşılaştırmalı okul teklifleri', 'Kayıt ve konaklama', 'Havalimanı karşılama', 'Eğitim boyunca takip'],
    blocks: [
      {
        type: 'cards',
        title: 'Danışmanlık kapsamı',
        items: [
          { title: 'Öğrenci profilinin değerlendirilmesi', text: 'Akademik geçmiş, dil seviyesi, bütçe ve hedeflerinize göre size en uygun seçenekleri çıkarırız.' },
          { title: 'Ülke, şehir ve okul seçimi', text: 'Akredite okullar arasından karşılaştırmalı, şeffaf teklifler sunarız.' },
          { title: 'Başvuru ve kayıt', text: 'Tüm başvuru ve kayıt işlemlerini sizin adınıza gerçekleştiririz.' },
          { title: 'Belgelerin düzenlenmesi', text: 'Gerekli belgeleri eksiksiz hazırlar ve kurumlara iletiriz.' },
          { title: 'Konaklama ayarlamaları', text: 'Yurt, aile yanı veya öğrenci evi seçeneklerini okulla birlikte planlarız.' },
          { title: 'Varış ve yerleşim', text: 'Havalimanı karşılaması ve ilk günlerde uyum desteği sağlarız.' },
        ],
      },
    ],
  },
  {
    slug: 'konaklama',
    path: '/hizmetler/konaklama',
    name: 'Konaklama Danışmanlığı',
    short: 'Konaklama',
    category: 'Danışmanlık',
    image: '/img/misc/izmir.jpg',
    lead: 'Yurtdışında güvenli ve konforlu bir başlangıç için doğru konaklama, en az okul seçimi kadar önemlidir.',
    summary: 'Öğrenci yurtları, aile yanı, rezidans ve paylaşımlı öğrenci evleri arasında bütçenize ve yaşam tarzınıza uygun seçimi birlikte yapıyoruz.',
    highlights: ['Aile yanı (host family)', 'Öğrenci yurdu ve rezidans', 'Paylaşımlı öğrenci evi', 'Kampüs içi konaklama', 'Havalimanı transferi'],
    blocks: [
      {
        type: 'cards',
        title: 'Konaklama seçenekleri',
        items: [
          { title: 'Aile yanı', text: 'Dili günlük hayatta pratik etmenin ve kültürü içeriden tanımanın en etkili yolu. Genellikle kahvaltı ve akşam yemeği dahildir.' },
          { title: 'Öğrenci yurdu', text: 'Diğer uluslararası öğrencilerle bir arada, okula yakın ve sosyal bir ortam. Tek veya çift kişilik odalar.' },
          { title: 'Rezidans', text: 'Özel banyolu odalar, ortak çalışma alanları ve 7/24 güvenlik sunan modern öğrenci yapıları.' },
          { title: 'Öğrenci evi', text: 'Uzun dönem öğrenciler için bağımsız ve ekonomik paylaşımlı daireler.' },
        ],
      },
    ],
  },
  {
    slug: 'sinav-hazirlik',
    path: '/hizmetler/sinav-hazirlik',
    name: 'Sınav Danışmanlığı',
    short: 'Sınavlar',
    category: 'Danışmanlık',
    image: '/img/misc/akademi.jpg',
    lead: 'Hangi sınava, ne zaman ve hangi skorla girmeniz gerektiğini hedef okullarınıza göre birlikte planlayalım.',
    summary: 'IELTS, TOEFL, Duolingo, PTE, SAT, GRE, GMAT, TestDaF ve Goethe gibi sınavlarda doğru sınav seçimi, takvim ve hazırlık yönlendirmesi.',
    highlights: ['Hedef skor analizi', 'Sınav takvimi planlaması', 'Yurtdışında sınav hazırlık kursları', 'Sınav kaydı yönlendirmesi'],
    blocks: [
      {
        type: 'text',
        title: 'Doğru sınavı seçmek',
        body: [
          'Her üniversite ve program farklı dil ve yetenek sınavlarını kabul eder. Hedef okullarınızın kabul ettiği sınavları ve minimum skorları baştan bilmek, gereksiz sınav masrafından ve zaman kaybından korur.',
          'Bilgi bankamızda her sınavın formatını, süresini, puanlamasını ve hangi ülkelerde geçerli olduğunu ayrıntılı olarak anlattık.',
        ],
      },
    ],
  },
]

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s])) as Record<string, Service>

export const academy = {
  title: 'Tampa Akademi',
  lead: 'Tampa Akademi, lise ve üniversite öğrencilerine özel hazırlanmış kariyer ve akademik danışmanlık programlarıyla yurt dışı hedeflerine en doğru adımlarla ulaşmanı sağlar.',
  about: 'Tampa Akademi, Tampa Eğitim’in uzman danışmanları tarafından hazırlanan özel bir akademik gelişim platformudur. Amacımız, genç bireyleri hem akademik başarıya hem de kariyer hedeflerine ulaştıracak rehberlik hizmetleriyle desteklemektir.',
  tracks: [
    { title: 'Kariyer ve meslek danışmanlığı', kicker: 'Yurt dışında kariyer yapın', text: 'Kariyer yolculuğuna doğru adımlarla başlamak isteyen öğrenciler için hazırlanmış bu danışmanlık, hem kişisel farkındalık hem de mesleki yönelim kazandırmayı amaçlar.', href: '/kariyer-rehberligi-ve-mentorluk-programi', image: '/img/misc/career.jpg' },
    { title: 'Üniversite başvuru danışmanlığı', kicker: 'Yurt dışında üniversite okuyun', text: 'Tampa Akademi, yurt dışında üniversite eğitimi almak isteyen öğrenciler için kapsamlı bir başvuru süreci danışmanlığı sunar.', href: '/tampa-yurtdisi-egitim-universite-basvuru-ve-mentorluk-paketi', image: '/img/misc/application.jpg' },
  ],
  pillars: [
    { title: 'Kişiselleştirilmiş danışmanlık', text: 'Her öğrenciye özel hazırlanan birebir yol haritaları ile hedef odaklı rehberlik.' },
    { title: 'Uzman kadro', text: 'Yurt dışı başvuru süreçlerinde uzman, akademik geçmişi güçlü danışman ekibi.' },
    { title: 'Kariyer odaklı hizmetler', text: 'Üniversite başvurusundan meslek seçimine kadar kapsamlı destek.' },
    { title: 'Gerçek başarı hikâyeleri', text: 'Tampa Akademi ile yurt dışı hayallerine ulaşan öğrencilerden ilham veren örnekler.' },
    { title: 'Sürekli takip ve geri bildirim', text: 'Danışmanlık süreci boyunca düzenli kontrol, gelişim takibi ve geri bildirim sistemi.' },
    { title: 'Gelişmiş test ve analiz araçları', text: 'Kariyer testleri, ilgi envanterleri ve akademik değerlendirme araçları ile bilimsel yönlendirme.' },
  ],
}
