<script setup>
import { onMounted, ref } from "vue";
import HomeSectionRow from "../components/HomeSectionRow.vue";
import TrendingSlider from "../components/TrendingSlider.vue";
import { useMovieStore } from "../stores/useMovieStore";
import { storeToRefs } from "pinia";


</script>

<template>
  <main class="">
    <TrendingSlider />
    <!-- <HomeSectionRow key="1" typeSearch="popular" emoji="⚡" />
    <HomeSectionRow key="2" typeSearch="upcoming" emoji="🎬"/> -->
  </main>
</template>