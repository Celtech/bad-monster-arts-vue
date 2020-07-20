<template>
  <div class="social-buttons">
    <a
      :href="
        `http://www.facebook.com/sharer.php?u=` +
          `https://badmonsterarts.com/posts/` +
          post +
          `&amp;t=` +
          encodeURI(title)
      "
      target="_blank"
      class="social-button facebook"
    >
      <font-awesome-icon :icon="['fab', 'facebook-f']" /> Share on Facebook
    </a>

    <a
      :href="
        `https://twitter.com/share?url=https://badmonsterarts.com/posts/` +
          post +
          `&amp;text=` +
          title +
          `&amp;hashtags=badmonsterarts`
      "
      target="_blank"
      class="social-button twitter"
    >
      <font-awesome-icon :icon="['fab', 'twitter']" /> Share on Twitter
    </a>

    <a
      :href="
        `http://reddit.com/submit?url=https://badmonsterarts.com/posts/` +
          post +
          `&amp;title=` +
          title
      "
      target="_blank"
      class="social-button reddit"
    >
      <font-awesome-icon :icon="['fab', 'reddit-alien']" /> Share on Reddit
    </a>

    <a
      :href="
        `mailto:?Subject=` +
          title +
          `&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 https://badmonsterarts.com/posts/` +
          post
      "
      target="_blank"
      class="social-button email"
    >
      <font-awesome-icon :icon="['fas', 'envelope']" /> Share by Email
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialButtonsVue',
  props: {
    post: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: 'Check out this news post!'
    }
  }
}
</script>

<style lang="scss" scoped>
.social-buttons {
  .social-button {
    display: inline-block;
    border-radius: 4px;
    padding: 2px 5px;
    color: #ffffff;
    font-size: 10px;
    text-decoration: none;

    svg {
      margin: 0 2px;
    }
  }

  .facebook {
    background: #3b5998;

    &:hover {
      background: #2d4373;
    }
  }

  .twitter {
    background: #55acee;

    &:hover {
      background: #2795e9;
    }
  }

  .email {
    background: #777777;

    &:hover {
      background: #5e5e5e;
    }
  }

  .reddit {
    background: #ff5700;

    &:hover {
      background: #ff4500;
    }
  }
}
</style>
