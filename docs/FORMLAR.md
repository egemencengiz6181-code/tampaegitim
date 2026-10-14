# Form başvurularını Gmail’e ve Google E-Tablo’ya bağlama

Sitedeki tüm formlar (ana sayfa, başvuru, iletişim, program, ülke, paket, konaklama, online eğitim, blog ve reklam sayfaları) tek bir yere gönderilir. Kurulum bittiğinde her başvuru:

1. **Google E-Tablo’ya** yeni bir satır olarak eklenir (tarih, ad, telefon, e-posta, program, ülke, mesaj, formun bulunduğu sayfa, reklam kaynağı). Tabloda her başvuru için **Durum** (Yeni / Arandı / Kayıt oldu…) ve **Danışman notu** sütunları vardır; küçük bir CRM gibi kullanılabilir.
2. Belirlediğiniz adres(ler)e **Gmail bildirimi** olarak gelir. E-postada tek tıkla **Ara** ve **WhatsApp** düğmeleri bulunur; “Yanıtla” dediğinizde doğrudan başvurana yazarsınız.

E-posta spam’e düşse veya silinse bile başvuru tabloda kalır; hiçbir başvuru kaybolmaz.

Kurulum yaklaşık **10 dakika** sürer ve bir kez yapılır. Hiçbir şifre paylaşmanız gerekmez.

---

## Adım 1 – Google E-Tablo’yu oluşturun

1. Formların düşmesini istediğiniz Google hesabıyla (ör. info@tampaegitim.com.tr) giriş yapın.
2. https://sheets.new adresine gidin; boş bir tablo açılır.
3. Sol üstteki adı **“Tampa Web Başvuruları”** olarak değiştirin.

## Adım 2 – Script’i yapıştırın

1. Tablodayken menüden **Uzantılar → Apps Script**’e tıklayın. Yeni sekmede bir kod editörü açılır.
2. Editördeki tüm kodu silin.
3. Bu depodaki **`docs/google-apps-script/Code.gs`** dosyasının içeriğinin tamamını kopyalayıp yapıştırın.
4. Üstteki proje adını **“Tampa Form Alıcısı”** yapın.

## Adım 3 – Ayarları düzenleyin

Kodun en üstündeki **AYARLAR** bölümünü düzenleyin:

| Ayar | Ne yazılacak |
|---|---|
| `GIZLI_ANAHTAR` | Uzun, rastgele bir metin (en az 30 karakter, ör. `Tampa-2026-k7P9xQ2mVb4nZr8wLs1tYh6`). **Adım 5’te Vercel’e de aynısını yazacaksınız.** |
| `ALICILAR` | Başvuruların gideceği adres(ler). Birden fazlaysa virgülle: `'info@tampaegitim.com.tr, ali@tampaegitim.com.tr'` |
| `EK_ALICILAR` | (İsteğe bağlı) Belirli formları ayrıca başka kişilere de gönderin. Ör. `{ konaklama: 'x@tampaegitim.com.tr', lp: 'reklam@tampaegitim.com.tr' }` |
| `OTOMATIK_YANIT` | `true` yaparsanız e-posta adresini yazan başvurana otomatik “Başvurunuz bize ulaştı” e-postası gider. Metni hemen altındaki `OTOMATIK_YANIT_METNI`’nden düzenleyebilirsiniz. |

`EK_ALICILAR` için kullanılabilecek form kodları:

| Kod | Form |
|---|---|
| `anasayfa` | Ana sayfa |
| `basvuru` | Başvuru sayfası |
| `iletisim` | İletişim sayfası |
| `program` | Program × ülke sayfaları (ör. İngiltere dil okulları) |
| `ulke` | Ülke sayfaları |
| `paketler`, `paket` | Her Şey Dahil paketler |
| `konaklama` | Öğrenci konaklaması |
| `online-egitim`, `online` | Online eğitim |
| `fiyat-listesi` | Dil okulu fiyat listesi |
| `almanya-ozel-universiteler`, `almanya-ozel` | Almanya özel üniversiteler |
| `hizmet`, `akademi` | Hizmetler ve Tampa Akademi |
| `blog`, `rehber`, `belge` | Blog, bilgi bankası, örnek belgeler |
| `lp` | Google / Meta reklam sayfaları (`/lp/...`) |

Düzenledikten sonra **💾 Kaydet** simgesine (veya Ctrl/⌘ + S) basın.

## Adım 4 – Test edin ve yayınlayın

