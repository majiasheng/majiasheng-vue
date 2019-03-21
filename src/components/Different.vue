<template>
  <div id="parent">
    <div id="child">different</div>
  </div>
</template>
<script>
export default {
  name: 'different-page'
}
</script>
<style scoped>
#parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 500px;
  /* background: yellow; */
}

#child {
  width: 100px;
  height: 100px;
  /* background: silver; */
  text-align: center;
}
</style>
