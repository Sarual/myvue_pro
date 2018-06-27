import Vue from 'vue'
import App from './App'
import router from './router'
// 导入全局样式
import './assets/css/global.css'
// 导入 字体图标的样式表
import './assets/fonts/iconfont.css'
// 导入 ElementUI 组件库
import ElementUI from 'element-ui'
import axios from 'axios'
// 导入 树形表格组件
import TreeGrid from 'vue-table-with-tree-grid'

Vue.config.productionTip = false

// 安装 elementUI
Vue.use(ElementUI)
// 把 导入的树形表格，注册为 全局组件
Vue.component('tree-table', TreeGrid)

// 为 axios 挂载 token 请求头，需要使用 request 拦截器实现
axios.interceptors.request.use(function(config) {
  // 手动为 axios 的请求，追加 Authorization 请求头
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
// 全局挂载请求的 baseURL
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 挂载 axios
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
