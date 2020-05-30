/**
 * 歌星路由管理
 */
const routers = [{
    path: '/singer/index',
    name: 'igbSinger',
    component: resolve => require(['@/modules/singer/index.vue'], resolve)
}];


export default routers;