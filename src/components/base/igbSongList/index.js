import IgbSongListBaseComponent from "./index.vue";
/** 
 * 歌曲列表组件
 */
export const igbSongListBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbSongListBaseComponent);
    Vue.component('igb-song-list', Constructor);
}