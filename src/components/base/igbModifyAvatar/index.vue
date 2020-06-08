<template>
<div class="igb-modify-avatar-base-component">
    <div class="igb-avatar-info" v-if="!isModify">
        <div class="avatar">
            <img src="../../../assets/images/avatar.jpg" />
        </div>
        <a-button ghost @click="modifyHandller();">修改头像</a-button>
    </div>
    <div class="igb-avatar-modify" v-if="isModify">
        <div class="operation">
            <div class="avatar">
                <img src="../../../assets/images/avatar.jpg" />
            </div>
            <div class="info">
                <a-button type="primary" size="small" ghost>上传照片</a-button>
                <div>
                    <p>支持JPG、GIF、PNG格式</p>
                    <a-button type="primary" size="small" @click="saveHandller();">保存</a-button>
                    <a-button ghost size="small" @click="cancelHandller();">取消</a-button>
                </div>
            </div>
        </div>
        <div class="custom-avatar-list">
            <h3>推荐头像</h3>
            <ul>
                <li>
                    <img src="../../../assets/images/card1.png" />
                </li>
                <li>
                    <img src="../../../assets/images/card2.png" />
                </li>
                <li>
                    <img src="../../../assets/images/card3.png" />
                </li>
                <li>
                    <img src="../../../assets/images/card4.png" />
                </li>
                <li>
                    <img src="../../../assets/images/card5.png" />
                </li>
                <li>
                    <img src="../../../assets/images/card6.png" />
                </li>
                <li>
                    <img src="../../../assets/images/card7.png" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
                <li>
                    <img src="../../../assets/images/avatar.jpg" />
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'IgbModifyAvatarBaseComponent',
  data () {
    return {
      isModify: false
    }
  },
  methods: {
    /**
         * 修改頭像按鈕回調事件
         */
    modifyHandller () {
      this.isModify = true
      this.$emit('modify', {
        isModify: this.isModify
      })
    },
    /**
         * 保存按鈕回調事件
         */
    saveHandller () {
      this.isModify = false
      this.$emit('save', {
        isModify: this.isModify
      })
    },
    /**
         * 取消按鈕回調事件
         */
    cancelHandller () {
      this.isModify = false
      this.$emit('cancel', {
        isModify: this.isModify
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/ddd/mixin.scss";

.igb-modify-avatar-base-component {
    .igb-avatar-info {
        text-align: center;

        .avatar {
            padding-bottom: calc-attr(17);

            img {
                width: calc-attr(98);
                height: calc-attr(98);
                background: rgba(0, 0, 0, 0);
                border: 2px solid rgba(255, 255, 255, 0.10196078431372549);
                border-radius: 65px;
            }
        }

        .ant-btn {
            height: calc-attr(28);
            padding-left: calc-attr(20);
            padding-right: calc-attr(20);
            >>>span{
                font-size: calc-attr(14);
            }
        }
    }

    .igb-avatar-modify {
        width: 100%;
        height: calc-attr(334);
        background: rgba(0, 0, 0, .1);
        border: 1px solid rgba(255, 255, 255, .1);
        border-radius: 4px;
        overflow: hidden;

        .operation {
            display: flex;
            align-items: center;
            width: 90%;
            height: calc-attr(130);
            margin: 0 auto;
            border-bottom: 1px solid rgba(255, 255, 255, .05);

            .avatar {
                img {
                    width: calc-attr(88);
                    height: calc-attr(88);
                    background: rgba(0, 0, 0, .1);
                    border: 1px solid rgba(255, 255, 255, .1);
                    border-radius: 44px;
                }
            }

            .info {
                flex: 1;
                padding-left: calc-attr(20);

                >.ant-btn {
                    border-radius: 4px;
                    padding-left: calc-attr(10);
                    padding-right: calc-attr(10);
                    margin-top: calc-attr(10);

                    &:hover,
                    &:focus {
                        background: none !important;
                    }

                    &:active,
                    &.active {
                        background: none;
                    }
                }

                div {

                    padding-top: calc-attr(12);

                    p {
                        font-size: calc-attr(12);
                        font-family: 'PingFang-SC-Regular';
                        font-weight: 400;
                        color: rgba(255, 255, 255, .5);
                        float: left;
                    }

                    .ant-btn {
                        float: right;
                        padding-left: calc-attr(15);
                        padding-right: calc-attr(15);
                        margin-left: calc-attr(20);
                        margin-top: calc-attr(-4);
                    }
                }
            }
        }

        .custom-avatar-list {
            width: 90%;
            margin: 0 auto;

            h3 {
                font-size: calc-attr(14);
                font-family: 'PingFang-SC-Regular';
                font-weight: 400;
                color: rgba(255, 255, 255, .7);
                margin: 0px;
                padding: calc-attr(10) 0px;
            }

            ul {
                height: calc-attr(140);
                list-style: none;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                overflow-x: hidden;
                overflow-y: auto;
                @include scroll-bar(4px);

                li {
                    cursor: pointer;
                    width: 14%;
                    text-align: center;
                    margin-bottom: calc-attr(10);

                    img {
                        width: calc-attr(60);
                        height: calc-attr(60);
                        background: rgba(0, 0, 0, 1);
                        border: 1px solid rgba(255, 255, 255, 0.10196078431372549);
                        border-radius: 65px;
                    }
                }
            }
        }
    }
}
</style>
