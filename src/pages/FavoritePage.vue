<script setup>
import { ref, onMounted } from "vue";
import FavoriteCard from "../components/FavoriteCard.vue";
import { useMovieStore } from "../stores/useMovieStore";
// console.log(localStorage.getItem('favorites_movies'));
const store = useMovieStore()
const favMovies = ref()

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <FavoriteCard
      v-for="fav in store.favoriteMoviesData"
      :key="fav.id"
      :id="fav.id"
      :poster="fav.poster"
      :title="fav.title"
    >
    </FavoriteCard>
  </div>
</template>
