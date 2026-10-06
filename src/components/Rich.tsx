import { Fragment, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

/**
 * Basit zengin metin: [metin](/yol) iç link, [metin](https://...) dış link ve **kalın**.
 * İçerik dosyalarında bağlam içi linkleme (SEO iç link yapısı) için kullanılır.
 */
const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g

export function Rich({ text }: { text: string }) {
  const out: ReactNode[] = []
  let last = 0
  let i = 0
  for (const m of text.matchAll(TOKEN)) {
    if (m.index! > last) out.push(text.slice(last, m.index))
    if (m[1]) {
      const href = m[2]
      out.push(
        href.startsWith('/') ? (
          <Link key={i++} to={href}>{m[1]}</Link>
        ) : (
          <a key={i++} href={href} target="_blank" rel="noopener noreferrer">{m[1]}</a>
        ),
      )
    } else if (m[3]) {
      out.push(<strong key={i++}>{m[3]}</strong>)
    }
    last = m.index! + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return <Fragment>{out}</Fragment>
}

/** Metindeki markdown işaretlerini temizler (meta açıklamaları için). */
export const plain = (text: string) => text.replace(TOKEN, (_, a, _b, c) => a ?? c)
