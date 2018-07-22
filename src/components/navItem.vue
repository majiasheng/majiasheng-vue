<template>
  <a :href="url"><li><slot></slot></li></a>
</template>
<script>
export default {
  name: 'navItem',
  data() {
    return {
      url:''
    }
  }
}
</script>
