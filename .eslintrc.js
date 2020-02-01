module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  // add your custom rules here
  rules: {
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
  ],
}
