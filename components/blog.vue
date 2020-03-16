<template>
  <div>
    <article v-for="(post, index) in posts" :key="index">
      <img
        src="https://ksr-ugc.imgix.net/assets/024/090/414/6ef2c21f9bdcecc9f67b309840cb7c7d_original.jpg?ixlib=rb-1.1.0&w=639&fit=max&v=1550135691&auto=format&gif-q=50&q=92&s=f47daf29b24524813d41b24e51b2f6e5"
        alt=""
      />
      <div class="post-wrapper">
        <h2>{{ post.title }}</h2>
        <small>
          {{ post.name }} | {{ new Date(post.publishedAt).toDateString() }} |
          {{ categoriesToString(post.categories) }}
        </small>

        <p>
          <BlockContent :blocks="post.body" />
        </p>
        <a href="#">Keep Reading</a>
      </div>
    </article>
  </div>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'

export default {
  name: 'BlogVue',
  components: {
    BlockContent
  },
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    const query =
      '*[_type == "post" && publishedAt < now()]|order(publishedAt desc){title, "name": author->name, "categories": categories[]->title, body, publishedAt}[0...5]'
    this.posts = await this.fetchPosts(query)
  },
  methods: {
    fetchPosts(query) {
      return this.$sanity.fetch(query)
    },
    categoriesToString(categories) {
      let categoriesString = ''

      categories.forEach((item, index) => {
        categoriesString += item

        if (categories.length !== index + 1) {
          categoriesString += ', '
        }
      })

      return categoriesString
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  padding: 0 !important;
}
</style>
