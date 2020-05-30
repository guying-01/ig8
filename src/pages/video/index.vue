<template>
<div class="igb-pages-video">
    <div class="video-main">
        <div class="header">
            <div>准备播放...</div>
            <div v-if="close" :class="{'right-one':close}">
                <span>15秒</span>
                <span>|</span>
                <span>VIP可关闭广告</span>
                <i class="icon-close" @click="closeHandller"></i>
            </div>
            <div v-if="!close" :class="{'right-two':!close}">
                <i class="icon-close" @click="hideVideoHandller"></i>
            </div>
        </div>
        <div class="vide-loader" v-if="!close">
            <img src="../../assets/images/icon-progress.png" width="126.8" height="126.8" />
            <p>正在读取缓存中...</p>
        </div>
    </div>
    <igb-footer class="footer"></igb-footer>
</div>
</template>

<script>
import IgbPagesDepositComponent from "../modal/deposit/index.vue";
import IgbLayoutFooterComponent from "../../layout/footer.vue";
export default {
    name: "IgbPagesVideoComponent",
    components: {
        'igb-footer': IgbLayoutFooterComponent
    },
    data() {
        return {
            close: true,
            plan: 70
        }
    },
    mounted() {
        this.igbModal$({
            visible: true,
            width: 800,
            wrapClassName: "deposit-modal",
            componentName: IgbPagesDepositComponent,
            params: {}
        });
    },
    methods: {
        closeHandller() {
            this.close = false;
        },
        hideVideoHandller() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
.igb-pages-video {
    background: rgba(17, 26, 39, 1);

    .video-main {
        width: 100%;
        height: calc(100vh - 111px);
        background: rgba(34, 34, 55, .7);
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
        padding-top: 34px;

        .header {
            width: calc(100% - 42px - 37px);
            height: 28px;
            margin: 0 auto;
            display: flex;
            align-items: center;

            div {

                &:first-child {
                    font-size: 20px;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 1);
                }

                &:last-child {
                    margin-left: auto;
                    display: flex;
                    align-items: center;

                    span {
                        font-size: 18px;
                        font-weight: 500;
                        color: rgba(255, 255, 255, .6);

                        &:nth-child(2) {
                            margin: 0px 18px;
                        }
                    }

                    &.right-one {
                        .icon-close {
                            display: block;
                            width: 16px;
                            height: 16px;
                            background: url("../../assets/images/video-close.png") no-repeat center;
                            background-size: 100%;
                            margin-left: 24px;
                            cursor: pointer;
                            opacity: .8;

                            &:hover {
                                opacity: 1;
                            }
                        }
                    }

                    &.right-two {
                        .icon-close {
                            display: block;
                            width: 24px;
                            height: 12px;
                            background: url("../../assets/images/video-hide.png") no-repeat center;
                            background-size: 100%;
                            cursor: pointer;
                            opacity: .8;

                            &:hover {
                                opacity: 1;
                            }
                        }
                    }

                }
            }
        }

        .vide-loader {
            width: 100%;
            position: fixed;
            top: 394px;
            left: 0px;
            text-align: center;

            p {
                height: 22px;
                line-height: 22px;
                font-size: 16px;
                font-weight: 400;
                color: rgba(255, 255, 255, .8);
                margin: 13px 0px 0px 0px;
                padding: 0px;
            }
        }
    }

    .footer {
        position: fixed;
        bottom: 0px;
        left: 0px;

    }

    >>>.igb-layout-footer {
        padding-left: 0px;

        .igb-audio-family-control-base-component {
            .foo-controller {
                .singer-info {
                    width: 490px !important;
                }

                .volume-controller {

                    .contr-vom {
                        margin-left: 279px !important;
                    }
                }

                .song-controller {
                    margin-left: 239px !important;
                }

                .song-switch {
                    margin-left: 70px;
                }
            }
        }
    }
}
</style>
