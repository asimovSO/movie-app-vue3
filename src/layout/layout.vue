<template>
    <div class="md:flex h-screen overflow-hidden">
        <!-- <Navbar /> -->
        <div class="overflow-auto py-8 px-6  flex-grow">
        <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>
