/*
 * @Author: gy
 * @Date: 2020-05-30 13:46:25
 * @LastEditors  : gy
 * @LastEditTime : 2020-06-25 16:48:01
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

const GET_SONGS = params => postAction('/cloud', Object.assign(ig8_request_params, JSON.stringify(params)))

// 获取歌曲包
const GET_PACGS	 = params => postAction('/cloud', Object.assign(ig8_request_params,
  { CMD: 'GET_PACGS' },
  {PARAMS: JSON.stringify(params)}))

// 获取联想词
const GET_INPHLP	 = params => postAction('/cloud', Object.assign(ig8_request_params,
  { CMD: 'GET_INPHLP' },
  {PARAMS: JSON.stringify(params)}))

export {
  GET_TAGS,
  GET_SONGS,
  GET_PACGS,
  GET_INPHLP
}
