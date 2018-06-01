import Vue from 'vue'
import Router from 'vue-router'
import {
  $import
} from '@/utils'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
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
          path: '/pc/detail',
          name: 'detail',
          component: $import('pc/detail')
        },
        {
          path: '/pc/detail/:id',
          name: 'detail',
          component: $import('pc/detail')
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
