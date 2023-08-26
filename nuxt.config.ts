import { firebaseConfig } from "./components/firebase/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt', 'nuxt-vuefire'],
  devtools: { enabled: false },
  vuefire: {
    config: firebaseConfig
  }
})
