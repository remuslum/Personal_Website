import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router' ; 
import Routescomp from './routes.js'


Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes : Routescomp ,
  mode : 'history'
})



new Vue({
  vuetify,
  render: h => h(App) , 
  router 
}).$mount('#app')
