import {createLocalVue, shallowMount} from '@vue/test-utils';
import SideBar from '@/components/SideBar.vue';
import Vuex from 'vuex';

const localVue = createLocalVue()
localVue.use(Vuex);

describe('SideBar.vue', () => {
    let store;
    let mutations;

    beforeEach(() => {

        mutations = {
            showAllItems: jest.fn(),
            showActiveItems: jest.fn(),
            showCompletedItems: jest.fn()
        }

        store = new Vuex.Store({
            mutations
        })
    });

    it('verifica se a mutation "showAllitems" é chamada', async () => {
        const wrapper = shallowMount(SideBar, {
            store,
            localVue
        });

        await wrapper.find('#showAllItems').trigger('click');

        expect(mutations.showAllItems).toHaveBeenCalled();
    });

    it('verifica se a mutation "showActiveItems" é chamada', async () => {
        const wrapper = shallowMount(SideBar, {
            store,
            localVue
        });

        await wrapper.find('#showActiveItems').trigger('click');

        expect(mutations.showActiveItems).toHaveBeenCalled();
    });

    it('verifica se a mutation "showCompletedItems" é chamada', async () => {
        const wrapper = shallowMount(SideBar, {
            store,
            localVue
        });

        await wrapper.find('#showCompletedItems').trigger('click');

        expect(mutations.showCompletedItems).toHaveBeenCalled();
    });

})