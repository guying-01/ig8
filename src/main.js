/*
 * @Author: gy
 * @Date: 2020-05-28 10:35:22
 * @LastEditors  : gy
 * @LastEditTime : 2020-07-01 00:41:08
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import '@babel/polyfill'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue/es'
import store from './store'
import '@/directives/clickoutside' // clickoutside
import {
  VueAxios
} from '@/utils/request'
import {
  IgbComponentInstall
} from './components/index'
import 'ant-design-vue/dist/antd.css'
import './assets/scss/index.scss'
import '../node_modules/font-awesome/scss/font-awesome.scss'

Vue.use(VueAxios, router)
Vue.use(Antd)
IgbComponentInstall(Vue)

Vue.config.productionTip = false

// bus
Vue.prototype.$bus = new Vue({
  methods: {
    emit (event, ...args) {
      this.$emit(event, ...args)
    },
    on (event, fn) {
      this.$on(event, fn)
    },
    off (event, fn) {
      this.$off(event, fn)
    }
  }
})

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
