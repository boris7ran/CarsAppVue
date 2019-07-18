import Vue from 'vue'
import Vuex from 'vuex'
import { AuthModule } from './auth_modul.store'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    AuthModule
  }
})

export default store;