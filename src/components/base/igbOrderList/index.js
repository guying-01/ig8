import IgbOrderListBaseComponent from "./index.vue";
/** 
 * 已点组件
 */
export const igbOrderListBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbOrderListBaseComponent);
    Vue.component('igb-order-list', Constructor);
}