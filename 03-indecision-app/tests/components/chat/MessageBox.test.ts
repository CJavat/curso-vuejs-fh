import { mount } from '@vue/test-utils';
import MessageBox from '@/components/chat/MessageBox.vue';
describe('<MessageBox />', () => {
  const wrapper = mount(MessageBox);

  test('Renders input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  test('Emits sendMessage event when button is clicked with message value', async () => {
    const message = 'Hola Mundo';

    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')).toBeTruthy();
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);

    expect(wrapper.vm.message).toBe('');
  });

  test('Emits sendMessage event when keypress.enter is triggered with message value', async () => {
    const message = 'Hola Mundo';
    const input = wrapper.find('input');
    await input.setValue(message);
    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
  });

  test('No emits sendMessage event when keypress.enter is triggered with message value is empty', async () => {
    const wrapper = mount(MessageBox);
    const input = wrapper.find('input');

    await input.trigger('keypress.enter');
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')).toBeFalsy();
  });
});
