<template>
  <div class="container flex h-screen items-center justify-center">
    <div class="flex w-full flex-col justify-center md:flex-row">
      <div class="w-full p-4 md:w-1/2">
        <router-link
          to="/"
          class="font-bold text-white"
          >Home</router-link
        >
        <h2 class="text-center text-xl">Lista de exercicios</h2>
        <ul class="flex flex-col">
          <router-link to="/price-of-land">01. O preço de um terreno</router-link>
        </ul>
      </div>
      <div class="flex w-full justify-center p-4 md:w-1/2">
        <router-view />
      </div>
    </div>
  </div>
</template>
