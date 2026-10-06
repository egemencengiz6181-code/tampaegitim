// Yorumlar tampaegitim.com.tr/musteri-yorumlari sayfasındaki Google değerlendirmelerinden alınmıştır.
export type Review = { name: string; text: string; program: string; country: string }

export const reviews: Review[] = [
  {
    name: 'Oya Nur Demir',
    program: 'Yüksek lisans',
    country: 'Almanya',
    text: 'Almanya yüksek lisans yolculuğumda benden desteğini hiçbir şekilde esirgemeyen Ecem Hanım’a sonsuz teşekkürleri iletiyorum. İyi ki yolum kendileri ile kesişti. Bu süreçte ve bu süreçten sonra da benimle irtibatlarını kesmediler. İyi ki Tampa Yurtdışı Eğitim diyorum.',
  },
  {
    name: 'Serap Baytur',
    program: 'Yaz okulu',
    country: 'İngiltere & İrlanda',
    text: 'Yurt dışı eğitim danışmanlığı konusunda iki yıldır Alp Bey ile çalışıyoruz. Kızımı hem İngiltere hem de İrlanda’ya Alp Bey’in yönlendirmesi ile yaz okuluna gönderdik. Her ikisinde de çok memnun kaldık. Bizi doğru yönlendirdiği ve ilk günden Türkiye’ye dönene kadar tüm süreçleri titizlikle takip ettiği için kendisine çok teşekkür ederiz.',
  },
  {
    name: 'Zeynep Özbabacan',
    program: 'Yüksek lisans',
    country: 'Almanya',
    text: 'Berlin’de master okumaya karar verdikten sonra bu süreçte Tampa’dan destek almak istedim. Ecem Hanım ve Alp Bey Almanya’ya gelme sürecimde baştan sona kadar neredeyse her şeyle ilgilendiler. Okul seçme, kayıt işlemleri, vize süreci gibi konuların hepsini onlar sayesinde sorunsuz, kolaylıkla halledebildim. Güler yüzleri ve hâlâ devam eden destekleri için çok teşekkür ediyorum.',
  },
  {
    name: 'Kaan Karışmaz',
    program: 'Yurtdışı eğitim',
    country: '',
    text: 'Güzel, kaliteli danışmanlık alabileceğiniz ve yurt dışına gitme sürecinizde sizlere yardımcı olan çok güzel bir firma. Alp Bey bu konuda çok tecrübeli ve bilgili biri; kendisi ile çalışma fırsatı buldum ve yurt dışında eğitim alma sürecimde bana çok yardımcı oldu. Sizlere de onlarla çalışmanızı tavsiye ediyorum.',
  },
  {
    name: 'Mert Doğan',
    program: 'Yurtdışı eğitim',
    country: '',
    text: 'Yurtdışı eğitim danışmanlığı denildiği zaman akla ilk gelen isimler olan Alp Bey ve Ecem Hanım ile harika bir eğitim yolculuğuna çıkabilirsiniz. Son derece ilgili, güler yüzlü ve deneyimli bir ekip.',
  },
]

export const universities = [
  { name: 'Queen Mary University of London', file: 'QMUL-logo-scaled-1-2048x546-1.jpg' },
  { name: 'Manchester Metropolitan University', file: 'Manchester-Met_stacked_black.jpg' },
  { name: 'University of Liverpool', file: 'LiverpoolPNG-copy.png' },
  { name: 'Jagiellonian University', file: 'jagiellonian_logo_website.png' },
  { name: 'Warsaw University of Technology', file: 'Warsaw_University_of_Technology.png' },
  { name: 'Silesian University of Technology', file: 'politechnika_sl_logo_poziom_en_rgb-2048x596-1.png' },
  { name: 'University of Wrocław', file: 'logo_uwr.jpg' },
  { name: 'Wroclaw Medical University', file: 'logo_umw_uklad_symetryczny_wersja_ang_dwuwierszowa_wersja_cmyk.jpg' },
  { name: 'Polish-Japanese Academy of Information Technology', file: 'polish-japanese-academy-of-information-technology.jpg' },
  { name: 'University of Fine Arts in Poznań', file: 'University_of_Fine_Arts_in_Poznan.png' },
  { name: 'EC English Language Centres', file: 'ec.png' },
  { name: 'Kozminski University', file: 'KU.jpg' },
  { name: 'Collegium Civitas', file: 'logo_pion_magia_studiowania_en.png' },
  { name: 'Poznan University of Technology', file: 'images-1.png' },
  { name: 'Think Poland', file: 'images.png' },
]
