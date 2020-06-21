<!--
 * @Author: gy
 * @Date: 2020-06-20 10:02:00
 * @LastEditors  : gy
 * @LastEditTime : 2020-06-21 23:23:41
-->
<template>
    <div
        class="message-popper"
        :class="[isCenter ? 'center-popper' : '', iconClass]"
        :data-for="options.For"
    >
        <i></i>

        <div class="message-box">
            {{ options.Text }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'IgbMessageToolComponent',
  data () {
    return {
      isCenter: false,
      isShow: true,
      timeInt: null,
      iconMap: {
        1: 'icon-success',
        2: 'icon-error',
        3: 'icon-loading'
      }
    }
  },
  methods: {},
  watch: {
    'options.For': {
      handler (val) {
        if ([1, 2, 3, 4, 5, 6].includes(val)) {
          this.isCenter = false
        } else {
          this.isCenter = true
        }
      },
      immediate: true
    },
    'options.Type': {
      handler (val) {
        this.iconClass = this.iconMap[val]
      },
      immediate: true
    },
    'options.AutoClose': {
      handler (val) {
        clearTimeout(this.timeInt)
        let time = this.options.AutoClose > 0 ? this.options.AutoClose : 1
        this.timeInt = setTimeout(
          this.destroy,
          +time * 1000
        )
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
.message-popper {
    min-width: calc-attr(240);
    max-width: calc-attr(480);
    padding: calc-attr(17) calc-attr(20);
    background: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    color: rgba(255, 255, 255, 1);
    font-size: calc-attr(16);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    &[data-for="0"] {
        padding: calc-attr(9) calc-attr(20);
    }
    .message-box {
        word-break: break-word;
    }
    i {
        width: calc-attr(24);
        height: calc-attr(24);
        margin-right: calc-attr(13);
        flex-shrink: 0;
    }
    &.center-popper {
        position: absolute;
        left: 50% !important;
        top: 50% !important;
        bottom: auto !important;
        transform: translate(-50%, -50%) !important;
    }
    &.icon-success {
        i {
            // &:after {
            background: rgba(0, 0, 0, 0.7)
                url("~@/assets/images/message-success.png") no-repeat center;
            background-size: 100%;
            // }
        }
    }
    &.icon-loading {
        i {
            background: rgba(0, 0, 0, 0.7)
                url("~@/assets/images/message-load.png") no-repeat center;
            background-size: 100%;
        }
    }
    &.icon-error {
        i {
            background: rgba(0, 0, 0, 0.7)
                url("~@/assets/images/message-error.png") no-repeat center;
            background-size: 100%;
        }
    }
}
</style>
