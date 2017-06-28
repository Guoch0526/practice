<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <div>{{ title }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome'
    }
  },
  // computed: mapState(['title']),     // 计算属性的名称与 state 的子节点名称相同时
  // computed: {        // 局部计算属性和对象展开运算符混合使用
  //   title () {
  //   },
  //   ...mapState(['title'])
  // },
  // computed: {
  //   title () {
  //     return this.$store.state.title
  //   }
  // },
  computed: {
    title () {
      return this.$store.state.event1.title[0]
    }
  },
  created () {
    window.app = this
    // mutations 提交状态改变(同步)
    this.$store.commit('INCREMENT', {num: 10})
    // actions 异步改变状态
    this.$store.dispatch('addCountSync', {num: 10}).then((res) => {
      this.$store.dispatch('changeTitleSync', res)
    })
    console.log(this.$store.state.count)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
