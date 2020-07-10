<template>
<b-container id="contact-container">
  <b-row v-if="$mq != 'mobile'" id="top-container-pad"/>
  <b-row v-else id="small-container-pad"/>
  <b-row>
    <b-col class="contact-side-pad" sm="1"></b-col>
    <b-col sm="3">
        <img class="work-symbol" v-if="$mq === 'desktop'" alt="work experience" src="../assets/workSymbol.png">
        <img class="work-symbol-small" v-else alt="work experience" src="../assets/workSymbol.png">
    </b-col>
    <b-col sm="1">
    </b-col>
    <b-col sm="6" class="experience-container">
        <span class="year">
            Present
        </span>
        <img v-if="$mq != 'mobile'" class="dot" src="../assets/circle.png">
         <p class="work-header"><b>Optum, </b>Boston, MA</p>
         <div v-for="(work, workIndex) in workExperience" :key="workIndex">
            <span v-if="workIndex > 0" class="year">
                {{Math.max.apply(Math, work.dates.split(' ').filter(word => !isNaN(word)).map(number => parseInt(number)))}}
            </span>
            <p class="work-title">{{work.title}}, {{work.dates}} </p>
            <b-row v-for="(detail, detailIndex) in work.details" :key="detailIndex">
                <b-col v-if="$mq != 'mobile'" sm="1" class="bullet-col">
                    <img data-aos="zoom-out" data-aos-duration="250" src="../assets/RightCaret.svg" alt="caret" width="18" height="18"/>
                </b-col>
                <b-col sm="11" class="work-details-col">
                    <ul class="list-group-flush work-details">
                        <li data-aos="zoom-out" data-aos-duration="250" class="list-group-item">
                            {{detail}}
                        </li>
                    </ul>
                </b-col>
            </b-row>
         </div>      
    </b-col>
    <b-col class="contact-side-pad" sm="1"></b-col>
  </b-row>
</b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from "../store/store";
import WorkExperienceObject from "../structs/WorkExperienceObject";

@Component({
    components: {
        
    }    
})
export default class Experience extends Vue {
    private workExperience: Array<WorkExperienceObject>;
  constructor() {
    super();
    this.workExperience = this.$store.state.workExperience;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contact-container {
    background-color: white;
    height: 100%;
    width: 100%;
}
#top-container-pad {
    height: 100px;
    size: 50%;
}
#small-container-pad {
    height: 50px;
}
.work-symbol {
    width: 200px;
    height: auto;
}
.work-symbol-small {
    width: 120px;
    height: auto;
    margin-bottom: 15px;
}
.experience-container {
    border-left: 2px solid #f5f5f5;
}
.year {
    position: absolute;
    left: -80px;
    padding: 5px;
    background-color: #003567;
    border-radius: 20px;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-size: 13px;
    font-weight: 500;
    min-width: 65px;
    text-align: center;
}
.dot {
    position: absolute;
    left: -11px;
    top: -7px;
    padding-top: 10px;
    padding-bottom: 5px;
    padding-left: 0px;
    background-color: white;
}
.work-header {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-size: 20px;
    font-weight: 500;
}
.work-title {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-size: 18px;
    font-weight: 400;
    color: #4ab8b3;
}
.work-details {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    padding-left: 0px;
    color: #777777;
}
.work-details-col {
    padding-left: 0px;
}
.bullet-col {
    padding: 0px;
    color: white;
    text-align: right;
}
.list-group-item {
    padding-left: 10px;
    padding-top: 2px;
}
.grey {
    color: white;
}
</style>
