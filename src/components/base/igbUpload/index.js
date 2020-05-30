import IgbUploadBaseComponent from "./index.vue";
/** 
 * 上传图片组件
 */
export const igbUploadBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbUploadBaseComponent);
    Vue.component('igb-upload', Constructor);
}