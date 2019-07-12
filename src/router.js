import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppCars from '@/components/AppCars'
import AddCar from '@/components/AddCar'
import LoginUser from '@/components/LoginUser'
import AppRegister from '@/components/AppRegister'
import ShowCar from '@/components/ShowCar'
import { authService } from './services/Auth'

const routes = [
  { path: '/cars', component: AppCars, name: 'cars'},
  { path: '/cars/add', component: AddCar, name: 'add-car' },
  { path: '/edit/:id', component: AddCar, name: 'edit-car'},
  { path: '/login', component: LoginUser, name: 'login'},
  { path: '/register', component: AppRegister, name: 'register'},
  { path: '/cars/:id', component: ShowCar, name: 'show-car'}
]

export const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if ( to.name !== 'login' && to.name !== 'register' && !authService.isAuthenticated()){
    return router.push({ name: 'login'});
  }

  if ( (to.name === 'login' || to.name === 'register') && authService.isAuthenticated()){
    return router.push({ name: from.name });
  }

  next()
})