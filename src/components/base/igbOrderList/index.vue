<template>
    <div class="igb-order-list-base-component" ref="wrapper">
        <div class="igb-order-list-wrap">
            <p class="btn-close" @click="closeHandller"></p>
            <div>
                <div class="order-tabs-list">
                    <span
                        v-for="(item, index) in tabs"
                        :key="index"
                        :class="{ current: item.value === current }"
                        @click="changeHandller(item)"
                        >{{ item.label }}</span
                    >
                </div>

                <div class="order-button-list">
                    <span
                        class="btn btn-share-song"
                        @click="btnShareHandller"
                        v-if="current === 0"
                    ></span
                    ><!--禁用按钮加样式class="dis"-->
                    <span class="btn btn-loop" v-if="current === 0"></span>
                    <!--<span class="btn btn-share-song dis" @click="btnShareHandller" v-if="current===0"></span>
        <span class="btn btn-loop dis" v-if="current===0"></span>-->
                    <span class="icon icon-del"></span>
                </div>
            </div>

            <div
                ref="viewBox"
                class="order-content"
                :class="{ sep: current === 0 }"
            >
                <igbScroll v-bind:boxHeight="viewBoxHeight">
                    <div class="list-order" v-show="current === 0">
                        <table class="table">
                            <tbody ref="order-list">
                                <tr
                                    v-for="(item, index) in tableList"
                                    :key="item.order"
                                    :class="{
                                        current: item.current,
                                        play: item.play
                                    }"
                                    class="handler"
                                >
                                    <td>
                                        <span>{{ item.value }}</span>
                                        <!--<img v-if="item.play" src="../../../assets/images/icon-play-lide.png" />-->
                                    </td>
                                    <td>
                                        <div>
                                            <h2>{{ item.songName }}</h2>
                                            <igb-tag :type="item.tag"></igb-tag>
                                        </div>
                                        <i class="icon-leing"></i>
                                    </td>
                                    <td>
                                        <div>
                                            <i
                                                class="icon-collect"
                                                :class="{
                                                    'icon-collect-ok':
                                                        item.collect
                                                }"
                                            ></i>
                                            <i
                                                class="icon-order-by-desc"
                                                @click="
                                                    tableRowDesc(
                                                        tableList,
                                                        index
                                                    )
                                                "
                                            ></i>
                                            <i
                                                class="icon-order-by-aes"
                                                @click="
                                                    tableRowAsc(
                                                        tableList,
                                                        index
                                                    )
                                                "
                                            ></i>
                                        </div>
                                    </td>
                                    <td>
                                        <span>{{ item.singerName }}</span>
                                    </td>
                                    <td>
                                        <div>
                                            <i></i>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span>{{ item.time }}</span>
                                            <i class="icon-del"></i>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="list-song" v-show="current === 1">
                        <table class="table">
                            <tbody ref="song-list">
                                <tr
                                    v-for="(item, index) in tableList1"
                                    :key="index"
                                    :class="{
                                        current: item.current,
                                        play: item.play
                                    }"
                                >
                                    <td>
                                        <span>{{ item.value }}</span>
                                        <!--<img v-if="item.play" src="../../../assets/images/icon-play-lide.png" />-->
                                    </td>
                                    <td>
                                        <div>
                                            <h2>{{ item.songName }}</h2>
                                            <igb-tag :type="item.tag"></igb-tag>
                                        </div>
                                        <i class="icon-leing"></i>
                                    </td>
                                    <td>
                                        <div>
                                            <i class="icon-collect"></i>
                                        </div>
                                    </td>
                                    <td>
                                        <span>{{ item.singerName }}</span>
                                    </td>
                                    <td>
                                        <div>
                                            <i></i>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span>{{ item.time }}</span>
                                            <i class="icon-del"></i>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </igbScroll>
            </div>
        </div>
    </div>
</template>

