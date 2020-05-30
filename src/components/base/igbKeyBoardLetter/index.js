import IgbKeyBoardLetterBaseComponent from "./index.vue";
/** 
 * 拼音键盘组件
 */
export const igbKeyBoardLetterBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbKeyBoardLetterBaseComponent);
    Vue.component('igb-key-board-letter', Constructor);
}