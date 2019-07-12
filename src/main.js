import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

import AppCars from '@/components/AppCars'
import AddCar from '@/components/AddCar'
import LoginUser from '@/components/LoginUser'

const routes = [
  { path: '/cars', component: AppCars},
  { path: '/cars/add', component: AddCar },
  { path: '/edit/:id', component: AddCar},
  { path: '/login', component: LoginUser}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
