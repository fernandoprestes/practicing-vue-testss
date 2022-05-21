import { shallowMount } from '@vue/test-utils';
import PriceOfLand from './PriceOfLand.vue';

describe('Exercises 1: Price of land', () => {
  const wrapper = shallowMount(PriceOfLand);
  test('should component exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should calc area of land', async () => {
    const landWidth = wrapper.find('#landWidth');
    await landWidth.setValue(10);

    const landCompliment = wrapper.find('#landCompliment');
    await landCompliment.setValue(10);

    const button = wrapper.find('#button');
    await button.trigger('click');

    expect(wrapper.find('#resultArea').text()).toBe('100.00');
  });
});
