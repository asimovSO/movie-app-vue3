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
  <div class="h-full w-[890px] relative left-1/2 top-0 -translate-x-1/2">
    <img :src="poster" alt="" class="w-full h-full object-cover bg-center rounded ">
    <div class="rounded py-6 px-4 absolute bg-black/40 backdrop-blur-[2px] top-1/2 left-8 translate-y-[-50%] h-64 max-w-[50%]
      flex flex-col justify-between gap-4">
      <div>
        <h1 class="text-2xl mb-4 font-bold">{{ title }}</h1>
        <p class="desc text-white/90 text-base">{{ overview }}</p>
      </div>
      <div class="flex justify-between items-center gap-2">
        <button class="rounded bg-rose-600 px-4 py-2 w-fit font-medium">Watch</button>
        <div class="flex items-center gap-1">
          <StarIcon class="w-6 text-yellow-400" />
          <span class="text-xl font-medium">7.2</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-overflow: ellipsis;
  overflow-x: hidden;
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