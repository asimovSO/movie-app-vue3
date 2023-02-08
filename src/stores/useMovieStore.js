import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { instance, api_key } from "../service/api";

export const useMovieStore = defineStore("movies", () => {
  const singleMovieData = ref();
  const trendingMoviesData = ref();
  const moviesData = ref();
  const favoriteMoviesData = ref(JSON.parse(localStorage.getItem('favorites_movies')));

  function setFavoriteMovies(id, title, poster) {
    favoriteMoviesData.value.push({
      id,
      poster,
      title,
    });
    localStorage.setItem(
      "favorites_movies",
      JSON.stringify(favoriteMoviesData.value)
    );
    console.log(localStorage.getItem('favorites_movies'))
  }

  function deleteFavoriteMovie(id){
    let favMovies = JSON.parse(localStorage.getItem('favorites_movies'))
    favMovies = favMovies.filter(item => item.id != id)
    localStorage.setItem('favorites_movies', JSON.stringify(favMovies))
    favoriteMoviesData.value = JSON.parse(localStorage.getItem('favorites_movies'))
  }

  function getSingleMovie(id) {
    singleMovieData.value = null;
    instance
      .get(`/movie/${id}?api_key=${api_key}`)
      .then((res) => (singleMovieData.value = res.data));
  }

  async function getMovies(type, page) {
    moviesData.value = null;
    await instance
      .get(`movie/${type}?page=${page}&api_key=${api_key}`)
      .then((res) => (moviesData.value = res.data));
  }

  function getTrendingMovies() {
    instance(`trending/movie/week?api_key=${api_key}`).then(
      (res) => (trendingMoviesData.value = res.data)
    );
  }

  // function setFavoriteMovies(id, title, poster){
  //   let existingEntries = JSON.parse(localStorage.getItem("favorite_movies"));
  //   if(existingEntries == null) existingEntries = [];
  //   let entryTitle = title
  //   let entryId = id
  //   let entryPoster = poster
  //   let entry = {
  //       "id": entryId,
  //       "title": entryTitle,
  //       "poster": `'https://image.tmdb.org/t/p/w500/' + ${entryPoster}`
  //   };
  // localStorage.setItem("entry", JSON.stringify(entry));
  // Save allEntries back to local storage
  //   existingEntries.push(entry);
  //   localStorage.setItem("favorite_movies", JSON.stringify(existingEntries));
  // }

  const movie = computed(() => singleMovieData.value);
  const movies = computed(() => moviesData.value);
  const favoriteMovies = computed(() => favoriteMoviesData);
  const trendingMovies = computed(() =>
    trendingMoviesData.value.results.slice(0, 10)
  );

  return {
    singleMovieData,
    moviesData,
    movie,
    movies,
    trendingMovies,
    favoriteMoviesData,
    getMovies,
    getSingleMovie,
    trendingMoviesData,
    getTrendingMovies,
    setFavoriteMovies,
    deleteFavoriteMovie
  };
});
