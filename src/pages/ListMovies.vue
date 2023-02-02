<script setup>
import { onMounted, onUpdated, watch, watchEffect } from "@vue/runtime-core";
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieCard from "../components/MovieCard.vue";
import SelectMovies from "../components/SelectMovies.vue";
import usePagination from "../hooks/usePagination";
import { useMovieStore } from "../stores/useMovieStore";
import { storeToRefs } from "pinia";

const test = ref(0);
const route = useRoute()

const store = useMovieStore()
const {movies} = storeToRefs(store)

onMounted(async() => {
  store.getMovies(route.params.type, route.query.page || 1)
})

</script>

<template>
  <div v-if="movies">
    
    <div class="grid grid-cols-6">
      <MovieCard
        v-for="movie in movies.results"
        :key="movie.id"
        :id="movie.id"
        :title="movie.original_title"
        :release-year="movie.release_date"
        :poster="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
      />
    </div>
    <!-- <button @click="goNext" >Next</button>
    <Pagination :goNext="goNext" :currPage="currPage" :total_pages="result.total_pages"/> -->
  </div>
  <div v-else>Loading...</div>
  
</template>