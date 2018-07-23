<template>
  <div id="app">
      <body>
        <div id="wrapper">
          <hd/>
          <navBar/>
          <ul id="projects-list">
            <li v-for="(project,index) in projects" :key=index :id=project.id>
              <h2>{{ project.name }}</h2>
              <!-- <hr/> -->
              <div class="proj-desc">
                {{ project.desc }}
              </div>
            </li>
          </ul>
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
  name: 'projects',
  components: {
    hd,
    navBar,
    foot
  },
  data() {
    return {
      projects: [
        {name: 'The Root Project', id:'trp', desc:''},
        {name: 'Reverse Gerrymandering', id:'rgm', desc:''},
        {name: 'Bash Shell', id:'shell', desc:''},
        {name: 'Lawn Mower', id:'lmw', desc:''},
        {name: 'Facebook Clone', id:'fb', desc:''},
        {name: 'Interest Groups', id:'ig', desc:''},
      ]
    }
  }
}
</script>
<style src="./assets/app.css"></style>
<style src="./assets/projects.css" scoped></style>