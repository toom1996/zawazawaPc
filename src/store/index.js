import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 登陆中
    isLogining: false,
    zUser: JSON.parse(localStorage.getItem('zUser')) || {},
    isLogin: !!localStorage.getItem('zUser')
  },
  mutations: {
    setIsLoginingHandle (state, value) {
      console.log(value)
      state.isLogining = value
    },
    // 设置用户信息 用户登入 登出
    setuserInfo (state, v) {
      if (v === '') {
        localStorage.removeItem('zUser')// 将传递的数据先保存到localStorage中
        state.isLogin = false
      } else {
        state.isLogin = true
        localStorage.setItem('zUser', JSON.stringify(v))// 将传递的数据先保存到localStorage中
      }
      state.zUser = v// 之后才是修改state中的状态
    },
    setToken (state, v) {
      console.log(v)
      const item = JSON.parse(localStorage.getItem('zUser'))
      console.log(item)
      item.token = v.token
      item.refresh_token = v.refresh_token
      item.expire = v.expire
      item.issuing_time = v.issuing_time
      localStorage.setItem('zUser', JSON.stringify(item))
      state.zUser = item// 之后才是修改state中的状态
      console.log(state.zUser)
    },
    addmu (state) { state.count++ },
    lessmu (state) { state.count-- }
  },
  actions: {
  },
  modules: {
  }
})
