<template>
  <div id="about">
    <button @click="toggleSummarize">{{ btnText }}</button>
    <div class="summary" :hidden="doNotWantSummary">
      <ul>
        <about-summary v-for="(s, index) in summaries" :key="index" > {{ s }} </about-summary>
      </ul>
    </div>
    
    <div class="about" :hidden="!doNotWantSummary">
      <span>Full Stack Software Developer</span>
      <p>
        B.S. in Computer Science / Cum Laude (Stony Brook University Class of 2018)<br>
      </p>
      <!-- <p>
      </p> -->

      <a id="hire-me" href="https://docs.google.com/document/d/1tCIPE5Rk1F90bj1pWMbSZTzjt1gfVFJQetvSwQtdEmA/edit?usp=sharing">∎ Seeking full time opportunities for fall 2018 and onwards.<span class="ui-icon ui-icon-document"></span></a><br>
      <div>
          <h2>Career Interest</h2>
          <ul class="career-interest">
            <li v-for="(careerInterest, index) in careerInterests" :key=index> {{careerInterest}} </li>
          </ul>
      </div>

      <div>
          <h2>Interests</h2>
          <ul class="interest"> 
            <li v-for="(interest, index) in interests" :key=index v-html="interest"></li>
          </ul>
      </div>

      <div>
          <h2>Facts</h2>
          <ul class="facts">
            <li v-for="(fact, index) in facts" :key=index> {{fact}} </li>

          </ul>
      </div>
    </div>
  </div>
</template>
<script>
import hd from './head';
import navBar from './navBar';
import foot from './footer';
import summary from './Summary';

export default {
  name: 'about',
  components: {
    hd,
    navBar,
    foot,
    'about-summary': summary,
  },
  methods: {
    toggleSummarize() {
      this.doNotWantSummary=!this.doNotWantSummary;
      this.btnText = this.doNotWantSummary?this.btnText_full:this.btnText_summary;
    }
  },
  data() {
    return {
      btnText_summary: 'Give me a summary already',
      btnText_full: 'I want to see more',
      btnText: 'Give me a summary already',
      doNotWantSummary: true,
      summaries: [
        'Fitness enthusiast',
        'Software developer',
        'Knowledge lover',
        'Plant lover',
        'Art lover',
      ],
      contact: {
        email: 'jiasheng.ma@yahoo.com',
      },
      careerInterests: ['Healthcare IT',
                        'Help solve existing environmental problems that affects everyday life through software.',
                        "Build practical software that can improve general populations\' living experience.",
                        'Other efforts that benefit the longevity and development of our society.'
                      ],
      interests:[
        'Workout (calisthenics, weight training) <button id="notice" title="Unofficial squat record holder for weight class of 130lb at SBU Rec Center: 300lb (As of May 2018)">!</button>',
        'Care for plants'
      ],
      facts: [
        'Optimistic.',
        'Like plants.',
        'Like to organize.',
        'Like to help people.',
        'Like things to be succinct.',
        'Enjoyed making this website.',
        'Enjoy gaining new knowledge.',
        'Appreciate art, design, knowledge, humor, and many more.',
        'Have a genuine excited feeling about planning/designing and writing new software.',
      ]
    }
  }
}
</script>
<style src="../assets/app.css"></style>
<style src="../assets/about.css"></style>