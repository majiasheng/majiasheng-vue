<template>  
  <div class="nav-bar">
    <ul class="horizontal nav-items">
      <nav-item v-for="(item, index) in navItems" :key="index" :url="item.url">{{ item.name }}</nav-item>
    </ul>
  </div>
</template>

<script>
import NavItem from './NavItem';
export default {
  name: 'nav-bar',
  components: {
    'nav-item': NavItem
  },
  props: {
    url:'',
  },
  data() {
    return {
      navItems: [
        {name: 'About', url:'/about'},
        {name: 'Projects', url:'/projects'},
        {name: 'Résumé', url:'/resume'},
      ],
    }
  }
}
</script>

<style src="../assets/navBar.css" scoped></style>