<template class="app">
  <v-container>
    <v-list width="100%" color="dark">
      <v-list-item class="new-tweet">
        <new-tweet @fetchTweet="fetchTweets" />
      </v-list-item>
      <v-divider class="divider" />
      <div v-for="(item, index) in tweets" :key="index">
        <v-divider v-if="item.divider" />
        <v-list-item v-else class="tweet-list">
          <v-list-item-avatar>
            <img :src="item.dp" alt="">
          </v-list-item-avatar>
          <v-list-item-content class="my-content">
            <v-list-item-title>
              <v-layout justify-space-between align-center class="tweet">
                <p>{{ item.name }} <span>{{ item.handle }}</span></p>
                <v-icon>mdi-chevron-down</v-icon>
              </v-layout>
            </v-list-item-title>
            <v-list-item-subtitle class="user-tweet">
              {{ item.tweet }}
            </v-list-item-subtitle>
            <v-list-item-subtitle v-if="item.img && item.img.length > 0">
              <div class="images">
                <v-col v-for="(img, i ) in item.img" :key="i">
                  <v-card :style="`background-image: url(${img})`" width="180" height="180" class="tweet-img" />
                </v-col>
              </div>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <v-layout class="icons my-4">
                <v-icon :color="item.message || item.messageClicked ?'blue':'white'" @mouseenter="item.message = true" @mouseleave="item.message = false" @click="item.messageClicked = !item.messageClicked">
                  {{ !item.messageClicked ? 'mdi-comment-outline' : 'mdi-comment' }}
                </v-icon>
                <v-spacer />
                <v-icon :color="item.retweet || item.retweetClicked ?'green':'white'" @mouseenter="item.retweet = true" @mouseleave="item.retweet = false" @click="item.retweetClicked = !item.retweetClicked">
                  mdi-twitter-retweet
                </v-icon>
                <v-spacer />
                <v-icon :color="item.heart || item.heartClicked ? 'red':'white'" @mouseenter="item.heart = true" @mouseleave="item.heart = false" @click="item.heartClicked = !item.heartClicked">
                  {{ !item.heartClicked ? 'mdi-heart-outline': 'mdi-heart' }}
                </v-icon>
                <v-spacer />
                <div>
                  <v-icon :color="item.share || item.shareClicked ? 'blue':'white'" @mouseenter="item.share = true" @mouseleave="item.share = false" @click="item.shareClicked = !item.shareClicked">
                    {{ !item.shareClicked ? 'mdi-share-outline': 'mdi-share' }}
                  </v-icon>
                </div>
              </v-layout>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-divider />
    </v-list>
  </v-container>
</template>

<script>
import NewTweet from '@/components/new-tweet';
export default {
  components: { NewTweet },
  middleware: 'auth',
  layout: 'default',
  data: () => ({
    tweet: '',
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
      },
      { divider: true },
      {
        name: 'S.S. Malgwi',
        handle: '@santos__vito',
        tweet: '2 years gone wow I still remember the events on that Sunday afternoon keep resting champ',
        dp: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        img: [
          'https://cdn.vuetifyjs.com/images/lists/ali.png',
          'https://cdn.vuetifyjs.com/images/lists/ali.png',
          'https://cdn.vuetifyjs.com/images/cards/server-room.jpg',
          'https://cdn.vuetifyjs.com/images/parallax/material.jpg'
        ],
        message: false,
        retweet: false,
        heart: false,
        share: false,
        messageClicked: false,
        retweetClicked: false,
        heartClicked: false,
        shareClicked: false
      },
      { divider: true },
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
      },
      { divider: true },
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
      },
      { divider: true },
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
    tweetLength: 0,
    userProfile: {},
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
  }),
  computed: {
    getProgressColor() {
      const textRemaining = 160 - this.tweetLength;
      if (textRemaining >= 20) {
        return 'blue';
      } else if (textRemaining < 20 && textRemaining > 0) {
        return 'yellow darken-1';
      } else if (textRemaining < 1) {
        return 'red';
      } else {
        return '#fff';
      }
    },
    getTextProgress() {
      return parseInt((this.tweetLength / 160) * 100);
    },
    getRemainingCount() {
      return 160 - this.tweetLength;
    }
  },
  mounted() {
    this.$axios.defaults.headers.common.Authorization = `Bearer ${this.$cookies.get('token')}`;
    this.fetchTweets();
    this.fetchProfile();
  },
  methods: {
    fetchProfile() {
      this.$axios.get('/viewProfile').then((res) => {
        const month = new Date(res.data.created_at).getMonth();
        const year = new Date(res.data.created_at).getFullYear();
        const joined = `${this.monthNames[month]}, ${year}`;
        this.userProfile = res.data;
        this.userProfile.joined = joined;
        // Dispatch data to store
        this.$store.dispatch('updateUser', this.userProfile);
      }).catch((err) => {
        console.log(err);
      });
    },
    fetchTweets() {
      this.$axios.get('/viewTweet').then((res) => {
        const tweets = [];
        console.log(res.data);
        res.data.forEach((tweet) => {
          const userTweet = {
            name: tweet.userFullName,
            handle: tweet.userName,
            tweet: tweet.tweet.tweetinfo,
            dp: tweet.dp ? tweet.dp : 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            message: false,
            retweet: false,
            heart: false,
            share: false,
            messageClicked: false,
            retweetClicked: false,
            heartClicked: false,
            shareClicked: false
          };
          const divider = { divider: true };
          tweets.push(userTweet, divider);
        });
        this.tweets = tweets;
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .v-avatar.v-list-item__avatar {
    align-self: flex-start;
  }

  .my-content:v-deep {
    max-width: 80%
  }

  .images {
    max-width: 100%;
    width: 400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  }
  .app::v-deep {
    background-color: #fff;
  }

  .icons{
    max-width: 100%;
    width: 600px;
  }

  .tweet {
    p {
      span {
        color: rgb(126, 126, 126);
        font-size: 0.8rem;
      }
    }

    i.v-icon {
      color: rgb(126, 126, 126);
    }
  }

  .tweet-img {
    background-size: cover;
  }

  .user-tweet{
    white-space: normal;
  }

  .new-tweet {
    display: none;
    @media screen and (min-width: 1000px){
      margin: 10px 0;
      display: flex;
    }
  }

  .divider {
    display: none;
    @media screen and (min-width: 1000px){
      display: block;
      border: 6px solid rgba(255, 255, 255, 0.2);
      margin: 10px 0;
    }
  }

</style>
