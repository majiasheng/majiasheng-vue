<template>  
  <div>
    <ul>
      <li><img alt="馬"></li>
      
    </ul>
  </div>  
    
</template>
  
<script>
// import navItem from './navItem'
export default {

  name: 'navBar',
  data() {
    return {
      navItems: [
        {name: 'About Me', link:'/about'},
        {name: 'Projects', link:'/project'},
        {name: 'Résumé', link:'/resume'},
      ]
    }
  }
}
</script>