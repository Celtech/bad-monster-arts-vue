<template>
  <article>
    <h1>Want to get in touch?</h1>

    <b-form @submit="onSubmit">
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-email"
            label="Email address:"
            label-for="email-form"
            description="We'll never share your email with anyone else."
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
          <b-form-group
            id="input-group-name"
            label="Your Name:"
            label-for="name-form"
          >
            <b-form-input
              id="name-form"
              required
              placeholder="Your name"
              name="full_name"
            />
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            id="input-group-name-2"
            label="Contact Reason:"
            label-for="last-name-form"
          >
            <b-form-select
              id="contact-reason-form"
              v-model="selected"
              :options="options"
              name="reason"
              required
            />
            <label class="sr-only" for="contact-reason-form">
              Contact Reason
            </label>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="12" sm="12">
          <b-form-group
            id="input-group-message"
            label="Your Message:"
            label-for="message-form"
          >
            <b-form-textarea
              id="message-form"
              name="message"
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
          />
          <b-button type="submit" variant="primary" class="submit-button mb-3">
            Send Message
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </article>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selected: null,
      options: [
        { value: 'null', text: 'Please select an option' },
        { value: '1', text: 'Bug or issue with one of our games' },
        { value: '2', text: 'Bug or issue with our website' },
        { value: '3', text: 'Pricing/Sales' },
        { value: '4', text: 'Billing' },
        { value: '5', text: 'Marketing/PR' },
        { value: '6', text: 'Partnerships' },
        { value: '7', text: 'Employment' }
      ]
    }
  },
  async mounted() {
    await this.$recaptcha.init()
  },
  methods: {
    async onSubmit(e) {
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
  }
}
</style>
