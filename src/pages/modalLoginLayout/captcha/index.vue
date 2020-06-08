<template>
<div class="igb-pages-captcha-modal">
    <div class="form-list">
        <div class="form-list-item form-list-title">
            我们已向您发送了验证码
        </div>
        <div class="form-list-item">
            <a-input class="form-list-item-input" autocomplete="off" data-tag="user-code" v-model="params.code" placeholder="请输入验证码" @blur="inputBlurHandller($event)" @input="inputChangeHandller($event)">
                <template slot="addonBefore">
                    <img src="../../../assets/images/form-code.png" width="18" height="22" />
                </template>
                <template slot="addonAfter">
                    <span>重新获取</span>
                </template>
            </a-input>
            <div class="err" v-if="params.codeError"><i></i>验证码字段为必填</div>
        </div>
        <div class="form-list-item form-list-item-button">
            <button @click="clickHandller('ok');">注册</button>
        </div>
        <div class="form-list-item form-list-item-other">
            <span @click="clickHandller('login');">已有账号，点击登录</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'IgbPagesCaptchaModalComponent',
  data () {
    return {
      params: {
        code: '',
        codeError: false
      }
    }
  },
  methods: {
    inputChangeHandller (event) {
      if (event.target.dataset.tag === 'user-code') {
        this.params.codeError = this.params.code.length === 0
      }
    },
    inputBlurHandller (event) {
      if (event.target.dataset.tag === 'user-code') {
        this.params.codeError = this.params.code.length === 0
      }
    },
    clickHandller (page) {
      this.$emit('next', {
        key: page,
        value: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-pages-captcha-modal {
    .form-list {
        padding: 0 calc-attr(50);
        padding-top: calc-attr(164);
        // width: calc(100% - 100px);
        margin: 0 auto;

        .form-list-item {
            position: relative;
            padding: calc-attr(18) 0px;

            &:first-child {
                padding-top: 0px;
            }

            .err {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                height: calc-attr(20);
                line-height: calc-attr(20);
                margin-top: calc-attr(8);
                position: absolute;
                right: 0px;
                bottom: calc-attr(-15);

                i {
                    flex: 1;
                    width: calc-attr(14);
                    height: calc-attr(14);
                    background: url("../../../assets/images/form-error.png") no-repeat center right;
                    background-size: calc-attr(14) calc-attr(14);
                    margin-right: calc-attr(9);
                }

                font-size:calc-attr(14);
                font-weight:400;
                color:rgba(255, 75, 75, 1);
            }

            .ant-input-affix-wrapper {
                .ant-input:not(:last-child) {
                    padding: 0px !important;
                }
            }

            .auto-login {
                margin-top: calc-attr(11);
            }

            &.form-list-title {
                font-size: calc-attr(14);
                font-weight: 400;
                color: rgba(255, 255, 255, .3);
                padding-bottom: calc-attr(11);
            }

            &.form-list-item-button,
            &.form-list-item-other {
                padding: 0px;
            }

            &.form-list-item-button {
                padding-top: calc-attr(51);
            }

            &.form-list-item-other {
                padding-top: calc-attr(28);
                font-size: calc-attr(16);
                font-weight: 400;
                color: rgba(255, 255, 255, .5);
                text-align: center;

                span {
                    cursor: pointer;

                    &:hover {
                        color: rgba(255, 255, 255, .7);
                    }
                }
            }

            button {
                outline: none;
                border: none;
                width: calc-attr(320);
                height: calc-attr(48);
                background: linear-gradient(315deg, rgba(255, 186, 0, 1) 0%, rgba(255, 107, 88, 1) 100%);
                box-shadow: 0px calc-attr(3) calc-attr(6) rgba(0, 0, 0, 0.16);
                opacity: 1;
                border-radius: 24px;
                cursor: pointer;

                font-size: calc-attr(18);
                font-weight: 400;
                color: rgba(39, 50, 67, 1);

                &:hover {
                    background: linear-gradient(315deg, rgba(255, 197, 41, 1) 0%, rgba(255, 125, 108, 1) 100%);
                }

                &:active {
                    background: linear-gradient(315deg, rgba(235, 173, 6, 1) 0%, rgba(239, 99, 81, 1) 100%);
                }
            }
        }
    }
}
</style>
