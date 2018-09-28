<template>
  <div class="desc">
    A effort to collect learning topics and present them in a hierachical order 
    (top-down) to give learners an overview of topics.<br/>
    I like to compare my way of learning a topic/tool, take for instance, Vue.js, 
    to solving a jigsaw puzzle:
    <table>
      <tr>
        <th>Learning Vue.js</th>
        <th>Solving jigsaw puzzle</th>
      </tr>
      <tr>
        <td>Skim through the table of contents and the actual contents to have a basic idea of the topics in Vue.js </td>
        <td>Take a mental picture of the puzzle, and be mindful of the composition and structures</td>
      </tr>
      <tr>
        <td>Start from section to section (may not follow a strict order)</td>
        <td>Pick a (pseudorandom) piece to start with, build parts around it; switch to another piece and repeat</td>
      </tr>
      <tr>
        <td>Associate each section with one another</td>
        <td>Join different parts together to form the whole picture</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "trp-desc"
};
</script>
<style scoped>
th, td {
  padding-left: 1em;
  padding-top: 1em;
}

</style>


