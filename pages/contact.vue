<template>
  <div class="container">
    <h1>Want to get in touch?</h1>

    <b-form @submit="onSubmit">
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-email"
            label="Email address:"
            label-for="email-form"
          >
            <b-form-input
              id="email-form"
              type="email"
              required
              placeholder="Enter email"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group id="input-group-name" label="First Name:" label-for="first-name-form">
            <b-form-input
              id="first-name-form"
              required
              placeholder="First name"
            />
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group id="input-group-name-2" label="Last Name:" label-for="last-name-form">
            <b-form-input
              id="last-name-form"
              required
              placeholder="Last name"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="12" sm="12">
          <b-form-group id="input-group-message" label="Your Message:" label-for="message-form">
            <b-form-textarea
              id="message-form"
              placeholder="Enter your message..."
              rows="6"
              max-rows="6"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="6" sm="12">
          <input
            id="confirm_email"
            aria-hidden="true"
            name="confirm_email"
            type="hidden"
            autocomplete="off"
            tabindex="-1"
          >
          <b-button type="submit" variant="primary" class="submit-button mb-3">
            Send Message
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>

export default {
  components: {
  },
  async mounted () {
    await this.$recaptcha.init()
  },
  methods: {
    async onSubmit (e) {
      e.preventDefault()

      try {
        const token = await this.$recaptcha.execute('login')
        console.log('ReCaptcha token:', token)
      } catch (error) {
        this.$sentry.captureException(error)
      }
    }
  }
}
</script>

<style lang="scss">
  .submit-button {
    @media only screen and (max-width: 600px) {
      display: block;
      width: 100%;
    };
  }
</style>
