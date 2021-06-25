import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        items: [],

        activeItems: [],
        showActiveItems: false,
       
        completedItems: [],
        showCompletedItems: false
    },

    mutations: {

        addItem(state, payload){
            state.items.push(payload.item);

            //Assim que adicionar um novo item automaticamente
            //ele passa a ser parte dos itens ativos (activeItems)
            state.activeItems.push(payload.item);
        },

        removeItem(state, id){
            let filteredItems = state.items.filter((item) =>{
                return item.id != id;
            })

            state.items = filteredItems;
        },

        addActiveItem(state,item){
            state.activeItems.push(item);

            //remover da lista de activeItems:
            let filteredCompletedItems = state.completedItems.filter((it) => {
                return it.id != item.id ;
            })

            state.completedItems = filteredCompletedItems;
        },

        addCompletedItem(state,item){
            state.completedItems.push(item);

            //remover da lista de activeItems:
            let filteredActiveItems = state.activeItems.filter((it) => {
                return it.id != item.id ;
            })

            state.activeItems = filteredActiveItems;
        },

        showAllItems(state){
            state.showCompletedItems = false;
            state.showActiveItems = false;
        },

        showActiveItems(state){
            if(!state.showActiveItems){

                state.showCompletedItems = false;
                state.showActiveItems = true;

            }
        },

        showCompletedItems(state){
            if(!state.showCompletedItems){

                state.showActiveItems = false;
                state.showCompletedItems = true;
            }
        }
    },

    getters:{
        getActiveItems(state){
            let orderedActiveItems = state.activeItems.sort((a,b) => {
                return a.id - b.id;
            });

            return orderedActiveItems;
        },

        getCompletedItems(state){
            let orderedCompletedItems = state.completedItems.sort((a,b) => {
                return a.id - b.id;
            });

            return orderedCompletedItems;
        },


    }
})