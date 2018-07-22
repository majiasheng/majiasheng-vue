<template>
  <div id="">
      <hd>
      <navBar/>
      <foot/>
  </div>
</template>
<script>
import hd from './components/head';
import navBar from './components/navBar';
import foot from './components/footer';

export default {
  name: projects,
  components: {
    hd,
    navBar,
    foot
  },
  data() {
    projects: [
      {name: 'The Root Project', id:'trp', desc:''},
      {name: 'Reverse Gerrymandering', id:'rgm', desc:''},
      {name: 'Bash Shell', id:'shell', desc:''},
      {name: 'Lawn Mower', id:'lmw', desc:''},
      {name: 'Facebook Clone', id:'fb', desc:''},
      {name: 'Interest Groups', id:'ig', desc:''},
    ]
  }
}
</script>
