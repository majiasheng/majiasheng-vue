<template>
  <footer>
      <!-- <li v-for="(item, index) in items" :key=index v-html="item"></li> -->
    <p>
      <span>&copy; 2018 majiasheng</span>
      &emsp; 
      <span><a href="mailto:jiasheng.ma@yahoo.com">jiasheng.ma@yahoo.com</a></span>
      &emsp; 
      <span><a href="https://github.com/majiasheng">Github</a></span>
      &emsp;
      <span><a href="https://www.linkedin.com/in/majiasheng/">LinkedIn</a></span>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'foot',
}
</script>
<style scoped>
footer {
  margin-left: 1em;
  border-color: rgb(231, 231, 231);
  width: 100%;
}
</style>

