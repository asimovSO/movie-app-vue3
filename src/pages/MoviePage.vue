<script setup>
import { useRoute } from "vue-router";
import { StarIcon } from "@heroicons/vue/24/solid";
import { useMovieStore } from "../stores/useMovieStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const route = useRoute();
const store = useMovieStore();
const { movie } = storeToRefs(store);

onMounted(async () => {
  store.getSingleMovie(route.params.id);
});
</script>

<template>
  <div v-if="movie">
    <section class="flex justify-start gap-6">
      <div class="poster h-96 flex-shrink-0">
        <img
          class="h-full"
          :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
          alt=""
        />
      </div>
      <div class="info-movie">
        <h1 class="font-bold text-4xl mb-2">{{ movie.title }}</h1>
        <p class="text-gray-700 text-lg mb-10">{{ movie.tagline }}</p>
        <div class="inline-flex items-center">
          <div
            class="inline-flex gap-1 text-gray-100 rounded-sm bg-rose-500 px-2 mr-3"
          >
            <StarIcon class="text-yellow-200 w-4" />
            <span class="font-medium text-lg">{{ movie.vote_average }}</span>
          </div>
        </div>
        <div class="genres flex py-4">
          <Chip v-for="genre in movie.genres" :key="genre.id">{{
            genre.name
          }}</Chip>
        </div>
        <div class="overview md:max-w-[80%]">
          <p>{{ movie.overview }}</p>
        </div>
      </div>
    </section>
    <section class="trailer-section"></section>
  </div>
  <div class="text-lg" v-else>Loading...</div>
</template>
