<template>
  <div class="card me-3 shadow-sm my-5" style="width: 18rem">
    <img
      :src="user.avatar"
      class="card-img-top"
      :alt="user.name"
      style="height: 270px"
    />
    <div class="card-body">
      <h5 class="card-title">{{ user.name }}</h5>
      <p class="card-text">
        {{ user.email }}
      </p>
      <button @click="remove" class="btn btn-danger">Remove</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UserCard",
  props: ["user"],
  methods: {
    ...mapActions(["removeUser"]),
    remove() {
      this.removeUser(this.user._id);
    },
  },
};
</script>

<style>
</style>