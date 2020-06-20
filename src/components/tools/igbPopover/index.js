/*
 * @Author: gy
 * @Date: 2020-06-20 10:02:00
 * @LastEditors: gy
 * @LastEditTime: 2020-06-20 10:22:10
 */
import IgbPopover from './index.vue'
import { createPopper } from '@popperjs/core'
/**
 * 模态窗
 */
export const igbPopoverToolInstall = (Vue, PluginOptions = {}) => {
  window.ApplicationUI.ShowPopper = () => {
    const Constructor = Vue.extend(IgbPopover)
    const Instance = new Constructor({
      data () {
        return {}
      },
      methods: {
        destroy () {
          document.querySelector('body').removeChild(Instance.$el)
        }
      }
    }).$mount()
    document.querySelector('body').appendChild(Instance.$el)
    createPopper(document.querySelector('body'), Instance.$el)
  }
}
