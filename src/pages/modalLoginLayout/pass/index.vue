<template>
<div class="igb-pages-pass-modal">
    <div class="title">请输入退出密码</div>
    <div class="form-list">
        <div class="form-list-item">
            <a-input type="password" v-model="pass" class="form-list-item-input" />
        </div>
    </div>
    <div class="key-list">
        <div class="key-top">
            <div class="left">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
            </div>
            <div class="right">
                <span>
                    <img src="../../../assets/images/key-board-del.png" />
                </span>
            </div>
        </div>
        <div class="last">
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>0</span>
        </div>
    </div>
    <div class="btn" @click="clickHandller('ok');">确定</div>
</div>
</template>

<script>
export default {
    name: "IgbPagesPassModalComponent",
    data() {
        return {
            pass: "123456"
        }
    },
    methods: {
        clickHandller(page) {
            this.$emit('next', {
                key: page,
                value: true
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.igb-pages-pass-modal {
    .title {
        padding-top: 81px;
        font-size: 18px;
        font-weight: 400;
        color: rgba(255, 255, 255, .5);
        text-align: center;
        cursor: default;
    }

    .form-list {
        padding-top: 25px;
        width: calc(100% - 100px);
        margin: 0 auto;

        .form-list-item {
            >>>.ant-input {
                width: 100%;
                height: 48px;
                line-height: 48px;
                border-radius: 0px !important;
                outline: none !important;
                border-top: none !important;
                border-right: none !important;
                border-left: none !important;
                border-bottom: 1px solid #405167 !important;
                background: transparent;
                font-size: 35px;
                font-weight: 400;
                color: rgba(190, 194, 199, 1);
                padding: 0px !important;
                text-align: center;

                &::-webkit-input-placeholder {
                    color: rgba(190, 194, 199, .7);
                    font-size: 18px;
                }

                &:hover,
                &:focus {
                    border-bottom: 1px solid rgba(255, 130, 62, 1) !important;
                }

                &:focus {
                    color: rgba(190, 194, 199, 1) !important;
                }
            }
        }

    }

    .key-list {
        width: 320px;
        margin: 0 auto;
        padding-top: 52px;

        span {
            cursor: pointer;

        }

        .key-top {
            display: flex;

            .left {
                width: 252px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;

                span {
                    width: calc(33.33% - 12px);
                    height: 72px;
                    line-height: 72px;
                    text-align: center;

                    background: rgba(54, 58, 90, 1);
                    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
                    border-radius: 12px;

                    margin-right: 12px;

                    margin-bottom: 12px;

                    font-size: 24px;
                    font-weight: 400;
                    color: rgba(255, 142, 50, 1);

                    &:last-child {
                        margin-right: 0px;
                    }

                    &:hover {
                        background: rgba(49, 53, 88, 1);
                        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
                    }

                    &:active {
                        background: rgba(32, 36, 67, .5);
                        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
                    }
                }
            }

            .right {
                display: flex;

                span {
                    width: 72px;
                    height: 156px;
                    line-height: 156px;

                    background: rgba(54, 58, 90, 1);
                    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
                    border-radius: 12px;

                    text-align: center;

                    img {
                        width: 40%;
                    }

                    &:hover {
                        background: rgba(49, 53, 88, 1);
                        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
                    }

                    &:active {
                        background: rgba(32, 36, 67, .5);
                        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
                    }
                }
            }
        }

        .last {
            display: flex;
            align-items: center;

            span {
                width: calc(33.33% - 12px);
                height: 72px;
                line-height: 72px;
                text-align: center;

                background: rgba(54, 58, 90, 1);
                box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
                border-radius: 12px;

                margin-right: 12px;

                margin-bottom: 12px;

                font-size: 24px;
                font-weight: 400;
                color: rgba(255, 142, 50, 1);

                &:last-child {
                    margin-right: 0px;
                }

                &:hover {
                    background: rgba(49, 53, 88, 1);
                    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
                }

                &:active {
                    background: rgba(32, 36, 67, .5);
                    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
                }
            }
        }
    }

    .btn {
        width: 320px;
        height: 74px;
        line-height: 74px;
        margin: 10px auto auto auto;
        background: rgba(54, 58, 90, 1);
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
        border-radius: 12px;

        text-align: center;

        font-size: 24px;
        font-weight: 400;
        color: rgba(255, 142, 50, 1);

        cursor: pointer;

        &:hover {
            background: rgba(49, 53, 88, 1);
            box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
        }

        &:active {
            background: rgba(32, 36, 67, .5);
            box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
        }
    }
}
</style>
