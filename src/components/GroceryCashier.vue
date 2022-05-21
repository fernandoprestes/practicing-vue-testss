<script setup>
  import { reactive, ref } from 'vue';
  const product = reactive({
    price: null,
    amount: null,
    total: null,
  });

  const payment = ref(0);
  const message = ref(null);

  const handleClick = () => {
    const { price, amount } = product;
    product.total = price * amount;
    showMessage();
  };

  const showMessage = () => {
    if (payment.value < product.total) {
      const diff = product.total - payment.value;
      message.value = `Não pode comprar, ainda falta R$ ${diff}`;
      return;
    }
    if (payment.value > product.total) {
      const diff = payment.value - product.total;
      message.value = `Você pode comprar, e seu troco é de R$ ${diff}`;
      return;
    }
    message.value = `Obrigado! O pagamento está correto`;
    return;
  };
</script>
<template>
  <div class="w-64 rounded-xl bg-slate-200 p-4 shadow">
    <div class="flex flex-col items-center justify-center gap-2">
      <label for="price">
        <span>Preço unitário</span>
        <input
          id="price"
          v-model="product.price"
          type="text"
          name="price"
          placeholder="R$ 00.00"
          class="w-full px-2"
        />
      </label>
      <label for="amount">
        <span>Quantidade</span>
        <input
          id="amount"
          v-model="product.amount"
          type="text"
          name="amount"
          placeholder="00"
          class="w-full px-2"
        />
      </label>
      <label for="payment">
        <span>Dinheiro recebido</span>
        <input
          id="payment"
          v-model="payment"
          type="text"
          name="payment"
          placeholder="R$ 00.00"
          class="w-full px-2"
        />
      </label>
    </div>
    <button
      id="button"
      class="my-4 w-full rounded-md bg-blue-400 py-1"
      @click="handleClick"
    >
      Calcular
    </button>
    <div
      v-if="message"
      id="showMessage"
    >
      {{ message }}
    </div>
  </div>
</template>
