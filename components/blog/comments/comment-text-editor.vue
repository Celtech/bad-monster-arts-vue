<template>
  <div class="post-reply">
    <div v-if="isPosting" class="loading">
      <font-awesome-icon icon="spinner" pulse />
    </div>

    <b-form-textarea
      v-model="commentContent"
      :placeholder="placeholder"
      rows="3"
      :class="
        isEditing || commentContent.length > 0 ? `editor` : `editor-textbox`
      "
      no-resize
      @focus="onFocus"
      @blur="onBlur"
    />
    <div
      v-if="isEditing || commentContent.length > 0"
      class="post-reply-toolbar"
    >
      <b-button-group size="sm">
        <b-button variant="primary">
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </b-button>
        <b-button variant="primary">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </b-button>
        <b-button variant="primary">
          <font-awesome-icon :icon="['fas', 'google']" />
        </b-button>
        <b-button variant="primary">
          <font-awesome-icon :icon="['fas', 'strikethrough']" />
        </b-button>
      </b-button-group>

      <b-button
        variant="primary"
        size="sm"
        class="float-right"
        @click.prevent="onSubmit"
      >
        Post Comment
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentTextEditorVue',
  props: {
    comment: {
      type: Object,
      default: null
    },
    placeholder: {
      type: String,
      default: 'Reply to comment'
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
  methods: {
    onSubmit() {
      this.isPosting = true
      this.$axios
        .post('/api/comments', {
          body: this.commentContent,
          parent_id: this.comment ? this.comment.id : null,
          post_id: this.comment ? this.comment.post : this.postId
        })
        .then(res => {
          this.isEditing = false
          this.initialClick = false
          this.commentContent = ''
          this.$store.commit('comments/setComment', null)
          this.$store.commit('comments/setUpdate', true)
          this.isPosting = false
        })
    },
    onFocus() {
      this.initialClick = true
      this.isEditing = true
    },
    onBlur() {
      this.isEditing = false
      if (this.initialClick && this.commentContent.length === 0) {
        this.$store.commit('comments/setComment', null)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.post-reply {
  box-sizing: border-box;
  position: relative;
  width: 100%;

  .loading {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(1, 1, 1, 0.3);

    svg {
      position: absolute;
      left: calc(50% - 11px);
      top: calc(50% - 9px);
    }
  }

  textarea {
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border: 1px solid #ced4da;
    resize: none;
  }

  .editor {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .editor-textbox {
    max-height: 40px;
  }

  .post-reply-toolbar {
    width: 100%;
    padding: 5px;
    background: #ced4da;
    margin-top: -1px;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
}
</style>
