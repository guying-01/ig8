<template>
<div class="igb-layout-sidebar">
    <div class="msg"></div>
    <div class="user">
        <div class="avatar">
            <img src="../assets/images/avatar.jpg" @click="myInfoHandller" />
        </div>
        <p class="user-name">{{userInfo.UserName}}</p>
        <p class="user-vip" v-if="isLogin">
            <img src="../assets/images/vip.png" />
        </p>
        <p class="user-setting">
            <a-dropdown :trigger="['click']" overlayClassName="sidebar-user-setting-menu"  id="refrence-user-setting">
                <a class="ant-dropdown-link" @click="e => e.preventDefault()"></a>
                <a-menu slot="overlay" @click="menuClickHandller">
                    <a-menu-item key="0">
                        <p class="icon-triangle">
                            <i class="fa fa-sort-asc" aria-hidden="true"></i>
                        </p>
                        <img src="../assets/images/user-setting.png" />
                        <span>设置</span>
                    </a-menu-item>
                    <a-menu-item key="1">
                        <img src="../assets/images/user-skinning.png" />
                        <span>换肤</span>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <img src="../assets/images/user-info.png" />
                        <span>我的信息</span>
                    </a-menu-item>
                    <a-sub-menu key="3">
                        <template slot="title">
                            <img src="../assets/images/user-mode.png" />
                            <span>当前模式</span>
                        </template>
                        <a-menu-item key="3-0">K歌模式<i class="icon icon-curr" v-if="mode===0"></i></a-menu-item>
                        <a-menu-item key="3-1">家庭模式<i class="icon icon-curr" v-if="mode===1"></i></a-menu-item>
                    </a-sub-menu>
                    <a-menu-item key="4">
                        <img src="../assets/images/user-out.png" />
                        <span>退出</span>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        </p>
    </div>

    <div class="sidebar-list">
        <ul>
            <li v-for="(item,index) in sidebar" :key="index" :class="{'sidebar-curr':item.current}">
                <a href="javascript:void(0);" @click="toHandller(item);">
                    <div class="icon">
                        <img :src="`${require(`../assets/images/${item.icon}.png`)}`" class="item-img" v-if="!item.current" />
                        <img :src="`${require(`../assets/images/${item.icon}_curr.png`)}`" class="item-img" v-if="item.current" />
                    </div>
                    <img src="../assets/images/sidebar_curr.png" class="sidebar-bg-curr" v-if="item.current" />
                    <span>{{item.label}}</span>
                </a>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import localStorageService from '../ddd/localStorage.service'
