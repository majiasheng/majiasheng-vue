<template>
  <div id="app">
    <hd/>
    <!-- <h1>Jia Sheng Ma</h1> -->
    <navBar/>

    <body>
      Hello World
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1em;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration-style: none;
  /* background-color:  */
}
a:link, a:visited {
  color: inherit;
}
a:active {
  color: cornflowerblue;
}
</style>
