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
  name: 'IgbPagesPassModalComponent',
  data () {
    return {
      pass: '123456'
    }
  },
  methods: {
    clickHandller (page) {
      this.$emit('next', {
        key: page,
        value: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-pages-pass-modal {
    .title {
        padding-top: calc-attr(81);
        font-size: calc-attr(18);
        font-weight: 400;
        color: rgba(255, 255, 255, .5);
        text-align: center;
        cursor: default;
    }

    .form-list {
        padding: 0 calc-attr(50);
        padding-top: calc-attr(25);
        // width: calc(100% - 100px);
        margin: 0 auto;

        .form-list-item {
            >>>.ant-input {
                width: 100%;
                height: calc-attr(48);
                line-height: calc-attr(48);
                border-radius: 0px !important;
                outline: none !important;
                border-top: none !important;
                border-right: none !important;
                border-left: none !important;
                border-bottom: 1px solid #405167 !important;
                background: transparent;
                font-size: calc-attr(35);
                font-weight: 400;
                color: rgba(190, 194, 199, 1);
                padding: 0px !important;
                text-align: center;

                &::-webkit-input-placeholder {
                    color: rgba(190, 194, 199, .7);
                    font-size: calc-attr(18);
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
        width: calc-attr(320);
        margin: 0 auto;
        padding-top: calc-attr(52);

        span {
            cursor: pointer;

        }

        .key-top {
            display: flex;

            .left {
                width: calc-attr(252);
                display: flex;
                align-items: center;
                flex-wrap: wrap;

                span {
                    width: calc(33.33% - 12px);
                    height: calc-attr(72);
                    line-height: calc-attr(72);
                    text-align: center;

                    background: rgba(54, 58, 90, 1);
                    box-shadow: 0px calc-attr(2) 0px rgba(0, 0, 0, 0.15);
                    border-radius: 12px;

                    margin-right: calc-attr(12);

                    margin-bottom: calc-attr(12);

                    font-size: calc-attr(24);
                    font-weight: 400;
                    color: rgba(255, 142, 50, 1);

                    &:last-child {
                        margin-right: 0px;
                    }

                    &:hover {
                        background: rgba(49, 53, 88, 1);
                        box-shadow: 0px calc-attr(2) 0px rgba(0, 0, 0, 0.15);
                    }

                    &:active {
                        background: rgba(32, 36, 67, .5);
                        box-shadow: 0px calc-attr(2) 0px rgba(0, 0, 0, 0.15);
                    }
                }
            }

            .right {
                display: flex;

                span {
                    width: calc-attr(72);
                    height: calc-attr(156);
                    line-height: calc-attr(156);

                    background: rgba(54, 58, 90, 1);
                    box-shadow: 0px calc-attr(2) 0px rgba(0, 0, 0, 0.15);
                    border-radius: 12px;

                    text-align: center;

                    img {
                        width: 40%;
                    }

                    &:hover {
                        background: rgba(49, 53, 88, 1);
                        box-shadow: 0px calc-attr(2) 0px rgba(0, 0, 0, 0.15);
                    }

                    &:active {
                        background: rgba(32, 36, 67, .5);
                        box-shadow: 0px calc-attr(2) 0px rgba(0, 0, 0, 0.15);
                    }
                }
            }
        }

        .last {
            display: flex;
            align-items: center;

            span {
                width: calc(33.33% - 12px);
                height: calc-attr(72);
                line-height: calc-attr(72);
                text-align: center;

                background: rgba(54, 58, 90, 1);
                box-shadow: 0px calc-attr(2) 0px rgba(0, 0, 0, 0.15);
                border-radius: 12px;

                margin-right: calc-attr(12);

                margin-bottom: calc-attr(12);

                font-size: calc-attr(24);
                font-weight: 400;
                color: rgba(255, 142, 50, 1);

                &:last-child {
                    margin-right: 0px;
                }

                &:hover {
                    background: rgba(49, 53, 88, 1);
                    box-shadow: 0px calc-attr(2) 0px rgba(0, 0, 0, 0.15);
                }

                &:active {
                    background: rgba(32, 36, 67, .5);
                    box-shadow: 0px calc-attr(2) 0px rgba(0, 0, 0, 0.15);
                }
            }
        }
    }

    .btn {
        width: calc-attr(320);
        height: calc-attr(74);
        line-height: calc-attr(74);
        margin: 10px auto auto auto;
        background: rgba(54, 58, 90, 1);
        box-shadow: 0px calc-attr(2) 0px rgba(0, 0, 0, 0.15);
        border-radius: 12px;

        text-align: center;

        font-size: calc-attr(24);
        font-weight: 400;
        color: rgba(255, 142, 50, 1);

        cursor: pointer;

        &:hover {
            background: rgba(49, 53, 88, 1);
            box-shadow: 0px calc-attr(2) 0px rgba(0, 0, 0, 0.15);
        }

        &:active {
            background: rgba(32, 36, 67, .5);
            box-shadow: 0px calc-attr(2) 0px rgba(0, 0, 0, 0.15);
        }
    }
}
</style>
