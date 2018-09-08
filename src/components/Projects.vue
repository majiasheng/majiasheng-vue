<template>
  <div id="projects">
    <ul id="projects-list">
      <li v-for="(project,index) in projects" :key=index :id=project.id>
        <h2>{{ project.name }}</h2>
        <!-- <hr/> -->
        <div class="proj-desc">
          {{ project.desc }}
        </div>
        <div class="tech-stack">
          <ul class="horizontal">
            <li v-for="(tech,i) in project.techStack" :key=i>{{ tech }}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {name: 'The Root Project', id:'trp', desc:'', techStack:[]},
        {name: 'Twitter Clone', id:'twtr', desc:'', techStack:['Nginx', 'Node.js', 'MongoDB', 'Cassandra', 'RabbitMQ']},
        {name: 'Reverse Gerrymandering', id:'rgm', desc:'', techStack:['Java', 'SpringMVC', 'MySQL', 'JPA']},
        {name: 'Bash Shell', id:'shell', desc:'', techStack:['C']},
        {name: 'Lawn Mower', id:'lmw', desc:'', techStack:['MIPS Assembly']},
        {name: 'Facebook Clone', id:'fb', desc:'', techStack:['PHP', 'MySQL']},
        {name: 'Interest Groups', id:'ig', desc:'', techStack:['Java']},
      ]
    }
  }
}
</script>
<style src="../assets/app.css"></style>
<style src="../assets/projects.css" scoped></style>