// Üniversite detay sayfaları (/universiteler/<ülke>/<slug>).
// Bilgiler kurumların kamuya açık tanıtımlarından derlenmiştir; listede yer almak Tampa'nın
// anlaşmalı kurumu olduğu anlamına gelmez (anlaşmalı kurumlar: src/data/social.ts > universities).
// Ücretler yaklaşıktır, yıllık ve uluslararası öğrenci içindir. Metinlerde [link](/yol) ve **kalın** kullanılabilir.
import type { Faq } from '../programs'

export type University = {
  /** countries.ts slug'ı */
  country: string
  /** URL parçası, ör. 'university-of-manchester' */
  slug: string
  /** Türkçe aramada kullanılan ad, ör. 'Manchester Üniversitesi' */
  name: string
  /** Resmi (yerel / İngilizce) ad */
  official: string
  city: string
  founded: string
  type: 'Devlet' | 'Özel'
  /** Resmi web sitesi (https://...) */
  website: string
  /** 50–60 karakter, marka eki sayfada eklenir */
  seoTitle: string
  /** 140–155 karakter */
  description: string
  /** Hero altı 1–2 cümle */
  lead: string
  /** Öne çıkan snippet için 40–60 kelimelik özet */
  summary: string
  /** Bilgi kartı: 5–7 satır (Öğrenci sayısı, Uluslararası öğrenci oranı, Eğitim dili, Sıralama (kaynak ve yılıyla), Kampüs, Üyelikler) */
  facts: { label: string; value: string }[]
  /** Giriş: 3–4 paragraf */
  intro: string[]
  /** Öne çıkan fakülteler / alanlar (4–6) */
  strengths: { title: string; text: string }[]
  /** Program grupları: seviye + örnek bölüm/alan adları */
  programs: { level: 'Hazırlık / Foundation' | 'Lisans' | 'Yüksek lisans' | 'Doktora'; items: string[]; note?: string }[]
  /** Türk öğrenciler için genel kabul koşulları, seviye bazında */
  admission: { level: string; items: string[] }[]
  /** Yaklaşık ücretler ve giderler (4–7 satır) */
  costs: { item: string; value: string; note?: string }[]
  /** Burs ve finansman seçenekleri (2–5 madde, isteğe bağlı) */
  scholarships?: string[]
  /** Kampüs, şehir ve öğrenci yaşamı: 2–3 paragraf */
  campus: string[]
  /** Başvuru takvimi (2–5 satır) */
  calendar: { label: string; value: string }[]
  /** 5–7 soru */
  faqs: Faq[]
}
