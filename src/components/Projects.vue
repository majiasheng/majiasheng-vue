<template>
  <div class="projects">
    <ul id="projects-list">
      <li :id="projects.trp.id">
        <project-item-top :projectName="projects.trp.name"></project-item-top>
        <trp-desc></trp-desc>
        <project-item-bottom :techStack="projects.trp.techStack"></project-item-bottom>
      </li>
      <li :id="projects.twtr.id">
        <project-item-top :projectName="projects.twtr.name"></project-item-top>
        <twtr-desc></twtr-desc>
        <project-item-bottom :techStack="projects.twtr.techStack"></project-item-bottom>
      </li>
      <li>
        <project-item-top></project-item-top>
        <project-item-bottom></project-item-bottom>
      </li>
      <li>
        <project-item-top></project-item-top>
        <project-item-bottom></project-item-bottom>
      </li>
      <li>
        <project-item-top></project-item-top>
        <project-item-bottom></project-item-bottom>
      </li>
      <li>
        <project-item-top></project-item-top>
        <project-item-bottom></project-item-bottom>
      </li>
    </ul>
  </div>
</template>
<script>
import ProjectItemTop from '@/components/includes/ProjectItemTop';
import ProjectItemBottom from '@/components/includes/ProjectItemBottom';
import TrpDesc from '@/components/includes/TrpDesc';
import TwtrDesc from '@/components/includes/TwtrDesc';
import * as projects from '../data/projects'
export default {
  name: 'Projects',
  components: {
    'project-item-top': ProjectItemTop,
    'project-item-bottom': ProjectItemBottom,
    'trp-desc': TrpDesc,
    'twtr-desc': TwtrDesc,

  },
  data() {
    return {
      projects: projects
    }
  }
}
</script>
<style src="../assets/projects.css" scoped></style>