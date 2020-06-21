/*
 * @Author: gy
 * @Date: 2020-05-30 13:46:25
 * @LastEditors  : gy
 * @LastEditTime : 2020-06-21 15:45:57
 */
import {
  getAction,
  deleteAction,
  putAction,
  postAction
} from '@/api/manage'

const ig8_request_params = {
  VER: 1
}

const DO_LOGIN = params => postAction('/cloud', Object.assign(ig8_request_params, {CMD: 'DO_LOGIN'}, params))

export {
  DO_LOGIN
}
