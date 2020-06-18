<template>
<div class="igb-letters-base-component">
    <span v-for="(item,index) in letterList" :key="index" class="letter-item" :class="{'letter-item-current':item.check}" @click="changeHandller(item);">{{item.label}}</span>
</div>
</template>

<script>
export default {
  name: 'IgbLettersBaseComponent',
  data () {
    return {
      letterList: [{
        value: '1',
        label: 'A',
        check: true
      },
      {
        value: '2',
        label: 'B',
        check: false
      },
      {
        value: '3',
        label: 'C',
        check: false
      },
      {
        value: '4',
        label: 'D',
        check: false
      },
      {
        value: '5',
        label: 'E',
        check: false
      },
      {
        value: '6',
        label: 'F',
        check: false
      },
      {
        value: '7',
        label: 'G',
        check: false
      },
      {
        value: '8',
        label: 'H',
        check: false
      },
      {
        value: '9',
        label: 'I',
        check: false
      },
      {
        value: '10',
        label: 'J',
        check: false
      },
      {
        value: '11',
        label: 'K',
        check: false
      },
      {
        value: '12',
        label: 'L',
        check: false
      },
      {
        value: '13',
        label: 'M',
        check: false
      },
      {
        value: '14',
        label: 'N',
        check: false
      },
      {
        value: '15',
        label: 'O',
        check: false
      },
      {
        value: '16',
        label: 'P',
        check: false
      },
      {
        value: '17',
        label: 'Q',
        check: false
      },
      {
        value: '18',
        label: 'R',
        check: false
      },
      {
        value: '19',
        label: 'S',
        check: false
      },
      {
        value: '20',
        label: 'T',
        check: false
      },
      {
        value: '21',
        label: 'U',
        check: false
      },
      {
        value: '22',
        label: 'V',
        check: false
      },
      {
        value: '23',
        label: 'W',
        check: false
      },
      {
        value: '24',
        label: 'X',
        check: false
      },
      {
        value: '25',
        label: 'Y',
        check: false
      },
      {
        value: '26',
        label: 'Z',
        check: false
      },
      {
        value: '27',
        label: '#',
        check: false
      }
      ]
    }
  },
  mounted () {
    let itemList = document.getElementsByClassName('letter-item')
    if (itemList.length > 0) {
      itemList.forEach(element => {
        let itemWidth = element.offsetWidth / 1.66
        element.style.height = `${parseFloat(itemWidth).toFixed(0)}px`
      })
    }
  },
  methods: {
    /**
         * 点击改变事件
         */
    changeHandller (item) {
      item.check = true
      this.letterList.filter(e => e.value !== item.value).forEach(e => e.check = false)
      this.$emit('change', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-letters-base-component {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc-attr(60);
        height: auto;
        font-size: calc-attr(20);
        font-family: Arial;
        font-weight: 400;
        color: rgba(255, 255, 255, .5);
        text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        text-align: center;
        cursor: pointer;

        &:hover {
            color: rgba(255, 255, 255, .7);
        }

        &.letter-item-current {
            color: rgba(252, 144, 45, 1) !important;
            background: rgba(252, 144, 45, .2);
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
            border-radius: 18px;
        }
    }
}
</style>
