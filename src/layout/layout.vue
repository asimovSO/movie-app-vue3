<template>
    <div class="flex">
        <Navbar />
        <slot>
            <router-view></router-view>
        </slot>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>
