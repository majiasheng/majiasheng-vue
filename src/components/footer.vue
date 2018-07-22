<template>
  <footer>
      <!-- <li v-for="(item, index) in items" :key=index v-html="item"></li> -->
    <p>&copy; 2018 majiasheng &emsp; 
      <span>Contact: <a href="mailto:jiasheng.ma@yahoo.com">jiasheng.ma@yahoo.com</a></span>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'foot',
}
</script>
<style>
footer {
  position: fixed;
  bottom: 0px; 
  padding-left: 1em;
  padding-top: 1em;
  padding-bottom: 0.5em;
  border-color: rgb(231, 231, 231);
  width: 100%;
}
</style>

