/*
 * @Author       : gy
 * @Date         : 2019-11-25 10:54:53
 * @LastEditors: gy
 * @LastEditTime: 2020-05-30 13:50:05
 * @FilePath     : \code\src\utils\request.js
 * @Description  : axios 封装
 */
import Vue from 'vue'
import axios from 'axios'
import {
  VueAxios
} from './axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.NODE_ENV == 'production' ? 'http://app.ig8.net/' : '/api', // api base_url
  timeout: 60000 // 请求超时时间
})

const err = error => {
  if (error.response) {
    console.log('------异常响应------', error.response.status)
    switch (error.response.status) {
      case 401:
        // Vue.prototype.$message({ message: 'Token失效，请重新登录!', type: 'error' })
        break

      case 404:
        // Vue.prototype.$message({ message: '很抱歉，资源未找到!', type: 'error' })
        break
      case 500:
        // Vue.prototype.$message({ message: '网络错误，请稍后再试!', type: 'error' })
        break
      case 503:
        // Vue.prototype.$message({ message: '系统错误，请稍后再试!', type: 'error' })
        break
      case 504:
        // Vue.prototype.$message({ message: '网络超时，请稍后再试!', type: 'error' })
        break
      default:
        // Vue.prototype.$message({ message: '系统错误，请稍后再试!', type: 'error' })
    }
  } else {
    // Vue.prototype.$message({ message: '系统未响应，请稍后再试!', type: 'error' })
  }
}

// request interceptor
service.interceptors.request.use(
  config => {
    if (config.method == 'get') {
      config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(response => {
  return response.data
}, err)

const installer = {
  vm: {},
  install(Vue, router = {}) {
    Vue.use(VueAxios, router, service)
  }
}

export {
  installer as VueAxios, service as axios
}
