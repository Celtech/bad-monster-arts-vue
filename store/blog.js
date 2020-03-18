export const state = () => ({
  posts: null
})

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  }
}
