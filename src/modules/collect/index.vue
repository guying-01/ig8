<template>
  <div class="igb-modules-collect-page">
    <div class="tabs">
      <igb-tabs
        :dataSource="tabList"
        :mode="mode"
        @tabChange="tabChangeHandller"
        @modeChange="modeChangeHandller"
      ></igb-tabs>
    </div>

    <div class="list-scrollbar">
      <igb-song-table-list
        v-if="tabIndex === 0 && mode === 'list'"
        :dataSource="tableData"
        @change="songChangeHandller"
      ></igb-song-table-list>
      <igb-song-card-list
        v-if="tabIndex === 0 && mode === 'card'"
        :showNum="false"
        :dataSource="list"
        @change="songChangeHandller"
      ></igb-song-card-list>
      <div class="no-more" v-if="tabIndex === 0 && mode === 'list'">
        没有更多了...
      </div>
      <igb-singer-list
        v-if="tabIndex === 1"
        :dataSource="singerList"
        @change="singerChangeHandller"
      ></igb-singer-list>
      <igb-song-list
        v-if="tabIndex === 2"
        :dataSource="list3"
        @change="albumChangeHandller"
      ></igb-song-list>
    </div>
  </div>
</template>

<script>
// import { GET_TAGS, GET_SONGS } from '@/api/api'
export default {
  name: 'IgbModulesCollectPage',
  data () {
    return {
      mode: 'card',
      tabIndex: 0,
      tabList: [
        {
          value: 0,
          label: '歌曲(22)',
          operation: true
        },
        {
          value: 1,
          label: '歌手(7)',
          operation: false
        },
        {
          value: 2,
          label: '专辑(9)',
          operation: false
        }
      ],
      list: [
        {
          value: '01',
          SongName: '桥边姑娘',
          SingerName: '垂耳兔',
          LanguageName: '国语',
          MtvStyle: '人物',
          seal: true,
          collect: true
        }
      ],
      singerList: [
        {
          name: '郭富城',
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
      ],
      tableData: [
        {
          num: '01',
          label: '你的答案',
          tag: 0,
          singerName: '郭富城',
          singerType: '国语',
          name: '专辑名称',
          time: '02:00'
        },
        {
          num: '02',
          label: '死了都要爱',
          tag: 0,
          singerName: '信乐团',
          singerType: '国语',
          name: '专辑名称',
          time: '02:00'
        },
        {
          num: '03',
          label: '成都',
          tag: 0,
          singerName: '赵雪',
          singerType: '国语',
          name: '专辑名称',
          time: '02:00',
          seal: true
        },
        {
          num: '04',
          label: '我不是真正的快乐',
          tag: 1,
          singerName: '阿信',
          singerType: '国语',
          name: '专辑名称',
          time: '02:00'
        },
        {
          num: '05',
          label: '你的答案',
          tag: 0,
          singerName: '郭富城',
          singerType: '国语',
          name: '专辑名称',
          time: '02:00',
          play: true,
          current: true
        },
        {
          num: '06',
          label: '死了都要爱',
          tag: 0,
          singerName: '信乐团',
          singerType: '国语',
          name: '专辑名称',
          time: '02:00'
        }
      ],
      list3: [
        {
          value: 0,
          singerName: '江湖故人',
          songName: '你的答案',
          src: 'card1',
          tags: ['标签', '标签'],
          current: true
        },
        {
          value: 1,
          singerName: '寒江',
          songName: '我最爱你的眼睛',
          src: 'card2',
          tags: ['标签', '标签', '标签']
        },
        {
          value: 2,
          singerName: '寒江',
          songName: '判断',
          src: 'card3',
          tags: ['标签', '标签', '标签']
        },
        {
          value: 3,
          singerName: '孤影',
          songName: '不要你回家了',
          src: 'card4',
          tags: ['标签', '标签', '标签']
        },
        {
          value: 4,
          singerName: '他想你',
          songName: '那一年',
          src: 'card5',
          tags: ['标签', '标签', '标签']
        },
        {
          value: 5,
          singerName: 'Tony',
          songName: '像雾像雨有像风像雾像雨有像风',
          src: 'card6',
          tags: ['标签', '标签', '标签']
        },
        {
          value: 6,
          singerName: '凌霜',
          songName: '我最爱你的眼睛',
          src: 'card7',
          tags: ['标签', '标签']
        },
        {
          value: 7,
          singerName: '寒江',
          songName: '判断',
          src: 'card8',
          tags: ['标签', '标签', '标签']
        },
        {
          value: 8,
          singerName: '孤影',
          songName: '不要你回家了',
          src: 'card9',
          tags: ['标签', '标签', '标签']
        },
        {
          value: 9,
          singerName: '他想你',
          songName: '那一年',
          src: 'card10',
          tags: ['标签', '标签', '标签']
        },
        {
          value: 10,
          singerName: 'Tony',
          songName: '像雾像雨有像风',
          src: 'card11',
          tags: ['标签', '标签', '标签']
        },
        {
          value: 11,
          singerName: '他想你',
          songName: '那一年',
          src: 'card12',
          tags: ['标签', '标签', '标签']
        }
      ]
    }
  },
  methods: {
    tabChangeHandller (event) {
      this.tabIndex = event.value
    },
    modeChangeHandller (event) {
      this.mode = event.type
    },
    songChangeHandller (event) {
      this.$router.push({
        path: '/pages/detail/singer'
      })
    },
    singerChangeHandller (event) {
      this.$router.push({
        path: '/pages/detail/songByList'
      })
    },
    albumChangeHandller (event) {
      this.$router.push({
        path: '/pages/detail/songByAlbum'
      })
    }
  },
  mounted () {
    // GET_SONGS({ CMD: 'GET_SONGS' }).then(res => {
    //   this.list = res['List']
    // })
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/ddd/mixin.scss";

.igb-modules-collect-page {
  .tabs {
    margin-top: calc-attr(42);
  }
  .list-scrollbar {
    margin-top: calc-attr(35);
    /*height: calc(100vh - 350px);
        overflow-x: hidden;
        overflow-y: auto;
        @include scroll-bar(0px);*/
  }

  .no-more {
    margin-top: calc-attr(34);
    width: 100%;
    font-size: calc-attr(14);
    font-weight: 400;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
  }
}
</style>
