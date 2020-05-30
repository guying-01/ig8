import IgbPageMainBaseComponent from "./index.vue";
/** 
 * 页面主体组件
 */
export const igbPageMainBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbPageMainBaseComponent);
    Vue.component('igb-page-main', Constructor);
}