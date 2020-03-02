<template class="app">
  <v-container>
    <v-list width="100%" color="dark" :style="'padding : 0'">
      <v-layout class="cover-photo">
        <v-img
          height="200px"
          width="100%"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          class="cover-image"
        />
        <div class="profile-picture">
          <img :src="'https://cdn.vuetifyjs.com/images/john.jpg'" alt="">
        </div>
        <v-btn
          class="ma-2 edit-profile-btn"
          rounded
          outlined
          absolute
          bottom
          right
          color="blue"
          @click="dialog = true"
        >
          Edit Profile
        </v-btn>
      </v-layout>
      <v-list color="black" class="mx-3">
        <v-list-item two-line class="my-4">
          <v-list-item-content>
            <v-list-item-title><b>{{ userProfile.userfullname }}</b></v-list-item-title>
            <v-list-item-subtitle>{{ userProfile.username }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="userProfile.bio">
          <v-list-item-content>
            <v-list-item-title>{{ userProfile.userbio }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="font-weight-light caption">
          <v-layout justify-start>
            <v-list-item-content>
              <v-list-item-title class="joined">
                <v-icon color="rgba(255, 255, 255, 0.5)">
                  mdi-calendar
                </v-icon> Joined {{ userProfile.joined }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="joined">
                <v-icon color="rgba(255, 255, 255, 0.5)">
                  mdi-balloon
                </v-icon> Joined {{ userProfile.joined }}
              </v-list-item-title>
            </v-list-item-content>
          </v-layout>
        </v-list-item>
        <v-list-item>
          <v-layout>
            <p><b>{{ userProfile.followings }}</b> <span class="body-2 font-weight-light">Following</span></p>
            <p class="mx-3">
              <b>{{ userProfile.followers }}</b> <span class="body-2 font-weight-light">Followers</span>
            </p>
          </v-layout>
        </v-list-item>
      </v-list>
      <v-tabs v-model="tab" background-color="black" grow>
        <v-tab v-for="item in items" :key="item" style="font-size:10px;">
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-show="tab===0" color="black">
          <tweet
            v-for="tweet in tweets"
            :key="tweet.dp"
            :item="tweet"
          />
        </v-tab-item>
        <v-tab-item v-show="tab===1" color="black">
          <tweet
            v-for="tweet in tweets"
            :key="tweet.name"
            :item="tweet"
          />
        </v-tab-item>
        <v-tab-item v-show="tab===2" color="black">
          <tweet
            v-for="tweet in tweets"
            :key="tweet.handle"
            :item="tweet"
          />
        </v-tab-item>
        <v-tab-item v-show="tab===3" color="black">
          <tweet
            v-for="tweet in tweets"
            :key="tweet.tweet"
            :item="tweet"
          />
        </v-tab-item>
      </v-tabs-items>
      <v-divider />
    </v-list>
    <v-dialog v-model="dialog" width="500" dark>
      <v-layout class="edit-profile">
        <v-toolbar color="black">
          <v-btn icon>
            <v-icon color="blue">
              mdi-close
            </v-icon>
          </v-btn>
          <v-toolbar-title class="font-weight-bold">
            Edit Profile
          </v-toolbar-title>
          <v-spacer />
          <v-btn rounded depressed color="blue" class="hidden-xs-only" dark>
            Save
          </v-btn>
        </v-toolbar>
      </v-layout>
    </v-dialog>
  </v-container>
</template>

<script>
import Tweet from '@/components/tweet';
export default {
  components: { Tweet },
  layout: 'default',
  data: () => ({
    dialog: false,
    tweets: [
      {
        name: 'S.S. Malgwi',
        handle: '@santos__vito',
        tweet: '2 years gone wow I still remember the events on that Sunday afternoon keep resting champ',
        dp: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        message: false,
        retweet: false,
        heart: false,
        share: false,
        messageClicked: false,
        retweetClicked: false,
        heartClicked: false,
        shareClicked: false
      }
    ],
    userProfile: {},
    tab: null,
    items: [
      'Tweets', 'Tweets & Replies', 'Media', 'Likes'
    ],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  }),
  mounted() {
    this.$axios.defaults.headers.common.Authorization = `Bearer ${this.$cookies.get('token')}`;
    this.$axios.get('/viewProfile').then((res) => {
      const month = new Date(res.data.created_at).getMonth();
      const year = new Date(res.data.created_at).getFullYear();
      const joined = `${this.monthNames[month]}, ${year}`;
      this.userProfile = res.data;
      this.userProfile.joined = joined;
    }).catch((err) => {
      console.log(err);
    });
  }
};
</script>

<style lang="scss" scoped>
  .cover-photo{
    padding-left: 0;
    padding-right: 0;
    position: relative;
    margin-bottom: 50px;
  }
  .profile-picture{
    box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 2px inset;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid black;
    position: absolute;
    bottom: -50px;
    left: 20px;
    img {
      width: 100%;
      border-radius: 50%;
    }

    @media screen and (min-width: 768px){
      width: 140px;
      height: 140px;
      bottom: -70px;
    }
  }

  .edit-profile {
    background-color: black;
  }

  .edit-profile-btn {
    bottom: -60px;
  }
  .joined, .body-2 {
    font-size: 0.8rem !important;
    color: rgba(255, 255, 255, 0.5);
  }
</style>
