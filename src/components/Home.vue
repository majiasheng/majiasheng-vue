<template>
  <div class="home">
    <div class="typewriter">
      <h1 id="hello-world">> Hello World! </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-page',
}
</script>
<style scoped>
h1 {
  font-size: 300%;
}
.typewriter {
  text-align: center;
}
.typewriter h1 {
  /* Ensures the content is not revealed until the animation */
  overflow: hidden; 
  /* The typwriter cursor */
  border-right: .05em solid silver; 
  /*  Keeps the content on a single line  */
  white-space: nowrap; 
  /* Gives that scrolling effect as the typing happens */
  /* margin: 0 auto;  */

  animation: 
    typing 4s steps(50, end), 
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: silver; }
}
</style>
