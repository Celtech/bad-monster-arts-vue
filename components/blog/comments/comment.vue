<template>
  <div class="post-comment">
    <div class="avatar">
      <b-avatar />
    </div>

    <div class="post-body">
      <div class="post-title">
        Anonymous <span class="text-muted">• Posted 3 days ago</span>
      </div>
      <div class="post-content">
        This is my comment test post that's starting to get pretty long. I don't
        even actually know what i'm writing anymore. Wow what should I even
        write?
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
          <a href="#">
            Reply
          </a>
        </li>
      </ul>

      <div class="post-reply">
        <b-form-textarea type="text" placeholder="Reply to comment" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentVue',
  props: {
    comment: {
      type: Number,
      default: 1
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
