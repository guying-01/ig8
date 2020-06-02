<!--
 * @Author: gy
 * @Date: 2020-05-28 10:35:22
 * @LastEditors: gy
 * @LastEditTime: 2020-06-01 14:07:51
-->
<template>
  <div class="igb-modules-recommend-page">
    <igb-swiper style="margin-top:41.5px;"></igb-swiper>

    <igb-song-card-list style="margin-top:33.5px;" showType :dataSource="list"></igb-song-card-list>

    <igb-line style="margin-top:18.5px;"></igb-line>

    <!-- <igb-song-card-list
      style="margin-top:19.5px;"
      showType
      :type="1"
      :dataSource="list1"
    ></igb-song-card-list>-->
  </div>
</template>

<script>
import { GET_TAGS, GET_SONGS } from "@/api/api";
export default {
  name: "IgbModulesRecommendPage",
  data() {
    return {
      list: [
        {
          value: "01",
          label: "桥边姑娘",
          name: "垂耳兔",
          lan: "国语",
          tag: 1,
          seal: true,
          collect: true
        }
      ]
    };
  },
  mounted() {
    GET_SONGS({ CMD: "GET_SONGS" }).then(res => {
      this.list = res["List"];
    });
  }
};
</script>
