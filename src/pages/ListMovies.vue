<script setup>
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import MovieCard from "../components/MovieCard.vue";
import { useMovieStore } from "../stores/useMovieStore";
import { storeToRefs } from "pinia";

const route = useRoute();

const store = useMovieStore();
const { movies } = storeToRefs(store);

onMounted(async () => {
  store.getMovies(route.params.type, route.query.page || 1);
});

watch(route, () => store.getMovies(route.params.type, route.query.page));
</script>

<template>
  <div v-if="movies">
    <div class="grid grid-cols-6">
      <MovieCard v-for="movie in movies.results" :key="movie.id" :id="movie.id" :title="movie.original_title"
        :release-year="movie.release_date" :poster="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" />
    </div>
    <button @click="navigateNext">NEXT</button>
    <!-- <button @click="goNext" >Next</button> -->
    <Pagination :total_pages="movies.total_pages" :currPage="route.query.page || 1" />
  </div>
  <div v-else>Loading...</div>
</template>