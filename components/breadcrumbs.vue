<template>
  <div class="breadcrumb-wrapper">
    <b-breadcrumb class="container no-bg">
      <client-only>
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
      </client-only>
    </b-breadcrumb>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    crumbs (): object[] {
      const crumbs: object[] = [];
      this.$route.matched.forEach((item) => {
        if (item.name !== 'index') {
          if(typeof item.name !== 'undefined') {
            crumbs.push(item)
          }
        }
      });

      return crumbs
    }
  }
});
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
