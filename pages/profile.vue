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
          class="ma-2 edit-profile"
          rounded
          outlined
          absolute
          bottom
          right
          color="blue"
        >
          Edit Profile
        </v-btn>
      </v-layout>
      <v-list color="black">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title><b>oyinD</b></v-list-item-title>
            <v-list-item-subtitle>@oyincode</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Certified Blockchain Enthusiast</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title><v-icon>mdi-calendar</v-icon> Joined August 2017</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-layout>
            <p>511 Following</p>
            <p>200 Followers</p>
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
  </v-container>
</template>

<script>
import Tweet from '@/components/tweet';
export default {
  components: { Tweet },
  layout: 'default',
  data: () => ({
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
    tab: null,
    items: [
      'Tweets', 'Tweets & Replies', 'Media', 'Likes'
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  })
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
    border: 2px solid black;
    position: absolute;
    bottom: -50px;
    left: 20px;
    img {
      width: 100%;
      border-radius: 50%;
    }

    @media screen and (min-width: 768px){
      width: 160px;
      height: 160px;
      bottom: -80px;
    }
  }

  .edit-profile {
    bottom: -60px;
  }
</style>
