import IgbModifyAvatarBaseComponent from "./index.vue";
/** 
 * 修改頭像组件
 */
export const igbModifyAvatarBaseInstall = (Vue) => {
    const Constructor = Vue.extend(IgbModifyAvatarBaseComponent);
    Vue.component('igb-modify-avatar', Constructor);
}