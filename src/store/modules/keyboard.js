/*
 * @Author       : gy
 * @Date         : 2020-06-25 00:08:00
 * @LastEditors  : gy
 * @LastEditTime : 2020-06-26 13:27:26
 * @FilePath     : /ig8/src/store/modules/keyboard.js
 * @Description  : 页面描述
 */

const keyboard = {
  state: {
    disableList: {
      AssociatedWords: [],
      EnbledLetters: []
    },
    mode: 0, // 中英文模式 0英文 1中文
    input: ''// 用户输入
  },
  mutations: {
    set_disable_list (state, data) {
      state.disableList['EnbledLetters'] = data['EnbledLetters'] ? data['EnbledLetters'] : []
      state.disableList['AssociatedWords'] = data['AssociatedWords'] ? data['AssociatedWords'] : []
    },
    set_input (state, val) {
      state.input = val
    },
    set_input_mode (state) {
      console.log(state.mode, +!state.mode)
      state.mode = +!state.mode
      if (state.mode == 0) {
        window.ApplicationUI.ShowHint(0, '已切换为英文模式')
      } else {
        window.ApplicationUI.ShowHint(0, '已切换为中文模式')
      }
    }
  },
  actions: {
    setDisableList ({ commit, state }, data) {
      commit('set_disable_list', data)
    },
    setInput ({commit}, val) {
      commit('set_input', val)
    },
    setInputMode ({commit}) {
      commit('set_input_mode')
    }
  }
}

export default keyboard
