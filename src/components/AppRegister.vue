<template>
  <div>
    <form @submit.prevent="handleAdd">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="nubmer" id="username" v-model="newUser.username" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="nubmer" id="email" v-model="newUser.email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="nubmer" id="password" v-model="newUser.password" />
      </div>
      <div class="form-group">
        <label for="password_confirmation">Confirm Password</label>
        <input type="nubmer" id="password_confirmation" v-model="newUser.password_confirmation" />
      </div>
      <div class="form-group">
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import { registerService } from '@/services/RegisterService'

export default {
  data() {
    return {
      newUser: this.getDefaults()
    };
  },

  methods: {
    getDefaults() {
      return {
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
      };
    },

    handleAdd() {
      registerService.registerUser(this.newUser);
      this.newUser = this.getDefaults();
      this.$router.push('/login');
    }
  }
};
</script>

<style>
</style>
