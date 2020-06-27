<!--
 * @Author: gy
 * @Date: 2020-05-28 10:35:22
 * @LastEditors: gy
 * @LastEditTime: 2020-06-27 18:05:04
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
            <a-input
                placeholder="搜索：成都-赵雷"
                v-model="input"
                class="header-search"
                @focus="searchHandller"
                >
                <template slot="prefix" >
                  <i></i>
                </template>
               <!-- <a-icon slot="prefix" type="search" /> -->
            </a-input>
            <!-- <div class="header-search" @click="searchHandller">
                <span>搜索：成都-赵雷</span>
            </div> -->
        </div>
        <i class="icon icon-touping"></i>
    </div>
</template>

<script>
import {GET_PACGS, GET_SONGS, GET_INPHLP} from '@/api/api'
export default {
  name: 'IgbLayoutHeaderComponent',
  props: {
    isHome: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      input: '', // 键盘输入值
      timeInt: {},
      delay: 500// 防抖延时
    }
  },
  mounted () {
    this.$bus.on('letter-change', this.keyboard)
  },
  beforeDestroy () {
    this.$bus.off('letter-change', this.keyboard)
  },
  methods: {
    keyboard (item) {
      // 如果被禁用
      if (item.disabled) return
      // 如果是删除键
      if (item.label == 'Del') {
        this.input = this.input.substr(0, this.input.length - 1)
      } else if (item.label == 'Space') {
        this.input += ' '
      } else if (item.label == 'Yes') {

      } else if (item.label == 'Enter') {

      } else {
        this.input += item.label
      }
      this.$store.dispatch('setInput', this.input)
      GET_INPHLP({InputText: this.input, InputMode: this.$store.state.keyboard.mode }).then(res => {
        this.$store.dispatch('setDisableList', res)
      })

      // this.getPacgs()
    },
    // getPacgs () {
    //   if (this.input == null) return
    //   // 防抖
    //   clearTimeout(this.timeInt.pacgsInt)
    //   this.timeInt.pacgsInt = setTimeout(() => {
    //     GET_PACGS({
    //       'PackageType': '1', 'Filter': {'Tag': '', 'PYCode': this.input, 'Name': '', 'LovedId': 0}, 'Order': {'SingerId': 'desc'}, 'Page': {'PageSize': 10, 'PageNo': 1}, 'HintWords': this.input.length}
    //     ).then(res => {
    //       console.log(11)
    //       this.$store.dispatch('setDisableList',res)
    //       this.$bus.emit('digital-result', res)
    //     })
    //   }, this.delay)
    // },
    onSearch () {
      console.log(1)
    },
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
      if (this.$route.path == '/pages/search/index') {
        return this.$bus.emit('keyboard-toggle', true)
      }
      this.$router.push({
        path: '/pages/search/index'
      })
    }
  },
  computed: {
    inputValue () {
      return this.$store.state.keyboard.input
    },
    inputMode () {
      return this.$store.state.keyboard.mode
    }
  },
  watch: {
    inputValue (val) {
      this.input = val
      // 中文模式继续查询
      if (this.inputMode == 1) {
        GET_INPHLP({InputText: this.input, InputMode: this.$store.state.keyboard.mode }).then(res => {
          this.$store.dispatch('setDisableList', res)
        })
      }
    }
  }
}
</script>
