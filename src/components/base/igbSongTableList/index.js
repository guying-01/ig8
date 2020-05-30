import IgbSongTableListBaseComponent from "./index.vue";
/** 
 * 歌曲表格列表组件
 */
export const igbSongTableListBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbSongTableListBaseComponent);
    Vue.component('igb-song-table-list', Constructor);
}