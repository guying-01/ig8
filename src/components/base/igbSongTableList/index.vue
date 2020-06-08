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
  name: 'IgbSongTableListBaseComponent',
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeHandller () {
      this.$emit('change', {})
    }
  }
}
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
                        background-size: calc-attr(23) calc-attr(23);
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
                            background-size: calc-attr(16) calc-attr(17);
                        }
                    }
                }
            }

            td {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: calc-attr(16);
                font-weight: 400;
                height: calc-attr(80);
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
                    top: calc-attr(-60);
                    left: calc-attr(-60);
                    z-index: 1;
                    width: calc-attr(200) !important;
                    height: calc-attr(200) !important;
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
                        width: calc-attr(14.27);
                        height: calc-attr(15.54);
                    }

                    &.seal {
                        background: url("../../../assets/images/icon-duigou.png") no-repeat;
                        background-size: calc-attr(23) calc-attr(23);
                    }
                }

                &:nth-child(2) {
                    text-align: left;
                    position: relative;
                    justify-content: flex-start;
                    flex: 1;

                    h3 {
                        max-width: calc-attr(200);
                        height: calc-attr(24);
                        line-height: calc-attr(24);
                        font-size: calc-attr(18);
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
                        margin-left: calc-attr(8);
                    }

                    div {
                        visibility: hidden;
                        position: absolute;
                        left: calc-attr(418);
                        top: 0px;
                        display: flex;
                        align-items: center;
                        height: calc-attr(80);

                        i {
                            display: block;

                            &:last-child {
                                margin-right: 0px;
                            }

                            &.icon-collect {
                                width: calc-attr(22.87);
                                height: calc-attr(21.96);
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
                        width: calc-attr(80);
                        height: calc-attr(20);
                        line-height: calc-attr(20);
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
                    font-size: calc-attr(14);
                }

                &:nth-child(5) {
                    width: 15%;
                    color: rgba(255, 255, 255, .7);

                    p {
                        width: calc-attr(80);
                        height: calc-attr(20);
                        line-height: calc-attr(20);
                        padding: 0px;
                        margin: 0px auto;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                }

                &:last-child {
                    width: 15%;
                    font-size: calc-attr(14);
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
