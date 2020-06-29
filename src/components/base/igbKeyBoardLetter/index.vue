<template>
    <div class="igb-key-board-letter-base-component">
        <div class="letter-key-board-result" v-show="input">
            <div class="result-input">
                {{ input }}
            </div>
            <div
                class="result-line"
                v-show="associatedWordList.length != 0"
            ></div>
            <div class="result-list">
                <span
                    v-for="(item, index) in associatedWordList"
                    :key="index"
                    @click="handleSelect({ label: item, labelType: 'zh' })"
                >
                    {{ item }}
                </span>
            </div>
        </div>
        <div class="letter letter-one">
            <span
                v-for="(item, index) in list.one"
                :key="index"
                @click="letterChange(item)"
                :class="{
                    'key-item': !item.icon,
                    'key-item-icon': item.icon,
                    disabled: item.disabled
                }"
            >
                {{ item.icon ? "" : item.label }}
                <img
                    v-if="item.icon"
                    :class="item.icon"
                    :src="
                        `${require(`../../../assets/images/${item.icon}.png`)}`
                    "
                />
            </span>
        </div>
        <div class="letter letter-two">
            <span
                v-for="(item, index) in list.two"
                :key="index"
                @click="letterChange(item)"
                :class="{
                    'key-item': !item.icon,
                    'key-item-icon': item.icon,
                    disabled: item.disabled
                }"
            >
                {{ item.icon ? "" : item.label }}
                <img
                    v-if="item.icon"
                    :class="item.icon"
                    :src="
                        `${require(`../../../assets/images/${item.icon}.png`)}`
                    "
                />
            </span>
        </div>
        <div class="letter letter-three">
            <span
                v-for="(item, index) in list.three"
                :key="index"
                @click="letterChange(item)"
                :class="{
                    'key-item': !item.icon,
                    'key-item-icon': item.icon,
                    disabled: item.disabled
                }"
            >
                {{ item.icon ? "" : item.label }}
                <img
                    v-if="item.icon"
                    :class="item.icon"
                    :src="
                        `${require(`../../../assets/images/${item.icon}.png`)}`
                    "
                />
            </span>
        </div>
    </div>
</template>

<script>
import { LetterEnum } from '../../../enum/key.board.enum'
import { GET_INPHLP } from '@/api/api'

