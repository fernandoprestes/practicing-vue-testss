import { shallowMount } from '@vue/test-utils';
import AverageBetweenAges from './AverageBetweenAges.vue';

describe('Exercises 3: Average Between Ages', () => {
  const wrapper = shallowMount(AverageBetweenAges);

  test('should component exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should show the message with the names and media', async () => {
    const peopleName1 = wrapper.find('#peopleName1');
    const peopleAge1 = wrapper.find('#peopleAge1');
    const peopleName2 = wrapper.find('#peopleName2');
    const peopleAge2 = wrapper.find('#peopleAge2');
    const button = wrapper.find('#button');

    await peopleName1.setValue('Fernando');
    await peopleAge1.setValue(18);
    await peopleName2.setValue('Maria');
    await peopleAge2.setValue(22);

    await button.trigger('click');

    const Msg = `A idade média de Fernando e Maria é de 20 anos`;
    expect(wrapper.find('#showMessageResult').text()).toBe(Msg);
  });
});
