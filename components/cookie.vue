<template>
  <div :class="showCookie ? `cookie-consent` : `cookie-consent cookie-hidden`">
    <b-row>
      <b-col lg="10" md="12">
        <p>
          This website uses cookies to ensure you get the best experience possible on our website.
          <nuxt-link to="/privacy-policy#cookies">
            Cookie Policy
          </nuxt-link>
        </p>
      </b-col>

      <b-col lg="2" md="12">
        <b-button @click.prevent="accept" variant="primary">
          Accept
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'CookieVue',
  data () {
    return {
      showCookie: false
    }
  },
  mounted () {
    if (localStorage.getItem('cookieSeen') !== 'shown') {
      this.showCookie = true
    }
  },
  methods: {
    accept () {
      if (localStorage.getItem('cookieSeen') !== 'shown') {
        localStorage.setItem('cookieSeen', 'shown')
        this.showCookie = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .cookie-hidden {
    display: none !important;
  }

  .cookie-consent {
    position: fixed;
    width: 100%;
    margin: 0;
    padding: 20px 20px;
    bottom: 0;
    left: 0;
    background: #ffffff;
    border-top: 5px solid #31355e;
    text-align: right;

    [class*=col] {
      vertical-align: middle;
      @media (max-width: 768px) {
        margin-top: 20px;
      }

      p {
        margin: 5px 0 0 0;
        padding: 0;
        text-align: left;

        a {
          color: #689bd2;
        }
      }

      button {
        margin: 0;
      }
    }
  }
</style>
