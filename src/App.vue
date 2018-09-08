<template>
  <div id="app">
    <body>
      <div id="wrapper">
      <hd/>
      <!-- <h1>Jia Sheng Ma</h1> -->
      <navBar/>
      <h1>Hello World!</h1>
      <!-- <h1 style="display: inline">Jia Sheng Ma</h1> -->
      </div>
    </body>

    <foot/>
  </div>
</template>

<script>
import hd from './components/head';
import navBar from './components/navBar';
import foot from './components/footer';

export default {
  name: 'App',
  components: {
    hd,
    navBar,
    foot
  }
}
</script>

<style src="./assets/app.css"></style>
