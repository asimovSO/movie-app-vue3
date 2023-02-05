<script setup>
import { ChevronRightIcon, StarIcon } from "@heroicons/vue/24/solid";

defineProps({
  id: [String, Number],
  title: String,
  poster: String,
  overview: String
})
</script>

<template>
  <div class="h-full w-full relative left-1/2 top-0 -translate-x-1/2">
    <img :src="poster" alt="" class="w-full h-full object-cover bg-center rounded-md ">
    <div class="rounded py-6 px-4 absolute bg-black/40 backdrop-blur-[4px] sm:bottom-8  sm:left-8  sm:max-w-[60%]
      flex flex-col justify-between gap-4">
      <div class="break-words">
        <h1 class="title text-lg mb-2 font-semibold ">{{ title }}</h1>
        <p class="desc text-white/90 text-sm">{{ overview }}</p>
      </div>
      <div class="flex justify-between items-center gap-1">
        <button class="rounded bg-rose-600 px-4 py-2 text-sm w-fit font-medium ">Watch</button>
        <div class="flex items-center gap-1">
          <StarIcon class="w-6 text-yellow-400" />
          <span class="text-xl font-medium">7.2</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  box-orient: vertical;
}

.desc {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  line-clamp: 4;
  box-orient: vertical;
}
</style>