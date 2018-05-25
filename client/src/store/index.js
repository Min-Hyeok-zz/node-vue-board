import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const member = sessionStorage.getItem('member') ? JSON.parse(sessionStorage.getItem('member')) : {}
const isMember = sessionStorage.getItem('member') !== null

export default new Vuex.Store({
  state: {
    isMember: isMember,
    member: member
  },
  mutations: {
    login (state, data) {
      state.isMember = true
      state.member = data
      sessionStorage.setItem('member', JSON.stringify(data))
    },
    logout (state) {
      state.isMember = false
      state.mebmer = {}
      sessionStorage.clear()
    }
  }
})
