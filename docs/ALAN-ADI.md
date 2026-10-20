# Alan adı: asıl adres www

Sitenin tek adresi **https://www.tampaegitim.com.tr**. Canonical, sitemap, robots.txt'teki `Sitemap`
satırı, Open Graph/Twitter etiketleri ve JSON-LD adresleri tek bir sabitten gelir:
[`content/site.json`](../content/site.json). Adres bir gün değişirse yalnızca bu dosya güncellenir.
İç linkler göreli olduğu için ziyaretçinin girdiği host'ta kalır.

## Durum (20 Ekim 2026)

- `https://www.tampaegitim.com.tr/*` → **200**, sertifika geçerli. Site burada çalışıyor.
- `https://tampaegitim.com.tr/*` (www'suz) → **TLS hatası**: Vercel'deki sertifika yalnızca `www` için çıkarılmış.
  Bu adrese gelen ziyaretçi ve eski bağlantılar siteye ulaşamıyor.
- `http://tampaegitim.com.tr` → Vercel 308 ile `https://tampaegitim.com.tr`'ye gönderiyor, orada da sertifika hatası var.
- DNS doğru: kök alan adı `216.198.79.1` (Vercel), www `vercel-dns` CNAME.

## Yapılacak (Vercel paneli, ~5 dakika)

Koddaki değişiklik buna bağlı değildir; site panel ayarı yapılmadan da www'de doğru çalışır. Bu adım
www'suz adrese gelenleri kurtarmak içindir.

1. Vercel → proje → **Settings → Domains**.
2. `www.tampaegitim.com.tr` satırı **Production**, **No redirect** olarak kalsın (asıl alan adı).
3. `tampaegitim.com.tr` listede yoksa **Add** ile ekleyin. Vercel “www'ye yönlendirilsin mi?” diye sorarsa **evet**.
   Varsa satırda **Edit → Redirect to `www.tampaegitim.com.tr`**, durum kodu **308** (veya 301; ikisi de kalıcıdır).
   Vercel yolu ve sorgu dizesini (`/blog?x=1`) korur.
4. Vercel `tampaegitim.com.tr` için sertifikayı otomatik çıkarır (birkaç dakika sürebilir).

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

Ardından Google Search Console'da `https://www.tampaegitim.com.tr` (veya alan adı mülkü) için
sitemap'i yeniden gönderin: `https://www.tampaegitim.com.tr/sitemap.xml`.
