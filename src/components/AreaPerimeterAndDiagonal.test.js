import { shallowMount } from '@vue/test-utils';
import AreaPerimeterAndDiagonal from './AreaPerimeterAndDiagonal.vue';

describe('Exercises 1: Price of land', () => {
  const wrapper = shallowMount(AreaPerimeterAndDiagonal);
  const baseRectangle = wrapper.find('#baseRectangle');
  const heightRectangle = wrapper.find('#heightRectangle');
  const button = wrapper.find('#button');

  test('should component exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should calc area of rectangle', async () => {
    await baseRectangle.setValue(3);
    await heightRectangle.setValue(4);
    await button.trigger('click');
    expect(wrapper.find('#areaResult').text()).toBe('12.0000');
  });

  test('should calc perimeter of rectangle', async () => {
    await baseRectangle.setValue(10);
    await heightRectangle.setValue(5);
    await button.trigger('click');
    expect(wrapper.find('#perimeterResult').text()).toBe('30.0000');
  });

  test('should calc diagonal of rectangle', async () => {
    await baseRectangle.setValue(4);
    await heightRectangle.setValue(3);
    await button.trigger('click');
    expect(wrapper.find('#diagonalResult').text()).toBe('5.0000');
  });
});
