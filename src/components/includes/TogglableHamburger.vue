<template>
  <div id="hamburger">
    <div class="container" @click="toggleHamburger()" ref="hamburgerContainer">
      <div class="bar1 bar"></div>
      <div class="bar2 bar"></div>
      <div class="bar3 bar"></div>
    </div>
    <div class="dropdown-content" :style="{display: display}">
      <!-- <a href="/"><img src="../../../static/logo.png"></a> -->
      <nav-item v-for="(item, index) in navItems" :key="index" :url="item.url">{{ item.name }}</nav-item>
    </div>
  </div>
</template>
<script>
import NavItemHamburger from "./NavItemHamburger";

export default {
  name: "togglable-hamburger",
  components: {
    'nav-item': NavItemHamburger
  },
  props: {
    navItems: Array
  },
  data() {
    return {
      hide: true,
      display: 'none'
    };
  },
  methods: {
    toggleHamburger(event) {
      this.hide = !this.hide;
      this.display = (this.hide)?'none':'block';
      this.$refs.hamburgerContainer.classList.toggle("rotate");
    }
  }
};
</script>

<style scoped>
#hamburger {
  position: fixed;
  top: 1em;
  right: 1em;
  z-index: 101;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 1em;
  background-color: #f9f9f9;
  /* min-width: 100px; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.container {
  display: inline-block;
  cursor: pointer;
  transition: 0.4s;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
}

.rotate {
  transform: rotate(-90deg);
  transition: 0.4s;
}
</style>