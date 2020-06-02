/*
 * @Author: gy
 * @Date: 2020-05-28 10:35:23
 * @LastEditors: gy
 * @LastEditTime: 2020-06-01 14:08:23
 */
/**
 * 公共页面路由管理
 */
const routers = [{
    path: '/pages/user/index',
    name: 'igbPagesUser',
    component: resolve => require(['@/pages/user/index.vue'], resolve)
  },
  {
    path: '/pages/setting/index',
    name: 'igbPagesSetting',
    component: resolve => require(['@/pages/setting/index.vue'], resolve),
    children: [{
        path: '/',
        name: "igbPagesSettingLogin",
        component: resolve => require(['@/pages/setting/login/index.vue'], resolve)
      },
      {
        path: '/pages/setting/login',
        name: "igbPagesSettingLogin",
        component: resolve => require(['@/pages/setting/login/index.vue'], resolve)
      },
      {
        path: '/pages/setting/useScenes',
        name: "igbPagesSettingUseScenes",
        component: resolve => require(['@/pages/setting/useScenes/index.vue'], resolve)
      }
    ]
  },
  {
    path: '/pages/video/index',
    name: 'igbPagesVideo',
    component: resolve => require(['@/pages/video/index.vue'], resolve)
  }
];


export default routers;
