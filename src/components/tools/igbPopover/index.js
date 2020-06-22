/*
 * @Author: gy
 * @Date: 2020-06-20 10:02:00
 * @LastEditors: gy
 * @LastEditTime: 2020-06-22 09:40:37
 */
import IgbPopover from './index.vue'
import { createPopper } from '@popperjs/core'
/**
 * 模态窗
 */

let ForMap = {
  0: '#refrence-user-setting',
  1: '#refrence-contr-ly',
  2: '#refrence-contr-yd',
  3: '#refrence-contr-singer'
}
let Instance = '' // 缓存
let isAppend = false // 是否已存在
export const igbPopoverToolInstall = (Vue, PluginOptions = {}) => {
  if (!window.ApplicationUI) window.ApplicationUI = {}
  window.ApplicationUI.ShowPopper = (Text, IKnow, CanClose, AutoClose, For) => {
    if (!Text) return
    isAppend && Instance.destroy()
    const Constructor = Vue.extend(IgbPopover)
    Instance = new Constructor({
      data () {
        return {
          options: {
            Text,
            IKnow,
            CanClose,
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
    if (ForMap[For]) {
      refrence = ForMap[For]
    }
    createPopper(document.querySelector(refrence), Instance.$el, {
      placement: 'top-start'
    })
  }
}
