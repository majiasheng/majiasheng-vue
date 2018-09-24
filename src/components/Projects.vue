<template>
  <div class="projects">
    <ul id="projects-list">
      <project-item v-for="(project,index) in projects" :key=index :project="project"></project-item>
    </ul>
  </div>
</template>
<script>
import ProjectItem from './ProjectItem';
import { projects } from '../data/projects'
export default {
  name: 'Projects',
  components: {
    'project-item': ProjectItem,
  },
  data() {
    return {
      projects: projects
    }
  }
}
</script>
<style src="../assets/projects.css" scoped></style>