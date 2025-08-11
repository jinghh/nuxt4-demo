import { defineNuxtConfig } from 'nuxt/config';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

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
    '~/plugins/mock.client.ts' // 添加Mock插件
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
  typescript: {
    shim: false,
    strict: true
  },
  compatibilityDate: '2025-07-17'
})
