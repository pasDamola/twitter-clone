<template>
  <v-app>
    <mobile-layout v-if="isMobile" class="mobile-layout" />
    <tablet-layout v-else-if="isTablet" class="tablet-layout" />
  </v-app>
</template>

<script>
import MobileLayout from '@/layouts/mobile-layout';
import TabletLayout from '@/layouts/tablet-layout';
export default {
  components: { MobileLayout, TabletLayout },
  data: () => ({
    isMobile: false,
    isTablet: false
  }),
  beforeMount() {
    /* eslint-disable-next-line */
    if (process.browser) {
      window.addEventListener('resize', this.onResize);
      window.onload = this.onLoad;
    }
  },
  methods: {
    onLoad(e) {
      if (e.currentTarget.innerWidth < 500) {
        this.isMobile = true;
      } else if (e.currentTarget.innerWidth > 500 && e.currentTarget.innerWidth < 1005) {
        this.isMobile = false;
        this.isTablet = true;
      }
    },
    onResize(e) {
      this.isMobile = e.target.innerWidth < 500;
      this.isTablet = e.target.innerWidth > 500 && e.target.innerWidth < 1005;
    }
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize);
    }
  }
};
</script>

<style lang="scss" scoped>

  // @media screen and (max-width: 500px) {
  //   .tablet-layout {
  //     display: none;
  //     width: 0;
  //   }
  // }

  // @media screen and (min-width: 500px) {
  //   .mobile-layout {
  //     display: none;
  //   }

  //   .tablet-layout {
  //     display: block;
  //   }
  // }
</style>
