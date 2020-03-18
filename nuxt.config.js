require('dotenv').config()

export default {
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'en-us'
    },
    title: 'Bad Monster Arts | Indie Game Studio',
    meta: [
      { lang: 'en-us' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Indie Game studio with a passion for building beautiful games.'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://cdn.badmonsterarts.com/favicon.ico'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'preconnect',
        href: 'https://cdn.jsdelivr.net',
        crossorigin: true
      },
      { rel: 'preconnect', href: 'https://www.google.com', crossorigin: true },
      { rel: 'preconnect', href: 'https://www.gstatic.com', crossorigin: true }
    ]
  },

  loading: { color: '#fff' },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'UA-160645146-1',
    debug: {
      sendHitTask: process.env.NODE_ENV !== 'development'
    }
  },

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    '@nuxtjs/sentry',
    '@nuxtjs/pwa',
    '@nuxtjs/recaptcha',
    '@nuxtjs/robots',
    '@nuxtjs/proxy',
    [
      'nuxt-fontawesome',
      {
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
    [
      'nuxt-social-meta',
      {
        url: 'www.badmonsterarts.com',
        title: 'Bad Monster Arts | Indie Game Studio',
        description:
          'Indie Game studio with a passion for building beautiful games.',
        img: 'https://cdn.badmonsterarts.com/ogimg.jpg',
        locale: 'en_US',
        twitter: '@BadMonsterArts',
        themeColor: '#31355e'
      }
    ]
  ],

  sanity: {
    projectId: 'boiuafoj', // required
    dataset: 'production' // required
  },

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
      iconFileName: 'android-chrome-512x512.png'
    },
    meta: {
      ogSiteName: 'Bad Monster Arts'
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
    },
    '/api/': {
      target: process.env.API_DNS,
      pathRewrite: {
        '^/api/': ''
      },
      changeOrigin: true
    }
  },

  robots: {
    UserAgent: '*',
    Disallow: ''
  },

  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
