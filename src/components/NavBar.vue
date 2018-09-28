<template>
  <div class="nav-bar">
    <div class="flex-container">
      <div class="flex-item logo">
        <a href="/"><img src="../../static/logo.png"></a>
      </div>
      <div class="flex-item nav-items">
        <ul>
          <nav-item v-for="(item, index) in navItems" :key="index" :url="item.url">{{ item.name }}</nav-item>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import NavItem from "./includes/NavItem";
import { navItems } from "../data/NavItems";

export default {
  name: "nav-bar",
  components: {
    "nav-item": NavItem
  },
  data() {
    return {
      navItems: navItems
    };
  }
};
</script>
<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  right: 1em;
  z-index: 100;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: sticky; */
  /* width: 100%; */
  /* top: 0; */
}
</style>

