import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Food Hut',

      htmlAttrs: {
        lang: 'en',
      },

      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "Nuxt 3 & Tailwind 3 version of Forkify App from Jonas Schmedtmann's JavaScript Course.",
        },
      ],
      script: [{ src: 'https://unpkg.com/flowbite@1.4.7/dist/flowbite.js' }],
    },
  },
  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', 'nuxt-icons'],

  // Important to make the dark mode works
  colorMode: {
    classSuffix: '',
  },
});
