/*
 * @Author: gy
 * @Date: 2020-06-20 10:02:00
 * @LastEditors  : gy
 * @LastEditTime : 2020-06-21 23:22:40
 */
import IgbMessage from './index.vue'
import { createPopper } from '@popperjs/core'
/**
 * 模态窗
 */

let Instance = '' // 缓存
let isAppend = false // 是否已存在
let refrenceMap = {
  1: '#refrence-contr-nov', // 静音
  2: '#reference-contr-reset', // 重唱
  3: '#refrence-contr-ly', // 录音
  4: '#refrence-contr-xh', // 播放顺序
  5: '#reference-contr-cut', // 切歌
  6: '#refrence-switch' // 原伴唱

}
export const igbMessageToolInstall = (Vue, PluginOptions = {}) => {
  window.ApplicationUI.ShowHint = (Type = 0, Text, AutoClose = 0, For = 0) => {
    if (!Text) return
    isAppend && Instance.destroy()
    const Constructor = Vue.extend(IgbMessage)
    Instance = new Constructor({
      data () {
        return {
          options: {
            Type,
            Text,
            AutoClose,
            For
          }
        }
      },
      methods: {
        destroy () {
          clearTimeout(this.timeInt)
          document.querySelector('body').removeChild(Instance.$el)
          isAppend = false
        }
      }
    }).$mount()
    if (!isAppend) {
      document.querySelector('body').appendChild(Instance.$el)
      isAppend = true
    }
    let refrence = 'body'
    if (refrenceMap[For]) {
      refrence = refrenceMap[For]
    }
    function calcAttr (px) {
      let winWidth = document.documentElement.clientWidth
      return winWidth * px / 1920
    }
    createPopper(document.querySelector(refrence), Instance.$el, {
      placement: 'top',
      modifiers: [{
        name: 'offset',
        // 向上偏移10px
        options: {
          offset: [0, calcAttr(10)]
        }
      }]
    })
  }
}
