<template>
  <div class="container">
    <b-row>
      <b-col>
        <h1>My Projects and Contributions</h1>
      </b-col>
    </b-row>

    <b-row>
      <b-col v-for="(project, index) in projectList" :key="index" sm="12" md="6" class="mb-3">
        <div class="web-browser">
          <div class="ribbon">
            <span class="dot" style="background:#ED594A;" />
            <span class="dot" style="background:#FDD800;" />
            <span class="dot" style="background:#5AC05A;" />

            <div class="address-bar">
              <a :href="project.url" target="_blank" rel="noopener">
                {{ project.url }}
              </a>
            </div>

            <font-awesome-icon :icon="['fas', 'bars']" class="ribbon-button" />
          </div>

          <div class="browser-window">
            <img v-lazy="project.website" :alt="project.url">
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
    try {
      const data = await this.$axios.$get('http://127.0.0.1:8000/api/projects?page=1')
      this.$store.commit('projects/load', data)
    } catch (e) {
      this.$sentry.captureException(e)
    }
  }
}
</script>

<style lang="scss">
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
        padding-right: 10px;
        margin: -3px 10px 0 5px;
        flex-grow: 100;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-wrap: none;

        a{
          color: #000000;
        }
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

      img[lazy=loading] {
        height: 100px;
      }
    }
  }
</style>
