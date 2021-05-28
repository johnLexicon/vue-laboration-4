<template>
  <div class="home">
    <div class="h-100 d-flex justify-content-center align-items-center">
      <SignInForm />
    </div>
  </div>
</template>
<script>
import SignInForm from "../components/forms/SignInForm";
export default {
  name: "Home",
  components: {
    SignInForm,
  },
};
</script>
<style scoped>
.home {
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1567924675637-283a6742993e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
