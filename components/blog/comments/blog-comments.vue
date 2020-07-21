<template>
  <div class="blog-comments">
    <b-row class="header-row" no-gutters>
      <b-col lg="4" md="4" sm="12">
        <strong>{{ commentCount }} Comment(s)</strong>
      </b-col>
      <b-col lg="8" md="8" sm="12">
        <social-buttons class="float-right" />
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <ul>
          <li class="pt-3">
            <div class="avatar">
              <b-avatar class="mr-3 align-middle" />
            </div>
            <comment-text-editor-vue placeholder="Join the discussion" />
          </li>
          <comment
            v-for="(comment, id) in comments"
            :key="id"
            :comment="comment"
            :post-id="postId"
          />
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import socialButtons from '../../social-buttons'
import comment from './comment'
import CommentTextEditorVue from './comment-text-editor'
export default {
  name: 'BlogCommentsVue',
  components: { CommentTextEditorVue, socialButtons, comment },
  props: {
    comments: {
      type: Array,
      default: null
    },
    postId: {
      type: Number,
      default: 0
    },
    commentCount: {
      type: Number,
      default: 0
    }
  }
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
