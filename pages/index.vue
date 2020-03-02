<template>
  <div>
    <div class="login">
      <div class="actions px-3 my-10">
        <v-layout justify-space-between>
          <v-btn width="45%" depressed min-height="40" rounded color="rgb(29, 161, 242)">
            Sign up
          </v-btn>
          <v-btn width="45%" min-height="40" rounded outlined color="blue">
            Log in
          </v-btn>
        </v-layout>
      </div>
      <div class="login-img">
        <img src="/icons/twitter.svg" alt="Twitter icon">
        <div>
          <v-layout class="v-layout" align-center>
            <img src="/icons/search.svg" alt="">
            <p>Follow your interests.</p>
          </v-layout>
          <v-layout class="v-layout" align-center>
            <img src="/icons/people.svg" alt="">
            <p>Hear what people are talking about.</p>
          </v-layout>
          <v-layout class="v-layout" align-center>
            <img src="/icons/comment.svg" alt="">
            <p>Join the conversation.</p>
          </v-layout>
        </div>
      </div>
      <div class="login-form">
        <v-alert v-model="showError" type="error" dismissible>
          {{ error }}
        </v-alert>
        <v-form>
          <v-layout align-start justify-space-between class="mx-auto">
            <v-text-field
              v-model="loginDetails.userName"
              light
              label="Phone, username"
              placeholder=" "
              filled
              color="#1da1f2"
              background-color="rgb(245, 248, 250)"
              hide-details
              class="mx-3"
            />
            <div class="mx-3">
              <v-text-field
                v-model="loginDetails.password"
                hint="Password"
                type="password"
                label="Password"
                placeholder=" "
                light
                filled
                color="#1da1f2"
                background-color="rgb(245, 248, 250)"
                hide-details
              />
              <a href="">Forgot password?</a>
            </div>
            <v-btn outlined color="blue" rounded class="my-3" @click="logIn">
              <v-progress-circular
                v-if="showLoader"
                indeterminate
                color="blue"
                width="2"
                size="25"
              />
              {{ showLoader ? '' : 'Log in' }}
            </v-btn>
          </v-layout>
        </v-form>
        <div class="hero px-3 py-4">
          <img src="/icons/twitter.svg" alt="Twitter icons">
          <h4 class="display-1 font-weight-bold my-5 mb-10">
            See what’s happening in the world right now
          </h4>
          <h5 class="subtitle-1 font-weight-bold my-2">
            Join Twitter today
          </h5>
          <v-btn
            rounded
            depressed
            color="blue"
            block
            class="my-3"
            min-height="45"
            to="/signup"
          >
            Sign up
          </v-btn>
          <v-btn
            rounded
            depressed
            color="blue"
            outlined
            block
            class="my-3"
            min-height="45"
            to="/login"
          >
            Log in
          </v-btn>
        </div>
      </div>
    </div>
    <v-layout justify-center wrap class="my-4">
      <a href="" class="mx-2 links">About</a>
      <a href="" class="mx-2 links">Help center</a>
      <a href="" class="mx-2 links">Terms</a>
      <a href="" class="mx-2 links">Privacy policy</a>
      <a href="" class="mx-2 links">Cookies</a>
      <a href="" class="mx-2 links">Ads info</a>
      <a href="" class="mx-2 links">Blog</a>
      <a href="" class="mx-2 links">Status</a>
      <a href="" class="mx-2 links">Jobs</a>
      <a href="" class="mx-2 links">Brand</a>
      <a href="" class="mx-2 links">Advertise</a>
      <a href="" class="mx-2 links">Marketing</a>
      <a href="" class="mx-2 links">Businesses</a>
      <a href="" class="mx-2 links">Developers</a>
      <a href="" class="mx-2 links">Directory</a>
      <a href="" class="mx-2 links">Settings</a>
      <a href="" class="mx-2 links">&copy; {{ new Date().getFullYear() }} Twitter, Inc.</a>
    </v-layout>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data: () => ({
    showLoader: false,
    showError: false,
    error: '',
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
          path: '/'
        });
        this.$axios.defaults.headers.common.Authorization = `Bearer ${res.data.authentication}`;
        this.showLoader = false;
        // this.$store.dispatch('authenticate');
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
    display: flex;
    flex-direction: column-reverse;
    @media screen and (min-width: 800px){
      flex-direction: row;
    }

    .login-img {
      background-color: rgb(113, 201, 248);
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      @media screen and (min-width: 800px){
        height: 93vh;
        flex: 0 0 50%;
      }
      > img {
        position: absolute;
        height: 60vh;
        top: -10vh;
        right: -10vh;
        @media screen and (min-width: 800px){
          height: 160vh;
          top: -30vh;
          right: -50vh;
        }
      }

      > div {
        z-index: 2;
        max-width: 380px;
        padding: 0 20px;
        div {
          margin: 30px 0;
        }
        p {
          margin: 0 20px;
          font-size: 1.2rem;
          font-weight: bold;
        }
      }

    }

    .login-form::v-deep {
      color: #1da1f2 !important;
    }

    .login-form {
      flex: 0 0 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      form {
        position: absolute;
        top: 20px;
      }
      .hero {
        width: 400px;
        max-width: 100%;
        color: black;
        img {
          width: 40px;
        }
      }
    }

    .actions {
      display: flex;
      @media screen and (min-width: 800px){
        display: none;
      }
    }
  }

  .links {
    font-size: 0.78rem;
    color: rgba(0, 0, 0, 0.7);
    text-decoration: none;
  }

  .mx-auto {
    width: 500px;
    max-width: 100%;
    display: none;
    @media screen and (min-width: 1000px){
      display: flex;
    }
  }
</style>
