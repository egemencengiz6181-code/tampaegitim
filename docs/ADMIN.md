# Blog Yönetim Paneli (`/admin`)

Tampa Yurtdışı Eğitim sitesinin blog yazılarını tarayıcıdan yönetmek için hazırlanmış paneldir.
Panelden **yalnızca blog yazıları** yönetilir: yeni yazı eklenir, mevcut yazılar düzenlenir, taslak olarak saklanır, yayınlanır, yayından kaldırılır veya silinir.

Adres: **https://tampaegitim.com.tr/admin**

---

## 1. Nasıl çalışır?

```
 /admin (tarayıcı)                 Vercel sunucu fonksiyonu            GitHub deposu                 Vercel
 ───────────────────               ────────────────────────            ──────────────               ──────────
 Yazıyı yaz → "Yayınla"  ──────▶   /api/admin/posts                    content/blog/<adres>.json     Site yeniden
                                   • şifreli oturum kontrolü   ──────▶ content/blog/<adres>.md   ──▶ derlenir (1–2 dk)
                                   • veri ve görsel doğrulama          public/img/blog/*.jpg         Yazı statik HTML
                                   • tek commit olarak kaydet          (gerekirse vercel.json)       olarak yayına çıkar
```

- Her yazı iki dosyadan oluşur: `content/blog/<adres>.json` (başlık, açıklama, kategori, tarih, SEO alanları) ve `content/blog/<adres>.md` (yazı metni).
- Panelde yapılan her kayıt GitHub’a **tek bir commit** olarak yazılır. Vercel bu commit’i görür ve siteyi yeniden derler.
- Yazılar sunucuda tek tek üretilmiş **statik HTML sayfası** olarak yayınlanır. Google, sayfanın tüm içeriğini JavaScript çalıştırmadan görür; hız ve SEO açısından en iyi yöntem budur.
- Yayın süresi: “Yayınla” veya “Güncelle”ye bastıktan sonra **yaklaşık 1–2 dakika**. Panelin üst çubuğundaki durum göstergesi (“Site yeniden derleniyor…”, sonra “Değişiklikler yayında”) bu süreci canlı takip eder.

---

## 2. Tek seferlik kurulum

Panelin çalışması için Vercel’de üç ortam değişkeni tanımlanmalıdır. Bu işlem bir kez yapılır.

### 2.1 GitHub erişim anahtarı (GITHUB_TOKEN)

Panel, yazıları GitHub deposuna bu anahtarla kaydeder.

1. GitHub’da sağ üstteki profil fotoğrafı → **Settings** → en altta **Developer settings** → **Personal access tokens** → **Fine-grained tokens** → **Generate new token**.
   Doğrudan bağlantı: https://github.com/settings/personal-access-tokens/new
2. Alanları şöyle doldurun:
   - **Token name:** `tampa-blog-admin`
   - **Expiration:** 1 yıl (süre dolunca yenilemeniz gerekir; bkz. Sorun giderme)
   - **Resource owner:** `egemencengiz6181-code`
   - **Repository access:** *Only select repositories* → `tampaegitim`
   - **Permissions → Repository permissions:**
     - **Contents:** *Read and write* (yazıları kaydetmek için)
     - **Deployments:** *Read-only* (paneldeki “yayında mı?” göstergesi için)
     - *Metadata: Read-only* otomatik seçilir.
3. **Generate token** → oluşan `github_pat_...` ile başlayan değeri kopyalayın. Bu değer bir daha gösterilmez.

> Bu anahtar yalnızca bu depoya ve yalnızca dosya içeriğine erişebilir. Başka hiçbir hesaba veya depoya yetkisi yoktur.

### 2.2 Vercel ortam değişkenleri

Vercel → projeyi açın → **Settings** → **Environment Variables**. Aşağıdaki üç değişkeni **Production** ortamı için ekleyin:

