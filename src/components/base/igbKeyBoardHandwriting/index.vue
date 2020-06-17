<template>
  <div class="igb-key-board-handwriting-base-component">
    <div class="handwriting-key-board-result">
      <span>冯</span>
      <span>黎</span>
      <span>明</span>
    </div>
    <div class="handwriting-panel">
      <div class="img-box">
        <!-- <img src="../../../assets/images/ige8.png" alt="ig8"> -->
      </div>
      <!-- <span>i歌霸</span> -->
    </div>
    <div class="handwriting-keys">
      <div class="handwriting handwriting-one">
        <span
          v-for="(item, index) in list.one"
          :key="index"
          @click="handwritingChange(item)"
          :class="{ 'key-item': !item.icon, 'key-item-icon': item.icon }"
        >
          <img
            v-if="item.icon"
            :src="`${require(`../../../assets/images/${item.icon}`)}`"
          />{{ item.label }}
        </span>
      </div>
      <div class="handwriting handwriting-two">
        <span
          v-for="(item, index) in list.two"
          :key="index"
          @click="handwritingChange(item)"
          :class="{ 'key-item': !item.icon, 'key-item-icon': item.icon }"
        >
          <img
            v-if="item.icon"
            :src="`${require(`../../../assets/images/${item.icon}`)}`"
          />{{ item.label }}
        </span>
      </div>
      <div class="handwriting handwriting-three">
        <span
          v-for="(item, index) in list.three"
          :key="index"
          @click="handwritingChange(item)"
          :class="{ 'key-item': !item.icon, 'key-item-icon': item.icon }"
        >
          <img
            v-if="item.icon"
            :src="`${require(`../../../assets/images/${item.icon}`)}`"
          />{{ item.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { HandwritingEnum } from '../../../enum/key.board.enum'
export default {
  name: 'IgbKeyBoardHandwritingBaseComponent',
  data () {
    return {
      list: {
        one: [],
        two: [],
        three: []
      }
    }
  },
  mounted () {
    this.list.one = []
    this.list.two = []
    this.list.three = []

    // 初始化
    HandwritingEnum.forEach(element => {
      if (element.icon && element.value !== 11) {
        element.label = ''
      }

      if (!element.width) {
        element.width = 108
      }

      if (element.type === 0) {
        this.list.one.push(element)
      }

      if (element.type === 1) {
        this.list.two.push(element)
      }

      if (element.type === 2) {
        this.list.three.push(element)
      }
    })
  },
  methods: {
    handwritingChange (item) {
      switch (item.value) {
        case 12:
          this.model = 1
          this.$emit('model', {
            item: item,
            model: this.model
          })
          break
        case 13:
          this.model = 0
          this.$emit('model', {
            item: item,
            model: this.model
          })
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-key-board-handwriting-base-component {
  padding: 0 calc-attr(93);
  // width: calc(100% - 186px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .handwriting-key-board-result {
    height: calc-attr(65);
    display: flex;
    align-items: center;

    background: rgba(53, 57, 89, 0.98);
    box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.35);
    border-radius: 4px;

    padding: 0px calc-attr(35);

    position: absolute;
    top: calc-attr(-76);
    left: calc-attr(98);

    span {
      margin-right: calc-attr(35);

      font-size: calc-attr(24);
      font-weight: 400;
      color: rgba(255, 142, 50, 1);

      cursor: pointer;

      &:last-child {
        margin-right: 0px;
      }
    }
  }

  //680
  .handwriting-panel {
    // width: calc(45.46% - 21px);
    padding: 0 calc-attr(10.5);
    background: rgba(36, 40, 67, 1);
    border: 2px solid rgba(54, 58, 90, 1);
    border-radius: 18px;

    font-size: calc-attr(80);
    font-weight: 400;
    color: rgba(255, 255, 255, 0.07);

    display: flex;
    align-items: center;
    justify-content: center;
    .img-box {
      width: calc-attr(680);
      height: calc-attr(240);
      background-image: url("../../../assets/images/ige8.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }

  .handwriting-keys {
    width: 54.54%;
    margin-left: calc-attr(21);

    .handwriting {
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;

      .key-item,
      .key-item-icon {
        height: calc-attr(72);
      }
      &.handwriting-one {
        margin-top: calc-attr(30);
        margin-bottom: calc-attr(12);

        span {
          width: calc(15.48% - 12px);

          //184
          &:last-child {
            width: 22.56%;
          }

          img {
            width: calc-attr(30.65);
            height: calc-attr(20.81);
          }
        }
      }

      &.handwriting-two {
        margin-bottom: calc-attr(12);

        span {
          width: calc(15.67% - 12px);

          //304
          &:last-child {
            width: 37.31%;
          }

          img {
            width: calc-attr(25);
            height: calc-attr(18.89);
          }
        }
      }

      &.handwriting-three {
        margin-bottom: calc-attr(27);

        span {
          //228
          &:first-child {
            width: calc(29.47% - 12px);

            img {
              margin-right: calc-attr(11);
              width: calc-attr(22.8);
              height: calc-attr(22.8);
            }
          }

          //136
          &:nth-child(2) {
            width: calc(18.2% - 12px);
          }

          //114
          &:nth-child(3) {
            width: calc(15.5% - 12px);
          }

          //263
          &:last-child {
            width: 36.83%;

            img {
              width: calc-attr(30.16);
              height: calc-attr(15.08);
            }
          }
        }
      }

      span {
        width: auto;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(54, 58, 90, 1);
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
        border-radius: 18px;
        text-align: center;
        margin-right: calc-attr(12);

        font-size: calc-attr(24);
        font-family: "PingFang-SC-Regular";
        font-weight: 400;
        color: rgba(255, 142, 50, 1);

        &:last-child {
          margin-right: 0px;
        }

        cursor: pointer;

        &:hover {
          background: rgba(49, 53, 88, 1);
          box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
        }

        &:active {
          background: rgba(32, 36, 67, 0.5);
          box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }
}
</style>
