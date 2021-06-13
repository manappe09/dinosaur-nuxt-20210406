require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '君だけの恐竜ずかんを持ち歩こう！',
    titleTemplate: '%s | 恐竜ずかん',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '自分だけの恐竜ずかんを持ち運ぼう！サイトの中から好きな恐竜や、行ってみたい博物館を登録！モバイルの中に好きな恐竜を入れて探検しよう。',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&family=RocknRoll+One&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/convert-data', '~/plugins/convert-date'],
  // plugins: ['~/plugins/vue-awesome-swiper', '~/plugins/convert-data'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-fontawesome',
  ],
  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.MICROCMS_BASE_URL,
    headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY },
  },

  dotenv: {
    systemvars: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Storybook
  storybook: {
    stories: ['~/stories/**/*.stories.js'],
  },
}
