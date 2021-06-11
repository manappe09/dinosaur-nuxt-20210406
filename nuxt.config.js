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
    baseURL: 'https://dinosaur-nuxt-20210406.microcms.io/api/v1/',
    headers: { 'X-API-KEY': 'fb44c3f1-de38-4379-808e-34002dba69b4' },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Storybook
  storybook: {
    stories: ['~/stories/**/*.stories.js'],
  },
}
