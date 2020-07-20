<template>
  <div v-if="posts">
    <article v-for="(post, index) in posts.data" :key="index">
      <img v-if="post.title_image" :src="post.title_image" alt="" />
      <div class="post-wrapper">
        <h2>
          {{ post.title }}
        </h2>
        <small>
          {{ post.author }} | {{ post.created_at }} |
          {{ post.categories }}
        </small>

        <div v-html="post.body" />
        <nuxt-link :to="`/post/` + post.id">
          Keep Reading
        </nuxt-link>

        <social-buttons :post="post.id" :title="post.title" />
      </div>
    </article>

    <b-pagination-nav
      v-if="posts.length !== 0"
      :link-gen="linkGen"
      :number-of-pages="posts.pages"
      use-router
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import socialButtons from './social-buttons'

export default {
  name: 'BlogVue',
  components: { socialButtons },
  computed: {
    ...mapState({
      posts: state => state.blog.posts
    })
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-icon {
  font-size: 60px;
  margin: auto;
  display: block;
}
article {
  padding: 0 !important;
}

.social-button {
  padding: 5px 10px;
  background: #689bd2;
}
</style>
