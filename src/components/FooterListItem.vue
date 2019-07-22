<template>
    <li>
        <a href="#" class="selected" @click="clickBtn">{{item.filter}}</a>
    </li>
</template>


<script>
    export default{
        props:['item'],
        data:function(){
            
        },
        methods:{
            clickBtn: function(){
                    
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
