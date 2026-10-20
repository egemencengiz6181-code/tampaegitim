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
}
