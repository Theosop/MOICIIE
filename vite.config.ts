import build from '@hono/vite-build/vercel'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    build({
      entry: 'src/index.tsx'
    }),
    devServer({
      entry: 'src/index.tsx'
    })
  ],
  define: {
    'process.env': 'process.env'
  }
})
