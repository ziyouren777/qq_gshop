/*
入口js
 */
import Vue from 'vue'
import App from './App'
import router from './router'

import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
new Vue({
  el:'#app',
  render: h=>h(App),
  router
})
