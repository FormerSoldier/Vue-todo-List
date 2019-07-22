<template>
  <div>
    <InputBar @push="pushList"></InputBar>
    <ol>
      <ListContainer v-for="item in list" :key="item.id" :item = "item"></ListContainer>
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
       list:[]
    }
  },
  components:{
    InputBar,
    ListContainer
  },
  methods:{
    pushList:function(list){
      this.list = list;
    }
  }
}
</script>
