<template>
<div class="igb-pages-search">
    <div class="singer-main">
        <h3>歌手</h3>
        <igb-singer-list :dataSource="singerList"></igb-singer-list>
        <span class="btn-more">更多<img src="../../assets/images/icon-more.png" /></span>
    </div>

    <div class="song-main">
        <h3>歌曲列表</h3>
        <igb-song-card-list :showNum="false" :dataSource="songList"></igb-song-card-list>
    </div>

    <transition name="pull-up">
        <igb-key-board v-if="show" :mode="model" @model="modelHandller"></igb-key-board>
    </transition>
</div>
</template>

<script>
export default {
    name: "IgbPagesSearchComponent",
    data() {
        return {
            show: false,
            model: 0,
            singerList: [{
                    name: "郭富城",
                    type: "华语男星",
                    search: true
                },
                {
                    name: "周杰伦",
                    type: "华语男星",
                    search: true
                },
                {
                    name: "韩红",
                    type: "华语女星",
                    search: true
                },
                {
                    name: "李文文",
                    type: "华语男星",
                    search: true
                },
                {
                    name: "周杰伦",
                    type: "华语男星",
                    search: true
                }
            ],
            songList: [{
                    value: "01",
                    label: "千面",
                    name: "逍遥乐队",
                    lan: "国语",
                    tag: 1
                },
                {
                    value: "02",
                    label: "桥边姑娘",
                    name: "垂耳兔",
                    lan: "国语",
                    tag: 1,
                    collect: true,
                    seal: true
                },
                {
                    value: "03",
                    label: "世界这么大还是遇见你",
                    name: "程响",
                    lan: "国语",
                    tag: 0
                },
                {
                    value: "04",
                    label: "你的答案",
                    name: "酷",
                    lan: "国语",
                    tag: 0
                },
                {
                    value: "05",
                    label: "桥边姑娘",
                    name: "垂耳兔",
                    lan: "国语",
                    tag: 0
                }
            ]
        }
    },
    mounted() {
        //软键盘显示动画
        this.$nextTick(() => {
            setTimeout(() => {
                this.show = !this.show;
            }, 0);
        });
    },
    methods: {
        modelHandller(event) {
            this.show = false;
            //软键盘显示动画
            this.$nextTick(() => {
                setTimeout(() => {
                    this.show = !this.show;
                    this.model = event.model;
                }, 0);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.pull-up-enter-active,
.pull-up-leave-active {
    opacity: 1;
    -ms-transform: scaleY(1);
    transform: scaleY(1);
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0.1s,
        opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0.1s;
    -ms-transform-origin: center top;
    transform-origin: center top;
    transform-origin: center bottom;
}

.pull-up-enter,
.pull-up-leave-active {
    opacity: 0;
    -ms-transform: scaleY(0);
    transform: scaleY(0);
}

.igb-pages-search {
    .singer-main {
        padding-top: 43px;
        padding-bottom: 38px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);

        h3 {
            font-size: 20px;
            font-family: 'PingFang-SC-Regular';
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            margin: 0px;
            padding: 0px 0px 22px 0px;
        }

        .btn-more {
            display: flex;
            align-items: center;
            justify-content: center;

            margin: 0 auto;

            width: 98px;
            height: 32px;
            line-height: 32px;

            text-align: center;

            border: 1px solid rgba(89, 102, 119, 1);
            opacity: 1;
            border-radius: 49px;

            font-size: 14px;
            font-family: 'PingFang-SC-Regular';
            color: rgba(255, 255, 255, .7);

            cursor: pointer;

            img {
                width: 12px;
                height: 12px;
                margin-left: 5px;
            }

            &:hover {
                background: rgba(255, 255, 255, 0.06);
                border: 1px solid rgba(255, 255, 255, 0.5019607843137255);
            }

        }
    }

    .song-main {
        padding-top: 32px;

        h3 {
            font-size: 20px;
            font-family: 'PingFang-SC-Regular';
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            margin: 0px;
            padding: 0px 0px 20px 0px;
        }
    }
}
</style>
