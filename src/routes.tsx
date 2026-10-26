import type { ComponentType } from 'react'
import { Navigate, type RouteObject } from 'react-router-dom'
import { SiteLayout, LandingLayout } from './components/layouts'
import Home from './pages/Home'
import { programs } from './data/programs'
import { services } from './data/services'
import { redirects } from './data/redirects'
import { languageCityRouting, universityRouting, glossaryRouting, localSlugs, priceRouting } from './data/routing'
import { priceLoaders } from './data/prices/load'
import { universityLoaders } from './data/universities/load'
import { glossaryLoaders } from './data/glossary/load'
import { languageCityLoaders } from './data/languageCities/load'

/**
 * Sayfalar React Router'ın `lazy` mekanizmasıyla ayrı chunk'lar halinde yüklenir.
 * Sunucu tarafında (prerender) ve istemcide hidrasyondan önce ilk sayfanın modülü
 * çözülür; böylece statik HTML ile istemci render'ı birebir eşleşir.
 */
type Mod = Record<string, ComponentType<Record<string, unknown>>>
const page =
  (loader: () => Promise<unknown>, key: string, props: Record<string, unknown> = {}): Pick<RouteObject, 'lazy'> => ({
    lazy: async () => {
      const m = (await loader()) as Mod
      const C = m[key]
      return { element: <C {...props} /> }
    },
  })

const programsMod = () => import('./pages/Programs')
const packagesMod = () => import('./pages/Packages')
const servicesMod = () => import('./pages/Services')
const corpMod = () => import('./pages/Corporate')
const resMod = () => import('./pages/Resources')
const landingMod = () => import('./pages/Landing')
const notFoundMod = () => import('./pages/NotFound')
const extrasMod = () => import('./pages/Extras')
const adminMod = () => import('./pages/admin/Admin')
const germanyMod = () => import('./pages/Germany')
const czechMod = () => import('./pages/Czech')
const ukRepMod = () => import('./pages/UkRepresentation')
const langCityMod = () => import('./pages/LanguageCity')
const localMod = () => import('./pages/Local')
const uniMod = () => import('./pages/University')
const pricesMod = () => import('./pages/Prices')

const programRoutes: RouteObject[] = programs.flatMap((p) => [
  { path: p.slug, ...page(programsMod, 'ProgramHub', { programKey: p.key }) },
  { path: `${p.slug}/:country`, ...page(programsMod, 'ProgramCountry', { programKey: p.key }) },
])

const serviceRoutes: RouteObject[] = services.map((s) => ({ path: s.path.slice(1), ...page(servicesMod, 'ServicePage', { slug: s.slug }) }))

// Şehir bazlı dil okulu sayfaları: her ülke yalnızca kendi içerik dosyasını yükler
const langCityRoutes: RouteObject[] = Object.entries(languageCityRouting).map(([country, files]) => {
  return {
    path: `yurtdisi-dil-okullari/${country}/:city`,
    lazy: async () => {
      const [m, ...data] = await Promise.all([langCityMod(), ...files.map((f) => languageCityLoaders[f]())])
      const C = m.LanguageCityPage
      return { element: <C country={country} cities={data.flat()} /> }
    },
  }
})

// Üniversite detay sayfaları: her ülke yalnızca kendi içerik dosyasını yükler
const uniRoutes: RouteObject[] = Object.entries(universityRouting).map(([country, files]) => {
  return {
    path: `universiteler/${country}/:slug`,
    lazy: async () => {
      const [m, ...data] = await Promise.all([uniMod(), ...files.map((f) => universityLoaders[f]())])
      const C = m.UniversityPage
      return { element: <C country={country} unis={data.flat()} /> }
    },
  }
})

// Kavram rehberleri: liste menüde, tam içerik yalnızca rehber sayfasında yüklenir
const glossaryRoutes: RouteObject[] = Object.entries(glossaryRouting).map(([slug, file]) => ({
  path: `bilgi-bankasi/${slug}`,
  lazy: async () => {
    const [m, list] = await Promise.all([resMod(), glossaryLoaders[file]()])
    const C = (m as typeof import('./pages/Resources')).GuidePage
    return { element: <C full={list.find((x) => x.slug === slug)} /> }
  },
}))

// Fiyat sayfaları: sayfanın içerik dosyası + ülkenin üniversite dosyaları (otomatik ücret tablosu)
const priceRoutes: RouteObject[] = Object.entries(priceRouting).map(([slug, { country, file }]) => ({
  path: `fiyatlar/${slug}`,
  lazy: async () => {
    const uniFiles = universityRouting[country] ?? []
    const [m, pages, ...unis] = await Promise.all([pricesMod(), priceLoaders[file](), ...uniFiles.map((f) => universityLoaders[f]())])
    const C = m.PricePageRoute
    return { element: <C slug={slug} pages={pages} unis={unis.flat()} /> }
  },
}))

