import IgbTabsBaseComponent from "./index.vue";
/** 
 * 选项卡组件
 */
export const igbTabsBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbTabsBaseComponent);
    Vue.component('igb-tabs', Constructor);
}