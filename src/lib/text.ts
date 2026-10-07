import type { ReactNode } from 'react'

// Başlıklarda küçük kalan bağlaçlar ve ekler.
const MINOR = new Set(['ve', 'ile', 'veya', 'ya', 'da', 'de', 'ki', 'mi', 'mı', 'mu', 'mü', 'and', 'or', 'of', 'the'])

/** Türkçe başlık düzeni: her kelimenin baş harfi büyük (bağlaçlar hariç). */
export function titleCase(text: string): string {
  return text
    .split(' ')
    .map((word, i) => {
      if (i > 0 && MINOR.has(word.toLocaleLowerCase('tr'))) return word
      return word.replace(/\p{L}/u, (ch) => ch.toLocaleUpperCase('tr'))
    })
    .join(' ')
}

export const titleNode = (node: ReactNode): ReactNode => (typeof node === 'string' ? titleCase(node) : node)
