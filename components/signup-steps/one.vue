<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500" light style="background: #fff">
      <v-layout column class="signup" justify-center align-center>
        <v-btn
          color="blue"
          rounded
          absolute
          depressed
          top
          right
          dark
          :disabled="!(isNameValid && isEmailValid)"
          class="next-btn"
          @click="$emit('increaseStep', {name, email, username, password}); dialog = false;"
        >
          Next
        </v-btn>
        <img src="/icons/twitter.svg" alt="Twitter icon">
        <h3 class="text-left headline font-weight-bold text--black">
          Create your account
        </h3>
        <v-alert v-model="showError" type="error" dismissible>
          {{ error }}
        </v-alert>
        <v-form>
          <v-text-field
            v-model="name"
            light
            label="Name"
            placeholder=" "
            filled
            color="#1da1f2"
            :rules="[rules.required, rules.counter]"
            counter
            maxlength="50"
            background-color="rgb(245, 248, 250)"
            class="mx-3 my-5"
          />
          <v-text-field
            v-model="username"
            light
            label="Username"
            placeholder=" "
            filled
            color="#1da1f2"
            :rules="[rules.required, rules.counter]"
            counter
            maxlength="50"
            background-color="rgb(245, 248, 250)"
            class="mx-3 my-5"
          />
          <div class="mx-3">
            <v-text-field
              v-model="email"
              hint="Email"
              type="email"
              label="Email"
              :rules="[rules.required]"
              placeholder=" "
              light
              filled
              color="#1da1f2"
              background-color="rgb(245, 248, 250)"
            />
          </div>
          <v-text-field
            v-model="password"
            light
            label="Password"
            :type="isPassword ? 'password' : 'text'"
            placeholder=" "
            filled
            color="#1da1f2"
            :rules="[rules.required]"
            counter
            maxlength="50"
            hide-details
            :append-icon="isPassword ? 'mdi-eye' : 'mdi-eye-off'"
            background-color="rgb(245, 248, 250)"
            class="mx-3 my-5"
            @click:append="isPassword = !isPassword"
          />
        </v-form>
        <v-layout class="signup-actions my-4" justify-space-between>
          <p>Already have an account?</p>
          <a href="/login">Sign in</a>
        </v-layout>
      </v-layout>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    step: {
      type: Number,
      default: 0
    },
    error: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      /* eslint-disable */
      isPassword: true,
      showError: false,
      dialog: this.step === 0,
      name: '',
      email: '',
      username: '',
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 50 || 'Max 50 characters',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        }
      }
    }
  },
  watch: {
    step(val) {
      if (val === 0) {
        this.dialog = true;
      }
    },
    error(val) {
      if(val.length > 0) {
        this.showError = true;
      }
    }
  },
  computed: {
    isEmailValid() {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(this.email) && this.email;
    },
    isNameValid() {
      return this.name && this.name.length < 51;
    }
  }
};
</script>

<style lang="scss" scoped>
  .next-btn.v-btn.v-btn--absolute.v-btn--depressed.v-btn--disabled.v-btn--right.v-btn--rounded.v-btn--top.theme--dark.v-size--default {
    background-color: rgba(0, 0, 0, 0.3) !important;
  }

  .signup {
    padding: 15px;
    background-color: white;
    position: relative;
    img {
      width: 30px;
      position: absolute;
      top: 15px;
    }
    h3 {
      margin: 80px 0 30px;
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
      p {
        color: #000 !important;
      }
    }
  }
</style>
