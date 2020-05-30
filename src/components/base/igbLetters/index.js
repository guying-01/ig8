import IgbLettersBaseComponent from "./index.vue";
/** 
 * 字母组件
 */
export const igbLettersBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbLettersBaseComponent);
    Vue.component('igb-letters', Constructor);
}