1. Üstteki fonksiyon listesinden **`testGonder`**’i seçip **▶ Çalıştır**’a basın.
2. Google izin isteyecek: **İzinleri incele** → hesabınızı seçin → (“Google bu uygulamayı doğrulamadı” uyarısı çıkarsa) **Gelişmiş → Tampa Form Alıcısı’na git (güvenli değil)** → **İzin ver**.
   *Bu uyarı, script’i kendiniz yazdığınız için çıkar; script yalnızca bu tabloya yazar ve sizin adınıza e-posta gönderir.*
3. Tabloda **Başvurular** sekmesi ve bir test satırı oluşmalı; `ALICILAR` adresine “Yeni başvuru: Test Başvurusu” e-postası gelmeli. Test satırını silebilirsiniz.
4. Sağ üstte **Dağıt → Yeni dağıtım**:
   - Tür seç (⚙️) → **Web uygulaması**
   - Açıklama: `Site formları`
   - **Şu kullanıcı olarak yürüt:** *Ben (kendi hesabınız)*
   - **Erişimi olan kişiler:** *Herkes*
   - **Dağıt** → çıkan **Web uygulaması URL’sini** kopyalayın (`https://script.google.com/macros/s/.../exec`).

> “Herkes” erişimi gereklidir çünkü site sunucusu bu adrese giriş yapmadan istek gönderir. Adres gizli anahtar olmadan gelen hiçbir isteği kabul etmez.

## Adım 5 – Vercel’e iki ayar ekleyin

Vercel → proje → **Settings → Environment Variables** → **Production** için:

| Değişken | Değer |
|---|---|
| `LEAD_WEBHOOK_URL` | Adım 4’te kopyaladığınız web uygulaması URL’si |
| `LEAD_WEBHOOK_SECRET` | Adım 3’te `GIZLI_ANAHTAR`’a yazdığınız metnin **birebir aynısı** |

Kaydedin ve **Deployments → son dağıtım → ⋯ → Redeploy** ile siteyi yeniden yayınlayın.

## Adım 6 – Canlı test

Sitede herhangi bir formu kendi bilgilerinizle doldurun. Birkaç saniye içinde tabloda yeni satır ve gelen kutunuzda bildirim görmelisiniz.

---

## Sık sorulanlar

**Tablodaki “Kaynak / Kampanya / gclid” sütunları ne?**
Ziyaretçi siteye bir reklam linkiyle geldiyse (Google Ads, Meta), hangi kaynak, kampanya ve anahtar kelimeden geldiği otomatik kaydedilir. Ziyaretçi sitede başka sayfalara geçip formu sonra doldursa bile ilk geldiği kaynak korunur. Hangi reklamın başvuru getirdiğini buradan görebilirsiniz.

**Spam başvurular ne olacak?**
Formlarda botları yakalayan görünmez bir tuzak alan ve süre kontrolü vardır; bu başvurular tabloya hiç yazılmaz. Aynı bağlantıdan kısa sürede çok sayıda gönderim de engellenir.

**Script’i sonradan değiştirirsem?**
Ayarları (ör. yeni alıcı) değiştirdikten sonra **Dağıt → Dağıtımları yönet → ✏️ Düzenle → Sürüm: Yeni sürüm → Dağıt** yapın. URL değişmez, Vercel’de bir şey yapmanız gerekmez.

**Günlük gönderim sınırı var mı?**
Google Workspace hesaplarında günde 1.500, kişisel Gmail hesaplarında 100 e-posta. Bildirim + otomatik yanıt her başvuruda 2 e-posta sayılır. Sınır aşılsa bile başvurular tabloya yazılmaya devam eder.

**Form “gönderilemedi” hatası veriyor**
- Vercel’deki `LEAD_WEBHOOK_URL` ve `LEAD_WEBHOOK_SECRET` doğru mu, ayardan sonra Redeploy yapıldı mı?
- `LEAD_WEBHOOK_SECRET`, script’teki `GIZLI_ANAHTAR` ile birebir aynı mı (boşluk dahil)?
- Apps Script dağıtımında erişim “Herkes” mi?
- İletilemeyen başvurular kaybolmaz: Vercel → proje → **Logs** bölümünde `İLETİLEMEYEN BAŞVURU` satırında tüm bilgileriyle görünür.

**KVKK**
Formlar KVKK aydınlatma metni onayı olmadan gönderilemez. Tabloya erişimi yalnızca başvurularla ilgilenen kişilerle paylaşın.
