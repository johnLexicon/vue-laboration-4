import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    admin: null,
    users: [],
  },
  getters: {
    signedIn: (state) => state.admin !== null,
  },
  mutations: {},
  actions: {},
  modules: {},
});