export default {
  name: 'IgbKeyBoardLetterBaseComponent',
  data () {
    return {
      input: '',
      list: {
        one: [],
        two: [],
        three: []
      },
      associatedWordList: [] // 联想词list
    }
  },
  mounted () {
    this.list.one = []
    this.list.two = []
    this.list.three = []

    // 拼音數據初始化
    LetterEnum.forEach(element => {
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
      this.cancelDisabled()
    })
  },
  computed: {
    enabledLetters () {
      return this.$store.state.keyboard.disableList['EnbledLetters']
    },
    associatedWord () {
      return this.$store.state.keyboard.disableList['AssociatedWords']
    },
    inputMode () {
      return this.$store.state.keyboard.mode
    },
    targetInputValue () {
      return this.$store.state.keyboard.input
    }
  },
  watch: {
    enabledLetters: {
      handler (val) {
        // 禁用第一行
        this.list.one.map((item, index) => {
          let listIndex = val.findIndex(word => {
            return item['label'] == word
          })
          if (listIndex == -1 && this.list.one[index]['canDisable']) {
            this.$set(this.list.one[index], 'disabled', true)
          } else {
            this.$set(this.list.one[index], 'disabled', false)
          }
        })
        // 禁用第二行
        this.list.two.map((item, index) => {
          let listIndex = val.findIndex(word => {
            return item['label'] == word
          })
          if (listIndex == -1 && this.list.two[index]['canDisable']) {
            this.$set(this.list.two[index], 'disabled', true)
          } else {
            this.$set(this.list.two[index], 'disabled', false)
          }
        })
        // 禁用第三行
        this.list.three.map((item, index) => {
          let listIndex = val.findIndex(word => {
            return item['label'] == word
          })
          if (
            listIndex == -1 &&
                        this.list.three[index]['canDisable']
          ) {
            this.$set(this.list.three[index], 'disabled', true)
          } else {
            this.$set(this.list.three[index], 'disabled', false)
          }
        })
      },
      deep: true
    },
    // 联想词
    associatedWord (val) {
      this.associatedWordList = val
    },
    // 中英文切换
    inputMode () {
      this.associatedWordList = []
    },
    input (val) {
      // 取消所有禁用
      if (val.length == 0) {
        this.cancelDisabled()
      }
    }
  },
  methods: {
    // 选中候选区
    handleSelect (item) {
      this.$store.dispatch('inputAddLetter', item.label)
      this.input = ''
    },
    // 取消禁用
    cancelDisabled () {
      this.$store.dispatch('setDisableList', {
        EnbledLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        AssociatedWords: []
      })
    },
    letterChange (item) {
      // 如果被禁用
      if (item.disabled) return
      // 如果是删除键
      if (item.label == 'Del') {
        if (this.input.length == 0) {
          this.$store.dispatch('inputDelLetter')
        } else {
          this.input = this.input.substr(0, this.input.length - 1)
        }
        return
      } else if (item.label == 'Space') {
        return (this.input += ' ')
      } else if (item.label == 'Yes') {
        return this.$bus.emit('keyboard-toggle', false)
      } else if (item.label == 'Enter') {
        return
      } else if (item.value == '21') {
        return this.$emit('model', {
          item: item,
          model: 1
        })
      } else if (item.value == '29') {
        return this.$emit('model', {
          item: item,
          model: 2
        })
      } else {
        this.input += item.label
      }

      // 如果是中文模式，查联想词
      if (this.inputMode == 1) {
        GET_INPHLP({
          InputText: this.$store.state.keyboard.input,
          InputMode: this.$store.state.keyboard.mode,
          ImeInput: item.label
        }).then(res => {
          this.$store.dispatch('setDisableList', res)
        })
      } else {
        this.$store.dispatch('inputAddLetter', item.label)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ddd/mixin.scss";

.igb-key-board-letter-base-component {
    padding: 0 calc-attr(92) 0 calc-attr(95);
    width: 100%;
    // width: calc(100% - 186px);
    margin: 0 auto;
    box-sizing: border-box;

    .letter-key-board-result {
        height: calc-attr(65);
        display: flex;
        align-items: center;

        background: rgba(54, 58, 90, 0.98);
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
            overflow-x: auto;
            max-width: calc-attr(800);
            white-space: nowrap;
            @include scroll-bar(2);

            span {
                // width: calc-attr(48);
                height: calc-attr(48);
                line-height: calc-attr(48);
                text-align: center;
                margin-right: 1px;
                padding: 0 calc-attr(10);

                &:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 4px;
                }
                cursor: pointer;

                &:last-child {
                    margin-right: 0px;
                }

                &.result-current {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 4px;
                }
            }
        }

        .result-line {
            width: 0px;
            height: calc-attr(24);
            border-left: 2px solid rgba(255, 255, 255, 0.1);
            margin: 0px calc-attr(45) 0px calc-attr(50);
        }
    }

    .letter {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .key-item,
        .key-item-icon {
            width: calc-attr(108);
            height: calc-attr(72);
        }

        &.letter-one {
            margin-top: calc-attr(27);
            margin-bottom: calc-attr(12);

            span {
                &.disabled {
                    background: rgba(54, 58, 90, 1);
                    color: rgba(255, 255, 255, 0.2);
                    cursor: not-allowed;
                }

                //293
                &:last-child {
                    //width: calc(20.4% - 12px);
                    width: calc-attr(293);
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
                &.disabled {
                    background: rgba(54, 58, 90, 1);
                    color: rgba(255, 255, 255, 0.2);
                    cursor: not-allowed;
                }

                //360
                &:last-child {
                    //width: calc(24.9% - 12px);
                    width: calc-attr(360);
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
                &.disabled {
                    background: rgba(54, 58, 90, 1);
                    color: rgba(255, 255, 255, 0.2);
                    cursor: not-allowed;
                }

                //159
                &:first-child {
                    //width: calc(11.4% - 12px);
                    width: calc-attr(159);
                }

                //167
                &:nth-child(9) {
                    //width: calc(12% - 12px);
                    width: calc-attr(167);
                }

                //306
                &:last-child {
                    //width: calc(21.3% - 12px);
                    width: calc-attr(306);
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
                background: rgba(32, 36, 67, 0.5);
                box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
            }
        }
    }
}
</style>
