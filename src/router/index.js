import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'

import Login from '@/views/login'
import Main from '@/views/main'

import animate from '@/views/animate'
import animate1 from '@/views/animate1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },{ // Main
      path:   '/',
      name:   'main',
      component:  Main,
      children: [
        // { // 商品列表 暂时没用
        //   path:   '/crowdfunding',
        //   name:   'crowdfunding',
        //   component:  Crowdfunding
        // },
      ]
    },
    {
      path: '/animate',
      name: 'animate',
      component: animate
    },
    {
      path: '/animate1',
      name: 'animate1',
      component: animate1
    },
  ]
})
