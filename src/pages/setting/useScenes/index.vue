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
    name: "IgbPagesSettingUseScenesComponent",
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.igb-pages-setting-use-scenes {
    width: calc(100% - 145px);
    margin: 0 auto;

    h2 {
        height: 22px;
        line-height: 22px;
        font-size: 16px;
        font-family: 'PingFang-SC-Regular';
        color: rgba(255, 255, 255, .9);
        margin: 61px auto auto auto;
        padding: 0px;
    }

    .form-list {
        margin-top: 21px;
        .form-list-item {
            .des {
                margin-top: 10px;
                font-size: 14px;
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
