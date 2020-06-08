<template>
<div class="igb-pages-setting-use-scenes">
    <h2>使用场景</h2>

    <igb-line style="margin-top:11px;"></igb-line>

    <div class="form-list">
        <div class="form-list-item">
            <div>
                <a-radio-group name="radioGroup" :defaultValue="1">
                    <a-radio :value="1">家庭(HOME)</a-radio>
                    <a-radio :value="2">商业(KTV)</a-radio>
                </a-radio-group>
            </div>
            <div class="des">KTV模式下，退出软件或进行设置，均需输入密码，请：<span>设置密码</span></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'IgbPagesSettingUseScenesComponent',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.igb-pages-setting-use-scenes {
    padding: 0 calc-attr(72.5);
    // width: calc(100% - 145px);
    margin: 0 auto;

    h2 {
        height: calc-attr(22);
        line-height: calc-attr(22);
        font-size: calc-attr(16);
        font-family: 'PingFang-SC-Regular';
        color: rgba(255, 255, 255, .9);
        margin: calc-attr(61) auto auto auto;
        padding: 0px;
    }

    .form-list {
        margin-top: calc-attr(21);
        .form-list-item {
            .des {
                margin-top: calc-attr(10);
                font-size: calc-attr(14);
                font-family: 'PingFang-SC-Regular';
                font-weight: 400;
                color: #98A2B1;

                span {
                    color: rgba(249, 118, 71, 1);
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
