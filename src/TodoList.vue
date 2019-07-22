<template>
  <div id="container" class="container">
    <Header></Header>
    <Body></Body>
    <ul id="filters">
      <footer-list-item></footer-list-item>
    </ul>
    
  </div>
</template>

<script>
import Body from './components/Body.vue'
import Header from './components/Header.vue'
import FooterListItem from './components/FooterListItem.vue'

let id = 0;
const getId = ()=> {
  return id++;
}


export default {
  name: 'container',
  components: {
    Header,
    Body,
    FooterListItem
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
 #filters{
     text-align: center;
     margin-bottom: -10px;
     margin-top: 40px;
 
 }
</style>
