<template>
  <v-app dark>
    <navbar />
    <appbar-mobile @toggleDrawer="toggleDrawer" />
    <v-content class="content">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar-tablet';
import AppbarMobile from '@/components/appbar-mobile';
export default {
  components: { Navbar, AppbarMobile },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items2: [
        {
          icon: '/icons/ads.svg',
          title: 'Twitter Ads',
          to: '/#1'
        },
        {
          icon: '/icons/analytics.svg',
          title: 'Analytics',
          to: '/#2'
        }
      ],
      items3: [
        {
          icon: '/icons/settings.svg',
          title: 'Settings and privacy',
          to: '/#3'
        },
        {
          icon: '/icons/help.svg',
          title: 'Help center',
          to: '/#4'
        }
      ],
      items: [
        {
          icon: '/icons/profile.svg',
          title: 'Profile',
          to: '/'
        },
        {
          icon: '/icons/topics.svg',
          title: 'Topics',
          to: '/inspire'
        },
        {
          icon: '/icons/lists.svg',
          title: 'List',
          to: '/#5'
        },
        {
          icon: '/icons/bookmarks.svg',
          title: 'Bookmarks',
          to: '/#'
        },
        {
          icon: '/icons/moments.svg',
          title: 'Moments',
          to: '/#',
          divider: true
        }
      ],
      items4: [
        {
          icon: '/icons/data.svg',
          title: 'Data saver'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    };
  },
  methods: {
    closeDrawer(e) {
      this.drawer = e;
    },
    toggleDrawer(e) {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style lang="scss" scoped>
  .content::v-deep {
    background-color: #000;
    .container {
      padding: 0;
    }
  }
</style>
