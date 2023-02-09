<template>
  <div class="sm:flex sm:flex-col-reverse md:flex-row h-screen overflow-hidden">
    <Navbar />
    <div class="overflow-auto py-8 px-6 h-screen flex-grow"><Transition name="fade" mode="out-in"
            >
      <router-view v-slot="{ Component }">
        <keep-alive exclude="MoviePage, FavoritePage">
          <component :is="Component"></component
          >
        </keep-alive>
      </router-view></Transition>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
