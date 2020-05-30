<template>
<div class="igb-song-table-list-base-component">
    <table class="table">
        <tr v-for="(item,index) in dataSource" :key="index" @click="changeHandller(item);" :class="{'current':item.current,'play':item.play}">
            <td :class="{'seal':item.seal}">
                <div class="box"></div>
                <span>{{item.num}}</span>
                <!--<img v-if="item.play" src="../../../assets/images/icon-play-lide.png" />-->
            </td>
            <td>
                <h3>
                    {{item.label}}
                </h3>
                <igb-tag :type="item.tag"></igb-tag>
                <div>
                    <i class="icon-collect"></i>
                </div>
                <i class="icon-leing"></i>
            </td>
            <td>
                <p class="singer-name">{{item.singerName}}</p>
            </td>
            <td>{{item.singerType}}</td>
            <td>
                <p class="album">{{item.name}}</p>
            </td>
            <td>{{item.time}}</td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    name: "IgbSongTableListBaseComponent",
    props: {
        dataSource: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeHandller() {
            this.$emit('change', {});
        }
    }
};
</script>

<style lang="scss" scoped>
.igb-song-table-list-base-component {
    width: 100%;

    .table {
        width: 100%;

        tr {
            display: flex;
            align-items: center;
            cursor: pointer;
            position: relative;

            &:hover {

                td {
                    .box {
                        display: block;
                    }

                    &:nth-child(2) {
                        div {
                            visibility: visible;
                        }
                    }
                }
            }
            &.current {
                td {
                    &:nth-child(1) {
                        background: url("../../../assets/images/icon-duigou.png") no-repeat;
                        background-size: 23px 23px;
                    }

                    /*&:nth-child(2) {
                        div {
                            visibility: visible;
                        }
                    }*/
                    .icon-leing {
                        display: block;
                    }
                }
            }
            &.play {
                td {
                    &:nth-child(1) {
                        span {
                            color: rgba(255, 255, 255, 0);
                            background: url("../../../assets/images/icon-play-lide.png") no-repeat;
                            background-size: 16px 17px;
                        }
                    }
                }
            }

            td {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                font-weight: 400;
                height: 80px;
                font-family: 'PingFang-SC-Regular';
                text-align: center;

                .box {
                    display: none;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    border: 2px solid rgba(254, 131, 74, 0.5019607843137255);
                }

                .icon-leing {
                    display: none;
                    position: absolute;
                    top: -60px;
                    left: -60px;
                    z-index: 1;
                    width: 200px !important;
                    height: 200px !important;
                    background: url("../../../assets/images/singer-hover-bg.png") no-repeat center;
                    background-size: cover;
                    pointer-events: none;
                }

                &:first-child {
                    width: 5%;
                    color: rgba(255, 255, 255, .4);

                    span {
                      font-family: Arial !important;
                    }

                    img {
                        width: 14.27px;
                        height: 15.54px;
                    }

                    &.seal {
                        background: url("../../../assets/images/icon-duigou.png") no-repeat;
                        background-size: 23px 23px;
                    }
                }

                &:nth-child(2) {
                    text-align: left;
                    position: relative;
                    justify-content: flex-start;
                    flex: 1;

                    h3 {
                        max-width: 200px;
                        height: 24px;
                        line-height: 24px;
                        font-size: 18px;
                        font-weight: 500;
                        color: rgba(255, 255, 255, .8);
                        padding: 0px;
                        margin: 0px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-family: "PingFang SC" !important;
                    }

                    span {
                        margin-left: 8px;
                    }

                    div {
                        visibility: hidden;
                        position: absolute;
                        left: 418px;
                        top: 0px;
                        display: flex;
                        align-items: center;
                        height: 80px;

                        i {
                            display: block;

                            &:last-child {
                                margin-right: 0px;
                            }

                            &.icon-collect {
                                width: 22.87px;
                                height: 21.96px;
                                background: url("../../../assets/images/ic.png") no-repeat center;
                                background-size: 100%;

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
                    }
                }

                &:nth-child(3) {
                    width: 15%;
                    color: rgba(255, 255, 255, .7) !important;

                    p {
                        width: 80px;
                        height: 20px;
                        line-height: 20px;
                        padding: 0px;
                        margin: 0px auto;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }

                &:nth-child(4) {
                    width: 15%;
                    color: rgba(255, 255, 255, .7);
                    font-size: 14px;
                }

                &:nth-child(5) {
                    width: 15%;
                    color: rgba(255, 255, 255, .7);

                    p {
                        width: 80px;
                        height: 20px;
                        line-height: 20px;
                        padding: 0px;
                        margin: 0px auto;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                }

                &:last-child {
                    width: 15%;
                    font-size: 14px;
                    color: rgba(255, 255, 255, .5);
                }
            }

            &:nth-child(odd) {
                background: rgba(255, 255, 255, .1);
            }

            &:nth-child(even) {
                background: rgba(255, 255, 255, .05);
            }
        }
    }
}
</style>
