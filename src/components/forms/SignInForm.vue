<template>
  <form class="content" v-on:submit.prevent="signIn">
    <!-- Email input -->
    <div class="form-outline mb-5">
      <input
        type="email"
        id="email"
        class="form-control text-light border-bottom border-light"
        v-model="email"
      />
      <label class="form-label text-light" for="email">Email address</label>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-5">
      <input
        type="password"
        id="password"
        class="form-control border-bottom border-light text-light"
        v-model="password"
      />
      <label class="form-label text-light" for="password">Password</label>
    </div>
    <div
      v-if="error"
      class="alert text-danger border border-danger"
      role="alert"
    >
      {{ error }}
    </div>
    <!-- Submit button -->
    <button type="submit" class="btn btn-outline-light btn-block">
      Sign in
    </button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SignInForm",
  data() {
    return {
      error: "",
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["signedIn"]),
  },
  methods: {
    ...mapActions(["signInAdmin"]),
    async signIn() {
      this.error = "";
      if (!this.email || !this.password) {
        this.error = "Email and Password are mandatory";
        return;
      }
      await this.signInAdmin({ email: this.email, password: this.password });
      if (this.signedIn) {
        this.$router.replace("/users");
      } else {
        this.error = "Authentication failed";
      }
    },
  },
};
</script>
<style scoped>
.content {
  margin-top: -58px; /* Nav bar height */
}
</style>