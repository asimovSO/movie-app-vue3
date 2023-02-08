

<script setup>
import HomeSectionRow from "../components/HomeSectionRow.vue";
import TrendingSlider from "../components/TrendingSlider.vue";


</script>

<template>
  <main class="">
    <TrendingSlider />
    <HomeSectionRow key="1" typeSearch="popular" emoji="⚡" />
    <HomeSectionRow key="2" typeSearch="upcoming" emoji="🎬"/>
  </main>
</template>