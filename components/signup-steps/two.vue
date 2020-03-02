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
        <v-btn
          color="blue"
          rounded
          absolute
          depressed
          top
          right
          dark
          class="next-btn"
          @click="$emit('increaseStep'); dialog = false;"
        >
          Next
        </v-btn>
        <img src="/icons/twitter.svg" alt="Twitter icon">
        <h3 class="text-left headline font-weight-bold text--black">
          Customize your experience
        </h3>
        <v-layout class="signup-actions my-4" justify-space-between align-end>
          <div>
            <h3 class="text-left headline font-weight-bold text--black">
              Twitter for Web data
            </h3>
            <p>Let Twitter keep track of where else you see Twitter content on the web, to help make Twitter better.</p>
          </div>
          <v-checkbox v-model="check" />
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
    }
  },
  data() {
    return {
      /* eslint-disable */
      dialog: this.step === 1,
      name: '',
      check: true
    }
  },
  watch: {
    step(val) {
      if (val === 1) {
        this.dialog = true;
      }
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
    > h3 {
      margin: 80px 0 0px;
      color: black !important;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    &-actions {
      font-size: 0.85rem;
      width: 100%;
      max-width: 100%;
      margin: 0 auto;
      p, h3 {
        margin: 20px 0;
        color: #000 !important;
      }
    }
  }
</style>
