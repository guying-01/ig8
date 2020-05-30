<template>
<div class="igb-radio-block-base-component">
    <div class="igb-radio-list">
        <span v-for="(item,index) in dataSource" :key="index" class="igb-radio-list-item" :class="{'current':item.check}" @click="changeHandller(item);">{{item.label}}</span>
    </div>
</div>
</template>

<script>
export default {
    name: "IgbRadioBlockBaseComponent",
    props: {
        dataSource: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        /**
         * 改變回調事件
         */
        changeHandller(item) {
            item.check = true;
            this.dataSource.filter(e => e.value !== item.value).forEach(e => e.check = false);
            this.$emit('change', item);
        }
    }
}
</script>

<style lang="scss" scoped>
.igb-radio-block-base-component {
    .igb-radio-list {
        display: flex;
        align-items: center;

        .igb-radio-list-item {
            width: 168px;
            height: 36px;
            line-height: 36px;
            border: 1px solid rgba(255, 255, 255, .2);
            border-radius: 4px;
            margin-right: 20px;
            text-align: center;
            font-size: 14px;
            font-family: 'PingFang-SC-Regular';
            font-weight: 400;
            color: rgba(255, 255, 255, .8);
            cursor: pointer;

            &.current {
                border: 1px solid rgba(255, 128, 66, 1);
                color: rgba(255, 128, 66, 1);
                background: url('../../../assets/images/icon-current.png') no-repeat 146px 14px;
            }

            &:hover {
                border: 1px solid rgba(255, 128, 66, 1);
                color: rgba(255, 128, 66, 1);
            }

            &:active {
                border: 1px solid rgba(255, 128, 66, 1);
                color: rgba(255, 128, 66, 1);
                box-shadow: 0 0 0 3px rgba(214, 105, 23, .01) !important;
            }
        }
    }
}
</style>
