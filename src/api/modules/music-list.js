/*
 * @Author: gy
 * @Date: 2020-05-30 13:46:25
 * @LastEditors: gy
 * @LastEditTime: 2020-05-30 13:54:16
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


const GET_TAGS = params => postAction('/cloud', Object.assign(ig8_request_params, params))

const GET_SONGS = params => postAction('/cloud', Object.assign(ig8_request_params, params))

export {
  GET_TAGS,
  GET_SONGS
}