| Değişken | Değer | Açıklama |
|---|---|---|
| `ADMIN_PASSWORD` | Güçlü bir şifre | Panele giriş şifresi. En az 12 karakter; büyük-küçük harf, rakam ve sembol içersin. |
| `ADMIN_SECRET` | Rastgele uzun bir değer | Oturum çerezlerini imzalar. Terminalde `openssl rand -hex 32` ile üretebilir ya da 40+ karakterlik rastgele bir metin yazabilirsiniz. |
| `GITHUB_TOKEN` | `github_pat_...` | 2.1’de oluşturduğunuz anahtar. |

İsteğe bağlı (normalde gerekmez):

| Değişken | Varsayılan |
|---|---|
| `GITHUB_REPO` | `egemencengiz6181-code/tampaegitim` |
| `GITHUB_BRANCH` | `main` |

Kaydettikten sonra **Deployments** sekmesinden son dağıtımın yanındaki **⋯ → Redeploy** ile siteyi bir kez yeniden yayınlayın; ortam değişkenleri ancak yeni dağıtımda devreye girer.

### 2.3 Kontrol

1. https://tampaegitim.com.tr/admin adresini açın.
2. Şifre ekranı geliyorsa kurulum tamamdır. “Kurulum gerekli” ekranı geliyorsa eksik değişkenler işaretlenmiş olarak listelenir.
3. Giriş yapın; mevcut tüm blog yazılarının listesini görmelisiniz.

> Vercel projesinin GitHub deposuna bağlı olması ve `main` dalına yapılan her commit’te otomatik yayın yapması gerekir (Vercel’in varsayılan ayarı). Panel bu otomatik yayına dayanır.

---

## 3. Kullanım

### 3.1 Giriş ve oturum

- Şifreyle giriş yapılır; oturum **12 saat** açık kalır, sonra yeniden şifre istenir.
- 15 dakika içinde 8 hatalı denemeden sonra o bağlantıdan giriş 15 dakika engellenir.
- İşiniz bitince sağ üstten **Çıkış** yapın (özellikle ortak bilgisayarlarda).

### 3.2 Yazı listesi

- Tüm yazılar (taslaklar dahil) son güncellemeye göre listelenir.
- Başlık, adres veya odak anahtar kelimeyle **arama**, **kategori** ve **durum** (Yayında / Taslak) filtresi kullanılabilir.
- Bir satıra tıklamak yazıyı düzenleme ekranında açar. **Görüntüle ↗** yayındaki sayfayı yeni sekmede açar.

### 3.3 Yeni yazı ekleme (adım adım)

1. **+ Yeni yazı**’ya tıklayın.
2. **Başlık** yazın. Sayfada büyük başlık (H1) olarak görünür. Adres (URL) başlıktan otomatik oluşur; Türkçe karakterler sadeleştirilir (ör. “Londra’da Yaz Okulu” → `londrada-yaz-okulu`). İsterseniz adresi elle kısaltabilirsiniz.
3. **Yazı metnini** sol alana yazın (bkz. Bölüm 4). Sağdaki önizleme, yazının sitede nasıl görüneceğini canlı gösterir. Üstteki **Yaz / Yan yana / Önizleme** düğmeleriyle görünümü değiştirebilirsiniz.
4. Sağ paneldeki **SEO** sekmesinde:
   - **Odak anahtar kelime:** İnsanların Google’da yazacağı ana ifade (ör. `ingiltere dil okulları`).
   - **SEO başlığı:** Google’da görünen başlık. Boş bırakılırsa yazı başlığı kullanılır. 35–60 karakter idealdir.
   - **Meta açıklama:** Google’da başlığın altında görünen 120–160 karakterlik özet. Yazının girişinde de kalın paragraf olarak gösterilir.
