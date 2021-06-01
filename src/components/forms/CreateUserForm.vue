<template>
  <form @submit.prevent="create">
    <div class="mb-3">
      <label for="fullName" class="form-label">Full name</label>
      <input
        v-model="user.fullName"
        id="fullName"
        type="text"
        class="form-control form-control-lg"
        :class="errors.fullName ? 'is-invalid' : ''"
      />
      <div
        v-show="errors.fullName"
        class="alert alert-danger border text-danger mt-2"
      >
        Full name is mandatory
      </div>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input
        v-model="user.email"
        type="email"
        class="form-control form-control-lg"
        id="email"
      />
      <div
        v-show="errors.email"
        class="alert alert-danger border text-danger mt-2"
      >
        Email is mandatory
      </div>
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
export default {
  name: "CreateUserForm",
  data() {
    return {
      user: {},
      errors: {},
      fullNameDirty: false,
      emailDirty: false,
    };
  },
  methods: {
    create() {},
  },
  watch: {
    "user.fullName": {
      immediate: true,
      handler(newValue) {
        if (!newValue && this.fullNameDirty) {
          this.errors.fullName = true;
        } else {
          this.errors.fullName = false;
        }
        this.fullNameDirty = true;
      },
    },
    "user.email": {
      immediate: true,
      handler(newValue) {
        if (!newValue && this.emailDirty) {
          this.errors.email = true;
        } else {
          this.errors.email = false;
        }
        this.emailDirty = true;
      },
    },
  },
};
</script>

<style>
</style>