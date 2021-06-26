import Vue from 'vue';
import Vuex from 'vuex';
import filterItem from '../utils/index';

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

        removeItem(state, item){

            let filteredItems = filterItem(state.items, item);
            state.items = filteredItems;

            //remove item da lista completedItems
            if(item.isDone){
                let filteredCompletedItems = filterItem(state.completedItems, item);
                state.completedItems = filteredCompletedItems;
            }
            
            //remove item da lista activeItems
            else{
                let filteredActiveItems = filterItem(state.activeItems, item);
                state.activeItems = filteredActiveItems;
            }
        },

        //troca o status 'isDone' do item 
        toggleIsDoneStatus(state, id){

            let toggledIsDoneItemPosition = state.items.findIndex((item) => {
                return item.id == id;    
            });
            let isDoneStatus = state.items[toggledIsDoneItemPosition].isDone;

            state.items[toggledIsDoneItemPosition].isDone = !isDoneStatus;
        },

        addActiveItem(state,item){
            state.activeItems.push(item);

            //remover da lista de completedItems:
            let filteredCompletedItems = filterItem(state.completedItems, item);
            
            state.completedItems = filteredCompletedItems;
        },

        addCompletedItem(state,item){
            state.completedItems.push(item);

            //remover da lista de activeItems:
            let filteredActiveItems = filterItem(state.activeItems, item);

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