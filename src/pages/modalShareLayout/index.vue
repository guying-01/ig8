<template>
<div class="igb-pages-modal-share-layout">
    <igb-share-one v-if="pageEnum[0].value" @next="toPage"></igb-share-one>
    <igb-share-two v-if="pageEnum[1].value" @next="toPage"></igb-share-two>
</div>
</template>

<script>
import IgbPagesShareOneModalComponent from "./shareOne/index.vue";
import IgbPagesShareTwoModalComponent from "./shareTwo/index.vue";
export default {
    name: "IgbPagesModalShareLayoutComponent",
    components: {
        "igb-share-one": IgbPagesShareOneModalComponent,
        "igb-share-two": IgbPagesShareTwoModalComponent
    },
    props: {
        pages: {
            type: Array,
            default: () => [{
                    key: "one",
                    value: true
                },
                {
                    key: "two",
                    value: false
                }
            ]
        }
    },
    data() {
        return {
            pageEnum: this.pages
        };
    },
    methods: {
        toPage(event) {
            let page = this.pageEnum.find(e => e.key === event.key);
            if (page) {
                page.value = event.value;

                this.pageEnum
                    .filter(e => e.key !== event.key)
                    .forEach(e => (e.value = false));
            } else {
                if (event.key === "ok") {
                    this.$emit('ok', event);
                }
            }
        }
    }
};
</script>
