<!--
 * @Author: gy
 * @Date: 2020-06-20 10:02:00
 * @LastEditors: gy
 * @LastEditTime: 2020-06-20 10:35:31
-->
<template>
  <div class="popover-popper dialog-popper">
    <div class="popover-wrap">
      <div class="message-box">
        123321
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IgbPopoverToolComponent',
  data () {
    return {}
  },
  mounted () {
    // setTimeout(this.destroy, 3000)
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.dialog-popper {
    width: calc-attr(396);
    position: absolute;
    left: 50% !important;
    top: 50% !important;
    bottom: auto !important;
    transform: translate(-50%, -50%) !important;
    font-size: calc-attr(16);
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.49);
    border-radius: 4px;
    z-index: 99999;

    .popper-wrap {
        padding: calc-attr(33) calc-attr(20) calc-attr(20);
        position: relative;
        .icon-close {
            cursor: pointer;
            display: block;
            position: absolute;
            right: calc-attr(15);
            top: calc-attr(15);
            width: calc-attr(14);
            height: calc-attr(14);
            // background: rgba(0, 0, 0, 0.7) url("../images/icon-close.png")
            //     no-repeat center;
            background-size: 100%;
        }
        .message-box {
            color: #fff;
            text-align: center;
        }

        .btn-box {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: calc-attr(25);
            .item-btn {
                cursor: pointer;

                border: 1px solid rgba(112, 112, 112, 1);
                border-radius: 16px;
                width: calc-attr(72);
                height: calc-attr(32);
                text-align: center;
                font-size: calc-attr(12);
                color: #fff;
                opacity: 0.7;
                margin-right: calc-attr(14);
                &.active {
                    color: #232c39;
                    opacity: 1;
                    border: none;
                    background: linear-gradient(
                        315deg,
                        rgba(255, 186, 0, 1) 0%,
                        rgba(255, 107, 88, 1) 100%
                    );
                    opacity: 1;
                    border-radius: 24px;
                }
            }
        }
    }
}
</style>
