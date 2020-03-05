import path from 'path'
import fs from 'fs'

require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en-us'
    },
    title: 'Bad Monster Arts | Indie Game Studio',
    meta: [
      { lang: 'en-us' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },

  css: [
  ],

  plugins: [
    '@/plugins/vue-lazyload'
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    '@nuxtjs/sentry',
    '@nuxtjs/pwa',
    '@nuxtjs/recaptcha',
    '@nuxtjs/proxy',
    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    ['nuxt-social-meta', {
      url: 'www.badmonsterarts.com',
      title: 'Bad Monster Arts | Indie Game Studio',
      description: 'Description site',
      img: 'Link to image in static folder',
      locale: 'en_US',
      twitter: '@BadMonsterArts',
      themeColor: '#ff0000'
    }]
  ],

  recaptcha: {
    siteKey: process.env.RECAPTCHA_PUBLIC,
    size: 'normal',
    hideBadge: true,
    version: 3
  },

  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true,
    exclude: []
  },

  sentry: {
    dsn: process.env.SENTERY_DNS,
    config: {}
  },

  pwa: {
    icon: {
      iconFileName: '/images/favicon/apple-touch-icon.png'
    }
  },

  router: {
    linkActiveClass: 'selected'
  },

  axios: {
    proxy: true,
    headers: {
      common: {
        Accept: 'application/json'
      },
      delete: {},
      get: {
        Accept: 'application/json'
      },
      head: {},
      post: {
        Accept: 'application/json'
      },
      put: {},
      patch: {}
    }
  },

  proxy: {
    '/mail_chimp/': {
      target: process.env.MAILCHIMP_DNS,
      pathRewrite: {
        '^/mail_chimp/': ''
      },
      changeOrigin: true
    }
  },

  render: {
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
        .filter(f => f.asType === 'script' && f.file === 'runtime.js')
        .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    }
    // static: {
    //   maxAge: '1y',
    //   setHeaders (res, path) {
    //     if (path.includes('sw.js')) {
    //       res.setHeader('Cache-Control', `public, max-age=${15 * 60}`)
    //     }
    //   }
    // }
  },

  build: {
    extend (config, ctx) {
    }
  }
}
