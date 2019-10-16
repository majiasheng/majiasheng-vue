<template>
  <div id="app">
    <body>
      <!-- <toggolable-logo></toggolable-logo> -->
      <app-logo></app-logo>
      <!-- <nav-bar></nav-bar> -->
      <toggolable-hamburger :navItems="navItems"></toggolable-hamburger>
      
      <div class="content-container">
        <!-- empty space on the left -->
        <div class="placeholder"></div>

        <!-- content in the middle -->
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
      
        <!-- empty space on the right-->
        <div class="placeholder"></div>
      </div>
      
      <foot></foot>
    </body>
  </div>
</template>

<script>
import AppLogo from './components/AppLogo';
import NavBar from './components/NavBar';
import foot from './components/footer';
import TogglableLogo from '@/components/includes/TogglableLogo';
import TogglableHamburger from '@/components/includes/TogglableHamburger';
import { navItems } from "./data/NavItems";

export default {
  name: 'App',
  components: {
    'app-logo': AppLogo,
    'nav-bar': NavBar,
    'toggolable-logo': TogglableLogo,
    'toggolable-hamburger': TogglableHamburger,
    foot
  },
  data() {
    return {
      navItems
    }
  }
}
</script>

<style src="./assets/app.css"></style>
<style src="./assets/anchor.css"></style>