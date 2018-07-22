<template>  
  <div>
    <ul class="horizontal">
      <!-- <li><img alt="馬" src="../assets/ma.png"></li> -->
      <!-- <navItem v-for="(item, index) in navItems" :key=index a.href=item.url> {{ item.name }} </navItem> -->
      <li v-for="(item, index) in navItems" :key=index><a :href=item.url> {{item.name}} </a></li>
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
  data() {
    return {
      navItems: [
        {name: 'About Me', url:'/about'},
        {name: 'Projects', url:'/project'},
        // {name: 'Résumé', url:'/resume'},
        {name: 'Résumé', url:'https://docs.google.com/document/d/1tCIPE5Rk1F90bj1pWMbSZTzjt1gfVFJQetvSwQtdEmA/edit?usp=sharing'},
      ]
    }
  }
}
</script>

<style src="../assets/navBar.css" scoped>
</style>
