import type { Block } from '../lib/markdown'
import { Rich } from './Rich'

/**
 * Blog gövdesini render eder. Başlıklar içindekiler tablosu için id alır.
 * `resolveSrc` admin önizlemesinde henüz kaydedilmemiş görselleri göstermek için kullanılır.
 */
export function Markdown({ blocks, resolveSrc = (s) => s }: { blocks: Block[]; resolveSrc?: (src: string) => string }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return <h2 key={i} id={b.id}><Rich text={b.text} /></h2>
          case 'h3':
            return <h3 key={i} id={b.id}><Rich text={b.text} /></h3>
          case 'p':
            return <p key={i}><Rich text={b.text} /></p>
          case 'ul':
            return <ul key={i} className="article__list">{b.items.map((t, j) => <li key={j}><Rich text={t} /></li>)}</ul>
          case 'ol':
            return <ol key={i} className="article__list article__list--ol">{b.items.map((t, j) => <li key={j}><Rich text={t} /></li>)}</ol>
          case 'quote':
            return <blockquote key={i} className="article__quote"><Rich text={b.text} /></blockquote>
          case 'img':
            return (
              <figure key={i} className="article__fig">
                <img src={resolveSrc(b.src)} alt={b.alt} loading="lazy" decoding="async" />
                {b.caption && <figcaption>{b.caption}</figcaption>}
              </figure>
            )
          case 'table':
            return (
              <div key={i} className="tablewrap">
                <table className="ctable article__table">
                  <thead><tr>{b.head.map((h, j) => <th key={j} scope="col"><Rich text={h} /></th>)}</tr></thead>
                  <tbody>{b.rows.map((r, j) => <tr key={j}>{r.map((c, k) => <td key={k}><Rich text={c} /></td>)}</tr>)}</tbody>
                </table>
              </div>
            )
          case 'hr':
            return <hr key={i} />
          default:
            return null
        }
      })}
    </>
  )
}
