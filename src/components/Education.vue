<template>
<b-container id="contact-container">
  <b-row id="top-container-pad"/>
  <b-row>
    <b-col class="contact-side-pad" sm="1"></b-col>
    <b-col sm="10">
        <p id="education-header"> EDUCATION </p>
        <b-row id="education-pad"/>
        <b-row>
            <b-col data-aos="fade-down" class="education-section" sm="6">
                <b-container class="education-section-container">
                    <p class="education-text"><b class="education-text-bold">University of Connecticut</b>, Storrs, CT</p>
                    <p class="education-text">Bachelor of Science in Engineering, May 2018</p>
                    <p class="education-text">Major: Computer Science and Engineering</p>
                    <p class="education-text">Minor: Mathematics</p>
                    <p class="education-text">GPA: 3.83/4.00, Honor's Program, Dean's List</p>
                </b-container>
            </b-col>
            <b-col data-aos="fade-down" class="education-section" sm="6">
                <b-container class="education-section-container">
                    <p class="education-text"><b class="education-text-bold">Relevant Coursework:</b> Object Oriented Design and
                    <p class="education-text">Programming, Data Structures and Algorithms, Theory</p>
                    <p class="education-text">of Computation, Algorithms and Complexity, Principles</p>
                    <p class="education-text">of Databases, Computer Security, Systems</p>
                    <p class="education-text">Programming, Computer Networks, Big Data Analytics</p>
                </b-container>
            </b-col>
        </b-row>
    </b-col>
    <b-col class="contact-side-pad" sm="1"></b-col>
  </b-row>
</b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from "../store/store";

@Component({
  components: {
  },
})
export default class Education extends Vue {
  constructor() {
    super();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contact-container {
    background-color: #fbfbfb;
    height: 100%;
    width: 100%;
    padding-bottom: 50px;
}
#top-container-pad {
    height: 50px;
}
#education-header {
    margin: auto;
    width: 50%;
    text-align: center;
    color: #003567;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-size: 30px;
}
#education-pad {
    height: 30px;
}
.education-section {
    padding: 0;
}
.education-section-container {
    border-left: 3px solid #10c1b9;
}
.education-text {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-size: 13px;
    font-weight: 500;
}
.education-text-bold {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-size: 13.5px;
    font-weight: 800;
}
</style>