<script>
import igbScroll from '../../tools/igbScroll/index'
import Sortable from 'sortablejs'
export default {
  name: 'IgbOrderListBaseComponent',
  components: {
    igbScroll,
    Sortable
  },
  data () {
    return {
      viewBoxHeight: '100%',
      songListSortable: false,
      current: 0,
      tabs: [
        {
          value: 0,
          label: '已点(20)'
        },
        {
          value: 1,
          label: '已唱(20)'
        }
      ],
      tableList: [
        {
          value: '01',
          songName: '你的答案1',
          tag: 0,
          singerName: '郭富城',
          time: '01:00',
          current: false,
          play: false
        },
        {
          value: '02',
          songName: '死了都要爱',
          tag: 0,
          singerName: '信乐团',
          time: '02:00',
          current: false,
          play: false
        },
        {
          value: '03',
          songName: '成都',
          tag: 0,
          singerName: '赵雷',
          time: '02:00',
          current: true,
          play: true
        },
        {
          value: '04',
          songName: '我不是真正的快乐',
          tag: 0,
          singerName: '阿信',
          time: '02:00',
          current: false,
          play: false
        },
        {
          value: '05',
          songName: '你的答案',
          tag: 0,
          singerName: '郭富城',
          time: '02:00',
          current: false,
          play: false,
          collect: true
        },
        {
          value: '06',
          songName: '我不是真正的快乐',
          tag: 0,
          singerName: '阿信',
          time: '02:00',
          current: false,
          play: false
        },
        {
          value: '07',
          songName: '你的答案',
          tag: 0,
          singerName: '郭富城',
          time: '02:00',
          current: false,
          play: false
        },
        {
          value: '08',
          songName: '死了都要爱',
          tag: 0,
          singerName: '信乐团',
          time: '02:00',
          current: false,
          play: false,
          collect: true
        },
        {
          value: '09',
          songName: '死了都要爱',
          tag: 0,
          singerName: '信乐团',
          time: '02:00',
          current: false,
          play: false
        },
        {
          value: '10',
          songName: '死了都要爱',
          tag: 0,
          singerName: '信乐团',
          time: '02:00',
          current: false,
          play: false
        }
      ],
      tableList1: [
        {
          value: '01',
          songName: '你的答案',
          tag: 0,
          singerName: '郭富城',
          time: '01:00',
          current: false,
          play: false
        },
        {
          value: '02',
          songName: '死了都要爱',
          tag: 0,
          singerName: '信乐团',
          time: '02:00',
          current: false,
          play: false
        },
        {
          value: '03',
          songName: '成都',
          tag: 0,
          singerName: '赵雷',
          time: '02:00',
          current: true,
          play: true
        },
        {
          value: '04',
          songName: '我不是真正的快乐',
          tag: 0,
          singerName: '阿信',
          time: '02:00',
          current: false,
          play: false
        },
        {
          value: '05',
          songName: '你的答案',
          tag: 0,
          singerName: '郭富城',
          time: '02:00',
          current: false,
          play: false,
          collect: false
        },
        {
          value: '06',
          songName: '我不是真正的快乐',
          tag: 0,
          singerName: '阿信',
          time: '02:00',
          current: false,
          play: false
        },
        {
          value: '07',
          songName: '你的答案',
          tag: 0,
          singerName: '郭富城',
          time: '02:00',
          current: false,
          play: false
        },
        {
          value: '08',
          songName: '死了都要爱',
          tag: 0,
          singerName: '信乐团',
          time: '02:00',
          current: false,
          play: false,
          collect: false
        },
        {
          value: '09',
          songName: '死了都要爱',
          tag: 0,
          singerName: '信乐团',
          time: '02:00',
          current: false,
          play: false
        }
      ]
    }
  },
  methods: {
    btnShareHandller () {
      this.$emit('share', {})
    },
    closeHandller () {
      this.$emit('close', {})
    },
    changeHandller (item) {
      this.current = item.value
    },
    tableRowDesc (list, index) {
      if (index + 1 > list.length) return
      let arr = list[index]
      this.$set(list, index, list[index + 1])
      this.$set(list, index + 1, arr)
    },
    tableRowAsc (list, index) {
      if (index == 0) return
      let arr = list[index]
      this.$set(list, index, list[index - 1])
      this.$set(list, index - 1, arr)
    },
    calcAttr (px) {
      const clientWidth = window.innerWidth
      return (clientWidth * px) / 1920
    },
    computedWrapperHeight () {
      let wrapper = this.$refs['wrapper']
      const height = window.innerHeight
      wrapper.style.height = height - this.calcAttr(109 + 57 - 10) + 'px'
      // 主要解决滚动条在客户端中无法正确配置高度问题
      this.viewBoxHeight = height - this.calcAttr(109 + 57 + 167) + 'px'
    }
  },
  mounted () {
    this.computedWrapperHeight()
    window.onresize = () => {
      this.computedWrapperHeight()
    }

    var el = this.$refs['order-list']
    Sortable.create(el, {
      ghostClass: 'sortable-ghost', // drop placeholder的css类名
      chosenClass: 'sortable-chosen', // 被选中项的css 类名
      dragClass: 'sortable-drag',
      group: 'shared', // set both lists to same group
      animation: 150,
      onChoose: evt => {
        console.log(evt.oldIndex, evt.newIndex, evt.item)
      }
    })
  },
  beforeDestroy () {
    window.onresize = null
  },
  watch: {
    current: {
      handler (val) {
        let el = ''
        if (val == 1 && !this.songListSortable) {
          el = this.$refs['song-list']
          Sortable.create(el)
          this.songListSortable = true
        }
      },
      immediate: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/ddd/mixin.scss";

// Vue进入离开动画
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.igb-order-list-base-component {
    position: fixed;
    right: calc-attr(24);
    bottom: 0;
    width: calc-attr(920);
    // padding-bottom: calc-attr(109 + 57 - 10);
    // height: 100vh;
    box-sizing: border-box;
    top: calc-attr(57);
    //overflow: hidden;
    //background-size: cover;
    z-index: 9999;
    //overflow: hidden;

    .igb-order-list-wrap {
        padding-top: calc-attr(39);
        background: url("../../../assets/images/k/yd-bg.png") no-repeat center;
        background-size: 100% 100%;
        box-shadow: 0px 3px calc-attr(24) rgba(0, 0, 0, 0.5);

        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .order-content {
        margin-bottom: 10px;
        flex: 1;
        position: relative;
        overflow-y: hidden;
        //@include scroll-bar(0);

        &.sep {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
    }
    .btn-close {
        position: absolute;
        top: calc-attr(21);
        right: calc-attr(28);
        width: calc-attr(18);
        height: calc-attr(18);
        background: url("../../../assets/images/icon-modal-close.png") no-repeat
            center;
        background-size: calc-attr(18) calc-attr(18);
        margin: 0px;
        padding: 0px;
        cursor: pointer;

        &:hover {
            background: url("../../../assets/images/icon-modal-close-hover.png")
                no-repeat center;
            background-size: calc-attr(18) calc-attr(18);
        }
    }

    .order-tabs-list {
        width: calc-attr(272);
        height: calc-attr(44);
        line-height: calc-attr(44);
        margin: 0px auto;
        display: flex;
        align-items: center;
        border-radius: 30px;
        background: rgba(206, 206, 206, 0.1);

        span {
            width: 50%;
            text-align: center;
            font-size: calc-attr(14);
            font-weight: 400;
            color: rgba(255, 255, 255, 0.7);
            cursor: pointer;

            &.current {
                background: linear-gradient(
                    315deg,
                    rgba(255, 186, 0, 1) 0%,
                    rgba(255, 107, 88, 1) 100%
                );
                border-radius: 30px;
                color: rgba(31, 40, 53, 1);

                &:hover {
                    background: linear-gradient(
                        315deg,
                        rgba(255, 197, 41, 1) 0%,
                        rgba(255, 125, 108, 1) 100%
                    );
                }
            }
        }
    }

    .order-button-list {
        display: flex;
        align-items: center;
        height: calc-attr(33);
        padding-left: calc-attr(31);
        margin-top: calc-attr(38);
        margin-bottom: calc-attr(13);

        .btn {
            width: calc-attr(108);
            height: calc-attr(32);
            cursor: pointer;
            margin-right: calc-attr(16);

            &:last-child {
                margin-right: 0px;
            }

            &.btn-share-song {
                background: url("../../../assets/images/table/t-btn2.png")
                    no-repeat center;
                background-size: 100%;

                &:hover {
                    background: url("../../../assets/images/table/t-btn2-h.png")
                        no-repeat center;
                    background-size: 100%;
                }

                &:active {
                    background: url("../../../assets/images/table/t-btn2-s.png")
                        no-repeat center;
                    background-size: 100%;
                }

                &.dis {
                    background: url("../../../assets/images/table/t-btn2-d.png")
                        no-repeat center;
                    background-size: 100%;
                }
            }

            &.btn-loop {
                background: url("../../../assets/images/table/t-btn1.png")
                    no-repeat center;
                background-size: 100%;

                &:hover {
                    background: url("../../../assets/images/table/t-btn1-h.png")
                        no-repeat center;
                    background-size: 100%;
                }

                &:active {
                    background: url("../../../assets/images/table/t-btn1-s.png")
                        no-repeat center;
                    background-size: 100%;
                }

                &.dis {
                    background: url("../../../assets/images/table/t-btn1-d.png")
                        no-repeat center;
                    background-size: 100%;
                }
            }
        }

        span.icon {
            width: calc-attr(32);
            height: calc-attr(32);
            background: url("../../../assets/images/btn-del.png") no-repeat
                center;
            background-size: cover;
            margin-left: auto;
            margin-right: calc-attr(31);
            cursor: pointer;

            &:hover {
                background: url("../../../assets/images/btn-del-hover.png")
                    no-repeat center;
                background-size: cover;
            }
        }
    }

    .list-order {
        // height: calc(100vh - 340px);
        // height:100%;
        // overflow-y: auto;
        // @include scroll-bar(5px);
        .table {
            width: 100%;

            tbody {
                tr {
                    height: calc-attr(79);
                    line-height: calc-attr(79);
                    cursor: pointer;
                    &:not(:first-child) {
                        border-top: 1px solid rgba(49, 54, 78, 1);
                    }

                    &:hover {
                        background: rgba(255, 255, 255, 0.05);
                        td {
                            &:nth-child(1) {
                                box-shadow: inset 4px 0 0 0 #fd814a;
                            }
                            &:nth-child(3),
                            &:nth-child(5) {
                                div {
                                    visibility: visible;
                                }
                            }

                                                        &:nth-child(5) {
                                div {
                                    i {
                                        background: url("../../../assets/images/table/t-link-s.png")
                                            no-repeat center;
                                        background-size: 100%;
                                    }
                                }
                            }

                            &:last-child {
                                div {
                                    span {
                                        display: none;
                                    }

                                    i {
                                        display: block;
                                    }
                                }
                            }
                        }
                    }
                    &.current {
                        background: rgba(255, 255, 255, 0.05);
                        td {
                            .icon-leing {
                                display: block;
                            }
                            &:nth-child(3),
                            &:nth-child(5) {
                                div {
                                    visibility: visible;
                                }
                            }

                            &:last-child {
                                div {
                                    span {
                                        display: none;
                                    }

                                    i {
                                        display: block;
                                    }
                                }
                            }
                        }
                    }
                    &.sortable-ghost {
                        border-top: 1px solid rgba(249, 118, 71, 0.5);
                        outline: none !important;
                        box-shadow: none !important;
                    }
                    &.sortable-chosen {
                        outline: calc-attr(10) solid rgba(49, 52, 78, 1);
                        background: rgba(49, 52, 78, 1);
                        box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.2);
                        td {
                            &:nth-child(1) {
                                box-shadow: none;
                            }
                        }
                    }
                    &.sortable-drag {
                        outline: calc-attr(10) solid rgba(49, 52, 78, 1);
                        box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.2);
                        opacity: 1 !important;
                        td {
                            .icon-leing {
                                display: none;
                            }
                            &:nth-child(3),
                            &:nth-child(5) {
                                div {
                                    visibility: visible;
                                }
                            }

                            &:last-child {
                                div {
                                    span {
                                        display: none;
                                    }

                                    i {
                                        display: block;
                                    }
                                }
                            }
                        }
                    }
                    &.play {
                        td {
                            &:nth-child(1) {
                                span {
                                    color: rgba(255, 255, 255, 0);
                                    background: url("../../../assets/images/icon-play-lide.png")
                                        no-repeat center center;
                                    background-size: calc-attr(16) calc-attr(17);
                                }
                            }
                        }
                    }
                    /*&.collect {
                        td {
                            .icon-leing {
                                display: block;
                            }

                            &:nth-child(3),
                            &:nth-child(5) {
                                div {
                                    visibility: visible;
                                }
                            }

                            &:last-child {
                                div {
                                    span {
                                        display: none;
                                    }

                                    i {
                                        display: block;
                                    }
                                }
                            }
                        }
                    }*/

                    i.icon-del {
                        display: none;
                        width: calc-attr(36);
                        height: calc-attr(36);
                        background: url("../../../assets/images/table/t-del.png")
                            no-repeat center;
                        background-size: 100%;

                        &:hover {
                            background: url("../../../assets/images/table/t-del-h.png")
                                no-repeat center;
                            background-size: 100%;
                        }
                    }

                    td {
                        position: relative;

                        .icon-leing {
                            display: none;
                            position: absolute;
                            top: calc-attr(-60);
                            left: calc-attr(-60);
                            z-index: 1;
                            width: calc-attr(200);
                            height: calc-attr(200);
                            background: url("../../../assets/images/singer-hover-bg.png")
                                no-repeat center;
                            background-size: cover;
                            pointer-events: none;
                        }

                        &:first-child {
                            width: calc-attr(70.3);
                            position: relative;

                            /*i {
                                display: block;
                                position: absolute;
                                left: 0px;
                                top: 0px;
                                width: 4px;
                                height: 80px;
                                background: rgba(253, 129, 74, 1);
                            }*/

                            span {
                                font-size: calc-attr(18);
                                font-weight: 400;
                                color: rgba(255, 255, 255, 0.4);
                                margin-left: calc-attr(31);
                            }

                            img {
                                width: calc-attr(14.27);
                                height: calc-attr(15.54);
                                margin-left: calc-attr(29);
                            }
                        }

                        &:nth-child(2) {
                            width: calc-attr(260);

                            div {
                                display: flex;
                                align-items: center;

                                h2 {
                                    max-width: calc-attr(150);
                                    height: calc-attr(24);
                                    line-height: calc-attr(24);
                                    font-size: calc-attr(18);
                                    font-family: "PingFang SC";
                                    font-weight: normal;
                                    color: rgba(255, 255, 255, 0.8);
                                    padding: 0px;
                                    margin: 0px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }

                                span {
                                    margin-left: calc-attr(7);
                                }
                            }
                        }

                        &:nth-child(3) {
                            width: calc-attr(185);

                            div {
                                visibility: hidden;
                                display: flex;
                                align-items: center;

                                i {
                                    height: calc-attr(25);
                                    margin-right: calc-attr(23.4);

                                    &:last-child {
                                        margin-right: 0px;
                                    }

                                    &.icon-collect {
                                        width: calc-attr(22.87);
                                        background: url("../../../assets/images/table/t-c.png")
                                            no-repeat center;
                                        background-size: 100%;

                                        &:hover {
                                            background: url("../../../assets/images/table/t-c-h.png")
                                                no-repeat center;
                                            background-size: 100%;
                                        }
                                    }

                                    &.icon-collect-ok {
                                        width: calc-attr(22.87);
                                        background: url("../../../assets/images/table/t-c-s.png")
                                            no-repeat center;
                                        background-size: 100%;

                                        &:hover {
                                            background: url("../../../assets/images/table/t-c-s-h.png")
                                                no-repeat center;
                                            background-size: 100%;
                                        }
                                    }

                                    &.icon-order-by-desc {
                                        width: calc-attr(23.41);
                                        background: url("../../../assets/images/table/t-od.png")
                                            no-repeat center;
                                        background-size: 100%;

                                        &:hover {
                                            background: url("../../../assets/images/table/t-od-h.png")
                                                no-repeat center;
                                            background-size: 100%;
                                        }
                                    }

                                    &.icon-order-by-aes {
                                        width: calc-attr(23.41);
                                        background: url("../../../assets/images/table/t-oa.png")
                                            no-repeat center;
                                        background-size: 100%;

                                        &:hover {
                                            background: url("../../../assets/images/table/t-oa-h.png")
                                                no-repeat center;
                                            background-size: 100%;
                                        }
                                    }
                                }
                            }
                        }

                        &:nth-child(4) {
                            width: calc-attr(120);
                            span {
                                height: calc-attr(20);
                                font-size: calc-attr(14);
                                color: rgba(255, 255, 255, 0.7);
                            }
                        }

                        &:nth-child(5) {
                            width: 20%;
                            div {
                                visibility: hidden;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                i {
                                    width: calc-attr(21);
                                    height: calc-attr(25);
                                    margin-right: calc-attr(23.4);

                                    &:last-child {
                                        margin-right: 0px;
                                    }

                                    background: url("../../../assets/images/table/t-link.png")
                                        no-repeat center;
                                    background-size: 100%;

                                    &:hover {
                                        background: url("../../../assets/images/table/t-link-h.png")
                                            no-repeat center;
                                        background-size: calc-attr(20.67)
                                            calc-attr(20.67);
                                    }
                                }
                            }
                        }

                        &:nth-child(6) {
                            width: calc-attr(106);
                            div {
                                width: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                span {
                                    display: block;
                                    font-size: calc-attr(14);
                                    color: rgba(255, 255, 255, 0.5);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .list-song {
        // height: 100%;
        // height:calc(100vh - 340px);
        // padding: calc-attr(170) 0;
        // overflow-x: hidden;
        // overflow-y: auto;
        // @include scroll-bar(8px);

        /*
                        表格样式
                        */
        .table {
            width: 100%;

            tbody {
                tr {
                    border-top: 1px solid rgba(49, 54, 78, 1);
                    height: calc-attr(80);
                    line-height: calc-attr(80);
                    cursor: pointer;

                    &:hover {
                        background: rgba(255, 255, 255, 0.05);
                        td {
                            &:nth-child(3),
                            &:nth-child(5) {
                                div {
                                    visibility: visible;
                                }
                            }

                            &:last-child {
                                div {
                                    span {
                                        display: none;
                                    }

                                    i {
                                        display: block;
                                    }
                                }
                            }
                        }
                    }

                    &.current {
                        background: rgba(255, 255, 255, 0.05);

                        td {
                            .icon-leing {
                                display: block;
                            }

                            &:nth-child(1) {
                                box-shadow: inset 4px 0 0 0 #fd814a;
                            }
                            &:nth-child(3),
                            &:nth-child(5) {
                                div {
                                    visibility: visible;
                                }
                            }

                            &:nth-child(5) {
                                div {
                                    i {
                                        background: url("../../../assets/images/table/t-link-s.png")
                                            no-repeat center;
                                        background-size: 100%;
                                    }
                                }
                            }

                            &:last-child {
                                div {
                                    span {
                                        display: none;
                                    }

                                    i {
                                        display: block;
                                    }
                                }
                            }
                        }
                    }
                    &.play {
                        td {
                            &:nth-child(1) {
                                span {
                                    color: rgba(255, 255, 255, 0);
                                    background: url("../../../assets/images/icon-play-lide.png")
                                        no-repeat center center;
                                    background-size: calc-attr(16) calc-attr(17);
                                }
                            }
                        }
                    }

                    i.icon-del {
                        display: none;
                        width: calc-attr(36);
                        height: calc-attr(36);
                        background: url("../../../assets/images/table/t-del.png")
                            no-repeat center;
                        background-size: 100%;

                        &:hover {
                            background: url("../../../assets/images/table/t-del-h.png")
                                no-repeat center;
                            background-size: 100%;
                        }
                    }

                    td {
                        position: relative;

                        .icon-leing {
                            display: none;
                            position: absolute;
                            top: calc-attr(-60);
                            left: calc-attr(-60);
                            z-index: 1;
                            width: calc-attr(200);
                            height: calc-attr(200);
                            background: url("../../../assets/images/singer-hover-bg.png")
                                no-repeat center;
                            background-size: cover;
                        }

                        &:first-child {
                            width: calc-attr(70.3);
                            position: relative;

                            i {
                                display: block;
                                position: absolute;
                                left: 0px;
                                top: 0px;
                                width: calc-attr(4);
                                height: calc-attr(80);
                                background: rgba(253, 129, 74, 1);
                            }

                            span {
                                font-size: calc-attr(18);
                                font-weight: 400;
                                color: rgba(255, 255, 255, 0.4);
                                margin-left: calc-attr(31);
                            }

                            img {
                                width: calc-attr(14.27);
                                height: calc-attr(15.54);
                                margin-left: calc-attr(29);
                            }
                        }

                        &:nth-child(2) {
                            width: calc-attr(260);

                            div {
                                display: flex;
                                align-items: center;

                                h2 {
                                    max-width: calc-attr(150);
                                    font-size: calc-attr(18);
                                    font-weight: 500;
                                    color: rgba(255, 255, 255, 0.8);
                                    padding: 0px;
                                    margin: 0px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }

                                span {
                                    margin-left: calc-attr(7);
                                }
                            }
                        }

                        &:nth-child(3) {
                            width: calc-attr(185);

                            div {
                                visibility: hidden;
                                display: flex;
                                align-items: center;

                                i {
                                    height: calc-attr(25);
                                    margin-right: calc-attr(23.4);

                                    &:last-child {
                                        margin-right: 0px;
                                    }

                                    &.icon-collect {
                                        width: calc-attr(22.87);
                                        background: url("../../../assets/images/table/t-c.png")
                                            no-repeat center;
                                        background-size: 100%;

                                        &:hover {
                                            background: url("../../../assets/images/table/t-c-h.png")
                                                no-repeat center;
                                            background-size: 100%;
                                        }
                                    }

                                    &.icon-collect-ok {
                                        width: calc-attr(22.87);
                                        background: url("../../../assets/images/table/t-c-s.png")
                                            no-repeat center;
                                        background-size: 100%;

                                        &:hover {
                                            background: url("../../../assets/images/table/t-c-s-h.png")
                                                no-repeat center;
                                            background-size: 100%;
                                        }
                                    }
                                }
                            }
                        }

                        &:nth-child(4) {
                            span {
                                height: calc-attr(20);
                                font-size: calc-attr(14);
                                color: rgba(255, 255, 255, 0.7);
                            }
                        }

                        &:nth-child(5) {
                            width: 20%;

                            div {
                                visibility: hidden;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                i {
                                    width: calc-attr(21);
                                    height: calc-attr(25);
                                    margin-right: calc-attr(23.4);

                                    &:last-child {
                                        margin-right: 0px;
                                    }

                                    background: url("../../../assets/images/table/t-link-s.png")
                                        no-repeat center;
                                    background-size: 100%;

                                    &:hover {
                                        background: url("../../../assets/images/table/t-link-h.png")
                                            no-repeat center;
                                        background-size: calc-attr(20.67)
                                            calc-attr(20.67);
                                    }
                                }
                            }
                        }

                        &:nth-child(6) {
                            div {
                                width: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                span {
                                    display: block;
                                    font-size: calc-attr(14);
                                    color: rgba(255, 255, 255, 0.5);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
