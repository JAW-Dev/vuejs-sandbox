export const state = {
  excludeNav: false
}

export const mutations = {
  excludeNavTrue() {
    state.excludeNav = true
  },
  excludeNavFalse() {
    state.excludeNav = false
  }
}
