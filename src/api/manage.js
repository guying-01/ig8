/*
 * @Author: gy
 * @Date: 2020-05-30 13:19:24
 * @LastEditors: gy
 * @LastEditTime: 2020-05-30 13:55:21
 */
import {
  axios
} from '@/utils/request'
import QS from 'qs'

//post
export function postAction(url, parameter) {
  return axios({
    url: url,
    method: 'post',
    data: parameter
  })
}

//post method= {post | put}
export function httpAction(url, parameter, method) {
  if (method == 'get' || !method) {
    return getAction(url, parameter)
  } else if (method == 'post') {
    return postAction(url, parameter)
  } else if (method == 'put') {
    return putAction(url, parameter)
  } else if (method == 'delete') {
    return deleteAction(url, parameter)
  }
}

//put
export function putAction(url, parameter) {
  return axios({
    url: url,
    method: 'put',
    data: parameter
  })
}

//get
export function getAction(url, params = {}) {
  return axios({
    url: Object.keys(params).length == 0 ? url : url + '?' + QS.stringify(params),
    method: 'get'
    // params: parameter
  })
}

//restful get
export function restFulGetAction(url, params = {}) {
  let str = ''
  for (let i in params) {
    str += '/' + params[i]
  }
  return axios({
    url: Object.keys(params).length == 0 ? url : url + str,
    method: 'get'
    // params: parameter
  })
}

//deleteAction
export function deleteAction(url, parameter) {
  return axios({
    url: url,
    method: 'delete',
    params: parameter
  })
}
