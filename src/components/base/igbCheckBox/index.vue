<template>
<div class="igb-checkbox-base-component" @click="changeHandller">
    <p><span :class="{'no-check':!val,'yes-check':val}"></span></p>
    <span class="igb-checkbox-text">
        <slot></slot>
    </span>
</div>
</template>

<script>
export default {
  name: 'IgbCheckBoxBaseComponent',
  props: {
    value: [Boolean]
  },
  data () {
    return {
      val: this.value
    }
  },
  methods: {
    changeHandller () {
      this.val = !this.val
      this.$emit('input', this.val)
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-checkbox-base-component {
    display: flex;
    align-items: center;
    height: calc-attr(20);
    cursor: pointer;

    p {
        padding: 0px;
        margin: 0px;

        span {
            display: block;
            width: calc-attr(14);
            height: calc-attr(14);

            border-radius: 2px;

            &.no-check {
                border: 1px solid rgba(255, 255, 255, .5);

            }

            &.yes-check {
                border: 1px solid #FF8042;
                background: #FF8042 url("../../../assets/images/icon-check-yes.png") no-repeat center;
                background-size: 9px;
            }
        }
    }

    .igb-checkbox-text {
        flex: 1;
        font-size: calc-attr(14);
        font-weight: 400;
        color: rgba(255, 255, 255, .7);
        padding-left: calc-attr(10);
    }

    &:hover {
        .no-check:hover {
            background: rgba(#414462, .5);
        }

        .yes-check:hover {
            border: 1px solid #E55712;
            background: #E55712 url("../../../assets/images/icon-check-yes.png") no-repeat center;
            background-size: 9px;
        }

        .igb-checkbox-text {

            color: rgba(255, 255, 255, .9);
        }

    }
}
</style>
