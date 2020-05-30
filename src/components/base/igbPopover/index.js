import IgbPopoverBaseComponent from "./index.vue";
/** 
 * 气泡弹窗组件
 */
export const igbPopoverBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbPopoverBaseComponent);
    Vue.component('igb-popover', Constructor);
}