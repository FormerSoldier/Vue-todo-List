import Vue from 'vue'
import Vuex from 'vuex'
Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        filter:'ALL'
    },
    getters:{
        getFilter:function(state){
            return state.filter;
        }
    },
    mutations:{
        setFilter:function(state,filter){
            state.filter = filter;
        }
    }
});

export default store;