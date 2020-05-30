import IgbTagBaseComponent from "./index.vue";
/** 
 * 标签组件
 */
export const igbTagBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbTagBaseComponent);
    Vue.component('igb-tag', Constructor);
}