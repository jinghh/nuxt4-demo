// 修复自动导入配置
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'unplugin-auto-import/nuxt',
  ],
  autoImport: {
    presets: ['vant']
  },
  plugins: [
    '~/plugins/vant.client.ts',
  ],
  build: {
    transpile: ['vant'],
  },
  vite: {
    plugins: [
      Components({
        resolvers: [VantResolver()],
        dts: true,
      }),
    ],
  },
  compatibilityDate: '2025-07-17'
})