import nuxtStorage from 'nuxt-storage';

export const state = () => ({
  isAuthenticated: false
});

export const getters = {
  getAuth(state) {
    return state.isAuthenticated;
  }
};

export const mutations = {
  authenticate(state, payload) {
    state.isAuthenticated = payload;
  }
};

export const actions = {
  authenticate({ commit }) {
    const token = nuxtStorage.localStorage.getData('token');
    console.log(token);
    if (token) {
      commit('authenticate', true);
    } else {
      commit('authenticate', false);
    }
  }
};
