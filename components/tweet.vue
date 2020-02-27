<template>
  <v-list-item class="tweet-list">
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
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
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

  .tweet-list{
      background-color: black;
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
</style>
