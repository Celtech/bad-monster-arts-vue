<template>
  <div class="breadcrumb-wrapper">
    <b-breadcrumb class="container no-bg">
      <b-breadcrumb-item>
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </b-breadcrumb-item>

      <b-breadcrumb-item v-for="(item, i) in crumbs" :key="i">
        <nuxt-link :to="item.path">
          {{ item.name.trim() }}
        </nuxt-link>
      </b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>

<script>

export default {
  computed: {
    crumbs () {
      const crumbs = []
      this.$route.matched.forEach((item) => {
        if (item.name !== 'index') {
          crumbs.push(item)
        }
      })

      return crumbs
    }
  }
}
</script>

<style lang="scss" scoped>
  .breadcrumb-wrapper {
    background: #393e46;

    a{
      color: #EEEEEE;
      &:hover {
        color: #2BCED6;
        text-decoration: none;
      }
    }

    .no-bg {
      background: none !important;
      text-transform: capitalize;
    }
  }
</style>
