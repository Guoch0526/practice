import * as type from './mutation_types.js'

export default {
  [type.INCREMENTS] (state, obj) {
    state.count += obj.num
  },
  [type.CHANGETITLES] (state, title) {
    state.title = title
  }
}
