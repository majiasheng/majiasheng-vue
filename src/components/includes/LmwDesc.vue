<template>
  <div class="desc">
    A effort to collect learning topics and present them in a hierachical order 
    (top-down) to give learners an overview of topics.<br/>
    I like to compare my way of learning a large topic 
    to solving a jigsaw puzzle:
    <table>
      <tr>
        <td>Skim through the contents of the topic</td>
        <td>Familiarize with the overall picture of the puzzle</td>
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
td {
  padding-left: 1em;
  padding-top: 1em;
}

</style>


