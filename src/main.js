// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Interface from './components/Interface'
import Details from './components/Details'
import VueRouter from 'vue-router'


 Vue.use(VueRouter)

  const router = new VueRouter({
    routes: [
       { path: '/', component: Interface },
       { path: '/:id', name: 'details', component: Details}
    ]
  })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, Interface },
  router
})
