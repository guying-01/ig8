<!--
 * @Author: gy
 * @Date: 2020-05-28 10:35:22
 * @LastEditors: gy
 * @LastEditTime: 2020-06-04 19:41:23
-->
<template>
<span class="tag" :class="`tag-${list[type].color}`">{{list[type].label}}</span>
</template>

<script>
export default {
  name: 'IgbTagBaseComponent',
  props: {
    type: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      list: [{
        key: 0,
        label: '人物',
        color: 'blue'
      },
      {
        key: 1,
        label: 'Live',
        color: 'yellow'
      },
      {
        key: 2,
        label: '故事',
        color: 'green'
      },
      {
        key: 3,
        label: 'Movie',
        color: 'red'
      },
      {
        key: 4,
        label: 'Flash',
        color: 'purple'
      }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tag {
    display: block;
    width:calc-attr(28);
    height:calc-attr(16);
    line-height:calc-attr(16);
    font-size:calc-attr(12);
    border-radius: 2px;
    text-align: center;

    &.tag-blue {
        border: 1px solid rgba(56, 140, 255, .5);
        color: rgba(56, 140, 255, 1);
    }

    &.tag-yellow {
        border: 1px solid rgba(222, 155, 3, .5);
        color: rgba(222, 155, 3, 1);
    }

    &.tag-green {
        border: 1px solid rgba(9, 193, 150, .5);
        color: rgba(9, 193, 150, 1);
    }

    &.tag-red {
        border: 1px solid rgba(219, 69, 21, .5);
        color: rgba(219, 69, 21, 1);
    }

    &.tag-purple {
        border: 1px solid rgba(166, 41, 221, .5);
        color: rgba(166, 41, 221, 1);
    }
}
</style>
