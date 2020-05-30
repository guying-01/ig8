<template>
<div class="igb-pages-my-info">
    <div class="my-info">
        <div class="header">
            <img src="../../../assets/images/touxiang.png" />
            <p class="molay">修改头像</p>
        </div>
        <div class="info">
            <h1>刘思琪<span @click="okHandller('modify');">修改</span></h1>
            <p>您的生日：<span>1989年09月09日</span><span @click="okHandller('setting');">设置</span></p>
        </div>
    </div>

    <div class="other-info">
        <p>会员级别：<span>免费用户</span><button class="btn" @click="okHandller('deposit');">开通</button></p>
        <p>截止日期：<span>2020.09.09</span></p>
        <p>剩余天数：<span>2020.09.09</span></p>
    </div>
</div>
</template>

<script>
export default {
    name: "IgbPagesMyInfoComponent",
    methods: {
        okHandller(page) {
            this.$emit('ok', {
                key: page,
                value: true
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.igb-pages-my-info {
    padding-top: 60px;
    cursor: default;

    .my-info {
        display: flex;
        align-items: center;
        width: 100%;
        height: 120px;
        background: rgba(30, 32, 52, .5);
        border-top: 1px solid rgba(255, 255, 255, .05);
        border-bottom: 1px solid rgba(255, 255, 255, .05);

        h1,
        p {
            margin: 0px;
            padding: 0px;
            padding-left: 23px !important;
            padding-right: 36px;
            position: relative;
        }

        .header {
            padding-left: 41px;
            position: relative;

            &:hover {
                .molay {
                    display: block;
                }
            }

            img {
                width: 88px;
                height: 88px;
                cursor: pointer;

            }

            .molay {
                display: none;
                margin: 0px !important;
                padding: 0px !important;
                width: 80px;
                height: 80px;
                line-height: 80px;

                position: absolute;
                top: 4px;
                right: 4px;
                z-index: 999999;
                border-radius: 50%;
                background: rgba(0, 0, 0, .4);

                text-align: center;
                font-size: 12px;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                cursor: pointer;
            }
        }

        .info {
            flex: 1;

            h1 {
                font-size: 24px;
                font-weight: 600;
                color: rgba(255, 255, 255, .8);
                display: flex;
                align-items: center;

                span {
                    margin-left: auto;
                    font-size: 14px;
                    font-weight: 400;
                    color: rgba(255, 255, 255, .5);
                    cursor: pointer;

                    &:hover {
                        color: rgba(255, 255, 255, .7);
                    }
                }
            }

            p {

                font-size: 14px;
                font-weight: 400;
                color: rgba(255, 255, 255, .5);
                margin-top: 8px;
                display: flex;
                align-items: center;

                span {
                    &:first-child {
                        color: rgba(255, 255, 255, .7);
                    }

                    &:last-child {
                        margin-left: auto;
                        cursor: pointer;

                        &:hover {
                            color: rgba(255, 255, 255, .7);
                        }
                    }
                }
            }
        }
    }

    .other-info {
        padding-top: 47px;
        padding-left: 41px;
        padding-right: 36px;

        p {
            padding: 0px;
            margin: 0px;
            padding-bottom: 31px;
            display: flex;
            align-items: center;

            font-size: 14px;
            font-weight: 400;
            color: rgba(255, 255, 255, .5);

            &:last-child {
                padding: 0px;
            }

            span {
                color: rgba(255, 255, 255, .8);
            }

            .btn {
                outline: none;
                width: 60px;
                height: 30px;
                border: 1px solid rgba(191, 103, 66, 1);
                border-radius: 30px;

                background: transparent;

                font-size: 14px;
                font-weight: 400;
                color: rgba(255, 128, 66, 1);

                margin-left: auto;

                cursor: pointer;

                &:hover {
                    border: 1px solid rgba(255, 128, 66, 1);
                    background: rgba(255, 128, 66, 0.2);
                }
            }
        }
    }
}
</style>