5. **Yazı ayarları** sekmesinde:
   - **Yayın tarihi** ve **kategori**,
   - **Kapak görseli:** “Görsel yükle” ile bilgisayarınızdan seçin ya da sitede var olan bir görselin yolunu yazın (ör. `/img/dest/ingiltere.jpg`). **Alt metin** (görseli anlatan cümle) mutlaka doldurulmalı.
   - **Ek anahtar kelimeler**, **ilgili programlar** ve **ilgili ülkeler:** Yazının altında ilgili program sayfalarına otomatik bağlantılar ve “ilgili yazılar” önerileri oluşturur.
   - **Sık sorulan sorular:** Eklenen her soru-cevap yazının sonunda gösterilir ve Google’a FAQ yapılandırılmış verisi olarak bildirilir.
6. Kaydetme:
   - **Taslağı kaydet:** Yazı depoya kaydedilir ama **sitede görünmez**. Daha sonra devam edebilirsiniz.
   - **Yayınla:** Yazı 1–2 dakika içinde `tampaegitim.com.tr/blog/<adres>` adresinde yayına çıkar; blog listesine, sitemap’e ve RSS’e eklenir.
   - Kısayol: **Ctrl + S** (Mac’te **⌘ + S**) yazının mevcut durumunu (taslak/yayında) koruyarak kaydeder.

### 3.4 Var olan yazıyı düzenleme

- Listeden yazıyı açın, değiştirin ve **Güncelle**’ye basın.
- Kaydedildiğinde yazının **güncellenme tarihi** otomatik olarak bugüne ayarlanır. Bu tarih sayfada “Güncelleme: …” olarak görünür ve Google’a `dateModified` olarak bildirilir. Güncel içerik sıralamada avantaj sağlar.
- **İlk yayın tarihi** siz değiştirmedikçe korunur.

### 3.5 Adres (URL) değiştirme

- Yayındaki bir yazının adresini değiştirirseniz panel uyarır ve kayıt sırasında **eski adresi yeni adrese kalıcı olarak (301) yönlendirir**. Eski bağlantılar çalışmaya devam eder, Google sıralaması yeni adrese aktarılır.
- Zincirleme yönlendirmeler otomatik tek adıma indirilir (A→B→C yerine A→C).
- Yine de yayındaki yazıların adresini gerekmedikçe değiştirmeyin.

### 3.6 Yayından kaldırma ve silme

- **Yayından kaldır:** Yazı taslağa döner, sitede görünmez ama silinmez.
- **Sil:** Yazı kalıcı olarak silinir (onay istenir). Yayındaki bir yazı silinirse eski adresi `/blog` sayfasına 301 ile yönlendirilir; kullanıcılar hata sayfası görmez.
- Silinen yazılar GitHub geçmişinde durduğu için gerektiğinde geri getirilebilir.

### 3.7 Kaydedilmemiş değişiklikler ve çakışmalar

- Yazarken değişiklikler tarayıcıya otomatik **yedeklenir**. Sekme kapanır veya bağlantı koparsa, yazıyı yeniden açtığınızda “kaydedilmemiş bir yedek bulundu → Yedeği geri yükle” uyarısı çıkar.
- Kaydedilmemiş değişiklik varken sayfadan çıkmaya çalışırsanız tarayıcı uyarır.
- Aynı yazı iki farklı yerde aynı anda düzenlenirse ikinci kayıt reddedilir ve “sayfayı yenileyin” uyarısı verilir; böylece kimse farkında olmadan diğerinin değişikliğini silmez.

---

## 4. Yazım kılavuzu (Markdown)

Yazı metni basit işaretlerle biçimlendirilir. Araç çubuğundaki düğmeler bu işaretleri sizin yerinize ekler; **?** düğmesi kılavuzu panel içinde açar.

