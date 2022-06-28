import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: 'Food Hut - %s',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' },
      ],

      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "Nuxt 3 & Tailwind 3 version of Forkify App from Jonas Schmedtmann's JavaScript Course.",
        },
        // Facebook Meta Tags
        { property: 'og:url', content: 'https://foodhut.vercel.app' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Food Hut' },
        {
          property: 'og:description',
          content:
            "Nuxt 3 & Tailwind 3 version of Forkify App from Jonas Schmedtmann's JavaScript Course.",
        },
        {
          property: 'og:image',
          content:
            'https://github.com/MuhammadM1998/Food-Hut/raw/main/public/Website-Screenshot.png',
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '627' },
        // Twitter Meta Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'https://foodhut.vercel.app' },
        { property: 'twitter:url', content: 'https://foodhut.vercel.app/' },
        { property: 'twitter:title', content: 'Food Hut' },
        {
          property: 'twitter:description',
          content:
            "Nuxt 3 & Tailwind 3 version of Forkify App from Jonas Schmedtmann's JavaScript Course.",
        },
        {
          property: 'twitter:image',
          content:
            'https://github.com/MuhammadM1998/Food-Hut/raw/main/public/Website-Screenshot.png',
        },
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
