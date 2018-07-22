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
    return {
      contact: {
        email: 'jiasheng.ma@yahoo.com',
      },
      careerInterests: ['career interests'],
      interest:[
        'Workout (calisthenics, weight training)',
        'Care for plants'
      ],
      facts: [
        'Enjoyed making this website.',
        'Enjoy gaining new knowledge.',
        'Like things to be succinct.',
        'Like to organize.',
        'Like plants.',
        'Like to help people.',
        'Appreciate art, design, knowledge, good jokes, good actions.',
        'Have a genuine excited feeling about planning/designing and writing new software.',
      ]
    }
  }
}
</script>
