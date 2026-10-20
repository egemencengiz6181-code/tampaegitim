import { site, offices, type Office } from '../data/site'
import type { Author } from '../data/authors'

export const ORG_ID = `${site.url}/#organization`
export const officeId = (slug: string) => `${site.url}/ofislerimiz#${slug}`

/** Fiziksel ofisler (İzmir, Aydın): her biri ayrı LocalBusiness. Temsilcilik İzmir ofisiyle aynı adreste. */
const branchOffices = offices.filter((o) => o.slug === 'izmir' || o.slug === 'aydin')

function localBusinessLd(o: Office) {
  return {
    '@type': ['LocalBusiness', 'EducationalOrganization'],
    '@id': officeId(o.slug),
    name: `${site.name} ${o.city} Ofisi`,
    parentOrganization: { '@id': ORG_ID },
    url: `${site.url}/ofislerimiz`,
    image: `${site.url}${o.image}`,
    logo: `${site.url}/img/brand/logo-stacked.png`,
    telephone: o.phoneHref?.replace('tel:', ''),
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: o.address.split(',').slice(0, -1).join(',').replace(/\s*\d{5}\s*$/, '').trim(),
      addressLocality: o.locality,
      addressRegion: o.district,
      ...(o.postalCode ? { postalCode: o.postalCode } : {}),
      addressCountry: 'TR',
    },
    ...(o.geo ? { geo: { '@type': 'GeoCoordinates', latitude: o.geo.lat, longitude: o.geo.lng } } : {}),
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapQuery)}`,
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '18:00' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: o.district },
  }
}

/** Site genelinde tek bir kez basılan kurum şeması (her sayfada). AggregateRating bilinçli olarak yok. */
export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': ORG_ID,
  name: site.name,
  legalName: site.legalName,
  alternateName: ['Tampa Eğitim', 'Tampa Yurt Dışı Eğitim', 'Tampa Yurtdışı Eğitim ve Danışmanlık'],
  url: `${site.url}/`,
  logo: `${site.url}/img/brand/logo-stacked.png`,
  image: `${site.url}/img/brand/logo-full.jpg`,
  email: site.email,
  telephone: site.phoneHref.replace('tel:', ''),
  description: site.footerAbout,
  slogan: site.slogan,
  areaServed: { '@type': 'Country', name: 'Türkiye' },
  knowsAbout: ['Yurt dışı eğitim', 'Dil okulları', 'Yaz okulları', 'Yurt dışında üniversite', 'Yüksek lisans', 'Work and study', 'Öğrenci vizesi'],
  sameAs: site.socials.map((s) => s.href),
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Yalı Mah., Park Yaşam Ofisleri, 6523. Sk. No:32 A2 Kat:5 Daire:509',
    addressLocality: 'Karşıyaka',
    addressRegion: 'İzmir',
    postalCode: '35550',
    addressCountry: 'TR',
  },
  department: branchOffices.map((o) => ({ '@id': officeId(o.slug) })),
}

export const officesLd = branchOffices.map((o) => ({ '@context': 'https://schema.org', ...localBusinessLd(o) }))

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: `${site.url}/`,
  name: site.name,
  inLanguage: 'tr-TR',
  publisher: { '@id': ORG_ID },
}

export const authorPath = (a: Author) => `/ekibimiz/${a.slug}`

export function personLd(a: Author) {
  return {
    '@type': 'Person',
    '@id': `${site.url}${authorPath(a)}#person`,
    name: a.name,
    jobTitle: a.role,
    url: `${site.url}${authorPath(a)}`,
    ...(a.photo ? { image: `${site.url}${a.photo}` } : {}),
    worksFor: { '@id': ORG_ID },
    knowsAbout: a.expertise,
    ...(a.sameAs?.length ? { sameAs: a.sameAs } : {}),
  }
}

export const abs = (p: string) => (p.startsWith('http') ? p : `${site.url}${p}`)
