import {createLocalVue, shallowMount} from '@vue/test-utils';
import Vuex from 'vuex';
import TodoListItem from '@/components/TodoListItem.vue';
import Item from '@/Item.js';

function mountTodoListItemWrapper(store, localVue){
    let mountedWrapper = shallowMount(TodoListItem, {
        store,
        localVue,
        propsData: {
            item: new Item('texto qualquer')
        }
    });

    return mountedWrapper;
}

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TodoListItem.vue', () => {
    
    let store;
    let mutations;

    beforeEach(() => {

        mutations = {
            removeItem: jest.fn(),
            addActiveItem: jest.fn(),
            addCompletedItem: jest.fn(),
            toggleIsDoneStatus: jest.fn()
        };
        
        store = new Vuex.Store({
            mutations
        });

    });

    it('verifica se o item foi removido da lista', async () => {
        const wrapper = mountTodoListItemWrapper(store, localVue);

        await wrapper.find('button').trigger('click');

        expect(mutations.removeItem).toHaveBeenCalledWith(
            {},
            {"done": false, "id": 0, "text": "texto qualquer"}
        );

    });

    it('verifica se o item foi adicionado à lista de activeItems', async () => {
        const wrapper = mountTodoListItemWrapper(store, localVue);
        
        await wrapper.setData({
            isDone: true
        });

        const checkbutton = wrapper.find('.checkButton');
        await checkbutton.trigger('click');

        expect(mutations.addActiveItem).toHaveBeenCalled();
    });

    it('verifica se o item foi adicionado à lista de completedItems', async () => {
        const wrapper = mountTodoListItemWrapper(store, localVue);
        
        await wrapper.setData({
            isDone: false
        });

        const checkbutton = wrapper.find('.checkButton');
        await checkbutton.trigger('click');

        expect(mutations.addCompletedItem).toHaveBeenCalled();
    });

    it('verifica se o status do item foi alterado', async () => {
        const wrapper = mountTodoListItemWrapper(store, localVue);

        const checkbutton = wrapper.find('.checkButton');
        await checkbutton.trigger('click');

        expect(mutations.toggleIsDoneStatus).toHaveBeenCalled();
    });

})