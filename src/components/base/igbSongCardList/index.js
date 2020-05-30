import IgbSongCardListBaseComponent from "./index.vue";
/** 
 * 歌曲卡片列表组件
 */
export const igbSongCardListBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbSongCardListBaseComponent);
    Vue.component('igb-song-card-list', Constructor);
}