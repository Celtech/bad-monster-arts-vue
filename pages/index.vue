<template>
  <div>
    <b-row>
      <b-col>
        <hooper :auto-play="true" :infinite-scroll="true" :play-speed="5000" >
          <slide>
            slide 1
          </slide>
          <slide>
            slide 2
          </slide>
        </hooper>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="9">
        <article>
          <img src="https://ksr-ugc.imgix.net/assets/024/090/414/6ef2c21f9bdcecc9f67b309840cb7c7d_original.jpg?ixlib=rb-1.1.0&w=639&fit=max&v=1550135691&auto=format&gif-q=50&q=92&s=f47daf29b24524813d41b24e51b2f6e5" alt="">
          <div class="post-wrapper">
            <h2>This is my post</h2>
            <small>Ari | 13 December, 2019 | Hollow Knight, Silksong</small>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#">Keep Reading</a>
          </div>
        </article>

        <article>
          <img src="https://teamcherry.com.au/wp-content/uploads/grimm_header-1.jpg" alt="">
          <div class="post-wrapper">
            <h2>This is my post</h2>
            <small>Ari | 13 December, 2019 | Hollow Knight, Silksong</small>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#">Keep Reading</a>
          </div>
        </article>

        <article>
          <img src="https://teamcherry.com.au/wp-content/uploads/indiebox_large.jpg" alt="">
          <div class="post-wrapper">
            <h2>This is my post</h2>
            <small>Ari | 13 December, 2019 | Hollow Knight, Silksong</small>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#">Keep Reading</a>
          </div>
        </article>
      </b-col>
      <b-col lg="3">
        <article>
          <img src="https://teamcherry.com.au/wp-content/uploads/indiebox_large.jpg" alt="">
          <div class="post-wrapper">
            <h2>This is my post</h2>
            <small>Ari | 13 December, 2019 | Hollow Knight, Silksong</small>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididut amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#">Keep Reading</a>
          </div>
        </article>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide
  }
}
</script>

<style lang="scss" scoped>
  article {
    padding: 0 !important;
  }

  .hooper {
    border-radius: 0;
    background: #689bd2;
    margin-bottom: 1rem;
    min-height: 300px;

    &:focus {
      outline: none;
    }
  }
</style>
