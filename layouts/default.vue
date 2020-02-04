<template>
  <div class="page-wrapper">
    <div class="content-wrapper">
      <navbar />
      <breadcrumbs />
      <nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/navbar.vue'
import Breadcrumbs from '~/components/breadcrumbs.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    Navbar,
    Breadcrumbs,
    Footer
  }
}
</script>

<style lang="scss">
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    background: #f1f1f1 !important;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    body {
      background: #f1f1f1 !important;
    }

    .page-wrapper {
      position: relative;
      min-height: 100vh;
      .content-wrapper {
        padding-bottom: 3rem;
      }
    }

    .btn-primary {
      background: #C14545 !important;
      border: 1px solid #C14545 !important;

      &:hover {
        background: #EA4C4C !important;
        border: 1px solid #EA4C4C !important;
      }
    }
  }
</style>
