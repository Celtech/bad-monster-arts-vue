<template>
  <div>
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

    <div v-else>
      <article>
        <!--        <img v-if="post.title_image" :src="post.title_image" alt="" />-->
        <div class="post-wrapper">
          <h2>
            Welcome to my little website!
          </h2>
          <small>
            Tim Hinz | Fri, July 17th | News & Announcements
          </small>

          <p>
            Hey Guys,<br /><br />Welcome to my website. This website is built
            fully on top of
            <a href="https://nuxtjs.org/" target="_blank">Nuxt</a> with Digital
            Ocean hosting it(Docker runs node and Nginx acts as a reverse proxy
            to point it at port 80 with HTTPS). A lot has changed since the
            initial development such as removing our CDN but we're not trying to
            reach speed mile stones here! <br /><br />
            That said this website was built to mimick an indie start-ups
            company page. You'll find lots of neat things here such as a mailing
            list sign up powered by mail chimp(consumed with axios). We also
            have Sentry monitoring the site 24/7 to report back all errors and
            bugs. Everything is fully server side rendered as well!<br /><br />
            This website is fully open sourced and you can check it out
            <a
              href="https://github.com/Celtech/bad-monster-arts-vue"
              target="_blank"
            >
              here!
            </a>
          </p>

          <social-buttons :post="0" title="A word from the developer" />
        </div>
      </article>
    </div>
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
