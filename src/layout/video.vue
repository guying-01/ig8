<template>
<div class="igb-layout-video" @click="videoHandller">
    <img src="../assets/images/video-bg.png" />
</div>
</template>

<script>
export default {
    name: "IgbLayoutVideoComponent",
    methods: {
        videoHandller() {
            this.$router.push({
                path: '/pages/video/index'
            });
        }
    }
}
</script>
