import IgbKeyBoardDigitalBaseComponent from "./index.vue";
/** 
 * 数字键盘组件
 */
export const igbKeyBoardDigitalBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbKeyBoardDigitalBaseComponent);
    Vue.component('igb-key-board-digital', Constructor);
}