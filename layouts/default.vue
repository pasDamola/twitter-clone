<template>
  <v-app class="twitter-app">
    <mobile-layout v-if="isMobile" class="mobile-layout" />
    <tablet-layout v-else-if="isTablet" class="tablet-layout" />
    <desktop-layout v-else />
  </v-app>
</template>

<script>
import MobileLayout from '@/layouts/mobile-layout';
import TabletLayout from '@/layouts/tablet-layout';
import DesktopLayout from '@/layouts/desktop-layout';
export default {
  components: { MobileLayout, TabletLayout, DesktopLayout },
  data: () => ({
    isMobile: false,
    isTablet: false
    // isDesktop: false
  }),
  beforeMount() {
    /* eslint-disable-next-line */
    if (process.browser) {
      window.addEventListener('resize', this.onResize);
      window.onload = this.onLoad;
    }
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize);
    }
  },
  methods: {
    onLoad(e) {
      this.isMobile = e.currentTarget.innerWidth < 500;
      this.isTablet = e.currentTarget.innerWidth > 500 && e.currentTarget.innerWidth < 1005;
      // this.isDesktop = e.currentTarget.innerWidth > 1005;
    },
    onResize(e) {
      this.isMobile = e.target.innerWidth < 500;
      this.isTablet = e.target.innerWidth > 500 && e.target.innerWidth < 1005;
      // this.isDesktop = e.target.innerWidth > 1005;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
