<!--
 * @Author: gy
 * @Date: 2020-05-28 10:35:22
 * @LastEditors: gy
 * @LastEditTime: 2020-06-22 13:20:48
-->
<template>
    <div class="igb-layout-header">
        <div class="search-box">
            <div
                class="header-icon header-left"
                v-if="!isHome"
                @click="$router.back()"
            ></div>
            <div
                class="header-icon header-home"
                v-if="isHome"
                @click="backHandller()"
            ></div>
            <div class="header-search" @click="searchHandller">
                <span>搜索：成都-赵雷</span>
            </div>
        </div>
        <i class="icon icon-touping"></i>
    </div>
</template>

<script>
export default {
  name: 'IgbLayoutHeaderComponent',
  props: {
    isHome: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    /**
         * 返回回调事件
         */
    backHandller () {
      if (this.isHome) {
        this.$router.push({
          path: '/recommend/index'
        })
      }
    },
    /**
         * 点击搜索框回调事件
         */
    searchHandller () {
      this.$router.push({
        path: '/pages/search/index'
      })
    }
  }
}
</script>
