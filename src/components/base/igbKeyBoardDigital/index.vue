<template>
<div class="igb-key-board-digital-base-component">
    <div class="digital digital-one">
        <span v-for="(item,index) in list.one" :key="index" @click="digitalChange(item);" :class="{'key-item':!item.icon,'key-item-icon':item.icon}">
            {{item.value===0?'':item.label}}
            <input type="text" v-if="item.value===0" />
            <img v-if="item.icon" :src="`${require(`../../../assets/images/${item.icon}`)}`" />
        </span>
    </div>
    <div class="digital digital-two">
        <span v-for="(item,index) in list.two" :key="index" @click="digitalChange(item);" :class="{'key-item':!item.icon,'key-item-icon':item.icon}">
            {{item.label}}
            <img v-if="item.icon" :src="`${require(`../../../assets/images/${item.icon}`)}`" />
        </span>
    </div>
    <div class="digital digital-three">
        <span v-for="(item,index) in list.three" :key="index" @click="digitalChange(item);" :class="{'key-item':!item.icon,'key-item-icon':item.icon}">
            {{item.label}}
            <img v-if="item.icon" :src="`${require(`../../../assets/images/${item.icon}`)}`" />
        </span>
    </div>
</div>
</template>

<script>
import {
    DigitalChangeEnum
} from "../../../enum/key.board.enum";
export default {
    name: "IgbKeyBoardDigitalBaseComponent",
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
        DigitalChangeEnum.forEach(element => {
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
        digitalChange(item) {
            switch (item.value) {
                case 13:
                    this.$emit('model', {
                        item: item,
                        model: 0
                    });
                    break;
                case 20:
                    this.$emit('model', {
                        item: item,
                        model: 2
                    });
                    break;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.igb-key-board-digital-base-component {
    width: calc(100% - 186px);
    margin: 0 auto;

    .digital {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;

        &.digital-one {
            margin-top: 31px;
            margin-bottom: 15px;

            span {
                &:first-child {
                    width: calc(87.65% - 12px);
                    background: none !important;
                    box-shadow: none !important;

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
                        background: rgba(36, 40, 67, .98);
                        border: 2px solid rgba(54, 66, 88, .98);
                        border-radius: 18px;
                        padding: 0px 31px;

                        font-size: 30px;
                        font-weight: 400;
                        color: rgba(255, 142, 50, 1);
                        letter-spacing: 0.1em;

                    }

                }

                &:last-child {
                    width: 12.35%;
                }

                img {
                    width: 30.65px;
                    height: 20.81px;
                }
            }
        }

        &.digital-two {
            margin-bottom: 15px;

            span {
                width: calc(8% - 12px);

                &:last-child {
                    width: 19.69%;
                }

                img {
                    width: 25px;
                    height: 18.89px;
                }
            }

        }

        &.digital-three {
            margin-bottom: 27px;

            span {
                width: calc(8% - 12px);

                //159
                &:first-child {
                    width: calc(11.45% - 12px);
                }

                //270
                &:nth-child(5) {
                    width: calc(18.86% - 12px);
                }

                //167
                &:nth-child(8) {
                    width: calc(12% - 12px);
                }

                //263
                &:last-child {
                    width: 17.63%;
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
</style>
