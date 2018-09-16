<template>
  <!-- <li><a :href="url" class="nav-item"><slot></slot></a></li> -->
  <li><a><router-link :to="url" class="nav-item"><slot></slot></router-link></a></li>
</template>
<script>
export default {
  name: 'navItem',
  props: {
    url:'',
  }
}
</script>
<style scoped>
a:hover {
  background: #36465D;
  color: white;
}

.nav-item {
  border-radius: 0.1em;
  padding-left: 0.2em;
  padding-right: 0.2em;
}

</style>