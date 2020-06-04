<template>
  <div class="igb-modules-recommend-page">
    <igb-swiper style="margin-top:41.5px;"></igb-swiper>

    <igb-song-card-list style="margin-top:33.5px;" showType :dataSource="list"></igb-song-card-list>

    <igb-line style="margin-top:18.5px;"></igb-line>

    <igb-song-card-list style="margin-top:19.5px;" showType :type="1" :dataSource="list1"></igb-song-card-list>
  </div>
</template>

<script>
export default {
  name: 'IgbModulesRecommendPage',
  data () {
    return {
      list: [
        {
          value: '01',
          label: '桥边姑娘',
          name: '垂耳兔',
          lan: '国语',
          tag: 1,
          seal: true,
          collect: true
        },
        {
          value: '02',
          label: '世界这么大还是遇见你',
          name: '程响',
          lan: '国语',
          tag: 0,
          current: true
        },
        {
          value: '03',
          label: '你的答案',
          name: '酷',
          lan: '国语',
          tag: 0,
          play: true
        },
        {
          value: '04',
          label: '桥边姑娘',
          name: '垂耳兔',
          lan: '国语',
          tag: 0
        },
        {
          value: '05',
          label: '千面',
          name: '逍遥乐队',
          lan: '国语',
          tag: 0
        },
        {
          value: '06',
          label: '世界这么大还是遇见你',
          name: '程响',
          lan: '国语',
          tag: 0
        },
        {
          value: '07',
          label: '世界这么大还是遇见你',
          name: '程响',
          lan: '国语',
          tag: 0
        },
        {
          value: '08',
          label: '你的答案',
          name: '酷',
          lan: '国语',
          tag: 0
        },
        {
          value: '09',
          label: '桥边姑娘',
          name: '垂耳兔',
          lan: '国语',
          tag: 0
        }
      ],
      list1: [
        {
          value: '01',
          label: '千面',
          name: '逍遥乐队',
          lan: '国语',
          tag: 1
        },
        {
          value: '02',
          label: '忘情水',
          name: '逍遥乐队',
          lan: '国语',
          tag: 1
        },
        {
          value: '03',
          label: '世界这么大还会遇见你',
          name: '程响',
          lan: '国语',
          tag: 0,
          play: true
        },
        {
          value: '04',
          label: '你的答案',
          name: '酷',
          lan: '国语',
          tag: 0
        }
      ]
    }
  },
  mounted () {}
}
</script>
