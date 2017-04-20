import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from './add'
import List from './list'

// require('../../assets/sass/app.sass')
// import weui from '/static/lib/weui/js'

// console.log(weui)
// weui.alert('test')
Vue.use(VueRouter)

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  // base: baseUrl,
  routes: [
    {
      path: '/adddd',
      component: Add
    },
    {
      path: '/list',
      component: List
    }
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #index 匹配的元素上。
/* eslint-disable no-new */
new Vue({
  router: router
}).$mount('#index')
