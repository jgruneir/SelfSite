<template>
<b-container id="contact-container">
  <b-row v-if="$mq != 'mobile'" id="top-container-pad"/>
  <b-row v-else id="small-container-pad"/>
  <b-row>
    <b-col class="contact-side-pad" sm="1"></b-col>
    <b-col sm="3">
        <img v-if="$mq === 'desktop'" id="tech-skills" alt="skills" src="../assets/techSkills.png">
        <img v-else id="tech-skills-small" alt="skills" src="../assets/techSkills.png">
    </b-col>
    <b-col sm="1"/>
    <b-col sm="6">
        <p class="header-text">Languages / Frameworks</p>
        <b-row>
            <Skill class="skillButton" v-for="skill in skills" :name="skill.name" :key="skill.name"></Skill>
        </b-row>
        <b-row id="skills-pad"/>
        <p class="header-text">Software / Tools</p>
        <b-row>
            <Skill class="skillButton" v-for="tool in tools" :name="tool.name" :key="tool.name"></Skill>
        </b-row>
    </b-col>
    <b-col class="contact-side-pad" sm="1"></b-col>
  </b-row>
</b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from "../store/store";
import SkillObject from "../structs/SkillObject";
import Skill from "./Skill.vue";

@Component({
    components: {
        Skill
    }    
})
export default class Skills extends Vue {
  private skills: Array<SkillObject>;
  private tools: Array<SkillObject>;
  constructor() {
    super();
    this.skills = this.$store.state.skills;
    this.tools = this.$store.state.tools;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contact-container {
    background-color: #0ea099;
    height: 100%;
    width: 100%;
    padding-bottom: 50px;
}
#top-container-pad {
    height: 100px;
    size: 50%;
}
#small-container-pad {
    height: 50px;
}
.skillButton {
    margin: 2px 10px;
}
#tech-skills {
    width: 200px;
    height: auto;
}
#tech-skills-small {
    width: 120px;
    height: auto;
    margin-bottom: 15px; 
}
.header-text {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-size: 13.5px;
    font-weight: 500;
    color: white;
    padding-bottom: 5px;
    border-bottom: 1px solid #13ddd3;
}
#skills-pad {
    height:20px;
}
</style>
