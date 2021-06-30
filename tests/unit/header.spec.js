import { shallowMount } from '@vue/test-utils' ;
import Header from '@/components/Header.vue';

test('Verifica o conteúdo do Header', () => {
    const headerWrapper = shallowMount(Header);
    expect(headerWrapper.text()).toContain('Todo List');
})