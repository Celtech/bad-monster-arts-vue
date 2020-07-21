export const state = () => ({
  openComment: null
})

export const mutations = {
  setComment(state, id) {
    if (state.openComment === id) {
      return (state.openComment = null)
    }

    state.openComment = id
  }
}
