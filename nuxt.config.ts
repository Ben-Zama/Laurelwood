// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['../assets/css/main.scss'],
  ssr: false,
  modules: ['nuxt-aos'],
  aos: {
    delay: 500,
    duration: 2000
  }
})