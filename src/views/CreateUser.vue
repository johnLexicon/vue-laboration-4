<template>
  <div class="container mt-5">
    <h1>Create User</h1>
    <create-user-form />
  </div>
</template>

<script>
import CreateUserForm from "../components/forms/CreateUserForm.vue";
export default {
  name: "CreateUser",
  components: { CreateUserForm },
};
</script>

<style>
</style>