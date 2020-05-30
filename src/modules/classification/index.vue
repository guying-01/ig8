<template>
<div class="igb-modules-classification-page">
    <div style="margin-top:41px;">
        <a-tabs defaultActiveKey="1" tabPosition="top">
            <a-tab-pane v-for="(item,index) in tagsList" :tab="`${item.label}`" :key="index"></a-tab-pane>
        </a-tabs>
    </div>

    <div style="margin-top:31px;">
        <igb-tabs refresh :dataSource="list" @tabChange="tabChangeHandller" @modeChange="modeChangeHandller"></igb-tabs>
    </div>

    <div v-if="menuIndex===0" style="margin-top:23px;" class="list-scrollbar">
        <igb-song-table-list v-if="mode==='list'" :dataSource="tableData" @change="songTableChange"></igb-song-table-list>
        <igb-song-card-list v-if="mode==='card'" :showNum="false" :dataSource="list2"></igb-song-card-list>
        <div class="no-more" v-if="mode==='list'">没有更多了...</div>
    </div>

    <div v-if="menuIndex===1" style="margin-top:25px;" class="list-scrollbar">
        <igb-song-list @change="songListChange" :dataSource="list3"></igb-song-list>
    </div>

</div>
</template>

<script>
export default {
    name: "IgbModulesClassificationPage",
    data() {
        return {
            mode: 'list',
            menuIndex: 0,
            tagsList: [{
                    label: "生日"
                },
                {
                    label: "革命"
                },
                {
                    label: "军旅"
                },
                {
                    label: "影视"
                },
                {
                    label: "春节"
                },
                {
                    label: "年会"
                },
                {
                    label: "迪斯科"
                },
                {
                    label: "对唱"
                },
                {
                    label: "深情"
                },
                {
                    label: "聚会"
                },
                {
                    label: "结婚"
                },
                {
                    label: "革命"
                },
                {
                    label: "生日"
                },
                {
                    label: "革命"
                },
                {
                    label: "生日"
                },
                {
                    label: "革命"
                },
                {
                    label: "生日"
                },
                {
                    label: "革命"
                },
                {
                    label: "生日"
                },
                {
                    label: "革命"
                },
                {
                    label: "生日"
                },
                {
                    label: "革命"
                }
            ],
            list: [{
                    value: 0,
                    label: "歌曲",
                    operation: true
                },
                {
                    value: 1,
                    label: "歌单",
                    operation: false
                }
            ],
            list2: [{
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
                },
                {
                    num: "07",
                    label: "死了都要爱",
                    tag: 0,
                    singerName: "信乐团",
                    singerType: "国语",
                    name: "专辑名称",
                    time: "02:00"
                },
                {
                    num: "08",
                    label: "成都",
                    tag: 0,
                    singerName: "赵雪",
                    singerType: "国语",
                    name: "专辑名称",
                    time: "02:00"
                },
                {
                    num: "09",
                    label: "我不是真正的快乐",
                    tag: 1,
                    singerName: "阿信",
                    singerType: "国语",
                    name: "专辑名称",
                    time: "02:00"
                },
                {
                    num: "10",
                    label: "你的答案",
                    tag: 0,
                    singerName: "郭富城",
                    singerType: "国语",
                    name: "专辑名称",
                    time: "02:00"
                },
                {
                    num: "11",
                    label: "死了都要爱",
                    tag: 0,
                    singerName: "信乐团",
                    singerType: "国语",
                    name: "专辑名称",
                    time: "02:00"
                }
            ],
            list3: [{
                value: 0,
                singerName: "江湖故人",
                songName: "你的答案",
                src: "card1",
                tags: ['标签', '标签'],
                current: true
            }, {
                value: 1,
                singerName: "寒江",
                songName: "我最爱你的眼睛",
                src: "card2",
                tags: ['标签', '标签', '标签']
            }, {
                value: 2,
                singerName: "寒江",
                songName: "判断",
                src: "card3",
                tags: ['标签', '标签', '标签']
            }, {
                value: 3,
                singerName: "孤影",
                songName: "不要你回家了",
                src: "card4",
                tags: ['标签', '标签', '标签']
            }, {
                value: 4,
                singerName: "他想你",
                songName: "那一年",
                src: "card5",
                tags: ['标签', '标签', '标签']
            }, {
                value: 5,
                singerName: "Tony",
                songName: "像雾像雨有像风像雾像雨有像风",
                src: "card6",
                tags: ['标签', '标签', '标签']
            }, {
                value: 6,
                singerName: "凌霜",
                songName: "我最爱你的眼睛",
                src: "card7",
                tags: ['标签', '标签']
            }, {
                value: 7,
                singerName: "寒江",
                songName: "判断",
                src: "card8",
                tags: ['标签', '标签', '标签']
            }, {
                value: 8,
                singerName: "孤影",
                songName: "不要你回家了",
                src: "card9",
                tags: ['标签', '标签', '标签']
            }, {
                value: 9,
                singerName: "他想你",
                songName: "那一年",
                src: "card10",
                tags: ['标签', '标签', '标签']
            }, {
                value: 10,
                singerName: "Tony",
                songName: "像雾像雨有像风",
                src: "card11",
                tags: ['标签', '标签', '标签']
            }, {
                value: 11,
                singerName: "他想你",
                songName: "那一年",
                src: "card12",
                tags: ['标签', '标签', '标签']
            }]
        }
    },
    methods: {
        tabChangeHandller(event) {
            this.menuIndex = event.value;
        },
        modeChangeHandller(event) {
            this.mode = event.type;
        },
        songTableChange(event) {
            this.$router.push({
                path: "/pages/detail/songByList"
            });
        },
        songListChange(event) {
            this.$router.push({
                path: "/pages/detail/songByAlbum"
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/ddd/mixin.scss";

.igb-modules-classification-page {
    .list-scrollbar {
        /*height: calc(100vh - 403px);
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
}
</style>
