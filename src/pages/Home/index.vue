<template>
  <div class="container flex h-screen justify-center py-10">
    <div class="flex w-full flex-col md:flex-row">
      <div class="w-full p-4 md:w-1/2">
        <router-link
          to="/"
          class="font-bold text-white"
          >Home</router-link
        >
        <h2 class="text-center text-xl">Lista de exercicios</h2>
        <ul class="flex flex-col">
          <router-link to="/price-of-land">01. O preço de um terreno</router-link>
          <router-link to="/area-perimeter-and-diagonal">02. Area, perimetro e diagonal</router-link>
        </ul>
      </div>
      <div class="flex w-full items-center justify-center p-4 md:h-[100vh-40px] md:w-1/2">
        <div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="css">
  .router-link-active.router-link-exact-active {
    color: #fff;
  }
</style>
