<template>
  <div class="about">
    <h1 class="name">Ma, Jia Sheng</h1>
    <button class="summary-toggle" @click="toggleSummarize">{{ btnText }}</button>
    <div class="summary" :hidden="doNotWantSummary">
      <ul class="about-summary">
        <about-summary v-for="(summary, index) in summaries" :key="index" > {{ summary }} </about-summary>
      </ul>
    </div>
    <div class="detailed-about" :hidden="!doNotWantSummary">
      <ul class="about-detail">
        <li>
          Nothing more to see, yet :)
        </li>
      </ul>
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
      btnText_summary: '∑',
      btnText_full: '∫',
      btnText: '∫',
      summaries: [
        'Software Engineer',
        'Fitness enthusiast',
        'Knowledge lover',
      ],
      contact: {
        email: 'jiasheng.ma@yahoo.com',
      },
    }
  }
}
</script>
<style scoped>
ul.about-summary, ul.about-detail {
  padding-left: 0;
}

.summary-toggle {
  position: absolute;
  top:0;
  left:0;
}

.name {
  /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */
  /* font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; */
  font-size: 6vw;
  /* font-weight: 100; */
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
h3 {
  font-weight: 150;
}

ul li {
  margin-bottom:0.5em; 
}
</style>