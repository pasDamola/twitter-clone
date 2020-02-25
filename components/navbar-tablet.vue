<template>
  <v-navigation-drawer
    fixed
    color="dark"
    :mini-variant="true"
    permanent
    app
  >
    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <img v-if="!item.material" :src="item.icon" alt="">
          <v-icon v-else color="grey">
            {{ item.icon }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    switch1: false,
    items: [
      {
        icon: 'mdi-twitter',
        material: true,
        title: 'Home',
        to: '/home'
      },
      {
        icon: 'mdi-home',
        material: true,
        title: 'Go up',
        to: '/#1'
      },
      {
        icon: 'mdi-magnify',
        material: true,
        title: 'Search',
        to: '/#2'
      },
      {
        icon: 'mdi-bell-outline',
        material: true,
        title: 'Notification',
        to: '/#3'
      },
      {
        icon: 'mdi-email-outline',
        material: true,
        title: 'Messages',
        to: '/#4'
      },
      {
        icon: '/icons/bookmarks.svg',
        material: false,
        title: 'Bookmarks',
        to: '/#'
      },
      {
        icon: '/icons/lists.svg',
        material: false,
        title: 'List',
        to: '/#5'
      },
      {
        icon: '/icons/profile.svg',
        material: false,
        title: 'Profile',
        to: '/#5'
      }
    ]
  }),
  watch: {
    drawerProps(val) {
      this.drawer = val;
    },
    drawer(val) {
      this.$emit('drawer-close', val);
    }
  }
};
</script>

<style lang="scss" scoped>
  .nav-header {
    padding: 7px 16px;
  }

  .small-div {
    max-width: 170px;
  }

  .font-weight-thin {
    opacity: 0.7;
  }

</style>
