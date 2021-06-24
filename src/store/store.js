import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        items: []
    },

    mutations: {
        addItem(state, payload){
            state.push(payload.user);
        }
    }
})