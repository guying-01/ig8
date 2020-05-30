<template>
<div class="igb-pages-detail-singer">
    <h1>
        <img src="../../assets/images/icon-left.png" @click="backHandller" />叶倩文<span class="tag">歌曲</span>
        <div class="tab-mode">
            <!-- <span class="tab-mode-refresh"><i></i>换一批</span> -->
            <span class="tab-mode-item tab-mode-item-list" :class="{'tab-mode-current':mode==='list'}" @click="modeChangeHandller('list');">
                <img src="../../assets/images/mode-list.png" />
            </span>
            <span class="tab-mode-item tab-mode-item-card" :class="{'tab-mode-current':mode==='card'}" @click="modeChangeHandller('card');">
                <img src="../../assets/images/mode-card.png" />
            </span>
        </div>
    </h1>

    <div class="list-scrollbar">
        <igb-song-table-list v-if="mode==='list'" :dataSource="tableData"></igb-song-table-list>
        <igb-song-card-list v-if="mode==='card'" :showNum="false" :dataSource="list"></igb-song-card-list>
        <div class="no-more" v-if="mode==='list'">没有更多了...</div>
    </div>
</div>
</template>

<script>
export default {
    name: "IgbPagesDetailSingerComponent",
    data() {
        return {
            mode: "list",
            list: [{
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
                    tag: 1
                },
                {
                    value: "03",
                    label: "世界这么大还是遇见你",
                    name: "程响",
                    lan: "国语",
                    tag: 0,
                    current: true
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
                },
                {
                    value: "06",
                    label: "千面",
                    name: "逍遥乐队",
                    lan: "国语",
                    tag: 1,
                    play: true
                },
                {
                    value: "07",
                    label: "世界这么大还会遇见你",
                    name: "程响",
                    lan: "国语",
                    tag: 0
                },
                {
                    value: "08",
                    label: "世界这么大还会遇见你",
                    name: "垂耳兔",
                    lan: "程响",
                    tag: 1
                },
                {
                    value: "09",
                    label: "你的答案",
                    name: "酷",
                    lan: "国语",
                    tag: 0
                },
                {
                    value: "10",
                    label: "桥边姑娘",
                    name: "垂耳兔",
                    lan: "国语",
                    tag: 0
                },
                {
                    value: "11",
                    label: "千面",
                    name: "逍遥乐队",
                    lan: "国语",
                    tag: 1
                },
                {
                    value: "12",
                    label: "桥边姑娘",
                    name: "垂耳兔",
                    lan: "国语",
                    tag: 1
                },
                {
                    value: "13",
                    label: "世界这么大还是遇见你",
                    name: "程响",
                    lan: "国语",
                    tag: 0
                },
                {
                    value: "14",
                    label: "你的答案",
                    name: "酷",
                    lan: "国语",
                    tag: 0
                },
                {
                    value: "15",
                    label: "桥边姑娘",
                    name: "垂耳兔",
                    lan: "国语",
                    tag: 0
                },
                {
                    value: "16",
                    label: "千面",
                    name: "逍遥乐队",
                    lan: "国语",
                    tag: 1
                },
                {
                    value: "17",
                    label: "世界这么大还会遇见你",
                    name: "程响",
                    lan: "国语",
                    tag: 0
                },
                {
                    value: "18",
                    label: "世界这么大还会遇见你",
                    name: "垂耳兔",
                    lan: "程响",
                    tag: 1
                },
                {
                    value: "19",
                    label: "你的答案",
                    name: "酷",
                    lan: "国语",
                    tag: 0
                },
                {
                    value: "20",
                    label: "桥边姑娘",
                    name: "垂耳兔",
                    lan: "国语",
                    tag: 0
                },
                {
                    value: "16",
                    label: "千面",
                    name: "逍遥乐队",
                    lan: "国语",
                    tag: 1
                },
                {
                    value: "17",
                    label: "世界这么大还会遇见你",
                    name: "程响",
                    lan: "国语",
                    tag: 0
                },
                {
                    value: "18",
                    label: "世界这么大还会遇见你",
                    name: "垂耳兔",
                    lan: "程响",
                    tag: 1
                },
                {
                    value: "19",
                    label: "你的答案",
                    name: "酷",
                    lan: "国语",
                    tag: 0
                },
                {
                    value: "20",
                    label: "桥边姑娘",
                    name: "垂耳兔",
                    lan: "国语",
                    tag: 0
                }
            ],
            tableData: [{
                    num: "01",
                    label: "你的答案",
                    tag: 0,
                    singerName: "郭富城",
                    singerType: "国语",
                    name: "专辑名称",
                    time: "02:00"
                }, {
                    num: "02",
                    label: "死了都要爱",
                    tag: 0,
                    singerName: "信乐团",
                    singerType: "国语",
                    name: "专辑名称",
                    time: "02:00"
                },
                {
                    num: "03",
                    label: "成都",
                    tag: 0,
                    singerName: "赵雪",
                    singerType: "国语",
                    name: "专辑名称",
                    time: "02:00",
                    current: true
                },
                {
                    num: "04",
                    label: "我不是真正的快乐",
                    tag: 1,
                    singerName: "阿信",
                    singerType: "国语",
                    name: "专辑名称",
                    time: "02:00"
                },
                {
                    num: "05",
                    label: "你的答案",
                    tag: 0,
                    singerName: "郭富城",
                    singerType: "国语",
                    name: "专辑名称",
                    time: "02:00",
                    play: true
                },
                {
                    num: "06",
                    label: "死了都要爱",
                    tag: 0,
                    singerName: "信乐团",
                    singerType: "国语",
                    name: "专辑名称",
                    time: "02:00"
                }
            ],
        }
    },
    methods: {
        modeChangeHandller(type) {
            this.mode = type;
        },
        backHandller() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/ddd/mixin.scss";

.igb-pages-detail-singer {
    .list-scrollbar {
        height: calc(100vh - 330px);
        overflow-x: hidden;
        overflow-y: auto;
        @include scroll-bar(0px);
    }

    .no-more {
        margin-top: 34px;
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 255, 255, .5);
        text-align: center;
    }

    h1 {
        padding: 0px;
        margin: 50px 0px 20px 0px;
        display: flex;
        align-items: center;
        height: 42px;
        line-height: 42px;

        font-size: 30px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.9);

        img {
            width: 40px;
            line-height: 40px;
            margin-right: 16px;
            opacity: .6;
            cursor: pointer;

            &:hover {
                background: rgba(255, 255, 255, .05);
                border-radius: 50%;
            }
        }

        .tag {
            width: 40px;
            height: 20px;
            line-height: 20px;
            text-align: center;

            background: rgba(253, 129, 74, .25);
            border-radius: 2px;

            font-size: 14px;
            color: rgba(253, 129, 74, 1);

            margin-left: 17px;
            margin-top: 10px;

        }

        .tab-mode {
            flex: 1;
            text-align: right;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .tab-mode-refresh {
                font-size: 14px;
                font-family: 'PingFang-SC-Regular';
                font-weight: 400;
                color: rgba(255, 255, 255, .5);
                text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
                padding-right: 29px;
                cursor: pointer;
                display: flex;
                align-items: center;

                i {
                    display: block;
                    width: 15.57px;
                    height: 16.47px;
                    background: url('../../assets/images/icon-refresh.png') no-repeat center;
                    background-size: 100%;
                    margin-right: 8.5px;
                }

                &:hover {
                    opacity: .7;
                }
            }

            .tab-mode-item {
                display: block;
                width: 48px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                background: rgba(255, 255, 255, .1);
                position: relative;
                cursor: pointer;

                &:hover {
                    background: rgba(255, 255, 255, .3) !important;

                    img {
                        border-radius: 0px !important;
                    }
                }

                img {
                    width: 16px;
                    position: absolute;
                    top: 8px;
                    left: 16px
                }

                &.tab-mode-current {
                    background: rgba(255, 255, 255, .2);
                }

                &.tab-mode-item-list {
                    border-radius: 15px 0px 0px 15px;
                }

                &.tab-mode-item-card {
                    border-radius: 0px 15px 15px 0px;

                    img {
                        top: 7px !important;
                    }
                }

            }
        }
    }
}
</style>
