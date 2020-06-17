<template>
<div class="igb-pages-user">
    <igb-page-main title="设置个人信息">
        <template slot="main">
            <div class="main">
                <div class="form-list">
                    <div class="form-list-item form-list-item-lig avatar-item">
                        <div v-if="avatarSwitch">修改头像</div>
                        <div>
                            <igb-modify-avatar @modify="avatarModifyHandller" @save="avatarSaveHandller" @cancel="avatarCancelHandller"></igb-modify-avatar>
                        </div>
                    </div>
                    <div class="form-list-item">
                        <div class="title">用户类型</div>
                        <div>
                            <igb-radio-block :dataSource="userTypeData"></igb-radio-block>
                        </div>
                    </div>
                    <div class="form-list-item">
                        <div class="title">会所名称</div>
                        <div>
                            <input type="text" name="clubName" autocomplete="off" :class="{'input-text':params.clubName,'input-error':params.clubNameError}" v-model="params.clubName" @input="inputChange($event)" @blur="inputBlurChange($event)" placeholder="请填写会所名称" />
                            <div class="err" v-if="params.clubNameError"><i></i>会所名称字段为必填项</div>
                        </div>
                    </div>
                    <div class="form-list-item">
                        <div class="title">订座电话</div>
                        <div>
                            <input type="text" name="phone" autocomplete="off" :class="{'input-text':params.phone,'input-error':params.phoneError}" v-model="params.phone" @input="inputChange($event)" @blur="inputBlurChange($event)" placeholder="请填写订座电话" />
                            <div class="err" v-if="params.phoneError"><i></i>订座电话字段为必填项</div>
                        </div>
                    </div>
                    <div class="form-list-item form-list-item-lig">
                        <div class="title">会所介绍</div>
                        <div>
                            <textarea name="clibDes" :class="{'input-text':params.clibDes}" v-model="params.clibDes" placeholder="请填写会所介绍"></textarea>
                            <div class="des">客人将在点歌界面的用户信息页面中看到此介绍，限100字。</div>
                        </div>
                    </div>
                    <div class="form-list-item form-list-item-lig">
                        <div class="title">背景照片</div>
                        <div>
                            <igb-upload></igb-upload>
                            <div class="des">设置一张广告插图，客人在切歌的时候或者缓冲的时候好会在电视上看到它。</div>
                        </div>
                    </div>
                    <div class="form-list-item btn-item">
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div>
                            <span class="btn btn-back">返回</span>
                            <span class="btn btn-save">保存</span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </igb-page-main>
</div>
</template>

