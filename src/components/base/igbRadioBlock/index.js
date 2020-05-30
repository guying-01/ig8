import IgbRadioBlockBaseComponent from "./index.vue";
/** 
 * 单选按钮块组件
 */
export const igbRadioBlockBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbRadioBlockBaseComponent);
    Vue.component('igb-radio-block', Constructor);
}