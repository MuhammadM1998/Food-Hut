module.exports = {
  darkMode: 'class',

  content: [
    './index.html',
    './app.vue',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],

  theme: {
    container: {
      center: true,
      padding: '2rem',
    },

    extend: {
      colors: {
        gray: { 100: '#686D77', 200: '#191919', 300: '#0D0D0D' },
        red: '#F54748',
        yellow: '#FDC55E',
      },

      screens: {
        '4xs': '375px',
        '3xs': '400px',
        '2xs': '480px',
        xs: '560px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
      },

      backgroundColor: {
        'pale-white': 'rgba(255, 255, 255, 0.3)',
      },

      backgroundImage: {
        'text-decore': "url('/assets/images/text-decore.png')",
        'red-graident-light':
          'linear-gradient(180deg, rgba(245,71,72,.095),transparent)',
        'red-graident-dark':
          'linear-gradient(rgba(245, 71, 72, 0.06) 0%, rgba(245, 71, 72, 0) 100%)',
        'recipe-item-gradient-mobile':
          'linear-gradient(90deg, transparent -10%,#f54748 300%)',
        'recipe-item-gradient-desktop':
          'linear-gradient(180deg, transparent -5%, rgb(245, 71, 72) 300%)',
        'image-border-gradient':
          'linear-gradient(transparent, transparent), linear-gradient(rgb(253, 197, 94), rgb(245, 71, 72))',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
};
