export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false,
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    state.done = !state.done
  },
}

// export const actions = {
//   add({commit}, todo) {

//   }
// }
