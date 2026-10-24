// Rota üretimi için en küçük eşlemeler: ana pakete yalnızca bu dosya girer (listeler ve içerikler girmez).
// Liste dosyalarıyla uyumu prerender'da kontrol edilir (routingMismatch). Yeni ülke/dosya/rehber eklendiğinde güncelleyin.
import type { LanguageCityFile } from './languageCities/list'
import type { UniversityFile } from './universities/list'
import type { GlossaryFile } from './glossary'

/** Ülke → şehir sayfası içerik dosyaları */
export const languageCityRouting: Record<string, LanguageCityFile[]> = {
  'ingiltere': [
    'ingiltere-a',
    'ingiltere-b'
  ],
  'amerika': [
    'amerika'
  ],
  'kanada': [
    'kanada-avustralya'
  ],
  'avustralya': [
    'kanada-avustralya'
  ],
  'irlanda': [
    'irlanda-malta'
  ],
  'malta': [
    'irlanda-malta'
  ],
  'yeni-zelanda': [
    'irlanda-malta'
  ],
  'dubai': [
    'irlanda-malta'
  ],
  'almanya': [
    'almanca'
  ],
  'avusturya': [
    'almanca'
  ],
  'isvicre': [
    'almanca'
  ],
  'ispanya': [
    'latin-diller'
  ],
  'fransa': [
    'latin-diller'
  ],
  'italya': [
    'latin-diller'
  ],
  'japonya': [
    'asya-diger'
  ],
  'kore': [
    'asya-diger'
  ],
  'rusya': [
    'asya-diger'
  ],
  'arjantin': [
    'asya-diger'
  ]
}

/** Ülke → üniversite içerik dosyaları */
export const universityRouting: Record<string, UniversityFile[]> = {
  'ingiltere': [
    'ingiltere-londra',
    'ingiltere-bolge'
  ],
  'almanya': [
    'almanya'
  ],
  'italya': [
    'italya-macaristan'
  ],
  'macaristan': [
    'italya-macaristan'
  ],
  'polonya': [
    'polonya-avusturya'
  ],
  'avusturya': [
    'polonya-avusturya'
  ],
  'kanada': [
    'kuzey-amerika'
  ],
  'amerika': [
    'kuzey-amerika'
  ],
  'kore': [
    'asya'
  ],
  'japonya': [
    'asya'
  ]
}

/** Kavram rehberi slug → içerik dosyası */
export const glossaryRouting: Record<string, GlossaryFile> = {
  'ucas-nedir': 'anglo',
  'cas-nedir': 'anglo',
  'ihs-saglik-katki-payi': 'anglo',
  'russell-group-nedir': 'anglo',
  'clearing-nedir': 'anglo',
  'personal-statement-nasil-yazilir': 'anglo',
  'sandwich-year-nedir': 'anglo',
  'graduate-route-nedir': 'anglo',
  'i-20-nedir': 'anglo',
  'sevis-ucreti-nedir': 'anglo',
  'f1-vize-mulakati': 'anglo',
  'opt-cpt-nedir': 'anglo',
  'common-app-nedir': 'anglo',
  'community-college-nedir': 'anglo',
  'pgwp-nedir': 'anglo',
  'dli-pal-nedir': 'anglo',
  'gic-nedir': 'anglo',
  'irlanda-stamp-2-ilep': 'anglo',
  'cricos-nedir': 'anglo',
  'oshc-nedir': 'anglo',
  'sperrkonto-nedir': 'almanca',
  'uni-assist-nedir': 'almanca',
  'nc-puani-nedir': 'almanca',
  'anabin-nedir': 'almanca',
  'almanya-ogrenci-vizesi': 'almanca',
  'approbation-nedir': 'almanca',
  'staatsexamen-nedir': 'almanca',
  'semesterbeitrag-nedir': 'almanca',
  'almanya-ogrenci-yurtlari': 'almanca',
  'avusturya-universite-basvurusu': 'almanca',
  'cimea-dov-nedir': 'diger',
  'universitaly-on-basvuru': 'diger',
  'codice-fiscale-nedir': 'diger',
  'permesso-di-soggiorno': 'diger',
  'italya-dsu-bursu-isee': 'diger',
  'campus-france-proseduru': 'diger',
  'cvec-caf-nedir': 'diger',
  'nostrifikasyon-nedir': 'diger',
  'polonya-ogrenci-vizesi': 'diger',
  'erasmus-nedir': 'diger',
  'apostil-ve-yeminli-tercume': 'diger',
  'topik-nedir': 'diger',
  'jlpt-nedir': 'diger',
  'eju-nedir': 'diger'
}

/** Yerel ofis sayfaları */
export const localSlugs = [
  'izmir-yurt-disi-egitim',
  'aydin-yurt-disi-egitim'
]

