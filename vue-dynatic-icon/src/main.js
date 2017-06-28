// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routerConfig from './router'
import VueRouter from 'vue-router'

import "assets/less/base.less";

Vue.use(VueRouter)

var router = new VueRouter(routerConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
