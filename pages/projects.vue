<template>
  <div class="container">
    <b-row>
      <b-col>
        <h1>My Projects and Contributions</h1>
      </b-col>
    </b-row>

    <b-row>
      <b-col v-for="project in projectList" cols="6">
        <div class="web-browser">
          <div class="ribbon">
            <span class="dot" style="background:#ED594A;" />
            <span class="dot" style="background:#FDD800;" />
            <span class="dot" style="background:#5AC05A;" />

            <div class="address-bar">
              {{ project.url }}
            </div>

            <font-awesome-icon :icon="['fas', 'bars']" class="ribbon-button" />
          </div>

          <div class="browser-window">
            <img :src="project.website" alt="website.com">
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {

  components: {
  },
  computed: {
    ...mapState({
      projectList: state => state.projects.data
    })
  },
  async mounted () {
    const data = await this.$axios.$get('http://127.0.0.1:8000/api/projects?page=1')
    this.$store.commit('projects/load', data)
  }
}
</script>

<style lang="scss">
  [attribute^="col-"] {
    margin-bottom: 10px !important;
  }

  .web-browser {
    width: 100%;
    background: #f1f1f1;
    padding: 5px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15),
    0 2px 2px rgba(0,0,0,0.15),
    0 4px 4px rgba(0,0,0,0.15),
    0 8px 8px rgba(0,0,0,0.15);

    .ribbon {
      padding: 8px 8px 8px 5px;
      display: flex;

      .dot {
        margin: 4px 5px 0 0;
        height: 12px;
        width: 12px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-flex;
      }

      .address-bar {
        display: inline-flex;
        background: #FFFFFF;
        width: 200px;
        height: 100%;
        border-radius: 15px;
        padding-left: 10px;
        margin: -3px 10px 0 5px;
        flex-grow: 100;
      }

      .ribbon-button {
        color: #000;
        float: right;
        display: inline-flex;
      }
    }

    .browser-window {
      background: white;
      width: 100%;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
</style>
