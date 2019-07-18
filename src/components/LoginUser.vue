<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" minlength="2" id="email" v-model="userLogin.email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" minlength="2" id="password" v-model="userLogin.password" required />
      </div>
      <div class="form-group">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      userLogin: this.getDefaults()
    };
  },

  methods: {
    getDefaults() {
      return {
        email: "",
        password: ""
      };
    },

    ...mapActions({
      login: "login"
    }),

    submitForm() {
      console.log(this.userLogin);
      this.login({
        email: this.userLogin.email,
        password: this.userLogin.password
      }).then(() => {
        this.$router.push("/cars");
      });
    }

    // handleAdd() {
    //   authService.login(this.userLogin.email, this.userLogin.password)
    //     .then( response => {
    //       this.userLogin = this.getDefaults();
    //       this.$router.push('/cars')
    //     }).catch ( error => {
    //       alert(error);
    //     });
    // }
  }
};
</script>

<style>
</style>
