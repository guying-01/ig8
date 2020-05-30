/**
 * 分类路由管理
 */
const routers = [{
    path: '/classification/index',
    name: 'igbClassification',
    component: resolve => require(['@/modules/classification/index.vue'], resolve)
}];


export default routers;