import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.min.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import HttpCode from './utils/code.js'

import Notify from './components/common/Notify'

Vue.use(Toast, {

  // 显示位置：top-right, top-center, top-left, bottom-right, bottom-center, bottom-left.
  position: 'top-right',

  // 将最新的toast放到顶部
  newestOnTop: true,

  // 最大toasts数
  maxToasts: 10,

  // 要使用类的Vue转换或对象的名称
  // 只应用“输入活动”、“保持活动”和“移动”。
  transition: 'Vue-Toastification__fade',

  // 持续时间（毫秒）
  // 或一个对象: {enter: Number, leave: Number}
  transitionDuration: 0,

  // 允许通过拖动和滑动事件关闭
  draggable: false,
  draggablePercent: 0.6,

  // 失去焦点时自动暂停
  pauseOnFocusLoss: true,

  // 悬停时自动暂停
  pauseOnHover: true,

  // 单击即关闭
  closeOnClick: false,

  // 超时后自动关闭
  timeout: 2000,

  // 容器元素
  container: document.body,

  // 自定义类
  toastClassName: [],

  // body类
  bodyClassName: [],

  // 显示/隐藏进度条
  hideProgressBar: true,

  // 显示/隐藏关闭按钮
  hideCloseButton: false,

  // 此处显示自定义图标
  icon: true

})
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component('Notify', Notify)
Vue.config.productionTip = false
Vue.prototype.code = HttpCode
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
