import Vue from 'vue'
import Router from 'vue-router'
import * as types from './types'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: types.FRAME,
    component: () => import('@/pages/frame/index.vue'),
    children: [{
      path: '/demo',
      name: types.DEMO,
      component: () => import('@/pages/demo/index.vue')
    }]
  }]
})
