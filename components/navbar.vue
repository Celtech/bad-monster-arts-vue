<template>
  <div class="nav-wrapper">
    <div class="container">
      <b-navbar toggleable="lg" type="dark" variant="dark" class="navbar-dark">
        <b-navbar-brand>
          <div class="avatar-wrapper">
            <div class="avatar" />
          </div>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <client-only>
            <b-navbar-nav>
              <b-nav-item>
                <nuxt-link to="/">
                  Home
                </nuxt-link>
              </b-nav-item>
              <b-nav-item>
                <nuxt-link to="/projects">
                  My Portfolio
                </nuxt-link>
              </b-nav-item>
              <b-nav-item>
                <nuxt-link to="/contact">
                  Contact
                </nuxt-link>
              </b-nav-item>
            </b-navbar-nav>
          </client-only>

          <b-navbar-nav class="ml-auto">
            <b-nav-item href="https://www.linkedin.com/in/timhinz16/" target="_blank">
              <client-only>
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </client-only>
            </b-nav-item>
            <b-nav-item href="https://stackoverflow.com/users/6751133/lulceltech" target="_blank">
              <client-only>
                <font-awesome-icon :icon="['fab', 'stack-overflow']" />
              </client-only>
            </b-nav-item>
            <b-nav-item href="https://github.com/celtech" target="_blank">
              <client-only>
                <font-awesome-icon :icon="['fab', 'github']" />
              </client-only>
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
    font-size: 20px !important;

    .navbar-dark {
      background: #222831 !important;
      padding: 20px 0;

      .avatar-wrapper {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        overflow: hidden;

        .avatar {
          background: url("http://timhinz-131fb.kxcdn.com/avatar.jpg?width=75&height=75&quality=100") no-repeat center center;
          background-size: 75px 75px;
          width: 100%;
          height: 100%;
        }
      }

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
