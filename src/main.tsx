import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { createBrowserRouter, matchRoutes, RouterProvider } from 'react-router-dom'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/instrument-sans'
import '@fontsource/jetbrains-mono/500.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/pages.css'
import { routes } from './routes'
import { captureAttribution } from './lib/lead'

async function start() {
  captureAttribution()
  const container = document.getElementById('root')!
  const prerendered = !!container.firstElementChild

  // Hidrasyondan önce mevcut URL'nin lazy sayfa modüllerini çöz (statik HTML ile eşleşsin)
  const matches = matchRoutes(routes, window.location) ?? []
  await Promise.all(
    matches
      .filter((m) => typeof m.route.lazy === 'function')
      .map(async (m) => {
        const loaded = await (m.route.lazy as () => Promise<object>)()
        Object.assign(m.route, { ...loaded, lazy: undefined })
      }),
  )

  const router = createBrowserRouter(routes)
  const app = (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
  if (prerendered) hydrateRoot(container, app)
  else createRoot(container).render(app)
}

start()
