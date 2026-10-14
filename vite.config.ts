import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Connect, type Plugin } from 'vite'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

/**
 * Yerel geliştirmede /api/admin/* ve /api/lead isteklerini Vercel fonksiyonlarıyla aynı kodla karşılar.
 * GITHUB_TOKEN tanımlı değilse yazılar doğrudan content/blog klasörüne kaydedilir;
 * LEAD_WEBHOOK_URL tanımlı değilse form başvuruları yalnızca konsola yazılır.
 */
function adminApi(): Plugin {
  const routes = new Set(['admin/login', 'admin/logout', 'admin/me', 'admin/posts', 'admin/status', 'lead'])
  const middleware: Connect.NextHandleFunction = async (req, res, next) => {
    const name = req.url?.match(/^\/api\/((?:admin\/)?[a-z]+)(?:[?#]|$)/)?.[1]
    if (!name || !routes.has(name)) return next()
    const mod = await import(pathToFileURL(path.resolve('api', `${name}.js`)).href)
    await mod.default(req, res)
  }
  return {
    name: 'tampa-admin-api',
    configureServer: (server) => void server.middlewares.use(middleware),
    configurePreviewServer: (server) => void server.middlewares.use(middleware),
  }
}

// Sitemap ve sayfa bazlı statik HTML üretimi scripts/prerender.mjs içinde yapılır.
export default defineConfig(({ mode }) => {
  // .env.local içindeki ADMIN_*, GITHUB_* ve LEAD_* değişkenleri yalnızca sunucu tarafında (API) kullanılır
  const env = loadEnv(mode, process.cwd(), ['ADMIN_', 'GITHUB_', 'LEAD_'])
  for (const [k, v] of Object.entries(env)) process.env[k] ??= v
  return {
    plugins: [react(), adminApi()],
    ssr: {
      noExternal: ['@fontsource-variable/bricolage-grotesque', '@fontsource-variable/instrument-sans', '@fontsource/jetbrains-mono'],
    },
  }
})
