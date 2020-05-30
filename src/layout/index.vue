<template>
<div class="igb-layout-index">
    <igb-sidebar @modeChange="modeHandller"></igb-sidebar>
    <div class="igb-layout-container">
        <igb-header></igb-header>
        <div class="igb-wrapper">
            <div class="igb-main-page">
                <router-view></router-view>
            </div>
        </div>
        <igb-footer :mode="mode"></igb-footer>
        <igb-video></igb-video>
    </div>
</div>
</template>

<script>
import IgbLayoutHeaderComponent from "./header.vue";
import IgbLayoutSidebarComponent from "./sidebar.vue";
import IgbLayoutFooterComponent from "./footer.vue";
import IgbLayoutVideoComponent from "./video.vue";
export default {
    name: "IgbLayoutIndexComponent",
    components: {
        'igb-header': IgbLayoutHeaderComponent,
        'igb-sidebar': IgbLayoutSidebarComponent,
        'igb-footer': IgbLayoutFooterComponent,
        'igb-video': IgbLayoutVideoComponent
    },
    data() {
        return {
            mode: 0
        }
    },
    methods: {
        modeHandller(event) {
            console.log(event);
            this.mode = event.mode;
        }
    }
}
</script>
