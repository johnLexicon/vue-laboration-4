<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <a class="navbar-brand mt-2 mt-lg-0" href="https://www.lexicon.se/"
          ><img src="../../assets/lexicon.jpg" alt="Lexicon" height="30"
        /></a>
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-if="!signedIn" class="nav-item">
            <router-link class="nav-link" exact to="/">Sign In</router-link>
          </li>
          <li v-if="signedIn" class="nav-item">
            <router-link class="nav-link" exact to="/users">Users</router-link>
          </li>
          <li v-if="signedIn" class="nav-item">
            <router-link class="nav-link" exact to="/createUser"
              >Create User</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" exact to="/about">About</router-link>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div v-if="signedIn" class="d-flex align-items-center">
        <span class="me-2 text-light">Welcome {{ admin.name }}</span>
        <!-- Avatar -->
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            :src="adminAvatar"
            class="rounded-circle"
            height="25"
            alt=""
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <button class="dropdown-item" v-on:click="logOut">Logout</button>
          </li>
        </ul>
      </div>
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["logOutAdmin"]),
    logOut() {
      this.logOutAdmin();
      this.$router.replace("/");
    },
  },
  computed: {
    ...mapGetters(["admin", "signedIn"]),
    adminAvatar() {
      return this.admin.avatar
        ? this.admin.avatar
        : "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png";
    },
  },
};
</script>

<style>
</style>