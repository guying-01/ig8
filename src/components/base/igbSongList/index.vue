<template>
  <div class="igb-song-list-base-component">
    <div
      class="song-list-item"
      v-for="(item, index) in dataSource"
      :key="index"
      :class="{ current: item.current }"
      @click="changeHandller()"
    >
      <div class="cover">
        <img :src="`${require(`../../../assets/images/${item.src}.png`)}`" />
        <p class="name">{{ item.singerName }}</p>
      </div>
      <div class="card-info">
        <div>
          <h3>{{ item.songName }}</h3>
          <p>
            <span v-for="(items, j) in item.tags" :key="j">{{ items }}</span>
          </p>
          <i class="icon-collect"></i>
        </div>
      </div>
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IgbSongListBaseComponent',
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    // let itemList = document.getElementsByClassName("song-list-item");
    // if (itemList.length > 0) {
    //     itemList.forEach(element => {
    //         let itemWidth = element.offsetWidth / 0.76;
    //         element.style.height = `${parseFloat(itemWidth).toFixed(0)}px`;
    //     });
    // }
  },
  methods: {
    changeHandller () {
      this.$emit('change', {})
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-song-list-base-component {
  width: 100%;
  margin: 0 auto;
  display: flex;
  // align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .song-list-item {
    width: calc-attr(244);
    height: calc-attr(320);
    background: rgba(253, 253, 253, 0.05);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: calc-attr(25);
    position: relative;
    margin-right: calc-attr(10);

    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(9),
    &:nth-child(10),
    &:nth-child(11),
    &:nth-child(12) {
      margin-bottom: 0px;
    }

    .box {
      display: none;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 2px solid rgba(248, 134, 51, 0.5058823529411764);
    }

    &:hover {
      background: rgba(0, 0, 0, 0.5);

      .box {
        display: block;
      }

      .card-info {
        > div {
          .icon-collect {
            visibility: visible;
          }
          h3 {
            color: #fff;
          }
        }
      }

      .cover {
        .name {
          color: #fff;
        }
      }
    }

    .cover {
      height: calc-attr(243.27);
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
      }

      .name {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: calc-attr(63);
        line-height: calc-attr(90);
        background: linear-gradient(
          360deg,
          rgba(28, 34, 46, 1) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        font-size: calc-attr(12);
        font-family: "PingFang-SC-Regular";
        color: rgba(255, 255, 255, 0.7);
        margin: 0px;
        padding: 0px 0px 0px calc-attr(15);
      }
    }

    .card-info {
      height: calc-attr(76);

      > div {
        // width: calc(100% - 32px);
        padding:0 calc-attr(16);
        position: relative;
        margin: 0 auto;

        .icon-collect {
          // visibility: hidden;
          position: absolute;
          right: calc-attr(16);
          bottom: calc-attr(0);
          display: block;
          width: calc-attr(18.18);
          height: calc-attr(18);
          background: url("../../../assets/images/ic.png") no-repeat center;
          background-size: 100%;
          z-index: 9;

          &:hover {
            background: url("../../../assets/images/ich.png") no-repeat center;
            background-size: 100%;
          }

          &:active {
            background: url("../../../assets/images/ics.png") no-repeat center;
            background-size: 100%;
          }
        }
      }

      h3,
      p {
        width: 100%;
        padding: 0px;
        margin: 0px;
      }

      h3 {
        font-size: calc-attr(16);
        height: calc-attr(22);
        line-height: calc-attr(22);
        font-family: "PingFang SC";
        font-weight: normal;
        color: rgba(255, 255, 255, 0.8);
        margin: calc-attr(12) auto auto auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      p {
        display: flex;
        align-items: center;
        margin-top: calc-attr(10);

        span {
           width: calc-attr(32);
          height: calc-attr(16);
          line-height: calc-attr(16);
          background: rgba(253, 129, 74, 0.2);
          border-radius: 2px;
          text-align: center;
          font-size: calc-attr(12);
          font-family: "PingFang-SC-Regular";
          color: rgba(253, 129, 74, 1);
          margin-right: calc-attr(6);
        }
      }
    }
  }
}
</style>
