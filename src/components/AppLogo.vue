<template>
  <router-link id="app-logo" to="/"><img src="../../static/_logo.png"></router-link>
  <!-- <a id="app-logo" href="/"><img src="../../static/_logo.png"></a> -->
</template>

<script>
export default {
  name: "app-logo",
};
</script>
<style scoped>
#app-logo {
  position: fixed;
  top: 1em;
  left: 1em;
  display: inline-block;
  cursor: pointer;
  z-index: 101;
}

</style>
