const path = require('path')

const cdn = 'https://cdn.jsdelivr.net/npm/'
const antdCSS = `${cdn}ant-design-vue@1.6.5/dist/antd.min.css`
const quillCSS = `${cdn}quill@1.3.7/dist/quill.snow.min.css`

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - SLDG',
    meta: [
      { charset: 'utf-8' },
      // { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      // { 'http-equiv': 'content-language', content: 'zh-CN' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '文档,网站开发,互联网协议,javascript,website development,WEB 应用,es6,赛雷网'},
      { hid: 'description', name: 'description', content: '一些文档' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'style', href: antdCSS },
      { rel: 'preload', as: 'style', href: quillCSS },
      { rel: 'stylesheet', href: antdCSS },
      { rel: 'stylesheet', href: quillCSS }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://zh.nuxtjs.org/faq/cached-components
    '@nuxtjs/component-cache',
    '@nuxtjs/robots'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  pwa: {
    manifest: {
      name: 'Docs-SLDG',
      start_url: '/',
      description: 'Docs-SLDG official website',
      lang: 'zh-cn',
      publicPath: '/_nuxt/'
    },
    workbox: {
      offlineAnalytics: true
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config) {
      // antd icons 按需加载，能大幅降低 antd icons 占用的空间，提高加载速度
      config.resolve.alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, './antd-icons.js')
    }
  }
}
