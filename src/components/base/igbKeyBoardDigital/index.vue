<template>
    <div class="igb-key-board-digital-base-component">
        <div class="digital digital-one">
            <span
                v-for="(item, index) in list.one"
                :key="index"
                @click="digitalChange(item)"
                :class="{ 'key-item': !item.icon, 'key-item-icon': item.icon }"
            >
                {{ item.value === 0 ? "" : item.icon ? "" : item.label }}
                <input type="text" v-if="item.value === 0" v-model="input" />
                <img
                    v-if="item.icon"
                    :src="`${require(`../../../assets/images/${item.icon}`)}`"
                />
            </span>
        </div>
        <div class="digital digital-two">
            <span
                v-for="(item, index) in list.two"
                :key="index"
                @click="digitalChange(item)"
                :class="{
                    'key-item': !item.icon,
                    'key-item-icon': item.icon,
                    disabled: item.disabled
                }"
            >
                {{ item.icon ? "" : item.label }}
                <img
                    v-if="item.icon"
                    :src="`${require(`../../../assets/images/${item.icon}`)}`"
                />
            </span>
        </div>
        <div class="digital digital-three">
            <span
                v-for="(item, index) in list.three"
                :key="index"
                @click="digitalChange(item)"
                :class="{ 'key-item': !item.icon, 'key-item-icon': item.icon }"
            >
                {{ item.icon ? "" : item.label }}
                <img
                    v-if="item.icon"
                    :src="`${require(`../../../assets/images/${item.icon}`)}`"
                />
            </span>
        </div>
    </div>
</template>

<script>
import { DigitalChangeEnum } from '../../../enum/key.board.enum'
export default {
  name: 'IgbKeyBoardDigitalBaseComponent',
  data () {
    return {
      input: '',
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
    DigitalChangeEnum.forEach(element => {
      // if (element.icon) {
      //   element.label = ''
      // }

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
  computed: {
    enabledLetters () {
      return this.$store.state.keyboard.disableList['EnbledLetters']
    },
    targetInputValue () {
      return this.$store.state.keyboard.input
    }
  },
  watch: {
    enabledLetters: {
      handler (val) {
        console.log(val)
        this.list.two.map((item, index) => {
          let listIndex = val.findIndex(word => {
            return item['label'] == word
          })
          if (listIndex == -1 && this.list.two[index]['canDisable']) {
            this.$set(this.list.two[index], 'disabled', true)
          }
        })
      },
      deep: true
    },
    targetInputValue: {
      handler (val) {
        this.input = val
      },
      immediate: true
    }
    // this.list.two.map((item, index) => {
    //   val.map(word => {
    //     if (item['label'] != word && item['canDisable']) {
    //       console.log(item['label'], word)
    //       item.disabled = true
    //     }
    //   })
    // })
  },
  methods: {
    digitalChange (item) {
      switch (item.value) {
        case 13:
          this.$emit('model', {
            item: item,
            model: 0
          })
          break
        case 20:
          this.$emit('model', {
            item: item,
            model: 2
          })
          this.input = ''
          break
        default:
          this.$store.dispatch('inputAddLetter', item)
      }

      if (item.label == 'Yes') {
        return this.$bus.emit('keyboard-toggle', false)
      }
    },
    disableBtn (res) {
      console.log(res)
      if (res.HintWords) {
        this.list.two.map(item => {
          res.HintWords.map(word => {
            if (item['label'] == word) {
              item.disable = true
            }
          })
        })
      }
      console.log(res, this.list.two)
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-key-board-digital-base-component {
    padding: 0 calc-attr(97);
    // width: calc(100% - 186px);
    margin: 0 auto;

    .digital {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        .key-item,
        .key-item-icon {
            height: calc-attr(72);
        }
        &.digital-one {
            margin-top: calc-attr(30);
            margin-bottom: calc-attr(12);

            span {
                &:first-child {
                    //width: calc(87.65% - 12px);
                    width: calc-attr(1296);
                    background: none !important;
                    box-shadow: none !important;
                    &.disabled {
                        background: rgba(54, 58, 90, 1);
                        color: rgba(255, 255, 255, 0.2);
                        cursor: not-allowed;
                    }
                    &:hover {
                        background: none !important;
                        box-shadow: none !important;
                    }

                    &:active {
                        background: none !important;
                        box-shadow: none !important;
                    }

                    input {
                        outline: none;
                        width: 100%;
                        height: 90%;
                        background: rgba(36, 40, 67, 0.98);
                        border: 2px solid rgba(54, 66, 88, 0.98);
                        border-radius: 18px;
                        padding: 0px calc-attr(31);

                        font-size: calc-attr(30);
                        font-weight: 400;
                        color: rgba(255, 142, 50, 1);
                        letter-spacing: 0.1em;
                    }
                }

                &:last-child {
                    width: calc-attr(184);
                }

                img {
                    width: calc-attr(30.65);
                    height: calc-attr(20.81);
                }
            }
        }

        &.digital-two {
            margin-bottom: calc-attr(12);

            span {
                //width: calc(8% - 12px);
                width: calc-attr(108);
                &.disabled {
                    background: rgba(54, 58, 90, 1);
                    color: rgba(255, 255, 255, 0.2);
                    cursor: not-allowed;
                }
                &:last-child {
                    //width: 19.69%;
                    width: calc-attr(294);
                }

                img {
                    width: calc-attr(25);
                    height: calc-attr(18.89);
                }
            }
        }

        &.digital-three {
            margin-bottom: calc-attr(27);

            span {
                //width: calc(8% - 12px);
                width: calc-attr(108);
                &.disabled {
                    background: rgba(54, 58, 90, 1);
                    color: rgba(255, 255, 255, 0.2);
                    cursor: not-allowed;
                }
                //159
                &:first-child {
                    //width: calc(11.45% - 12px);
                    width: calc-attr(159);
                }

                //270
                &:nth-child(5) {
                    //width: calc(18.86% - 12px);
                    width: calc-attr(270);
                }

                //167
                &:nth-child(8) {
                    //width: calc(12% - 12px);
                    width: calc-attr(167);
                }

                //263
                &:last-child {
                    //width: 17.63%;
                    width: calc-attr(263);
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
</style>
