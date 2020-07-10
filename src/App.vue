<template>
<b-container id="app">
      <Header/>
      <Summary/>
      <Education/>
      <Skills/>
      <Experience/>
      <span id="copyright"><b>&copy; 2020 Jared Gruneiro</b></span>
</b-container>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import Summary from './components/Summary.vue';
import Education from './components/Education.vue';
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueMq from 'vue-mq';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue)
Vue.use(VueMq, {
  breakpoints: {
    mobile: 576,
    bigMobile: 768,
    tablet: 992,
    desktop: Infinity,
  }
})

@Component({
  components: {
    Header,
    Skills,
    Summary,
    Education,
    Experience
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color:white;
  padding-left:0px;
  padding-right:0px;
  margin-bottom:75px;
  max-width: 1000px;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-size: 15px;
}

#copyright {
  margin: 8px;
}

body {
  background-color: rgb(7, 5, 39);
}

</style>
