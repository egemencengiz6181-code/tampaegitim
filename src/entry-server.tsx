import { StrictMode } from 'react'
import { prerender } from 'react-dom/static'
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { site } from './data/site'

const handler = createStaticHandler(routes)

/** Bir URL'yi statik HTML'e çevirir. Lazy sayfalar ve Suspense tamamlanana kadar bekler. */
export async function render(url: string) {
  const request = new Request(`${site.url}${url}`)
  const context = await handler.query(request)
  if (context instanceof Response) {
    return { redirect: context.headers.get('Location') ?? '/', html: '', status: context.status }
  }
  const router = createStaticRouter(handler.dataRoutes, context)
  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouterProvider router={router} context={context} hydrate={false} />
    </StrictMode>,
  )
  const html = await new Response(prelude).text()
  return { html, status: context.statusCode }
}

export { sitemapPaths, blogFeed } from './seo/paths'
export { redirects } from './data/redirects'
