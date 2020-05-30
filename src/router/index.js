import Vue from 'vue'
import Router from 'vue-router'
import recommendRrouter from './recommend.router'
import singerRouter from './singer.router'
import classificationRouter from './classification.router'
import collectRouter from './collect.router'
import pageRouter from './page.router'
Vue.use(Router)

export default new Router({
    routes: [{
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
                    name: "igbPagesDetailSinger",
                    component: resolve => require(['@/pages/detail/singer.vue'], resolve)
                },

                {
                    path: '/pages/detail/songByList',
                    name: "igbPagesDetailSongByList",
                    component: resolve => require(['@/pages/detail/songByList.vue'], resolve)
                },

                {
                    path: '/pages/detail/songByAlbum',
                    name: "igbPagesDetailSongByAlbum",
                    component: resolve => require(['@/pages/detail/songByAlbum.vue'], resolve)
                },



            ]
        },
        ...pageRouter,


    ]
})