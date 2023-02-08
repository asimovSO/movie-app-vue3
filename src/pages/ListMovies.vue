<script setup>
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import MovieCard from "../components/MovieCard.vue";
import { useMovieStore } from "../stores/useMovieStore";
import { storeToRefs } from "pinia";

const route = useRoute();

const store = useMovieStore();
const { movies } = storeToRefs(store);

onMounted( () => {
  store.getMovies(route.params.type || 'popular', route.query.page || 1);
});

watch(route, () => store.getMovies(route.params.type || 'popular', route.query.page));
</script>

<template>
  <div v-if="movies">
    <div class="grid grid-cols-5 gap-8">
      <MovieCard v-for="movie in movies.results" :key="movie.id" :id="movie.id" :title="movie.title"
        :release-year="movie.release_date" :poster="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" />
    </div>
    <!-- <button @click="goNext" >Next</button> -->
    <div class="flex justify-center w-full">
    <Pagination :total_pages="movies.total_pages" :currPage="route.query.page || 1" />
    </div>
  </div>
  <div v-else>Loading...</div>
</template>