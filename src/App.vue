<template>
  <div id="app">
    <body>
      <toggolable-logo></toggolable-logo>
      <div id="wrapper">
        <nav-bar></nav-bar>
        <div class="content-container">
          <div class="placeholder"></div>
          <div class="content-wrapper">
            <router-view></router-view>
          </div>
          <div class="placeholder"></div>
        </div>
      </div>
      <!-- <foot></foot> -->
    </body>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import foot from './components/footer';
import TogglableLogo from '@/components/includes/TogglableLogo';

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar,
    'toggolable-logo': TogglableLogo,
    foot
  }
}
</script>

<style src="./assets/app.css"></style>
<style src="./assets/anchor.css"></style>