import Vue from 'vue'
import Vuex from 'vuex'

import event1 from './event1'
import event2 from './event2'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {        // 将 store 分割成模块（module）
    event1,
    event2
  }
})
