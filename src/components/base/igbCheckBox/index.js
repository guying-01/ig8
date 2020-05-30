import IgbCheckBoxBaseComponent from "./index.vue";
/** 
 * 复选框组件
 */
export const igbCheckBoxBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbCheckBoxBaseComponent);
    Vue.component('igb-check-box', Constructor);
}