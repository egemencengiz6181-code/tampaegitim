# Alan adı: asıl adres www

Sitenin tek adresi **https://www.tampaegitim.com.tr**. Canonical, sitemap, robots.txt'teki `Sitemap`
satırı, Open Graph/Twitter etiketleri ve JSON-LD adresleri tek bir sabitten gelir:
[`content/site.json`](../content/site.json). Adres bir gün değişirse yalnızca bu dosya güncellenir.
İç linkler göreli olduğu için ziyaretçinin girdiği host'ta kalır.

## Durum: tamamlandı (20 Ekim 2026)

- `https://www.tampaegitim.com.tr/*` → **200**. Asıl adres.
- `https://tampaegitim.com.tr/*` → **308** ile `https://www.tampaegitim.com.tr/*`. Yol ve sorgu dizesi korunuyor
  (`/blog?x=1` → `https://www.tampaegitim.com.tr/blog?x=1`). Vercel'de “Valid Configuration”, sertifika geçerli.
- `http://tampaegitim.com.tr/` → 308 `https://tampaegitim.com.tr/` → 308 `https://www.tampaegitim.com.tr/` (iki adım; Vercel'in standart davranışı).
- Yönlendirme Vercel paneli (Settings → Domains) üzerinden yapıldı. vercel.json'da www/kök alan adı
  yönlendirmesi **yok ve eklenmemeli**; panel ayarıyla çakışır.

Önceki durum (19 Ekim 2026): kök alan adı Vercel'e eklenmemişti, sertifika yalnızca `www` içindi ve
`https://tampaegitim.com.tr` TLS hatası veriyordu.

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
