<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import MovieCard from "../components/MovieCard.vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { api_key, instance } from "../service/api";

const route = useRoute();
const router = useRouter();

const query = ref("" || route.query.q);
const notFound = ref(false);
const arrResultsMovies = ref([]);

const getQueryMovie = async () => {
  if (!query.value) {
    return;
  } else {
    router.push({ query: { q: query.value } });
    const response = await instance.get(
      `/search/movie?api_key=${api_key}&query=${query.value}`
    );
    response.data.results.length == 0
      ? (notFound.value = true)
      : (notFound.value = false);
    arrResultsMovies.value = response.data;
    query.value = "";
  }
};

onMounted(() => getQueryMovie())
</script>

<template>
  <div>
    <div class="w-full flex items-stretch justify-center">
    <div class="max-w-[600px] flex items-stretch gap-2 flex-grow mb-4">
      <input
        type="text block "
        v-model="query"
        class="rounded outline-none flex-grow px-2 bg-gray-900 text-lg font-light"
        @keypress.enter="getQueryMovie"
      />
      <button
        class="bg-rose-600 py-2 px-4 rounded block"
        @click="getQueryMovie"
        
      >
        <MagnifyingGlassIcon class="w-6 h6 text-white" />
      </button>
    </div>
  </div>
  <div v-if="route.query.q && !notFound" class="my-4 text-xl">
    Results on request: <span class="font-semibold">{{ route.query.q }}</span>
  </div>
  <div class="grid grid-cols-4 gap-16">
    <MovieCard
      v-for="mov in arrResultsMovies.results"
      :key="mov.id"
      :id="mov.id"
      :title="mov.title"
      :release-year="mov.release_date"
      :poster="mov.poster_path"
    />
  </div>
  <div v-if="notFound == true" class="text-xl font-medium my-4">Nothing found</div>
  </div>
</template>
