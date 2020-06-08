<template>
<div class="igb-pages-deposit">
    <div class="my-info">
        <div class="header">
            <img src="../../../assets/images/touxiang.png" />
        </div>
        <div class="info">
            <h1>刘思琪</h1>
            <p>162 900 9999</p>
        </div>
    </div>

    <div class="my-pack">
        <div class="list">
            <div class="my-pack-item current">
                <h2>连续包年</h2>
                <h3><span>￥</span>178<span>每月13元</span></h3>
                <i class="icon-tuij"></i>
            </div>
            <div class="my-pack-item">
                <h2>连续包季</h2>
                <h3><span>￥</span>45<span>每月11元</span></h3>
                <i class="icon-tuij"></i>
            </div>
            <div class="my-pack-item">
                <h2>连续包月</h2>
                <h3><span>￥</span>30<span>每月3毛</span></h3>
                <i class="icon-tuij"></i>
            </div>
        </div>

        <p class="txt">
            <igb-check-box v-model="check"><span class="title">到期自动续费1年，可随时取消</span></igb-check-box>
        </p>
    </div>

    <div class="ply-box">
        <h2>扫码支付</h2>
        <div class="box">
            <div class="erweima">
                <img src="../../../assets/images/icon-erweima.png" />
            </div>
            <div class="info">
                <p><span>￥</span>179</p>
                <p>支付成功立即开通</p>
                <p>
                    <img src="../../../assets/images/icon-weixin.png" />
                    <img src="../../../assets/images/icon-zhifubao.png" />
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'IgbPagesDepositComponent',
  data () {
    return {
      check: true
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-pages-deposit {
    cursor: default;
    .my-info {
        display: flex;
        align-items: center;
        width: 100%;
        height: calc-attr(96);
        border-bottom: 1px solid rgba(255, 255, 255, .05);

        h1,
        p {
            margin: 0px;
            padding: 0px;
            padding-left: calc-attr(15) !important;
            padding-right: calc-attr(36);
            position: relative;
        }

        .header {
            padding-left: calc-attr(35);

            img {
                border: 2px solid rgba(67, 77, 94, 1);
                width: calc-attr(60);
                height: calc-attr(60);
                cursor: pointer;
                border-radius: 50%;

            }
        }

        .info {
            flex: 1;

            h1 {
                font-size: calc-attr(18);
                font-weight: 600;
                color: #fff;
            }

            p {

                font-size: calc-attr(12);
                font-weight: 400;
                color: rgba(255, 255, 255, .5);
            }
        }
    }

    .my-pack {
        width: 100%;
        height: calc-attr(199);
        background: rgba(39, 50, 70, .5);
        border-bottom: 1px solid rgba(255, 255, 255, .05);

        .list {
            padding-top: calc-attr(29);
            width: calc-attr(734);
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .my-pack-item {
                width: calc(33.33% - 13px);
                height: calc-attr(120);

                background: rgba(255, 255, 255, .05);
                border-radius: 4px;
                position: relative;

                cursor: pointer;

                .icon-tuij {
                    display: none;
                }

                &:hover {
                    background: rgba(255, 255, 255, .1);
                }

                &.current {
                    background: linear-gradient(225deg, rgba(255, 185, 1, 1) 0%, rgba(255, 108, 87, 1) 100%);

                    h2 {
                        color: rgba(47, 58, 77, 1);
                    }

                    h3 {
                        color: rgba(47, 58, 77, 1);

                        span {
                            font-size: calc-attr(17);
                            color: rgba(47, 58, 77, 1) !important;
                        }
                    }
                }

                &.current {

                    // background-color: linear-gradient(225deg, rgba(255, 185, 1, 1) 0%, rgba(255, 108, 87, 1) 100%) !important;
                    // background-image: url("../../../assets/images/float-tuijian.png");
                    // background-repeat: no-repeat;
                    // background-size: 57.55px 53.41px;
                    .icon-tuij {
                        display: block;
                        width: calc-attr(57.55);
                        height: calc-attr(53.41);
                        background-image: url("../../../assets/images/float-tuijian.png");
                        background-repeat: no-repeat;
                        background-size: calc-attr(57.55) calc-attr(53.41);
                        position: absolute;
                        top: 0px;
                        left: 0px;
                    }
                }

                &:last-child {
                    margin-right: 0px;
                }

                h2,
                h3 {
                    padding: 0px;
                    margin: 0px;
                }

                h2 {
                    font-size: calc-attr(18);
                    font-weight: 500;
                    color: rgba(255, 255, 255, 1);
                    margin-top: calc-attr(25);
                    margin-left: calc-attr(26);
                }

                h3 {
                    font-size: calc-attr(30);
                    font-weight: 600;
                    color: rgba(255, 128, 66, 1);
                    margin-top: calc-attr(6);
                    margin-left: calc-attr(26);
                    position: relative;

                    span {
                        font-size: calc-attr(16);

                        &:last-child {
                            font-size: calc-attr(12) !important;
                            color: rgba(255, 255, 255, .7);
                            position: absolute;
                            bottom: calc-attr(8);
                            right: 0px;
                            padding-right: calc-attr(24);
                        }
                    }
                }
            }
        }

        .txt {
            width: calc-attr(734);
            margin: calc-attr(15) auto auto auto;
            .title{
                font-size: calc-attr(12);
            }
        }

    }

    .ply-box {
        padding-top: calc-attr(15);
        width: calc-attr(734);
        margin: 0 auto;

        h2,
        p {
            padding: 0px;
            margin: 0px;
        }

        h2 {
            font-size: calc-attr(12);
            font-weight: 400;
            color: rgba(255, 255, 255, .8);
            padding-bottom: calc-attr(6);
        }

        .box {
            width: 100%;
            height: calc-attr(158);
            border: 1px solid rgba(213, 213, 213, .1);
            border-radius: 4px;

            display: flex;
            align-items: center;

            .erweima {
                width: 50%;
                text-align: right;

                img {
                    width: calc-attr(120);
                    height: calc-attr(120);
                }
            }

            .info {
                width: 50%;
                padding-left: calc-attr(15) !important;

                p {
                    &:first-child {
                        font-size: calc-attr(24);
                        font-weight: 600;
                        color: rgba(255, 128, 66, 1);
                        position: relative;

                        span {
                            font-size: calc-attr(18);
                            font-weight: 400 !important;
                        }
                    }

                    &:nth-child(2) {
                        font-size: calc-attr(12);
                        font-weight: 400;
                        color: rgba(255, 255, 255, .7);
                    }

                    &:last-child {
                        padding-top: calc-attr(14) !important;

                        img {
                            width: calc-attr(22);
                            height: calc-attr(22);
                        }
                    }
                }
            }
        }
    }
}
</style>