| Yazdığınız | Sitede görünen |
|---|---|
| `## Ara başlık` | Ara başlık (H2). İçindekiler tablosuna otomatik eklenir. |
| `### Alt başlık` | Alt başlık (H3) |
| `**kalın**` | **kalın** |
| `*italik*` | *italik* |
| `[İngiltere dil okulları](/yurtdisi-dil-okullari/ingiltere)` | Site içi bağlantı |
| `[gov.uk](https://www.gov.uk/student-visa)` | Dış bağlantı (yeni sekmede açılır) |
| `- madde` | Madde işaretli liste |
| `1. madde` | Numaralı liste |
| `> Önemli not` | Vurgulu alıntı kutusu |
| `![Alt metin](/img/blog/gorsel.jpg "Açıklama")` | Görsel ve altında açıklama |
| `---` | Yatay ayırıcı çizgi |

Tablo:

```
| Program | Süre | Yaş |
|---|---|---|
| Yaz okulu | 2–6 hafta | 7–17 |
| Dil okulu | 1–52 hafta | 16+ |
```

Kurallar:

- Paragraflar arasında **bir boş satır** bırakın.
- Metinde `#` (tek diyez) kullanmayın; sayfa başlığı (H1) otomatik eklenir. En üst seviye ara başlık `##` olmalı.
- Güvenlik nedeniyle HTML ve `<script>` etiketleri kabul edilmez.
- Bağlantı eklerken **🔗 Bağlantı** düğmesi sitedeki tüm sayfaları öneri olarak listeler.

### Görseller

- **🖼 Görsel** düğmesiyle bilgisayarınızdan görsel seçin, alt metnini yazın ve metne ekleyin. Kopyaladığınız bir görseli metin alanına doğrudan **yapıştırabilirsiniz** (Ctrl/⌘ + V).
- Görseller yüklenmeden önce tarayıcıda otomatik olarak **web için optimize edilir**: en fazla 1400 px genişlik, JPEG, genellikle 100–300 KB. Kapak görseli için ayrıca liste kartlarında kullanılan 800 px sürümü üretilir.
- Görseller, yazıyı kaydettiğinizde `public/img/blog/` klasörüne yüklenir. Kaydetmeden önce metinden sildiğiniz görseller yüklenmez.
- Yalnızca JPG, PNG ve WEBP kabul edilir. Bir kayıtta toplam görsel boyutu yaklaşık 3,8 MB’ı geçmemelidir; çok sayıda görsel ekliyorsanız aralarda kaydedin.

---

## 5. SEO

### 5.1 Her yazıda otomatik olarak yapılanlar

Panelden yayınlanan her yazı için site şunları **otomatik** üretir:

- Sunucuda önceden oluşturulmuş statik HTML (Google içeriği eksiksiz ve hızlı okur)
- `<title>` (marka adıyla, 65 karakteri aşmayacak şekilde) ve meta açıklama
- `canonical` bağlantısı ve `index, follow, max-image-preview:large` robots etiketi
- Open Graph ve Twitter kartı etiketleri (paylaşım görseli ve alt metni dahil); `article:published_time`, `article:modified_time`, `article:section`, `article:tag`
- **BlogPosting** yapılandırılmış verisi: başlık, açıklama, görsel, yayın ve güncelleme tarihi, kelime sayısı, okuma süresi, yayıncı
- **BreadcrumbList** (Ana sayfa › Blog › Kategori › Yazı)
- SSS eklendiyse **FAQPage** yapılandırılmış verisi
- Ara başlıklardan otomatik **içindekiler tablosu** ve başlıklara bağlantı verilebilen kimlikler (`#londra-dil-okulu-secimi`)
- **sitemap.xml**’e ekleme (son güncelleme tarihiyle) ve **RSS** beslemesi (`/rss.xml`)
- Blog listesi, kategori sayfası, ana sayfadaki son yazılar ve ilgili ülke/program sayfalarında otomatik görünme
- Seçilen program ve ülkelere göre otomatik iç bağlantılar ve “ilgili yazılar”
- Okuma süresi (dakikada ~200 kelime)
- Dış bağlantılarda `rel="noopener noreferrer"`, görsellerde tembel yükleme (lazy loading)
- Taslaklar sitede, sitemap’te ve RSS’te **yer almaz**

