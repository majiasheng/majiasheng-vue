<template>
  <div id="hamburger">
    <div class="dropdown">
      <div class="container" @click="toggleHamburger($event)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>

      <div class="dropdown-content" id="dropdown-content" :style="{display: display}">
        <a href="#"><img src="../../../static/logo.png"></a>
        <nav-item v-for="(item, index) in navItems" :key="index" :url="item.url">{{ item.name }}</nav-item>
      </div>
                
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
      event.target.classList.toggle("change");
      this.hide = !this.hide;
      this.display = (this.hide)?'none':'block';
    }
  }
};
</script>

<style scoped>
.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

.container {
  display: inline-block;
  cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>