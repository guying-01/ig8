<template>
  <div class="igb-song-card-list-base-component">
    <!-- <a-row :gutter="2">
      <a-col :span="6" :lg="6" :xl="4" :xxl="4" v-if="showType">
        <div
          class="song-card-list-item item-first"
          :class="`item-first-${type}`"
          v-if="showNum"
        >
          <div class="item-box"></div>
        </div>
      </a-col>
      <a-col
        :span="6"
        :lg="6"
        :xl="4"
        :xxl="4"
        v-for="(item, index) in dataSource"
        :key="index"
      > -->
        <div
          class="song-card-list-item"
          :class="{ current: item.current, play: item.play }"
          @click="changeHandller(item)"
                  v-for="(item, index) in dataSource"
        :key="index"
        >
          <div class="item-box" :class="{ 'item-box-not-num': !showNum }">
            <div class="number" v-if="showNum">
              <span>{{ (index + 1) | indexNum }}</span>
              <!--<img v-if="item.play" src="../../../assets/images/icon-play-lide.png" />-->
            </div>
            <div class="info">
              <h3>{{ item.SongName }}</h3>
              <p>
                <span>{{ item.SingerName }}</span>
                <span>|</span>
                {{ item.LanguageName }}
              </p>
              <igb-tag>{{ item.MtvStyle }}</igb-tag>
              <i class="icon icon-collect"></i>
            </div>
          </div>
          <i class="icon-leing"></i>
          <div class="box"></div>
        </div>
      <!-- </a-col>
    </a-row> -->
  </div>
</template>

