import IgbAudioKtvControlBaseComponent from "./index.vue";
/** 
 * KTV模式音频播放组件
 */
export const igbAudioKtvControlBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbAudioKtvControlBaseComponent);
    Vue.component('igb-audio-ktv-ctrl', Constructor);
}