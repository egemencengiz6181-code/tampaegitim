import { Fragment, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { safeHref } from '../lib/markdown'

/**
 * Basit zengin metin: [metin](/yol) iç link, [metin](https://...) dış link, **kalın** ve *italik*.
 * İçerik dosyalarında bağlam içi linkleme (SEO iç link yapısı) için kullanılır. HTML üretmez.
 */
const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*\s][^*]*)\*/g

export function Rich({ text }: { text: string }) {
  const out: ReactNode[] = []
  let last = 0
  let i = 0
  for (const m of text.matchAll(TOKEN)) {
    if (m.index! > last) out.push(text.slice(last, m.index))
    if (m[1]) {
      const href = safeHref(m[2])
      if (!href) out.push(m[1])
      else if (href.startsWith('/')) out.push(<Link key={i++} to={href}>{m[1]}</Link>)
      else if (href.startsWith('#')) out.push(<a key={i++} href={href}>{m[1]}</a>)
      else out.push(<a key={i++} href={href} target="_blank" rel="noopener noreferrer">{m[1]}</a>)
    } else if (m[3]) {
      out.push(<strong key={i++}>{m[3]}</strong>)
    } else if (m[4]) {
      out.push(<em key={i++}>{m[4]}</em>)
    }
    last = m.index! + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return <Fragment>{out}</Fragment>
}

/** Metindeki markdown işaretlerini temizler (meta açıklamaları için). */
export const plain = (text: string) => text.replace(TOKEN, (_, a, _b, c, d) => a ?? c ?? d)
