// Konaklama partnerimiz GoBritanya'nın yurt listesini, fiyatlarını ve görsellerini çeker.
// Kullanım: npm run sync:konaklama  →  src/data/gobritanya.json ve public/img/konaklama/ güncellenir.
// Sayfalar düz HTML olarak okunur; uzak sitedeki hiçbir script çalıştırılmaz.
import { writeFile, mkdir, access } from 'node:fs/promises'

const BASE = 'https://www.gobritanya.com'
const UA = 'Mozilla/5.0 (compatible; TampaSiteSync/1.0; +https://tampaegitim.com.tr)'
const OUT_JSON = new URL('../src/data/gobritanya.json', import.meta.url)
const IMG_DIR = new URL('../public/img/konaklama/', import.meta.url)
const IMAGES_PER_RESIDENCE = 3

const get = async (url) => {
  const res = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res
}

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&#0?39;|&rsquo;|&#8217;/g, '’')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&pound;/g, '£')

/** HTML'i satır satır düz metne çevirir. */
const toLines = (html) =>
  decode(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, '\n'))
    .split('\n')
    .map((l) => l.replace(/\s+/g, ' ').trim())
    .filter(Boolean)

const price = (s) => {
  const m = s.match(/£\s?([\d,]+)/)
  return m ? Number(m[1].replace(/,/g, '')) : null
}

function parseResidence(html, url) {
  const [, city, slug] = url.match(/student-residences\/([^/]+)\/([^/?#]+)/)
  const name = decode((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) ?? [])[1] ?? slug).replace(/<[^>]+>/g, '').trim()
  const description = decode((html.match(/<meta name="description"\s+content="([^"]*)"/) ?? [])[1] ?? '')
  const lines = toLines(html)

  const nameIdx = lines.findIndex((l, i) => l === name && lines[i + 1] && /\d/.test(lines[i + 1]))
  const address = nameIdx >= 0 ? lines[nameIdx + 1] : ''
  const fromIdx = lines.findIndex((l) => l === 'From')
  const priceFrom = fromIdx >= 0 ? price(lines[fromIdx + 1]) : null

  // Oda tipleri: "<Oda adı>", "<Yurt adı>", "Flexible Booking | ..." kalıbıyla başlar
  const rooms = []
  lines.forEach((l, i) => {
    if (!l.startsWith('Flexible Booking') || lines[i - 1] !== name) return
    const room = { name: lines[i - 2], stays: [] }
    for (let j = i + 1; j < lines.length && lines[j] !== 'Price' && !lines[j].startsWith('Flexible Booking'); j++) {
      const min = lines[j].match(/minimum stay: (\d+) Weeks/i)
      if (min) {
        const label = lines.slice(Math.max(i, j - 4), j).find((x) => x.endsWith('Stay')) ?? ''
        const p = price(lines[j + 1] ?? '')
        if (p) room.stays.push({ label, minWeeks: Number(min[1]), price: p })
      }
    }
    if (room.stays.length && !rooms.some((r) => r.name === room.name)) rooms.push(room)
  })

  const featStart = lines.findIndex((l) => l.endsWith('FEATURES'))
  const featEnd = lines.findIndex((l, i) => i > featStart && l === 'LOCATION')
  const features = featStart >= 0 && featEnd > featStart ? lines.slice(featStart + 2, featEnd) : []
  const about = featStart >= 0 ? lines[featStart + 1] : description

  const images = [...new Set(html.match(/https:\/\/www\.gobritanya\.com\/images\/residences\/[^"')\s]+\.(?:jpe?g|png|webp)/gi) ?? [])]

  return { slug, city, name, address, priceFrom, rooms, features, about, description, url, images }
}

async function exists(u) {
  try {
    await access(u)
    return true
  } catch {
    return false
  }
}

async function main() {
  // Ana sayfa şehir dışı yurtları, /landing ise Londra yurtlarını "From £X / week" fiyatıyla listeler
  const pages = (await Promise.all([`${BASE}/`, `${BASE}/landing`].map(async (u) => (await get(u)).text()))).join('\n')
  const urls = [...new Set(pages.match(/https:\/\/www\.gobritanya\.com\/student-residences\/[a-z-]+\/[a-z0-9-]+/g) ?? [])]
  const listed = new Map()
  for (const m of pages.matchAll(/<h3[^>]*>([^<]+)<\/h3>[\s\S]{0,800}?From[\s\S]{0,300}?£\s?([\d,]+)/g)) listed.set(decode(m[1]).trim(), Number(m[2].replace(/,/g, '')))
  if (!urls.length) throw new Error('Yurt bağlantısı bulunamadı; site yapısı değişmiş olabilir.')
  await mkdir(IMG_DIR, { recursive: true })

  const residences = []
  for (const url of urls) {
    const r = parseResidence(await (await get(url)).text(), url)
    const local = []
    for (const [i, src] of r.images.slice(0, IMAGES_PER_RESIDENCE).entries()) {
      const file = `${r.slug}-${i + 1}.jpg`
      const dest = new URL(file, IMG_DIR)
      if (!(await exists(dest))) await writeFile(dest, Buffer.from(await (await get(src)).arrayBuffer()))
      local.push(`/img/konaklama/${file}`)
    }
    r.priceFrom ??= listed.get(r.name) ?? (r.rooms.length ? Math.min(...r.rooms.flatMap((x) => x.stays.map((st) => st.price))) : null)
    residences.push({ ...r, images: local })
    console.log(`${r.city}/${r.slug}: £${r.priceFrom ?? '?'} · ${r.rooms.length} oda tipi`)
  }

  residences.sort((a, b) => a.city.localeCompare(b.city) || (a.priceFrom ?? 1e9) - (b.priceFrom ?? 1e9))
  await writeFile(OUT_JSON, JSON.stringify({ source: BASE, syncedAt: new Date().toISOString().slice(0, 10), residences }, null, 2) + '\n')
  console.log(`${residences.length} yurt yazıldı → src/data/gobritanya.json`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
