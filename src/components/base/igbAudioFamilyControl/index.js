import IgbAudioFamilyControlBaseComponent from "./index.vue";
/** 
 * 家庭模式音频播放组件
 */
export const igbAudioFamilyControlBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbAudioFamilyControlBaseComponent);
    Vue.component('igb-audio-family-ctrl', Constructor);
}