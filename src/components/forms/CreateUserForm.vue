<template>
  <form @submit.prevent="create">
    <div class="mb-3">
      <label for="name" class="form-label">Full name</label>
      <input
        required
        v-model="user.name"
        id="name"
        type="text"
        class="form-control form-control-lg"
      />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input
        required
        v-model="user.email"
        type="email"
        class="form-control form-control-lg"
        id="email"
      />
    </div>
    <div class="mb-3">
      <label for="avatar" class="form-label">Avatar Url</label>
      <input
        v-model="user.avatar"
        id="avatar"
        type="text"
        class="form-control form-control-lg"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CreateUserForm",
  data() {
    return {
      user: {},
      johnDoeAvatar:
        "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png",
    };
  },
  methods: {
    ...mapActions(["createUser"]),
    async create() {
      if (!this.user.avatar) {
        this.user.avatar = this.johnDoeAvatar;
      }
      const wasAdded = await this.createUser(this.user);
      if (wasAdded) {
        this.$router.push("/users");
        return;
      }
      console.error("Problems adding the user");
    },
  },
};
</script>

<style>
</style>