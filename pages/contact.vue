<template>
  <div class="container">
    <h1>Want to get in touch?</h1>

    <b-form @submit="" @reset="">
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-email"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              type="email"
              required
              placeholder="Enter email"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group id="input-group-name" label="First Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              required
              placeholder="First name"
            />
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group id="input-group-name-2" label="Last Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              required
              placeholder="Last name"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-group id="input-group-message" label="Your Message:" label-for="textarea">
        <b-form-textarea
          id="textarea"
          placeholder="Enter your message..."
          rows="6"
          max-rows="6"
        />
      </b-form-group>

      <b-button type="submit" variant="primary">
        Send Message
      </b-button>
    </b-form>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss">
</style>
