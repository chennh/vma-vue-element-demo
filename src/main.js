// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {
  eachOwn
} from '@/utils'
import * as componentLibs from './components/libs'
import * as filters from './filters'
import * as directives from './directives'
import plugins from './plugins'

Vue.config.productionTip = false

// 注册全局组件
eachOwn(componentLibs, (component, name) => {
  Vue.component(name, component)
})

// 注册全局过滤器
eachOwn(filters, (filter, name) => {
  Vue.filter(name, filter)
})

// 注册全局指令
eachOwn(directives, (directive, name) => {
  Vue.directive(name, directive)
})

// 安装全局插件
Vue.use(plugins)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
