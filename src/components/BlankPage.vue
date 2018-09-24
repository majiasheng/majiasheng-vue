<template>
  <div class="flex-container">
    <div class="flex-item">
      <a href="/"><img src="../../static/logo.png"></a>
    </div>
    <div class="flex-item">
      <ul>
        <nav-item v-for="(item, index) in navItems" :key="index" :url="item.url">{{ item.name }}</nav-item>
      </ul>
    </div>
  </div>
</template>
<script>
import NavItem from './NavItem';
import { navItems } from '../data/NavItems';

export default {
  name: 'blank-page',
  components: {
    'nav-item': NavItem
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

