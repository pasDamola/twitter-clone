<template>
  <div>
    <step-one v-show="step == 0" :step="step" :error="error" @increaseStep="increaseStep" />
    <step-two :step="step" @increaseStep="increaseStep" @decreaseStep="decreaseStep" />
    <step-three
      :step="step"
      :name="userDetails.userFullName"
      :email="userDetails.userEmail"
      @decreaseStep="decreaseStep"
      @increaseStep="increaseStep"
      @goBack="step = 0"
      @signup="signUp"
    />
    <v-layout v-if="showLoader" style="height: 100vh;" justify-center align-center>
      <v-progress-circular
        indeterminate
        color="blue"
        width="2"
        size="45"
      />
    </v-layout>
  </div>
</template>

<script>
import StepOne from '@/components/signup-steps/one';
import StepTwo from '@/components/signup-steps/two';
import StepThree from '@/components/signup-steps/three';
export default {
  components: { StepOne, StepTwo, StepThree },
  layout: 'empty',
  data: () => ({
    dialog: true,
    step: 0,
    error: '',
    showLoader: false,
    userDetails: {
      userFullName: '',
      userEmail: '',
      userName: '',
      password: ''
    }
  }),
  methods: {
    signUp() {
      this.showLoader = true;
      this.error = '';
      this.$axios.post('/create', this.userDetails).then((res) => {
        this.showLoader = false;
        this.$router.push('/login');
      }).catch((err) => {
        const error = err.response.data;
        this.showLoader = false;
        this.step = 0;
        this.error = error.message ? error.message : 'Oops, something went wrong';
      });
    },
    increaseStep(e) {
      if (this.step === 0) {
        this.userDetails.userFullName = e.name;
        this.userDetails.userEmail = e.email;
        this.userDetails.userName = e.username;
        this.userDetails.password = e.password;
      }
      this.step += 1;
    },
    decreaseStep(e) {
      this.step -= 1;
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
