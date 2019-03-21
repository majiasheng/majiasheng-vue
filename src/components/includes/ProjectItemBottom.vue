<template>
  <div class="tech-stack">
    <ul class="horizontal">
      <li>⚙️</li>
      <li v-for="(tech,i) in techStack" :key=i>{{ tech }}</li>
    </ul>
    <hr>
  </div>
</template>
<script>
export default {
  name: 'project-item-bottom',
  props: {
    techStack: Array
  }
}
</script>
<style scoped>
ul {
  padding-left: 0;
}
li {
  display: inline;
  margin-right: 1em;
}
.tech-stack {
  margin-top: 1em;
}
</style>

