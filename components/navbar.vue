<template>
  <div class="nav-wrapper">
    <div class="container">
      <b-navbar toggleable="lg" type="light" variant="light" class="navbar-light">
        <b-navbar-brand>
          <nuxt-link to="/">
            <div class="avatar-wrapper">
              <div class="avatar" />
            </div>
          </nuxt-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item>
                <nuxt-link to="/">
                  About Us
                </nuxt-link>
              </b-nav-item>
              <b-nav-item-dropdown text="Our Games" right>
                <b-dropdown-item href="#">
                  None
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item>
                <nuxt-link to="/">
                  Careers
                </nuxt-link>
              </b-nav-item>
              <b-nav-item>
                <nuxt-link to="/contact">
                  Contact
                </nuxt-link>
              </b-nav-item>
            </b-navbar-nav>

            <b-nav-item href="https://twitter.com/badmonsterarts" target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter']" />
              <span class="social-title">Twitter</span>
            </b-nav-item>
            <b-nav-item href="https://twitter.com/badmonsterarts" target="_blank">
              <font-awesome-icon :icon="['fab', 'instagram']" />
              <span class="social-title">Instagram</span>
            </b-nav-item>
            <b-nav-item href="https://twitter.com/badmonsterarts" target="_blank">
              <font-awesome-icon :icon="['fab', 'youtube']" />
              <span class="social-title">Youtube</span>
            </b-nav-item>
            <b-nav-item href="https://twitter.com/badmonsterarts" target="_blank">
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

      .avatar-wrapper {
          width: 165px;
          height: 75px;
          overflow: hidden;

          .avatar {
            background: url("~assets/logo.png") no-repeat center center;
            background-size: 100% 100%;
            width: 100%;
            height: 100%;
          }
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
