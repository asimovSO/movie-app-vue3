<template>
  <div
    class="w-full h-[200px] border-2 border-rose-600/50 rounded-md gap-4 flex justify-between"
  >
    <router-link :to="{ name: 'moviePage', params: { id: id } }">
      <div class="flex gap-4 h-full">
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + poster"
          alt=""
          class="h-full object-cover"
        />
        <div class="title text-xl font-medium py-2 w-fit">{{ title }}</div>
      </div>
    </router-link>
    <button
      @click.stop="store.deleteFavoriteMovie(id)"
      class="block p-4 self-center"
    >
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
