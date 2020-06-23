<!--
 * @Author       : gy
 * @Date         : 2020-06-01 22:08:15
 * @LastEditors: gy
 * @LastEditTime: 2020-06-23 19:54:38
 * @FilePath     : /ig8/src/pages/modalLoginLayout/index.vue
 * @Description  : 页面描述
-->
<template>
<div class="igb-pages-modal-layout">
    <igb-login v-if="pageEnum[0].value" @next="nextHandller"></igb-login>
    <igb-register v-if="pageEnum[1].value" @next="nextHandller"></igb-register>
    <igb-forget v-if="pageEnum[2].value" @next="nextHandller"></igb-forget>
    <igb-captcha v-if="pageEnum[3].value" @next="nextHandller"></igb-captcha>
    <igb-pass v-if="pageEnum[4].value" @next="nextHandller"></igb-pass>
</div>
</template>

<script>
import IgbPagesLoginModalComponent from './login/index.vue'
import IgbPagesRegisterModalComponent from './register/index.vue'
import IgbPagesForgetModalComponent from './forget/index.vue'
import IgbPagesCaptchaModalComponent from './captcha/index.vue'
import IgbPagesPassModalComponent from './pass/index.vue'
export default {
  name: 'IgbPagesModalLoginLayoutComponent',
  props: {
    params: {
      type: Object,
      default: {
        page: 'login'
      }
    }
  },
  components: {
    'igb-login': IgbPagesLoginModalComponent,
    'igb-register': IgbPagesRegisterModalComponent,
    'igb-forget': IgbPagesForgetModalComponent,
    'igb-captcha': IgbPagesCaptchaModalComponent,
    'igb-pass': IgbPagesPassModalComponent
  },
  data () {
    return {
      pageEnum: [{
        key: 'login',
        value: true
      }, {
        key: 'register',
        value: false
      }, {
        key: 'forget',
        value: false
      }, {
        key: 'captcha',
        value: false
      }, {
        key: 'pass',
        value: false
      }]
    }
  },
  mounted () {
    this.$nextTick(() => {
      let page = this.pageEnum.find(e => e.key === this.params.page)
      if (page) {
        page.value = true

        this.pageEnum.filter(e => e.key !== page.key).forEach(e => e.value = false)
      }
    })
  },
  methods: {
    nextHandller (event) {
      if (event.key === 'ok') {
        this.$emit('ok', event)
        return
      }
      let page = this.pageEnum.find(e => e.key === event.key)

      if (page) {
        page.value = event.value

        this.pageEnum.filter(e => e.key !== event.key).forEach(e => e.value = false)
      }
    }
  }
}
</script>
