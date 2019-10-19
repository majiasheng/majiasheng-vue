<template>
  <div class="projects">
    <profile-card 
      v-for="(project, id) in projects"
      :name="project.name"
      :desc="project.desc"
      :techStack="project.techStack"
      :key="id"
      :thumbNail="project['thumbNail']"
    />
  </div>
</template>
<script>
import ProfileCard from '@/components/includes/ProfileCard';
import projects from '@/data/projects';
export default {
  name: 'Projects',
  components: {
    'profile-card': ProfileCard,
  },
  data() {
    return {
      projects: projects
    }
  }
}
</script>
<style scoped>
.projects > * {
  margin: 20px 0;
}
</style>
