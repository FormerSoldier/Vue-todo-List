<template>
  <div>
    <InputBar @push="pushList"></InputBar>
    <ol>
      <ListContainer v-for="(item,index) in filterList"
                     :key="item.id" 
                     :item = "item"
                     :idx ="index"
                     @itemClickCheckBox="listItemChange"></ListContainer>
    </ol>
  </div>
</template>

<script>
import InputBar from "./InputBar.vue"
import ListContainer from "./ListContainer.vue"

export default {
  name: 'Body',
  data: function(){
    return {
       list:[],
       filterType: this.$store.getters.getFilter,
       filterList:[]
    }
  },
  watch:{
      "$store.state.filter": function(){
        this.filterType = this.$store.getters.getFilter;
        this.filterListMethod();
      }
  },
  components:{
    InputBar,
    ListContainer
  },
  methods:{
    filterListMethod: function(){
      if(this.filterType === 'Active'){
        this.filterList =  this.list.filter((item) => !item.finished);
      }else if(this.filterType === 'Complete'){
        this.filterList = this.list.filter((item) => item.finished);
      }else{
        this.filterList = this.list;
      }
    },
    pushList:function(list){
      this.list = list;
      this.filterListMethod();
    },
    listItemChange: function(item,id){
      let index = 0;
      for(let i = 0; i < this.list.length; i++)
        if(this.list[i].id == id)
          index = i;
      this.$set(this.list,id,item);
      this.filterListMethod();
    }
  }
}
</script>
