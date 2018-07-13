// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Meta from 'vue-meta'

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './style/element-variables.scss'
import '@/assets/font/iconfont.css'
import 'lib-flexible/flexible'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Meta)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