### 5.2 SEO puanı ve kontrol listesi

Editördeki **SEO** sekmesi yazıyı siz yazarken 0–100 arası puanlar (yeşil ≥ 80, sarı 55–79, kırmızı < 55). Kontrol edilen kriterler:

**Anahtar kelime**
- Odak anahtar kelime belirlenmiş mi?
- SEO başlığında geçiyor mu (mümkünse başta)?
- Meta açıklamada geçiyor mu?
- Adreste (URL) geçiyor mu?
- İlk paragrafta geçiyor mu?
- En az bir ara başlıkta (H2/H3) geçiyor mu?
- Yoğunluk %0,5 – %3 arasında mı? (Aşırı tekrar spam sayılır.)
- Aynı odak kelime başka bir yazıda kullanılmış mı? (İki yazı aynı kelimede yarışırsa ikisi de zayıflar.)

**Başlık ve açıklama**
- SEO başlığı 35–60 karakter mi?
- Meta açıklama 120–160 karakter mi?
- Adres kısa mı (≤ 60 karakter, ≤ 7 kelime)?
- Başlık başka bir yazıyla aynı mı?

**İçerik**
- Kelime sayısı: 900+ ideal, en az 500.
- Çok uzun paragraf var mı (> 130 kelime)?
- Ortalama cümle uzunluğu ≤ 20 kelime mi?
- SSS eklenmiş mi?

**Yapı**
- En az 3 ara başlık (H2) var mı?
- Başlık hiyerarşisi doğru mu (H3, H2’den önce gelmemeli)?
- İlgili program/ülke seçilmiş mi?

**Bağlantı ve görsel**
- En az 3 iç bağlantı var mı?
- En az 1 güvenilir dış kaynak bağlantısı var mı?
- Kapak görseli ve alt metni var mı?
- Metindeki tüm görsellerin alt metni var mı?

Yanında **Google önizlemesi** (arama sonucunda nasıl görüneceği) ve **sosyal medya önizlemesi** (WhatsApp, Facebook, LinkedIn paylaşım kartı) bulunur.

### 5.3 İyi bir yazı için öneriler

- Önce kullanıcının sorusunu yanıtlayın; ilk paragraf konuyu ve odak kelimeyi net söylesin.
- Her ana konu için bir `##` ara başlık açın; okuyucu ve Google içindekiler tablosundan yararlanır.
- İlgili program, ülke ve rehber sayfalarına bağlantı verin (iç linkleme sıralamayı güçlendirir).
- Rakam, tarih ve fiyat gibi bilgileri güncel tutun; güncelleme tarihi otomatik yenilenir.
- Görsellerde “görsel1.jpg” yerine anlamlı alt metin kullanın.

---

## 6. Güvenlik

- Panel ve API arama motorlarına kapalıdır (`noindex`, `robots.txt` → `Disallow: /admin`, `/api/`).
- Şifre yalnızca Vercel ortam değişkeninde durur; kodda veya depoda yoktur. Karşılaştırma zamanlama saldırılarına karşı güvenli yapılır.
- Oturum, imzalı **HttpOnly + Secure + SameSite=Strict** çerezde tutulur; JavaScript ile okunamaz, başka sitelerden gönderilemez.
- Değişiklik yapan tüm isteklerde ek CSRF başlığı (`X-Admin-Request`) aranır.
- Sunucu, tarayıcıdan gelen her veriyi yeniden doğrular: adres biçimi, alan uzunlukları, kategori, tarih, görsel yolu, görsel türü (dosya imzası kontrolü), boyut sınırları. HTML/script içeren metin reddedilir.
- Yazı metni HTML olarak değil, güvenli bileşenlerle işlenir; yalnızca `/`, `https://`, `mailto:`, `tel:` ve `#` bağlantılarına izin verilir (XSS’e kapalı).
- Panel başka sitelerde çerçeve içinde açılamaz (`X-Frame-Options: DENY`).
- GitHub anahtarı yalnızca bu depoya, yalnızca içerik ve dağıtım okumaya yetkilidir. Sızdığından şüphelenirseniz GitHub’dan iptal edip yenisini oluşturun.

