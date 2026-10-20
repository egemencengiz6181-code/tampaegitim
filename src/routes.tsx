import type { ComponentType } from 'react'
import { Navigate, type RouteObject } from 'react-router-dom'
import { SiteLayout, LandingLayout } from './components/layouts'
import Home from './pages/Home'
import { programs } from './data/programs'
import { services } from './data/services'
import { redirects } from './data/redirects'

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

const programRoutes: RouteObject[] = programs.flatMap((p) => [
  { path: p.slug, ...page(programsMod, 'ProgramHub', { programKey: p.key }) },
  { path: `${p.slug}/:country`, ...page(programsMod, 'ProgramCountry', { programKey: p.key }) },
])

const serviceRoutes: RouteObject[] = services.map((s) => ({ path: s.path.slice(1), ...page(servicesMod, 'ServicePage', { slug: s.slug }) }))

// 301 ile taşınan adresler (src/data/redirects.ts): istemci tarafında da yeni adrese yönlenir
const legacyRedirects: RouteObject[] = Object.entries(redirects).map(([from, to]) => ({ path: from.slice(1), element: <Navigate to={to} replace /> }))

export const routes: RouteObject[] = [
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'yurtdisi-egitim', ...page(programsMod, 'ProgramsOverview') },
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
      { path: 'hizmetler', ...page(servicesMod, 'ServicesIndex') },
      ...serviceRoutes,
      { path: 'tampa-akademi', ...page(servicesMod, 'Academy') },
      { path: 'hakkimizda', ...page(corpMod, 'About') },
      { path: 'ekibimiz', ...page(corpMod, 'Team') },
      { path: 'ekibimiz/:slug', ...page(corpMod, 'AuthorPage') },
      { path: 'musteri-yorumlari', ...page(corpMod, 'Reviews') },
      { path: 'kariyer', ...page(corpMod, 'Careers') },
      { path: 'ofislerimiz', ...page(corpMod, 'Offices') },
      { path: 'iletisim', ...page(corpMod, 'Contact') },
      { path: 'basvuru', ...page(corpMod, 'Apply') },
      { path: 'tesekkurler', ...page(corpMod, 'Thanks') },
      { path: 'kvkk', ...page(corpMod, 'Legal', { kind: 'kvkk' }) },
      { path: 'cerez-politikasi', ...page(corpMod, 'Legal', { kind: 'cerez' }) },
      ...legacyRedirects,
      { path: 'bilgi-bankasi', ...page(resMod, 'KnowledgeHub') },
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
