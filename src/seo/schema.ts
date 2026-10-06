import { site, offices } from '../data/site'

export const ORG_ID = `${site.url}/#organization`

/** Site genelinde tek bir kez basılan kurum şeması (her sayfada). */
export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'ProfessionalService'],
  '@id': ORG_ID,
  name: site.name,
  alternateName: ['Tampa Eğitim', 'Tampa Yurt Dışı Eğitim', 'Tampa Yurtdışı Eğitim ve Danışmanlık'],
  url: site.url,
  logo: `${site.url}/img/brand/logo-stacked.png`,
  image: `${site.url}/img/brand/logo-full.jpg`,
  email: site.email,
  telephone: '+905308810709',
  description: site.footerAbout,
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
  department: offices
    .filter((o) => o.phone)
    .map((o) => ({
      '@type': 'LocalBusiness',
      name: `${site.name} – ${o.title}`,
      telephone: o.phone,
      address: { '@type': 'PostalAddress', streetAddress: o.address, addressCountry: o.slug === 'florida' ? 'US' : 'TR' },
      openingHours: 'Mo-Fr 10:00-18:00',
    })),
}

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: site.url,
  name: site.name,
  inLanguage: 'tr-TR',
  publisher: { '@id': ORG_ID },
}

export const abs = (p: string) => (p.startsWith('http') ? p : `${site.url}${p}`)
