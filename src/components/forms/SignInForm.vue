<template>
  <form class="content" v-on:submit.prevent="signIn">
    <!-- Email input -->
    <div class="form-outline mb-5">
      <label class="form-label text-light" for="email">Email address</label>
      <input
        type="email"
        id="email"
        class="form-control text-light border-bottom border-light"
        autofocus
        v-model="email"
      />
    </div>

    <!-- Password input -->
    <div class="form-outline mb-5">
      <label class="form-label text-light" for="password">Password</label>
      <input
        type="password"
        id="password"
        class="form-control border-bottom border-light text-light"
        v-model="password"
      />
    </div>
    <!-- Submit button -->
    <button
      :disabled="signingIn"
      type="submit"
      class="btn btn-outline-light btn-block"
    >
      Sign in
    </button>
    <div v-show="signingIn" class="alert small text-success text-center">
      Signing in...
    </div>
    <div v-if="error" class="alert small text-danger text-center" role="alert">
      {{ error }}
    </div>
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
    ...mapGetters(["signedIn", "signingIn"]),
  },
  methods: {
    ...mapActions(["signInAdmin"]),
    async signIn() {
      this.error = "";
      if (!this.email || !this.password) {
        this.error = "Email and Password are mandatory";
        return;
      }
      const email = this.email;
      const password = this.password;
      await this.signInAdmin({ email, password });
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