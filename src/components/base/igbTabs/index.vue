<template>
<div class="igb-tabs-base-component">
    <div class="tab-item" v-for="(item,index) in dataSource" :key="index" :class="{'tab-item-current':tabIndex===index}" @click="tabItemClick(item,index);">{{item.label}}</div>
    <div class="tab-mode" v-show="operation">
        <span class="tab-mode-refresh" v-if="refresh"><i></i>换一批</span>
        <span class="tab-mode-item tab-mode-item-list" :class="{'tab-mode-current':mode==='list'}" @click="modeChange('list');">
            <img src="../../../assets/images/mode-list.png" />
        </span>
        <span class="tab-mode-item tab-mode-item-card" :class="{'tab-mode-current':mode==='card'}" @click="modeChange('card');">
            <img src="../../../assets/images/mode-card.png" />
        </span>
    </div>
</div>
</template>

<script>
export default {
    name: "IgbTabsBaseComponent",
    props: {
        mode: {
            type: String,
            default: "list"
        },
        dataSource: {
            type: Array,
            default: () => []
        },
        refresh: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {

            tabIndex: 0,
            operation: false
        }
    },
    mounted() {
        this.tabItemClick(this.dataSource[0], 0);
    },
    methods: {
        tabItemClick(item, index) {
            this.tabIndex = index;
            this.operation = item.operation;
            this.$emit('tabChange', item);
        },
        modeChange(type) {
            this.mode = type;
            this.$emit('modeChange', {
                type: type
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.igb-tabs-base-component {
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    display: flex;
    align-items: center;

    .tab-item {
        font-size: 20px;
        font-family: 'PingFang-SC-Regular';
        font-weight: 400;
        color: rgba(255, 255, 255, .7);
        padding-bottom: 17px;
        margin-right: 72px;
        position: relative;
        cursor: pointer;

        &:first-child {
            margin-left: 20px;
        }

        &:hover {
            color: rgba(255, 255, 255, 8);
        }

        &.tab-item-current {
            font-family: "PingFang SC";
            font-weight: 500;
            color: rgba(255, 255, 255, 1);

            &:after {
                content: "";
                position: absolute;
                bottom: -2px;
                left: 7.5%;
                width: 85%;
                height: 3px;
                background: linear-gradient(45deg, rgba(255, 183, 4, 1) 0%, rgba(255, 114, 81, 1) 100%);
                border-radius: 12px;
            }
        }

    }

    .tab-mode {
        flex: 1;
        text-align: right;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: -11px;

        .tab-mode-refresh {

            font-size: 14px;
            font-family: 'PingFang-SC-Regular';
            font-weight: 400;
            color: rgba(255, 255, 255, .5);
            text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
            padding-right: 29px;
            cursor: pointer;
            display: flex;
            align-items: center;

            i {
                display: block;
                width: 15.57px;
                height: 16.47px;
                background: url('../../../assets/images/icon-refresh.png') no-repeat center;
                background-size: 100%;
                margin-right: 8.5px;
            }

            &:hover {
                opacity: .7;
            }
        }

        .tab-mode-item {
            display: block;
            width: 48px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background: rgba(255, 255, 255, .1);
            position: relative;
            cursor: pointer;

            &:hover {
                background: rgba(255, 255, 255, .3) !important;
            }

            img {
                width: 16px;
                position: absolute;
                top: 8px;
                left: 16px
            }

            &.tab-mode-current {
                background: rgba(255, 255, 255, .2);
            }

            &.tab-mode-item-list {
                border-radius: 15px 0px 0px 15px;
            }

            &.tab-mode-item-card {
                border-radius: 0px 15px 15px 0px;

                img {
                    top: 7px !important;
                }
            }

        }
    }
}
</style>
