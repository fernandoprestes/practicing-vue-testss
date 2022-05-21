<!--
  Descrição: Fazer um programa para ler as medidas da base e altura de um retângulo.
  Em seguida, mostrar o valor da área, perímetro e a diagonal deste retângulo, com quatro casas decimais.
 -->
<script setup>
  import { computed, reactive } from 'vue';

  const rectangle = reactive({
    base: null,
    heigh: null,
    area: 0,
    perimeter: 0,
    diagonal: 0,
  });

  const handleClick = () => {
    rectangle.area = rectangle.base * rectangle.heigh;
    rectangle.perimeter = (rectangle.base + rectangle.heigh) * 2;
    rectangle.diagonal = Math.hypot(rectangle.base, rectangle.heigh);
  };

  const showAreaResult = computed(() => {
    return rectangle.area.toFixed(4);
  });

  const showPerimeterResult = computed(() => {
    return rectangle.perimeter.toFixed(4);
  });

  const showDiagonalResult = computed(() => {
    return rectangle.diagonal.toFixed(4);
  });
</script>
<template>
  <div class="w-64 rounded-xl bg-slate-200 p-4 shadow">
    <div class="flex flex-col items-center justify-center gap-2">
      <label for="baseRectangle">
        <span>Base do retângulo</span>
        <input
          id="baseRectangle"
          v-model="rectangle.base"
          type="number"
          name="baseRectangle"
          placeholder="00.0"
          class="w-full px-2"
        />
      </label>
      <label for="heightRectangle">
        <span>Altura do retângulo</span>
        <input
          id="heightRectangle"
          v-model="rectangle.heigh"
          type="number"
          name="heightRectangle"
          placeholder="00.0"
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
        Área: <span id="areaResult">{{ showAreaResult }}</span>
      </p>
      <p>
        Perímetro: <span id="perimeterResult">{{ showPerimeterResult }}</span>
      </p>
      <p>
        Diagonal: <span id="diagonalResult">{{ showDiagonalResult }}</span>
      </p>
    </div>
  </div>
</template>
