/*
 * @Author: gy
 * @Date: 2020-05-28 10:35:22
 * @LastEditors  : gy
 * @LastEditTime : 2020-06-17 23:10:14
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import '@babel/polyfill'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
// import 'lib-flexible'
// import '@/utils/rem'
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue/es'
import {
  VueAxios
} from '@/utils/request'
import {
  IgbComponentInstall
} from './components/index'
import 'ant-design-vue/dist/antd.css'
import './assets/scss/index.scss'
import '../node_modules/font-awesome/scss/font-awesome.scss'
import Message from './components/tools/igbMessage/index'
// ((\.|-|\d){0,})px
Vue.use(VueAxios, router)
Vue.use(Antd)
IgbComponentInstall(Vue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
