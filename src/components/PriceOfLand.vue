<!--
  Descrição: Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular com uma casa decimal,
  bem como o valor (R$) do metro quadrado do terreno com duas casas decimais. Em seguida, o programa deve mostrar o valor
  da área do terreno, bem como o valor do preço do terreno, ambos com duas casas decimais.
-->
<script setup>
  import { computed, reactive, ref } from 'vue';

  const land = reactive({
    width: null,
    compliment: null,
    price: null,
  });

  const landArea = ref(0);
  const landPrice = ref(0);

  const handleClick = () => {
    landArea.value = land.width * land.compliment;
    landPrice.value = land.price * landArea.value;
  };

  const formatMoney = computed(() => {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
    return formatter.format(landPrice.value);
  });

  const formatResultArea = computed(() => {
    const areaFixedNumber = landArea.value.toFixed(2);
    const areaNumberFormatted = areaFixedNumber;
    return areaNumberFormatted;
  });
</script>
<template>
  <div class="w-64 rounded-xl bg-slate-200 p-4 shadow">
    <div class="flex flex-col items-center justify-center gap-2">
      <label for="landWidth">
        <span>Largura do terreno</span>
        <input
          id="landWidth"
          v-model="land.width"
          type="text"
          name="landWidth"
          placeholder="00.0m²"
          class="w-full px-2"
        />
      </label>
      <label for="landCompliment">
        <span>Comprimento do terreno</span>
        <input
          id="landCompliment"
          v-model="land.compliment"
          type="text"
          name="landCompliment"
          placeholder="00.0m²"
          class="w-full px-2"
        />
      </label>
      <label for="landPrice">
        <span>Preço por m²</span>
        <input
          id="landPrice"
          v-model="land.price"
          type="text"
          name="landPrice"
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
    <div>
      <p>
        Área do terreno: <span id="resultArea">{{ formatResultArea }}</span>
      </p>
      <p>
        Preço do terreno: <span id="resultMoney">{{ formatMoney }}</span>
      </p>
    </div>
  </div>
</template>
