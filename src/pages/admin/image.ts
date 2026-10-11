// Tarayıcıda görsel küçültme: yüklenen görseller sunucuya gitmeden önce web için optimize edilir.

export type Prepared = { path: string; data: string; url: string; width: number; height: number; bytes: number }

const rand = () => Math.random().toString(36).slice(2, 8)

async function loadBitmap(file: File): Promise<ImageBitmap> {
  if (!/^image\/(jpeg|png|webp)$/.test(file.type)) throw new Error('Yalnızca JPG, PNG veya WEBP görseller yüklenebilir.')
  if (file.size > 25_000_000) throw new Error('Görsel çok büyük (en fazla 25 MB).')
  return createImageBitmap(file)
}

async function encode(bmp: ImageBitmap, maxW: number, quality = 0.82): Promise<{ blob: Blob; w: number; h: number }> {
  const scale = Math.min(1, maxW / bmp.width)
  const w = Math.round(bmp.width * scale)
  const h = Math.round(bmp.height * scale)
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#fff' // PNG şeffaflığı JPG'de beyaz olur
  ctx.fillRect(0, 0, w, h)
  ctx.imageSmoothingQuality = 'high'
  ctx.drawImage(bmp, 0, 0, w, h)
  const blob = await new Promise<Blob>((ok, fail) => canvas.toBlob((b) => (b ? ok(b) : fail(new Error('Görsel işlenemedi.'))), 'image/jpeg', quality))
  return { blob, w, h }
}

const toBase64 = (blob: Blob) =>
  new Promise<string>((ok, fail) => {
    const r = new FileReader()
    r.onload = () => ok(String(r.result).split(',')[1])
    r.onerror = () => fail(new Error('Görsel okunamadı.'))
    r.readAsDataURL(blob)
  })

async function prepare(bmp: ImageBitmap, maxW: number, name: string): Promise<Prepared> {
  const { blob, w, h } = await encode(bmp, maxW)
  return { path: `img/blog/${name}.jpg`, data: await toBase64(blob), url: URL.createObjectURL(blob), width: w, height: h, bytes: blob.size }
}

/** Metin içi görsel: en fazla 1400 px genişlik. */
export async function prepareInline(file: File, base: string): Promise<Prepared> {
  const bmp = await loadBitmap(file)
  return prepare(bmp, 1400, `${base || 'yazi'}-${rand()}`)
}

/** Kapak görseli: 1400 px + liste kartları için 800 px sürümü (site bu ikiliyi bekler). */
export async function prepareCover(file: File, base: string): Promise<[Prepared, Prepared]> {
  const bmp = await loadBitmap(file)
  const name = `${base || 'yazi'}-kapak-${rand()}`
  const big = await prepare(bmp, 1400, name)
  const small = await prepare(bmp, 800, `${name}-800`)
  return [big, small]
}
