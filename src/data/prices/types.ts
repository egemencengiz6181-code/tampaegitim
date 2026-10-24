// Ülke bazında üniversite fiyatları ve eğitim + yaşam maliyeti sayfaları (/fiyatlar/<slug>).
// Tutarlar yaklaşıktır, uluslararası (AB dışı) öğrenci içindir ve yerel para birimiyle verilir.
// "Üniversitelere göre ücret tablosu" bu dosyadan değil, src/data/universities içeriklerinden otomatik üretilir.
// Metinlerde [link](/yol) ve **kalın** kullanılabilir (Rich bileşeni).
import type { Faq } from '../programs'

export type PriceTable = { head: string[]; rows: string[][]; note?: string }

export type PricePage = {
  /** 'genel': ülke geneli üniversite fiyatları; 'tip': tıp, diş hekimliği ve eczacılık ücretleri */
  kind?: 'genel' | 'tip'
  /** countries.ts slug'ı */
  country: string
  /** URL parçası, ör. 'macaristan-universite-fiyatlari' */
  slug: string
  /** Menü ve karşılaştırma tablosundaki kısa ad, ör. 'Macaristan üniversite fiyatları' */
  label: string
  /** 50–60 karakter, marka eki sayfada eklenir */
  seoTitle: string
  /** 140–155 karakter */
  description: string
  h1: string
  lead: string
  /** Öne çıkan snippet için 40–60 kelimelik özet cevap ("X’te üniversite ne kadar?") */
  summary: string
  /** Hub karşılaştırma tablosu için tek satırlık özetler */
  compare: { currency: string; publicTuition: string; privateTuition: string; monthlyLiving: string; prep?: string }
  /** Bilgi kartı: 4–6 satır */
  facts: { label: string; value: string }[]
  /** Giriş: 2–3 paragraf */
  intro: string[]
  /** Eğitim seviyesine / üniversite türüne göre ücretler (devlet, özel, dil, seviye) */
  tuition: PriceTable
  /** Bölümlere göre ücretler (tıp, diş, mühendislik, işletme, sanat, sosyal bilimler...) */
  byField: PriceTable
  /** Hazırlık / foundation / dil hazırlık ücretleri */
  prep: { text: string[]; table?: PriceTable }
  /** Ücretleri etkileyen faktörler (4–7 madde) */
  factors: string[]
  /** Aylık yaşam giderleri: kalem × şehir sütunları (en az 2 şehir) */
  living: PriceTable
  /** Yaşam giderleri hakkında açıklamalar: konaklama, yemek, ulaşım, sigorta (3–5 paragraf) */
  livingNotes: string[]
  /** Tek seferlik ve yıllık ek masraflar: başvuru, vize, oturum, sigorta, depozito, uçak, denklik/tercüme */
  oneTime: PriceTable
  /** Burslar ve ücret indirimleri (3–6 madde) */
  scholarships: { title: string; text: string }[]
  /** Örnek toplam maliyet senaryoları (3–4); her biri yıllık toplamı verir */
  scenarios: { title: string; assumptions: string; rows: string[][]; total: string }[]
  /** Bütçeyi düşürme önerileri (4–6 madde) */
  tips: string[]
  /** 6–8 soru */
  faqs: Faq[]
  /** Son içerik kontrolü (YYYY-AA-GG) */
  updated: string
}
