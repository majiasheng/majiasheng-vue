<template>
  <div class="card">
    <h1>{{ name }}</h1>
    <img 
      v-if="thumbNail"
      :src="thumbNail"
      :alt="name"
      style="width:100%"
    >
    <p class="desc" v-html="desc"></p>
    <div class="tech-stack" style="margin: 1em 0;">
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
  max-width: 80%;
  /* min-height: ; */
  margin: auto;
  padding: 0.5em;
  text-align: center;
  font-family: arial;
}

.desc {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
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
  overflow: auto
}

.tech-stack > * {
  margin: 0 10px;
}
</style>