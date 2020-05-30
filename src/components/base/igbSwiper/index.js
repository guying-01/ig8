import IgbSwiperBaseComponent from "./index.vue";
/** 
 * 幻灯片组件
 */
export const igbSwiperBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbSwiperBaseComponent);
    Vue.component('igb-swiper', Constructor);
}