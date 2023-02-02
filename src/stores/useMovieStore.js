import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { instance, api_key } from "../service/api";

export const useMovieStore = defineStore("movies", () => {
  const singleMovieData = ref();

  const moviesData = ref();

  function getSingleMovie(id) {
    instance
      .get(`/movie/${id}?api_key=${api_key}`)
      .then((res) => (singleMovieData.value = res.data));
  }

  function getMovies(type, page) {
    instance
      .get(`movie/${type}?page=${page}&api_key=${api_key}`)
      .then((res) => (moviesData.value = res.data));
  }

  const movie = computed(() => singleMovieData.value);
  const movies = computed(() => moviesData.value);

  return { singleMovieData, movie, movies, getMovies, getSingleMovie };
});
