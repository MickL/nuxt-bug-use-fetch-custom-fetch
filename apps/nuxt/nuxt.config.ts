// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  routeRules: {
    '/api/**': {
      proxy: 'http://localhost:3001/**',
    },
  },
})
