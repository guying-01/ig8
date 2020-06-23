<template>
<div class="igb-pages-setting-login">
    <h2>登录设置</h2>

    <igb-line class="line"></igb-line>

    <div class="form-list">
        <div class="form-list-item">
            <div>自动登录：</div>
            <div>
                <p class="btn-switch" :class="{'btn-switch-on':sw,'btn-switch-off':!sw}" @click="btnSwitch"></p>
            </div>
        </div>
        <div class="form-list-item">
            <div>注册手机：</div>
            <div>
                <span class="phone">135****6767</span>
                <span class="reset-phone">更换手机号</span>
                <span class="btn" @click="goUserInfo">修改个人信息</span>
                <span class="btn" @click="changePassword">修改密码</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import IgbPagesModalLoginLayoutComponent from '@/pages/modalLoginLayout/index.vue'
export default {
  name: 'IgbPagesSettingLoginComponent',
  data () {
    return {
      sw: true,
      switchSize: false
    }
  },
  methods: {
    btnSwitch () {
      this.sw = !this.sw
    },
    goUserInfo () {
      this.$router.push('/pages/user/index')
    },
    changePassword () {
      this.igbModal$({
        visible: true,
        wrapClassName: 'login-modal pass-modal',
        // width: 420,
        componentName: IgbPagesModalLoginLayoutComponent,
        params: {
          page: 'forget'
        },
        okHandller: (options, close) => {
          let okResult = options.output.okResult
          if (okResult.key === 'ok') {
            close()
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-pages-setting-login {
    padding: 0 calc-attr(72.5);
    // width: calc(100% - 145px);
    margin: 0 auto;
    .line{
      margin-top:calc-attr(11);
    }
    h2 {
        height: calc-attr(22);
        line-height: calc-attr(22);
        font-size: calc-attr(16);
        font-family: 'PingFang-SC-Regular';
        color: rgba(255, 255, 255, .9);
        margin: calc-attr(44) auto auto auto;
        padding: 0px;
    }

    >>>.igb-line-base-component {
        border-left: none;
        border-right: none;
        border-bottom: none;
        border-top: 1px solid rgba(255, 255, 255, .1);
    }

    .form-list {
        .form-list-item {
            display: flex;
            align-items: center;

            &:first-child {
                height: calc-attr(20);
                line-height: calc-attr(20);
                margin-top: calc-attr(21);
            }

            &:last-child {
                height: calc-attr(32);
                line-height: calc-attr(32);
                margin-top: calc-attr(28);
            }

            >div {
                &:first-child {
                    font-size: calc-attr(14);
                    font-family: 'PingFang-SC-Regular';
                    font-weight: 400;
                    color: rgba(255, 255, 255, .9);
                }

                &:last-child {
                    padding-left: calc-attr(10);

                    p {
                        &.btn-switch {
                            width: calc-attr(36);
                            height: calc-attr(18);
                            margin: 0px;
                            padding: 0px;
                            cursor: pointer;
                            border-radius: 12px;

                            &.btn-switch-on {
                                background: url("../../../assets/images/p/btn-switch-on.png") no-repeat center;
                                background-size: calc-attr(36) calc-attr(18);

                                &:hover {
                                    box-shadow: 0px 0px calc-attr(18) rgba(255, 136, 56, 0.16);
                                    background: url("../../../assets/images/p/btn-switch-on-h.png") no-repeat center;
                                    background-size: calc-attr(36) calc-attr(18);
                                }
                            }

                            &.btn-switch-off {
                                background: url("../../../assets/images/p/btn-switch-off.png") no-repeat center;
                                background-size: calc-attr(36) calc-attr(18);

                                &:hover {
                                    box-shadow: 0px 0px calc-attr(18) rgba(255, 136, 56, 0.16);
                                    background: url("../../../assets/images/p/btn-switch-off-h.png") no-repeat center;
                                    background-size: calc-attr(36) calc-attr(18);
                                }
                            }
                        }
                    }

                    span {
                        margin-right: calc-attr(20);

                        &.phone {
                            font-size: calc-attr(16);
                            font-family: 'PingFang-SC-Regular';
                            color: rgba(255, 255, 255, 1);
                        }

                        &.reset-phone {
                            font-size: calc-attr(14);
                            font-family: 'PingFang-SC-Regular';
                            font-weight: 400;
                            color: rgba(0, 159, 244, .9);
                            cursor: pointer;
                        }

                        &.btn {
                            border: 1px solid rgba(255, 255, 255, .2);
                            border-radius: 17px;
                            padding: calc-attr(5) calc-attr(20);
                            font-size: calc-attr(14);
                            font-family: 'PingFang-SC-Regular';
                            font-weight: 400;
                            color: rgba(255, 255, 255, .8);
                            cursor: pointer;

                            &:hover {
                                border: 1px solid rgba(255, 139, 53, .3);
                                background: rgba(253, 129, 74, 0.33);
                                color: rgba(255, 139, 53, 1);
                            }

                            &:active {
                                background: rgba(214, 105, 23, 0.33);
                                border: 1px solid rgba(214, 105, 23, .3);
                                color: rgba(214, 105, 23, 1);
                                box-shadow: 0 0 0 calc-attr(3) rgba(214, 105, 23, .01) !important;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
