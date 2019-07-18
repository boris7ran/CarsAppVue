import {
  authService
} from './../services/Auth';

const user = JSON.parse(localStorage.getItem('user')) || null;

export const AuthModule = {
  state: {
    user
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },

  actions: {
    login(context, {
      email,
      password
    }) {
      return authService.login(email, password)
        .then((user) => {
          console.log(user);
          context.commit('setUser', user);
        })
        .catch((e) => {
          alert(e);
        })
    }
  },

  getters: {
    getUser(state) {
      return state.user;
    }
  }

}