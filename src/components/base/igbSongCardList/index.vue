<template>
  <div class="igb-song-card-list-base-component">
    <div
      v-if="showType"
      class="song-card-list-item item-first"
      :class="`item-first-${type}`"
    >
      <div class="item-box"></div>
    </div>
    <div
      class="song-card-list-item"
      v-for="(item, index) in dataSource"
      :key="index"
      :class="{ current: item.current, play: item.play }"
      @click="changeHandller(item)"
    >
      <div class="item-box" :class="{ 'item-box-not-num': !showNum }">
        <div class="number" v-if="showNum">
          <span>{{ item.value }}</span>
          <!--<img v-if="item.play" src="../../../assets/images/icon-play-lide.png" />-->
        </div>
        <div class="info">
          <h3>{{ item.label }}</h3>
          <p>
            <span>{{ item.name }}</span
            ><span>|</span>{{ item.lan }}
          </p>
          <igb-tag :type="item.tag"></igb-tag>
          <i class="icon icon-collect"></i>
        </div>
      </div>
      <i class="icon-leing"></i>
      <div class="box"></div>
    </div>
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
  mounted () {
    // let itemList = document.getElementsByClassName('song-card-list-item')
    // if (itemList.length > 0) {
    //   itemList.forEach(element => {
    //     let itemWidth = element.offsetWidth / 2.35
    //     element.style.height = `${parseFloat(itemWidth).toFixed(0)}px`
    //   })
    // }
  },
  methods: {
    changeHandller (item) {
      console.log(22)
      this.$emit('change', item)
    },
    aa () {
      console.log(11)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/ddd/variable.scss";

.igb-song-card-list-base-component {
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: baseline;
  flex-direction: row;
  flex-wrap: wrap;

  > div {
    height: calc-attr(136);
    padding-top: calc-attr(26);
    padding-left: calc-attr(27);
    width: calc-attr(320);
    // width: calc(20% - 2px);
    margin-bottom: 2px;
    margin-right: 2px;
    background: rgba(255, 255, 255, 0.06);
    opacity: 1;

    h2,
    h3,
    p {
      padding: 0px;
      margin: 0px;
    }

    &.item-first-0 {
      background: url("../../../assets/images/bg1.png") no-repeat center;
      background-size: cover;

      .item-box {
        width: calc(100% - 71px) !important;
        height: calc-attr(48);
        margin: 0 auto auto auto !important;
        margin-top: calc-attr(37);
        background: url("../../../assets/images/xingepaihangbang.png") no-repeat
          center;
        background-size: 100%;
      }
    }

    &.item-first-1 {
      background: url("../../../assets/images/bg1-1.png") no-repeat center;
      background-size: cover;

      .item-box {
        width: calc(100% - 71px) !important;
        height: calc-attr(48);
        margin: 0 auto auto auto !important;
        margin-top: calc-attr(37);
        background: url("../../../assets/images/huayubang.png") no-repeat center;
        background-size: 100%;
      }
    }

    &.song-card-list-item {
      cursor: pointer;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      position: relative;

      .icon-leing {
        display: none;
        position: absolute;
        top: calc-attr(-60);
        left: calc-attr(-40);
        z-index: 1;
        height: calc-attr(200);
        width: calc-attr(200);
        background: url("../../../assets/images/singer-hover-bg.png") no-repeat
          center;
        background-size: cover;
        pointer-events: none;
      }

      .box {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
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
        width: calc(100% - 32px);
        // margin: 25px auto auto auto;
        display: flex;
        position: relative;

        &.item-box-not-num {
          width: calc(100% - 58px);
        }

        .number {
          font-size: calc-attr(18);
          font-family: "PingFang-SC-Regular";
          font-weight: 400;
          height: calc-attr(27);
          width: calc-attr(27);
          color: rgba(255, 255, 255, 0.4);
          padding-right: calc-attr(11);

          img {
            width: calc-attr(15.77);
            height: calc-attr(16.95);
          }
        }

        .info {
          h3 {
            height: calc-attr(27);
            width: calc-attr(135);
            line-height: calc-attr(27);
            font-size: calc-attr(20);
            font-family: "PingFang-SC-Regular";
            font-weight: 500;
            color: rgba(255, 255, 255, 0.8);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          p {
            font-size: calc-attr(14);
            font-family: "PingFang-SC-Regular";
            font-weight: 400;
            color: rgba(255, 255, 255, 0.7);
            //opacity: 0.7;
            margin-top: 6px;
            display: flex;
            align-items: center;
            height: calc-attr(19);
            line-height: calc-attr(19);

            span {
              height: calc-attr(19);
              line-height: calc-attr(19);
              &:first-child {
                width: auto;
                max-width: 65px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }

              &:last-child {
                width: calc-attr(12);
                height: calc-attr(16);
                line-height: calc-attr(16);
                text-align: center;
                margin-left: calc-attr(10.3);
                margin-right: calc-attr(10.3);
                font-size: calc-attr(12);
                color: rgba(255, 255, 255, 0.3);
              }
            }
          }

          .tag {
            margin-top: calc-attr(17.5);
          }

          .icon-collect {
            display: none;
            width: calc-attr(18);
            height: calc-attr(17);
            background: url("../../../assets/images/icon1.png") no-repeat center;
            background-size: 100%;

            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 10;
            opacity: 0.5;

            &:hover {
              background: url("../../../assets/images/icon1_hover.png")
                no-repeat center;
              background-size: 100%;
              opacity: 1;
            }
          }
        }
      }
    }
  }
}

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
