import Vue from 'vue';
import Vuex from 'vuex';
import { adminsDataService } from '../shared/adminsDataService';
import { usersDataService } from '../shared/usersDataService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    admin: null,
    signingIn: false,
    users: [],
  },
  getters: {
    signedIn: (state) => state.admin !== null,
    signingIn: (state) => state.signingIn,
    admin: (state) => state.admin,
    users: (state) => state.users,
  },
  mutations: {
    SIGN_IN: (state, admin) => {
      state.admin = admin;
    },
    LOG_OUT: (state) => {
      state.admin = null;
    },
    SET_USERS: (state, users) => {
      state.users = users;
    },
    REMOVE_USER: (state, userId) => {
      state.users = state.users.filter((user) => user._id !== userId);
    },
    ADD_USER: (state, user) => {
      state.users.push(user);
    },
    SET_SIGNING_IN: (state, signingIn) => {
      state.signingIn = signingIn;
    },
  },
  actions: {
    signInAdmin: async ({ commit }, payload) => {
      commit('SET_SIGNING_IN', true);
      const admin = await adminsDataService.signInAdmin(
        payload.email,
        payload.password
      );
      if (admin) {
        commit('SIGN_IN', admin);
      }
      commit('SET_SIGNING_IN', false);
    },
    logOutAdmin: ({ commit }) => {
      commit('LOG_OUT');
    },
    fetchUsers: async ({ commit }) => {
      const users = await usersDataService.getAllUsers();
      commit('SET_USERS', users);
    },
    removeUser: async ({ commit }, userId) => {
      const wasRemoved = await usersDataService.removeUser(userId);
      if (wasRemoved) {
        commit('REMOVE_USER', userId);
      }
    },
    createUser: async ({ commit }, payload) => {
      const addedUser = await usersDataService.addUser(payload);
      if (addedUser) {
        commit('ADD_USER', addedUser);
        return true;
      }
      return false;
    },
  },
  modules: {},
});
