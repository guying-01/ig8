<template>
<div class="igb-popover-base-component">
    <div class="igb-popover-tag" @click.stop="pop($event)">
        <slot></slot>
    </div>
    <div class="igb-popover-wrap"  :style="{left: x + 'px', top: y + 'px', visibility: show ? 'visible' : 'hidden',zIndex:90000}" :class="className" ref="pop">
        <div class="igb-popover-box">
            <div class="igb-popover-title" v-if="title">{{title}}</div>
            <div class="igb-popover-content">
                <slot name="content"></slot>
                <div v-if="content">
                    {{content}}
                </div>
            </div>
            <div :class="['igb-popover-arrow', placement == 'top' ? 'igb-popover-arrow-top' : 'igb-popover-arrow-bottom']" :style="{left: arrowLeft + 'px'}"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "IgbPopoverBaseComponent",
    props: {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        /**
         * 可选值  top \ bottom
         */
        placement: {
            type: String,
            default: 'bottom'
        },
        top: {
            type: Number,
            default: 0
        },
        left: {
            type: Number,
            default: 0
        },
        arrLeft: {
            type: Number,
            default: 0
        },
        className: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            show: false,
            arrowLeft: 0,
            x: 0,
            y: 0
        }
    },
    methods: {
        pop(e) {
            if (this.show) {
                this.show = false;
                return;
            }
            var target = e.target;
            this.arrowLeft = (this.$refs.pop.offsetWidth / 2) + this.arrLeft;
            this.x = target.offsetLeft + this.left;
            if (this.placement == 'top') {
                this.y = target.offsetTop - target.offsetHeight - this.top;
            } else {
                this.y = target.offsetTop + target.offsetHeight + this.top;
            }
            this.show = true;
        },
        outHandller() {
            this.show = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.igb-popover-base-component {
    .igb-popover-tag {
        padding: 10px 0px;
    }

    .igb-popover-wrap {
        position: absolute;

        .igb-popover-box {
            box-sizing: border-box;
            width: 177px;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #d9d9d9;
            border-radius: 6px;
            box-shadow: 0 1px 6px hsla(0, 0%, 39%, .2);
            position: relative;
            z-index: 30000;

            .igb-popover-title {
                padding: 0 16px;
                line-height: 32px;
                height: 32px;
                border-bottom: 1px solid #e9e9e9;
                color: #666;
            }

            .igb-popover-content {
                padding: 8px 16px;
                color: #666;
                word-break: break-all;
            }

            .igb-popover-arrow {
                position: absolute;
                width: 0;
                height: 0;
                border: 10px solid transparent;
                // left: 50%;
                margin-left: -10px;

                &:after {
                    content: " ";
                    margin-left: -4px;
                    border: 4px solid transparent;
                    position: absolute;
                    width: 0;
                    height: 0;
                }
            }

            .igb-popover-arrow-top {
                border-bottom-width: 0;
                border-top-color: #d9d9d9;
                bottom: -5px;

                &:after {
                    border-top-color: #fff;
                    bottom: -3px;
                }
            }

            .igb-popover-arrow-bottom {
                border-top-width: 0;
                border-bottom-color: #d9d9d9;
                top: -10px;

                &:after {
                    border-bottom-color: #fff;
                    top: -3px;
                }
            }
        }
    }
}
</style>
