import IgbLineBaseComponent from "./index.vue";
/** 
 * 横线组件
 */
export const igbLineBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbLineBaseComponent);
    Vue.component('igb-line', Constructor);
}