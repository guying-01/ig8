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
          <span>{{ (index + 1) | indexNum }}</span>
          <!--<img v-if="item.play" src="../../../assets/images/icon-play-lide.png" />-->
        </div>
        <div class="info">
          <h3>{{ item.SongName }}</h3>
          <p>
            <span>{{ item.SingerName }}</span
            ><span>|</span>{{ item.LanguageName }}
          </p>
          <igb-tag>{{ item.MtvStyle }}</igb-tag>
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
  name: "IgbSongCardListBaseComponent",
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
    indexNum(val) {
      return val < 10 ? "0" + val : val;
    }
  },
  mounted() {
    // let itemList = document.getElementsByClassName("song-card-list-item");
    // if (itemList.length > 0) {
    //   itemList.forEach(element => {
    //     let itemWidth = element.offsetWidth / 2.35;
    //     element.style.height = `${parseFloat(itemWidth).toFixed(0)}px`;
    //   });
    // }
  },
  methods: {
    changeHandller(item) {
      console.log(22);
      this.$emit("change", item);
    },
    aa() {
      console.log(11);
    }
  }
};
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
    width: calc(20% - 2px);
    height: auto;
    margin-bottom: 2px;
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
        height: 48px;
        margin: 37px auto auto auto !important;
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
        height: 48px;
        margin: 37px auto auto auto !important;
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
        width: calc(100% - 32px);
        margin: 25px auto auto auto;
        display: flex;
        position: relative;
        padding-bottom: 25px;

        &.item-box-not-num {
          width: calc(100% - 58px);
        }

        .number {
          font-size: 18px;
          font-family: "PingFang-SC-Regular";
          font-weight: 400;
          height: 27px;
          line-height: 27px;
          color: rgba(255, 255, 255, 0.4);
          padding-right: 11px;

          img {
            width: 15.77px;
            height: 16.95px;
          }
        }

        .info {
          h3 {
            font-size: 20px;
            font-family: "PingFang-SC-Regular";
            font-weight: 500;
            color: rgba(255, 255, 255, 0.8);
            width: 135px;
            height: 27px;
            line-height: 27px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          p {
            font-size: 14px;
            font-family: "PingFang-SC-Regular";
            font-weight: 400;
            color: rgba(255, 255, 255, 0.7);
            //opacity: 0.7;
            margin-top: 6px;
            display: flex;
            align-items: center;
            height: 19px;
            line-height: 19px;

            span {
              height: 19px;
              line-height: 19px;

              &:first-child {
                width: auto;
                max-width: 65px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }

              &:last-child {
                width: 12px;
                height: 16px;
                line-height: 16px;
                text-align: center;
                margin: 0px 10.3px;
                font-size: 12px;
                color: rgba(255, 255, 255, 0.3);
              }
            }
          }

          .tag {
            margin-top: 17.5px;
          }

          .icon-collect {
            display: none;
            width: 18px;
            height: 17px;
            background: url("../../../assets/images/icon1.png") no-repeat center;
            background-size: 100%;

            position: absolute;
            right: 0px;
            bottom: 20px;
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

@media (max-width: 1680px) {
  .igb-song-card-list-base-component {
    > div {
      &.song-card-list-item {
        .item-box {
          .number {
            font-size: 16px;
          }

          .info {
            h3 {
              font-size: 18px;
              width: 170px;
              height: 20px;
              line-height: 20px;
            }

            p {
              font-size: 12px;
              margin-top: 6px;
              height: 16px;
              line-height: 16px;

              span {
                height: 16px;
                line-height: 16px;

                &:first-child {
                  max-width: 110px;
                }
              }
            }

            span.tag {
              margin-top: 6px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1600px) {
  .igb-song-card-list-base-component {
    > div {
      &.song-card-list-item {
        .item-box {
          .number {
            font-size: 16px;
          }

          .info {
            h3 {
              font-size: 18px;
              width: 170px;
              height: 20px;
              line-height: 20px;
            }

            p {
              font-size: 12px;
              margin-top: 6px;
              height: 16px;
              line-height: 16px;

              span {
                height: 16px;
                line-height: 16px;

                &:first-child {
                  max-width: 110px;
                }
              }
            }

            span.tag {
              margin-top: 6px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1440px) {
  .igb-song-card-list-base-component {
    > div {
      &.song-card-list-item {
        .item-box {
          .number {
            font-size: 16px;
          }

          .info {
            h3 {
              font-size: 16px;
              width: 170px;
              height: 20px;
              line-height: 20px;
            }

            p {
              font-size: 12px;
              margin-top: 4px;
              height: 16px;
              line-height: 16px;

              span {
                height: 16px;
                line-height: 16px;

                &:first-child {
                  max-width: 110px;
                }
              }
            }

            span.tag {
              margin-top: 3px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1366px) {
  .igb-song-card-list-base-component {
    > div {
      &.song-card-list-item {
        .item-box {
          .number {
            font-size: 16px;
          }

          .info {
            h3 {
              font-size: 16px;
              width: 150px;
              height: 20px;
              line-height: 20px;
            }

            p {
              font-size: 12px;
              margin-top: 4px;
              height: 16px;
              line-height: 16px;

              span {
                height: 16px;
                line-height: 16px;

                &:first-child {
                  max-width: 80px;
                }
              }
            }

            span.tag {
              margin-top: 3px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1280px) {
  .igb-song-card-list-base-component {
    > div {
      &.song-card-list-item {
        .item-box {
          .number {
            font-size: 16px;
          }

          .info {
            h3 {
              font-size: 16px;
              width: 140px;
              height: 20px;
              line-height: 20px;
            }

            p {
              font-size: 12px;
              margin-top: 4px;
              height: 16px;
              line-height: 16px;

              span {
                height: 16px;
                line-height: 16px;

                &:first-child {
                  max-width: 80px;
                }
              }
            }

            span.tag {
              margin-top: 3px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .igb-song-card-list-base-component {
    > div {
      width: calc(25% - 2px);

      &.song-card-list-item {
        .item-box {
          .number {
            font-size: 14px;
          }

          .info {
            h3 {
              font-size: 16px;
              width: 130px;
              height: 20px;
              line-height: 20px;
            }

            p {
              font-size: 12px;
              margin-top: 4px;
              height: 16px;
              line-height: 16px;

              span {
                height: 16px;
                line-height: 16px;

                &:first-child {
                  max-width: 60px;
                }
              }
            }

            span.tag {
              margin-top: 3px;
            }
          }
        }
      }
    }
  }
}
</style>
