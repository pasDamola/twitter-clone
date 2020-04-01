<template>
  <v-app-bar
    fixed
    flat
    dark
    color="dark"
    elevation="0"
    extension-height="2"
    app
  >
    <v-avatar v-show="$nuxt.$route.path == '/home'" size="35" class="hide-desktop" @click.stop="$emit('toggleDrawer')">
      <img src="https://randomuser.me/api/portraits/women/81.jpg" alt="User image">
    </v-avatar>
    <v-toolbar-title v-if="$nuxt.$route.path === '/home'" class="mx-4">
      <h4>Home</h4>
    </v-toolbar-title>
    <v-toolbar-title v-else class="mx-4">
      <v-layout align-center>
        <v-btn icon to="/home">
          <v-icon color="blue">
            mdi-arrow-left
          </v-icon>
        </v-btn>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title><b>{{ $store.state.user.username }}</b></v-list-item-title>
            <v-list-item-subtitle><b>604 Tweets</b></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-layout>
    </v-toolbar-title>
    <v-spacer />
    <img src="/icons/top-tweet.svg" alt="Top trends">
    <template slot="extension" class="extension">
      <hr color="grey">
    </template>
  </v-app-bar>
</template>

<style lang="scss" scoped>
  hr {
    width: 100vw;
    border: none;
    height: 1px;
  }

  .v-sheet::v-deep {
    .v-toolbar__extension {
      padding: 0;
    }
  }

   @media screen and (min-width: 500px){
      .hide-desktop {
        display: none;
      }
    }
</style>
