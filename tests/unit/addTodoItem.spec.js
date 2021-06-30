import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import AddTodoItem from '@/components/AddTodoItem.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('AddTodoItem.vue', () => {
    
    let store;
    let mutations;

    beforeEach(() => {
        mutations = {
            addItem: jest.fn()
        };

        store = new Vuex.Store({
            mutations
        })
    });

    it('Faz o commit de uma Mutation se o input estiver preenchido', async () => {
        const wrapper = shallowMount(AddTodoItem, {store, localVue})
        
        const input = wrapper.find('input');
        input.element.value = 'Texto Qualquer';

        await input.trigger('input');
        await wrapper.find('button').trigger('click');

        expect(mutations.addItem).toHaveBeenCalled();
    });

    it('NÃO faz o commit de uma mutation se o input estiver VAZIO', async () => {
        const wrapper = shallowMount(AddTodoItem, {store, localVue})
        
        const input = wrapper.find('input');
        input.element.value = '';

        await input.trigger('input');
        await wrapper.find('button').trigger('click');

        expect(mutations.addItem).not.toHaveBeenCalled();
    
    });

    it('Reseta o valor do input ao commitar a mutation', async() =>  {
        const wrapper = shallowMount(AddTodoItem, {store, localVue})
        
        const input = wrapper.find('input');
        input.element.value = 'Texto Qualquer';

        await input.trigger('input');
        await wrapper.find('button').trigger('click');

        expect(wrapper.vm.inputText).toBe('');
    })
})