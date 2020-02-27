<template class="app">
  <v-container>
    <v-list width="100%" color="dark">
      <v-list-item>
        <new-tweet class="new-tweet" />
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
    tweetLength: 0
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
  methods: {
    handleKeyPress(e) {
      this.tweetLength = e.target.textContent.length;
      this.setEndOfContenteditable(e);
      if (e.target.textContent.length < 160) {
        this.tweet = e.target.textContent;
      } else {
        e.preventDefault();
        let span = document.querySelector('.textarea span');
        if (!span) {
          span = document.createElement('span');
          e.target.appendChild(span);
        }
        span.style.background = 'red';
        span.textContent = span.textContent + e.key;
      }
    },
    handleCtrlKeyPress(e) {
      this.tweetLength = e.target.textContent.length;
      if (e.target.textContent.length < 160) {
        this.tweet = e.target.textContent;
      }
    },
    handlePaste(e) {
      e.preventDefault();
      const copiedText = e.clipboardData.getData('text/plain');
      document.execCommand('inserttext', false, copiedText);
    },
    setEndOfContenteditable() {
      const contentEditableElement = document.querySelector('.textarea');
      let range, selection;
      if (document.createRange) {
        range = document.createRange();
        range.selectNodeContents(contentEditableElement);
        range.collapse(false);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      } else if (document.selection) {
        range = document.body.createTextRange();
        range.moveToElementText(contentEditableElement);
        range.collapse(false);
        range.select();
      }
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
    margin: 10px 0;
  }

  .divider {
    border: 6px solid rgba(255, 255, 255, 0.2);
    margin: 10px 0;
  }

</style>
