<template>
<div id="app" :class="`app-${domClass}`">
    <router-view />
</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            domClass: "recommend",
            urlList: [
                '/recommend/index',
                '/singer/index',
                '/classification/index',
                '/collect/index',
                '/pages/detail/songByAlbum',
                '/pages/detail/songByList',
                '/pages/setting/index',
                '/pages/user/index'
            ]
        }
    },
    watch: {
        $route(to, from) {
            let isHas = this.urlList.find(e => e === to.path);
            if (isHas) {
                if (isHas.split('/').length === 3) {
                    this.domClass = isHas.split('/')[1];
                } else {
                    this.domClass = isHas.split('/')[3];
                }

            }
        }
    },
    mounted() {
        this.$message.success("操作成功");
        this.$message.error("操作失败");
        this.$message.loading("操作中");
        this.$message.info("操作提示");
    }
}
</script>

<style lang="scss" scoped>
#app {
    height: 100vh;
    min-height: 100vh;
    padding: 0px;
    margin: 0px;
}
</style>
