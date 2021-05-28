<template>
  <form style="width: 50vw">
    <!-- Email input -->
    <div class="form-outline mb-5">
      <input
        type="email"
        id="email"
        class="form-control text-light border-bottom border-light"
      />
      <label class="form-label text-light" for="email">Email address</label>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-5">
      <input
        type="password"
        id="password"
        class="form-control border-bottom border-light text-light"
      />
      <label class="form-label text-light" for="password">Password</label>
    </div>
    <!-- Submit button -->
    <button type="submit" class="btn btn-primary btn-block">Sign in</button>
  </form>
</template>

<script>
export default {};
</script>