<template>
  <footer>
    <div class="news-letter">
      <b-container class="text-center">
        <h2 class="p-0 m-0">
          Join our newsletter
        </h2>

        <small class="mb-3">
          Sign up to get the latest updates on our projects.
        </small>

        <b-form inline class="text-center mt-2" @submit="onSubmit">
          <div class="form-wrapper m-auto">
            <b-input
              id="name"
              v-model="name"
              type="text"
              name="name"
              placeholder="Your Name"
              class="mr-2"
              required
            />
            <label class="sr-only" for="name">Full Name</label>

            <b-input
              id="email"
              v-model="email"
              type="email"
              name="email"
              placeholder="email@example.com"
              class="mr-2"
              required
            />
            <label class="sr-only" for="email">E-mail Address</label>
            <b-button variant="primary" type="submit">
              Sign up
            </b-button>
          </div>
        </b-form>
      </b-container>
    </div>

    <b-container>
      <b-row>
        <b-col md="12" lg="7">
          <nav>
            <ul>
              <li>
                <nuxt-link to="/privacy-policy">
                  Privacy Policy
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/terms-of-service">
                  Terms of Service
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/media">
                  Press Kit
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact">
                  Contact Us
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </b-col>

        <b-col class="copyright" md="12" lg="5">
          Copyright &copy; 2020, Bad Monster Arts Ltd.
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()

      const data = {
        email_address: this.email,
        status: 'subscribed',
        merge_fields: {
          FNAME: this.name
            .split(' ')
            .slice(0, -1)
            .join(' '),
          LNAME: this.name
            .split(' ')
            .slice(-1)
            .join(' ')
        }
      }
      await this.$axios
        .$post('/mail_chimp/', data, {
          auth: {
            username: 'BMA',
            password: process.env.MAILCHIMP_API_KEY
          }
        })
        .then(response => {
          this.$bvToast.toast(
            `Thank you for subscribing to our mailing list!`,
            {
              title: 'Success',
              autoHideDelay: 5000
            }
          )

          this.name = null
          this.email = null
        })
        .catch(error => {
          if (error.response) {
            this.$sentry.captureException(error)

            if (error.response.data.title === 'Member Exists') {
              this.$bvToast.toast(
                `You're already subscribed to our mailing list!`,
                {
                  title: 'Error',
                  variant: 'danger',
                  autoHideDelay: 5000
                }
              )
            } else {
              this.$bvToast.toast(`An unknown error has occurred!`, {
                title: 'Error',
                variant: 'danger',
                autoHideDelay: 5000
              })
            }

            this.name = null
            this.email = null
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #31355e;
  padding: 0 0 20px 0;
  color: #ffffff;

  .news-letter {
    background: #689bd2;
    padding: 20px 0;
    margin-bottom: 20px;

    form {
      .form-wrapper {
        @media (max-width: 768px) {
          width: 100%;

          input {
            width: 100%;
            margin-bottom: 5px;
          }

          button {
            width: 100%;
          }
        }
      }
    }
  }

  .copyright {
    text-align: right;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  nav {
    text-align: left;

    @media (max-width: 768px) {
      text-align: center;
    }

    @media (max-width: 450px) {
      font-size: 12px;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        display: inline-block;
        padding: 0;
        margin: 0;

        a {
          color: #ffffff;

          &:hover {
            text-decoration: underline;
          }
        }

        &:not(:last-child)::after {
          content: '|';
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
