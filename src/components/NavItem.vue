<template>
  <li><a><router-link :to="url" class="nav-item"><slot></slot></router-link></a></li>
</template>
<script>
export default {
  name: 'nav-item',
  props: {
    url:'',
  }
}
</script>
<style scoped>
li:before {
	content: "⬈"; /* ⬈↳»‣► */
  font-size: 58%;
  padding-right: 1em;
}
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