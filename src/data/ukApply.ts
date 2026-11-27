// /ingiltere-universite-basvuru: Google Ads için eğitim odaklı İngiltere üniversite sayfası (src/pages/UkApply.tsx).
// Menüde yer almaz ama indekslenir (sitemap'te var, noindex yok).
//
// Reklam politikası notu: bu sayfanın metinlerinde vize ile ilgili hiçbir ifade, vize süreci, vize ücreti veya
// finansal yeterlilik tutarı YER ALMAZ; vize danışmanlığı sayfasına gövdeden bağlantı verilmez. Resmi bir sistemi
// (ör. UCAS) öğrenci adına işlettiğimizi ima eden ifade kullanılmaz. Metin eklerken bu kurala uyun.
import { site } from './site'
import { ukUcas2027 } from './uk'
import type { AdLanding } from './adLanding'

export const ukApplyPath = '/ingiltere-universite-basvuru'

export const ukApplyLanding: AdLanding = {
  h1: 'İngiltere’de Üniversite Eğitimi',
  sub: 'Not ortalamanıza, İngilizce seviyenize ve bütçenize uygun bölümü ve üniversiteyi birlikte seçiyor; Foundation, International Year One veya doğrudan lisans yolunda başvuru dosyanızı birlikte hazırlıyoruz.',
  band: { label: 'Eylül 2027 girişi için', value: 'ücretsiz ön görüşme' },
  promises: [
    { icon: 'user', text: 'Not ortalaması, İngilizce seviyesi ve bütçeye göre profil değerlendirmesi' },
    { icon: 'cap', text: 'Bölüm ve üniversite seçimi, size uygun giriş yolu' },
    { icon: 'file', text: 'Motivasyon mektubu, CV ve referans desteği' },
    { icon: 'pin', text: 'Kabul sonrası konaklama (yurt) desteği' },
  ],
  trust: `${site.experienceYears} yıllık deneyim · ${site.studentCount} öğrenci · Google’da ${site.googleRating} (${site.googleReviewCount} yorum)`,
  region: 'İzmir ve Aydın ofislerimizde ya da online görüşmeyle.',
  form: { kind: 'education', title: 'Ücretsiz Danışmanlık Görüşmesi', note: 'Formu bırakın, eğitim danışmanımız sizi arasın.', cta: 'Ücretsiz danışmanlık al', program: 'Üniversite' },
  logos: ['Queen Mary University of London', 'Manchester Metropolitan University', 'University of Liverpool'],
}

export const ukApplyServices = [
  { title: 'Profil değerlendirmesi', text: 'Not ortalamanızı, İngilizce seviyenizi, hedef bölümünüzü ve bütçenizi birlikte değerlendirir; gerçekçi seçenekleri baştan netleştiririz.' },
  { title: 'Bölüm ve üniversite seçimi', text: 'İlgi alanınıza, kariyer hedefinize, şehir tercihinize ve bütçenize göre kısa bir üniversite listesi hazırlarız.' },
  { title: 'Doğru giriş yolu', text: 'Foundation, International Year One veya doğrudan lisans: akademik geçmişinize ve İngilizce seviyenize en uygun yolu birlikte seçeriz.' },
  { title: 'Başvuru dosyası', text: 'Motivasyon mektubu (personal statement), CV ve referans mektupları için yönlendirme ve geri bildirim veririz; dosyanızı eksiksiz hazırlamanıza yardımcı oluruz.' },
  { title: 'Kabul tekliflerinin karşılaştırılması', text: 'Gelen koşullu ve koşulsuz teklifleri bölüm içeriği, şehir, toplam maliyet ve koşullar açısından yan yana koyar, karar vermenize yardımcı oluruz.' },
  { title: 'Konaklama (yurt) desteği', text: 'Üniversite yurdu veya özel öğrenci yurdu seçeneklerini karşılaştırır, bütçenize ve kampüse uygun konaklamayı bulmanıza destek oluruz.' },
]

export const ukApplySteps = [
  { title: 'Tanışma', text: 'Ofiste, telefonla veya online; hedef bölümü, notları, İngilizce seviyesini ve bütçeyi konuşuruz.' },
  { title: 'Okul listesi', text: 'Size uygun giriş yolunu belirler, bölüm ve üniversitelerden oluşan kısa listeyi birlikte çıkarırız.' },
  { title: 'Başvuru dosyası', text: 'Motivasyon mektubu, CV, referanslar, transkript ve dil belgeleriyle dosyanızı birlikte tamamlarız.' },
  { title: 'Kabul', text: 'Kabul tekliflerini karşılaştırır, koşulların tamamlanma takvimini birlikte planlarız.' },
  { title: 'Yerleşme', text: 'Yurt seçimi ve ilk haftaya hazırlık için kontrol listesiyle yeni şehrinize hazırlanırsınız.' },
]

export const ukApplyFaqs = [
  {
    q: 'Foundation nedir?',
    a: 'Foundation, İngiltere’de lisansa başlamadan önce okunan genellikle bir yıllık akademik hazırlık programıdır. Türk lise diplomasıyla başvuran öğrencilerin çoğu lisansa Foundation ile geçer. Bazı üniversitelerde Foundation yerine International Year One seçeneği vardır; bu programı tamamlayan öğrenci lisansın ikinci yılından devam eder. IB veya A-Level diploması olan öğrenciler ise doğrudan lisansa başvurabilir.',
  },
  {
    q: 'Ne zaman başvurmalıyım?',
    a: `İdeal olarak öğrenime başlamak istediğiniz tarihten yaklaşık bir yıl önce planlamaya başlamanızı öneriyoruz. Eylül 2027 girişinde doğrudan lisans başvuruları için Oxford, Cambridge, tıp, diş hekimliği ve veterinerlik bölümlerinde son tarih ${ukUcas2027.earlyDeadline}, diğer bölümlerde eşit değerlendirme son tarihi ${ukUcas2027.equalConsideration} olarak açıklandı. Foundation ve International Year One başvuruları çoğunlukla üniversiteye doğrudan ve daha esnek tarihlerle yapılır; yine de popüler programlarda kontenjanlar erken dolabilir.`,
  },
  {
    q: 'IELTS gerekli mi?',
    a: 'Çoğu üniversite İngilizce yeterliliğinizi belgelemenizi ister; en yaygın kabul edilen sınav IELTS Academic’tir. Foundation programlarında genellikle lisansa göre daha düşük bir puan yeterlidir. Bazı üniversiteler farklı sınavları da kabul eder. Puanınız henüz yeterli değilse, üniversitelerin programa başlamadan önce sunduğu akademik İngilizce kurslarıyla eksiği tamamlamak mümkündür. Hangi puana ihtiyacınız olduğunu seçtiğiniz bölüm ve üniversiteye göre birlikte netleştiririz.',
  },
  {
    q: 'İngiltere’den aldığım diploma Türkiye’de geçerli mi?',
    a: 'YÖK’ün tanıdığı İngiltere üniversitelerinden alınan lisans diplomaları için Türkiye’de YÖK’e denklik başvurusu yapılır. Tıp, diş hekimliği, eczacılık, hukuk gibi bazı mesleklerde denklik için ek sınav veya şartlar istenebilir. Bu nedenle bölüm ve üniversite seçimini, Türkiye’de çalışmayı düşünüp düşünmediğinizi de hesaba katarak yapıyoruz.',
  },
]
