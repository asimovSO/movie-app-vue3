<template>
  <div class="sm:flex sm:flex-col-reverse md:flex-row h-screen overflow-hidden">
    <Navbar />
    <div class="overflow-auto py-8 px-6 h-screen flex-grow">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>
