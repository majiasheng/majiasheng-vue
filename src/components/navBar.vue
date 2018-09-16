<template>  
  <div class="nav-bar">
    <ul class="horizontal">
      <!-- <li><img alt="馬" src="../assets/ma.png"></li> -->
      <navItem v-for="(item, index) in navItems" :key="index" :url="item.url"> {{ item.name }} </navItem>
      <!-- <router-link v-for="(item, index) in navItems" :key="index" :to="item.url"><a class="nav-item"> {{item.name}} </a></router-link> -->
      <li v-for="(item, index) in links" :key="index"><a :href="item.url" class="nav-item"> {{item.name}} </a></li>
    </ul>
  </div>
    
</template>

<script>
import navItem from './navItem';
export default {
  name: 'navBar',
  components: {
    navItem
  },
  props: {
    url:'',
  },
  data() {
    return {
      navItems: [
        {name: 'About Me', url:'/about'},
        {name: 'Projects', url:'/projects'},
        // {name: 'Résumé', url:'/resume'},
      ],
      links:[ {name: 'Résumé', url:'https://docs.google.com/document/d/1tCIPE5Rk1F90bj1pWMbSZTzjt1gfVFJQetvSwQtdEmA/edit?usp=sharing'},]
    }
  }
}
</script>

<style src="../assets/navBar.css" scoped></style>