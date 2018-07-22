<template>
  <li><a :href="url"><slot></slot></a></li>
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
