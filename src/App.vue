<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <router-link to="/cars">Cars</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cars/add">Add</router-link>
            </li>
            <li class="nav-item" v-if="!isLogged">
              <router-link to="/register">Register</router-link>
            </li>
            <div v-if="!isLogged">
              <li class="nav-item">
                <router-link to="/login">Login</router-link>
              </li>
            </div>
            <div v-if="isLogged">
              <li>
                <button @click="logout">Logout</button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
import { authService } from "./services/Auth";

export default {
  name: "app",

  created() {
    this.isLogged = authService.isAuthenticated()
  },

  data() {
    return {
      isLogged: authService.isAuthenticated()
    }
  },

  methods: {
    logout() {
      authService.logout();
      this.$router.push("/login");
    }
  }
};
</script>
