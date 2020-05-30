<template>
<div class="igb-pages-forget-modal">
    <div class="form-list">
        <div class="form-list-item">
            <a-input class="form-list-item-input" autocomplete="off" data-tag="user-name" v-model="params.userName" placeholder="手机号或者邮箱" @blur="inputBlurHandller($event)" @input="inputChangeHandller($event)" allow-clear></a-input>
            <div class="err" v-if="params.userNameError"><i></i>手机号字段为必填</div>
        </div>
        <div class="form-list-item">
            <a-input :type="userPassType" class="form-list-item-input" autocomplete="off" data-tag="user-pass" v-model="params.userPass" placeholder="密码不少于6位" @focus="inputFocusHandller($event)" @blur="inputBlurHandller($event)" @input="inputChangeHandller($event)" allow-clear></a-input>
            <div class="err" v-if="params.userPassError"><i></i>密码字段为必填</div>
        </div>
        <div class="form-list-item">
            <a-input class="form-list-item-input" autocomplete="new-password" data-tag="user-code" v-model="params.code" placeholder="请输入验证码" @blur="inputBlurHandller($event)" @input="inputChangeHandller($event)">
                <template slot="addonAfter">
                    <span>获取验证码</span>
                </template>
            </a-input>
            <div class="err" v-if="params.codeError"><i></i>验证码字段为必填</div>
        </div>
        <div class="form-list-item form-list-item-button">
            <button>重设密码</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "IgbPagesForgetModalComponent",
    data() {
        return {
            params: {
                userName: "",
                userNameError: false,
                userPass: "",
                userPassType: "text",
                userPassError: false,
                code: "",
                codeError: false
            }
        }
    },
    methods: {
        inputChangeHandller(event) {
            if (event.target.dataset.tag === "user-name") {
                this.params.userNameError = this.params.userName.length === 0;
            }

            if (event.target.dataset.tag === "user-pass") {
                this.params.userPassError = this.params.userPass.length === 0;
            }

            if (event.target.dataset.tag === "user-code") {
                this.params.codeError = this.params.code.length === 0;
            }
        },
        inputBlurHandller(event) {
            if (event.target.dataset.tag === "user-name") {
                this.params.userNameError = this.params.userName.length === 0;
            }

            if (event.target.dataset.tag === "user-pass") {
                this.params.userPassError = this.params.userPass.length === 0;
            }

            if (event.target.dataset.tag === "user-code") {
                this.params.codeError = this.params.code.length === 0;
            }
        },
        inputFocusHandller(event) {
            this.params.userPassType = "password";
        }
    }
}
</script>

<style lang="scss" scoped>
.igb-pages-forget-modal {
    .form-list {
        padding-top: 131px;
        width: calc(100% - 100px);
        margin: 0 auto;

        .form-list-item {
            position: relative;
            padding: 0px 0px 32.7px 0px;

            &:first-child {
                padding-top: 0px;
            }


            .err {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                height: 20px;
                line-height: 20px;
                margin-top: 8px;
                position: absolute;
                right: 0px;
                bottom: 0px;

                i {
                    flex: 1;
                    width: 14px;
                    height: 14px;
                    background: url("../../../assets/images/form-error.png") no-repeat center right;
                    background-size: 14px 14px;
                    margin-right: 9px;
                }

                font-size:14px;
                font-weight:400;
                color:rgba(255, 75, 75, 1);
            }

            .ant-input-affix-wrapper {
                .ant-input:not(:last-child) {
                    padding: 0px !important;
                }
            }

            .auto-login {
                margin-top: 11px;
            }

            &.form-list-item-button,
            &.form-list-item-other {
                padding: 0px;
            }

            &.form-list-item-button {
                padding-top: 54.3px;
            }

            &.form-list-item-other {
                padding-top: 28px;
                font-size: 16px;
                font-weight: 400;
                color: rgba(255, 255, 255, .7);
                text-align: center;

                span {
                    cursor: pointer;

                    &:first-child {
                        padding-right: 15px;
                    }

                    &:last-child {
                        padding-left: 15px;
                    }
                }
            }

            button {
                outline: none;
                border: none;
                width: 320px;
                height: 48px;
                background: linear-gradient(315deg, rgba(255, 186, 0, 1) 0%, rgba(255, 107, 88, 1) 100%);
                box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
                opacity: 1;
                border-radius: 24px;
                cursor: pointer;

                font-size: 18px;
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
