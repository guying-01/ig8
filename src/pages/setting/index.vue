<template>
<div class="igb-pages-setting">
    <igb-page-main title="设置">
        <template slot="main">
            <div class="main">
                <div class="main-sidebar">
                    <ul>
                        <li v-for="item in menuList" :key="item.value" :class="{'current':item.current}" @click="toMenuHandller(item);">
                            <span>{{item.label}}</span>
                            <i class="icon icon-dian"></i>
                        </li>
                    </ul>
                </div>
                <div class="main-content">
                    <igb-setting-login></igb-setting-login>
                    <igb-setting-use-scenes></igb-setting-use-scenes>
                </div>
            </div>
        </template>
    </igb-page-main>
</div>
</template>

<script>
import IgbPagesSettingLoginComponent from "./login/index.vue";
import IgbPagesSettingUseScenesComponent from "./useScenes/index.vue";
export default {
    name: "IgbPagesSettingComponent",
    components: {
        'igb-setting-login': IgbPagesSettingLoginComponent,
        'igb-setting-use-scenes': IgbPagesSettingUseScenesComponent
    },
    data() {
        return {
            menuList: [{
                    value: 0,
                    label: "登录设置",
                    url: "/pages/setting/login",
                    current: true
                },
                {
                    value: 1,
                    label: "使用场景",
                    url: "/pages/setting/useScenes",
                    current: false
                }
            ]
        }
    },
    methods: {
        /**
         * 点击菜单跳转路由
         */
        toMenuHandller(item) {
            item.current = true;
            this.menuList.filter(e => e.value !== item.value).forEach(e => e.current = false);
            this.$router.push({
                path: item.url
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.igb-pages-setting {
    .main {
        display: flex;

        .main-sidebar,
        .main-content {
            position: relative;
            height: calc(100vh - 72px - 109px - 72px - 27.5px - 40px);
        }

        .main-sidebar {
            width: 210px;
            border-right: 1px solid rgba(255, 255, 255, .05);

            ul {
                list-style: none;

                li {
                    height: 25px;
                    line-height: 25px;
                    position: relative;
                    text-align: right;
                    cursor: pointer;

                    &:first-child {
                        margin: 41px 0px 54px 0px;
                    }

                    &.current {
                        span {
                            color: rgba(255, 255, 255, .9);
                        }

                        i {
                            visibility: visible;
                        }
                    }

                    span {
                        font-size: 18px;
                        font-family: 'PingFang-SC-Regular';
                        color: rgba(255, 255, 255, .5);
                        padding-right: 37px;
                    }

                    i {
                        visibility: hidden;
                        display: block;
                        width: 11px;
                        height: 11px;
                        background: rgba(249, 118, 71, 1);
                        border: 2px solid rgba(255, 255, 255, 0.050980392156862744);
                        border-radius: 50%;

                        position: absolute;
                        top: 6px;
                        right: -5.5px;
                    }
                }
            }
        }

        .main-content {
            flex: 1;
        }
    }
}
</style>
