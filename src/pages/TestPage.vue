

<script setup>
import { useTest } from '../hooks/useTest';

const {test, addF} = useTest()
</script>

<template>
    <div>
        <div class="text-lg">{{ test }}</div>
        <button @click="addF">+</button>
    </div>
</template>