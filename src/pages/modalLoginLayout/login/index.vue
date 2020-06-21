<template>
<div class="igb-pages-login-modal">
    <div class="form-list">
        <div class="form-list-item">
            <a-input class="form-list-item-input userName" type="text" data-tag="user-name" autocomplete="off" v-model="params.userName" placeholder="手机号或者邮箱" @blur="inputBlurHandller($event)" @input="inputChangeHandller($event)" allow-clear>
                <template slot="addonBefore">
                    <img src="../../../assets/images/form-user.png"  class="icon-img"/>
                </template>
            </a-input>
            <div class="err" v-if="params.userNameError"><i></i>手机号字段为必填</div>
        </div>
        <div class="form-list-item">
            <a-input :type="params.userPassType" class="form-list-item-input userPass" data-tag="user-pass" autocomplete="new-password" v-model="params.userPass" placeholder="密码不少于6位" @focus="inputFocusHandller($event)" @blur="inputBlurHandller($event)" @input="inputChangeHandller($event)" allow-clear>
                <template slot="addonBefore">
                    <img src="../../../assets/images/form-pass.png"  class="icon-img" />
                </template>
            </a-input>
            <div class="err" v-if="params.userPassError"><i></i>密码字段为必填</div>
            <p class="auto-login">
                <igb-check-box v-model="check">下次自动登录</igb-check-box>
            </p>
        </div>
        <div class="form-list-item form-list-item-button">
            <button @click="clickHandller('ok');">登录</button>
        </div>
        <div class="form-list-item form-list-item-other">
            <span @click="clickHandller('register');">立即注册</span>|<span @click="clickHandller('forget');">忘记密码</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'IgbPagesLoginModalComponent',
  data () {
    return {
      check: false,
      params: {
        userName: '',
        userNameError: false,
        userPass: '',
        userPassType: 'text',
        userPassError: false
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.params.userName = ''
      this.params.userPass = ''
    })
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
    inputFocusHandller (event) {
      if (event.target.dataset.tag === 'user-pass') {
        this.params.userPassType = 'password'
      }
    },
    clickHandller (page) {
      this.$emit('next', {
        key: page,
        value: true,
        userName: this.params.userName,
        userPass: this.params.userPass
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-pages-login-modal {
    .form-list {
        padding: 0 calc-attr(50);
        padding-top: calc-attr(131);
        // width: calc(100% - 100px);
        margin: 0 auto;

        .form-list-item {
            position: relative;
            padding: 0px;
            .icon-img{
                width:calc-attr(18);
                height:calc-attr(21);
            }
            &:first-child {
                padding-top: 0px;
                padding-bottom: calc-attr(32.7);
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
                    width: calc-attr(15);
                    height: calc-attr(15);
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
                margin-top: calc-attr(21);
                >>> .igb-checkbox-text {color: #BEC2C7;}
            }

            &.form-list-item-button,
            &.form-list-item-other {
                padding: 0px;
            }

            &.form-list-item-button {
                padding-top: calc-attr(60);
            }

            &.form-list-item-other {
                padding-top: calc-attr(27.9);
                font-size: calc-attr(16);
                font-weight: 400;
                color: rgba(255, 255, 255, .5);
                text-align: center;

                span {
                    cursor: pointer;

                    &:first-child {
                        padding-right: calc-attr(15);
                    }

                    &:last-child {
                        padding-left: calc-attr(15);
                    }

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
                box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
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
