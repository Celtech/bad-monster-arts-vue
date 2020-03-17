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
      <b-col lg="9" order-lg="1" order-md="1" order-sm="2" order="2">
        <blog />
      </b-col>
      <b-col lg="3" order-lg="2" order-md="2" order-sm="1" order="1">
        <article>
          <h5>Search Posts</h5>
          <b-input-group>
            <template v-slot:prepend>
              <b-button variant="primary">
                <font-awesome-icon :icon="['fas', 'search']" />
              </b-button>
            </template>
            <b-form-input type="search" placeholder="Search" />
          </b-input-group>
        </article>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6">
        <b-pagination-nav
          class="custom-pagination"
          :link-gen="linkGen"
          :number-of-pages="10"
          use-router
        />
      </b-col>
      <b-col lg="3" style="text-align: right">
        <label>Per Page</label>
        <b-form-select
          style="width: 100px; float: right; margin-left: 5px;"
          size="sm"
        />
      </b-col>
      <b-col lg="3" />
    </b-row>
  </div>
</template>

<script>
import blog from '../components/blog'

export default {
  components: {
    blog
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    }
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
