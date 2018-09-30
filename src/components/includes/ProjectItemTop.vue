<template>
  <h3 class="proj-name">{{ projectName }}<br/><span class="date-or-status">{{ dateOrStatus }}</span></h3>
</template>
<script>
export default {
  name: 'project-item-top',
  props: {
    projectName: '',
    dateOrStatus: ''
  }
}
</script>
<style scoped>
.date-or-status {
  font-size: 0.8em;
  font-weight: 100;
}
</style>
