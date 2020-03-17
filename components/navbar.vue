<template>
  <div class="nav-wrapper">
    <div class="container">
      <b-navbar
        toggleable="lg"
        type="light"
        variant="light"
        class="navbar-light"
      >
        <b-navbar-brand>
          <nuxt-link to="/">
            <div class="logo-wrapper">
              <svg viewBox="0 0 679 200">
                <image
                  width="100%"
                  height="100%"
                  xlink:href="https://cdn.badmonsterarts.com/main_logo.svg"
                  src="https://cdn.badmonsterarts.com/main_logo.png"
                />
              </svg>
            </div>
          </nuxt-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <client-only>
              <b-navbar-nav>
                <b-nav-item>
                  <nuxt-link to="/about">
                    About Us
                  </nuxt-link>
                </b-nav-item>
                <b-nav-item-dropdown text="Our Games" right>
                  <b-dropdown-item href="#">
                    None
                  </b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item>
                  <nuxt-link to="/careers">
                    Careers
                  </nuxt-link>
                </b-nav-item>
                <b-nav-item>
                  <nuxt-link to="/contact">
                    Contact
                  </nuxt-link>
                </b-nav-item>
              </b-navbar-nav>
            </client-only>
            <b-nav-item
              href="https://twitter.com/badmonsterarts"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" />
              <span class="social-title">Twitter</span>
            </b-nav-item>
            <b-nav-item
              href="https://www.instagram.com/badmonsterarts/"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
              <span class="social-title">Instagram</span>
            </b-nav-item>
            <b-nav-item
              href="https://twitter.com/badmonsterarts"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'youtube']" />
              <span class="social-title">Youtube</span>
            </b-nav-item>
            <b-nav-item
              href="https://twitter.com/badmonsterarts"
              target="_blank"
            >
              <font-awesome-icon v-if="1" :icon="['fab', 'facebook-square']" />
              <span class="social-title">Facebook</span>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-wrapper {
  background: #ffffff !important;
  font-size: 18px !important;
  margin-bottom: 1rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);

  .navbar-light {
    background: #ffffff !important;
    color: #31355e !important;
    padding: 0 0;
    font-weight: bold;

    .logo-wrapper {
      width: 256px;
      height: 75px;
      overflow: hidden;
    }

    .navbar-nav {
      a {
        color: #31355e;

        .social-title {
          display: none;

          @media (max-width: 768px) {
            display: inline-block;
          }
        }

        .svg-inline--fa {
          display: none;

          @media (min-width: 768px) {
            display: inline-block;
          }
        }

        &:hover {
          color: #689bd2;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
