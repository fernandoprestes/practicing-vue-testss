import { shallowMount } from '@vue/test-utils';
import GroceryCashier from './GroceryCashier.vue';

describe('Exercises 4: Grocery Cashier', () => {
  const wrapper = shallowMount(GroceryCashier);
  test('should component exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  const price = wrapper.find('#price');
  const amount = wrapper.find('#amount');
  const payment = wrapper.find('#payment');
  const button = wrapper.find('#button');

  test('must show that there is no money', async () => {
    await price.setValue(10);
    await amount.setValue(2);
    await payment.setValue(18);
    await button.trigger('click');
    const Msg = 'Não pode comprar, ainda falta R$ 2';
    expect(wrapper.find('#showMessage').text()).toBe(Msg);
  });

  test('must show change in cash', async () => {
    await price.setValue(8);
    await amount.setValue(2);
    await payment.setValue(25);
    await button.trigger('click');
    const Msg = 'Você pode comprar, e seu troco é de R$ 9';
    expect(wrapper.find('#showMessage').text()).toBe(Msg);
  });

  test('must accept the transaction', async () => {
    await price.setValue(8);
    await amount.setValue(2);
    await payment.setValue(16);
    await button.trigger('click');
    const Msg = 'Obrigado! O pagamento está correto';
    expect(wrapper.find('#showMessage').text()).toBe(Msg);
  });
});
