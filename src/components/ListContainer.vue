<template>
  <div> 
    <li :class="[checked]">
      <input type="checkbox" v-model="check_status"  @click="clickCheckBox" />{{item.value}}
    </li>
  </div>
</template>

<script>

export default {
  name: 'ListContainer',
  props:['item','idx'],
  data:function(){
    return {
      checked: this.item.finished === true? 'checked' :'',
      check_status: this.item.finished
    }
  },
  methods:{
    clickCheckBox: function(){
       this.checked = this.checked === 'checked' ? '' : 'checked';
       this.item.finished = !this.item.finished;
       this.$emit('itemClickCheckBox',this.item,this.idx);
    }
  }

}
</script>

<style>
ol {
    padding-left: 20px;
}

ol li {
    padding: 5px;color:#000;
}

ol li span{
    word-break:break-all; 
    width: 70%;
}

ol li:nth-child(even){
    background: #f4ecec;
}

li:hover{
  cursor: pointer;
 }

 .checked {
    color: #999;
    text-decoration: line-through;
}

input[type=checkbox].done-todo { 
	
    margin: 5px 5px 2px 0; 
}
</style>
