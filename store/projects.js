export const state = () => ({
  data: null
})

export const mutations = {
  load (state, data) {
    state.data = data
  }
}
