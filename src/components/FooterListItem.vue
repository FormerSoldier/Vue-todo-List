<template>
    <ul id="filters">
      <li v-for="item in btnGroup" :key = "item.id">
        <a href="#" class="selected">{{item.filter}}</a>
      </li>
    </ul>
</template>

<script>
let id = 0;
const getId = ()=>{
  return id++;
}
export default {
  name: 'Footer',
  data:function(){
    return {
      btnGroup: [{filter:'ALL',isSelected:false,id:getId()},
      {filter:'Active',isSelected:false,id:getId()},
      {filter:'Complete',isSelected:false,id:getId()}]
    }
  }
}
</script>

<style>


#filters li a {
    color: #fc999b;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
}

#filters li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
}
#filters li a.selected, #filters li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
}

#filters li {
	display: inline;
	margin: 0 0 5px 0;
	padding: 8px;
	list-style: none;
    outline: none;
 }
</style>