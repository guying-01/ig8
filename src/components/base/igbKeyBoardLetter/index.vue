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
} from "../../../enum/key.board.enum";
export default {
    name: "IgbKeyBoardLetterBaseComponent",
    data() {
        return {
            list: {
                one: [],
                two: [],
                three: []
            }
        };
    },
    mounted() {
        this.list.one = [];
        this.list.two = [];
        this.list.three = [];

        //拼音數據初始化
        LetterEnum.forEach(element => {
            if (element.icon) {
                element.label = "";
            }

            if (!element.width) {
                element.width = 108;
            }

            if (element.type === 0) {
                this.list.one.push(element);
            }

            if (element.type === 1) {
                this.list.two.push(element);
            }

            if (element.type === 2) {
                this.list.three.push(element);
            }
        });

        this.$nextTick(() => {
            let height = 0;
            let itemList = document.getElementsByClassName("key-item");
            if (itemList.length > 0) {
                itemList.forEach(element => {
                    let itemWidth = element.offsetWidth / parseFloat((element.offsetWidth / 72)).toFixed(2);
                    element.style.height = `${itemWidth}px`;
                    height = element.offsetHeight;
                });
            }
            let itemList1 = document.getElementsByClassName("key-item-icon");
            if (itemList1.length > 0) {
                itemList1.forEach(element => {
                    element.style.height = `${height}px`;
                });
            }
        });
    },
    methods: {
        letterChange(item) {
            switch (item.value) {
                case 21:
                    this.$emit('model', {
                        item: item,
                        model: 1
                    });
                    break;
                case 29:
                    this.$emit('model', {
                        item: item,
                        model: 2
                    });
                    break;
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.igb-key-board-letter-base-component {
    width: calc(100% - 186px);
    margin: 0 auto;

    .letter-key-board-result {
        height: 65px;
        display: flex;
        align-items: center;

        background: rgba(54, 58, 90, .98);
        box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.35);
        border-radius: 4px;

        position: absolute;
        top: -76px;
        left: 98px;

        .result-input,
        .result-list {
            font-size: 24px;
            font-weight: 400;
            color: rgba(255, 142, 50, 1);
            opacity: 1;
        }

        .result-input {
            padding-left: 59px;
        }

        .result-list {
            padding-right: 54px;
            display: flex;
            align-items: center;

            span {
                width: 48px;
                height: 48px;
                line-height: 48px;
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
            height: 24px;
            border: 2px solid rgba(255, 255, 255, .1);
            margin: 0px 45px 0px 50px;
        }
    }

    .letter {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        &.letter-one {
            margin-top: 27px;
            margin-bottom: 12px;

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
                    width: 30.65px;
                    height: 20.81px;
                }
            }
        }

        &.letter-two {
            margin-bottom: 12px;

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
                    width: 25px;
                    height: 18.89px;
                }
            }
        }

        &.letter-three {
            margin-bottom: 27px;

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
                    width: 30.16px;
                    height: 15.08px;
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
            margin-right: 12px;

            font-size: 24px;
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
