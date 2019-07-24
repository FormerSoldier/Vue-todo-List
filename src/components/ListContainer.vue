<template>
  <div> 
    <li :class="[checked]">
      <input type="checkbox" v-model="check_status"  @click="clickCheckBox" />
      <span ref="span"
            @dblclick="doubleClick" 
            :contenteditable="isEdit"
            @keydown.enter="saveVlue">{{item.value}}</span>
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
      check_status: this.item.finished,
      isEdit: false,
      val: this.item.value
    }
  },
  methods:{
    clickCheckBox: function(){
       this.checked = this.checked === 'checked' ? '' : 'checked';
       this.item.finished = !this.item.finished;
       this.$emit('itemClickCheckBox',this.item,this.idx);
    },
    doubleClick:function(){
      this.isEdit = true;
    },
    saveVlue:function(){
        this.isEdit = false;
        // 改变item.value
        this.item.value = this.$refs.span.innerHTML;
        this.$emit('itemClickCheckBox',this.item, this.item.id);
    }
  },
  

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

#ipt{
  background:#fff;
  border:none;
}
</style>
