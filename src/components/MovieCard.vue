<script setup>
defineProps({
    title: String,
    releaseYear: String,
    poster: String
})
</script>

<template>
    <div class="w-full">
        <img class="w-full " :src="poster" alt="" >
        <h4>{{title }}</h4>
        <p>{{ releaseYear }}</p>
    </div>
</template>