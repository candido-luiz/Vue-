import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        items: []
    },

    mutations: {
        addItem(state, payload){
            state.items.push(payload.item);
        },

        removeItem(state, id){
            let filteredItems = state.items.filter((item) =>{
                return item.id != id;
            })

            state.items = filteredItems;
        }
    }
})