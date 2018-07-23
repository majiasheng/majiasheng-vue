<template>
  <li><a :href="url" class="nav-item"><slot></slot></a></li>
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
