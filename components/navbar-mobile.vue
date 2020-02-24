<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    color="dark"
    app
  >
    <template v-slot:prepend>
      <v-layout class="nav-header">
        <h3>Account Info</h3>
        <v-spacer />
        <v-icon color="blue">
          mdi-close
        </v-icon>
      </v-layout>
    </template>
    <v-divider />
    <v-list>
      <v-list-item>
        <v-layout>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>
          <v-spacer />
          <v-icon color="blue" size="32">
            mdi-plus-circle-outline
          </v-icon>
        </v-layout>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Jane Smith</v-list-item-title>
          <v-list-item-subtitle>@ibn_abubakre</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-layout class="small-div">
          <span class="caption">
            <b>317</b>
            <span class="font-weight-thin"> Following</span>
          </span>
          <v-spacer />
          <span class="caption">
            <b>291</b>
            <span class="font-weight-thin"> Followers</span>
          </span>
        </v-layout>
      </v-list-item>
    </v-list>

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <img :src="item.icon" alt="">
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item
        v-for="item in items2"
        :key="item.icon"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <img :src="item.icon" alt="">
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item
        v-for="item in items3"
        :key="item.to"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <img :src="item.icon" alt="">
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item
        v-for="(item, i) in items4"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <img :src="item.icon" alt="">
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
        <v-list-item-action>
          <v-switch
            v-model="switch1"
          ></v-switch>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    items: {
      default: () => {},
      type: Array
    },
    items2: {
      default: () => {},
      type: Array
    },
    items3: {
      default: () => {},
      type: Array
    },
    items4: {
      default: () => {},
      type: Array
    },
    drawerProps: {
      default: false,
      type: Boolean
    }
  },
  data: () => ({
    drawer: false,
    switch1: false
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
