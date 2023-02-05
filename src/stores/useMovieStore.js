import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { instance, api_key } from "../service/api";

export const useMovieStore = defineStore("movies", () => {
  const singleMovieData = ref();
  const trendingMoviesData = ref();
  const moviesData = ref();

  function getSingleMovie(id) {
    singleMovieData.value = null;
    instance
      .get(`/movie/${id}?api_key=${api_key}`)
      .then((res) => (singleMovieData.value = res.data));
  }

  async function getMovies(type, page) {
    moviesData.value = null
    await instance
      .get(`movie/${type}?page=${page}&api_key=${api_key}`)
      .then((res) => (moviesData.value = res.data));
  }

  function getTrendingMovies() {
    instance(`trending/movie/week?api_key=${api_key}`).then(
      (res) => (trendingMoviesData.value = res.data)
    );
  }

  const movie = computed(() => singleMovieData.value);
  const movies = computed(() => moviesData.value);

  return {
    singleMovieData,
    moviesData,
    movie,
    getMovies,
    getSingleMovie,
    trendingMoviesData,
    getTrendingMovies,
  };
});
