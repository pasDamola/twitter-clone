<template>
  <div>
    <step-one v-show="step == 0" :step="step" @increaseStep="increaseStep" />
    <step-two :step="step" @increaseStep="increaseStep" @decreaseStep="decreaseStep" />
    <step-three
      :step="step"
      :name="userDetails.name"
      :email="userDetails.email"
      @decreaseStep="decreaseStep"
      @increaseStep="increaseStep"
      @goBack="step = 0"
    />
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
    userDetails: {
      name: '',
      email: ''
    }
  }),
  methods: {
    increaseStep(e) {
      if (this.step === 0) {
        this.userDetails.name = e.name;
        this.userDetails.email = e.email;
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
