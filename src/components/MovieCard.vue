<script setup>
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import { useMovieStore } from "../stores/useMovieStore";
import { BookmarkIcon } from "@heroicons/vue/24/outline";
import { BookmarkIcon as BookmarkSolid } from "@heroicons/vue/24/solid";

const route = useRoute();
const store = useMovieStore();
const props = defineProps({
  id: [String, Number],
  title: String,
  releaseYear: String,
  poster: String,
});

const stateBtn = ref(false);

const formatedDate = computed(() => props.releaseYear.slice(0, 4));

function doAddFavorite() {
  store.setFavoriteMovies(
    (props.id),
    (props.title),
    (props.poster)
  );
  stateBtn.value = true;
}
</script>

<template>
  <div class="relative">
    <button
      @click.once.stop="doAddFavorite"
      class="absolute top-2 left-2 p-2 rounded bg-gray-700/80"
    >
      <component class="w-4 h-4 text-white" :is="stateBtn ? BookmarkSolid : BookmarkIcon"></component>
    </button>
    <router-link
      :to="{
        name: 'moviePage',
        params: { id: id },
      }"
    >
      <div class="w-full h-full">
        <img
          class="w-full rounded h-fit alt"
          :src="'https://image.tmdb.org/t/p/w500/' + poster"
          alt="not found"
          loading="lazy"
        />

        <h4 class="title font-medium text-lg my-2">{{ title }}</h4>

        <p class="text-sm text-gray-500">{{ formatedDate }}</p>
      </div>
    </router-link>
  </div>
</template>
<style scoped>
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  box-orient: vertical;
}
</style>
