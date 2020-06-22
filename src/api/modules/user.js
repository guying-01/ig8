/*
 * @Author: gy
 * @Date: 2020-05-30 13:46:25
 * @LastEditors: gy
 * @LastEditTime: 2020-06-22 10:27:38
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

const DO_LOGIN = params => postAction('/usr.php', Object.assign(ig8_request_params, {CMD: 'DO_LOGIN'}, {PARAMS: JSON.stringify(params)}))

export {
  DO_LOGIN
}
