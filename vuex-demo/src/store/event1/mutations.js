import * as type from './mutation_types.js'

export default {
  [type.INCREMENT] (state, obj) {
    state.count += obj.num
  },
  [type.CHANGETITLE] (state, title) {
    state.title = title
  }
}
