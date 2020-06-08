<template>
<div class="igb-singer-list-base-component">
    <div class="singer-list-item" v-for="(item,index) in dataSource" :key="index" :class="{'current':item.current}" @click="changeHandller(item);">
        <div>
            <h3>{{item.name}}</h3>
            <p>{{item.type}}</p>
            <span :class="{'icon-collect-search':item.search}"></span>
        </div>
        <i class="icon-leing" ></i>
        <div class="box"></div>
    </div>
</div>
</template>

<script>
export default {
  name: 'IgbSingerListBaseComponent',
  props: {
    /**
         * 数据源
         */
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    // let itemList = document.getElementsByClassName("singer-list-item");
    // if (itemList.length > 0) {
    //     itemList.forEach(element => {
    //         let itemWidth = element.offsetWidth / 3.39;
    //         element.style.height = `${itemWidth}px`;
    //     });
    // }
  },
  methods: {
    changeHandller (item) {
      this.$emit('change', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-singer-list-base-component {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;

    >div {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        width: calc-attr(195);
        height: calc-attr(88);
        background: rgba(255, 255, 255, .06);
        border-radius: calc-attr(49);
        cursor: pointer;
        position: relative;
        margin-bottom: calc-attr(24);

        .icon-leing {
            display: none;
            position: absolute;
            top: calc-attr(-60);
            left: calc-attr(-40);
            width: calc-attr(200);
            height: calc-attr(200);
            background: url("../../../assets/images/singer-hover-bg.png") no-repeat center;
            background-size: cover;
        }

        >div {
            // width: calc(100% - 70px);
            padding:0 calc-attr(35);
            margin: 0 auto;
        }

        .box {
            display: none;
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            border: 2px solid rgba(255, 142, 49, 0.5019607843137255);
            border-radius: 49px;
        }

        &:hover,
        &.current {
            background: rgba(255, 255, 255, .06);

            .box {
                display: block;
            }

            span {
                display: block;
            }

            .icon-leing {
                display: block;
            }
        }

        span {
            display: none;
            width: calc-attr(18);
            height: calc-attr(17);
            position: absolute;
            right: calc-attr(30);
            top: calc-attr(35);
            background: url("../../../assets/images/icon1.png") no-repeat center;
            opacity: 0.5;
            background-size: 100%;
            z-index: 9;

            &:hover {
                background: url("../../../assets/images/icon1_hover.png") no-repeat center;
                opacity: 1;
                background-size: 100%;
            }

            &.icon-collect-search{
                top: calc-attr(51);
            }
        }

        h3,
        p {
            font-weight: normal;
            width: calc-attr(190);
            padding: 0;
            margin: 0;
        }

        h3 {
            height: calc-attr(28);
            line-height: calc-attr(28);
            font-size: calc-attr(20);
            font-family: 'PingFang-SC-Regular';
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            opacity: 0.8;
            margin-top: calc-attr(18);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        p {
            height: calc-attr(20);
            line-height: calc-attr(20);
            font-size: calc-attr(14);
            font-family: 'PingFang-SC-Regular';
            font-weight: 200;
            color: rgba(255, 255, 255, 1);
            opacity: 0.7;
            margin-top: calc-attr(5);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}

// @media (max-width : 1680px) {
//     .igb-singer-list-base-component {

//         >div {
//             height: auto;
//             background: rgba(255, 255, 255, .06);
//             border-radius: 49px;
//             cursor: pointer;
//             margin-bottom: 24px;
//             position: relative;

//             span {
//                 position: absolute;
//                 right: 30px;
//                 top: 25px;
//             }

//             h3,
//             p {
//                 font-weight: normal;
//                 width: 150px;
//                 padding: 0px;
//                 margin: 0px 0px 0px 41px;
//             }

//             h3 {
//                 font-size: 18px;
//                 margin-top: 10px;
//             }

//             p {
//                 font-size: 13px;
//                 margin-top: 0px;
//             }
//         }
//     }
// }

// @media (max-width : 1600px) {
//     .igb-singer-list-base-component {

//         >div {
//             height: auto;
//             background: rgba(255, 255, 255, .06);
//             border-radius: 49px;
//             cursor: pointer;
//             margin-bottom: 24px;
//             position: relative;

//             span {
//                 position: absolute;
//                 right: 30px;
//                 top: 25px;
//             }

//             h3,
//             p {
//                 font-weight: normal;
//                 width: 130px;
//                 padding: 0px;
//                 margin: 0px 0px 0px 41px;
//             }

//             h3 {
//                 font-size: 18px;
//                 margin-top: 10px;
//             }

//             p {
//                 font-size: 12px;
//                 margin-top: 0px;
//             }
//         }
//     }
// }

// @media (max-width : 1440px) {
//     .igb-singer-list-base-component {

//         >div {
//             height: auto;
//             background: rgba(255, 255, 255, .06);
//             border-radius: 49px;
//             cursor: pointer;
//             margin-bottom: 24px;
//             position: relative;

//             span {
//                 position: absolute;
//                 right: 30px;
//                 top: 20px;
//             }

//             h3,
//             p {
//                 font-weight: normal;
//                 width: 100px;
//                 padding: 0px;
//                 margin: 0px 0px 0px 30px;
//             }

//             h3 {
//                 font-size: 18px;
//                 margin-top: 5px;
//             }

//             p {
//                 font-size: 12px;
//                 margin-top: 0px;
//             }
//         }
//     }
// }

// @media (max-width : 1366px) {
//     .igb-singer-list-base-component {

//         >div {
//             height: auto;
//             background: rgba(255, 255, 255, .06);
//             border-radius: 49px;
//             cursor: pointer;
//             margin-bottom: 24px;
//             position: relative;

//             span {
//                 position: absolute;
//                 right: 30px;
//                 top: 17px;
//             }

//             h3,
//             p {
//                 font-weight: normal;
//                 width: 100px;
//                 padding: 0px;
//                 margin: 0px 0px 0px 30px;
//             }

//             h3 {
//                 font-size: 18px;
//                 margin-top: 3px;
//             }

//             p {
//                 font-size: 12px;
//                 margin-top: 0px;
//             }
//         }
//     }
// }

// @media (max-width : 1280px) {
//     .igb-singer-list-base-component {

//         >div {
//             height: auto;
//             background: rgba(255, 255, 255, .06);
//             border-radius: 49px;
//             cursor: pointer;
//             margin-bottom: 24px;
//             position: relative;

//             span {
//                 position: absolute;
//                 right: 30px;
//                 top: 13px;
//             }

//             h3,
//             p {
//                 font-weight: normal;
//                 width: 85px;
//                 padding: 0px;
//                 margin: 0px 0px 0px 25px;
//             }

//             h3 {
//                 height: 18px;
//                 line-height: 18px;
//                 font-size: 14px;
//                 margin-top: 7px;
//             }

//             p {
//                 font-size: 12px;
//                 margin-top: 0px;
//             }
//         }
//     }
// }

// @media (max-width : 1024px) {
//     .igb-singer-list-base-component {

//         >div {
//             width: calc(26% - 30px);
//             height: auto;
//             background: rgba(255, 255, 255, .06);
//             border-radius: 49px;
//             cursor: pointer;
//             margin-bottom: 24px;
//             position: relative;

//             span {
//                 position: absolute;
//                 right: 25px;
//                 top: 13px;
//             }

//             h3,
//             p {
//                 font-weight: normal;
//                 width: 80px;
//                 padding: 0px;
//                 margin: 0px 0px 0px 25px;
//             }

//             h3 {
//                 height: 18px;
//                 line-height: 18px;
//                 font-size: 14px;
//                 margin-top: 6px;
//             }

//             p {
//                 font-size: 12px;
//                 margin-top: 0px;
//             }
//         }
//     }
// }
</style>
