<template>
  <div>
    <b-row>
      <b-col>
        <b-carousel
          id="carousel"
          controls
          indicators
          fade
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"
          />

          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=58"
          />
        </b-carousel>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="9">
        <blog />
      </b-col>
      <b-col lg="3">
        <article>
          <img
            src="https://teamcherry.com.au/wp-content/uploads/indiebox_large.jpg"
            alt=""
            loading="lazy"
          />
          <div class="post-wrapper">
            <h2>This is my post</h2>
            <small>Ari | 13 December, 2019 | Hollow Knight, Silksong</small>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididut amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididut amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididut amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididut amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididut amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#">Keep Reading</a>
          </div>
        </article>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import blog from '../components/blog'

export default {
  components: {
    blog
  }
}
</script>

<style lang="scss" scoped>
#carousel {
  border-radius: 0;
  background: #689bd2;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px #333;

  &:focus {
    outline: none;
  }
}
</style>
