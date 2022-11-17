import { createStore } from 'vuex'

export default createStore({
  state: {
    authenticated: false
  },
  getters: {
  },
  mutations: {
    SET_AUTH:(state,auth) => state.authenticated = auth
  },
  actions: {
    set_auth:({commit},auth) => commit('SET_AUTH',auth)
  },
  modules: {
  }
})
