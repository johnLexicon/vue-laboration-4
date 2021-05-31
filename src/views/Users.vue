<template>
  <div class="container-md container-fluid mt-5">
    <h1>Users Page</h1>
    <div v-for="user in users" :key="user._id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Users",
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