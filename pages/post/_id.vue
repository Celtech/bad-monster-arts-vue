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

        <article-rating />
        <blog-comments
          :comments="posts.data.comments"
          :post-id="id"
          :comment-count="posts.data.comment_count"
        />
      </div>
    </article>
    <article v-else class="loading-container">
      <div class="post-wrapper">
        <div class="placeload">
          <div class="header">
            <div class="header-content">
              <div class="content-shape-large loads" />
              <div class="content-shape-large-sub loads" />
            </div>
          </div>
          <div class="image-placeholder loads" />
          <div class="placeholder-footer">
            <div class="footer-block">
              <div class="content-shape loads" />
              <div class="content-shape loads" />
              <div class="content-shape loads" />
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import articleRating from '../../components/blog/article-rating'
import blogComments from '../../components/blog/comments/blog-comments'

export default {
  name: 'IdVue',
  components: { articleRating, blogComments },
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      posts: null,
      id: parseInt(this.$route.params.id)
    }
  },
  watch: {
    '$store.state.comments.update'() {
      if (this.$store.state.comments.update === true) {
        this.updateData()
      }
    }
  },
  async mounted() {
    await this.updateData()
  },
  methods: {
    fetchPosts() {
      return this.$axios.get('/api/posts/' + this.$route.params.id)
    },
    async updateData() {
      const data = await this.fetchPosts()
      this.posts = data.data
      this.$store.commit('comments/setUpdate', false)
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  padding: 0 !important;
}

.loading-container {
  $background: #f6f7f8;
  $grey-nuance-lighter: #eeeeee;
  $grey-nuance-darker: #dddddd;
  $fade-grey: #e8e8e8;

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .img {
      width: 50px;
      min-width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .header-content {
      width: 100%;
      .content-shape-large {
        height: 36px;
        margin-bottom: 8px;
        width: 50%;
      }
      .content-shape-large-sub {
        height: 12px;
        margin-bottom: 8px;
        width: 30%;
      }
      .content-shape {
        height: 8px;
        margin-bottom: 8px;
        &:first-child {
          width: 80%;
        }
        &:nth-child(2) {
          width: 60%;
        }
      }
    }
  }
  .image-placeholder {
    width: 100%;
    margin-top: 20px;
    height: 250px;
  }
  .placeholder-footer {
    position: relative;
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer-block {
      width: 100%;
      height: 100%;
      min-height: 20px;
      .content-shape {
        height: 8px;
        margin-bottom: 8px;
        &:first-child {
          width: 100%;
        }
        &:nth-child(2) {
          width: 100%;
        }
        &:nth-child(3) {
          width: 64%;
        }
      }
    }
  }

  .loads {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: placeload;
    animation-name: placeload;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    background: $background;
    background: $grey-nuance-lighter;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(8%, $grey-nuance-lighter),
      color-stop(18%, $grey-nuance-darker),
      color-stop(33%, $grey-nuance-lighter)
    );
    background: -webkit-linear-gradient(
      left,
      #eeeeee 8%,
      #dddddd 18%,
      #eeeeee 33%
    );
    background: linear-gradient(
      to right,
      $grey-nuance-lighter 8%,
      $grey-nuance-darker 18%,
      $grey-nuance-lighter 33%
    );
    -webkit-background-size: 800px 104px;
    background-size: 1700px 104px;
    position: relative;
  }

  @-webkit-keyframes placeload {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  @keyframes placeload {
    0% {
      background-position: -868px 0;
    }
    100% {
      background-position: 868px 0;
    }
  }
}
</style>
