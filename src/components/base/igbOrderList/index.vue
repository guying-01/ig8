<template>
<div class="igb-order-list-base-component">
    <p class="btn-close" @click="closeHandller"></p>
    <div class="order-tabs-list">
        <span v-for="(item,index) in tabs" :key="index" :class="{'current':item.value===current}" @click="changeHandller(item)">{{item.label}}</span>
    </div>

    <div class="order-button-list">
        <span class="btn btn-share-song" @click="btnShareHandller" v-if="current===0"></span>
        <span class="btn btn-loop" v-if="current===0"></span>
        <span class="btn btn-share-song dis" @click="btnShareHandller" v-if="current===0"></span>
        <span class="btn btn-loop dis" v-if="current===0"></span>
        <span class="icon icon-del"></span>
    </div>

    <div class="list-order" v-if="current===0">
        <table class="table">
            <tbody>
                <tr v-for="(item,index) in tableList" :key="index" :class="{'current':item.current,'play':item.play}">
                    <td>
                        <span>{{item.value}}</span>
                        <!--<img v-if="item.play" src="../../../assets/images/icon-play-lide.png" />-->
                    </td>
                    <td>
                        <div>
                            <h2>{{item.songName}}</h2>
                            <igb-tag :type="item.tag"></igb-tag>
                        </div>
                        <i class="icon-leing"></i>
                    </td>
                    <td>
                        <div>
                            <i class="icon-collect" :class="{'icon-collect-ok':item.collect}"></i>
                            <i class="icon-order-by-desc"></i>
                            <i class="icon-order-by-aes"></i>
                        </div>
                    </td>
                    <td>
                        <span>{{item.singerName}}</span>
                    </td>
                    <td>
                        <div>
                            <i></i>
                        </div>
                    </td>
                    <td>
                        <div>
                            <span>{{item.time}}</span>
                            <i class="icon-del"></i>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="list-song" v-if="current===1">
        <table class="table">
            <tbody>
                <tr v-for="(item,index) in tableList1" :key="index" :class="{'current':item.current,'play':item.play}">
                    <td>
                        <span>{{item.value}}</span>
                        <!--<img v-if="item.play" src="../../../assets/images/icon-play-lide.png" />-->
                    </td>
                    <td>
                        <div>
                            <h2>{{item.songName}}</h2>
                            <igb-tag :type="item.tag"></igb-tag>
                        </div>
                        <i class="icon-leing"></i>
                    </td>
                    <td>
                        <div>
                            <i class="icon-collect"></i>
                        </div>
                    </td>
                    <td>
                        <span>{{item.singerName}}</span>
                    </td>
                    <td>
                        <div>
                            <i></i>
                        </div>
                    </td>
                    <td>
                        <div>
                            <span>{{item.time}}</span>
                            <i class="icon-del"></i>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {
    name: "IgbOrderListBaseComponent",
    data() {
        return {
            current: 0,
            tabs: [{
                value: 0,
                label: "已点(20)"
            }, {
                value: 1,
                label: "已唱(20)"
            }],
            tableList: [{
                    value: "01",
                    songName: "你的答案",
                    tag: 0,
                    singerName: "郭富城",
                    time: "01:00",
                    current: false,
                    play: false
                },
                {
                    value: "02",
                    songName: "死了都要爱",
                    tag: 0,
                    singerName: "信乐团",
                    time: "02:00",
                    current: false,
                    play: false
                },
                {
                    value: "03",
                    songName: "成都",
                    tag: 0,
                    singerName: "赵雷",
                    time: "02:00",
                    current: true,
                    play: true
                },
                {
                    value: "04",
                    songName: "我不是真正的快乐",
                    tag: 0,
                    singerName: "阿信",
                    time: "02:00",
                    current: false,
                    play: false
                },
                {
                    value: "05",
                    songName: "你的答案",
                    tag: 0,
                    singerName: "郭富城",
                    time: "02:00",
                    current: false,
                    play: false,
                    collect: true
                },
                {
                    value: "06",
                    songName: "我不是真正的快乐",
                    tag: 0,
                    singerName: "阿信",
                    time: "02:00",
                    current: false,
                    play: false
                },
                {
                    value: "07",
                    songName: "你的答案",
                    tag: 0,
                    singerName: "郭富城",
                    time: "02:00",
                    current: false,
                    play: false
                },
                {
                    value: "08",
                    songName: "死了都要爱",
                    tag: 0,
                    singerName: "信乐团",
                    time: "02:00",
                    current: false,
                    play: false,
                    collect: true
                },
                {
                    value: "09",
                    songName: "死了都要爱",
                    tag: 0,
                    singerName: "信乐团",
                    time: "02:00",
                    current: false,
                    play: false
                },
                {
                    value: "10",
                    songName: "死了都要爱",
                    tag: 0,
                    singerName: "信乐团",
                    time: "02:00",
                    current: false,
                    play: false
                }
            ],
            tableList1: [{
                    value: "01",
                    songName: "你的答案",
                    tag: 0,
                    singerName: "郭富城",
                    time: "01:00",
                    current: false,
                    play: false
                },
                {
                    value: "02",
                    songName: "死了都要爱",
                    tag: 0,
                    singerName: "信乐团",
                    time: "02:00",
                    current: false,
                    play: false
                },
                {
                    value: "03",
                    songName: "成都",
                    tag: 0,
                    singerName: "赵雷",
                    time: "02:00",
                    current: true,
                    play: true
                },
                {
                    value: "04",
                    songName: "我不是真正的快乐",
                    tag: 0,
                    singerName: "阿信",
                    time: "02:00",
                    current: false,
                    play: false
                },
                {
                    value: "05",
                    songName: "你的答案",
                    tag: 0,
                    singerName: "郭富城",
                    time: "02:00",
                    current: false,
                    play: false,
                    collect: false
                },
                {
                    value: "06",
                    songName: "我不是真正的快乐",
                    tag: 0,
                    singerName: "阿信",
                    time: "02:00",
                    current: false,
                    play: false
                },
                {
                    value: "07",
                    songName: "你的答案",
                    tag: 0,
                    singerName: "郭富城",
                    time: "02:00",
                    current: false,
                    play: false
                },
                {
                    value: "08",
                    songName: "死了都要爱",
                    tag: 0,
                    singerName: "信乐团",
                    time: "02:00",
                    current: false,
                    play: false,
                    collect: false
                },
                {
                    value: "09",
                    songName: "死了都要爱",
                    tag: 0,
                    singerName: "信乐团",
                    time: "02:00",
                    current: false,
                    play: false
                }
            ]
        }
    },
    methods: {
        btnShareHandller() {
            this.$emit('share', {});
        },
        closeHandller() {
            this.$emit('close', {});
        },
        changeHandller(item) {
            this.current = item.value;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/ddd/mixin.scss";

.igb-order-list-base-component {
    position: relative;
    padding-top: 39px;

    .btn-close {
        position: absolute;
        top: 21px;
        right: 28px;
        width: 18px;
        height: 18px;
        background: url("../../../assets/images/icon-modal-close.png") no-repeat center;
        background-size: 18px 18px;
        margin: 0px;
        padding: 0px;
        cursor: pointer;

        &:hover {
            background: url("../../../assets/images/icon-modal-close-hover.png") no-repeat center;
            background-size: 18px 18px;
        }
    }

    .order-tabs-list {
        width: 272px;
        height: 44px;
        line-height: 44px;
        margin: 0px auto;
        display: flex;
        align-items: center;
        border-radius: 30px;
        background: rgba(206, 206, 206, .1);

        span {
            width: 50%;
            text-align: center;
            font-size: 14px;
            font-weight: 400;
            color: rgba(255, 255, 255, .7);
            cursor: pointer;

            &.current {
                background: linear-gradient(315deg, rgba(255, 186, 0, 1) 0%, rgba(255, 107, 88, 1) 100%);
                border-radius: 30px;
                color: rgba(31, 40, 53, 1);

                &:hover {
                    background: linear-gradient(315deg, rgba(255, 197, 41, 1) 0%, rgba(255, 125, 108, 1) 100%);
                }
            }
        }
    }

    .order-button-list {
        display: flex;
        align-items: center;
        height: 32px;
        padding-left: 31px;
        margin-top: 38px;
        margin-bottom: 13px;

        .btn {
            width: 108px;
            height: 32px;
            cursor: pointer;
            margin-right: 16px;

            &:last-child {
                margin-right: 0px;
            }

            &.btn-share-song {
                background: url("../../../assets/images/table/t-btn2.png") no-repeat center;
                background-size: 100%;

                &:hover {
                    background: url("../../../assets/images/table/t-btn2-h.png") no-repeat center;
                    background-size: 100%;
                }

                &:active {
                    background: url("../../../assets/images/table/t-btn2-s.png") no-repeat center;
                    background-size: 100%;
                }

                &.dis {
                    background: url("../../../assets/images/table/t-btn2-d.png") no-repeat center;
                    background-size: 100%;
                }
            }

            &.btn-loop {
                background: url("../../../assets/images/table/t-btn1.png") no-repeat center;
                background-size: 100%;

                &:hover {
                    background: url("../../../assets/images/table/t-btn1-h.png") no-repeat center;
                    background-size: 100%;
                }

                &:active {
                    background: url("../../../assets/images/table/t-btn1-s.png") no-repeat center;
                    background-size: 100%;
                }

                &.dis {
                    background: url("../../../assets/images/table/t-btn1-d.png") no-repeat center;
                    background-size: 100%;
                }
            }
        }

        span.icon {
            width: 32px;
            height: 32px;
            background: url("../../../assets/images/btn-del.png") no-repeat center;
            background-size: cover;
            margin-left: auto;
            margin-right: 31px;
            cursor: pointer;

            &:hover {
                background: url("../../../assets/images/btn-del-hover.png") no-repeat center;
                background-size: cover;
            }
        }
    }

    .list-order {
        height: calc(100vh - 340px);
        @include scroll-bar(5px);
        .table {
            width: 100%;

            tbody {
                tr {
                    height: 79px;
                    line-height: 79px;
                    cursor: pointer;

                    &:nth-child(7) {
                        border-top: 1px solid rgba(249, 118, 71, .5);
                    }

                    &:nth-child(8) {
                        outline: 10px solid rgba(49, 52, 78, 1);
                        background: rgba(49, 52, 78, 1);
                        box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.2);
                    }

                    &:hover {
                        background: rgba(255, 255, 255, .03);
                        td {
                            &:nth-child(3),
                            &:nth-child(5) {
                                div {
                                    visibility: visible;
                                }
                            }

                            &:last-child {
                                div {
                                    span {
                                        display: none;
                                    }

                                    i {
                                        display: block;
                                    }
                                }
                            }
                        }
                    }
                    &.current {
                        background: rgba(255, 255, 255, .05);
                        td {
                            .icon-leing {
                                display: block;
                            }
                            &:nth-child(1) {
                                box-shadow:inset 4px 0 0 0 #FD814A;
                            }
                            &:nth-child(3),
                            &:nth-child(5) {
                                div {
                                    visibility: visible;
                                }
                            }

                            &:last-child {
                                div {
                                    span {
                                        display: none;
                                    }

                                    i {
                                        display: block;
                                    }
                                }
                            }
                        }
                    }
                    &.play {
                        td {
                            &:nth-child(1) {
                                span {
                                    color: rgba(255, 255, 255, 0);
                                    background: url("../../../assets/images/icon-play-lide.png") no-repeat center center;
                                    background-size: 16px 17px;
                                }
                            }
                        }
                    }
                    /*&.collect {
                        td {
                            .icon-leing {
                                display: block;
                            }

                            &:nth-child(3),
                            &:nth-child(5) {
                                div {
                                    visibility: visible;
                                }
                            }

                            &:last-child {
                                div {
                                    span {
                                        display: none;
                                    }

                                    i {
                                        display: block;
                                    }
                                }
                            }
                        }
                    }*/

                    td {
                        position: relative;

                        .icon-leing {
                            display: none;
                            position: absolute;
                            top: -60px;
                            left: -60px;
                            z-index: 1;
                            width: 200px;
                            height: 200px;
                            background: url("../../../assets/images/singer-hover-bg.png") no-repeat center;
                            background-size: cover;
                            pointer-events: none;
                        }

                        &:first-child {
                            width: 70.3px;
                            position: relative;

                            /*i {
                                display: block;
                                position: absolute;
                                left: 0px;
                                top: 0px;
                                width: 4px;
                                height: 80px;
                                background: rgba(253, 129, 74, 1);
                            }*/

                            span {
                                font-size: 18px;
                                font-weight: 400;
                                color: rgba(255, 255, 255, .4);
                                margin-left: 31px;
                            }

                            img {
                                width: 14.27px;
                                height: 15.54px;
                                margin-left: 29px;
                            }
                        }

                        &:nth-child(2) {
                            width: 260px;

                            div {
                                display: flex;
                                align-items: center;

                                h2 {
                                    max-width: 150px;
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
                                }

                                span {
                                    margin-left: 7px;
                                }
                            }
                        }

                        &:nth-child(3) {
                            width: 185px;

                            div {
                                visibility: hidden;
                                display: flex;
                                align-items: center;

                                i {
                                    height: 25px;
                                    margin-right: 23.4px;

                                    &:last-child {
                                        margin-right: 0px;
                                    }

                                    &.icon-collect {
                                        width: 22.87px;
                                        background: url("../../../assets/images/table/t-c.png") no-repeat center;
                                        background-size: 100%;

                                        &:hover {
                                            background: url("../../../assets/images/table/t-c-h.png") no-repeat center;
                                            background-size: 100%;
                                        }
                                    }

                                    &.icon-collect-ok {
                                        width: 22.87px;
                                        background: url("../../../assets/images/table/t-c-s.png") no-repeat center;
                                        background-size: 100%;

                                        &:hover {
                                            background: url("../../../assets/images/table/t-c-s-h.png") no-repeat center;
                                            background-size: 100%;
                                        }
                                    }

                                    &.icon-order-by-desc {
                                        width: 23.41px;
                                        background: url("../../../assets/images/table/t-od.png") no-repeat center;
                                        background-size: 100%;

                                        &:hover {
                                            background: url("../../../assets/images/table/t-od-h.png") no-repeat center;
                                            background-size: 100%;
                                        }
                                    }

                                    &.icon-order-by-aes {
                                        width: 23.41px;
                                        background: url("../../../assets/images/table/t-oa.png") no-repeat center;
                                        background-size: 100%;

                                        &:hover {
                                            background: url("../../../assets/images/table/t-oa-h.png") no-repeat center;
                                            background-size: 100%;
                                        }
                                    }
                                }
                            }
                        }

                        &:nth-child(4) {
                            span {
                                height: 20px;
                                font-size: 14px;
                                color: rgba(255, 255, 255, .7);
                            }
                        }

                        &:nth-child(5) {
                            width: 20%;

                            div {
                                visibility: hidden;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                i {
                                    width: 21px;
                                    height: 25px;
                                    margin-right: 23.4px;

                                    &:last-child {
                                        margin-right: 0px;
                                    }

                                    background: url("../../../assets/images/table/t-link.png") no-repeat center;
                                    background-size: 100%;

                                    &:hover {
                                        background: url("../../../assets/images/table/t-link-h.png") no-repeat center;
                                        background-size: 20.67px 20.67px;
                                    }
                                }
                            }
                        }

                        &:nth-child(6) {
                            div {
                                width: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                span {
                                    display: block;
                                    font-size: 14px;
                                    color: rgba(255, 255, 255, .5);
                                }

                                i {
                                    display: none;
                                    width: 19.39px;
                                    height: 25px;
                                    background: url("../../../assets/images/table/t-del.png") no-repeat center;
                                    background-size: 100%;

                                    &:hover {
                                        background: url("../../../assets/images/table/t-del-h.png") no-repeat center;
                                        background-size: 19.39px 20.67px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .list-song {
        height: calc(100vh - 340px);
        overflow-x: hidden;
        overflow-y: auto;
        @include scroll-bar(8px);

        /*
                        表格样式
                        */
        .table {
            width: 100%;

            tbody {
                tr {
                    border-top: 1px solid rgba(49, 54, 78, 1);
                    height: 80px;
                    line-height: 80px;
                    cursor: pointer;

                    &:hover {
                        background: rgba(255, 255, 255, .05);
                        td {
                            &:nth-child(3),
                            &:nth-child(5) {
                                div {
                                    visibility: visible;
                                }
                            }

                            &:last-child {
                                div {
                                    span {
                                        display: none;
                                    }

                                    i {
                                        display: block;
                                    }
                                }
                            }
                        }
                    }

                    &.current {
                        background: rgba(255, 255, 255, .05);

                        td {
                            .icon-leing {
                                display: block;
                            }

                            &:nth-child(1) {
                                box-shadow:inset 4px 0 0 0 #FD814A;
                            }
                            &:nth-child(3),
                            &:nth-child(5) {
                                div {
                                    visibility: visible;
                                }
                            }

                            &:last-child {
                                div {
                                    span {
                                        display: none;
                                    }

                                    i {
                                        display: block;
                                    }
                                }
                            }
                        }
                    }
                    &.play {
                        td {
                            &:nth-child(1) {
                                span {
                                    color: rgba(255, 255, 255, 0);
                                    background: url("../../../assets/images/icon-play-lide.png") no-repeat center center;
                                    background-size: 16px 17px;
                                }
                            }
                        }
                    }

                    td {
                        position: relative;

                        .icon-leing {
                            display: none;
                            position: absolute;
                            top: -60px;
                            left: -60px;
                            z-index: 1;
                            width: 200px;
                            height: 200px;
                            background: url("../../../assets/images/singer-hover-bg.png") no-repeat center;
                            background-size: cover;
                        }

                        &:first-child {
                            width: 70.3px;
                            position: relative;

                            i {
                                display: block;
                                position: absolute;
                                left: 0px;
                                top: 0px;
                                width: 4px;
                                height: 80px;
                                background: rgba(253, 129, 74, 1);
                            }

                            span {
                                font-size: 18px;
                                font-weight: 400;
                                color: rgba(255, 255, 255, .4);
                                margin-left: 31px;
                            }

                            img {
                                width: 14.27px;
                                height: 15.54px;
                                margin-left: 29px;
                            }
                        }

                        &:nth-child(2) {
                            width: 260px;

                            div {
                                display: flex;
                                align-items: center;

                                h2 {
                                    max-width: 150px;
                                    font-size: 18px;
                                    font-weight: 500;
                                    color: rgba(255, 255, 255, .8);
                                    padding: 0px;
                                    margin: 0px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }

                                span {
                                    margin-left: 7px;
                                }
                            }
                        }

                        &:nth-child(3) {
                            width: 185px;

                            div {
                                visibility: hidden;
                                display: flex;
                                align-items: center;

                                i {
                                    height: 25px;
                                    margin-right: 23.4px;

                                    &:last-child {
                                        margin-right: 0px;
                                    }

                                    &.icon-collect {
                                        width: 22.87px;
                                        background: url("../../../assets/images/table/t-c.png") no-repeat center;
                                        background-size: 100%;

                                        &:hover {
                                            background: url("../../../assets/images/table/t-c-h.png") no-repeat center;
                                            background-size: 100%;
                                        }
                                    }

                                    &.icon-collect-ok {
                                        width: 22.87px;
                                        background: url("../../../assets/images/table/t-c-s.png") no-repeat center;
                                        background-size: 100%;

                                        &:hover {
                                            background: url("../../../assets/images/table/t-c-s-h.png") no-repeat center;
                                            background-size: 100%;
                                        }
                                    }
                                }
                            }
                        }

                        &:nth-child(4) {
                            span {
                                height: 20px;
                                font-size: 14px;
                                color: rgba(255, 255, 255, .7);
                            }
                        }

                        &:nth-child(5) {
                            width: 20%;

                            div {
                                visibility: hidden;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                i {
                                    width: 21px;
                                    height: 25px;
                                    margin-right: 23.4px;

                                    &:last-child {
                                        margin-right: 0px;
                                    }

                                    background: url("../../../assets/images/table/t-link-s.png") no-repeat center;
                                    background-size: 100%;

                                    &:hover {
                                        background: url("../../../assets/images/table/t-link-h.png") no-repeat center;
                                        background-size: 20.67px 20.67px;
                                    }
                                }
                            }
                        }

                        &:nth-child(6) {
                            div {
                                width: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                span {
                                    display: block;
                                    font-size: 14px;
                                    color: rgba(255, 255, 255, .5);
                                }

                                i {
                                    display: none;
                                    width: 19.39px;
                                    height: 25px;
                                    background: url("../../../assets/images/table/t-del.png") no-repeat center;
                                    background-size: 100%;

                                    &:hover {
                                        background: url("../../../assets/images/table/t-del-h.png") no-repeat center;
                                        background-size: 19.39px 20.67px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
