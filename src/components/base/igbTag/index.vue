<!--
 * @Author: gy
 * @Date: 2020-05-28 10:35:22
 * @LastEditors: gy
 * @LastEditTime: 2020-05-30 14:56:43
-->
<template>
  <span class="tag tag-yellow">
    <slot />
  </span>
</template>

<script>
import { GET_TAGS } from "@/api/api";
export default {
  name: "IgbTagBaseComponent",
  props: {
    type: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      list: [
        {
          key: 0,
          label: "人物",
          color: "blue"
        },
        {
          key: 1,
          label: "Live",
          color: "yellow"
        },
        {
          key: 2,
          label: "故事",
          color: "green"
        },
        {
          key: 3,
          label: "Movie",
          color: "red"
        },
        {
          key: 4,
          label: "Flash",
          color: "purple"
        }
      ]
    };
  },
  created() {
    // GET_TAGS({ CMD: "GET_TAGS" }).then(res => {
    //   this.list = res["List"];
    // });
  }
};
</script>

<style lang="scss" scoped>
.tag {
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  border-radius: 2px;
  padding: 0 2px;

  &.tag-blue {
    border: 1px solid rgba(56, 140, 255, 0.5);
    color: rgba(56, 140, 255, 1);
  }

  &.tag-yellow {
    border: 1px solid rgba(222, 155, 3, 0.5);
    color: rgba(222, 155, 3, 1);
  }

  &.tag-green {
    border: 1px solid rgba(9, 193, 150, 0.5);
    color: rgba(9, 193, 150, 1);
  }

  &.tag-red {
    border: 1px solid rgba(219, 69, 21, 0.5);
    color: rgba(219, 69, 21, 1);
  }

  &.tag-purple {
    border: 1px solid rgba(166, 41, 221, 0.5);
    color: rgba(166, 41, 221, 1);
  }
}
</style>
