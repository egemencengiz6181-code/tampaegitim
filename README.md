# Tampa Yurtdışı Eğitim — web sitesi

React 19 + Vite + TypeScript + React Router ile yazılmış, veri odaklı kurumsal site.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/: her sayfa için statik HTML (prerender) + sitemap.xml + rss.xml + _redirects
npm run build:spa  # yalnızca istemci build'i (prerender olmadan)
npm run preview  # üretim çıktısını yerelde test et
```

## Yapı

| Klasör | İçerik |
| --- | --- |
| `src/data/` | Tüm içerik: `site.ts` (iletişim, ofisler), `countries.ts` (21 ülke), `programs.ts` (6 program), `packages.ts` (her şey dahil paketler), `services.ts`, `guides.ts` (bilgi bankası), `documents.ts` (örnek belgeler), `blog.ts` (yazıları `content/blog/` klasöründen okur), `landings.ts` (reklam sayfaları), `social.ts` (yorumlar, partner logoları) |
| `src/pages/` | Sayfa şablonları (her biri ayrı chunk olarak yüklenir) |
| `src/components/` | Header + mega menü, footer, form, kalkış panosu, biniş kartı vb. |
| `src/styles/` | `base.css` (tasarım token'ları), `layout.css`, `components.css`, `pages.css` |
| `public/img/` | Logo varyantları, ülke ve kampanya görselleri (800px kart sürümleriyle) |

Yeni bir ülke eklemek için `countries.ts`'ye bir kayıt eklemek yeterli; program × ülke sayfaları, menüler ve sitemap otomatik oluşur.

## Blog yönetim paneli (`/admin`)

Blog yazıları `content/blog/<adres>.json` + `<adres>.md` dosyalarında durur ve `/admin` panelinden eklenir, düzenlenir, silinir.
Panel kayıtları Vercel fonksiyonları (`api/admin/*`) üzerinden GitHub'a commit eder; Vercel siteyi yeniden derler.
Kurulum (Vercel ortam değişkenleri: `ADMIN_PASSWORD`, `ADMIN_SECRET`, `GITHUB_TOKEN`), kullanım ve SEO ayrıntıları: **[docs/ADMIN.md](docs/ADMIN.md)**.

## Reklam landing page'leri

`/lp/<slug>` adresinde, menüsüz ve tek hedefli (form) sayfalar. `robots.txt` ile indekslenmez. Mevcutlar:
`ingiltere-dil-okulu`, `her-sey-dahil-londra`, `yaz-okulu`, `almanya-yuksek-lisans`, `universite-basvuru-mentorluk`, `work-and-study-irlanda`.
Başarılı form gönderimi `/tesekkurler` sayfasına yönlenir (Google Ads / Meta dönüşüm takibi için).

## Form entegrasyonu

Tüm formlar `/api/lead` sunucu fonksiyonuna gider (doğrulama, bot koruması, reklam kaynağı bilgisi). Fonksiyon başvuruyu Google Apps Script'e iletir; script Google E-Tablo'ya satır ekler ve Gmail ile bildirim gönderir.
Kurulum (Apps Script + Vercel'de `LEAD_WEBHOOK_URL`, `LEAD_WEBHOOK_SECRET`): **[docs/FORMLAR.md](docs/FORMLAR.md)**. Script: `docs/google-apps-script/Code.gs`.

## Yayına almadan önce

- Form bağlantısı (docs/FORMLAR.md) kurulmalı; analytics / reklam pikselleri eklenmeli.
- KVKK ve çerez metinleri hukuk danışmanınca gözden geçirilmeli.
- Barındırma ayarları için aşağıdaki "Yayın (hosting)" bölümüne bakın.
- Eski WordPress adresleri (`/ornek-cv` vb.) yeni sayfalara yönlendirilir.

## SEO altyapısı

- **Prerender (SSG):** `npm run build` her sayfayı `dist/<yol>.html` olarak statik HTML üretir (`scripts/prerender.mjs`, `src/entry-server.tsx`). Arama motorları içeriği, başlıkları ve şemaları JavaScript çalıştırmadan görür; React sayfayı tarayıcıda devralır (hydration).
- **Meta:** Her sayfada başlık (~65 karakter), açıklama, canonical, hreflang, Open Graph ve Twitter etiketleri (`Seo` bileşeni, `src/components/ui.tsx`).
- **Yapısal veri:** Organization + LocalBusiness (her sayfa), BreadcrumbList, FAQPage, BlogPosting, Article, Service, Product/Offer (paketler).
- **Sitemap:** `dist/sitemap.xml` öncelik ve lastmod ile otomatik üretilir; `/lp/` sayfaları ve `/tesekkurler` noindex.
- **İç linkleme:** Blog ve rehber metinlerinde `[metin](/yol)` sözdizimi (`src/components/Rich.tsx`); program, ülke ve blog sayfaları birbirine bağlıdır.
- **Denetim:** `node scripts/seo-audit.mjs` (build sonrası) başlık/açıklama uzunluğu, H1, canonical, yinelenen başlık ve kırık iç linkleri raporlar.

Öncelikli anahtar kelime sayfaları (İngiltere): `/yurtdisi-yaz-okullari/ingiltere`, `/yurtdisi-dil-okullari/ingiltere`, `/ulkeler/ingiltere`, `/lisans-programlari/ingiltere`, `/yurtdisi-yuksek-lisans/ingiltere`, `/yurtdisi-lise-egitimi/ingiltere` ve `content/blog/` içindeki İngiltere yazıları.

## İngiltere reklam landing page'leri

`/lp/ingiltere-yaz-okulu`, `/lp/londra-yaz-okulu`, `/lp/ingiltere-yurt-disi-egitim`, `/lp/ingiltere-dil-okulu`, `/lp/her-sey-dahil-londra`, `/lp/ingiltere-universite`, `/lp/ingiltere-yuksek-lisans`, `/lp/ingiltere-lise`.

## Yayın (hosting)

- **Netlify:** build komutu `npm run build`, yayın klasörü `dist`. `_redirects` otomatik üretilir (eski WordPress adresleri 301, bilinmeyen adresler 404).
- **Vercel:** kökteki `vercel.json` (cleanUrls, 301 yönlendirmeler) hazır.
- Yayından sonra Google Search Console'a `https://www.tampaegitim.com.tr/sitemap.xml` gönderilmeli.
