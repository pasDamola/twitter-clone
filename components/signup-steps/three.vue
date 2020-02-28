<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500" light style="background: #fff">
      <v-layout column class="signup" justify-center align-center>
        <v-btn
          color="blue"
          absolute
          top
          left
          icon
          @click="$emit('decreaseStep'); dialog = false;"
        >
          <v-icon color="blue">
            mdi-arrow-left
          </v-icon>
        </v-btn>
        <h3 class="text-left headline font-weight-bold text--black">
          Create your account
        </h3>
        <v-form>
          <v-text-field
            :value="name"
            light
            label="Name"
            placeholder=" "
            filled
            color="#1da1f2"
            counter
            maxlength="50"
            background-color="rgb(245, 248, 250)"
            class="mx-3 my-5"
            hide-details
            @click="$emit('goBack'); dialog = false"
          />
          <div class="mx-3">
            <v-text-field
              :value="email"
              hint="Email"
              type="email"
              label="Email"
              placeholder=" "
              light
              filled
              color="#1da1f2"
              background-color="rgb(245, 248, 250)"
              hide-details
              @click="$emit('goBack'); dialog = false"
            />
          </div>
        </v-form>
        <v-layout class="signup-actions my-4" justify-space-between>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi laboriosam neque aliquid maiores, aliquam ex temporibus, fugiat harum repudiandae facere suscipit minima, exercitationem ad sed. Consequatur iusto hic neque architecto?</p>
        </v-layout>
        <v-btn
          min-height="50"
          dark
          block
          rounded
          depressed
          color="blue"
          class="my-10"
          @click="$emit('signup'); dialog = false"
        >
          Sign up
        </v-btn>
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
    name: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      /* eslint-disable */
      dialog: this.step === 2
    }
  },
  watch: {
    step(val) {
      if (val === 2) {
        this.dialog = true;
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
      width: 95%;
      max-width: 100%;
      margin: 0 auto;
      p {
        color: #000 !important;
      }
    }
  }
</style>
