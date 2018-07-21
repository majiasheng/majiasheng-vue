<template>
  <footer>
    <ul>
      <!-- <li v-for="ftrContent in ftrContents"> {{ftrContent}} </li> -->
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'saucer', // calling it saucer because it holds a draining pot 

  data() {
    return {
      ftrContents: [
        'footer content 1',
        'footer content 2',
        'footer content 3',

      ]
    }
  }
}
</script>
