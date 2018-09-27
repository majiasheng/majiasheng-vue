<template>
  <div class="tech-stack">
    <ul class="horizontal">
      <li v-for="(tech,i) in techStack" :key=i>{{ tech }}</li>
    </ul>
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
