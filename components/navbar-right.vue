<template>
  <v-navigation-drawer
    permanent
    fixed
    right
    width="35%"
    color="dark"
    app
  >
    <div class="nav">
      <v-list>
        <v-list-item>
          <v-input
            :hide-details="true"
            class="twitter-search"
          >
            <v-icon slot="prepend" color="rgba(255, 255, 255, 0.5)">
              mdi-magnify
            </v-icon>
            Search Twitter
          </v-input>
        </v-list-item>
        <v-list-item>
          <v-list width="100%" color="rgb(30, 30, 30)" class="mt-5 trends">
            <v-list-item>
              <v-layout>
                <h3>Trends</h3>
                <v-spacer />
                <img src="/icons/settings_blue.svg" alt="">
              </v-layout>
            </v-list-item>
            <v-divider />
            <div
              v-for="(item, index) in trending"
              :key="index"
            >
              <v-list-item
                v-if="!item.divider"
                two-line
              >
                <v-list-item-content>
                  <v-list-item-title>
                    <v-layout class="caption" justify-space-between>
                      <span>{{ index + 1 }} <span>.</span> {{ item.tag }} <span v-show="item.tag">.</span> Trending </span>
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-layout>
                  </v-list-item-title>
                  <v-list-item-subtitle class="trend-name">
                    {{ item.name }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="caption">
                    {{ formatNumber(item.tweetsCount) }} Tweets
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-if="item.people" class="caption">
                    <v-layout align-start="">
                      <v-avatar size="20">
                        <img src="https://randomuser.me/api/portraits/women/81.jpg">
                      </v-avatar>
                      <p class="caption">
                        Rey rey and React Developer are Tweeting about this
                      </p>
                    </v-layout>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider v-else />
            </div>

            <v-divider />
            <v-list-item>
              <p class="more">
                Show more
              </p>
            </v-list-item>
          </v-list>
        </v-list-item>
      </v-list>

      <div class="follow my-5">
        <v-list-item class="follow-list">
          <h3>Who to follow</h3>
        </v-list-item>
        <v-divider class="divider" />
        <div
          v-for="item in follow"
          :key="item.name"
          class="list"
        >
          <v-list-item v-if="!item.divider" class="follow-list">
            <v-list-item-avatar>
              <img :src="item.img" :alt="item.name">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.handle }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn class="ma-2" rounded outlined color="blue">
                Follow
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider v-else class="divider" />
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    trending: [
      {
        name: '#Ooin',
        tweetsCount: 6423,
        tag: 'Sports',
        people: true
      },
      { divider: true },
      {
        name: '#TuesdayMotivation',
        tweetsCount: 22400,
        tag: '',
        people: true
      },
      { divider: true },
      {
        name: '#TuesdayThoughts',
        tweetsCount: 31353,
        tag: ''
      },
      { divider: true },
      {
        name: '#NapVar',
        tweetsCount: 23850,
        tag: 'Sports'
      },
      { divider: true },
      {
        name: '#EndSarsNow',
        tweetsCount: 2690,
        tag: 'Politics'
      }
    ],
    follow: [
      {
        name: 'E.J. Mason',
        handle: '@codeabilty',
        img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
      },
      { divider: true },
      {
        name: 'CNN',
        handle: '@CNN',
        img: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
      },
      { divider: true },
      {
        name: 'Marcy Sutton',
        handle: '@marcysutton',
        img: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
      }
    ]
  }),
  methods: {
    formatNumber(num) {
      if (typeof num === 'number') {
        if (num < 10000) {
          return num.toLocaleString();
        } else {
          return `${Math.sign(num) * ((Math.abs(num) / 10000).toFixed(1))}K`;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>

  .nav {
    max-width: 400px;
  }
  .twitter-search::v-deep {
    align-items: center;
    background-color: rgba(30, 30, 30);
    padding: 5px 15px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
    border-radius: 50px;
    .v-input__slot {
      margin-bottom: 0;
    }
  }

  .trends {
    border-radius: 17px;
  }

  p.caption {
    margin: 0 5px;
    white-space: normal
  }

  .caption {
    span, i {
      color: rgba(255, 255, 255, 0.8);
      font-weight: 100;
    }
  }

  .trend-name {
    font-size: 14px;
    font-weight: bold;
    color: #fff !important;
  }

  .more {
    color: #1da1f2;
    margin: 10px 0;
  }

  .follow {
    padding: 0 16px;
    border-radius: 17px;

    > :first-child {
      border-top-left-radius: 17px;
      border-top-right-radius: 17px;
    }

    > div:last-child > div {
      border-bottom-left-radius: 17px;
      border-bottom-right-radius: 17px;
    }

    &-list {
      background-color: rgb(30, 30, 30);
    }

    .divider {
      background-color: #1e1e1e;
    }
  }
</style>
