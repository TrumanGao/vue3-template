// https://vitejs.dev/config/
import { defineConfig, type UserConfig } from 'vite'
import { baseUserConfig } from './vite.config'

export default defineConfig((): UserConfig => {
  return {
    ...baseUserConfig,
    mode: 'DEVELOPMENT',
    define: {
      'process.env.VITE_MODE': JSON.stringify('DEVELOPMENT')
    },
    server: {
      open: true,
      strictPort: true,
      port: 8080,
      proxy: {
        '^/api/.*': {
          target: 'https://www.xxx.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
