<template>
<div class="igb-key-board-letter-base-component">
    <div class="letter-key-board-result">
        <div class="result-input">
            cheng
        </div>
        <div class="result-line"></div>
        <div class="result-list">
            <span>成</span>
            <span class="result-current">程</span>
            <span>撑</span>
        </div>
    </div>
    <div class="letter letter-one">
        <span v-for="(item,index) in list.one" :key="index" @click="letterChange(item);" :class="{'key-item':!item.icon,'key-item-icon':item.icon,'disabled':item.disabled}">
            {{item.label}}
            <img v-if="item.icon" :class="item.icon" :src="`${require(`../../../assets/images/${item.icon}.png`)}`" />
        </span>
    </div>
    <div class="letter letter-two">
        <span v-for="(item,index) in list.two" :key="index" @click="letterChange(item);" :class="{'key-item':!item.icon,'key-item-icon':item.icon,'disabled':item.disabled}">
            {{item.label}}
            <img v-if="item.icon" :class="item.icon" :src="`${require(`../../../assets/images/${item.icon}.png`)}`" />
        </span>
    </div>
    <div class="letter letter-three">
        <span v-for="(item,index) in list.three" :key="index" @click="letterChange(item);" :class="{'key-item':!item.icon,'key-item-icon':item.icon,'disabled':item.disabled}">
            {{item.label}}
            <img v-if="item.icon" :class="item.icon" :src="`${require(`../../../assets/images/${item.icon}.png`)}`" />
        </span>
    </div>
</div>
</template>

<script>
import {
  LetterEnum
} from '../../../enum/key.board.enum'
export default {
  name: 'IgbKeyBoardLetterBaseComponent',
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

    // 拼音數據初始化
    LetterEnum.forEach(element => {
      if (element.icon) {
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

    this.$nextTick(() => {
      let height = 0
      let itemList = document.getElementsByClassName('key-item')
      if (itemList.length > 0) {
        itemList.forEach(element => {
          let itemWidth = element.offsetWidth / parseFloat((element.offsetWidth / 72)).toFixed(2)
          element.style.height = `${itemWidth}px`
          height = element.offsetHeight
        })
      }
      let itemList1 = document.getElementsByClassName('key-item-icon')
      if (itemList1.length > 0) {
        itemList1.forEach(element => {
          element.style.height = `${height}px`
        })
      }
    })
  },
  methods: {
    letterChange (item) {
      switch (item.value) {
        case 21:
          this.$emit('model', {
            item: item,
            model: 1
          })
          break
        case 29:
          this.$emit('model', {
            item: item,
            model: 2
          })
          break
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-key-board-letter-base-component {
    padding:0 calc-attr(93);
    width: 100%;
    // width: calc(100% - 186px);
    margin: 0 auto;
    box-sizing: border-box;

    .letter-key-board-result {
        height: calc-attr(65);
        display: flex;
        align-items: center;

        background: rgba(54, 58, 90, .98);
        box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.35);
        border-radius: 4px;

        position: absolute;
        top: calc-attr(-76);
        left: calc-attr(98);

        .result-input,
        .result-list {
            font-size: calc-attr(24);
            font-weight: 400;
            color: rgba(255, 142, 50, 1);
            opacity: 1;
        }

        .result-input {
            padding-left: calc-attr(59);
        }

        .result-list {
            padding-right: calc-attr(54);
            display: flex;
            align-items: center;

            span {
                width: calc-attr(48);
                height: calc-attr(48);
                line-height: calc-attr(48);
                text-align: center;
                margin-right: 1px;

                cursor: pointer;

                &:last-child {
                    margin-right: 0px;
                }

                &.result-current {
                    background: rgba(255, 255, 255, .05);
                    border-radius: 4px;
                }
            }
        }

        .result-line {
            width: 0px;
            height: calc-attr(24);
            border: 2px solid rgba(255, 255, 255, .1);
            margin: 0px calc-attr(45) 0px calc-attr(50);
        }
    }

    .letter {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        &.letter-one {
            margin-top: calc-attr(27);
            margin-bottom: calc-attr(12);

            span {
                width: calc(8% - 12px);

                &.disabled {
                    background: rgba(54, 58, 90, 1);
                    color: rgba(255, 255, 255, .2);
                    cursor: not-allowed;
                }

                //293
                &:last-child {
                    width: calc(20.4% - 12px);
                }

                img {
                    width: calc-attr(30.65);
                    height: calc-attr(20.81);
                }
            }
        }

        &.letter-two {
            margin-bottom: calc-attr(12);

            span {
                width: calc(8% - 12px);

                &.disabled {
                    background: rgba(54, 58, 90, 1);
                    color: rgba(255, 255, 255, .2);
                    cursor: not-allowed;
                }

                //360
                &:last-child {
                    width: calc(24.9% - 12px);
                }

                img {
                    width: calc-attr(25);
                    height: calc-attr(18.89);
                }
            }
        }

        &.letter-three {
            margin-bottom: calc-attr(27);

            span {
                width: calc(8% - 12px);

                &.disabled {
                    background: rgba(54, 58, 90, 1);
                    color: rgba(255, 255, 255, .2);
                    cursor: not-allowed;
                }

                //159
                &:first-child {
                    width: calc(11.4% - 12px);
                }

                //167
                &:nth-child(9) {
                    width: calc(12% - 12px);
                }

                //306
                &:last-child {
                    width: calc(21.3% - 12px);
                }

                img {
                    width: calc-attr(30.16);
                    height: calc-attr(15.08);
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
                margin-right: 0px !important;
            }

            cursor: pointer;

            &:hover {
                background: rgba(49, 53, 88, 1);
                box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
            }

            &:active {
                background: rgba(32, 36, 67, .5);
                box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
            }
        }
    }
}
</style>
