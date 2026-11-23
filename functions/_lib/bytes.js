// Bayt dizileri için yardımcılar (workerd çalışma zamanında Buffer yoktur).

export function b64encode(bytes) {
  let bin = ''
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000))
  return btoa(bin)
}

export function b64decode(str) {
  const bin = atob(str)
  const out = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i)
  return out
}

export const b64urlEncode = (bytes) => b64encode(bytes).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '')

export function b64urlDecode(str) {
  const b64 = str.replaceAll('-', '+').replaceAll('_', '/')
  return b64decode(b64 + '='.repeat((4 - (b64.length % 4)) % 4))
}

export const hexOf = (bytes) => [...bytes].map((b) => b.toString(16).padStart(2, '0')).join('')

export const asciiOf = (bytes) => String.fromCharCode(...bytes)
