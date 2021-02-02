import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登陆中
    isLogining: false,
    zUser: JSON.parse(localStorage.getItem('zUser')) || {}
  },
  mutations: {
    setisLoginingHandle (state, value) {
      console.log(value)
      state.isLogining = value
    },
    setuserInfo (state, v) {
      localStorage.setItem('zUser', JSON.stringify(v))// 将传递的数据先保存到localStorage中
      state.zUser = v// 之后才是修改state中的状态
    },
    addmu (state) { state.count++ },
    lessmu (state) { state.count-- }
  },
  actions: {
  },
  modules: {
  }
})
