/*
 * @Author       : gy
 * @Date         : 2020-06-17 22:12:24
 * @LastEditors  : gy
 * @LastEditTime : 2020-06-17 23:16:26
 * @FilePath     : /ig8/src/components/tools/igbMessage/index.js
 * @Description  : messagebox
 */
import IgbMessageToolComponent from './index.vue'
import Vue from 'vue'
let Box = Vue.extend(IgbMessageToolComponent)
const Message = {
  install (options) {
    let instance = new Box({
      data: options
    }).$mount()
    document.body.appendChild(instance.$el)
  }
}

Vue.prototype.showmessage = Message.install

export default Message
