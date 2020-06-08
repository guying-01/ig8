<template>
<div class="igb-pages-register-modal">
    <div class="form-list">
        <div class="form-list-item">
            <a-input class="form-list-item-input" autocomplete="off" data-tag="user-name" v-model="params.userName" placeholder="手机号或者邮箱" @blur="inputBlurHandller($event)" @input="inputChangeHandller($event)" allow-clear>
                <template slot="addonBefore">
                    <img src="../../../assets/images/form-user.png" width="21" height="22" />
                </template>
            </a-input>
            <div class="err" v-if="params.userNameError"><i></i>手机号字段为必填</div>
        </div>
        <div class="form-list-item">
            <a-input :type="userPassType" class="form-list-item-input" autocomplete="new-password" data-tag="user-pass" v-model="params.userPass" placeholder="密码不少于6位" @blur="inputBlurHandller($event)" @input="inputChangeHandller($event)" allow-clear>
                <template slot="addonBefore">
                    <img src="../../../assets/images/form-pass.png" width="18" height="22" />
                </template>
            </a-input>
            <div class="err" v-if="params.userPassError"><i></i>密码字段为必填</div>
        </div>
        <div class="form-list-item form-list-item-button">
            <button @click="clickHandller('captcha');">下一步</button>
        </div>
        <div class="form-list-item form-list-item-other">
            <span @click="clickHandller('login');">已有账号，点击登录</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'IgbPagesRegisterModalComponent',
  data () {
    return {
      params: {
        userName: '',
        userNameError: false,
        userPass: '',
        userPassType: 'text',
        userPassError: false
      }
    }
  },
  methods: {
    inputChangeHandller (event) {
      if (event.target.dataset.tag === 'user-name') {
        this.params.userNameError = this.params.userName.length === 0
      }

      if (event.target.dataset.tag === 'user-pass') {
        this.params.userPassError = this.params.userPass.length === 0
      }
    },
    inputBlurHandller (event) {
      if (event.target.dataset.tag === 'user-name') {
        this.params.userNameError = this.params.userName.length === 0
      }

      if (event.target.dataset.tag === 'user-pass') {
        this.params.userPassError = this.params.userPass.length === 0
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
.igb-pages-register-modal {
    .form-list {
        padding: 0 calc-attr(50);
        padding-top: calc-attr(131);
        // width: calc(100% - 100px);
        margin: 0 auto;

        .form-list-item {
            position: relative;
            padding: 0px 0px calc-attr(32.7);

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
                bottom: 0px;

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

            &.form-list-item-button,
            &.form-list-item-other {
                padding: 0px;
            }

            &.form-list-item-button {
                padding-top: calc-attr(39.3);
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
