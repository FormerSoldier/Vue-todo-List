<template>
  <div>
    <input type="text" class="input-text" v-model="inputValue" @keydown.enter="addItem"/>
    <button id="button" @click="addItem">Add</button>
  </div>
</template>

<script>


let id = 0;
const getId = ()=>{
  return id++;
}

export default {
  name: 'InputBar',
  data:function(){
      return {
          inputValue: '',
          list:[]
      }
  },
  methods: {
      addItem: function(){
        this.list.push({
          value: this.inputValue,
          finished: false,
          id:getId()
        });

        this.inputValue = '';
        this.$emit('push',this.list);
      }
  }
}
</script>
<style>
.input-text {
    width: 70%;
    padding: 4px 15px 4px 0;
}   
#button{
display: inline-block;
background-color:#fc999b;
color:#ffffff;
border-radius: 5px;
text-align:center;
margin-top:2px;
padding: 5px 15px;
}

#button:hover{
cursor: pointer;
opacity: .8;
}
</style>