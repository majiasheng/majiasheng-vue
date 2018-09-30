<template>
  <footer>
    <div>
      <span>&copy; {{ year }} majiasheng</span>&emsp;
      <ul class="horizontal">
        <!-- <span><a href="mailto:jiasheng.ma@yahoo.com">jiasheng.ma@yahoo.com</a></span> -->
        <li><a href="mailto:jiasheng.ma@yahoo.com"><img src="../../static/close-envelope.svg" width="14px"/></a></li>&emsp; 
        <!-- <span><a href="https://github.com/majiasheng">Github</a></span> -->
        <li><a href="https://github.com/majiasheng"><img src="../../static/github.svg" width="14px"/></a></li>&emsp;
        <!-- <span><a href="https://www.linkedin.com/in/majiasheng/">LinkedIn</a></span> -->
        <li><a href="https://www.linkedin.com/in/majiasheng/"><img src="../../static/linkedin.svg" width="14px"/></a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'foot',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style scoped>
footer {
  position: fixed;
  bottom: 1em;
  left: 1em;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
ul li {
  display: inline;
}
</style>

