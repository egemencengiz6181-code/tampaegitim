import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Sitemap ve sayfa bazlı statik HTML üretimi scripts/prerender.mjs içinde yapılır.
export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: ['@fontsource-variable/bricolage-grotesque', '@fontsource-variable/instrument-sans', '@fontsource/jetbrains-mono'],
  },
})
