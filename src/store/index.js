import Vue from 'vue';
import Vuex from 'vuex';
import adminsDataService from '../shared/adminsDataService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    admin: null,
    users: [],
  },
  getters: {
    signedIn: (state) => state.admin !== null,
  },
  mutations: {
    SIGN_IN: (state, admin) => {
      state.admin = admin;
    },
  },
  actions: {
    signIn: async ({ context }, payload) => {
      const admin = adminsDataService.signInAdmin(
        payload.email,
        payload.password
      );
    },
  },
  modules: {},
});
