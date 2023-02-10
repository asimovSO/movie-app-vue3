<script setup>
import { computed, onMounted } from "vue";
import MovieCard from "./MovieCard.vue";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import useFetchMovies from "../composables/useFetchMovie";

const props = defineProps({
  typeSearch: {
    type: String,
    default: "popular",
  },
  emoji: String,
  arrayMovies: [Array, Object]
});

const {varMovies, getFetchedMovies} = useFetchMovies()

onMounted(async() => await getFetchedMovies(props.typeSearch))
</script>

<template>
  <div class="w-full py-8 " v-if="varMovies">
    <router-link :to="{name: 'movies', params: {type: props.typeSearch}}">
      <div class="flex items-center mb-8 hover:translate-x-2 active:translate-x-2 transition-all">
      <div>
        <h2 class="text-2xl font-semibold block capitalize first-letter:uppercase">
          <span class="mr-2">{{ emoji }}</span>{{ typeSearch }}
        </h2>
      </div>
      
        <component :is="ChevronRightIcon" class="h-6 block font-semibold text-rose-600" />
    </div>
    </router-link>
    <div class="grid md:grid-cols-6 grid-cols-2 sm:grid-cols-3 md:gap-x-8  gap-x-4 gap-y-8 w-full">
      <movie-card v-for="(mov, idx) in varMovies.results.slice(0, 12)" :id="mov.id" :key="mov.id" :title="mov.title"
        :releaseYear="mov.release_date" :poster="mov.poster_path"></movie-card>
    </div>
  </div>
</template>