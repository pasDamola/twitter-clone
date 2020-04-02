import nuxtStorage from 'nuxt-storage';

export const state = () => ({
  isAuthenticated: false,
  user: {},
  peopleToBeFollowed: []
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
  logout({ commit }) {
    return new Promise((resolve) => {
      commit('logout');
      nuxtStorage.localStorage.clear();
      delete this.$axios.defaults.headers.common.Authorization;
      resolve();
    });
  }
};
