<template>
  <div>
    <article v-if="posts">
      <img
        v-if="posts.data.title_image.length > 0"
        :src="posts.data.title_image"
        alt=""
      />
      <div class="post-wrapper">
        <h1>{{ posts.data.title }}</h1>
        <small>
          {{ posts.data.author }} |
          {{ new Date(posts.data.created_at).toLocaleString() }} | cat
        </small>

        <div v-html="posts.data.body" />

        <social-buttons :post="posts.data.id" :title="posts.data.title" />
      </div>
    </article>
  </div>
</template>

<script>
import socialButtons from '../../components/social-buttons'

export default {
  name: 'IdVue',
  components: { socialButtons },
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      posts: null
    }
  },
  async mounted() {
    const data = await this.fetchPosts()
    this.posts = data.data
  },
  methods: {
    fetchPosts() {
      return this.$axios.get('/api/posts/' + this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  padding: 0 !important;
}
</style>
