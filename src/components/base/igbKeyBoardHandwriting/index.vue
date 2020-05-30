<template>
<div class="igb-key-board-handwriting-base-component">
    <div class="handwriting-key-board-result">
        <span>冯</span>
        <span>黎</span>
        <span>明</span>
    </div>
    <div class="handwriting-panel">
        <span>i歌霸</span>
    </div>
    <div class="handwriting-keys">
        <div class="handwriting handwriting-one">
            <span v-for="(item,index) in list.one" :key="index" @click="handwritingChange(item);" :class="{'key-item':!item.icon,'key-item-icon':item.icon}">
                <img v-if="item.icon" :src="`${require(`../../../assets/images/${item.icon}`)}`" />{{item.label}}
            </span>
        </div>
        <div class="handwriting handwriting-two">
            <span v-for="(item,index) in list.two" :key="index" @click="handwritingChange(item);" :class="{'key-item':!item.icon,'key-item-icon':item.icon}">
                <img v-if="item.icon" :src="`${require(`../../../assets/images/${item.icon}`)}`" />{{item.label}}
            </span>
        </div>
        <div class="handwriting handwriting-three">
            <span v-for="(item,index) in list.three" :key="index" @click="handwritingChange(item);" :class="{'key-item':!item.icon,'key-item-icon':item.icon}">
                <img v-if="item.icon" :src="`${require(`../../../assets/images/${item.icon}`)}`" />{{item.label}}
            </span>
        </div>
    </div>
</div>
</template>

<script>
import {
    HandwritingEnum
} from "../../../enum/key.board.enum";
export default {
    name: "IgbKeyBoardHandwritingBaseComponent",
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

        //初始化
        HandwritingEnum.forEach(element => {
            if (element.icon && element.value !== 11) {
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
            let itemList2 = document.getElementsByClassName("handwriting-panel");
            if (itemList2.length > 0) {
                itemList2.forEach(element => {
                    let itemWidth = element.offsetWidth / 2.83;
                    element.style.height = `${itemWidth}px`;
                });
            }

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
        handwritingChange(item) {
            switch (item.value) {
                case 12:
                    this.model = 1;
                    this.$emit('model', {
                        item: item,
                        model: this.model
                    });
                    break;
                case 13:
                    this.model = 0;
                    this.$emit('model', {
                        item: item,
                        model: this.model
                    });
                    break;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.igb-key-board-handwriting-base-component {
    width: calc(100% - 186px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .handwriting-key-board-result {
        height: 65px;
        display: flex;
        align-items: center;

        background: rgba(53, 57, 89, .98);
        box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.35);
        border-radius: 4px;

        padding: 0px 35px;

        position: absolute;
        top: -76px;
        left: 98px;

        span {
            margin-right: 35px;

            font-size: 24px;
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
        width: calc(45.46% - 21px);
        background: rgba(36, 40, 67, 1);
        border: 2px solid rgba(54, 58, 90, 1);
        border-radius: 18px;

        font-size: 80px;
        font-weight: 400;
        color: rgba(255, 255, 255, .07);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .handwriting-keys {
        width: 54.54%;
        margin-left: 21px;

        .handwriting {
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;

            &.handwriting-one {
                margin-top: 31px;
                margin-bottom: 15px;

                span {
                    width: calc(15.48% - 12px);

                    //184
                    &:last-child {
                        width: 22.56%;
                    }

                    img {
                        width: 30.65px;
                        height: 20.81px;
                    }
                }
            }

            &.handwriting-two {
                margin-bottom: 15px;

                span {
                    width: calc(15.67% - 12px);

                    //304
                    &:last-child {
                        width: 37.31%;
                    }

                    img {
                        width: 25px;
                        height: 18.89px;
                    }
                }

            }

            &.handwriting-three {
                margin-bottom: 27px;

                span {

                    //228
                    &:first-child {
                        width: calc(29.47% - 12px);

                        img {
                            margin-right: 11px;
                            width: 22.8px;
                            height: 22.8px;
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
                            width: 30.16px;
                            height: 15.08px;
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
                margin-right: 12px;

                font-size: 24px;
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
                    background: rgba(32, 36, 67, .5);
                    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
                }
            }
        }
    }

}
</style>
