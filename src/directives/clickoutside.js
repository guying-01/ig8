/*
 * @Author       : gy
 * @Date         : 2020-06-26 14:08:19
 * @LastEditors  : gy
 * @LastEditTime : 2020-06-26 14:12:22
 * @FilePath     : /ig8/src/directive/clickoutside.js
 * @Description  : 页面描述
 */
import Vue from 'vue'
const clickoutsideContext = '@@clickoutsideContext'
Vue.directive('clickoutside', {
  /*
   @param el 指令所绑定的元素
   @param binding {Object}
   @param vnode vue编译生成的虚拟节点
   */
  bind (el, binding, vnode) {
    const documentHandler = function (e) {
      if (!vnode.context || el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        vnode.context[el[clickoutsideContext].methodName](e)
      } else {
        el[clickoutsideContext].bindingFn(e)
      }
    }
    el[clickoutsideContext] = {
      documentHandler,
      methodName: binding.expression,
      bindingFn: binding.value
    }
    setTimeout(() => {
      document.addEventListener('click', documentHandler)
    }, 0)
  },
  update (el, binding) {
    el[clickoutsideContext].methodName = binding.expression
    el[clickoutsideContext].bindingFn = binding.value
  },
  unbind (el) {
    document.removeEventListener('click', el[clickoutsideContext].documentHandler)
  }
})
