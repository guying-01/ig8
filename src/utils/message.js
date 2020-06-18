/*
 * @Author: gy
 * @Date: 2020-06-18 14:34:13
 * @LastEditors: gy
 * @LastEditTime: 2020-06-18 14:35:23
 */

import Bus from '@/utils/bus'
function showMessage () {
  Bus.$emit('popper-show', true)
}

window.showMessage = showMessage
