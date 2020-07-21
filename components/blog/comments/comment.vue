<template>
  <div class="post-comment">
    <div class="avatar">
      <b-avatar />
    </div>

    <div class="post-body">
      <div class="post-title">
        {{ comment.author ? comment.author.name : 'Anonymous' }}
        <span class="text-muted">
          • Posted
          {{ timeSince(new Date(comment.created_at)) }}
          ago
        </span>
      </div>
      <div class="post-content">
        {{ comment.body }}
      </div>
      <ul class="post-actions">
        <li>
          <a href="#">
            <font-awesome-icon :icon="['fas', 'caret-up']" /> Up vote
          </a>
        </li>
        <li>
          <a href="#">
            <font-awesome-icon :icon="['fas', 'caret-down']" /> Down vote
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="setOpenComment(comment.id)">
            Reply
          </a>
        </li>
      </ul>

      <comment-text-editor
        v-if="openComment === comment.id"
        :comment="comment"
      />

      <comment
        v-for="(subComment, id) in comment.comments"
        :key="id"
        :comment="subComment"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import commentTextEditor from './comment-text-editor'

export default {
  name: 'Comment',
  components: {
    commentTextEditor
  },
  props: {
    comment: {
      type: Object,
      default: null
    },
    postId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isEditing: false,
      initialClick: false,
      commentContent: '',
      post: this.postId,
      isPosting: false
    }
  },
  computed: {
    ...mapState({
      openComment: state => state.comments.openComment
    })
  },
  methods: {
    setOpenComment(id) {
      this.$store.commit('comments/setComment', id)
    },
    timeSince(date) {
      const seconds = Math.floor((new Date() - date) / 1000)
      let interval = Math.floor(seconds / 31536000)

      if (interval > 0) {
        return interval + (interval === 1 ? ' year' : ' years')
      }
      interval = Math.floor(seconds / 2592000)
      if (interval > 0) {
        return interval + (interval === 1 ? ' month' : ' months')
      }
      interval = Math.floor(seconds / 86400)
      if (interval > 0) {
        return interval + (interval === 1 ? ' day' : ' days')
      }
      interval = Math.floor(seconds / 3600)
      if (interval > 0) {
        return interval + (interval === 1 ? ' hour' : ' hours')
      }
      interval = Math.floor(seconds / 60)
      if (interval > 0) {
        return interval + (interval === 1 ? ' minute' : ' minutes')
      }
      return Math.floor(seconds) + (interval === 1 ? ' second' : ' seconds')
    }
  }
}
</script>

<style lang="scss" scoped>
.post-comment {
  display: flex;
  margin-top: 1rem;

  .avatar {
    vertical-align: top;
    margin-right: 1rem;
  }

  .post-body {
    flex: 1;
    .post-title {
      font-weight: bold;
      .text-muted {
        font-weight: normal;
      }
    }

    .post-actions {
      margin: 0;
      padding: 0;
      font-size: 10px;
      color: #6c757d;

      li {
        list-style: none;
        display: inline-block;

        &:not(:last-child):after {
          content: '|';
          margin-left: 2px;
        }
      }
    }
  }
}
</style>
