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
import Vue from 'vue'

export default {
  name: 'Body',
  data: function(){
    return {
       list:[],
       filterType: 'ALL',
       filterList:[]
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
    listItemChange: function(item,index){
      Vue.set(this.list,index,item);
      this.filterListMethod();
    }
  },
  mounted: function(){
    let this_ = this;
    this.bus.$on('change',function(filter){
      this_.filterType = filter;
      this_.filterListMethod();
    });
  }
}
</script>
