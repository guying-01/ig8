<template>
<div class="igb-pages-share-two-modal">
    <h1 class="title">分享歌单赚K币</h1>
    <div class="igb-pages-share-main">
        <div class="msg">
            <p>分享歌单并通过审核后，将获得10个K币！</p>
            <p>K币可在购买会员时做抵扣。</p>
        </div>
        <div class="form-list">
            <div class="form-list-item">
                <p>简介</p>
                <div class="form-list-item-control">
                    <textarea name="des" :class="{'input-text':params.des}" v-model="params.des" placeholder="请简要描述一下您的歌单吧！（限100字）"></textarea>
                </div>
            </div>
            <div class="form-list-item">
                <p>标签</p>
                <div class="form-list-item-control">
                    <a-input name="tag" v-model="params.tag" :class="{'input-text':params.tag || params.tagFocus}" @focus="inputFocusHandller($event)" @blur="inputBlurHandller($event)" placeholder="请输入标签名称">
                        <template slot="addonBefore">
                            <span>生日<i></i></span>
                            <span>革命</span>

                            <p class="line"></p>
                        </template>
                    </a-input>
                    <div class="tag-list">
                        <span class="current">生日</span>
                        <span class="current">革命</span>
                        <span>军旅</span>
                        <span>对唱</span>
                        <span>其他</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="igb-pages-share-footer">
        <span>第2/2步</span>
        <button @click="nextHandller('ok');">分享</button>
    </div>
</div>
</template>

<script>
export default {
    name: "IgbPagesShareTwoModalComponent",
    data() {
        return {
            params: {
                des: "",
                desError: false,
                tag: "",
                tagFocus: false,
                tagError: false
            }
        }
    },
    methods: {
        inputFocusHandller(event) {
            this.params.tagFocus = true;
        },
        inputBlurHandller(event) {
            this.params.tagFocus = false;
        },
        nextHandller(page) {
            this.$emit('next', {
                key: page,
                value: true
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.igb-pages-share-two-modal {
    cursor: default;
    h1 {
        width: 100%;
        height: 144px;
        line-height: 144px;
        text-align: center;

        font-size: 36px;
        font-weight: 600;
        color: rgba(255, 128, 66, 1);
    }

    .igb-pages-share-main {
        p {
            padding: 0px;
            margin: 0px;
        }

        .msg {
            padding-top: 32px;

            p {
                text-align: center;

                font-size: 18px;
                font-weight: 400;
                color: rgba(248, 72, 72, 1);
            }
        }

        .form-list {
            padding-top: 33px;
            width: 640px;
            margin: 0 auto;

            .form-list-item {
                p {
                    font-size: 16px;
                    font-weight: 500;
                    color: rgba(255, 255, 255, .7);
                }

                &:first-child {
                    .form-list-item-control {
                        textarea {
                            outline: none;
                            border: 1px solid rgba(255, 255, 255, 0.10196078431372549);
                            width: 100%;
                            height: 162px;
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
                    }
                }

                &:last-child {
                    padding-top: 23px;

                    .form-list-item-control {
                        .ant-input {
                            height: 46px;
                        }

                        >>>.ant-input-group-wrapper {

                            &.input-text {
                                .ant-input-wrapper {

                                    .ant-input-group-addon,
                                    input {
                                        border: 1px solid rgba(255, 255, 255, 0.10196078431372549);
                                        background: transparent;
                                    }
                                }

                            }

                            .ant-input-wrapper {
                                .ant-input-group-addon {
                                    border: 1px solid rgba(255, 255, 255, 0.10196078431372549);
                                    background: rgba(0, 0, 0, 0.1);
                                    border-right: none !important;
                                    position: relative;

                                    span {
                                        display: inline-block;
                                        width: 59px;
                                        height: 24px;
                                        line-height: 24px;
                                        background: rgba(255, 128, 66, .2);
                                        border-radius: 4px;

                                        font-size: 14px;
                                        font-weight: 400;
                                        color: rgba(255, 128, 66, 1);

                                        cursor: pointer;

                                        i {
                                            display: inline-block;
                                            width: 8px;
                                            height: 8px;
                                            background: url("../../../assets/images/icon-small-close.png") no-repeat center;
                                            background-size: cover;
                                            margin-left: 6px;
                                        }
                                    }

                                    .line {
                                        position: absolute;
                                        right: 0px;
                                        top: 9px;
                                        width: 1px;
                                        height: 18px;
                                        border: 1px solid rgba(176, 178, 183, .5);
                                    }
                                }

                                input {
                                    border: 1px solid rgba(255, 255, 255, 0.10196078431372549);
                                    background: rgba(0, 0, 0, 0.1);
                                }
                            }

                            .ant-input {
                                border-left: none !important;
                            }
                        }

                        .tag-list {
                            padding-top: 10px;

                            span {
                                display: inline-block;

                                font-size: 14px;
                                font-weight: 400;
                                color: rgba(255, 255, 255, .5);

                                margin-right: 10px;

                                cursor: pointer;

                                &.current {
                                    width: 40px;
                                    height: 24px;
                                    line-height: 24px;
                                    border: 1px solid rgba(151, 92, 69, 1);
                                    border-radius: 4px;

                                    text-align: center;
                                    font-size: 14px;
                                    font-weight: 400;
                                    color: rgba(255, 128, 66, 1);

                                }
                            }
                        }
                    }
                }

                .form-list-item-control {
                    margin-top: 6px;

                }
            }
        }
    }

    .igb-pages-share-footer {
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 65px;

        span {
            font-size: 14px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.7);
            padding-right: 30px;
        }

        button {
            outline: none;
            border: none;
            width: 160px;
            height: 48px;
            background: linear-gradient(315deg,
                    rgba(255, 186, 0, 1) 0%,
                    rgba(255, 107, 88, 1) 100%);
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
            opacity: 1;
            border-radius: 24px;
            cursor: pointer;

            font-size: 14px;
            font-weight: 400;
            color: rgba(39, 50, 67, 1);

            &:hover {
                background: linear-gradient(315deg,
                        rgba(255, 197, 41, 1) 0%,
                        rgba(255, 125, 108, 1) 100%);
            }

            &:active {
                background: linear-gradient(315deg,
                        rgba(235, 173, 6, 1) 0%,
                        rgba(239, 99, 81, 1) 100%);
            }
        }
    }
}
</style>
