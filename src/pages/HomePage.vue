<script setup>
import TrendingComponent from "../components/TrendingComponent.vue";
import HomeSectionPreview from "../components/HomeSectionPreview.vue";
</script>

<template>
  <main class="">
    <trending-component></trending-component>
    <home-section-preview
      typeSearch="Popular"
      emoji="⚡"
      :arrMovies="[1, 2, 3, 4, 5]"
    ></home-section-preview>
    <home-section-preview
      typeSearch="Latest"
      emoji="⚡"
      :arrMovies="[1, 2, 3, 4, 5]"
    ></home-section-preview>
  </main>
</template>