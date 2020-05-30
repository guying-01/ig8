<template>
<div class="igb-song-list-base-component">
    <div class="song-list-item" v-for="(item,index) in dataSource" :key="index" :class="{'current':item.current}" @click="changeHandller();">
        <div class="cover">
            <img :src="`${require(`../../../assets/images/${item.src}.png`)}`" />
            <p class="name">{{item.singerName}}</p>
        </div>
        <div class="card-info">
            <div>
                <h3>{{item.songName}}</h3>
                <p><span v-for="(items,j) in item.tags" :key="j">{{items}}</span></p>
                <i class="icon-collect"></i>
            </div>
        </div>
        <div class="box"></div>
    </div>
</div>
</template>

<script>
export default {
    name: "IgbSongListBaseComponent",
    props: {
        dataSource: {
            type: Array,
            default: () => []
        }
    },
    mounted() {
        // let itemList = document.getElementsByClassName("song-list-item");
        // if (itemList.length > 0) {
        //     itemList.forEach(element => {
        //         let itemWidth = element.offsetWidth / 0.76;
        //         element.style.height = `${parseFloat(itemWidth).toFixed(0)}px`;
        //     });
        // }
    },
    methods: {
        changeHandller() {
            this.$emit('change', {});
        }
    }
}
</script>

<style lang="scss" scoped>
.igb-song-list-base-component {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .song-list-item {
        width: 244px;
        height: 320px;
        background: rgba(253, 253, 253, .05);
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 25px;
        position: relative;

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
                >div {
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
            height: 243.27px;
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
                height: 63px;
                line-height: 90px;
                background: linear-gradient(360deg, rgba(28, 34, 46, 1) 0%, rgba(0, 0, 0, 0) 100%);
                font-size: 12px;
                font-family: 'PingFang-SC-Regular';
                color: rgba(255, 255, 255, .7);
                margin: 0px;
                padding: 0px 0px 0px 15px;
            }
        }

        .card-info {
            height: 76px;

            >div {
                width: calc(100% - 32px);
                position: relative;
                margin: 0 auto;

                .icon-collect {
                    visibility: hidden;
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                    display: block;
                    width: 18.18px;
                    height: 17.46px;
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
                font-size: 16px;
                height: 22px;
                line-height: 22px;
                font-family: 'PingFang-SC-Regular';
                font-weight: 500;
                color: rgba(255, 255, 255, .8);
                margin: 12px auto auto auto;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            p {
                display: flex;
                align-items: center;
                margin-top: 10px;

                span {
                    width: 32px;
                    height: 16px;
                    line-height: 16px;
                    background: rgba(253, 129, 74, .2);
                    border-radius: 2px;
                    text-align: center;
                    font-size: 12px;
                    font-family: 'PingFang-SC-Regular';
                    color: rgba(253, 129, 74, 1);
                    margin-right: 6px;
                }
            }
        }
    }
}

@media (max-width : 1680px) {
    .igb-song-list-base-component {

        .song-list-item {
            .card-info {

                h3,
                p {
                    padding: 0px;
                    width: calc(100% - 30px);
                    margin: 0 auto;
                }

                h3 {
                    height: 20px;
                    line-height: 20px;
                    font-size: 14px;
                    margin: 8px auto;
                }

                p {
                    span {
                        font-size: 12px;
                        margin-right: 5px;
                        padding: 0px 4px;
                    }
                }
            }
        }
    }
}

@media (max-width : 1600px) {
    .igb-song-list-base-component {

        .song-list-item {
            .card-info {

                h3,
                p {
                    padding: 0px;
                    width: calc(100% - 30px);
                    margin: 0 auto;
                }

                h3 {
                    height: 20px;
                    line-height: 20px;
                    font-size: 14px;
                    margin: 5px auto;
                }

                p {
                    span {
                        font-size: 12px;
                        margin-right: 5px;
                        padding: 0px 4px;
                    }
                }
            }
        }
    }
}

@media (max-width : 1440px) {
    .igb-song-list-base-component {
        .song-list-item {
            width: calc(18% - 30px);

            .card-info {

                h3,
                p {
                    padding: 0px;
                    width: calc(100% - 30px);
                    margin: 0 auto;
                }

                h3 {
                    height: 20px;
                    line-height: 20px;
                    font-size: 14px;
                    margin: 3px auto;
                }

                p {
                    span {
                        font-size: 12px;
                        margin-right: 5px;
                        padding: 0px 4px;
                    }
                }
            }
        }
    }
}

@media (max-width : 1366px) {
    .igb-song-list-base-component {

        .song-list-item {
            width: calc(18% - 30px);

            .card-info {

                h3,
                p {
                    padding: 0px;
                    width: calc(100% - 30px);
                    margin: 0 auto;
                }

                h3 {
                    height: 20px;
                    line-height: 20px;
                    font-size: 14px;
                    margin: 2.5px auto;
                }

                p {
                    span {
                        font-size: 12px;
                        margin-right: 5px;
                        padding: 0px 4px;
                    }
                }
            }
        }
    }
}

@media (max-width : 1280px) {
    .igb-song-list-base-component {
        .song-list-item {
            width: calc(18% - 30px);

            .card-info {

                h3,
                p {
                    padding: 0px;
                    width: calc(100% - 30px);
                    margin: 0 auto;
                }

                h3 {
                    height: 20px;
                    line-height: 20px;
                    font-size: 14px;
                    margin: 2px auto;
                }

                p {
                    span {
                        font-size: 12px;
                        margin-right: 5px;
                        padding: 0px 4px;
                    }
                }
            }
        }
    }
}

@media (max-width : 1024px) {
    .igb-song-list-base-component {
        .song-list-item {
            width: calc(23% - 30px);

            .card-info {

                h3,
                p {
                    padding: 0px;
                    width: calc(100% - 30px);
                    margin: 0 auto;
                }

                h3 {
                    height: 20px;
                    line-height: 20px;
                    font-size: 14px;
                    margin: 2px auto auto auto;
                }

                p {
                    span {
                        font-size: 12px;
                        margin-right: 5px;
                        padding: 0px 4px;
                    }
                }
            }
        }
    }
}
</style>
