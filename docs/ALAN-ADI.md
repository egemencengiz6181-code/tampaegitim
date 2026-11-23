# Alan adı: asıl adres www

Sitenin tek adresi **https://www.tampaegitim.com.tr**. Canonical, sitemap, robots.txt'teki `Sitemap`
satırı, Open Graph/Twitter etiketleri ve JSON-LD adresleri tek bir sabitten gelir:
[`content/site.json`](../content/site.json). Adres bir gün değişirse yalnızca bu dosya güncellenir.
İç linkler göreli olduğu için ziyaretçinin girdiği host'ta kalır.

## Durum: Cloudflare Pages'e taşındı (23 Kasım 2026)

Site artık **Cloudflare Pages**'te yayınlanıyor. Hedef yapılandırma:

- `https://www.tampaegitim.com.tr/*` → **200**. Asıl adres; Pages projesine "custom domain" olarak eklenir
  (Pages → proje → **Custom domains**). DNS Cloudflare'deyse kayıt otomatik oluşur.
- `https://tampaegitim.com.tr/*` → **301/308** ile `https://www.tampaegitim.com.tr/*`. Kök alan adı da Pages'e
  eklenir ve Cloudflare **Redirect Rules** (veya Pages panelindeki yönlendirme) ile www'ye kalıcı yönlendirilir.
  Yol ve sorgu dizesi korunmalı (`/blog?x=1` → `https://www.tampaegitim.com.tr/blog?x=1`).
- `http://` istekleri Cloudflare'in "Always Use HTTPS" ayarıyla otomatik https'e yükselir.

Önceki durum (Vercel dönemi, Ekim 2026): yönlendirme Vercel paneli (Settings → Domains) üzerinden yapılmıştı;
kök → www yönlendirmesi Vercel'de iki adımlı 308 olarak çalışıyordu.

## Test

```bash
curl -sI https://www.tampaegitim.com.tr/blog | head -1                 # HTTP/2 200
curl -sI https://tampaegitim.com.tr/blog | grep -iE '^(HTTP|location)'
#   HTTP/2 308
#   location: https://www.tampaegitim.com.tr/blog
curl -sI "https://tampaegitim.com.tr/blog?x=1" | grep -i location      # ...?x=1 korunmalı
curl -sI http://tampaegitim.com.tr/ | grep -i location                 # https://www.tampaegitim.com.tr/ (veya önce https://tampaegitim.com.tr/)
curl -s https://www.tampaegitim.com.tr/robots.txt | grep Sitemap        # Sitemap: https://www.tampaegitim.com.tr/sitemap.xml
```

Yayından sonra Google Search Console'da `https://www.tampaegitim.com.tr` (veya alan adı mülkü) için
sitemap'i yeniden gönderin: `https://www.tampaegitim.com.tr/sitemap.xml`.
