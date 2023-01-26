<script setup>
import { computed } from "@vue/runtime-core";
import MovieCard from "./MovieCard.vue";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
const props = defineProps({
  typeSearch: {
    type: String,
    default: "Latest",
  },
  emoji: String,
  arrMovies: {
    type: Array,
    default: () => [],
  },
});

const limitedArrMovies = computed(() => props.arrMovies.splice(0, 5));
</script>

<template>
  <div class="w-full py-4 ">
    <div class="flex items-center  mb-6">
      <div>
        <h2 class="text-3xl font-semibold block">
        <span>{{ emoji }}</span
        >{{ typeSearch }}
      </h2>
      </div>
      <router-link to="/home"
        ><component
          :is="ChevronRightIcon"
          class="h-8 block font-semibold text-rose-600"
      /></router-link>
    </div>
    <div class="grid grid-cols-5 gap-2 justify-items-stretch w-full">
      <movie-card
        v-for="(movie, idx) in limitedArrMovies"
        :key="idx"
        title="Puss in boots"
        release-year="2023"
        poster="https://www.citimuzik.com/wp-content/uploads/2023/01/Aq2NA65YKzJ.jpg"
      ></movie-card>
    </div>
  </div>
</template>