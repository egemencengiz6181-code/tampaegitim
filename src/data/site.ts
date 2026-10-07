// Kurumsal bilgiler tampaegitim.com.tr'den alınmıştır.
export const site = {
  name: 'Tampa Yurtdışı Eğitim',
  legalName: 'Tampa Yurtdışı Eğitim ve Danışmanlık',
  shortName: 'Tampa Eğitim',
  url: 'https://tampaegitim.com.tr',
  email: 'info@tampaegitim.com.tr',
  phone: '+90 530 881 07 09',
  phoneHref: 'tel:+905308810709',
  whatsapp: 'https://api.whatsapp.com/send?phone=905308810709&text=Merhaba%2C%20yurtd%C4%B1%C5%9F%C4%B1%20e%C4%9Fitim%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.',
  calendly: 'https://calendly.com/tampaegitim-info/30min',
  hours: 'Pazartesi – Cuma, 10.00 – 18.00',
  experienceYears: 15,
  studentCount: '5.000+',
  googleRating: '5.0',
  googleReviewCount: 89,
  tagline: 'Güvenli. Güçlü. Modern. Yenilikçi. Küresel.',
  footerAbout:
    'Tampa Yurtdışı Eğitim her yıl binlerce kişinin yurtdışı eğitim hayallerini gerçekleştirmekte olup sektörde 15 yıllık tecrübesi ile siz değerli danışanlarına hizmet vermektedir.',
  socials: [
    { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/tampayurtdisiegitim/' },
    { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/tampayurtdisiegitim/' },
    { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/tampa-yurtd%C4%B1s%C4%B1-e%C4%9Fitim/' },
    { key: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@tampayurtdisiegitim' },
    { key: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@tampayurtdisiegitim' },
  ],
} as const

export type Office = {
  slug: string
  city: string
  title: string
  address: string
  phone?: string
  phoneHref?: string
  image: string
  mapQuery: string
  note: string
}

export const offices: Office[] = [
  {
    slug: 'izmir',
    city: 'İzmir',
    title: 'İzmir Merkez Ofis',
    address: 'Yalı Mah., Park Yaşam Ofisleri, 6523. Sk. No:32 A2 Kat:5 Daire:509, 35550 Karşıyaka / İzmir',
    phone: '+90 530 881 07 09',
    phoneHref: 'tel:+905308810709',
    image: '/img/misc/izmir.jpg',
    mapQuery: 'Park Yaşam Ofisleri Karşıyaka İzmir',
    note: 'Genel merkezimiz. Yüz yüze danışmanlık, belge teslimi ve vize hazırlık görüşmeleri.',
  },
  {
    slug: 'aydin',
    city: 'Aydın',
    title: 'Aydın Ofisi',
    address: 'Kurtuluş Mah. 2011 Sok. No:5 Kat:3 Daire:13, My Town Plaza, Efeler / Aydın',
    phone: '+90 505 144 35 09',
    phoneHref: 'tel:+905051443509',
    image: '/img/misc/aydin.jpg',
    mapQuery: 'My Town Plaza Efeler Aydın',
    note: 'Aydın ve çevre illerdeki öğrenci ve velilerimiz için randevulu görüşme.',
  },
  {
    slug: 'ingiltere-universite-temsilciligi',
    city: 'İngiltere Üniversite Temsilciliği',
    title: 'İngiltere Üniversite Temsilciliği',
    address: 'Yalı Mah., Park Yaşam Ofisleri, 6523. Sk. No:32 A2 Kat:5 Daire:509, 35550 Karşıyaka / İzmir',
    phone: '+90 530 881 07 09',
    phoneHref: 'tel:+905308810709',
    image: '/img/misc/uk-office.jpg',
    mapQuery: 'Park Yaşam Ofisleri Karşıyaka İzmir',
    note: 'İzmir merkez ofisimizin hemen yanında. İngiltere üniversitelerine başvuru, bilgilendirme ve kabul süreçleri.',
  },
]

export const values = [
  { title: 'Tecrübe', text: 'Sektörde 15 yılı aşkın deneyimle her ülkenin başvuru dilini, takvimini ve inceliklerini biliyoruz.' },
  { title: 'Memnuniyet', text: 'Google’da 89 yorumla 5.0 puan alan danışmanlık; bizi en iyi öğrencilerimiz anlatıyor.' },
  { title: 'Güven', text: 'Şeffaf süreç, yazılı yol haritası ve her adımda kime ulaşacağınızı bildiğiniz bir ekip.' },
  { title: 'Hızlı iletişim', text: 'WhatsApp, telefon ve online görüşme ile sorularınıza aynı gün dönüş hedefliyoruz.' },
]

export const stats = [
  { value: '15', suffix: 'yıl', label: 'sektör tecrübesi' },
  { value: '5.000', suffix: '+', label: 'öğrenci bize güvendi' },
  { value: '5.0', suffix: '/5', label: 'Google değerlendirmesi' },
  { value: '20', suffix: '+', label: 'ülkede program' },
]
