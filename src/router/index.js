import Vue from 'vue';
import Router from 'vue-router';
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Different from '@/components/Different';
import Blank from '@/components/BlankPage';
Vue.use(Router);

export default new Router({
  mode: 'history',
  hash: false,
  routes:[
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/resume',
      beforeEnter() {location.href = 'https://docs.google.com/document/d/1tCIPE5Rk1F90bj1pWMbSZTzjt1gfVFJQetvSwQtdEmA/edit?usp=sharing'}
    },
    { path: '/different', component: Different },
    { path: '/blank', component: Blank },
  ]
});
