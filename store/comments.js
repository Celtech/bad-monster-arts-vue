export const state = () => ({
  openComment: null,
  update: false
})

export const mutations = {
  setComment(state, id) {
    if (state.openComment === id) {
      return (state.openComment = null)
    }

    state.openComment = id
  },
  setUpdate(state, value) {
    state.update = value
  }
}
