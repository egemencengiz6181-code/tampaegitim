// Şehir bazlı dil okulu sayfaları (/yurtdisi-dil-okullari/<ülke>/<şehir>-dil-okullari).
// Metinlerde [link](/yol) ve **kalın** kullanılabilir (Rich bileşeni).
// Okul adı yazılmaz: Tampa'nın anlaştığı okullar Tampa tarafından iletilecek.
// Tutarlar yaklaşıktır ve yerel para birimiyle verilir; sayfada "yaklaşık" uyarısı görünür.
import type { Faq } from '../programs'

export type LanguageCity = {
  /** countries.ts slug'ı, ör. 'ingiltere' */
  country: string
  /** URL parçası, ör. 'brighton-dil-okullari' */
  slug: string
  /** Şehir adı, ör. 'Brighton' */
  name: string
  /** Bulunma eki: "Brighton’da" */
  loc: string
  /** En yakın havalimanı IATA kodu */
  code: string
  /** public/ altındaki görsel; yoksa ülke görseli kullanılır */
  image?: string
  /** 50–60 karakter, marka eki sayfada eklenir */
  seoTitle: string
  /** 140–155 karakter */
  description: string
  /** Hero altı tek paragraf, 1–2 cümle */
  lead: string
  /** Öne çıkan snippet için 40–60 kelimelik özet cevap */
  summary: string
  /** Kısa bilgi kartı: 5–6 satır (Nüfus, Uçuş, Havalimanı, İklim, Öğrenci profili...) */
  facts: { label: string; value: string }[]
  /** Giriş: 3–4 paragraf */
  intro: string[]
  /** "Neden <şehir>?" 4–6 madde */
  why: { title: string; text: string }[]
  /** Şehirde yaygın kurs türleri ve kime uygun olduğu (4–6) */
  courses: { title: string; text: string }[]
  /** Okulların yoğunlaştığı semtler / bölgeler (2–5) */
  areas: { name: string; text: string }[]
  /** Konaklama: 2–3 paragraf (aile yanı, rezidans, paylaşımlı daire; semt ve ulaşım mesafesi) */
  accommodation: string[]
  /** Yaşam maliyeti tablosu, yerel para birimiyle yaklaşık değerler (6–9 satır) */
  costs: { item: string; value: string; note?: string }[]
  /** Ulaşım, iklim ve günlük yaşam: 2–3 paragraf */
  daily: string[]
  /** Hafta sonu ve günübirlik gezi önerileri (3–6) */
  trips: { name: string; text: string }[]
  /** Kimler için uygun (4–6 madde) */
  fit: string[]
  /** Bu şehre özgü 5–7 soru */
  faqs: Faq[]
  /** Aynı ülkedeki diğer şehirlerle kısa karşılaştırma notu (isteğe bağlı) */
  compare?: string
}
