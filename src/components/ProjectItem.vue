<template>
  <li :id="project.id">
    <h3 class="proj-name">{{ project.name }}</h3>
    <div class="proj-desc">
      {{ project.desc }}
    </div>
    <div class="tech-stack">
      <ul class="horizontal">
        <li v-for="(tech,i) in project.techStack" :key=i>{{ tech }}</li>
      </ul>
    </div>
  </li>  
</template>
<script>
export default {
  name: 'project-item',
  props: {
    project: {
      name: '', 
      id: '', 
      desc: '', 
      link: '',
      techStack: [],
      images: []
    }
  }
}
</script>
