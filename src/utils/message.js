/*
 * @Author: gy
 * @Date: 2020-06-18 14:34:13
 * @LastEditors  : gy
 * @LastEditTime : 2020-06-19 23:14:42
 */

import { createPopper } from '@popperjs/core'

let refrenceMap = {
  1: 'refrence-contr-nov', // 静音
  2: 'reference-contr-reset', // 重唱
  3: 'refrence-contr-ly', // 录音
  4: 'refrence-contr-xh', // 播放顺序
  5: 'reference-contr-cut', // 切歌
  6: 'refrence-switch' // 原伴唱

}
let iconMap = {
  1: 'icon-success',
  2: 'icon-error',
  3: 'icon-loading'
}

// 提示消息
function ShowHint (Type = 0, Text, AutoClose = 0, For = 0) {
  // 如果已存在，则移除
  if (document.querySelectorAll('.message-popper').length > 0) {
    document.querySelector('body').removeChild(document.querySelector('.message-popper'))
  }
  // 如果没有Text参数，退出
  if (!Text) return
  let refrence = For == 0 ? document.querySelector('body') : document.querySelector(`#${refrenceMap[For]}`)
  if (!refrence) return console.log(`${refrenceMap[For]}`)
  let ele = document.createElement('div')
  let clsName = 'message-popper'
  let str = ''
  if (Type) {
    clsName += ` ${iconMap[Type]}`
    str += `<i></i>`
  }

  if (!For) {
    clsName += ' center-popper'
  }
  ele.className = clsName
  str += `<div class="message-box">${Text}</div>`
  ele.innerHTML = str
  document.querySelector('body').appendChild(ele)
  let instance = createPopper(refrence, ele, {
    placement: 'top',
    modifiers: [
      {
        name: 'arrow',
        options: {
          padding: 5 // 5px from the edges of the popper
        }
      }
    ]
  })

  setTimeout(() => {
    document.querySelector('body').removeChild(document.querySelector('.message-popper'))
  }, (AutoClose > 0 ? AutoClose : 1) * 1000)
}

// 中央弹框
function ShowMessage (Text, Button = 0, Default) {
  // 如果已存在，则移除
  if (document.querySelectorAll('.dialog-popper').length > 0) {
    document.querySelector('body').removeChild(document.querySelector('.dialog-popper'))
  }
  // 如果没有Text参数，退出
  if (!Text) return
  let refrence = document.querySelector('body')
  let ele = document.createElement('div')
  let clsName = 'dialog-popper'
  let str = ''
  ele.className = clsName
  // 拼接关闭icon
  str += '<div class="popper-wrap">'
  str += '<div class="icon-close" onclick="ApplicationUI.destroyDialogPopper()"></div>'
  str += `<div class="message-box">${Text}</div>`
  // 拼接button
  if (Button.length > 0) {
    str += '<div class="btn-box">'
    Button.map((item, index) => {
      str += `<div class="item-btn ${index == Default ? 'active' : ''}">${item}</div>`
    })
    str += '</div>'
  }
  str += '</div></div>'
  ele.innerHTML = str
  document.querySelector('body').appendChild(ele)
  let instance = createPopper(refrence, ele, {
    placement: 'top'
  })
}

function destroyDialogPopper () {
  if (document.querySelectorAll('.dialog-popper').length > 0) {
    document.querySelector('body').removeChild(document.querySelector('.dialog-popper'))
  }
}

window.ApplicationUI = {
  ShowHint,
  ShowMessage,
  destroyDialogPopper
}
