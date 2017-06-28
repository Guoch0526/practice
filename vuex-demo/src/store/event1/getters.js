export default {
  getAge: (state) => {
    return state.age.filter(item => item.age > 22)
  }
}
