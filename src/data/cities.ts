// Ülke sayfalarındaki "Şehir rehberi" bölümü için kısa tanıtımlar.
export type City = { name: string; text: string; tags: string[] }

export const cities: Record<string, City[]> = {
  ingiltere: [
    { name: 'Londra', text: 'Dünyanın en kozmopolit şehirlerinden biri. Müzeleri, tiyatroları ve iş dünyasıyla hem dil eğitimi hem kariyer için güçlü bir seçenek; yaşam maliyeti yüksek.', tags: ['Dil okulu', 'Üniversite', 'Yüksek lisans'] },
    { name: 'Brighton', text: 'Londra’ya trenle yaklaşık bir saat uzaklıkta, genç ve canlı bir sahil şehri. Dil okullarının en sevilen adreslerinden.', tags: ['Dil okulu', 'Yaz okulu'] },
    { name: 'Oxford ve Cambridge', text: 'Asırlık üniversite şehirleri. Akademik atmosferiyle özellikle yaz okulları ve akademik İngilizce programları için tercih edilir.', tags: ['Yaz okulu', 'Dil okulu'] },
    { name: 'Manchester ve Liverpool', text: 'Kuzey İngiltere’nin öğrenci şehirleri. Londra’ya göre daha uygun konaklama, güçlü üniversiteler ve futbol kültürü.', tags: ['Üniversite', 'Yüksek lisans'] },
    { name: 'Bournemouth', text: 'Güney sahilinde sakin bir tatil şehri. Aile yanı konaklama ve uygun fiyatlı dil programlarıyla bilinir.', tags: ['Dil okulu'] },
  ],
  amerika: [
    { name: 'New York', text: 'Finans, sanat ve medyanın merkezi. Yoğun tempolu, enerjik ve çok kültürlü bir öğrenci deneyimi.', tags: ['Dil okulu', 'Yüksek lisans'] },
    { name: 'Boston', text: 'Üniversiteler şehri. Akademik atmosferi ve güvenli yapısıyla öğrencilerin gözdesi.', tags: ['Üniversite', 'Dil okulu'] },
    { name: 'Los Angeles ve San Diego', text: 'Kaliforniya güneşi altında sahil yaşamı, film ve teknoloji sektörüne yakınlık.', tags: ['Dil okulu', 'Üniversite'] },
    { name: 'Miami ve Boca Raton', text: 'Florida’nın sıcak iklimi ve uluslararası atmosferi.', tags: ['Dil okulu', 'Lise'] },
  ],
  kanada: [
    { name: 'Toronto', text: 'Kanada’nın en büyük şehri; finans ve teknoloji merkezi, çok kültürlü yapısıyla uluslararası öğrenciler için doğal bir başlangıç.', tags: ['Dil okulu', 'Work & Study', 'Üniversite'] },
    { name: 'Vancouver', text: 'Dağlar ve okyanus arasında, ılıman iklimli ve doğa sporlarına elverişli bir şehir.', tags: ['Dil okulu', 'Work & Study'] },
    { name: 'Montreal', text: 'Fransızca ve İngilizcenin bir arada konuşulduğu, Avrupa havasındaki öğrenci şehri.', tags: ['Dil okulu', 'Üniversite'] },
    { name: 'Calgary', text: 'Daha uygun yaşam maliyeti ve güçlü iş piyasasıyla öne çıkan Batı Kanada şehri.', tags: ['Üniversite'] },
  ],
  avustralya: [
    { name: 'Sidney', text: 'Opera binası ve plajlarıyla ikonik; en büyük iş ve eğitim merkezi.', tags: ['Dil okulu', 'Work & Study'] },
    { name: 'Melbourne', text: 'Kültür, sanat ve kahve kültürüyle bilinen, sıkça dünyanın en yaşanabilir şehirleri arasında gösterilen bir öğrenci şehri.', tags: ['Üniversite', 'Work & Study'] },
    { name: 'Brisbane ve Gold Coast', text: 'Sıcak iklim, sahil yaşamı ve görece uygun konaklama.', tags: ['Dil okulu', 'Work & Study'] },
    { name: 'Perth', text: 'Batı kıyısında sakin ve güneşli bir şehir.', tags: ['Dil okulu'] },
  ],
  irlanda: [
    { name: 'Dublin', text: 'Başkent ve teknoloji merkezi. İş fırsatları çok, konaklama talebi yüksek.', tags: ['Dil okulu', 'Work & Study', 'Yüksek lisans'] },
    { name: 'Cork', text: 'İrlanda’nın ikinci büyük şehri; daha sakin, daha uygun ve öğrenci dostu.', tags: ['Dil okulu', 'Work & Study'] },
    { name: 'Galway', text: 'Batı kıyısında müzik ve festival kültürüyle bilinen renkli bir şehir.', tags: ['Dil okulu'] },
  ],
  malta: [
    { name: 'St. Julian’s', text: 'Dil okullarının yoğunlaştığı, kafe, restoran ve gece hayatıyla adanın en hareketli bölgesi.', tags: ['Dil okulu', 'Yaz okulu'] },
    { name: 'Sliema', text: 'Sahil yürüyüş yolu, alışveriş ve ulaşım kolaylığıyla öğrencilerin sık tercih ettiği bölge.', tags: ['Dil okulu'] },
    { name: 'Valletta', text: 'UNESCO Dünya Mirası listesindeki tarihi başkent.', tags: ['Kültür'] },
    { name: 'Gozo', text: 'Daha sakin bir deneyim isteyenler için doğayla iç içe kardeş ada.', tags: ['Dil okulu'] },
  ],
  almanya: [
    { name: 'Berlin', text: 'Start-up ekosistemi, kültür hayatı ve görece uygun yaşamıyla genç profesyonellerin şehri.', tags: ['Dil okulu', 'Yüksek lisans'] },
    { name: 'Münih', text: 'Teknik üniversiteleri ve sanayi şirketleriyle güçlü, yüksek yaşam kalitesine sahip ama pahalı bir şehir.', tags: ['Üniversite', 'Yüksek lisans'] },
    { name: 'Hamburg', text: 'Liman şehri; medya, lojistik ve ticaret sektörlerinin merkezi.', tags: ['Dil okulu', 'Yüksek lisans'] },
    { name: 'Frankfurt', text: 'Avrupa’nın finans merkezlerinden; uluslararası ulaşım bağlantıları güçlü.', tags: ['Dil okulu'] },
    { name: 'Heidelberg ve Köln', text: 'Köklü üniversiteleri ve öğrenci nüfusuyla klasik Alman üniversite şehirleri.', tags: ['Üniversite'] },
  ],
  avusturya: [
    { name: 'Viyana', text: 'Müzik, sanat ve yaşam kalitesiyle bilinen başkent; üniversitelerin ve dil okullarının merkezi.', tags: ['Dil okulu', 'Yüksek lisans'] },
    { name: 'Salzburg ve Innsbruck', text: 'Alp manzaralı, daha sakin ve doğa sporlarına elverişli şehirler.', tags: ['Yaz okulu'] },
  ],
  ispanya: [
    { name: 'Madrid', text: 'Başkent; müzeleri, işletme okulları ve canlı şehir hayatıyla.', tags: ['Dil okulu', 'Yüksek lisans'] },
    { name: 'Barselona', text: 'Mimari, deniz ve tasarımın buluştuğu kozmopolit şehir.', tags: ['Dil okulu', 'Üniversite'] },
    { name: 'Valensiya ve Málaga', text: 'Akdeniz kıyısında daha uygun maliyetli, güneşli öğrenci şehirleri.', tags: ['Dil okulu', 'Yaz okulu'] },
    { name: 'Salamanca', text: 'Tarihi üniversitesiyle İspanyolca öğrenimin geleneksel adresi.', tags: ['Dil okulu'] },
  ],
  fransa: [
    { name: 'Paris', text: 'Sanat, moda ve işletme okullarının başkenti.', tags: ['Dil okulu', 'Yüksek lisans'] },
    { name: 'Lyon', text: 'Gastronomi ve öğrenci şehri; Paris’e göre daha uygun yaşam.', tags: ['Üniversite'] },
    { name: 'Nice ve Montpellier', text: 'Güney Fransa’nın güneşli, sahil kenarındaki dil okulu şehirleri.', tags: ['Dil okulu', 'Yaz okulu'] },
  ],
  italya: [
    { name: 'Milano', text: 'Moda, tasarım ve ekonominin merkezi; Politecnico ve Bocconi gibi kurumların şehri.', tags: ['Üniversite', 'Yüksek lisans'] },
    { name: 'Roma', text: 'Tarihi dokusu ve köklü üniversiteleriyle başkent.', tags: ['Dil okulu', 'Üniversite'] },
    { name: 'Floransa', text: 'Rönesans’ın beşiği; sanat ve İtalyanca kursları için ideal.', tags: ['Dil okulu', 'Yaz okulu'] },
    { name: 'Bologna, Padova ve Torino', text: 'Köklü devlet üniversiteleri ve daha uygun yaşam maliyetiyle öğrenci şehirleri.', tags: ['Üniversite'] },
  ],
  polonya: [
    { name: 'Varşova', text: 'Başkent ve iş merkezi; Varşova Teknik Üniversitesi ve Kozminski gibi kurumların şehri.', tags: ['Üniversite', 'Yüksek lisans'] },
    { name: 'Krakov', text: 'Tarihi dokusu ve Jagiellonian Üniversitesi ile Polonya’nın öğrenci başkenti.', tags: ['Üniversite'] },
    { name: 'Wrocław', text: 'Genç nüfusu ve teknoloji şirketleriyle yükselen bir üniversite şehri.', tags: ['Üniversite', 'Tıp'] },
    { name: 'Poznań ve Gliwice', text: 'Teknik ve sanat üniversiteleriyle uygun maliyetli eğitim şehirleri.', tags: ['Üniversite'] },
  ],
  cekya: [
    { name: 'Prag', text: 'Başkent ve en büyük öğrenci şehri; Charles Üniversitesi ve Çek Teknik Üniversitesi gibi köklü kurumların adresi. Yaşam maliyeti ülkenin en yüksek olanıdır.', tags: ['Üniversite', 'Yüksek lisans', 'Tıp'] },
    { name: 'Brno', text: 'Çekya’nın ikinci büyük şehri; Masaryk ve Brno Teknik üniversiteleriyle genç, canlı ve Prag’a göre daha ekonomik.', tags: ['Üniversite', 'Tıp'] },
    { name: 'Olomouc', text: 'Palacký Üniversitesi’nin şehri; sakin, tarihi ve uygun maliyetli bir öğrenci kenti.', tags: ['Üniversite', 'Tıp'] },
    { name: 'Ostrava, Plzeň ve Hradec Králové', text: 'Teknik ve çok alanlı üniversiteleriyle daha düşük yaşam giderleri sunan şehirler.', tags: ['Üniversite'] },
  ],
  macaristan: [
    { name: 'Budapeşte', text: 'Tuna kıyısında, tarihi ve canlı bir başkent; Avrupa’nın en uygun maliyetli başkentlerinden.', tags: ['Üniversite', 'Yüksek lisans'] },
    { name: 'Debrecen, Pécs ve Szeged', text: 'Uluslararası tıp fakülteleriyle bilinen, sakin ve ekonomik üniversite şehirleri.', tags: ['Tıp', 'Üniversite'] },
  ],
  dubai: [
    { name: 'Dubai', text: 'Modern mimarisi, güvenli yapısı ve uluslararası iş dünyasıyla bölgenin merkezi.', tags: ['Dil okulu', 'Yüksek lisans'] },
    { name: 'Abu Dabi', text: 'Başkent; daha sakin ve kültürel kurumlarıyla öne çıkar.', tags: ['Üniversite'] },
  ],
  isvicre: [
    { name: 'Zürih', text: 'Finans merkezi; ETH Zürih gibi dünya çapında kurumların şehri.', tags: ['Üniversite'] },
    { name: 'Cenevre ve Lozan', text: 'Uluslararası kuruluşlar ve otelcilik okullarıyla Fransızca konuşulan bölge.', tags: ['Üniversite', 'Yaz okulu'] },
    { name: 'Montreux ve Lucerne', text: 'Göl kenarında, yaz okulları ve otelcilik okullarıyla bilinen şehirler.', tags: ['Yaz okulu'] },
  ],
  japonya: [
    { name: 'Tokyo', text: 'Dev bir metropol; teknoloji, pop kültür ve gelenek bir arada.', tags: ['Dil okulu'] },
    { name: 'Osaka ve Kyoto', text: 'Daha samimi bir atmosfer, tarihi tapınaklar ve mutfak kültürü.', tags: ['Dil okulu'] },
    { name: 'Fukuoka', text: 'Daha uygun yaşam maliyeti ve sahil kenarında sakin bir öğrenci şehri.', tags: ['Dil okulu'] },
  ],
  kore: [
    { name: 'Seul', text: 'Teknoloji ve popüler kültürün merkezi; üniversite dil enstitülerinin çoğu burada.', tags: ['Dil okulu', 'Üniversite'] },
    { name: 'Busan', text: 'Sahil kenarında, daha sakin ve uygun maliyetli ikinci büyük şehir.', tags: ['Dil okulu'] },
  ],
}
