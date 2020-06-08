<template>
<div class="igb-pages-detail-song-by-list">
    <div class="page-header">
        <div class="page-left">
            <img src="../../assets/images/bgs.png" />
        </div>
        <div class="page-right">
            <h1>
                你的答案
                <span>歌单</span>
                <p><span>歌曲29</span><span>|</span><span>播放12</span></p>
            </h1>
            <div class="time"><img src="../../assets/images/tg.png" />轨迹里&nbsp;&nbsp;<span>2020.09.09&nbsp;&nbsp;创建</span></div>
            <div class="tag">
                <div>标签：</div>
                <div class="tags">
                    <span>标签</span>
                    <span>标签</span>
                </div>
            </div>
            <div class="info">
                <div>简介：</div>
                <div class="content">
                    <p class="text">本歌单对梦幻旋律/氛围风格的独立/另类音乐进行场景归类，深入了解可以搜索优秀专题歌单。我们听歌经常接触到一类词语：缥缈、飞行、空灵、痴迷、酥骨。这些披着indie大衣看似另类实则早已被主流本歌单对梦幻旋律/氛围风格的独立/另类音乐进行场景归类，深入了解可以搜索优秀专题歌单。我们听歌经常接触到一类词语：缥缈、飞行、空灵、痴迷、酥骨。这些披着大衣看似另类实则早已被主流</p>
                    <span v-if="btnExp" :class="{'zk':!show,'sq':show}" @click="opshen(show);">{{!show?'展开':'收起'}}</span>
                </div>
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
  name: 'IgbPagesDetailSongByListComponent',
  data () {
    return {
      mode: 'list',
      show: false,
      btnExp: false,
      baseHeight: 0,
      textHeight: 0,
      list: [{
        value: '01',
        label: '千面',
        name: '逍遥乐队',
        lan: '国语',
        tag: 1
      },
      {
        value: '02',
        label: '桥边姑娘',
        name: '垂耳兔',
        lan: '国语',
        tag: 1
      },
      {
        value: '03',
        label: '世界这么大还是遇见你',
        name: '程响',
        lan: '国语',
        tag: 0,
        current: true
      },
      {
        value: '04',
        label: '你的答案',
        name: '酷',
        lan: '国语',
        tag: 0
      },
      {
        value: '05',
        label: '桥边姑娘',
        name: '垂耳兔',
        lan: '国语',
        tag: 0
      },
      {
        value: '06',
        label: '千面',
        name: '逍遥乐队',
        lan: '国语',
        tag: 1
      },
      {
        value: '07',
        label: '世界这么大还会遇见你',
        name: '程响',
        lan: '国语',
        tag: 0
      },
      {
        value: '08',
        label: '世界这么大还会遇见你',
        name: '垂耳兔',
        lan: '程响',
        tag: 1
      },
      {
        value: '09',
        label: '你的答案',
        name: '酷',
        lan: '国语',
        tag: 0
      },
      {
        value: '10',
        label: '桥边姑娘',
        name: '垂耳兔',
        lan: '国语',
        tag: 0
      },
      {
        value: '11',
        label: '千面',
        name: '逍遥乐队',
        lan: '国语',
        tag: 1
      },
      {
        value: '12',
        label: '桥边姑娘',
        name: '垂耳兔',
        lan: '国语',
        tag: 1
      },
      {
        value: '13',
        label: '世界这么大还是遇见你',
        name: '程响',
        lan: '国语',
        tag: 0
      },
      {
        value: '14',
        label: '你的答案',
        name: '酷',
        lan: '国语',
        tag: 0
      },
      {
        value: '15',
        label: '桥边姑娘',
        name: '垂耳兔',
        lan: '国语',
        tag: 0
      }
      ],
      tableData: [{
        num: '01',
        label: '你的答案',
        tag: 0,
        singerName: '郭富城',
        singerType: '国语',
        name: '专辑名称',
        time: '02:00'
      }, {
        num: '02',
        label: '死了都要爱',
        tag: 0,
        singerName: '信乐团',
        singerType: '国语',
        name: '专辑名称',
        time: '02:00'
      },
      {
        num: '03',
        label: '成都',
        tag: 0,
        singerName: '赵雪',
        singerType: '国语',
        name: '专辑名称',
        time: '02:00',
        current: true
      },
      {
        num: '04',
        label: '我不是真正的快乐',
        tag: 1,
        singerName: '阿信',
        singerType: '国语',
        name: '专辑名称',
        time: '02:00'
      },
      {
        num: '05',
        label: '你的答案',
        tag: 0,
        singerName: '郭富城',
        singerType: '国语',
        name: '专辑名称',
        time: '02:00',
        play: true
      },
      {
        num: '06',
        label: '死了都要爱',
        tag: 0,
        singerName: '信乐团',
        singerType: '国语',
        name: '专辑名称',
        time: '02:00'
      }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.baseHeight = 0
      this.textHeight = 0

      let contentEl = document.getElementsByClassName('content')

      if (contentEl.length > 0) {
        contentEl.forEach(element => {
          this.baseHeight = element.offsetHeight
        })
      }

      let textEl = document.getElementsByClassName('text')
      if (textEl.length > 0) {
        textEl.forEach(element => {
          this.textHeight = element.scrollHeight
        })
      }

      if (this.textHeight > this.baseHeight) {
        this.btnExp = true
      }
    })
  },
  methods: {
    modeChangeHandller (type) {
      this.mode = type
    },
    opshen () {
      if (!this.btnExp) {
        return
      }

      this.show = !this.show

      if (this.show) {
        let contentEl = document.getElementsByClassName('content')

        if (contentEl.length > 0) {
          contentEl.forEach(element => {
            element.style.height = `${this.textHeight}px`
          })
        }
      } else {
        let contentEl = document.getElementsByClassName('content')

        if (contentEl.length > 0) {
          contentEl.forEach(element => {
            element.style.height = `23px`
          })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/ddd/mixin.scss";

.igb-pages-detail-song-by-list {
    .list-scrollbar {
        /*height: calc(100vh - 535px);
        overflow-x: hidden;
        overflow-y: auto;
        @include scroll-bar(0px);*/
    }

    .no-more {
        margin-top: calc-attr(34);
        width: 100%;
        font-size: calc-attr(14);
        font-weight: 400;
        color: rgba(255, 255, 255, .5);
        text-align: center;
    }

    .page-header {
        display: flex;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        padding-top: calc-attr(43);
        padding-bottom: calc-attr(30);

        .page-left {
            width: calc-attr(184);
            height: calc-attr(184);

            img {
                width: 100%;
                height: auto;
            }
        }

        .page-right {
            flex: 1;
            padding-left: calc-attr(20);

            h1,
            p {
                padding: 0px !important;
                margin: 0px !important;
            }

            h1 {
                height: calc-attr(42);
                line-height: calc-attr(42);
                font-size: calc-attr(30);
                font-weight: 500;
                color: rgba(255, 255, 255, .9);
                display: flex;
                align-items: center;

                >span {
                    &:first-child {
                        height: calc-attr(20);
                        line-height: calc-attr(18);
                        text-align: center;
                        background: rgba(253, 129, 74, .2);
                        border-radius: 2px;

                        font-size: calc-attr(14);
                        color: rgba(253, 129, 74, 1);

                        margin-left: calc-attr(6);
                        margin-top: calc-attr(9);
                    }
                }

                p {
                    font-size: calc-attr(14);
                    font-weight: 400;
                    color: rgba(237, 239, 242, 1);
                    margin-left: auto !important;

                    display: flex;
                    align-items: center;

                    span {
                        margin-top: calc-attr(9);
                        height: calc-attr(20);
                        line-height: calc-attr(20);

                        &:nth-child(2) {
                            color: #676767;
                            margin-left: calc-attr(20);
                            margin-right: calc-attr(20);
                        }
                    }
                }
            }

            >div {
                display: flex;
                align-items: flex-start;
                font-size: calc-attr(14);
            }

            .time {
                color: rgba(255, 255, 255, .9);
                margin-top: calc-attr(9);
                height: calc-attr(20);
                line-height: calc-attr(20);

                img {
                    width: calc-attr(18);
                    height: calc-attr(18);
                    margin-right: calc-attr(10);
                    cursor: pointer;
                }
                span {
                    color: rgba(255, 255, 255, .7);
                }
            }

            .tag {
                margin-top: calc-attr(43);
            }

            .info {
                margin-top: calc-attr(10);
            }

            .tag,
            .info {
                div {
                    // height: 23px;
                    overflow: hidden;
                    color: rgba(255, 255, 255, .7);

                    &:first-child {
                        // width: 45px;
                    }

                    &:last-child {
                        flex: 1;
                        display: flex;

                        p {
                            width: 90%;
                            height: auto;
                        }

                        &.tags {
                            align-items: flex-start;

                            span {
                                // height: 18px;
                                // line-height: 18px;
                                text-align: center;
                                background: rgba(253, 129, 74, .2);
                                border-radius: 2px;

                                font-size: calc-attr(12);
                                color: rgba(253, 129, 74, 1);
                                opacity: 1;

                                margin-right: calc-attr(18);
                            }
                        }

                        &.content {
                            span {
                                margin-left: calc-attr(80);
                                color: rgba(255, 155, 36, 1);
                                padding-right: calc-attr(20);
                                cursor: pointer;

                                &.zk {
                                    background: url("../../assets/images/icon-zhankai.png") no-repeat top right;
                                    background-position-y: calc-attr(4);
                                    background-size: calc-attr(14);

                                    &:hover {
                                        background: url("../../assets/images/icon-zhankai-hover.png") no-repeat top right;
                                        background-position-y: calc-attr(4);
                                        background-size: calc-attr(14);
                                    }
                                }

                                &.sq {
                                    background: url("../../assets/images/icon-shouqi.png") no-repeat top right;
                                    background-position-y: calc-attr(4);
                                    background-size: calc-attr(14);

                                    &:hover {
                                        background: url("../../assets/images/icon-shouqi-hover.png") no-repeat top right;
                                        background-position-y: calc-attr(4);
                                        background-size: calc-attr(14);
                                    }
                                }

                                &:hover {
                                    color: rgba(229, 87, 18, 1);

                                }
                            }
                        }
                    }
                }
            }

        }
    }

    .title {
        display: flex;
        align-items: center;
        height: calc-attr(30);
        line-height: calc-attr(30);

        font-size: calc-attr(20);
        font-weight: 500;
        color: rgba(255, 255, 255, .8);
        padding: 0px;
        margin: calc-attr(23) 0 calc-attr(20) 0;

        .tab-mode {
            flex: 1;
            text-align: right;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .tab-mode-refresh {
                background: url('../../assets/images/icon-refresh.png') no-repeat 0px center;
                background-size: calc-attr(20);
                font-size: calc-attr(14);
                font-family: 'PingFang-SC-Regular';
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
                padding-left: calc-attr(25);
                padding-right: calc-attr(35);
                opacity: .5;
                cursor: pointer;

                &:hover {
                    opacity: .7;
                }
            }

            .tab-mode-item {
                display: block;
                width: calc-attr(48);
                height: calc-attr(30);
                line-height: calc-attr(30);
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
                    width: calc-attr(16);
                    position: absolute;
                    top: calc-attr(8);
                    left: calc-attr(16)
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
                        top: calc-attr(7) !important;
                    }
                }

            }
        }
    }
}
</style>
