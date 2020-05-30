import IgbSingerListBaseComponent from "./index.vue";
/** 
 * 歌手列表组件
 */
export const igbSingerListBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbSingerListBaseComponent);
    Vue.component('igb-singer-list', Constructor);
}