<script>
export default {
  name: 'IgbSongCardListBaseComponent',
  props: {
    type: {
      type: Number,
      default: 0
    },
    /**
     * 是否显示序列号
     */
    showNum: {
      type: Boolean,
      default: true
    },
    /**
     * 是否显示分类标注
     */
    showType: {
      type: Boolean,
      default: false
    },
    /**
     * 数据源
     */
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  filters: {
    indexNum (val) {
      return val < 10 ? '0' + val : val
    }
  },
  mounted () {
    this.calcuHeight()
    window.addEventListener('resize', this.calcuHeight)
    // let itemList = document.getElementsByClassName("song-card-list-item");
    // if (itemList.length > 0) {
    //   itemList.forEach(element => {
    //     let itemWidth = element.offsetWidth / 2.35;
    //     element.style.height = `${parseFloat(itemWidth).toFixed(0)}px`;
    //   });
    // }
  },
  methods: {
    changeHandller (item) {
      this.$emit('change', item)
    },
    calcuHeight () {
      let siblingH = document.querySelectorAll('.song-card-list-item')[1]
        ? document.querySelectorAll('.song-card-list-item')[1].offsetHeight
        : 70
      if (siblingH) {
        document.querySelector('.item-first').style.height =
          siblingH - 2 + 'px'
      }
    },
    aa () {
      console.log(1)
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.calcuHeight)
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/ddd/variable.scss";
@mixin calc-width($w){
  width: calc(100vw/1920 * #{$w})
};
@mixin calc-height($h){
 height: calc(100vw/1920 * #{$h})
};
@mixin calc-line-height($lh){
 height: calc(100vw/1920 * #{$lh})
};
@mixin calc-bottom($b){
 bottom: calc(100vw/1920 * #{$b})
};
@mixin calc-font-size($fs){
  font-size:calc(100vw/1920 * #{$fs})
};
@mixin calc-pad-top($pt){
  padding-top:calc(100vw/1920 * #{$pt})
};
@mixin calc-pad-left($pl){
  padding-left:calc(100vw/1920 * #{$pl})
};
.igb-song-card-list-base-component {
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: baseline;
  flex-direction: row;
  flex-wrap: wrap;

  .song-card-list-item {
   @include calc-width(320);
   @include calc-height(136);
    // height :calc-height(320);
   @include calc-pad-top(26);
   @include calc-pad-left(27);

    // height: calc(100vw /1920 * 136);
    margin-bottom: 2px;
    // width: calc(100vw /1920 * 320);
    cursor: pointer;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    // padding: 25px 20px;
    position: relative;
    background: rgba(255, 255, 255, 0.06);
    margin-right: 2px;

    h2,
    h3,
    p {
      padding: 0px;
      margin: 0px;
    }

    &.item-first-0 {
      background: url("../../../assets/images/bg1.png") no-repeat center;
      background-size: cover;
      display: flex;
      justify-content: center;
      .item-box {
        width: calc(100% - 71px) !important;
        align-items: center;
        margin: 0;
        background: url("../../../assets/images/xingepaihangbang.png") no-repeat
          center;
        background-size: 100%;
      }
    }

    &.item-first-1 {
      background: url("../../../assets/images/bg1-1.png") no-repeat center;
      background-size: cover;
      display: flex;
      justify-content: center;
      .item-box {
        width: calc(100% - 71px) !important;
        align-items: center;
        margin: 0;
        background: url("../../../assets/images/huayubang.png") no-repeat center;
        background-size: 100%;
      }
    }

    // &.song-card-list-item {

    .icon-leing {
      display: none;
      position: absolute;
      top: -60px;
      left: -40px;
      z-index: 1;
      width: 200px;
      height: 200px;
      background: url("../../../assets/images/singer-hover-bg.png") no-repeat
        center;
      background-size: cover;
      pointer-events: none;
    }

    .box {
      display: none;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      border: 2px solid rgba(254, 131, 74, 0.5019607843137255);
    }

    &:hover {
      .box {
        display: block;
      }
      .item-box .info .icon-collect {
        display: block;
      }
    }
    &.current {
      background: rgba(255, 255, 255, 0.06)
        url("../../../assets/images/icon-duigou.png") no-repeat;
      background-size: 23px 23px;
      .icon-leing {
        display: block;
      }
      .item-box {
        .number {
          color: rgba(253, 129, 74, 1);
        }
      }
    }
    &.play {
      .item-box .number span {
        color: rgba(255, 255, 255, 0);
        background: url("../../../assets/images/icon-play-lide.png") no-repeat
          center center;
        background-size: 15.77px 16.95px;
      }
    }

    /*&.seal {
                background: rgba(255, 255, 255, 0.06) url("../../../assets/images/icon-duigou.png") no-repeat;
                background-size: 23px 23px;

                .item-box {
                    .number {
                        color: rgba(253, 129, 74, 1);
                    }
                }
            }*/

    .item-box {
      // width: calc(100% - 32px);
      // margin: 25px auto auto auto;
      display: flex;
      position: relative;

      &.item-box-not-num {
        // width: calc(100% - 58px);
      }

      .number {
        @include calc-font-size(18);
        font-family: "PingFang-SC-Regular";
        font-weight: 400;
        @include calc-height(27);
        @include calc-line-height(27);
        color: rgba(255, 255, 255, 0.4);
        padding-right: 11px;

        img {
          @include calc-height(15.77);
          @include calc-width(16.95);
        }
      }

      .info {
        h3 {
          @include calc-font-size(20);
          font-family: "PingFang-SC-Regular";
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
                    @include calc-height(27);
        @include calc-width(135);
        @include calc-line-height(27);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        p {
          @include calc-font-size(14);
          font-family: "PingFang-SC-Regular";
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          //opacity: 0.7;
          margin-top: 6px;
          display: flex;
          align-items: center;
                    @include calc-height(19);
        @include calc-line-height(19);

        }
          span {
                    @include calc-height(19);
        @include calc-line-height(19);

            &:first-child {
              width: auto;
              max-width: 65px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            &:last-child {
                                  @include calc-height(16);
        @include calc-width(12);
        @include calc-line-height(16);

              text-align: center;
              margin: 0px 10.3px;

              font-size: 12px;
              color: rgba(255, 255, 255, 0.3);
            }
          }
        }

        .tag {
          display: inline-block;
          margin-top: 5px;
        }

        .icon-collect {
          display: none;
                                            @include calc-height(17);
        @include calc-width(18);
          background: url("../../../assets/images/icon1.png") no-repeat center;
          background-size: 100%;

          position: absolute;
          right: 0px;
        @include calc-bottom(20);

          // bottom: 20px;
          z-index: 10;
          opacity: 0.5;

          &:hover {
            background: url("../../../assets/images/icon1_hover.png") no-repeat
              center;
            background-size: 100%;
            opacity: 1;
          }
        }
      }
    }

}
// }

// @media (max-width: 1680px) {
//   .igb-song-card-list-base-component {
//     > div {
//       &.song-card-list-item {
//         .item-box {
//           .number {
//             font-size: 16px;
//           }

//           .info {
//             h3 {
//               font-size: 18px;
//               width: 170px;
//               height: 20px;
//               line-height: 20px;
//             }

//             p {
//               font-size: 12px;
//               margin-top: 6px;
//               height: 16px;
//               line-height: 16px;

//               span {
//                 height: 16px;
//                 line-height: 16px;

//                 &:first-child {
//                   max-width: 110px;
//                 }
//               }
//             }

//             span.tag {
//               margin-top: 6px;
//             }
//           }
//         }
//       }
//     }
//   }
// }

// @media (max-width: 1600px) {
//   .igb-song-card-list-base-component {
//     > div {
//       &.song-card-list-item {
//         .item-box {
//           .number {
//             font-size: 16px;
//           }

//           .info {
//             h3 {
//               font-size: 18px;
//               width: 170px;
//               height: 20px;
//               line-height: 20px;
//             }

//             p {
//               font-size: 12px;
//               margin-top: 6px;
//               height: 16px;
//               line-height: 16px;

//               span {
//                 height: 16px;
//                 line-height: 16px;

//                 &:first-child {
//                   max-width: 110px;
//                 }
//               }
//             }

//             span.tag {
//               margin-top: 6px;
//             }
//           }
//         }
//       }
//     }
//   }
// }

// @media (max-width: 1440px) {
//   .igb-song-card-list-base-component {
//     > div {
//       &.song-card-list-item {
//         .item-box {
//           .number {
//             font-size: 16px;
//           }

//           .info {
//             h3 {
//               font-size: 16px;
//               width: 170px;
//               height: 20px;
//               line-height: 20px;
//             }

//             p {
//               font-size: 12px;
//               margin-top: 4px;
//               height: 16px;
//               line-height: 16px;

//               span {
//                 height: 16px;
//                 line-height: 16px;

//                 &:first-child {
//                   max-width: 110px;
//                 }
//               }
//             }

//             span.tag {
//               margin-top: 3px;
//             }
//           }
//         }
//       }
//     }
//   }
// }

// @media (max-width: 1366px) {
//   .igb-song-card-list-base-component {
//     > div {
//       &.song-card-list-item {
//         .item-box {
//           .number {
//             font-size: 16px;
//           }

//           .info {
//             h3 {
//               font-size: 16px;
//               width: 150px;
//               height: 20px;
//               line-height: 20px;
//             }

//             p {
//               font-size: 12px;
//               margin-top: 4px;
//               height: 16px;
//               line-height: 16px;

//               span {
//                 height: 16px;
//                 line-height: 16px;

//                 &:first-child {
//                   max-width: 80px;
//                 }
//               }
//             }

//             span.tag {
//               margin-top: 3px;
//             }
//           }
//         }
//       }
//     }
//   }
// }

// @media (max-width: 1280px) {
//   .igb-song-card-list-base-component {
//     > div {
//       &.song-card-list-item {
//         .item-box {
//           .number {
//             font-size: 16px;
//           }

//           .info {
//             h3 {
//               font-size: 16px;
//               width: 140px;
//               height: 20px;
//               line-height: 20px;
//             }

//             p {
//               font-size: 12px;
//               margin-top: 4px;
//               height: 16px;
//               line-height: 16px;

//               span {
//                 height: 16px;
//                 line-height: 16px;

//                 &:first-child {
//                   max-width: 80px;
//                 }
//               }
//             }

//             span.tag {
//               margin-top: 3px;
//             }
//           }
//         }
//       }
//     }
//   }
// }

// @media (max-width: 1024px) {
//   .igb-song-card-list-base-component {
//     > div {
//       width: calc(25% - 2px);

//       &.song-card-list-item {
//         .item-box {
//           .number {
//             font-size: 14px;
//           }

//           .info {
//             h3 {
//               font-size: 16px;
//               width: 130px;
//               height: 20px;
//               line-height: 20px;
//             }

//             p {
//               font-size: 12px;
//               margin-top: 4px;
//               height: 16px;
//               line-height: 16px;

//               span {
//                 height: 16px;
//                 line-height: 16px;

//                 &:first-child {
//                   max-width: 60px;
//                 }
//               }
//             }

//             span.tag {
//               margin-top: 3px;
//             }
//           }
//         }
//       }
//     }
//   }
// }
</style>
