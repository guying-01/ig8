import IgbKeyBoardBaseComponent from "./index.vue";
/** 
 * 键盘组件
 */
export const igbKeyBoardBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbKeyBoardBaseComponent);
    Vue.component('igb-key-board', Constructor);
}