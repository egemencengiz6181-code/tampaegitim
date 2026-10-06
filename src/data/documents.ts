// Örnek belgeler, tampaegitim.com.tr "Faydalı Menü" bölümündeki şablonların metin sürümleridir.
// Köşeli parantez içindeki alanlar kişiye göre doldurulur.
export type DocTemplate = {
  slug: string
  title: string
  usage: string
  tips: string[]
  body: string
}

export const documents: DocTemplate[] = [
  {
    slug: 'ornek-cv',
    title: 'Örnek CV',
    usage: 'Üniversite, yüksek lisans ve staj başvurularında kullanılan, uluslararası formatta bir CV şablonu.',
    tips: ['En fazla 2 sayfa', 'Ters kronolojik sıralama', 'Fotoğraf yalnızca istenirse', 'Her başvuruya göre güncelleyin'],
    body: `[AD SOYAD]
[Şehir, Ülke] | [E-posta] | [Telefon] | [LinkedIn]

PROFİL
[Akademik ilginizi ve hedefinizi anlatan 2–3 cümle.]

EĞİTİM
[Okul adı] — [Bölüm]                                    [Başlangıç – Bitiş]
Not ortalaması: [x.xx / 4.00]
İlgili dersler: [Ders 1], [Ders 2], [Ders 3]

DENEYİM
[Kurum] — [Pozisyon]                                    [Ay Yıl – Ay Yıl]
• [Somut bir sorumluluk ve sonuç]
• [Ölçülebilir bir başarı]

PROJELER VE YAYINLAR
[Proje adı] — [Kısa açıklama ve rolünüz]

SERTİFİKALAR
[Sertifika adı], [Kurum], [Yıl]

DİLLER
Türkçe (anadil), İngilizce ([IELTS 7.0]), [Diğer]

BECERİLER
[Yazılım, araç ve teknik beceriler]

REFERANSLAR
İstek üzerine sunulacaktır.`,
  },
  {
    slug: 'ornek-niyet-mektubu',
    title: 'Örnek Niyet Mektubu',
    usage: 'Vize başvurularında eğitim amacını, planını ve Türkiye’ye dönüş niyetini açıklayan mektup.',
    tips: ['Kısa ve net olun', 'Eğitim planını tarihlerle anlatın', 'Türkiye’deki bağlarınızı belirtin', 'Belgelerinizle tutarlı olsun'],
    body: `[Konsolosluk / Vize Merkezi]
[Tarih]

Konu: [Ülke] öğrenci vizesi başvurusu – Niyet mektubu

Sayın Yetkili,

Ben [Ad Soyad], [Okul / Kurum]’da [bölüm / pozisyon] olarak [öğrenim görüyorum / çalışıyorum]. [Başlangıç tarihi] – [bitiş tarihi] tarihleri arasında [Okul adı]’nda [program adı] programına katılmak amacıyla vize başvurusunda bulunuyorum.

Bu eğitimi almak istememin nedeni [akademik / mesleki gerekçe]. Programın [modül / özellik] içeriği, [kariyer hedefi] hedefime doğrudan katkı sağlayacaktır.

Eğitim ve yaşam masraflarım [kendim / sponsorum Ad Soyad] tarafından karşılanacaktır; ilgili finansal belgeler ektedir. Konaklamam [konaklama bilgisi] olarak ayarlanmıştır.

Eğitimimin ardından [tarih] tarihinde Türkiye’ye dönerek [okuluma devam edeceğim / işime döneceğim].

Başvurumun olumlu değerlendirilmesini saygılarımla arz ederim.

[Ad Soyad]
[Pasaport no]
[İmza]`,
  },
  {
    slug: 'ornek-muvaffakatname',
    title: 'Örnek Muvafakatname',
    usage: '18 yaşından küçük öğrencilerin yurtdışına çıkışı için ebeveynlerden alınan, noter onaylı izin belgesi.',
    tips: ['Noter onayı gerekir', 'Seyahat tarihleri net yazılmalı', 'Refakatçi varsa bilgileri eklenmeli', 'Gerekirse yeminli tercümesi yapılmalı'],
    body: `MUVAFAKATNAME

Velisi bulunduğum, [T.C. kimlik no]’lu, [doğum tarihi] doğumlu oğlum/kızım [Öğrenci Ad Soyad]’ın [başlangıç tarihi] – [bitiş tarihi] tarihleri arasında [ülke]’de bulunan [okul adı]’nda düzenlenen [program adı] programına katılmak üzere yurtdışına çıkmasına, [varsa refakatçi adı] refakatinde seyahat etmesine ve bu süre içinde konaklamasına muvafakat ediyorum.

Program süresince ortaya çıkabilecek her türlü masrafı karşılayacağımı beyan ederim.

Anne: [Ad Soyad] — T.C. Kimlik No: [ ] — İmza:
Baba: [Ad Soyad] — T.C. Kimlik No: [ ] — İmza:

Tarih: [ ]`,
  },
  {
    slug: 'ornek-banka-mektubu',
    title: 'Örnek Banka Mektubu',
    usage: 'Vize başvurusunda finansal yeterliliği göstermek için bankadan alınan, hesap bakiyesini teyit eden yazı.',
    tips: ['Islak imzalı ve kaşeli olmalı', 'Son 1 ay içinde alınmalı', 'Hesap dökümü ile birlikte sunulmalı', 'Gerekirse İngilizce düzenlenmeli'],
    body: `[BANKA ADI]
[Şube adı ve adresi]
[Tarih]

TO WHOM IT MAY CONCERN

This is to certify that Mr./Ms. [Ad Soyad], holder of passport number [Pasaport no], has been a customer of our bank since [yıl].

As of [tarih], the total balance of his/her account(s) is as follows:
Account no: [ ]  —  Currency: [TRY / EUR / GBP / USD]  —  Balance: [ ]

This letter is issued at the request of the account holder for visa application purposes and does not constitute any financial obligation on the part of the bank.

[Yetkili adı, unvanı]
[İmza ve banka kaşesi]`,
  },
  {
    slug: 'ornek-sponsor-mektubu',
    title: 'Örnek Sponsor Mektubu',
    usage: 'Öğrencinin masraflarını karşılayacak kişinin (genellikle ebeveyn) bu sorumluluğu üstlendiğini beyan ettiği mektup.',
    tips: ['Sponsorun gelir belgeleri eklenmeli', 'Akrabalık bağı belirtilmeli', 'Karşılanacak masraflar net yazılmalı', 'İmzalı olmalı'],
    body: `[Tarih]

To the Visa Officer,

I, [Sponsor Ad Soyad], holder of Turkish ID number [ ], hereby declare that I will cover all expenses of my [son / daughter / relative] [Öğrenci Ad Soyad], including tuition fees, accommodation, travel, health insurance and living expenses, during his/her [program adı] at [okul adı] in [ülke] between [başlangıç] and [bitiş].

I am working as [meslek / pozisyon] at [kurum] and my monthly income is [tutar]. Supporting documents regarding my employment, income and bank balance are enclosed.

Yours faithfully,

[Sponsor Ad Soyad]
[Adres, telefon]
[İmza]`,
  },
  {
    slug: 'ornek-taahhutname',
    title: 'Örnek Taahhütname',
    usage: 'Belirli koşulları yerine getireceğini (örneğin program sonunda dönüş, kurallara uyum) yazılı olarak beyan eden belge.',
    tips: ['Kapsam net yazılmalı', 'Tarih ve imza eksiksiz olmalı', 'Gerektiğinde noter onayı alınmalı'],
    body: `TAAHHÜTNAME

[Kurum / Okul adı]’na,

[T.C. kimlik no]’lu [Ad Soyad] olarak, [başlangıç tarihi] – [bitiş tarihi] tarihleri arasında katılacağım [program adı] programı süresince okulun ve ülkenin kurallarına uyacağımı, program bitiminde [tarih] tarihinde Türkiye’ye döneceğimi ve programla ilgili tüm mali yükümlülükleri zamanında yerine getireceğimi taahhüt ederim.

Ad Soyad: [ ]
Adres: [ ]
Tarih: [ ]
İmza:`,
  },
]

export const documentBySlug = Object.fromEntries(documents.map((d) => [d.slug, d])) as Record<string, DocTemplate>
