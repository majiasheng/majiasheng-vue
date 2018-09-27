<template>
  <div class="toggolable-logo" @click="toggleChange($event)">
    <div class="bar1 bar"></div>
    <div class="bar2 bar"></div>
    <div class="bar3 bar"></div>
    <div class="bar4 bar"></div>
    <div class="bar5 bar"></div>
    <div class="bar6 bar"></div>
    <div class="bar7 bar"></div>
    <div class="bar8 bar"></div>
    <div class="bar9 bar"></div>
    <div class="bar0 bar"></div>
  </div>
</template>

<script>
export default {
  name: "toggolable-logo",
  methods: {
    toggleChange(event) {
      event.target.classList.toggle("change");
    }
  }
};
</script>
<style scoped>
.toggolable-logo {
  position: fixed;
  top: 1em;
  left: 1em;
  display: inline-block;
  cursor: pointer;
}

.bar {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

.bar4 {
  -webkit-transform: rotate(90deg) /*translate(-9px, 6px)*/;
  transform: rotate(90deg) translate(-15px, 0px);
}
.change .bar4 {
  -webkit-transform: rotate(0deg) translate(0px, 0px);
  transform: rotate(0deg) translate(0px, 0px);
}
.bar5 {
  -webkit-transform: translate(0px, -11px);
  transform: translate(0px, -11px);
}
.change .bar5 {
  -webkit-transform: translate(0px, 0px);
  transform: translate(0px, 0px);
}

.bar6 {
  -webkit-transform: rotate(90deg) translate(0px, -20px);
  transform: rotate(90deg) translate(0px, -20px);
}
.change .bar6 {
  -webkit-transform: rotate(0deg) translate(0px, 0px);
  transform: rotate(0deg) translate(0px, 0px);
}

.bar7 {
  -webkit-transform: rotate(90deg) translate(-11px, -9px);
  transform: rotate(90deg) translate(-11px, -9px);
}
.change .bar7 {
  -webkit-transform: rotate(0deg) translate(0px, 0px);
  transform: rotate(0deg) translate(0px, 0px);
}

.bar8 {
  -webkit-transform: rotate(90deg) translate(-22px, 2px);
  transform: rotate(90deg) translate(-22px, 2px);
}
.change .bar8 {
  -webkit-transform: rotate(0deg) translate(0px, 0px);
  transform: rotate(0deg) translate(0px, 0px);
}

.bar9 {
  -webkit-transform: rotate(90deg) translate(-33px, 12px);
  transform: rotate(90deg) translate(-33px, 12px);
}
.change .bar9 {
  -webkit-transform: rotate(0deg) translate(0px, 0px);
  transform: rotate(0deg) translate(0px, 0px);
}

.bar0 {
  -webkit-transform: rotate(90deg) translate(-81px, 15px);
  transform: rotate(90deg) translate(-81px, 15px);
}
.change .bar0 {
  opacity: 0;
}
.change .bar2 {
  opacity: 0;
}
.change .bar4 {
  opacity: 0;
}
.change .bar5 {
  opacity: 0;
}
.change .bar6 {
  opacity: 0;
}
.change .bar7 {
  opacity: 0;
}
.change .bar8 {
  opacity: 0;
}
.change .bar9 {
  opacity: 0;
}
</style>
