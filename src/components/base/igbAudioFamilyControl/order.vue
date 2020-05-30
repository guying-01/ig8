<template>
<div class="igb-audio-family-order-base-component">
    <p class="btn-close" @click="closeHandller"></p>
    <div class="order-tabs-list">
        <span class="current">已点(20)</span>
        <span>已唱(20)</span>
    </div>

    <div class="order-button-list">
        <span class="btn btn-share-song" @click="btnShareHandller"></span>
        <span class="btn btn-loop"></span>
        <span class="icon icon-del"></span>
    </div>

    <table class="table">
        <tbody>
            <tr v-for="(item,index) in tableList" :key="index" :class="{'current':item.current,'collect':item.collect}">
                <td>
                    <i v-if="item.play"></i>
                    <span v-if="!item.play">{{item.value}}</span>
                    <img v-if="item.play" src="../../../assets/images/icon-play-lide.png" />
                </td>
                <td>
                    <div>
                        <h2>{{item.songName}}</h2>
                        <igb-tag :type="item.tag"></igb-tag>
                    </div>
                    <i class="icon-leing"></i>
                </td>
                <td>
                    <div>
                        <i class="icon-collect" :class="{'icon-collect-ok':item.collect}"></i>
                        <i class="icon-order-by-desc"></i>
                        <i class="icon-order-by-aes"></i>
                    </div>
                </td>
                <td>
                    <span>{{item.singerName}}</span>
                </td>
                <td>
                    <div>
                        <i></i>
                    </div>
                </td>
                <td>
                    <div>
                        <span>{{item.time}}</span>
                        <i class="icon-del"></i>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: "IgbAudioFamilyOrderBaseComponent",
    data() {
        return {
            tableList: [{
                    value: "01",
                    songName: "你的答案",
                    tag: 0,
                    singerName: "郭富城",
                    time: "01:00",
                    current: false,
                    play: false
                },
                {
                    value: "02",
                    songName: "死了都要爱",
                    tag: 0,
                    singerName: "信乐团",
                    time: "02:00",
                    current: false,
                    play: false
                },
                {
                    value: "03",
                    songName: "成都",
                    tag: 0,
                    singerName: "赵雷",
                    time: "02:00",
                    current: true,
                    play: true
                },
                {
                    value: "04",
                    songName: "我不是真正的快乐",
                    tag: 0,
                    singerName: "阿信",
                    time: "02:00",
                    current: false,
                    play: false
                },
                {
                    value: "05",
                    songName: "你的答案",
                    tag: 0,
                    singerName: "郭富城",
                    time: "02:00",
                    current: false,
                    play: false,
                    collect: true
                },
                {
                    value: "06",
                    songName: "我不是真正的快乐",
                    tag: 0,
                    singerName: "阿信",
                    time: "02:00",
                    current: false,
                    play: false
                },
                {
                    value: "07",
                    songName: "你的答案",
                    tag: 0,
                    singerName: "郭富城",
                    time: "02:00",
                    current: false,
                    play: false
                },
                {
                    value: "08",
                    songName: "死了都要爱",
                    tag: 0,
                    singerName: "信乐团",
                    time: "02:00",
                    current: false,
                    play: false,
                    collect: true
                },
                {
                    value: "09",
                    songName: "死了都要爱",
                    tag: 0,
                    singerName: "信乐团",
                    time: "02:00",
                    current: false,
                    play: false
                }
            ]
        }
    },
    methods: {
        btnShareHandller() {
            this.$emit('share', {});
        },
        closeHandller() {
            this.$emit('close', {});
        }
    }
}
</script>
