<template>
  <div>
    <step-one @increaseStep="increaseStep" :step="step" />
  </div>
</template>

<script>
import StepOne from '@/components/signup-steps/one';
export default {
  components: { StepOne },
  layout: 'empty',
  data: () => ({
    dialog: true,
    step: 0
  }),
  methods: {
    increaseStep() {
      console.log('object');
      this.step += 1;
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
