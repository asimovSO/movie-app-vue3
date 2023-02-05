<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();

const props = defineProps({
  id: [String, Number],
  title: String,
  releaseYear: String,
  poster: String,
});

const formatedDate = computed(() => props.releaseYear.slice(0, 4));
</script>

<template>
  <router-link
    :to="{
      name: 'moviePage',
      params: { type: route.params.type || 'popular', id: id },
    }"
  >
    <div class="w-full">
      <img class="w-full rounded h-fit" :src="'https://image.tmdb.org/t/p/w500/' + poster" alt="" />

      <h4 class="title font-medium text-lg my-2">{{ title }}</h4>

      <p class="text-sm text-gray-500">{{ formatedDate }}</p>
    </div>
  </router-link>
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
