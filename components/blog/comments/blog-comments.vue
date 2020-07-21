<template>
  <div class="blog-comments">
    <b-row class="header-row" no-gutters>
      <b-col lg="4" md="4" sm="12">
        <strong>2 Comment(s)</strong>
      </b-col>
      <b-col lg="8" md="8" sm="12">
        <social-buttons class="float-right" />
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <ul>
          <comment :comment="1" />
          <comment :comment="1" />
          <comment :comment="1" />
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import socialButtons from '../../social-buttons'
import comment from './comment'
export default {
  name: 'BlogCommentsVue',
  components: { socialButtons, comment }
}
</script>

<style lang="scss" scoped>
.blog-comments {
  margin-top: 1rem;
  padding: 0;

  .header-row {
    padding-bottom: 5px;
    border-bottom: 1px solid #ced4da;
    vertical-align: text-bottom;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      display: flex;
    }
  }
}
</style>
