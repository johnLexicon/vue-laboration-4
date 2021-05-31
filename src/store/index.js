import Vue from 'vue';
import Vuex from 'vuex';
import { adminsDataService } from '../shared/adminsDataService';

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
    signInAdmin: async ({ commit }, payload) => {
      const admin = await adminsDataService.signInAdmin(
        payload.email,
        payload.password
      );
      commit('SIGN_IN', admin);
    },
  },
  modules: {},
});
