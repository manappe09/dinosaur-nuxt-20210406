export const state = () => ({
  selectedValue: {
    categories: [],
    ages: [],
  },
  filteringBoxState: false,
})

export const mutations = {
  setSelectedValue(state, object) {
    state.selectedValue = object
  },
  toggleFilteringBox(state, toggle) {
    state.filteringBoxState = toggle
  },
}

export const actions = {
  setSelectedValue({ commit }, object) {
    commit('setSelectedValue', object)
  },
  toggleFilteringBox({ commit }, toggle) {
    commit('toggleFilteringBox', toggle)
  },
}
