<template>  
  <div>
    <ul>
      <!-- <li><img alt="馬" src="../assets/ma.png"></li> -->
      <navItem v-for="(item, index) in navItems" :key=index :href=item.url> {{ item.name }} </navItem>
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
        {name: 'Résumé', url:'/resume'},
      ]
    }
  }
}
</script>