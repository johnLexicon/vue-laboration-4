<template>
  <div>
    <Navbar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "./components/navigation/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style scoped>
.content {
  margin-top: -58px; /* Nav bar height */
}
</style>
