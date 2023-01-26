<template>
    <div class="md:flex h-screen overflow-hidden">
        <Navbar />
        <div class="overflow-auto py-8 px-6  flex-grow">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>
