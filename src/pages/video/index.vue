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
import IgbPagesDepositComponent from '../modal/deposit/index.vue'
import IgbLayoutFooterComponent from '../../layout/footer.vue'
export default {
  name: 'IgbPagesVideoComponent',
  components: {
    'igb-footer': IgbLayoutFooterComponent
  },
  data () {
    return {
      close: true,
      plan: 70
    }
  },
  mounted () {
    this.igbModal$({
      visible: true,
      width: 800,
      wrapClassName: 'deposit-modal',
      componentName: IgbPagesDepositComponent,
      params: {}
    })
  },
  methods: {
    closeHandller () {
      this.close = false
    },
    hideVideoHandller () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-pages-video {
    background: rgba(17, 26, 39, 1);

    .video-main {
        width: 100%;
        height: 100vh;
        background: rgba(34, 34, 55, .7);
        box-shadow: 0px calc-attr(3) calc-attr(6) rgba(0, 0, 0, 0.5);
        padding-top: calc-attr(34);
        padding-bottom:calc-attr(109);

        .header {
            width: calc(100% - 42px - 37px);
            height: calc-attr(28);
            margin: 0 auto;
            display: flex;
            align-items: center;

            div {

                &:first-child {
                    font-size: calc-attr(20);
                    font-weight: 500;
                    color: rgba(255, 255, 255, 1);
                }

                &:last-child {
                    margin-left: auto;
                    display: flex;
                    align-items: center;

                    span {
                        font-size: calc-attr(18);
                        font-weight: 500;
                        color: rgba(255, 255, 255, .6);

                        &:nth-child(2) {
                            margin: calc-attr(0) calc-attr(18);
                        }
                    }

                    &.right-one {
                        .icon-close {
                            display: block;
                            width: calc-attr(16);
                            height: calc-attr(16);
                            background: url("../../assets/images/video-close.png") no-repeat center;
                            background-size: 100%;
                            margin-left: calc-attr(24);
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
                            width: calc-attr(24);
                            height: calc-attr(12);
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
            top: calc-attr(394);
            left: 0px;
            text-align: center;

            p {
                height: calc-attr(22);
                line-height: calc-attr(22);
                font-size: calc-attr(16);
                font-weight: 400;
                color: rgba(255, 255, 255, .8);
                margin: calc-attr(13) 0px 0px 0px;
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
                    width: calc-attr(490) !important;
                }

                .volume-controller {

                    .contr-vom {
                        margin-left: calc-attr(279) !important;
                    }
                }

                .song-controller {
                    margin-left: calc-attr(239) !important;
                }

                .song-switch {
                    margin-left: calc-attr(70);
                }
            }
        }
    }
}
</style>
