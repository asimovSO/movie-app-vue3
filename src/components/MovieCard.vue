<script setup>


defineProps({
    id: [String, Number],
    title: String,
    releaseYear: String,
    poster: String
})
</script>

<template>
    <div class="w-full">
        <img class="w-full " :src="poster" alt="" >
        <router-link :to="{name: 'moviePage', params: {id: id}}"><h4>{{ title }}</h4></router-link>
        <p>{{ releaseYear }}</p>
    </div>
</template>