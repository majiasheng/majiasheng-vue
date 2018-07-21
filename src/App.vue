<template>
  <div id="app">
    <img src="./assets/logo.png">
    <navBar/>

  </div>
</template>

<script>
import navBar from './components/navBar';
import stuffs from './components/stuffs';
import saucer from './components/footer';

export default {
  name: 'App',
  components: {
    navBar,
    stuffs,
    saucer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
