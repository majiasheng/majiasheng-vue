<template>
  <div class="f">
    <togglable-hamburger :navItems="navItems"></togglable-hamburger>
  </div>
</template>
<script>
import TogglableHamburger from './includes/TogglableHamburger';
import { navItems } from "../data/NavItems";

export default {
  name: 'blank-page',
  components: {
    'togglable-hamburger': TogglableHamburger
  },
  data() {
    return {
      navItems: navItems
    }
  }
}
</script>
<style scoped>
.flex-container {
  display: flex;
  /* justify-content: space-around; */
  justify-content: center;
  align-items: center;
  background: white;
}
.flex-container {
  position: fixed;
  width: 100vw;
  top: 0;
}
</style>

