/*
 * @Author       : gy
 * @Date         : 2020-06-25 00:06:48
 * @LastEditors  : gy
 * @LastEditTime : 2020-06-25 00:27:36
 * @FilePath     : /ig8/src/store/index.js
 * @Description  : 页面描述
 */
import keyboard from './modules/keyboard'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    keyboard
  },
  state: {},
  mutations: {},
  actions: {}
})
