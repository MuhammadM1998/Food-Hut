export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: 'Food Hut - %s',
      htmlAttrs: { lang: 'en' },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],

      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "Nuxt 3 & Tailwind 3 version of Forkify App from Jonas Schmedtmann's JavaScript Course.",
        },
        // Facebook Meta Tags
        { property: 'fb:app_id', content: '966242223397117' },
        { property: 'og:url', content: 'https://foodhut.vercel.app' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:title',
          content: 'Find your next amazing Recipe now on Food Hut',
        },
        { property: 'og:site_name', content: 'Food Hut' },
        {
          property: 'og:description',
          content:
            "Nuxt 3 & Tailwind 3 version of Forkify App from Jonas Schmedtmann's JavaScript Course.",
        },
        {
          property: 'og:image',
          content:
            'https://res.cloudinary.com/cloud-m98/image/upload/c_scale,h_630,q_40,w_1200/v1656823565/Food%20Hut/Website-Screenshot_hrbeqp.png',
        },
        {
          property: 'og:image:secure_url',
          content:
            'https://res.cloudinary.com/cloud-m98/image/upload/c_scale,h_630,q_40,w_1200/v1656823565/Food%20Hut/Website-Screenshot_hrbeqp.png',
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Food Hut Website' },
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
            'https://res.cloudinary.com/cloud-m98/image/upload/c_scale,h_630,q_40,w_1200/v1656823565/Food%20Hut/Website-Screenshot_hrbeqp.png',
        },
      ],
    },
  },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
    '@pinia/nuxt',
  ],

  colorMode: {
    preference: 'system',
    fallback: 'light', // fallback value if not system preference found
    classSuffix: '',
  },

  runtimeConfig: {
    apiKey: process.env.API_KEY,
  },
});
