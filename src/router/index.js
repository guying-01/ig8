/*
 * @Author       : gy
 * @Date         : 2020-06-01 22:08:15
 * @LastEditors  : gy
 * @LastEditTime : 2020-06-25 14:19:24
 * @FilePath     : /ig8/src/router/index.js
 * @Description  : 页面描述
 */
import Vue from 'vue'
import Router from 'vue-router'
import recommendRrouter from './recommend.router'
import singerRouter from './singer.router'
import classificationRouter from './classification.router'
import collectRouter from './collect.router'
import pageRouter from './page.router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      component: resolve => require(['@/test.vue'], resolve)
    },
    {
      path: '/',
      name: 'layout',
      component: resolve => require(['@/layout/index.vue'], resolve),
      children: [
        ...[],

        {
          path: '/',
          name: 'igbRecommend',
          component: resolve => require(['@/modules/recommend/index.vue'], resolve)
        },

        ...recommendRrouter,

        ...singerRouter,

        ...classificationRouter,

        ...collectRouter,

        {
          path: '/pages/search/index',
          name: 'igbPagesSearch',
          component: resolve => require(['@/pages/search/index.vue'], resolve)
        },

        {
          path: '/pages/detail/singer',
          name: 'igbPagesDetailSinger',
          component: resolve => require(['@/pages/detail/singer.vue'], resolve)
        },

        {
          path: '/pages/detail/songByList',
          name: 'igbPagesDetailSongByList',
          component: resolve => require(['@/pages/detail/songByList.vue'], resolve)
        },

        {
          path: '/pages/detail/songByAlbum',
          name: 'igbPagesDetailSongByAlbum',
          component: resolve => require(['@/pages/detail/songByAlbum.vue'], resolve)
        }

      ]
    },
    ...pageRouter

  ]
})
