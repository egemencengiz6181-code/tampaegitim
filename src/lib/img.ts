/** Kart görselleri için 800px + 1400px responsive kaynak seti. */
export function cardImg(src: string, sizes = '(max-width: 600px) 92vw, 420px') {
  if (!src.endsWith('.jpg')) return { src }
  const small = src.replace(/\.jpg$/, '-800.jpg')
  return { src: small, srcSet: `${small} 800w, ${src} 1400w`, sizes }
}
