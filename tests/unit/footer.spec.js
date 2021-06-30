import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';

test('Verifica conteúdo do Footer', () => {
    
    const footerWrapper = mount(Footer);
    expect(footerWrapper.text()).toContain('Feito para testar o Vuex!!!');
})