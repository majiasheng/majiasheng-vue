<template>
  <a><router-link :to="url" class="nav-item"><slot></slot></router-link></a>
</template>
<script>
export default {
  name: 'nav-item-hamburger',
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
  border-radius: 0.2em;
  padding-left: 0.2em;
  padding-right: 0.2em;
}
</style>