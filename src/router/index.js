import Vue from 'vue'
import Router from 'vue-router'
// 导入登录组件
import Login from '@/components/Login'
// 导入 后台首页组件
import Home from '@/components/Home'
// 导入 欢迎组件
import Welcome from '@/components/Welcome'
// 导入 用户管理组件
import Users from '@/components/user/Users'
// 导入 权限列表组件
import Rights from '@/components/power/Rights'
// 导入 角色列表组件
import Roles from '@/components/power/Roles'
// 导入 商品分类组件
import Category from '@/components/goods/Category'
import Params from '@/components/goods/Params'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login' // 如果用户访问的 / 根路径，则 重定向到 /login 页面
    },
    { path: '/login', component: Login }, // 登录页面的路由规则
    {
      path: '/home',
      component: Home,
      redirect: '/welcome', // 只要进入了 home 页面，就立即重定向到 welcome 欢迎页
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users },
        { path: '/rights', component: Rights },
        { path: '/roles', component: Roles },
        { path: '/categories', component: Category },
        { path: '/params', component: Params }
      ]
    } // 后台主页的路由规则
  ]
})

// 路由导航守卫的语法   router对象.beforeEach((to, from, next) => {})
router.beforeEach((to, from, next) => {
  // 如果用户访问的是 登录页面，则直接放行
  if (to.path === '/login') return next()
  // 获取 token
  const tokenStr = sessionStorage.getItem('token')
  // 如果 token 存在， 直接放行
  if (tokenStr) return next()
  // 否则，强制跳转到登录页
  next('/login')
})

export default router
