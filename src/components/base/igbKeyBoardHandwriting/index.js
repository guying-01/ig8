import IgbKeyBoardHandwritingBaseComponent from "./index.vue";
/** 
 * 手写键盘组件
 */
export const igbKeyBoardHandwritingBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbKeyBoardHandwritingBaseComponent);
    Vue.component('igb-key-board-handwriting', Constructor);
}