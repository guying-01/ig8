/**
 * 收藏路由管理
 */
const routers = [{
    path: '/collect/index',
    name: 'igbCollect',
    component: resolve => require(['@/modules/collect/index.vue'], resolve)
}];


export default routers;