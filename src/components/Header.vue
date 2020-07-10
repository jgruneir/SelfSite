<template>
<b-container id="contact-container">
  <b-row id="topContactPad"/>
  <b-row>
    <b-col class="contact-side-pad" sm="2"></b-col>
    <b-col sm="8">
      <b-row id="name-container">
          <div class="contact-info">
            <p id="first-name">
              {{firstName}}
            </p>
            <p id="last-name">
              {{lastName}} 
            </p>
          </div>
      </b-row>
      <b-row id="contacts-container">
          <b-col v-if="$mq != 'mobile'" sm="1">
            <b-row class="contact-symbol-row">
              <img class="contact-symbol" alt="location symbol" src="../assets/locationSymbol.png">
            </b-row>
            <b-row class="pad"/>
            <b-row class="contact-symbol-row">
              <img class="contact-symbol" alt="phone symbol" src="../assets/phoneSymbol.png">
            </b-row>
            <b-row class="pad"/>
            <b-row class="contact-symbol-row" id="email-symbol-row">
              <img id="email-symbol" class="contact-symbol" alt="email symbol" src="../assets/emailSymbol.png">
            </b-row>
            <b-row class="pad"/>
            <b-row class="contact-symbol-row" id="git-symbol-row">
              <img id="git-symbol" class="contact-symbol" alt="git symbol" src="../assets/gitSymbol.png">
            </b-row>
          </b-col>
          <b-col id="pad-col" sm="1">
          </b-col>
          <b-col id="contact-info-col" sm="10">
              <b-row class="pad"/>
              <b-row class="contact-info-row">
                <p class="contact-text"> {{addr}} </p>
              </b-row>
              <b-row class="pad"/>
              <b-row class="contact-info-row" id="phone">
                <p class="contact-text"> {{phone}} </p>
              </b-row>
              <b-row class="pad"/>
              <b-row class="contact-info-row" id="email">
                <a :href="`mailto:${email}`" class="contact-text"><u> {{email}} </u></a>
              </b-row>
              <b-row class="pad"/>
              <b-row class="contact-info-row" id="git">
                <a :href="`${git}`" class="contact-text"><u> {{git}} </u></a>
              </b-row>
          </b-col>
      </b-row>
    </b-col>
    <b-col class="contact-side-pad" sm="2"></b-col>
  </b-row>
  <img v-if="$mq === 'desktop'" id="me" src="../assets/me2.jpg"/>
  <img v-else id="me-small" src="../assets/me2.jpg"/>
</b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from "../store/store";

@Component({
  components: {
  },
})
export default class Header extends Vue {
  private fullName: string;
  private firstName: string;
  private lastName: string;
  private git: string;
  private email: string;
  private phone: string;
  private addr: string;

  constructor() {
    super();
    this.fullName = this.$store.state.name;
    this.firstName = this.fullName.split(' ')[0];
    this.lastName = this.fullName.split(' ')[1];
    this.git = this.$store.state.git;
    this.email = this.$store.state.email;
    this.phone = this.$store.state.phone;
    this.addr = this.$store.state.addr;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contact-container {
  position: relative;
  background-color: #003567;
  height: 100%;
  width: 100%;
  padding-bottom: 50px;
}
#topContactPad {
  height: 200px;
}
#pad-col {
  max-width: 20px;
}
#contact-info-col {
  margin-top: -5px;
  max-width: 250px;
}
.contact-info {
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  color: #10c2ba;
  font-size: 50px;
}
#name-container {
  padding-bottom: 20px;
}
.contact-info-row {
  height:30px;
}
#first-name {
 font-weight: 700;
 display: inline;
}
#last-name {
 font-weight: 400;
 display: inline;
}
.contact-symbol-row {
  border-bottom: 1px solid #426983;
}
#email-symbol-row {
  padding-right: 9px;
}
#email-symbol {
  display:block;
  width:500px;
}
#git-symbol-row {
  padding-right: 9px;
}
#phone {
  padding-top: 5px;
}
#email {
  padding-top: 5px;
}
#git {
  padding-top: 8px;
}
.pad {
  height: 10px;
}
.contact-text {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  color: white;
  margin-bottom: 0px;
}
.contact-symbol {
  margin-left: 58%;
  margin-bottom: 5px;
  max-width: 25px;
  height: auto;
}
#contacts-container {
  padding-left: 10px;
}
#me {
  position: absolute;
  right: 5em;
  top: 5em;
  border-radius: 175px;
  width: 350px;
  height: 350px;
}
#me-small {
  position: absolute;
  right: 1em;
  top: 1em;
  border-radius: 75px;
  width: 150px;
  height: 150px;
}
</style>
