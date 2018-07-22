<template>
  <footer>
      <!-- <li v-for="(item, index) in items" :key=index v-html="item"></li> -->
    <p>&copy; 2018 majiasheng &emsp; Contact: 
        <a href="mailto:jiasheng.ma@yahoo.com"><span class="ui-icon ui-icon-mail-open"></span></a>jiasheng.ma@yahoo.com
    </p>
  </footer>
</template>

<script>
export default {
  name: 'foot',

  data() {
    return {
      items: [
        `&copy; ${new Date().getFullYear()} majiasheng`,
        'Contact: jiasheng@yahoo.com',
        '<a href=""></a>'
      ]
    }
  }
}
</script>
