/**
 * 推荐路由管理
 */
const routers = [{
    path: '/recommend/index',
    name: 'igbRecommend',
    component: resolve => require(['@/modules/recommend/index.vue'], resolve)
}];


export default routers;