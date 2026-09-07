import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

/**
 * dev 环境下把 api/ 里的 serverless 函数挂成中间件。
 *
 * 生产环境由平台（Vercel / Netlify / Workers）直接执行这些函数，
 * 但 vite dev server 只服务前端资源，不跑函数运行时，所以本地需要自己转发一次，
 * 否则 /api/status 会 ERR_CONNECTION_REFUSED。
 */
function serverlessApiDev(): Plugin {
  return {
    name: 'serverless-api-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/status', async (req, res) => {
        try {
          // 每次请求重新加载，改动 api/ 下的代码无需重启 dev server
          const mod = await server.ssrLoadModule('/api/status.ts')
          const handler = mod.default as (request: Request) => Promise<Response>

          const method = req.method ?? 'GET'
          const response = await handler(new Request('http://localhost/api/status', { method }))

          res.statusCode = response.status
          response.headers.forEach((value, key) => res.setHeader(key, value))
          // dev 不缓存，方便观察真实探测结果
          res.setHeader('cache-control', 'no-store')
          res.end(method === 'HEAD' ? undefined : await response.text())
        } catch (error) {
          server.config.logger.error(`[api/status] ${String(error)}`)
          res.statusCode = 500
          res.setHeader('content-type', 'application/json; charset=utf-8')
          res.end(JSON.stringify({ error: 'status handler failed' }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // api/ 下的函数用 process.env 读密钥（UPTIME_KUMA_* 等，无 VITE_ 前缀），
  // 这些不会被 Vite 自动注入，dev 时手动补上，行为才和线上一致。
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
    plugins: [
      vue(),
      vueDevTools(),
      UnoCSS(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
        dirs: ['src/composables', 'src/stores'],
        dts: 'src/types/auto-imports.d.ts',
        vueTemplate: true,
      }),
      Components({
        dirs: ['src/components'],
        dts: 'src/types/components.d.ts',
        resolvers: [
          // 模板里的 <Icon> 解析到 @iconify/vue
          (name) => (name === 'Icon' ? { name: 'Icon', from: '@iconify/vue' } : undefined),
        ],
      }),
      serverlessApiDev(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
