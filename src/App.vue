<template>
  <div id="app">
    <img src="./assets/ma.png">
    <navBar/>
    <contents/>
    <foot/>
  </div>
</template>

<script>
import navBar from './components/navBar';
import contents from './components/content';
import foot from './components/footer';

export default {
  name: 'App',
  components: {
    navBar,
    contents,
    foot
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
