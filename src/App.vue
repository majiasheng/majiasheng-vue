<template>
  <div id="app">
    <body>
      <div id="wrapper">
        <span id="logo"><a href="/"><img src="../static/logo.png"></a></span>
        <nav-bar></nav-bar>
        <div class="grid-container">
          <div class="grid-item"></div>
          <div id="contents" class="grid-item">
            <router-view></router-view>
          </div>
          <div class="grid-item"></div>
        </div>
      </div>
    </body>
    <foot/>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import foot from './components/footer';

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar,
    foot
  }
}
</script>

<style src="./assets/app.css"></style>
<style scoped>
#logo {
  position: fixed;
  top: 1em;
  left: 1em;
}

#contents {
  position: relative;
  top: 2.5em;
}
</style>

