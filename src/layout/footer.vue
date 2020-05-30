<template>
<div class="igb-layout-footer">
    <div>
        <igb-audio-family-ctrl v-if="mode===0"></igb-audio-family-ctrl>
        <igb-audio-ktv-ctrl v-if="mode===1"></igb-audio-ktv-ctrl>
    </div>
</div>
</template>

<script>
export default {
    name: "IgbLayoutFooterComponent",
    props: {
        mode: {
            type: Number,
            default: 0
        }
    },
    watch: {
        mode(newVal, oldVal) {
            console.log(newVal, oldVal);
        }
    }
};
</script>
