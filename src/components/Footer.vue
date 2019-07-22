<template>
  <div>
    <ul id="filters">
      <footer-list-item v-for="item in btnGroup" :key="item.id" :item ="item"></footer-list-item>
    </ul>
  </div>
</template>

<script>
import FooterListItem from './FooterListItem.vue';
let id = 0;
const getId = ()=>{
  return id++;
};


export default {
  name: 'Footer',
  data:function(){
    return {
      btnGroup: [{filter:'ALL',isSelected:false,id:getId()},
      {filter:'Active',isSelected:false,id:getId()},
      {filter:'Complete',isSelected:false,id:getId()}]
    }
  },
  components:{
    FooterListItem
  }
}
</script>

<style>
 #filters{
     text-align: center;
     margin-bottom: -10px;
     margin-top: 40px;
 
 }

</style>