// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import "@babel/polyfill";
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'

import App from './App'
import router from './router'

import { IgbComponentInstall } from "./components/index"

IgbComponentInstall(Vue)

import 'ant-design-vue/dist/antd.less'
import "./assets/scss/index.scss"
import '../node_modules/font-awesome/scss/font-awesome.scss'



Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})