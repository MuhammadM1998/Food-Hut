import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: 'Food Hut - %s',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "Nuxt 3 & Tailwind 3 version of Forkify App from Jonas Schmedtmann's JavaScript Course.",
        },
        // Open Graph Thumbnail
        {
          property: 'og:image',
          content:
            'https://github.com/MuhammadM1998/Food-Hut/tree/main/public/Website-Screenshot.png',
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '627' },
        { property: 'og:title', content: 'Food Hut' },
        {
          property: 'og:description',
          content:
            "Nuxt 3 & Tailwind 3 version of Forkify App from Jonas Schmedtmann's JavaScript Course.",
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' },
      ],
    },
  },

  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', 'nuxt-icons'],

  colorMode: {
    preference: 'system',
    fallback: 'light', // fallback value if not system preference found
    classSuffix: '',
  },
});
