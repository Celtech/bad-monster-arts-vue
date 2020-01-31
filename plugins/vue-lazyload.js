import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import error from '../assets/placeholder.svg'
import loading from '../assets/loading.jpeg'

Vue.use(VueLazyload, {
  preLoad: 1,
  error,
  loading,
  attempt: 1
})
