<script setup>
import {  ChevronRightIcon } from "@heroicons/vue/24/solid";

defineProps({
  title: {
    type: String,
    default: "404 title",
  },
  poster: {
    type: String,
    default:
      "https://variety.com/wp-content/uploads/2022/06/Puss-in-Boots-The-Last-Wish.jpg?w=681&h=383&crop=1",
  },
});
</script>

<template>
  <div class="mb-8">
    <div class="flex items-center mb-6">
      <h1 class="block text-3xl font-semibold"><span>🔥</span>Trending</h1>
      <router-link to="/home"
        ><component
          :is="ChevronRightIcon"
          class="h-6 block font-semibold text-rose-600"
      /></router-link>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="movie-card rounded relative w-full " >
        <img :src="poster" alt="" class="rounded object-cover h-full w-full" />
        <h2
          class="
            p-3
           
            absolute
            bottom-0
            text-2xl
            font-medium
            
            w-full
            rounded-b
          "
        >
          {{ title }}
        </h2>
      </div>
      <div class="movie-card rounded relative w-full">
        <img :src="poster" alt="" class="rounded object-cover h-full w-full" />
        <h2
          class="
            p-3
            bg-slate-600/25
            absolute
            bottom-0
            text-2xl
            font-medium
            backdrop-blur-sm
            w-full
            rounded-b
          "
        >
          {{ title }}
        </h2>
      </div>
    </div>
  </div>
</template>