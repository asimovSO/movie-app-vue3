<script setup>
import { useRoute, useRouter } from "vue-router";
import { useSelectMovStore } from "../stores/useSelectMovStore";
import { ref, watch, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import usePagination from "../hooks/usePagination";

const route = useRoute();
const router = useRouter();


const selectOptions = ref([
  {
    name: 'Popular',
    value: 'popular'
  },
  {
    name: 'Upcoming',
    value: 'upcoming'
  }
])

const {fetchMovies} = usePagination()

function pushPage(val){
  router.push({ name: 'moviesType', params: {type: val}, query: {page: 1}})
  fetchMovies()
}

</script>
<template>
  <div class="select">
    <div
      :class="[route.params.type == select.value ? 'text-rose-600' : '']"
      v-for="select in selectOptions"
      :key="select.value"
      @click="pushPage(select.value)"
      >
      {{ select.name }}
    </div>
  </div>
</template>