<template class="app">
  <v-container>
    <v-list width="100%" color="dark" :style="'padding : 0'">
      <v-layout class="cover-photo">
        <v-img
          v-if="!userProfile.coverPhoto"
          height="200px"
          width="100%"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          class="cover-image"
        />
        <v-img
          v-else
          height="200px"
          width="100%"
          :src="userProfile.coverPhoto"
          class="cover-image"
        />
        <div class="profile-picture">
          <img v-if="!userProfile.dp" id="user-banner" src="https://pbs.twimg.com/profile_banners/1001052290042744832/1547111065" alt="">
          <img v-else :src="userProfile.dp" alt="">
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
        <v-list-item v-if="userProfile.userbio">
          <v-list-item-content>
            <v-list-item-title>{{ userProfile.userbio }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="font-weight-light caption">
          <v-layout justify-start wrap>
            <span class="joined">
              <v-icon color="rgba(255, 255, 255, 0.5)">
                mdi-map-marker
              </v-icon> {{ userProfile.userlocation }}
            </span>
            <span class="joined mx-3">
              <v-icon color="rgba(255, 255, 255, 0.5)">
                mdi-calendar
              </v-icon> Joined {{ userProfile.joined }}
            </span>
            <span class="joined mx-3">
              <v-icon color="rgba(255, 255, 255, 0.5)">
                mdi-balloon
              </v-icon> Joined {{ userProfile.joined }}
            </span>
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
    <v-dialog v-model="dialog" width="500" dark style="overflow:hidden">
      <v-toolbar color="black">
        <v-btn icon @click="dialog = false">
          <v-icon color="blue">
            mdi-close
          </v-icon>
        </v-btn>
        <v-toolbar-title class="font-weight-bold">
          Edit Profile
        </v-toolbar-title>
        <v-spacer />
        <v-btn rounded depressed color="blue" dark @click="updateUser">
          Save
        </v-btn>
      </v-toolbar>
      <div class="form-body">
        <v-layout class="edit-profile">
          <div class="banner">
            <v-overlay :value="true" :absolute="true" />
            <img v-if="!userProfile.coverPhoto" id="user-banner" src="https://pbs.twimg.com/profile_banners/1001052290042744832/1547111065" alt="">
            <img v-else :src="userProfile.coverPhoto" id="user-banner" alt="">
            <div class="custom-file">
              <input id="banner" type="file" name="" @change="handleDp('user-banner', 'banner', $event)">
              <label for="banner" role="button">
                <span class="file-icon">
                  <v-btn icon rounded tabindex="-1">
                    <v-icon>mdi-camera</v-icon>
                  </v-btn>
                </span>
              </label>
            </div>
          </div>
          <div class="dp">
            <v-avatar size="120">
              <v-overlay :value="true" :absolute="true" />
              <img v-if="!userProfile.dp" id="user-dp" src="https://pbs.twimg.com/profile_banners/1001052290042744832/1547111065" alt="">
              <img v-else :src="userProfile.dp" id="user-dp" alt="">
              <div class="custom-file">
                <input id="dp" type="file" name="" @change="handleDp('user-dp', 'dp', $event)">
                <label for="dp" role="button">
                  <span class="file-icon">
                    <v-btn icon rounded tabindex="-1">
                      <v-icon>mdi-camera</v-icon>
                    </v-btn>
                  </span>
                </label>
              </div>
            </v-avatar>
          </div>
        </v-layout>
        <v-layout column class="form">
          <v-form>
            <v-text-field
              v-model="userEditDetails.userFullName"
              label="Name"
              placeholder=" "
              filled
              color="#1da1f2"
              background-color="rgb(21, 24, 28)"
              counter
              maxlength="50"
              class="mx-3 my-5"
            />
            <v-text-field
              v-model="userEditDetails.userBio"
              hint="Bio"
              type="text"
              label="Bio"
              placeholder=" "
              filled
              color="#1da1f2"
              background-color="rgb(21, 24, 28)"
              counter
              maxlength="160"
              class="mx-3 my-5"
            />
            <v-text-field
              v-model="userEditDetails.userLocation"
              hint="Location"
              type="text"
              label="Location"
              placeholder=" "
              filled
              color="#1da1f2"
              background-color="rgb(21, 24, 28)"
              counter
              maxlength="30"
              class="mx-3 my-5"
            />
            <v-text-field
              v-model="userEditDetails.userWebsite"
              hint="Location"
              type="text"
              label="Location"
              placeholder=" "
              filled
              color="#1da1f2"
              background-color="rgb(21, 24, 28)"
              counter
              maxlength="100"
              class="mx-3 my-5"
            />
          </v-form>
        </v-layout>
      </div>
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
    name: '',
    bio: '',
    location: '',
    userProfile: {},
    userEditDetails: {
      userFullName: '',
      userBio: '',
      userLocation: '',
      userWebsite: '',
      dp: '',
      coverPhoto: ''
    },
    tab: null,
    items: [
      'Tweets', 'Tweets & Replies', 'Media', 'Likes'
    ],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    formData: {},
    dp: '',
    banner: ''
  }),
  mounted() {
    this.$axios.defaults.headers.common.Authorization = `Bearer ${this.$cookies.get('token')}`;
    this.fetchProfile();
  },
  methods: {
    fetchProfile() {
      this.$axios.get('/viewProfile').then((res) => {
        const month = new Date(res.data.created_at).getMonth();
        const year = new Date(res.data.created_at).getFullYear();
        const joined = `${this.monthNames[month]}, ${year}`;
        this.userProfile = res.data;
        // this.userEditDetails = res.data;
        this.userEditDetails.userFullName = this.userProfile.userfullname;
        this.userEditDetails.userBio = this.userProfile.userbio === 'null' ? '' : this.userProfile.userbio;
        this.userEditDetails.userLocation = this.userProfile.userlocation === 'null' ? '' : this.userProfile.userlocation;
        this.userEditDetails.userWebsite = this.userProfile.userwebsite === 'null' ? '' : this.userProfile.userwebsite;
        this.userEditDetails.dp = this.userProfile.dp;
        this.userEditDetails.coverPhoto = this.userProfile.coverphoto;
        this.userProfile.joined = joined;
        // Dispatch data to store
        this.$store.dispatch('updateUser', this.userProfile);
      }).catch((err) => {
        console.log(err);
      });
    },
    handleDp(image, input, e) {
      const img = document.querySelector(`#${input}`);
      const userImg = document.querySelector(`#${image}`);
      if (img.files && img.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (input === 'dp') {
            this.dp = reader.result;
          } else {
            this.banner = reader.result;
          }
          userImg.src = reader.result;
        };
        reader.readAsDataURL(img.files[0]);
      }
      const photo = img.files[0];
      const formData = new FormData();
      if (input === 'dp') {
        formData.append('dp', photo);
      } else {
        formData.append('coverPhoto', photo);
      }
      this.formData = formData;
    },
    updateUser() {
      for (const item in this.userEditDetails) {
        if (item !== 'dp' && item !== 'coverPhoto') {
          if (this.userEditDetails[item] !== 'null') {
            this.formData.append(item, this.userEditDetails[item]);
          }
        }
      }

      this.$axios(
        {
          url: '/updateProfile',
          data: this.formData,
          headers: { 'content-type': 'multipart/form-data' },
          method: 'put'
        }
      ).then((res) => {
        this.fetchProfile();
        this.dialog = false;
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .v-dialog {
    overflow-y: hidden;
  }

  .form-body {
    height: 500px;
    overflow-y: auto;
  }

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
      height: 100%;
    }

    @media screen and (min-width: 768px){
      width: 140px;
      height: 140px;
      bottom: -70px;
    }
  }

  .edit-profile {
    background-color: black;
    position: relative;
    img {
      width: 100%;
    }

    .banner {
      position: relative;
      width: 100%;
    }

    .custom-file {
      z-index: 5;
      position: absolute;
      left: calc(50% - 19px);
      top: calc(50% - 19px);
      padding: 7px;
      cursor: pointer;
      > input {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        position: absolute;
        z-index: -1;
      }

      [type="file"] + label {
        padding: 8px 0px;
        border-radius: 50%;
      }

      [type="file"]:focus + label,
      [type="file"] + label:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }

      .file-icon * {
        pointer-events: none;
      }
    }

    .dp::v-deep {
      position: absolute;
      bottom: -60px;
      left: 10px;
      .v-avatar {
        border: 4px solid black;
      }
    }
  }

  .form {
    background-color: black;
    padding-top: 70px;
  }

  .edit-profile-btn {
    bottom: -60px;
  }
  .joined, .body-2 {
    font-size: 0.8rem !important;
    color: rgba(255, 255, 255, 0.5);
  }
</style>
