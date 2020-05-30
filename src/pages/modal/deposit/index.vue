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
            <igb-check-box v-model="check"><span style="font-size:12px !important">到期自动续费1年，可随时取消</span></igb-check-box>
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
    name: "IgbPagesDepositComponent",
    data() {
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
        height: 96px;
        border-bottom: 1px solid rgba(255, 255, 255, .05);

        h1,
        p {
            margin: 0px;
            padding: 0px;
            padding-left: 15px !important;
            padding-right: 36px;
            position: relative;
        }

        .header {
            padding-left: 35px;

            img {
                border: 2px solid rgba(67, 77, 94, 1);
                width: 60px;
                height: 60px;
                cursor: pointer;
                border-radius: 50%;

            }
        }

        .info {
            flex: 1;

            h1 {
                font-size: 18px;
                font-weight: 600;
                color: #fff;
            }

            p {

                font-size: 12px;
                font-weight: 400;
                color: rgba(255, 255, 255, .5);
            }
        }
    }

    .my-pack {
        width: 100%;
        height: 199px;
        background: rgba(39, 50, 70, .5);
        border-bottom: 1px solid rgba(255, 255, 255, .05);

        .list {
            padding-top: 29px;
            width: 734px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .my-pack-item {
                width: calc(33.33% - 13px);
                height: 120px;

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
                            font-size: 17px;
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
                        width: 57.55px;
                        height: 53.41px;
                        background-image: url("../../../assets/images/float-tuijian.png");
                        background-repeat: no-repeat;
                        background-size: 57.55px 53.41px;
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
                    font-size: 18px;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 1);
                    margin-top: 25px;
                    margin-left: 26px;
                }

                h3 {
                    font-size: 30px;
                    font-weight: 600;
                    color: rgba(255, 128, 66, 1);
                    margin-top: 6px;
                    margin-left: 26px;
                    position: relative;

                    span {
                        font-size: 16px;

                        &:last-child {
                            font-size: 12px !important;
                            color: rgba(255, 255, 255, .7);
                            position: absolute;
                            bottom: 8px;
                            right: 0px;
                            padding-right: 24px;
                        }
                    }
                }
            }
        }

        .txt {
            width: 734px;
            margin: 15px auto auto auto;
        }

    }

    .ply-box {
        padding-top: 15px;
        width: 734px;
        margin: 0 auto;

        h2,
        p {
            padding: 0px;
            margin: 0px;
        }

        h2 {
            font-size: 12px;
            font-weight: 400;
            color: rgba(255, 255, 255, .8);
            padding-bottom: 6px;
        }

        .box {
            width: 100%;
            height: 158px;
            border: 1px solid rgba(213, 213, 213, .1);
            border-radius: 4px;

            display: flex;
            align-items: center;

            .erweima {
                width: 50%;
                text-align: right;

                img {
                    width: 120px;
                    height: 120px;
                }
            }

            .info {
                width: 50%;
                padding-left: 15px !important;

                p {
                    &:first-child {
                        font-size: 24px;
                        font-weight: 600;
                        color: rgba(255, 128, 66, 1);
                        position: relative;

                        span {
                            font-size: 18px;
                            font-weight: 400 !important;
                        }
                    }

                    &:nth-child(2) {
                        font-size: 12px;
                        font-weight: 400;
                        color: rgba(255, 255, 255, .7);
                    }

                    &:last-child {
                        padding-top: 14px !important;

                        img {
                            width: 22px;
                            height: 22px;
                        }
                    }
                }
            }
        }
    }
}
</style>
