export default {
  addCountSync: ({commit}, obj) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('INCREMENT', obj)
        return resolve('修改后的首页')
      }, 3000)
    })
  },
  changeTitleSync: ({commit}, title) => {
    setTimeout(() => {
      commit('CHANGETITLE', title)
    }, 3000)
  }
}
