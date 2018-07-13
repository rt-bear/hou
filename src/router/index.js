import Vue from 'vue'
import Router from 'vue-router'
import {
  $import
} from '@/utils'

Vue.use(Router)

export default new Router({
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // },
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/pc/home',
      component: $import('pc')
    },
    {
      path: '/pc',
      name: 'PC',
      component: $import('pc'),
      children: [
        {
          path: '/pc/home',
          name: 'Home',
          component: $import('pc/home')
        },
        {
          path: '/pc/aboutCompany',
          name: 'aboutCompany',
          component: $import('pc/detail/AboutCompany')
        },
        {
          path: '/pc/aboutProduct',
          name: 'aboutProduct',
          component: $import('pc/detail/AboutProduct')
        },
        {
          path: '/pc/aboutProduct/:index',
          name: 'aboutProduct',
          component: $import('pc/detail/AboutProduct')
        }
      ]
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: $import('mobile'),
      children: [
        {
          path: '/mobile/home',
          name: 'Home',
          component: $import('mobile/home')
        },
        {
          path: '/mobile/detail',
          name: 'detail',
          component: $import('mobile/detail')
        },
        {
          path: '/mobile/detail/:id',
          name: 'detail',
          component: $import('mobile/detail')
        }
      ]
    }
  ]
})