---

## 7. Yerel geliştirme

1. Proje klasöründe `.env.example` dosyasını `.env.local` adıyla kopyalayın ve en az `ADMIN_PASSWORD` değerini doldurun.
2. `npm run dev` → http://localhost:5173/admin
3. `GITHUB_TOKEN` boşsa panel **yerel modda** çalışır (üst çubukta “Yerel mod” yazar): kayıtlar doğrudan `content/blog/` klasörüne yazılır, GitHub’a gönderilmez. Değişiklikleri kendiniz commit edersiniz.
4. `npm run build` ile siteyi üretip `npm run preview` ile kontrol edebilirsiniz (önizleme sunucusunda da panel çalışır).

`.env.local` dosyası `.gitignore` içindedir; asla commit edilmez.

---

## 8. Sorun giderme

| Belirti | Neden / Çözüm |
|---|---|
| “Kurulum gerekli” ekranı | Vercel’de `ADMIN_PASSWORD` veya `GITHUB_TOKEN` eksik. Ekledikten sonra **Redeploy** yapın. |
| “GitHub erişimi reddedildi” | Anahtarın süresi dolmuş ya da izinleri eksik. Bölüm 2.1’deki izinlerle yeni anahtar oluşturup Vercel’de `GITHUB_TOKEN`’ı güncelleyin ve Redeploy yapın. |
| “Oturumunuzun süresi doldu” | 12 saat geçti; sayfayı yenileyip tekrar giriş yapın. Yazınız tarayıcı yedeğinden geri yüklenebilir. |
| “Bu yazı siz düzenlerken başka bir yerde değiştirildi” | Aynı yazı başka bir sekmede/kişi tarafından kaydedildi. Değişikliklerinizi kopyalayın, sayfayı yenileyin, tekrar uygulayın. |
| “Bu adresle başka bir yazı zaten var” | Adresi (URL) değiştirin. |
| “İstek çok büyük” | Bir kayıtta çok fazla/büyük görsel var. Görselleri birkaç kayda bölün. |
| Kaydettim ama sitede görünmüyor | Yazı taslak olabilir (“Yayınla”ya basın). Yayındaysa 1–2 dakika bekleyin; üst çubuktaki durum “Değişiklikler yayında” olunca sayfayı yenileyin. “Yayın başarısız” görünüyorsa Vercel → Deployments’taki hata kaydına bakın. |
| Google’da hemen çıkmıyor | Normaldir. Google Search Console → URL Denetleme → “Dizine eklenmesini iste” ile hızlandırabilirsiniz. sitemap.xml ve RSS otomatik güncellenir. |

---

## 9. Teknik dosya yapısı

| Yol | Görevi |
|---|---|
| `content/blog/<adres>.json` | Yazı bilgileri (başlık, açıklama, kategori, tarih, SEO alanları, SSS, taslak durumu) |
| `content/blog/<adres>.md` | Yazı metni (Markdown) |
| `content/blog-config.json` | Blog kategorileri (site ve panel ortak kullanır) |
| `public/img/blog/` | Panelden yüklenen görseller |
| `src/pages/admin/` | Panel arayüzü (liste, editör, SEO analizi, görsel işleme) |
| `api/admin/*.js` | Vercel sunucu fonksiyonları: `login`, `logout`, `me`, `posts`, `status` |
| `api/_lib/` | Oturum, doğrulama ve GitHub/yerel depolama katmanı |
| `src/data/blog.ts` | Yazıları içerik klasöründen okuyup siteye sağlar |
| `src/lib/markdown.ts`, `src/components/Markdown.tsx` | Güvenli Markdown işleme ve görüntüleme |
| `scripts/prerender.mjs` | Statik HTML, sitemap.xml ve rss.xml üretimi |
