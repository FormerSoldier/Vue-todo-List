<template>
  <div id="container" class="container">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Body from './components/Body.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Vue from 'vue'

Vue.prototype.bus = new Vue();
let id = 0;
const getId = ()=> {
  return id++;
}


export default {
  name: 'container',
  components: {
    Header,
    Body,
    Footer
  }

}
</script>

<style>
body {
    font: normal normal 13px/16px "Open Sans", sans-serif;
    background: #ccc;
}
.container {
    padding: 20px;
    width: 400px;
    margin: 0 auto;
    margin-top: 40px;
    background: white;
    border-radius: 5px;
}
</style>
