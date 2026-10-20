// Blog yazarları (danışman profilleri). Yazar sayfası: /ekibimiz/<slug>.
// `ready: false` iken profil eksiktir: sayfa noindex olur, sitemap'e girmez ve yazılarda
// yazar olarak kurum gösterilir. Bilgiler Tampa'dan gelince doldurup `ready: true` yapın.
// Not: slug kişinin tam adına göre (ör. "alp-soyadi") netleşmeli; profil yayına alınmadan önce değiştirin.

export type Author = {
  slug: string
  name: string
  role: string
  /** Sektör deneyimi (yıl) */
  years?: number
  photo?: string
  bio: string[]
  expertise: string[]
  sameAs?: string[]
  ready: boolean
}

export const authors: Author[] = [
  {
    slug: 'alp',
    // TODO: Tampa'dan teyit: tam ad, unvan, deneyim yılı, fotoğraf, LinkedIn
    name: 'Alp',
    role: 'Eğitim Danışmanı',
    bio: ['TODO: Tampa’dan teyit: kısa biyografi (2–3 cümle): uzmanlık alanı, kaç yıldır yurt dışı eğitim danışmanlığı yaptığı, hangi ülke ve programlarda öğrenci yönlendirdiği.'],
    expertise: ['İngiltere yaz okulları', 'İngiltere’de üniversite'],
    ready: false,
  },
  {
    slug: 'ecem',
    // TODO: Tampa'dan teyit: tam ad, unvan, deneyim yılı, fotoğraf, LinkedIn
    name: 'Ecem',
    role: 'Eğitim Danışmanı',
    bio: ['TODO: Tampa’dan teyit: kısa biyografi (2–3 cümle): uzmanlık alanı, kaç yıldır yurt dışı eğitim danışmanlığı yaptığı, hangi ülke ve programlarda öğrenci yönlendirdiği.'],
    expertise: ['Dil okulları', 'Vize süreçleri'],
    ready: false,
  },
]

export const authorBySlug = Object.fromEntries(authors.map((a) => [a.slug, a])) as Record<string, Author>

/** Yazıda gösterilecek yazar: profil hazır değilse undefined (kurum yazar olarak gösterilir). */
export const publishedAuthor = (slug?: string) => {
  const a = slug ? authorBySlug[slug] : undefined
  return a?.ready ? a : undefined
}
