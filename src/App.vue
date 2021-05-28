<template>
  <div>
    <Navbar />
    <div>
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
