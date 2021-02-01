import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登陆中
    isLogining: false
  },
  mutations: {
    setisLoginingHandle (state, value) {
      console.log(value)
      state.isLogining = value
    },
    addmu (state) { state.count++ },
    lessmu (state) { state.count-- }
  },
  actions: {
  },
  modules: {
  }
})
