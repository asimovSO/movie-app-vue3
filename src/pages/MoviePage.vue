<script setup>
import { onMounted, toRef } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import useFetchData from "../hooks/useFetchData";
import { StarIcon } from "@heroicons/vue/24/solid";

const route = useRoute();
const { result } = useFetchData(1, route.params.id);
</script>

<template>
  <div v-if="result">
    <section class="flex justify-start gap-6 ">
      <div class="poster h-96 flex-shrink-0">
        <img
          class="h-full "
          :src="'https://image.tmdb.org/t/p/original' + result.poster_path"
          alt=""
        />
      </div>
      <div class="info-movie">
        <h1 class="font-bold text-4xl mb-2">{{ result.original_title }}</h1>
        <p class="text-gray-700 text-lg mb-5">{{ result.tagline }}</p>
        <div
          class="inline-flex  items-center"
        >
          <div class="inline-flex gap-1 text-gray-100 rounded-sm bg-rose-500 px-1 mr-3">
            <StarIcon class="text-yellow-200 w-4" />
            <span class="font-medium text-lg">{{ result.vote_average }}</span>
          </div>
         
        </div>
        <div class="genres flex py-4">
          <Chip v-for="genre in result.genres" :key="genre.id">{{ genre.name }}</Chip>
        </div>
        <div class="overview">
        <p>{{ result.overview }}</p>
      </div>
      </div>
      
    </section>
    <section class="trailer-section"></section>
  </div>
</template>