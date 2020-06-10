<template>
  <div class="igb-pages-setting">
    <igb-page-main title="设置">
      <template slot="main">
        <div class="main">
          <div class="main-sidebar">
            <ul>
              <li
                v-for="item in menuList"
                :key="item.value"
                :class="{ current: item.current }"
                @click="toMenuHandller(item)"
              >
                <span>{{ item.label }}</span>
                <i class="icon icon-dian"></i>
              </li>
            </ul>
          </div>
          <div class="main-content">
            <igb-setting-login></igb-setting-login>
            <igb-setting-use-scenes></igb-setting-use-scenes>
          </div>
        </div>
      </template>
    </igb-page-main>
  </div>
</template>

<script>
import IgbPagesSettingLoginComponent from './login/index.vue'
import IgbPagesSettingUseScenesComponent from './useScenes/index.vue'
export default {
  name: 'IgbPagesSettingComponent',
  components: {
    'igb-setting-login': IgbPagesSettingLoginComponent,
    'igb-setting-use-scenes': IgbPagesSettingUseScenesComponent
  },
  data () {
    return {
      menuList: [
        {
          value: 0,
          label: '登录设置',
          url: '/pages/setting/login',
          current: true
        },
        {
          value: 1,
          label: '使用场景',
          url: '/pages/setting/useScenes',
          current: false
        }
      ]
    }
  },
  methods: {
    /**
     * 点击菜单跳转路由
     */
    toMenuHandller (item) {
      item.current = true
      this.menuList
        .filter(e => e.value !== item.value)
        .forEach(e => (e.current = false))
      this.$router.push({
        path: item.url
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/ddd/mixin.scss";
.igb-pages-setting {
  .main {
      display: flex;
    .main-sidebar,
    .main-content {
      position: relative;
    }

    .main-sidebar {
      width: calc-attr(210);
      border-right: 1px solid rgba(255, 255, 255, 0.05);

      ul {
        list-style: none;

        li {
          height: calc-attr(25);
          line-height: calc-attr(25);
          position: relative;
          text-align: right;
          cursor: pointer;

          &:first-child {
            margin: calc-attr(41) 0px calc-attr(54) 0px;
          }

          &.current {
            span {
              color: rgba(255, 255, 255, 0.9);
            }

            i {
              visibility: visible;
            }
          }

          span {
            font-size: calc-attr(18);
            font-family: "PingFang-SC-Regular";
            color: rgba(255, 255, 255, 0.5);
            padding-right: calc-attr(37);
          }

          i {
            visibility: hidden;
            display: block;
            width: calc-attr(11);
            height: calc-attr(11);
            background: rgba(249, 118, 71, 1);
            border: 2px solid rgba(255, 255, 255, 0.050980392156862744);
            border-radius: 50%;

            position: absolute;
            top: calc-attr(6);
            right: calc-attr(-5.5);
          }
        }
      }
    }

    .main-content {

    }
  }
}
</style>
