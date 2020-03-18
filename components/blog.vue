<template>
  <div>
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

export default {
  name: 'BlogVue',
  components: {},
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
</style>
