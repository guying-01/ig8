<template>
<div class="igb-pages-detail-song-by-album">
    <div class="page-header">
        <div class="page-left">
            <img src="../../assets/images/bgs.png" />
        </div>
        <div class="page-right">
            <h1>你的答案<span>专辑</span></h1>
            <div class="time">
                <span>歌手：</span>黎莉莉<span>|</span><span>时间：</span>2020.09.09
            </div>
            <div class="btn">
                <div class="b"></div>
            </div>
        </div>
    </div>

    <h1 class="title">
        歌曲列表
        <div class="tab-mode">
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
    name: "IgbPagesDetailSongByAlbumComponent",
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
                    tag: 1
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
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/ddd/mixin.scss";

.igb-pages-detail-song-by-album {
    .list-scrollbar {
        /*height: calc(100vh - 530px);
        overflow-x: hidden;
        overflow-y: auto;
        @include scroll-bar(0px);*/
    }

    .no-more {
        margin-top: 34px;
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 255, 255, .5);
        text-align: center;
    }

    .page-header {
        display: flex;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        padding-top: 43px;
        padding-bottom: 30px;

        .page-left {
            width: 184px;
            height: 184px;

            img {
                width: 100%;
                height: auto;
            }
        }

        .page-right {
            flex: 1;
            padding-left: 20px;

            h1,
            p {
                padding: 0px !important;
                margin: 0px !important;
            }

            h1 {
                height: 42px;
                line-height: 42px;
                font-size: 30px;
                font-weight: 500;
                color: rgba(255, 255, 255, .9);

                display: flex;
                align-items: center;

                margin-top: 11px !important;

                span {
                    width: 40px;
                    height: 20px;
                    line-height: 18px;
                    text-align: center;
                    background: rgba(74, 184, 253, .25);
                    border-radius: 2px;

                    font-size: 14px;
                    color: rgba(74, 184, 253, 1);

                    margin-left: 7px;
                    margin-top: 9px;
                }
            }

            >div {
                display: flex;
                align-items: flex-start;
                font-size: 14px;
            }

            .time {
                height: 20px;
                line-height: 20px;
                display: flex;
                align-items: center;
                font-size: 14px;
                font-weight: 400;
                color: rgba(255, 255, 255, .9);
                margin-top: 14px;

                span {
                    color: rgba(255, 255, 255, .7);

                    &:nth-child(2) {
                        margin: 0px 28px;
                        font-size: 12px;
                        color: rgba(255, 255, 255, .5);
                    }
                }
            }

            .btn {
                margin-top: 23px;
                height: 88px;

                .b {
                    width: 88px;
                    height: 28px;
                    background: url("../../assets/images/btn-c.png") no-repeat center;
                    background-size: 100% 100%;
                    cursor: pointer;

                    &:hover {
                        background: url("../../assets/images/btn-ch.png") no-repeat center;
                        background-size: 100% 100%;
                    }
                }
            }

        }
    }

    .title {
        display: flex;
        align-items: center;

        height: 30px;
        line-height: 30px;

        font-size: 20px;
        font-weight: 500;
        color: rgba(255, 255, 255, .8);
        padding: 0px;
        margin: 23px 0 20px 0;

        .tab-mode {
            flex: 1;
            text-align: right;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .tab-mode-refresh {
                background: url('../../assets/images/icon-refresh.png') no-repeat 0px center;
                background-size: 20px;
                font-size: 14px;
                font-family: 'PingFang-SC-Regular';
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
                padding-left: 25px;
                padding-right: 35px;
                opacity: .5;
                cursor: pointer;

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
