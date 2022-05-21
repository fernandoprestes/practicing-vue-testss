<script setup>
  import { computed, reactive, ref } from 'vue';

  const people1 = reactive({
    name: null,
    age: null,
  });

  const people2 = reactive({
    name: null,
    age: null,
  });

  const average = ref(0);

  const AverageAges = () => {
    const sumOfAges = Number(people1.age) + Number(people2.age);
    average.value = sumOfAges / 2;
  };

  const handleClick = () => {
    AverageAges();
  };

  const showMessageResult = computed(() => {
    if (!average.value) return;
    return `A idade média de ${people1.name} e ${people2.name} é de ${average.value} anos`;
  });
</script>
<template>
  <div class="w-64 rounded-xl bg-slate-200 p-4 shadow">
    <div class="flex flex-col items-center justify-center gap-2">
      <label for="peopleName1">
        <span>Nome da pessoa 1</span>
        <input
          id="peopleName1"
          v-model="people1.name"
          type="text"
          name="peopleName1"
          placeholder="Nome"
          class="w-full px-2"
        />
      </label>
      <label for="peopleAge1">
        <span>Idade da pessoa 1</span>
        <input
          id="peopleAge1"
          v-model="people1.age"
          type="text"
          name="peopleAge1"
          placeholder="00"
          class="w-full px-2"
        />
      </label>
      <label for="peopleName2">
        <span>Nome da pessoa 2</span>
        <input
          id="peopleName2"
          v-model="people2.name"
          type="text"
          name="peopleName2"
          placeholder="Nome"
          class="w-full px-2"
        />
      </label>
      <label for="peopleAge2">
        <span>Idade da pessoa 2</span>
        <input
          id="peopleAge2"
          v-model="people2.age"
          type="text"
          name="peopleAge2"
          placeholder="00"
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
      <p id="showMessageResult">{{ showMessageResult }}</p>
    </div>
  </div>
</template>
