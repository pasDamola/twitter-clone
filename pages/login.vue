<template>
  <v-layout column class="login" justify-center align-center>
    <img src="/icons/twitter.svg" alt="Twitter icon">
    <h3 class="headline font-weight-bold text--black">
      Log in to Twitter
    </h3>
    <v-alert v-model="showError" type="error" dismissible>
      {{ error }}
    </v-alert>
    <v-form>
      <v-text-field
        v-model="loginDetails.userName"
        light
        label="Phone, email or username"
        placeholder=" "
        filled
        color="#1da1f2"
        background-color="rgb(245, 248, 250)"
        hide-details
        class="mx-3 my-5"
      />
      <div class="mx-3">
        <v-text-field
          v-model="loginDetails.password"
          hint="Password"
          :type="isPassword ? 'password' : 'text'"
          :append-icon="isPassword ? 'mdi-eye' : 'mdi-eye-off'"
          label="Password"
          placeholder=" "
          light
          filled
          color="#1da1f2"
          background-color="rgb(245, 248, 250)"
          hide-details
          @click:append="isPassword = !isPassword"
        />
      </div>
      <v-btn
        depressed
        color="blue"
        min-height="50"
        rounded
        class="my-4 mx-3"
        @click="logIn()"
      >
        Log in
      </v-btn>
    </v-form>
    <v-layout class="login-actions my-4" justify-space-between>
      <a href="">Forgot password?</a>
      <a href="/signup">Sign up for Twitter</a>
    </v-layout>
  </v-layout>
</template>

<script>
// import nuxtStorage from 'nuxt-storage';
export default {
  layout: 'empty',
  data: () => ({
    error: '',
    isPassword: true,
    showLoader: false,
    showError: false,
    loginDetails: {
      userEmail: '',
      userName: '',
      password: ''
    }
  }),
  methods: {
    logIn() {
      this.showLoader = true;
      this.$axios.post('/login', this.loginDetails).then((res) => {
        this.$cookies.set('token', res.data.authentication, {
          path: '/',
          expires: new Date(new Date().setFullYear(new Date().getFullYear() + 2))
        });
        this.$axios.defaults.headers.common.Authorization = `Bearer ${res.data.authentication}`;
        this.showLoader = false;
        this.$store.dispatch('authenticate');
        this.$router.push('/home');
      }).catch((err) => {
        const error = err.response.data;
        this.showLoader = false;
        this.showError = true;
        this.error = error.message ? error.message : 'Oops, something went wrong';
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .login {
    width: 500px;
    margin: 50px auto;
    max-width: calc(100% - 30px);
    padding: 0 15px;
    img {
      width: 40px;
      margin: 30px 0;
    }
    h3 {
      color: black !important;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    &-actions {
      font-size: 0.85rem;
      width: 230px;
      max-width: 100%;
      margin: 0 auto;
    }
  }
</style>
