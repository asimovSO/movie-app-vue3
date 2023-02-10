<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="flex flex-col-reverse md:flex-row h-screen overflow-hidden">
    <Navbar />
    <div class="overflow-auto py-8 px-6 h-screen flex-grow">
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <keep-alive exclude="MoviePage, FavoritePage, SearchPage">
            <component :is="Component"></component>
          </keep-alive> </Transition
      ></router-view>
    </div>
  </div>
</template>

<style scoped>
body,
html {
  height: 100vh;
  overflow: hidden;
  font-family: "Poppins";
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
