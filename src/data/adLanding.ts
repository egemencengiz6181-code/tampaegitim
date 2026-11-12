// Google Ads landing page'leri (2026-11): program × ülke sayfalarının ekranın üstündeki dönüşüm bölümü.
// URL'ler DEĞİŞMEZ; reklamlar bu adreslere gider. Uzun SEO içeriği (deep.ts) aşağıda olduğu gibi kalır.
import { site } from './site'
import { ukSummer } from './uk'

export type AdLanding = {
  /** Reklam anahtar kelimesi + fayda */
  h1: string
  sub: string
  /** Sakin uyarı bandı (geri sayım yok) */
  band: { label: string; value: string }
  /** İkonlu kısa maddeler */
  promises: { icon: string; text: string }[]
  /** Vaadin altındaki küçük dipnot */
  footnote?: string
  /** "15 yıllık deneyim · 5.000+ öğrenci · Google'da 5.0 (89 yorum)" */
  trust: string
  region: string
  form: { kind: 'university' | 'summer'; title: string; note: string; cta: string; program: string }
  /** src/data/social.ts > universities içindeki adlar (form civarında logo şeridi) */
  logos?: string[]
}

// TODO(Tampa): Google puanı ve yorum sayısı elle güncelleniyor (site.ts > googleRating, googleReviewCount); güncel tutun.
const trust = `${site.experienceYears} yıllık deneyim · ${site.studentCount} öğrenci · Google’da ${site.googleRating} (${site.googleReviewCount} yorum)`

/** Tampa'nın İngiltere üniversite başvurusu için son günü. TODO(Tampa): 31 Ocak 2027'nin kapsamını teyit edin (UCAS eşit değerlendirme tarihi 13 Ocak 2027). */
export const ukApplyDeadline = '31 Ocak 2027'

export const adLandings: Record<string, AdLanding> = {
  'lisans:ingiltere': {
    h1: 'İngiltere Üniversitelerine Ücretsiz Başvuru',
    sub: 'İngiltere, İskoçya, Galler ve Kuzey İrlanda’daki üniversitelere başvurunuzu profil analizinden kabul mektubuna kadar biz yönetiyoruz. Danışmanlık için ücret almıyoruz.',
    band: { label: 'Son başvuru', value: ukApplyDeadline },
    promises: [
      { icon: 'check', text: 'Birleşik Krallık üniversitelerine ücretsiz başvuru' },
      { icon: 'user', text: 'Profil analiziyle bölüm ve üniversiteyi birlikte seçiyoruz' },
      { icon: 'cap', text: 'Mevcut burslardan faydalandırıyoruz' },
      { icon: 'pin', text: 'Konaklama seçenekleri sunuyoruz' },
      { icon: 'bolt', text: 'Başvurularda öncelik sağlıyoruz' },
    ],
    footnote: 'UCAS’ın kendi başvuru ücreti öğrenci tarafından ödenir.',
    trust,
    region: 'İzmir ve Aydın ofislerimizde ya da online görüşmeyle. Manisa, Balıkesir, Muğla ve Çanakkale’den öğrencilere de hizmet veriyoruz.',
    form: { kind: 'university', title: 'Ücretsiz Başvuru Görüşmesi', note: 'Aynı gün içinde sizi arıyoruz.', cta: 'Ücretsiz Başvuru Görüşmesi Al', program: 'Üniversite' },
    // TODO(Tampa): resmi anlaşmalı İngiltere üniversiteleri listesini teyit edin (yalnızca social.ts'teki çözüm ortakları gösterilir)
    logos: ['Queen Mary University of London', 'Manchester Metropolitan University', 'University of Liverpool'],
  },
  'yaz:ingiltere': {
    h1: 'İngiltere Yaz Okulu ve Yaz Kampı 2027',
    sub: `${ukSummer.ages} için kampüs konaklamalı, 7/24 gözetimli yaz okulları; uygun dönemlerde İzmir’den refakatçili grup uçuşu. 2027 kayıtları açık.`,
    band: { label: 'Popüler kampüsler erken doluyor · Önerilen kayıt tarihi', value: ukSummer.registrationDeadline },
    promises: [
      { icon: 'shield', text: '7/24 gözetim ve acil durum hattı' },
      // TODO(Tampa): 2027 refakatçili grup uçuşu tarihleri, kampüs ve kontenjan bilgisi
      { icon: 'plane', text: 'Refakatçili grup uçuşu' },
      { icon: 'file', text: 'Vize sürecinde destek' },
      { icon: 'pin', text: 'İzmir ve Aydın ofislerinde yüz yüze görüşme' },
    ],
    trust,
    region: 'Manisa, Balıkesir, Muğla ve Çanakkale’den velilerle online görüşüyoruz.',
    form: { kind: 'summer', title: 'Ücretsiz Bilgi ve Program Önerisi', note: 'Çocuğunuzun yaşına uygun kampüsleri aynı gün paylaşıyoruz.', cta: 'Ücretsiz Program Önerisi Al', program: 'Yaz okulu' },
  },
}

/** Mobil alt bar ve CTA bandı bu yollarda forma kaydırır. */
export const adLandingPaths: Record<string, string> = {
  '/lisans-programlari/ingiltere': adLandings['lisans:ingiltere'].form.cta,
  '/yurtdisi-yaz-okullari/ingiltere': adLandings['yaz:ingiltere'].form.cta,
}
