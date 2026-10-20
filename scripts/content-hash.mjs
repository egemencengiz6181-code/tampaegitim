import crypto from 'node:crypto'

/** Sayfanın görünen ana içeriğinin özeti: <main> içi metin; script, etiket ve boşluk farkları yok sayılır. */
export function contentHash(html) {
  const main = html.match(/<main id="main">([\s\S]*)<\/main>/)?.[1] ?? html
  const text = main
    .replace(/<script\b[\s\S]*?<\/script>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return crypto.createHash('sha1').update(text).digest('hex').slice(0, 16)
}
