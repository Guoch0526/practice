export default {
  getAges: (state) => {
    return state.age.filter(item => item.age >= 22)
  }
}
