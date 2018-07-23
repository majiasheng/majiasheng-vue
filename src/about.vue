<template>
  <div id="app">
    <body>
      <div id="wrapper">
        <hd/>
        <navBar/>
        <span>Full Stack Software Developer</span>
        <p>
          Graduated in May 2018 from Stony Brook University with a B.S. in Computer Science (Cum Laude). <br>
        </p>
        
        <a class="hire-me" href="https://docs.google.com/document/d/1tCIPE5Rk1F90bj1pWMbSZTzjt1gfVFJQetvSwQtdEmA/edit?usp=sharing"><strong>Currently seeking full time opportunities for Fall 2018 and onwards.</strong><span class="ui-icon ui-icon-document"></span></a><br>
        <div>
            <h4>Career Interest</h4>
            <ul class="career-interest">
              <li v-for="(careerInterest, index) in careerInterests" :key=index> {{careerInterest}} </li>
            </ul>
        </div>

        <h2>Personal Side of Me</h2>
        <div>

            <h4>Interests</h4>
            <ul class="interest"> 
              <li v-for="(interest, index) in interests" :key=index> {{interest}} </li>
            </ul>
        </div>

        <div>
            <h4>Facts</h4>
            <ul class="facts">
              <li v-for="(fact, index) in facts" :key=index> {{fact}} </li>

            </ul>
        </div>
      </div>
    </body>

    <foot/>
  </div>
</template>
<script>
import hd from './components/head';
import navBar from './components/navBar';
import foot from './components/footer';

export default {
  name: 'about',
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
      careerInterests: ['Healthcare IT',
                        'Solving existing environmental problems that affects everyday life, such as climate change',
                        "Building practical software that can improve general populations\' living experience.",
                        'Other efforts that benefit the longevity and development of our society.'] ,
      interests:[
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
<style src="./assets/app.css"></style>