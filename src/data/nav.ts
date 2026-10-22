import { programs, countriesFor } from './programs'
import { countries } from './countries'
import { services } from './services'
import { guides, guideGroups, guidesForProgram } from './guides'
import { documents } from './documents'
import { packages } from './packages'

export type NavLink = { label: string; to: string; note?: string }

export const programMenu = programs.map((p) => ({
  key: p.key,
  label: p.name,
  short: p.short,
  to: `/${p.slug}`,
  lead: p.lead,
  image: p.image,
  countries: countriesFor(p.key).map((c) => ({ label: p.countryTitle(c), to: `/${p.slug}/${c.slug}`, code: c.code })),
  guides: guidesForProgram(p.key).slice(0, 5).map((g) => ({ label: g.title, to: `/bilgi-bankasi/${g.slug}` })),
}))

export const regions = ['Avrupa', 'Kuzey Amerika', 'Okyanusya', 'Asya & Orta Doğu', 'Latin Amerika'] as const

export const countryMenu = regions.map((r) => ({
  region: r,
  items: countries.filter((c) => c.region === r).map((c) => ({ label: c.name, to: `/ulkeler/${c.slug}`, code: c.code })),
}))

/** Program menüsünde ülke matrisine girmeyen ek bağlantılar. */
export const programExtras: NavLink[] = [
  { label: 'Online eğitim', to: '/online-egitim', note: 'Kanada online lise, İngiltere online lisans ve MBA' },
  { label: 'Almanya’daki özel üniversiteler', to: '/almanyadaki-ozel-universiteler', note: 'YKS’siz, İngilizce eğitim' },
  { label: 'Çekya üniversiteleri', to: '/cekya-universiteleri', note: 'Çekçe ücretsiz, İngilizce uygun ücretli' },
  { label: 'İngiltere dil okulları fiyat listesi', to: '/ingiltere-dil-okullari-fiyat-listesi', note: 'Şehirlere göre' },
  { label: 'Öğrenci konaklaması', to: '/ogrenci-konaklama', note: 'Londra yurtları' },
]

export const serviceMenu: NavLink[] = [
  ...services.map((s) => ({ label: s.name, to: s.path, note: s.short })),
  { label: 'Öğrenci konaklaması', to: '/ogrenci-konaklama', note: 'Konaklama' },
  { label: 'Tampa Akademi', to: '/tampa-akademi', note: 'Akademi' },
]

export const packageMenu: NavLink[] = [
  { label: 'Tüm Her Şey Dahil Paketler', to: '/her-sey-dahil-paketler' },
  ...packages.map((p) => ({ label: `${p.city} dil eğitimi paketi`, to: `/her-sey-dahil-paketler/${p.slug}`, note: `${p.currencySymbol}${p.prices[0].price.toLocaleString('tr-TR')}’den` })),
]

export const resourceMenu = {
  groups: guideGroups.map((gr) => ({ label: gr, count: guides.filter((g) => g.group === gr).length, to: `/bilgi-bankasi#${gr.toLocaleLowerCase('tr').replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}` })),
  exams: guides.filter((g) => g.group === 'Sınavlar').map((g) => ({ label: g.title, to: `/bilgi-bankasi/${g.slug}` })),
  documents: documents.map((d) => ({ label: d.title, to: `/kaynaklar/${d.slug}` })),
}

export const corporateMenu: NavLink[] = [
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'Ekibimiz', to: '/ekibimiz' },
  { label: 'Ofislerimiz', to: '/ofislerimiz' },
  { label: 'Gidenler anlatıyor', to: '/musteri-yorumlari' },
  { label: 'Kariyer', to: '/kariyer' },
  { label: 'Blog', to: '/blog' },
  { label: 'İletişim', to: '/iletisim' },
]
