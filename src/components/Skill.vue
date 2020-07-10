<template>
<div class="parent">
    <b-button data-aos="flip-left" class="skill-button" variant="dark" >{{ name }}</b-button>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from "../store/store";

@Component
export default class Skill extends Vue {
  @Prop() private name!: string;

  constructor() {
    super()
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#info {
    position: absolute;
    bottom: 40px;
    background-color: #ffdce0;
    border-color: #cea0a5;
    z-index: 10;
    display: block;
    padding: 5px 8px;
    margin: 4px;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    min-width: 150px;
}
.skill-button {
    background-color: #0b7570;
    border: none;
    border-radius: 20px;
    font-size: 13px;
}
.parent {
    position: relative;
}
</style>
