<template>
  <div class="igb-modules-singer-page">
    <div class="type-list">
      <div
        v-for="(item, index) in typeList"
        :key="index"
        :class="{ 'type-item-current': item.check }"
        @click="changeHandller(item)"
      >
        {{ item.label }}
      </div>
    </div>

    <div class="list-category">
      <igb-letters></igb-letters>
    </div>

    <igb-line class="list-line"></igb-line>

    <div class="list-scrollbar">
      <igb-singer-list
        :dataSource="singerList"
        @change="singerChangeHandller"
      ></igb-singer-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IgbModulesSingerPage',
  data () {
    return {
      typeList: [
        {
          value: 0,
          label: '推荐歌星',
          check: true
        },
        {
          value: 1,
          label: '华语男星',
          check: false
        },
        {
          value: 2,
          label: '华语女星',
          check: false
        },
        {
          value: 3,
          label: '乐队组合',
          check: false
        },
        {
          value: 4,
          label: '歌坛巨星',
          check: false
        },
        {
          value: 5,
          label: '歌坛新秀',
          check: false
        }
      ],
      singerList: [
        {
          name: '郭富城',
          type: '华语男星'
        },
        {
          name: '周杰伦',
          type: '华语男星',
          current: false
        },
        {
          name: '韩红',
          type: '华语男星'
        },
        {
          name: '李文文',
          type: '华语男星'
        },
        {
          name: '周杰伦',
          type: '华语男星'
        },
        {
          name: '韩红',
          type: '华语男星'
        },
        {
          name: '李文文',
          type: '华语男星'
        },
        {
          name: '韩红',
          type: '华语男星'
        },
        {
          name: '李文文',
          type: '华语男星'
        },
        {
          name: '周杰伦',
          type: '华语男星'
        },
        {
          name: '韩红',
          type: '华语男星'
        },
        {
          name: '李文文',
          type: '华语男星'
        },
        {
          name: '韩红',
          type: '华语男星'
        },
        {
          name: '李文文',
          type: '华语男星'
        },
        {
          name: '周杰伦',
          type: '华语男星'
        },
        {
          name: '韩红',
          type: '华语男星'
        },
        {
          name: '李文文',
          type: '华语男星'
        },
        {
          name: '韩红',
          type: '华语男星'
        },
        {
          name: '李文文',
          type: '华语男星'
        },
        {
          name: '周杰伦',
          type: '华语男星'
        },
        {
          name: '韩红',
          type: '华语男星'
        },
        {
          name: '李文文',
          type: '华语男星'
        },
        {
          name: '韩红',
          type: '华语男星'
        },
        {
          name: '李文文',
          type: '华语男星'
        },
        {
          name: '周杰伦',
          type: '华语男星'
        }
      ]
    }
  },
  methods: {
    changeHandller (item) {
      item.check = true
      this.typeList
        .filter(e => e.value !== item.value)
        .forEach(e => (e.check = false))
    },
    singerChangeHandller (event) {
      this.$router.push({
        path: '/pages/detail/singer'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/ddd/mixin.scss";
.igb-modules-singer-page {
  .list-category {
    margin-top: calc-attr(43);
  }
  .list-line {
    margin-top: calc-attr(31);
  }
  .type-list {
    width: 100%;
    margin-top: calc-attr(34);
    display: flex;
    align-items: center;

    div {
      width: calc-attr(288);
      height: calc-attr(60);
      line-height: calc-attr(60);
      text-align: center;
      background: url("../../assets/images/tab/a2.png") no-repeat center;
      background-size: 100%;
      font-size: calc-attr(24);
      font-family: "PingFang-SC-Regular";
      font-weight: normal;
      color: rgba(255, 255, 255, 0.8);
      text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      cursor: pointer;
      position: relative;
      overflow: hidden;
      margin-left: calc-attr(-25);

      &:hover {
        background: url("../../assets/images/tab/a2h.png") no-repeat center;
        background-size: 100%;
        color: rgba(255, 255, 255, 0.9);
      }

      &.type-item-current {
        background: url("../../assets/images/tab/a2s.png") no-repeat center;
        background-size: 100%;
        color: rgba(252, 144, 45, 1);
        font-weight: 400;
      }

      &:first-child {
        background: url("../../assets/images/tab/l2.png") no-repeat center;
        background-size: 100%;
        margin-left: 0px;

        &:hover {
          background: url("../../assets/images/tab/l2h.png") no-repeat center;
          background-size: 100%;
          color: rgba(255, 255, 255, 0.9);
        }

        &.type-item-current {
          background: url("../../assets/images/tab/l2s.png") no-repeat center;
          background-size: 100%;
          color: rgba(252, 144, 45, 1);
          font-weight: 400;
        }
      }

      &:last-child {
        background: url("../../assets/images/tab/r2.png") no-repeat center;
        background-size: 100%;

        &:hover {
          background: url("../../assets/images/tab/r2h.png") no-repeat center;
          background-size: 100%;
          color: rgba(255, 255, 255, 0.9);
        }

        &.type-item-current {
          background: url("../../assets/images/tab/r2s.png") no-repeat center;
          background-size: 100%;
          color: rgba(252, 144, 45, 1);
          font-weight: 400;
        }
      }
    }
  }

  .list-scrollbar {
    margin-top: calc-attr(37);
    //height: calc(100vh - 442px);
    //overflow-x: hidden;
    //overflow-y: auto;
    // @include scroll-bar(0px);
  }
}
</style>
