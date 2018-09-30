<template>
  <div class="projects">
    <ul id="projects-list">
      <li :id="projects.trp.id">
        <project-item-top :projectName="projects.trp.name" :dateOrStatus="projects.trp.dateOrStatus"></project-item-top>
        <trp-desc></trp-desc>
        <project-item-bottom :techStack="projects.trp.techStack"></project-item-bottom>
      </li>
      <li :id="projects.twtr.id">
        <project-item-top :projectName="projects.twtr.name" :dateOrStatus="projects.twtr.dateOrStatus"></project-item-top>
        <twtr-desc></twtr-desc>
        <project-item-bottom :techStack="projects.twtr.techStack"></project-item-bottom>
      </li>
      <li :id="projects.rgm.id">
        <project-item-top :projectName="projects.rgm.name" :dateOrStatus="projects.rgm.dateOrStatus"></project-item-top>
        <rgm-desc></rgm-desc>
        <project-item-bottom :techStack="projects.rgm.techStack"></project-item-bottom>
      </li>
      <li :id="projects.fb.id">
        <project-item-top :projectName="projects.fb.name" :dateOrStatus="projects.fb.dateOrStatus"></project-item-top>
        <fb-desc></fb-desc>
        <project-item-bottom :techStack="projects.fb.techStack"></project-item-bottom>
      </li>
      <li :id="projects.jcd.id">
        <project-item-top :projectName="projects.jcd.name"  :dateOrStatus="projects.jcd.dateOrStatus"></project-item-top>
        <jcd-desc></jcd-desc>
        <project-item-bottom :techStack="projects.jcd.techStack"></project-item-bottom>
      </li>
      <li :id="projects.lmw.id">
        <project-item-top :projectName="projects.lmw.name"  :dateOrStatus="projects.lmw.dateOrStatus"></project-item-top>
        <lmw-desc></lmw-desc>
        <project-item-bottom :techStack="projects.lmw.techStack"></project-item-bottom>
      </li>
      
    </ul>
  </div>
</template>
<script>
import ProjectItemTop from '@/components/includes/ProjectItemTop';
import ProjectItemBottom from '@/components/includes/ProjectItemBottom';
import TrpDesc from '@/components/includes/TrpDesc';
import TwtrDesc from '@/components/includes/TwtrDesc';
import RgmDesc from '@/components/includes/RgmDesc';
import FbDesc from '@/components/includes/FbDesc';
import JcdDesc from '@/components/includes/JcdDesc';
import LmwDesc from '@/components/includes/LmwDesc';
import * as projects from '../data/projects';
export default {
  name: 'Projects',
  components: {
    'project-item-top': ProjectItemTop,
    'project-item-bottom': ProjectItemBottom,
    'trp-desc': TrpDesc,
    'twtr-desc': TwtrDesc,
    'rgm-desc': RgmDesc,
    'fb-desc': FbDesc,
    'jcd-desc': JcdDesc,
    'lmw-desc': LmwDesc,
  },
  data() {
    return {
      projects: projects
    }
  }
}
</script>
<style src="../assets/projects.css" scoped></style>