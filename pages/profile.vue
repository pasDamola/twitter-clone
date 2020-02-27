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
            class="ma-2"
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
          <v-list-item-content>
            <v-list-item-title>511 Following</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title>200 Followers</v-list-item-title>
          </v-list-item-content>
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
            :key="tweet"
            :item="tweet"
          />
        </v-tab-item>
        <v-tab-item v-show="tab===1" color="black">
          <tweet
            v-for="tweet in tweets"
            :key="tweet"
            :item="tweet"
          />
        </v-tab-item>
        <v-tab-item v-show="tab===2" color="black">
          <tweet
            v-for="tweet in tweets"
            :key="tweet"
            :item="tweet"
          />
        </v-tab-item>
        <v-tab-item v-show="tab===3" color="black">
          <tweet
            v-for="tweet in tweets"
            :key="tweet"
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
    .cover-photo{
        padding-left: 0;
        padding-right: 0;
        position: relative;
        margin-bottom: 50px;
    }
    .profile-picture{
        box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 2px inset;
        width: 160px;
        height: 160px;
        border-radius: 50%;
        border: 2px solid black;
        position: absolute;
        bottom: -80px;
        left: 20px;
        img {
            width: 100%;
            border-radius: 50%;
        }
    }
<template>
  <v-container />
</template>
<script>
export default {
};
</script>
<style>
</style>
