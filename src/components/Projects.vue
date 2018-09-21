<template>
  <div id="projects">
    <ul id="projects-list">
      <project-item v-for="(project,index) in projects" :key=index :project="project"></project-item>
    </ul>
  </div>
</template>
<script>
import ProjectItem from './ProjectItem';
export default {
  name: 'Projects',
  components: {
    'project-item': ProjectItem,
  },
  data() {
    return {
      projects: [
        {name: 'The Root Project', id:'trp', desc:'', link: '', techStack:[]},
        {name: 'Twitter Clone', id:'twtr', desc:'', link: '', techStack:['Nginx', 'Node.js', 'MongoDB', 'Cassandra', 'RabbitMQ']},
        {name: 'Reverse Gerrymandering', id:'rgm', desc:'', link: '', techStack:['Java', 'SpringMVC', 'MySQL', 'JPA']},
        {name: 'Bash Shell', id:'shell', desc:'', link: '', techStack:['C']},
        {name: 'Lawn Mower', id:'lmw', desc:'', link: '', techStack:['MIPS Assembly']},
        {name: 'Facebook Clone', id:'fb', desc:'', link: '', techStack:['PHP', 'MySQL']},
        {name: 'Interest Groups', id:'ig', desc:'', link: '', techStack:['Java']},
      ]
    }
  }
}
</script>
<style src="../assets/projects.css" scoped></style>