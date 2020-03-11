<template>
  <article>
    <h1>Media & Press Kit</h1>

    <h4>Company Facts</h4>
    <ul>
      <li>Company Name: Bad Monster Arts</li>
      <li>Legal Name: Bad Monster Arts Ltd.</li>
      <li>Founded: March 1st, 2020</li>
      <li>Founded By: Tim Hinz</li>
    </ul>

    <h4>Company Colors</h4>
    <ul>
      <li>Primary: <span style="background: #31355e; color: #ffffff; padding: 3px;">#31355E</span></li>
      <li>Secondary: <span style="background: #689bd2; color: #ffffff; padding: 3px;">#689BD2</span></li>
    </ul>

    <h4>Our Logos</h4>
    <img src="~assets/logo.png" alt="Main Logo" style="height: 150px; width: auto; max-width: 100%;">
    <img src="~assets/logo_v2.png" alt="Alt Logo" style="height: 200px; width: auto">
    <img src="~assets/logo_v3.png" alt="Alt No Text Logo" style="height: 200px; width: auto">

    <h4>Please Don’t</h4>
    <ul>
      <li>Alter these files in any way.</li>
      <li>Display these graphics in a way that implies a relationship, affiliation, or endorsement by Bad Monster Arts of your product, service, or business.</li>
      <li>Use these graphics as part of your own product, business, or service’s name.</li>
      <li>Combine these graphics with any other graphics without written consent from Bad Monster Arts.</li>
    </ul>

    <h4>Download</h4>
    <a href="Press Kit.zip" class="btn btn-primary btn-download"><font-awesome-icon v-if="1" :icon="['fas', 'download']" /> Press Kit.zip - 253 KB</a>
  </article>
</template>

<script>
export default {
  name: 'MediaVue'
}
</script>

<style lang="scss" scoped>
  .btn-download {
    @media (max-width: 768px) {
      display: block;
    }
  }
</style>
