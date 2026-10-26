// Kalıcı (301) yönlendirmelerin TEK listesi: eski adres -> yeni adres.
// Router (istemci), prerender'ın ürettiği _redirects dosyası ve sitemap bu listeyi kullanır.
// Vercel yönlendirmeleri vercel.json'dan okur; build, vercel.json'da eksik kayıt varsa hata verir.
// Yeni bir 301 eklerken hem buraya hem vercel.json > redirects'e ekleyin; eski adrese giden
// iç linkleri de yeni adresle değiştirin (301 zinciri bırakmayın).
export const redirects: Record<string, string> = {
  '/universite-basvuru-rehberi': '/bilgi-bankasi/universite-basvuru-rehberi',
  '/ornek-cv': '/kaynaklar/ornek-cv',
  '/ornek-niyet-mektubu-2': '/kaynaklar/ornek-niyet-mektubu',
  '/ornek-muvaffakatname': '/kaynaklar/ornek-muvaffakatname',
  '/ornek-banka-mektubu': '/kaynaklar/ornek-banka-mektubu',
  '/ornek-sponsor-mektubu': '/kaynaklar/ornek-sponsor-mektubu',
  '/ornek-taahhutname': '/kaynaklar/ornek-taahhutname',
  // Paket 4 (2026-10-26): ince blog yazıları aynı konudaki güçlü sayfalarla birleştirildi
  '/blog/amerika-yaz-okulu': '/yurtdisi-yaz-okullari/amerika',
  '/blog/dubai-dil-okulu': '/yurtdisi-dil-okullari/dubai',
  '/blog/malta-dil-okulu-rehberi': '/yurtdisi-dil-okullari/malta',
  '/blog/brighton-dil-okulu': '/yurtdisi-dil-okullari/ingiltere/brighton-dil-okullari',
  '/blog/polonyada-universite-okumak': '/lisans-programlari/polonya',
  '/blog/almanyada-ucretsiz-universite': '/lisans-programlari/almanya',
  '/blog/ingilterede-lise-egitimi': '/yurtdisi-lise-egitimi/ingiltere',
  '/blog/irlanda-work-and-study-rehberi': '/work-and-study/irlanda',
  '/blog/kanada-dil-okulu-ve-co-op': '/work-and-study/kanada',
  '/blog/ingiltere-yaz-kamplari-ve-gencler-icin-firsatlar': '/blog/ingiltere-yaz-okulu-rehberi',
  '/blog/cocuklar-icin-ingiltere-yaz-kampi': '/blog/ingiltere-yaz-okulu-rehberi',
}
