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
      <a href="#" class="btn btn-danger">Remove</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ["user"],
};
</script>

<style>
</style>