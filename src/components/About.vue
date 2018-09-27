<template>
  <div class="about">
    <!-- <h1 class="name">Ma, Jia Sheng</h1> -->
    <button class="summary-toggle" @click="toggleSummarize">{{ btnText }}</button>
    <div class="summary" :hidden="doNotWantSummary">
      I like to dabble in different things.
      <ul>
        <about-summary v-for="(summary, index) in summaries" :key="index" > {{ summary }} </about-summary>
      </ul>
    </div>
    <div class="detailed-about" :hidden="!doNotWantSummary">
      <h3>Full Stack Software Developer</h3>
      <h3>Graduated <i>Cum Laude</i> from Stony Brook University in 2018 with a BS in Computer Science</h3>

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
          <!-- <h2>Facts</h2>
          <ul class="facts">
            <li v-for="(fact, index) in facts" :key=index> {{fact}} </li>
          </ul> -->
      </div>
    </div>
  </div>
</template>
<script>
import summary from './Summary';

export default {
  name: 'about',
  components: {
    'about-summary': summary,
  },
  methods: {
    toggleSummarize() {
      this.doNotWantSummary=!this.doNotWantSummary;
      this.btnText = this.doNotWantSummary?this.btnText_summary:this.btnText_full;
    }
  },
  data() {
    return {
      doNotWantSummary: false,
      btnText_summary: '∑', // 'Give me a summary already',
      btnText_full: '∫',//'Tell me more',
      btnText: '∫',// 'Tell me more',
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
    }
  }
}
</script>
<style scoped>
.summary-toggle {
  position: absolute;
  top:0;
  left:0;
}

.name {
  font-family: 'Times New Roman', Times, serif;
  font-size: 6vw;
  width: 100vw;
  text-align: center;
  white-space: nowrap;
  margin: 0;
}
#hire-me {
  background: #2c3e50;
  color:white;
}
a#hire-me:hover {
  font-weight: bold;
}
.red {
  color: #990000;
}
</style>