<script setup>
import { onMounted, ref } from "vue";
import HomeSectionPreview from "../components/HomeSectionPreview.vue";
import TrendingSlider from "../components/TrendingSlider.vue";

const cond = ref(false)

onMounted(() => cond.value = true)
</script>

<template>
  <main class="" >
   <TrendingSlider v-if="cond"/>
    <!-- <home-section-preview
      typeSearch="Popular"
      emoji="⚡"
      :arrMovies="[1, 2, 3, 4, 5]"
    ></home-section-preview>
    <home-section-preview
      typeSearch="Latest"
      emoji="⚡"
      :arrMovies="[1, 2, 3, 4, 5]"
    ></home-section-preview> -->
  </main>
</template>