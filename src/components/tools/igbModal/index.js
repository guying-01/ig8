/*
 * @Author: gy
 * @Date: 2020-05-28 10:35:22
 * @LastEditors: gy
 * @LastEditTime: 2020-06-17 19:49:26
 */
import IgbModalToolComponent from './index.vue'
/**
 * 模态窗
 */
export const igbModalToolInstall = (Vue, PluginOptions = {}) => {
  Object.defineProperty(Vue.prototype, 'igbModal$', {
    get () {
      let div = document.createElement('div')
      document.body.appendChild(div)
      return (options) => {
        const Constructor = Vue.extend(IgbModalToolComponent)
        new Constructor({
          data () {
            return {
              modalOption: options
            }
          }
        }).$mount(div)
      }
    }
  })

  Vue.igbModal = Vue.prototype.igbModal$
}
