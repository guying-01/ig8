<template>
<div class="igb-page-main-base-component">
    <igb-header isHome></igb-header>

    <div class="form-main">
        <div class="ig8-layout-content">
        <h1>
            <p class="icon-left" @click="backHandller();"></p>
            <span>{{title}}</span>
        </h1>
        <div class="form-content">
            <slot name="main"></slot>
        </div>
        </div>

    </div>

    <igb-footer class="footer"></igb-footer>
</div>
</template>

<script>
import localStorageService from '../../../ddd/localStorage.service'
import IgbLayoutHeaderComponent from '../../../layout/header.vue'
import IgbLayoutFooterComponent from '../../../layout/footer.vue'
export default {
  name: 'IgbPageMainBaseComponent',
  components: {
    'igb-header': IgbLayoutHeaderComponent,
    'igb-footer': IgbLayoutFooterComponent
  },
  props: {
    title: {
      type: String,
      default: '默认标题'
    }
  },
  methods: {
    backHandller () {
      let KEY = 'BACK-URL'
      let url = localStorageService.getItem(KEY)
      this.$router.push({
        path: url
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/ddd/mixin.scss";

.igb-page-main-base-component {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
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
                    width: calc-attr(490) !important;
                }

                .volume-controller {

                    .contr-vom {
                        margin-left: calc-attr(279) !important;
                    }
                }

                .song-controller {
                    margin-left: calc-attr(239) !important;
                }

                .song-switch {
                    margin-left: calc-attr(70);
                }
            }
        }
    }

    .form-main {
        flex: 1;
        width:100%;
        padding:calc-attr(27.5) calc-attr(40) calc-attr(109 + 27.5);
        overflow: hidden;
        // margin: calc-attr(27.5) auto auto auto;
        .ig8-layout-content{
           background: rgba(255, 255, 255, .05);
           overflow-x: hidden;
           overflow-y: auto;
           height: 100%;
            @include scroll-bar(8px);
        }

        h1 {
            height: calc-attr(72);
            line-height: calc-attr(72);
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, .05);
            padding-left: calc-attr(10);
            margin: 0px;

            p {
                padding: 0px;
                margin: 0px;
                width: calc-attr(40);
                height: calc-attr(40);
                cursor: pointer;
                background: transparent url("../../../assets/images/icon-left.png") no-repeat center;

                &:hover {
                    border-radius: 50%;
                    background: rgba(#707070, .1) url("../../../assets/images/icon-left.png") no-repeat center;
                }
            }

            span {
                font-size: calc-attr(24);
                font-family: 'PingFang-SC-Regular';
                font-weight: 500;
                color: rgba(255, 255, 255, .8);
                margin-left: calc-attr(30);
            }
        }

        .form-content {
            // width: calc(100% - 34px);
            padding: 0 calc-attr(17);
            height: 100%;
            margin: 0 auto;
        }
    }
}
</style>