// 301 ile taşınan adresler (src/data/redirects.ts): istemci tarafında da yeni adrese yönlenir
const legacyRedirects: RouteObject[] = Object.entries(redirects).map(([from, to]) => ({ path: from.slice(1), element: <Navigate to={to} replace /> }))

export const routes: RouteObject[] = [
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'yurtdisi-egitim', ...page(programsMod, 'ProgramsOverview') },
      ...langCityRoutes,
      { path: 'universiteler', ...page(uniMod, 'UniversitiesHub') },
      { path: 'universiteler/:country', ...page(uniMod, 'UniversitiesCountry') },
      ...uniRoutes,
      { path: 'fiyatlar', ...page(pricesMod, 'PricesHub') },
      ...priceRoutes,
      ...programRoutes,
      { path: 'ulkeler', ...page(programsMod, 'CountriesIndex') },
      { path: 'ulkeler/:slug', ...page(programsMod, 'CountryPage') },
      { path: 'her-sey-dahil-paketler', ...page(packagesMod, 'PackagesIndex') },
      { path: 'her-sey-dahil-paketler/:slug', ...page(packagesMod, 'PackageDetail') },
      { path: 'online-egitim', ...page(extrasMod, 'OnlineHub') },
      { path: 'online-egitim/:slug', ...page(extrasMod, 'OnlineProgramPage') },
      { path: 'ogrenci-konaklama', ...page(extrasMod, 'AccommodationPage') },
      { path: 'ogrenci-konaklama/:slug', ...page(extrasMod, 'ResidencePage') },
      { path: 'ingiltere-dil-okullari-fiyat-listesi', ...page(extrasMod, 'SchoolPricesHub') },
      { path: 'ingiltere-dil-okullari-fiyat-listesi/:city', ...page(extrasMod, 'SchoolPricesCity') },
      { path: 'almanyadaki-ozel-universiteler', ...page(germanyMod, 'GermanUnisHub') },
      { path: 'almanyadaki-ozel-universiteler/:slug', ...page(germanyMod, 'GermanUniPage') },
      { path: 'cekya-universiteleri', ...page(czechMod, 'CzechUnisHub') },
      { path: 'hizmetler', ...page(servicesMod, 'ServicesIndex') },
      ...serviceRoutes,
      { path: 'tampa-akademi', ...page(servicesMod, 'Academy') },
      { path: 'hakkimizda', ...page(corpMod, 'About') },
      { path: 'ekibimiz', ...page(corpMod, 'Team') },
      { path: 'ekibimiz/:slug', ...page(corpMod, 'AuthorPage') },
      { path: 'musteri-yorumlari', ...page(corpMod, 'Reviews') },
      { path: 'kariyer', ...page(corpMod, 'Careers') },
      { path: 'ofislerimiz', ...page(corpMod, 'Offices') },
      { path: 'ingiltere-universite-temsilciligi', ...page(ukRepMod, 'UkRepresentationPage') },
      ...localSlugs.map((slug) => ({ path: slug, ...page(localMod, 'LocalPage', { slug }) })),
      { path: 'iletisim', ...page(corpMod, 'Contact') },
      { path: 'basvuru', ...page(corpMod, 'Apply') },
      { path: 'tesekkurler', ...page(corpMod, 'Thanks') },
      { path: 'kvkk', ...page(corpMod, 'Legal', { kind: 'kvkk' }) },
      { path: 'cerez-politikasi', ...page(corpMod, 'Legal', { kind: 'cerez' }) },
      ...legacyRedirects,
      { path: 'bilgi-bankasi', ...page(resMod, 'KnowledgeHub') },
      ...glossaryRoutes,
      { path: 'bilgi-bankasi/:slug', ...page(resMod, 'GuidePage') },
      { path: 'kaynaklar', ...page(resMod, 'DocumentsHub') },
      { path: 'kaynaklar/:slug', ...page(resMod, 'DocumentPage') },
      { path: 'blog', ...page(resMod, 'Blog') },
      { path: 'blog/kategori/:cat', ...page(resMod, 'Blog') },
      { path: 'blog/:slug', ...page(resMod, 'BlogPost') },
      { path: 'site-haritasi', ...page(resMod, 'Sitemap') },
      { path: 'sss', ...page(resMod, 'FaqPage') },
      { path: '*', ...page(notFoundMod, 'default') },
    ],
  },
  // Blog yönetim paneli: site düzeni dışında, arama motorlarına kapalı
  { path: 'admin/*', ...page(adminMod, 'default') },
  {
    path: 'lp',
    element: <LandingLayout />,
    children: [{ path: ':slug', ...page(landingMod, 'default') }],
  },
]
