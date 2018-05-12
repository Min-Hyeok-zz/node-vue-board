import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '김민혁'
  },
  mutations: {
    nameSet (state, val) {
      state.name = val
    }
  }
})