<script>
export default {
  name: 'IgbPagesUserComponent',
  data () {
    return {
      params: {
        userType: '',
        clubName: '',
        clubNameError: false,
        phone: '',
        phoneError: false,
        clibDes: '',
        bg: ''
      },
      userTypeData: [{
        value: 0,
        label: '家庭用户',
        check: true
      },
      {
        value: 1,
        label: '商业用户',
        check: false
      }
      ],
      avatarSwitch: false

    }
  },
  methods: {
    inputChange (event) {
      if (event.target.name === 'clubName') {
        this.params.clubNameError = this.params.clubName.length === 0
      }

      if (event.target.name === 'phone') {
        this.params.phoneError = this.params.phone.length === 0
      }
    },
    inputBlurChange (event) {
      if (event.target.name === 'clubName') {
        this.params.clubNameError = this.params.clubName.length === 0
      }

      if (event.target.name === 'phone') {
        this.params.phoneError = this.params.phone.length === 0
      }
    },
    /**
         * 頭像修改回調事件
         */
    avatarModifyHandller (event) {
      this.avatarSwitch = event.isModify
    },
    /**
         * 頭像保存回調事件
         */
    avatarSaveHandller (event) {
      this.avatarSwitch = event.isModify
    },
    /**
         * 頭像取消回調事件
         */
    avatarCancelHandller (event) {
      this.avatarSwitch = event.isModify
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-pages-user {
    .main {
        width: calc-attr(660);
        margin: 0 auto;

        .form-list {
            padding-top: calc-attr(72);
            .avatar-item{
                padding-bottom:calc-attr(46);
            };
            .btn-item{
                padding-bottom:calc-attr(134);
            };
            .form-list-item {
                display: flex;
                padding-bottom:calc-attr(29);
                .title{
                  opacity: 0.7;
                }
                &.form-list-item-lig {
                    align-items: flex-start;

                    >div {
                        &:first-child {
                            padding-top: 10px;
                        }
                    }
                }

                >div {
                    &:first-child {
                        font-size: 14px;
                        font-family: 'PingFang-SC-Regular';
                        font-weight: 400;
                        color: rgba(255, 255, 255, .9);
                        padding-top: 8px;
                    }

                    &:last-child {
                        padding-left: 24px;
                        flex: 1;

                        input,
                        textarea {
                            outline: none;
                            border: 1px solid rgba(255, 255, 255, 0.10196078431372549);
                            width: 100%;
                            height: 36px;
                            line-height: 36px;
                            background: rgba(0, 0, 0, 0.1);
                            border-radius: 4px;

                            font-size: 14px;
                            color: rgba(255, 255, 255, 1);

                            text-indent: .9em;

                            &:focus,
                            &.input-text {
                                border: 1px solid rgba(255, 255, 255, 0.10196078431372549);
                                background: transparent;
                            }

                            &.input-error {
                                border: 1px solid rgba(255, 75, 75, 1);
                                background: transparent;
                            }

                            &::-webkit-input-placeholder {
                                color: rgba(255, 255, 255, .3);
                            }
                        }

                        textarea {
                            height: 92px;
                        }

                        .err {
                            display: flex;
                            align-items: center;
                            height: 20px;
                            line-height: 20px;
                            margin-top: 8px;

                            i {
                                width: 14px;
                                height: 14px;
                                background: url("../../assets/images/form-error.png") no-repeat center;
                                background-size: 100%;
                                margin-right: 9px;
                            }

                            font-size:14px;
                            font-weight:400;
                            color:rgba(255, 75, 75, 1);
                        }

                        .des {
                            padding-top: 10px;
                            font-size: 12px;
                            font-family: 'PingFang-SC-Regular';
                            font-weight: 400;
                            color: rgba(255, 255, 255, .5);
                        }

                        .btn {
                            display: inline-block;
                            margin-right: 20px;
                            width: 108px;
                            height: 36px;
                            line-height: 36px;
                            text-align: center;
                            border-radius: 30px;
                            cursor: pointer;

                            &.btn-back {
                                border: 1px solid rgba(255, 255, 255, .3);
                                border-radius: 30px;
                                font-size: 14px;
                                font-weight: 400;
                                color: rgba(255, 255, 255, .7);

                                &:hover {
                                    background: rgba(253, 129, 74, 0.33);
                                    border: 1px solid rgba(255, 139, 53, .3);
                                    color: rgba(255, 139, 53, 1);
                                }

                                &:active {
                                    background: rgba(214, 105, 23, 0.33);
                                    border: 1px solid rgba(214, 105, 23, .3);
                                    color: rgba(214, 105, 23, 1);
                                }
                            }

                            &.btn-save {
                                background: linear-gradient(315deg, rgba(255, 186, 0, 1) 0%, rgba(255, 107, 88, 1) 100%);
                                border-radius: 30px;
                                font-size: 14px;
                                font-weight: 400;
                                color: rgba(34, 42, 55, 1);

                                &:hover {
                                    background: linear-gradient(315deg, rgba(255, 197, 41, 1) 0%, rgba(255, 125, 108, 1) 100%);
                                    color: rgba(47, 58, 77, 1);
                                }

                                &:active {
                                    background: linear-gradient(315deg, rgba(235, 173, 6, 1) 0%, rgba(239, 99, 81, 1) 100%);
                                    color: rgba(47, 58, 77, 1);
                                }

                            }
                        }

                    }
                }
            }
        }

    }
}
</style>
