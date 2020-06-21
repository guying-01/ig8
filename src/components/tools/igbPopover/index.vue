<!--
 * @Author: gy
 * @Date: 2020-06-20 10:02:00
 * @LastEditors  : gy
 * @LastEditTime : 2020-06-21 22:47:21
-->
<template>
    <div class="popover-popper" :class="[isCenter ? 'center-popper' : '']">
        <div class="popover-wrap" :data-for="options.For">
            <div class="message-box">
                <div>
                    {{ options.Text }}
                </div>
                <i
                    class="icon-close"
                    v-if="options.CanClose == 1"
                    @click="destroy"
                ></i>
            </div>
            <div class="btn" @click="destroy" v-if="options.IKnow == 1">我知道了</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'IgbPopoverToolComponent',
  data () {
    return {
      isCenter: false,
      isShow: true,
      timeInt: null
    }
  },
  methods: {
  },
  watch: {
    'options.For': {
      handler (val) {
        if ([0, 1, 2, 3].includes(val)) {
          this.isCenter = false
        } else {
          this.isCenter = true
        }
      },
      immediate: true
    },
    'options.AutoClose': {
      handler (val) {
        clearTimeout(this.timeInt)
        if (this.options.AutoClose > 0 && this.options.IKnow != 1) {
          this.timeInt = setTimeout(this.destroy, +this.options.AutoClose * 1000)
        }
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
.popover-popper {
    width: calc-attr(396);
    position: absolute;
    &.center-popper {
        left: 50% !important;
        top: 50% !important;
        bottom: auto !important;
        transform: translate(-50%, -50%) !important;
    }
    font-size: calc-attr(14);

    z-index: 99999;

    .popover-wrap {
        padding: calc-attr(33) calc-attr(20) calc-attr(20);
        position: relative;
        background: linear-gradient(
            249deg,
            rgba(69, 96, 194, 0.9) 0%,
            rgba(201, 77, 243, 0.9) 100%
        );
        border-radius: 20px 20px 20px 0;
        &:after {
            content: "";
            display: block;
            clear: both;
        }
        &[data-for="2"] {
            border-radius: 20px 20px 0 20px;

            &:before {
                content: "";
                display: block;
                position: absolute;
                bottom: -9px;
                right: 0;
                left: auto;
                border-width: 10px 0 0 10px;
                border-style: solid;
                border-color: #5857ba transparent;
                width: 0;
                height: 0;
                z-index: -1;
            }
        }
        &:before {
            content: "";
            display: block;
            position: absolute;
            bottom: -9px;
            left: 0;
            border-width: 0 0 10px 10px;
            border-style: solid;
            border-color: transparent #b84ce3;
            width: 0;
            height: 0;
            z-index: -1;
        }
        .message-box {
            color: #fff;
            display: flex;
            justify-content: space-between;
            i {
                width: calc-attr(19);
                height: calc-attr(19);
                background: url("../../../assets/images/icon-modal-close.png")
                    no-repeat center;
                background-size: 100%;
                flex-shrink: 0;
                cursor: pointer;
            }
        }

        .btn {
            cursor: pointer;
            float: right;
            margin-top: calc-attr(19);
            width: calc-attr(70);
            height: calc-attr(20);
            border: 1px solid rgba(255, 255, 255, 1);
            // width:56px;
            // height:20px;
            font-size: calc-attr(14);

            font-size: 14px;
            font-weight: 400;
            line-height: calc-attr(20);
            color: rgba(255, 255, 255, 1);
            border-radius: 20px;
            text-align: center;
            opacity: 1;
        }
    }
}
</style>
