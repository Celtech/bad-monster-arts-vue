<template>
  <div class="nav-wrapper">
    <div class="container">
      <b-navbar toggleable="lg" type="dark" variant="dark" class="navbar-dark">
        <b-navbar-brand href="#">
          NavBar
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">
              <nuxt-link to="/">
                Home
              </nuxt-link>
            </b-nav-item>
            <b-nav-item href="#">
              <nuxt-link to="/contact">
                Projects
              </nuxt-link>
            </b-nav-item>
            <b-nav-item href="#">
              <nuxt-link to="/contact">
                Contact
              </nuxt-link>
            </b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
              <nuxt-link to="/contact">
                Github
              </nuxt-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .nav-wrapper {
    background: #222831 !important;

    .navbar-dark {
      background: #222831 !important;
      padding: 20px 0;

      a {
        color: #EEEEEE;

        &:hover {
          color: #2BCED6;
          text-decoration: none;
        }
      }
    }
  }
</style>
