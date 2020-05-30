<template>
<div class="igb-page-main-base-component">
    <igb-header isHome></igb-header>

    <div class="form-main">
        <h1>
            <p class="icon-left" @click="backHandller();"></p>
            <span>{{title}}</span>
        </h1>
        <div class="form-content">
            <slot name="main"></slot>
        </div>
    </div>

    <igb-footer class="footer"></igb-footer>
</div>
</template>

<script>
import localStorageService from "../../../ddd/localStorage.service";
import IgbLayoutHeaderComponent from "../../../layout/header.vue";
import IgbLayoutFooterComponent from "../../../layout/footer.vue";
export default {
    name: "IgbPageMainBaseComponent",
    components: {
        'igb-header': IgbLayoutHeaderComponent,
        'igb-footer': IgbLayoutFooterComponent
    },
    props: {
        title: {
            type: String,
            default: "默认标题"
        }
    },
    methods: {
        backHandller() {
            let KEY = "BACK-URL";
            let url = localStorageService.getItem(KEY);
            this.$router.push({
                path: url
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/ddd/mixin.scss";

.igb-page-main-base-component {
    position: relative;

    .footer {
        position: fixed;
        bottom: 0px;
        left: 0px;

    }

    >>>.igb-layout-footer {
        padding-left: 0px;

        .igb-audio-family-control-base-component {
            .foo-controller {
                .singer-info {
                    width: 490px !important;
                }

                .volume-controller {

                    .contr-vom {
                        margin-left: 279px !important;
                    }
                }

                .song-controller {
                    margin-left: 239px !important;
                }

                .song-switch {
                    margin-left: 70px;
                }
            }
        }
    }

    .form-main {
        width: calc(100% - 80px);
        height: calc(100vh - 72px - 109px - 27.5px - 40px);
        overflow: hidden;
        margin: 27.5px auto auto auto;
        background: rgba(255, 255, 255, .05);

        h1 {
            height: 72px;
            line-height: 72px;
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, .05);
            padding-left: 10px;
            margin: 0px;

            p {
                padding: 0px;
                margin: 0px;
                width: 40px;
                height: 40px;
                cursor: pointer;
                background: transparent url("../../../assets/images/icon-left.png") no-repeat center;

                &:hover {
                    border-radius: 50%;
                    background: rgba(#707070, .1) url("../../../assets/images/icon-left.png") no-repeat center;
                }
            }

            span {
                font-size: 24px;
                font-family: 'PingFang-SC-Regular';
                font-weight: 500;
                color: rgba(255, 255, 255, .8);
                margin-left: 30px;
            }
        }

        .form-content {
            width: calc(100% - 34px);
            height: calc(100vh - 72px - 109px - 27.5px - 40px - 72px);
            margin: 0 auto;
            overflow-x: hidden;
            overflow-y: auto;
            @include scroll-bar(8px);
        }
    }
}
</style>
