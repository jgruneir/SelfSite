<template>
<b-container id="contact-container">
  <b-row v-if="$mq != 'mobile'" id="top-container-pad"/>
  <b-row v-else id="small-container-pad"/>
  <b-row>
    <b-col class="contact-side-pad" sm="1"></b-col>
    <b-col sm="3">
        <img class="profile-logo" v-if="$mq === 'desktop'" alt="profile" src="../assets/profile.png">
        <img class="profile-logo-small" v-else-if="$mq === 'tablet'" alt="profile" src="../assets/profile.png">
        <img class="profile-logo-smallest" v-else alt="profile" src="../assets/profile.png">
    </b-col>
    <b-col sm="7">
        <p>Full stack developer with a hand in almost every part of the development process. Have worked on (and enjoyed working on) anything from back-end Java, to front-end React, to DevOps pipelines. Happiest when learning about and implementing new technologies to immediate effect. Below, find some examples of technologies I've worked with, and what I've done with them.</p>
        <p>Aside from professional interests, also passionate about some other ways to spend my time. Traveling both in and out of the U.S. and hiking up tall things is my favorite way to get out. At home, I love to try my hand at new recipes, get into some video games, paint miniatures, and read (mostly reread my favorite series - the Wheel of Time). Gallery below related.</p>
    </b-col>
    <b-col class="contact-side-pad" sm="1"></b-col>
  </b-row>
  <b-row>
      <div id="picture-center">
        <span v-for="(image, imageIndex) in this.images" :key="imageIndex">
            <div v-if="image.active" class="modal" v-on:click="image.active = !image.active">
                <span class="close" v-on:click="image.active = !image.active">&times;</span>
                <img class="modal-content" :src="image.full">
                <div class="caption">{{image.caption}}</div>
            </div>
            <a v-on:click="image.active = !image.active">
                <img class="gallery-image" :src="image.url" :alt="image.alt"/>
            </a>
        </span>
      </div>
  </b-row>
</b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Summary extends Vue {
  private images: Array<Record<string, any>>;

  constructor() {
    super();
    this.images = [
        { url: require('../assets/gallery/dover_tn.jpg'), full: require('../assets/gallery/dover.jpg'), caption: "Cliffs of Dover", alt: 'dover', active: false},
        { url: require('../assets/gallery/ratatouille_tn.jpg'), full: require('../assets/gallery/ratatouille.jpg'), caption: "Ratatouille!", alt: 'ratatouille', active: false},
        { url: require('../assets/gallery/mini_tn.jpg'), full: require('../assets/gallery/mini.jpg'), alt: 'mini', caption: "Figure I painted", active: false},
        { url: require('../assets/gallery/12005_feet_tn.jpg'), full: require('../assets/gallery/12005_feet.jpg'), alt: 'hiking', caption: "Rocky Mountain National Park", active: false}
    ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contact-container {
    background-color: #ffffff;
    height:100%;
    width:100%;
    padding-bottom: 50px;
}
#top-container-pad {
    height: 100px;
}
#small-container-pad {
  height: 50px;
}
.profile-logo {
    margin-bottom: 10px;
}
.profile-logo-small {
    height: auto;
    width: 120px;
    margin-bottom: 10px;
}
.profile-logo-smallest {
    height: auto;
    width: 100px;
    margin-bottom: 10px;
}
#picture-center {
    width: 75%;
    margin: auto;
}
.gallery-image {
    width: 150px;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
    margin-right: 15px;
    margin-left: 15px
}
.gallery-image:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
}
.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}
@keyframes zoom {
    from {transform: scale(0.1)} 
    to {transform: scale(1)}
}
.modal-content, .caption {  
    animation-name: zoom;
    animation-duration: 0.6s;
}
.caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
}
.modal {
    position: fixed; 
    z-index: 1;
    padding-top: 100px; 
    top: 0;
    width: 100%;
    height: 100%;
    display:block;
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.9); 
}
.modal-content {
    margin: auto;
    display: block;
    width: auto;
    max-width: 700px;
    max-height: 700px;
}
a {
    cursor: pointer;
}
</style>
