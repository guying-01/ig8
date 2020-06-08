<!--
 * @Author: gy
 * @Date: 2020-05-28 10:35:21
 * @LastEditors: gy
 * @LastEditTime: 2020-06-08 15:41:38
-->
<template>
<div class="igb-key-board-base-component">
    <igb-key-board-letter v-if="model===0" @model="modelChange"></igb-key-board-letter>
    <igb-key-board-digital v-if="model===1" @model="modelChange"></igb-key-board-digital>
    <igb-key-board-handwriting v-if="model===2" @model="modelChange"></igb-key-board-handwriting>
</div>
</template>

<script>
export default {
  name: 'IgbKeyBoardBaseComponent',
  props: {
    sw: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      model: this.sw
    }
  },
  methods: {
    modelChange (event) {
      this.model = event.model
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-key-board-base-component {
    width: 100%;
    padding-right:calc-attr(238);
    box-sizing: border-box;
    // width: calc(100% - 238px);
    height: auto;
    border-top: 2px solid rgba(255, 151, 39, 0.3);
    background: rgba(42, 45, 69, 1);
    box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.35);
    position: absolute;
    bottom: calc-attr(109);
    left: calc-attr(238);
}
</style>
