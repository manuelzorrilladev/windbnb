<script setup>
import Navbar from './components/Navbar.vue'
import Content from './components/Content.vue'
import { ref } from 'vue';


const overlay = ref(false)

function overlayHandler (){
  overlay.value = !overlay.value
}




</script>

<template>
  <Navbar :overlay="overlay" @overlay-handler="overlayHandler"/>
  <div class="main" :class="overlay?'overlay':'none'">
    <Content/>
  </div>
</template>

<style scoped>
.main{
  transition: 0.3s
}
.overlay{
  filter: blur(20px);
}



</style>