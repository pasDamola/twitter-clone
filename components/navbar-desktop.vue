<template>
  <v-navigation-drawer
    fixed
    color="dark"
    permanent
    width="25%"
    app
  >
    <div class="nav-desk">
      <v-list
        dense
        rounded
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          router
          exact
          class="my-3 nav-item"
          color="blue"
        >
          <v-list-item-action>
            <img v-if="!item.material && !item.img" :src="item.icon" alt="">
            <v-avatar v-else-if="item.img && !item.material" size="27">
              <img :src="item.icon" alt="">
            </v-avatar>
            <v-icon v-else color="grey">
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="nav-text" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-btn class="ma-2 tweet" rounded color="blue" width="100%" min-height="50">Tweet</v-btn>
        </v-list-item>
      </v-list>
    </div>
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
        title: '',
        to: '/home'
      },
      {
        icon: 'mdi-home',
        material: true,
        title: 'Home',
        to: '/#1'
      },
      {
        icon: 'mdi-magnify',
        material: true,
        title: 'Explore',
        to: '/#2'
      },
      {
        icon: 'mdi-bell-outline',
        material: true,
        title: 'Notifications',
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
        title: 'Lists',
        to: '/#5'
      },
      {
        icon: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        material: false,
        title: 'Profile',
        to: '/#6',
        img: true
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
  .nav-desk {
    min-width: 250px;
    max-width: 400px;
    position: absolute;
    right: 10%;
  }

  .v-list-item--active::v-deep {
    background-color: black !important;
    color: #1da1f2;
  }

  .nav-text {
    font-size: 17px !important;
    font-weight: bold !important;
    color: #fff !important;
  }

  .nav-header {
    padding: 7px 16px;
  }

  .small-div {
    max-width: 170px;
  }

  .font-weight-thin {
    opacity: 0.7;
  }

  .tweet::v-deep {
    padding: 15px 0;
  }

</style>
