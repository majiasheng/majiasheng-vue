<template>
  <ul class="project-images">
    <li v-for="img in images" :key="img.id">
      <img :src="img.location" :alt="img.name">
    </li>
  </ul>
</template>
<script>
export default {
  name: 'project-images',
  props: {
    images: Array
  }
}
</script>
<style scoped>
img {
  min-width: 200px;
  max-width: 550px;
  margin-top: 1em;
}
ul {
  padding-left: 0px;
}
</style>
