<template>
  <div class="page-wrapper">
    <div class="content-wrapper">
      <navbar />
      <main class="container">
        <nuxt />
      </main>
      <Footer />

      <Cookie />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/navbar.vue'
import Footer from '~/components/footer.vue'
import Cookie from '~/components/cookie.vue'

export default {
  components: {
    Navbar,
    Footer,
    Cookie
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif !important;
  font-size: 16px;
  background: #f1f1f1 !important;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  body {
    background: #f1f1f1 !important;

    .page-item .page-link {
      color: #31355e;
      background-color: #ffffff !important;
      border-color: #dee2e6 !important;
    }

    .page-item.active .page-link {
      color: #ffffff;
      background-color: #31355e !important;
      border-color: #31355e !important;
    }

    .navbar-light .navbar-nav .nav-link {
      color: #31355e;

      &:hover {
        color: #689bd2 !important;
        text-decoration: none;
      }
    }

    main {
      margin-bottom: 12rem;

      @media (max-width: 768px) {
        margin-bottom: 18rem;
      }

      a {
        color: #689bd2;
      }

      article {
        background: #ffffff;
        margin-bottom: 1rem;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.35);
        border-top: 5px solid #31355e;
        padding: 20px 20px 10px 20px;

        img {
          width: 100%;
          height: auto;
        }

        .post-wrapper {
          padding: 20px;

          h1 {
            margin: auto;
            color: #31355e;
          }

          h2 {
            margin: auto;
            color: #31355e;
          }

          small {
            color: #6c757d !important;
            display: block;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }

  .page-wrapper {
    position: relative;
    min-height: 100vh;
    .content-wrapper {
      padding-bottom: 3rem;
    }
  }

  .btn-primary {
    background: #31355e !important;
    border: 1px solid #31355e !important;

    &:hover {
      background: darken(#31355e, 10%) !important;
      border: 1px solid darken(#31355e, 10%) !important;
    }
  }
}
</style>
