<template>
  <v-layout>
    <v-list-item-avatar>
      <img src="https://pbs.twimg.com/profile_images/1197936225828691968/jL4Yv9GE_bigger.jpg" alt="">
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>
        <div
          ref="textarea"
          contenteditable="true"
          class="textarea"
          placeholder="What's happening"
          @keypress="handleKeyPress"
          @keyup="handleCtrlKeyPress"
          @paste="handlePaste"
        >
          <!-- <span /> -->
        </div>
      </v-list-item-title>
      <v-list-item-subtitle>
        <v-layout>
          <v-layout class="actions">
            <v-icon color="blue">
              mdi-image
            </v-icon>
            <v-icon color="blue">
              mdi-gif
            </v-icon>
            <v-icon color="blue">
              mdi-poll
            </v-icon>
            <v-icon color="blue">
              mdi-emoticon-outline
            </v-icon>
          </v-layout>
          <v-spacer />
          <v-layout align-center justify-space-between class="tweet-count">
            <v-progress-circular
              rotate="270"
              :size="getRemainingCount > 20 ? 20 : 27"
              :value="tweet ? getTextProgress : 0"
              width="2"
              :color="tweet ? getProgressColor : 'white'"
            >
              {{ getRemainingCount > 20 ? '': getRemainingCount }}
            </v-progress-circular>
            <hr class="line">
            <v-icon color="blue" size="32">
              mdi-plus-circle-outline
            </v-icon>
            <v-btn
              class="ma-2 tweet"
              rounded
              color="blue"
              min-height="40"
              :disabled="getRemainingCount < 0"
              @click="createTweet"
            >
              Tweet
            </v-btn>
          </v-layout>
        </v-layout>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-layout>
</template>

<script>
export default {
  layout: 'default',
  data: () => ({
    tweet: '',
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
  mounted() {
    this.$axios.defaults.headers.common.Authorization = `Bearer ${this.$cookies.get('token')}`;
  },
  methods: {
    createTweet() {
      this.$axios.post('/tweet', { tweetBody: this.tweet }).then((res) => {
        this.$emit('fetchTweet');
      }).catch((err) => {
        console.log(err);
      });
    },
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
  .textarea {
    outline: none;
    user-select: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    &[contenteditable=true]:empty:before{
      content: attr(placeholder);
      display: block; /* For Firefox */
      font-size: 1.2rem;
      color: #fff;
      opacity: 0.6;
      font-weight: 300;
    }
  }

  .v-progress-circular::v-deep {
    font-size: 0.8rem;
    .v-progress-circular__underlay {
      stroke: rgba(255, 255, 255, 0.2);
    }
  }

  .actions {
    max-width: 100%;
    flex-grow: 0;
    width: 120px;
    justify-content: space-between;
  }

  .v-avatar.v-list-item__avatar {
    align-self: flex-start;
  }

  .user-tweet{
    white-space: normal;
  }

  .line {
    width: 1px;
    height: 30px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    margin: 0 10px;
  }

  .tweet-count {
    width: 180px;
    max-width: 100%;
    flex-grow: 0;
  }
</style>