import IgbPagesModalLoginLayoutComponent from '../pages/modalLoginLayout/index.vue'
import IgbPagesMyInfoComponent from '../pages/modal/my/index.vue'
import IgbPagesDepositComponent from '../pages/modal/deposit/index.vue'
import {DO_LOGIN} from '@/api/api'
export default {
  name: 'IgbLayoutSidebarComponent',
  data () {
    return {
      isLogin: false,
      userInfo: {
        UserName: '未登录'
      },
      settingList: [{
        id: 1,
        label: '设置',
        icon: 'user-setting',
        url: '/pages/setting/index'
      },
      {
        id: 2,
        label: '换肤',
        icon: 'user-skinning',
        url: ''
      },
      {
        id: 3,
        label: '我的信息',
        icon: 'user-info',
        url: '/pages/user/index'
      },
      {
        id: 4,
        label: '当前模式',
        icon: 'user-mode',
        url: '',
        childers: [{
          id: 6,
          label: 'K歌模式'
        },
        {
          id: 7,
          label: '家庭模式'
        }
        ]
      },
      {
        id: 5,
        label: '退出',
        icon: 'user-out',
        url: ''
      }
      ],
      sidebar: [{
        id: 1,
        label: '推荐',
        icon: 'sidebar1',
        width: '30.11',
        height: '27.27',
        url: '/recommend/index',
        current: true
      },
      {
        id: 2,
        label: '歌星',
        icon: 'sidebar2',
        width: '28.53',
        height: '29.25',
        url: '/singer/index',
        current: false
      },
      {
        id: 3,
        label: '分类',
        icon: 'sidebar3',
        width: '28.5',
        height: '28.46',
        url: '/classification/index',
        current: false
      },
      {
        id: 4,
        label: '收藏',
        icon: 'sidebar4',
        width: '29.98',
        height: '28.86',
        url: '/collect/index',
        current: false
      }
      ],
      mode: 0,
      defaultSelectedKeys: ['3-0']
    }
  },
  mounted () {
    let m = localStorageService.getItem('CONTR-MODE')
    if (!m) {
      localStorageService.removeItem('CONTR-MODE')
      localStorageService.setItem('CONTR-MODE', this.mode)
    } else {
      this.mode = parseInt(localStorageService.getItem('CONTR-MODE'))
    }

    let isLogin = localStorageService.getItem('isLogin')
    if (isLogin) {
      this.isLogin = true
      let userInfo = localStorageService.getItem('userInfo')
      this.userInfo = JSON.parse(userInfo)
    }

    if (this.mode === 0) {
      this.defaultSelectedKeys = []
      this.defaultSelectedKeys = ['3-0']
    } else {
      this.defaultSelectedKeys = []
      this.defaultSelectedKeys = ['3-1']
    }

    this.$emit('modeChange', {
      mode: this.mode
    })

    let hasPath = this.sidebar.find(
      e => e.url === window.location.hash.replace('#', '')
    )
    if (hasPath) {
      hasPath.current = true
      this.sidebar
        .filter(e => e.id !== hasPath.id)
        .forEach(e => (e.current = false))
    }
  },
  watch: {
    $route (to, from) {
      let hasPath = this.sidebar.find(e => e.url == to.path)
      if (hasPath) {
        hasPath.current = true
        this.sidebar
          .filter(e => e.id !== hasPath.id)
          .forEach(e => (e.current = false))
      }
    }
  },
  methods: {
    menuClickHandller (event) {
      if (event.key === '3-0') {
        this.mode = 0
        this.defaultSelectedKeys = []
        this.defaultSelectedKeys = ['3-0']
        localStorageService.removeItem('CONTR-MODE')
        localStorageService.setItem('CONTR-MODE', 0)
        this.$emit('modeChange', {
          mode: 0
        })
        return
      }

      if (event.key === '3-1') {
        this.mode = 1
        this.defaultSelectedKeys = []
        this.defaultSelectedKeys = ['3-1']
        localStorageService.removeItem('CONTR-MODE')
        localStorageService.setItem('CONTR-MODE', 1)
        this.$emit('modeChange', {
          mode: 1
        })
        return
      }
      let KEY = 'BACK-URL'
      let URL = window.location.hash.replace('#', '')
      localStorageService.removeItem(KEY)
      localStorageService.setItem(KEY, URL)

      let index = parseInt(event.key) + 1

      let item = this.settingList.find(e => e.id === index)
      if (item.id === 1) {
        this.$router.push({
          path: this.settingList.find(e => e.id === index).url
        })
        // this.igbModal$({
        //   visible: true,
        //   wrapClassName: 'login-modal',
        //   // width: 420,
        //   componentName: IgbPagesModalLoginLayoutComponent,
        //   params: {},
        //   okHandller: (options, close) => {
        //     let okResult = options.output.okResult
        //     if (okResult.key === 'ok') {
        //       close()
        //       setTimeout(() => {

        //       }, 0)
        //     }
        //   }
        // })
      }

      if (item.id === 5) {
        this.igbModal$({
          visible: true,
          wrapClassName: 'login-modal pass-modal',
          // width: 420,
          componentName: IgbPagesModalLoginLayoutComponent,
          params: {
            page: 'pass'
          },
          okHandller: (options, close) => {
            let okResult = options.output.okResult
            if (okResult.key === 'ok') {
              close()
              setTimeout(() => {
                this.$router.push({
                  path: this.settingList.find(e => e.id === index).url
                })
              }, 0)
            }
          }
        })
      }

      if (item.id === 3) {
        setTimeout(() => {
          this.$router.push({
            path: this.settingList.find(e => e.id === index).url
          })
        }, 0)
      }
    },
    toHandller (item) {
      item.current = true
      this.sidebar
        .filter(e => e.id !== item.id)
        .forEach(e => (e.current = false))
      this.$router.push({
        path: item.url
      })
    },
    myInfoHandller () {
      if (!localStorageService.getItem('isLogin')) {
        this.igbModal$({
          visible: true,
          wrapClassName: 'login-modal',
          // width: 420,
          componentName: IgbPagesModalLoginLayoutComponent,
          params: {},
          okHandller: (options, close) => {
            // this.$router.push({
            //   path: '/pages/user/index'
            // })
            let okResult = options.output.okResult
            let {userName, userPass} = options.output.okResult
            if (okResult.key === 'ok') {
              DO_LOGIN({AccountName: userName, Password: userPass}).then(res => {
                if (res.Result == 1) {
                  localStorageService.setItem('isLogin', true)
                  localStorageService.setItem('userInfo', JSON.stringify(res.Description))
                  this.userInfo = res.Description
                  this.isLogin = true
                  close()
                }
              })
            }
          }
        })
      } else {
        this.igbModal$({
          visible: true,
          wrapClassName: 'my-info-modal',
          width: 687,
          componentName: IgbPagesMyInfoComponent,
          params: {},
          okHandller: (options, close) => {
            let okResult = options.output.okResult
            if (okResult.key === 'deposit') {
              close()
              this.depositHandller()
            }
          }
        })
      }
    },
    depositHandller () {
      this.igbModal$({
        visible: true,
        width: 800,
        wrapClassName: 'deposit-modal',
        componentName: IgbPagesDepositComponent,
        params: {}
      })
    }
  }
}
</script>
