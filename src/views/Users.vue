<template>
  <div class="container-md container-fluid mt-5">
    <h1>Users Page</h1>
    <div class="d-flex flex-wrap justify-content-center">
      <UserCard v-for="user in users" :user="user" :key="user._id"> </UserCard>
    </div>
  </div>
</template>

<script>
import UserCard from "../components/cards/UserCard";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Users",
  components: {
    UserCard,
  },
  created() {
    this.fetchUsers();
  },
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {
    ...mapActions(["fetchUsers"]),
  },
};
</script>

<style>
</style>