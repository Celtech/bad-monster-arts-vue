module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'vue'
  ],
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    "no-console": "off",
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'prettier/prettier': ['error', { 'semi': false, 'singleQuote': true }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}
