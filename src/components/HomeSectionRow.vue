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
console.log(varMovies);
</script>

<template>
  <div class="w-full py-8 " v-if="varMovies">
    <div class="flex items-center mb-8">
      <div>
        <h2 class="text-2xl font-semibold block capitalize first-letter:uppercase">
          <span>{{ emoji }}</span>{{ typeSearch }}
        </h2>
      </div>
      <router-link to="/home">
        <component :is="ChevronRightIcon" class="h-6 block font-semibold text-rose-600" />
      </router-link>
    </div>
    <div class="grid grid-cols-6 md:gap-x-16 gap-y-8 w-full">
      <movie-card v-for="(mov, idx) in varMovies.results.slice(0, 6)" :id="mov.id" :key="mov.id" :title="mov.title"
        :releaseYear="mov.release_date" :poster="mov.poster_path"></movie-card>
    </div>
  </div>
</template>