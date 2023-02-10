<template>
  <div
    class="w-full h-[200px]  border-2 border-rose-600 rounded-md mr-4 flex justify-between"
  >
    <router-link
      :to="{ name: 'moviePage', params: {  id: id } }"
    >
      <div class="flex gap-4 h-full">
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + poster"
          alt=""
          class="block h-full object-cover max-w-[250px] -z-10"
        />
        <div class="title text-xl font-medium py-2">{{ title }}</div>
      </div>
    </router-link>
    <button @click.stop="store.deleteFavoriteMovie(id)" class="p-4 self-center">
      <XMarkIcon class="text-rose-600 w-6" />
    </button>
  </div>
</template>
<script setup>
import { useMovieStore } from "../stores/useMovieStore";
import { XMarkIcon } from "@heroicons/vue/24/outline";
const store = useMovieStore();

defineProps({
  id: Number,
  title: String,
  poster: String,
});
</script>
