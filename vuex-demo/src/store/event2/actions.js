export default {
  addCountSync: ({commit}, obj) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('INCREMENTS', obj)
        return resolve('修改后的首页')
      }, 3000)
    })
  },
  changeTitleSync: ({commit}, title) => {
    setTimeout(() => {
      commit('CHANGETITLES', title)
    }, 3000)
  }
}
