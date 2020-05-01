import nuxtStorage from 'nuxt-storage';

export const state = () => ({
  isAuthenticated: false,
  user: {},
  peopleToBeFollowed: [],
  followers: []
});

export const getters = {
  getAuth(state) {
    return state.isAuthenticated;
  }
};

export const mutations = {
  authenticate(state, payload) {
    state.isAuthenticated = payload;
  },
  updateUser(state, payload) {
    state.user = payload;
  },
  loadFollowers(state, payload) {
    state.followers = payload;
  },
  loadPeopleToBeFollowed(state, payload) {
    state.peopleToBeFollowed = payload;
  }
};

export const actions = {
  authenticate({ commit }) {
    const token = nuxtStorage.localStorage.getData('token');
    if (token) {
      commit('authenticate', true);
    } else {
      commit('authenticate', false);
    }
  },
  updateUser({ commit }, payload) {
    commit('updateUser', payload);
  },
  loadFollowers({ commit }, payload) {
    commit('loadFollowers', payload);
  },
  loadPeopleToBeFollowed({ commit }, payload) {
    commit('peopleToBeFollowed', payload);
  },
  logout({ commit }) {
    return new Promise((resolve) => {
      commit('logout');
      nuxtStorage.localStorage.clear();
      delete this.$axios.defaults.headers.common.Authorization;
      resolve();
    });
  }
};
