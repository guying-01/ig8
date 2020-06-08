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
  name: 'IgbPagesMyInfoComponent',
  methods: {
    okHandller (page) {
      this.$emit('ok', {
        key: page,
        value: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-pages-my-info {
    padding-top: calc-attr(60);
    cursor: default;

    .my-info {
        display: flex;
        align-items: center;
        width: 100%;
        height: calc-attr(120);
        background: rgba(30, 32, 52, .5);
        border-top: 1px solid rgba(255, 255, 255, .05);
        border-bottom: 1px solid rgba(255, 255, 255, .05);

        h1,
        p {
            margin: 0px;
            padding: 0px;
            padding-left: calc-attr(23) !important;
            padding-right: calc-attr(36);
            position: relative;
        }

        .header {
            padding-left: calc-attr(41);
            position: relative;

            &:hover {
                .molay {
                    display: block;
                }
            }

            img {
                width: calc-attr(88);
                height: calc-attr(88);
                cursor: pointer;

            }

            .molay {
                display: none;
                margin: 0px !important;
                padding: 0px !important;
                width: calc-attr(80);
                height: calc-attr(80);
                line-height: calc-attr(80);

                position: absolute;
                top: calc-attr(4);
                right: calc-attr(4);
                z-index: 999999;
                border-radius: 50%;
                background: rgba(0, 0, 0, .4);

                text-align: center;
                font-size: calc-attr(12);
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                cursor: pointer;
            }
        }

        .info {
            flex: 1;

            h1 {
                font-size: calc-attr(24);
                font-weight: 600;
                color: rgba(255, 255, 255, .8);
                display: flex;
                align-items: center;

                span {
                    margin-left: auto;
                    font-size: calc-attr(14);
                    font-weight: 400;
                    color: rgba(255, 255, 255, .5);
                    cursor: pointer;

                    &:hover {
                        color: rgba(255, 255, 255, .7);
                    }
                }
            }

            p {

                font-size: calc-attr(14);
                font-weight: 400;
                color: rgba(255, 255, 255, .5);
                margin-top: calc-attr(8);
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
        padding-top: calc-attr(47);
        padding-left: calc-attr(41);
        padding-right: calc-attr(36);

        p {
            padding: 0px;
            margin: 0px;
            padding-bottom: calc-attr(31);
            display: flex;
            align-items: center;

            font-size: calc-attr(14);
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
                width: calc-attr(60);
                height: calc-attr(30);
                border: 1px solid rgba(191, 103, 66, 1);
                border-radius: 30px;

                background: transparent;

                font-size: calc-attr(14);
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
