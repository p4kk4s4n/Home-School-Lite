import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'))
const buildTime = new Date().toISOString()
const commitSha = process.env.GITHUB_SHA ? process.env.GITHUB_SHA.slice(0, 7) : 'local'

function versionManifestPlugin(): Plugin {
  const payload = JSON.stringify(
    {
      appId: 'home-school-lite',
      version: pkg.version,
      buildTime,
      commit: commitSha,
    },
    null,
    2
  )

  return {
    name: 'hsl-version-manifest',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.split('?')[0].endsWith('/version.json')) {
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Cache-Control', 'no-store')
          res.end(payload)
          return
        }
        next()
      })
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'version.json',
        source: payload,
      })
    },
  }
}

export default defineConfig({
  base: '/Home-School-Lite/',
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
    __BUILD_TIME__: JSON.stringify(buildTime),
    __COMMIT_SHA__: JSON.stringify(commitSha),
  },
  plugins: [react(), versionManifestPlugin()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
})
