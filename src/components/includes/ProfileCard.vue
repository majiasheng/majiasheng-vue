<template>
  <div class="card">
    <div class='card-header'><h1>{{ name }}</h1></div>
    <img 
      v-if="thumbNail"
      :src="thumbNail"
      :alt="name"
      style="width:100%"
    >
    <p class="desc" v-html="desc"></p>
    <div class="tech-stack">
      <span v-for="tech in techStack" class="tech" :key="`${name}_${tech}`" href="#"><i>{{ tech }}</i></span> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile-card',
  props: {
    name: String,
    desc: String,
    techStack: Array,
    thumbNail: String
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 0 0 2em 0;
  text-align: center;
  font-family: arial;
}

.desc {
  color: grey;
  font-size: 17px;
}

button, .card-header {
  border: none;
  outline: 0;
  display: inline-block;
  /* padding: 1px; */
  color: white;
  background-color: #2c3e50;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}

.tech-stack {
  overflow: scroll;
  font-size: 1em;
}

.tech-stack > * {
  margin: 0 10px;
}
</style>