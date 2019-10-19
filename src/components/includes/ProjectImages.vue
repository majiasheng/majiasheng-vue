<template>
  <div>
    <ul class="project-images">
      <li v-for="img in images" :key="img.id">
        <img :src="img.location" :alt="img.name">
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  components: {

  },
  name: 'project-images',
  props: {
    images: Array
  },
  mounted() {
    this.imageObjs = this.images.map((image) => {
      return {
        thumb: image.location,
        src: image.location,
        caption: image.name
      };
    });
  },
  data() {
    return {
      // index: null,
      imageObjs: []
    }
  },
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
