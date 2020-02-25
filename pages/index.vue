<template class="app">
  <v-container>
    <v-list width="100%" color="dark">
      <v-list-item v-for="(item, index) in tweets" :key="index" class="tweet-list">
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
          <v-list-item-subtitle>{{ item.tweet }}</v-list-item-subtitle>
          <v-list-item-subtitle v-if="item.img && item.img.length > 0">
            <div class="images">
              <v-col v-for="(img, i ) in item.img" :key="i">
                <v-card :style="`background-image: url(${img})`" min-width="280" min-height="280" class="tweet-img" />
              </v-col>
            </div>
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-layout class="icons my-4">
              <v-icon :color="item.message || item.messageClicked ?'blue':'white'" @mouseenter="item.message = true" @mouseleave="item.message = false" @click="item.messageClicked = !item.messageClicked">
                {{ !item.messageClicked ? 'mdi-message-outline' : 'mdi-message' }}
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
          <v-divider />
        </v-list-item-content>
      </v-list-item>

      <v-divider />
    </v-list>
  </v-container>
</template>

<script>
export default {
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
      },
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
    ]
  })
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
    max-width: 80%;
    width: 600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .app::v-deep {
    background-color: #fff;
  }

  .icons{
    max-width: 60%;
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
</style>
