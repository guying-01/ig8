/** 
 * 本地存储服务
 */
export default {
    /**
     * 通过key获取本地存储
     * @param {*} key 键
     */
    getItem(key) {
        return localStorage.getItem(key)
    },
    /**
     * 设置本地存储
     * @param {*} key 键
     * @param {*} value 值
     */
    setItem(key, value) {
        localStorage.setItem(key, value)
    },
    /**
     * 清楚所有本地存储
     */
    clear() {
        localStorage.clear()
    },
    /**
     * 通过key删除本地存储
     * @param {*} key 键
     */
    removeItem(key) {
        localStorage.removeItem(key)
    }
}