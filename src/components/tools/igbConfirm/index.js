/*
 * @Author: gy
 * @Date: 2020-06-20 10:02:00
 * @LastEditors: gy
 * @LastEditTime: 2020-06-22 09:41:16
 */
import IgbConfirm from './index.vue'
import { createPopper } from '@popperjs/core'
/**
 * 模态窗
 */

let Instance = '' // 缓存
let isAppend = false // 是否已存在
export const igbConfirmToolInstall = (Vue, PluginOptions = {}) => {
  if (!window.ApplicationUI) window.ApplicationUI = {}
  window.ApplicationUI.ShowMessage = (Text, Button = 0, Default) => {
    if (!Text) return
    isAppend && Instance.destroy()
    const Constructor = Vue.extend(IgbConfirm)
    Instance = new Constructor({
      data () {
        return {
          options: {
            Text,
            Button,
            Default
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
    createPopper(document.querySelector(refrence), Instance.$el, {
      placement: 'top'
    })
  }
}
