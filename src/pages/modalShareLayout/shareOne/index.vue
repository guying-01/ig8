<template>
<div class="igb-pages-share-one-modal">
    <h1 class="title">分享歌单赚K币</h1>
    <div class="igb-pages-share-main">
        <div class="msg">
            <p>分享歌单并通过审核后，将获得10个K币！</p>
            <p>K币可在购买会员时做抵扣。</p>
        </div>

        <p class="sub-title">给您的歌单设置一张封面图片吧！</p>

        <igb-upload class="main-upload" :width="280" :height="280" center showResetText uploadText="点击上传图片"></igb-upload>
    </div>
    <div class="igb-pages-share-footer">
        <span>第1/2步</span>
        <button @click="nextHandller('two');">下一步</button>
    </div>
</div>
</template>

<script>
export default {
  name: 'IgbPagesShareOneModalComponent',
  methods: {
    nextHandller (page) {
      this.$emit('next', {
        key: page,
        value: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-pages-share-one-modal {
    cursor: default;
    h1 {
        width: 100%;
        height: calc-attr(144);
        line-height: calc-attr(144);
        text-align: center;

        font-size: calc-attr(36);
        font-weight: 600;
        color: rgba(255, 128, 66, 1);
    }

    .igb-pages-share-main {
        p {
            padding: 0px;
            margin: 0px;
        }

        .msg {
            padding-top: calc-attr(32);

            p {
                text-align: center;

                font-size: calc-attr(18);
                font-weight: 400;
                color: rgba(248, 72, 72, 1);
            }
        }

        .sub-title {
            padding-top: calc-attr(33) !important;
            padding-bottom: calc-attr(14) !important;
            font-size: calc-attr(14);
            font-weight: 400;
            color: rgba(255, 255, 255, .7);
            opacity: 0.7;
            text-align: center;
        }

        .main-upload {
            >>>.igb-upload-box {
                .btn-bg {
                    img {
                        width: calc-attr(48) !important;
                        height: calc-attr(48) !important;
                    }
                }

                .btn-txt {
                    font-size: calc-attr(16) !important;
                }
            }
        }
    }

    .igb-pages-share-footer {
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: calc-attr(100);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: calc-attr(65);

        span {
            font-size: calc-attr(14);
            font-weight: 400;
            color: rgba(255, 255, 255, 0.7);
            padding-right: calc-attr(30);
        }

        button {
            outline: none;
            border: none;
            width: calc-attr(160);
            height: calc-attr(48);
            background: linear-gradient(315deg,
                    rgba(255, 186, 0, 1) 0%,
                    rgba(255, 107, 88, 1) 100%);
            box-shadow: 0px calc-attr(3) calc-attr(6) rgba(0, 0, 0, 0.16);
            opacity: 1;
            border-radius: 24px;
            cursor: pointer;

            font-size: calc-attr(14);
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
